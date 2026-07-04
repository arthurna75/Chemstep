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
- 텍스트 레이블과 도형이 겹치지 않도록 **충분한 여백** 확보
- 제목: `y={20}`, 범례: SVG 하단 또는 오른쪽 패널
- 색상: 파랑(#3B82F6), 빨강(#EF4444), 초록(#22C55E), 회색(#94A3B8)
- `aria-label` 속성 필수

### Step 5 — illustrations/index.ts 업데이트
`src/components/lessons/illustrations/index.ts`에 새 레슨 제목 → 컴포넌트 매핑 추가:
```typescript
import NewDiagram from './NewDiagram'
// LESSON_ILLUSTRATIONS에 추가:
'<레슨 제목>': NewDiagram,
```

### Step 6 — 빌드 검증
```bash
npm run build
```
TypeScript 오류 없이 통과해야 한다.

### Step 7 — git 커밋 & push
```bash
git add src/components/lessons/illustrations/ supabase/ src/components/lessons/illustrations/index.ts
git commit -m "feat: <단원 제목> 단원 콘텐츠 및 SVG 일러스트 추가"
git push
```

### Step 8 — Supabase SQL 실행 안내
사용자에게 다음을 안내:
> Supabase SQL Editor에 `supabase/seed_<슬러그>.sql` 내용을 붙여넣고 실행하세요.

---

## 체크리스트
- [ ] 레슨 5개, 각 레슨 퀴즈 2~3개
- [ ] `key_formulas`, `examples` JSON 스키마 준수
- [ ] SVG 텍스트·도형 겹침 없음
- [ ] `illustrations/index.ts` 매핑 추가
- [ ] `npm run build` 통과
- [ ] git push 완료
