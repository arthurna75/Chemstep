# /new-chapter

새 단원(Chapter)의 콘텐츠를 추가한다.
인자: `/new-chapter <단원 제목>` (예: `/new-chapter 화학 결합`)

---

## 작업 순서

### Step 1 — DB에서 chapter_id 확인
```sql
SELECT id, title FROM chapters ORDER BY order_index;
```
`$ARGUMENTS` 단원의 id를 확인한다.

### Step 2 — 레슨 설계
다음 기준으로 레슨 5개를 설계한다:
- 고등학교 화학I 2015 개정 교육과정 범위
- `order_index` 1~5, 각 레슨은 **기초 → 심화** 흐름
- 각 레슨: `content`, `key_formulas`(JSON), `examples`(JSON), `analogy`
- 각 레슨에 퀴즈 2~3개, 퀴즈마다 선택지 4개

#### `content` 본문 작성 규칙
- 절 구분은 `■ 절 제목` 형식을 사용한다 (프론트엔드가 이를 소제목으로 렌더링한다).
- 각 `■` 절에서 처음 등장하는 핵심 개념어 1~3개는 `**핵심 용어**` 형식으로 굵게 표시한다. 문장마다 남발하지 말고 절당 1~3개로 제한한다.
- 두 개 이상의 항목을 비교/대응시키는 나열(예: 원소→성질, 원소→원자가 전자 수, 반응 유형→일반식, 물질→끓는점 등)은 `content`에 불릿(`-`) 목록으로 늘어놓지 말고 한 줄 요약만 남기고, 상세 데이터는 Step 4-2의 `ChemTable`로 옮긴다.

### Step 3 — SQL 시드 파일 생성
파일 경로: `supabase/seed_<챕터_슬러그>.sql`

SQL 구조 템플릿:
```sql
DO $$
DECLARE
  v_chapter_id uuid;
  v_lesson1_id uuid;
  -- ... v_lesson5_id
  v_quiz_id    uuid;
BEGIN
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '<단원 제목>';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- LESSON 1
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (v_chapter_id, '<레슨 제목>', '<내용>', '<JSON>'::jsonb, '<JSON>'::jsonb, '<비유>', 1)
  RETURNING id INTO v_lesson1_id;

  -- Quiz + Options (RETURNING id INTO v_quiz_id 패턴)

  RAISE NOTICE '삽입 완료: 레슨 5개';
END $$;
```

key_formulas JSON 스키마:
```json
[{"label": "...", "formula": "...", "description": "..."}]
```

examples JSON 스키마:
```json
[{"problem": "...", "solution": "..."}]
```

### Step 4 — SVG 일러스트 생성
각 레슨 중 시각화 효과가 큰 레슨에 SVG 컴포넌트를 만든다.
파일 경로: `src/components/lessons/illustrations/<ComponentName>.tsx`

SVG 설계 원칙:
- `viewBox`는 콘텐츠에 맞게 설정 (보통 `0 0 440 360`)
- 제목: `y={20}`, 범례: SVG 하단 또는 오른쪽 패널
- 색상: 파랑(#3B82F6), 빨강(#EF4444), 초록(#22C55E), 회색(#94A3B8)
- `aria-label` 속성 필수

**텍스트·도형 겹침 방지 (중요 — 실제로 자주 겹치는 패턴)**:
- 같은 `y`좌표에 두 개 이상의 `<text>`를 두지 않는다. 특히 제목과 흐름 표시 라벨(예: "e⁻ →")을 같은 행에 배치하지 말 것 — 한글+영문이 섞인 텍스트는 실제 렌더 폭이 예상보다 넓어 옆 라벨과 쉽게 겹친다.
- 텍스트의 `x`가 선/원/화살표 등 도형의 `x`(또는 `cx`)와 일치하고 `y` 범위까지 겹치면 반드시 시각적으로 겹친다. 이런 경우 라벨을 도형 옆으로 15~20px 오프셋하거나, 도형이 지나가는 `y` 범위 바깥으로 옮긴다.
- 불투명한 도형(막대, 전극, 박스 등)이 JSX에서 라벨보다 **나중에** 그려지면 그 도형이 라벨 위를 덮어버린다. 라벨은 반드시 그 도형의 bounding box(`x`~`x+width`, `y`~`y+height`) 바깥에 배치하거나, 도형 내부에 넣을 라벨이라면 배경과 대비되는 색으로 그 도형 안쪽 좌표에 배치한다.
- 각 `<text>`를 배치하기 전에 대략적인 바운딩 박스(가로 ≈ 글자 수 × fontSize × 0.6~1.0, 세로 ≈ fontSize)를 어림 계산해서 다른 텍스트·도형의 박스와 겹치지 않는지 확인한다.

### Step 5 — illustrations/index.ts 업데이트
`src/components/lessons/illustrations/index.ts`에 새 레슨 제목 → 컴포넌트 매핑 추가:
```typescript
import NewDiagram from './NewDiagram'
// LESSON_ILLUSTRATIONS에 추가:
'<레슨 제목>': NewDiagram,
```

### Step 6 — 행렬표(ChemTable) 시각자료 생성
Step 2에서 `content`로부터 빼낸 비교/대응 데이터를 실제 행렬표로 만든다.
- `src/components/ui/ChemTable.tsx`를 사용한다: `{headers: string[], rows: string[][], caption?: string, highlightCol?: number}`
- 레슨별 표는 `src/components/lessons/visuals/<챕터_슬러그>/Lesson<N><설명>Visuals.tsx`에 작성한다 (기존 `visuals/periodic/` 폴더 패턴 참고). 한 컴포넌트에 `ChemTable` 1~3개를 조합해도 된다.
- 레슨 주제가 주기율표 위치와 관련이 있다면 `PeriodicTableMini`(`src/components/ui/PeriodicTableMini.tsx`)도 함께 배치할 수 있다.
- `src/components/lessons/visuals/index.ts`의 `LESSON_VISUALS`에 레슨 제목 → 컴포넌트 매핑을 추가한다.
- **레슨마다 SVG 일러스트(Step 4) + ChemTable 기반 Visuals(Step 6) 중 최소 하나는 반드시 존재해야 하며, 비교/대응 데이터가 있는 레슨은 둘 다 갖추는 것을 원칙으로 한다.**

### Step 7 — 빌드 검증
```bash
npm run build
```
TypeScript 오류 없이 통과해야 한다.

### Step 8 — git 커밋 & push
```bash
git add src/components/lessons/illustrations/ src/components/lessons/visuals/ supabase/ src/components/lessons/illustrations/index.ts src/components/lessons/visuals/index.ts
git commit -m "feat: <단원 제목> 단원 콘텐츠 및 SVG 일러스트 추가"
git push
```

### Step 9 — Supabase SQL 실행 안내
사용자에게 다음을 안내:
> Supabase SQL Editor에 `supabase/seed_<슬러그>.sql` 내용을 붙여넣고 실행하세요.

---

## 체크리스트
- [ ] 레슨 5개, 각 레슨 퀴즈 2~3개
- [ ] `key_formulas`, `examples` JSON 스키마 준수
- [ ] SVG 텍스트·도형 겹침 없음 (각 텍스트 바운딩 박스 기준으로 확인 — 제목/흐름 라벨 동일 행 배치, 라벨-도형 x좌표 일치, 라벨보다 나중에 그려지는 불투명 도형 등 주의)
- [ ] `illustrations/index.ts` 매핑 추가
- [ ] 핵심 용어 `**bold**` 표시 완료
- [ ] 대응/비교 데이터는 텍스트 목록 대신 `ChemTable`로 표현
- [ ] 레슨마다 SVG 일러스트 + `ChemTable` 기반 Visuals 존재 확인
- [ ] `visuals/index.ts` 매핑 추가
- [ ] `npm run build` 통과
- [ ] git push 완료
