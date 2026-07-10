# Chemstep 관리 문서

프로젝트 오너가 반복적으로 챙겨야 하는 항목을 정리한 운영 문서입니다. 코드 세부사항이 아니라 "무엇을 설정하고, 무엇을 점검하고, 무엇이 위험한지"에 초점을 둡니다. 시각적으로 보고 싶다면 같은 내용을 담은 [manager.html](manager.html)을 브라우저로 열어보세요.

## 0. 한눈에 보기

- **스택**: Next.js(App Router) + Supabase(Postgres, Auth) + Vercel(호스팅/배포)
- **저장소**: `github.com/arthurna75/Chemstep`, `main` 브랜치
- **관리자 UI 없음**: 콘텐츠 발행/스키마 변경은 전부 Supabase SQL Editor에서 SQL을 직접 실행하는 방식
- **자동 배포**: `main`에 push하면 즉시 프로덕션 배포(테스트/린트 게이트 없음)

---

## 1. 환경변수 관리

| 변수 | 용도 | 설정 위치 |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase 프로젝트 접속 주소 | Vercel → Project Settings → Environment Variables, 로컬은 `.env.local` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase 익명 접근 키(공개 키, 진짜 시크릿 아님) | 위와 동일 |

- 이 두 개가 전부입니다. 서비스 롤 키나 외부(결제/이메일/AI 등) API 키는 코드 어디에도 없습니다.
- 두 값 다 없어도 앱이 죽지 않고 홈페이지에 "Supabase 연결이 필요합니다" 안내가 뜹니다.
- 값은 Supabase 대시보드 → Project Settings → API에서 확인합니다.

## 2. 데이터베이스 관리

**테이블 구조** (`supabase/schema.sql`): `chapters`(`track` 컬럼으로 `basic`/`advanced` 구분, 기본값 `basic`) → `lessons` → `quizzes` → `quiz_options` (콘텐츠, 전체 공개 읽기), `user_progress` / `user_answers` (본인 데이터만 접근), `guest_codes` (게스트 조회 코드).

**RLS(Row Level Security)**: 모든 테이블에서 활성화되어 있습니다. 콘텐츠 테이블은 누구나 읽기 가능, 진행상황/응답 테이블은 `auth.uid() = user_id`로 본인 것만 접근 가능하도록 정책이 걸려 있습니다.

- [ ] **리스크 — 마이그레이션 추적 없음**: `supabase/` 안에 정식 마이그레이션 폴더/툴이 없습니다. 스키마를 바꾸면 `schema.sql`을 수정하는 것과 별개로, 이미 존재하는 운영 DB에는 `supabase/migration_*.sql` 형태의 파일을 만들어 Supabase SQL Editor에 수동으로 실행해야 반영됩니다(예: `migration_add_chapter_track.sql`). "지금 운영 DB에 무엇이 실제로 반영돼 있는지"를 추적할 방법이 없어, 스키마를 바꿀 때마다 `schema.sql`+마이그레이션 파일을 함께 남기는 습관이 유일한 안전장치입니다.
- [ ] **리스크 — `schema.sql`이 실제 DB 상태와 불일치**: `schema.sql` 안의 시드 INSERT는 기본 트랙 5개 단원만 넣지만, 실제로는 `seed_chapter1.sql` ~ `seed_chapter8_*.sql`까지 8개 단원(기본 트랙) + `seed_quantum_mechanics_basics.sql`/`seed_orbitals_advanced.sql`(심화 트랙 2개 단원) 콘텐츠가 별도로 실행되어 있습니다. 즉 `schema.sql`만 보고 새 환경(예: 스테이징)을 구축하면 5개 단원이 빠지고, `migration_add_chapter_track.sql`도 별도로 실행해야 `track` 컬럼이 생깁니다.
- **시드 파일 현황**: `seed_chapter1.sql`은 구버전, `seed_chapter1_v2.sql`이 최종본입니다(1단원은 v2만 실행하면 됨). 나머지는 챕터당 파일 하나씩. `seed_quantum_mechanics_basics.sql`/`seed_orbitals_advanced.sql`은 `track='advanced'`로 삽입되는 심화과정 챕터입니다.

## 3. 콘텐츠 발행 워크플로우

새 단원/레슨을 추가하거나 기존 콘텐츠를 고칠 때는 `/new-chapter` 스킬(`.claude/commands/new-chapter.md`)이 유일한 공식 절차입니다.

- [ ] 1. Supabase에서 `chapter_id` 확인
- [ ] 2. 레슨 5개 설계 (기초 → 심화, `content`/`key_formulas`/`examples`/`analogy`, 퀴즈 2~3개)
- [ ] 3. `supabase/seed_<슬러그>.sql` 작성
- [ ] 4. 레슨별 SVG 일러스트 컴포넌트 작성
- [ ] 5. `illustrations/index.ts`에 매핑 추가
- [ ] 6. 비교 데이터는 `ChemTable` 기반 Visuals 컴포넌트로 (본문에 표/불릿으로 늘어놓지 않음)
- [ ] 7. `npm run build` 통과 확인
- [ ] 8. `git commit && git push` (→ Vercel 자동 배포)
- [ ] 9. **Supabase SQL Editor에 `seed_<슬러그>.sql` 내용을 직접 붙여넣어 실행** — 이 단계를 빠뜨리면 코드는 배포됐는데 콘텐츠는 안 보이는 상태가 됩니다.

**심화 트랙(`track='advanced'`) 챕터를 추가할 때**: `/new-chapter` 스킬은 기본적으로 `track='basic'` 챕터 하나를 새로 만드는 절차입니다. 심화 챕터는 `chapters` INSERT에 `track='advanced'`를 명시하고, `order_index`는 심화 트랙 내에서만 유일하면 됩니다(기본 트랙 번호와 별개 네임스페이스). `getChapters()`/`getNextLessonForUser`/전체 진행률(`buildProgressSummary`)은 기본 트랙(`track='basic'`)만 집계하므로, 심화 챕터를 추가해도 홈의 "이어서 학습하기"나 전체 진행률 %에는 영향을 주지 않습니다 — `/chapters` 페이지의 별도 "🔬 심화과정" 섹션에서만 노출됩니다.

### 본문(`content`) 마크업 문법 치트시트

| 문법 | 결과 |
|---|---|
| `■ 제목` / `■ 제목 (기초\|핵심\|심화)` | 소제목 (+ 난이도 뱃지) |
| `**단어**` | 굵게 |
| `① ② ③ ...` | 번호 목록 |
| `- 항목` / `   - 하위항목` | 불릿 목록 (들여쓰기로 중첩) |
| `※ 설명` | 콜아웃 박스 |
| `{{용어::정의}}` | 클릭하면 펼쳐지는 용어 툴팁 |
| `[텍스트](https://...)` | 외부 링크 |
| `[텍스트](lesson:챕터제목/레슨순번)` | 다른 레슨으로 링크 |
| `[텍스트](chapter:챕터제목)` | 단원 목록으로 링크 |

`↑`/`↓`는 반응식 표기 전용(`H₂↑`)으로만 쓰고, 증가/감소 추세는 단어로 씁니다(파서가 둘을 구분하지 못하기 때문).

## 4. 인증 & 게스트 코드

- 이메일/비밀번호 가입만 지원합니다(OAuth 없음).
- 방문자는 로그인 없이도 익명 계정으로 자동 시작해 학습 진행상황이 쌓입니다.
- `/progress`에서 **게스트 코드**를 발급받아, 로그인 없이 코드만으로 진행상황을 조회할 수 있습니다(`get_progress_by_code` RPC, 읽기 전용).
- [ ] **주의**: 게스트 코드는 사실상 비밀번호처럼 취급해야 합니다 — 코드를 아는 사람은 누구나 그 사용자의 진행상황을 볼 수 있습니다.
- 나중에 회원가입하면 기존 익명 계정이 실제 계정으로 업그레이드되어 진행상황이 유지됩니다.

## 5. 배포 파이프라인

- CI 없음. `main`에 push하는 순간 Vercel이 자동으로 빌드/배포합니다(테스트·린트 게이트 없음).
- [ ] push 전에 로컬에서 `npm run build`(타입 에러 확인)와 `npm run lint`를 직접 돌려보는 것이 사실상 유일한 안전장치입니다.
- 커스텀 도메인/robots.txt/sitemap 설정은 없으며 별도로 관리할 것도 없습니다.
- **AI 작업 정책** (`AGENTS.md`에 명시): Claude가 코드/문서를 변경하면 별도 요청 없이도 관련 문서 갱신 → `npm run build` 검증 → 커밋 → `main` push(배포)까지 기본으로 수행합니다. 특정 변경만 커밋해두고 배포는 미루고 싶다면 그때그때 명시적으로 범위를 좁혀 요청해야 합니다.

## 6. 기능 인벤토리

| 경로 | 내용 |
|---|---|
| `/` | 홈 — 통계, 단원 미리보기, 이어서 학습하기 |
| `/chapters`, `/chapters/[id]` | 단원 목록/상세 — 목록은 "기본 과정"(`track='basic'`, 8단원)과 "🔬 심화과정"(`track='advanced'`, 2단원: 양자역학의 기본 개념/오비탈) 두 섹션으로 분리 표시 |
| `/chapters/[id]/lessons/[id]` | 레슨 본문 (개념/공식/예제/비유) |
| `/chapters/[id]/lessons/[id]/quiz` | 퀴즈 |
| `/login`, `/signup` | 로그인/회원가입 |
| `/progress` | 본인 진행상황 · 게스트 코드 관리/조회 |
| (플로팅 버튼) | 주기율표 뷰어 모달 — 별도 라우트 아님 |

## 7. 알려진 리스크 / 기술부채 체크리스트

- [ ] DB 마이그레이션 추적 시스템 없음 (섹션 2)
- [ ] `schema.sql`이 실제 운영 DB(8단원)와 불일치 (섹션 2)
- [ ] CI/테스트/린트 자동 게이트 없음 — push 즉시 배포 (섹션 5)
- [ ] 콘텐츠 발행에 관리자 UI 없음 — SQL Editor 수동 실행이 유일한 경로 (섹션 3)
- [ ] `README.md`가 아직 `create-next-app` 기본 문구 그대로임 — 신규 협업자 온보딩 시 이 `manager.md`를 대신 참고하도록 안내 필요
- [ ] 심화 트랙(`track='advanced'`) 레슨 완료는 `user_progress`에 기록되지만, 홈의 전체 진행률 %와 "이어서 학습하기"는 기본 트랙만 집계합니다(의도된 범위 제한). 심화 트랙용 별도 진행률 UI가 필요해지면 `buildProgressSummary`/`ChaptersPage`를 확장해야 합니다.

## 8. 정기 점검 체크리스트

- [ ] 새 단원/레슨 배포 후 실제 사이트에서 콘텐츠가 보이는지 확인 (SQL Editor 실행 누락 여부)
- [ ] Supabase 대시보드에서 사용량/쿼터(DB 용량, Auth 사용자 수 등) 확인
- [ ] Vercel 대시보드에서 최근 배포 상태(빌드 실패 여부) 확인
- [ ] 게스트 코드 테이블(`guest_codes`)에 비정상적으로 많은 코드가 생성되고 있지 않은지 확인
- [ ] `schema.sql`과 운영 DB가 계속 동기화되고 있는지(섹션 2 리스크) 주기적으로 재확인
