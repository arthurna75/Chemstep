-- ChemStep: 원자 구조 단원 콘텐츠 v2 (5레슨 — 고등학교 화학I 2015 개정)
-- Supabase SQL Editor에서 실행하세요
-- 주의: 기존 원자 구조 레슨 전부 삭제 후 재삽입합니다

DO $$
DECLARE
  v_chapter_id uuid;
  v_lesson1_id uuid;
  v_lesson2_id uuid;
  v_lesson3_id uuid;
  v_lesson4_id uuid;
  v_lesson5_id uuid;
  v_quiz_id    uuid;
BEGIN

  -- 0. 원자 구조 단원 ID 조회
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '원자 구조';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '원자 구조 단원을 찾을 수 없습니다. schema.sql 시드를 먼저 실행하세요.';
  END IF;

  -- 기존 레슨 삭제 (quiz_options, quizzes는 CASCADE로 함께 삭제)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ════════════════════════════════════════
  -- LESSON 1: 원자의 구성 입자
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '원자의 구성 입자',
    '■ 원자 모형의 역사 (기초)
화학자들은 오랜 연구 끝에 원자의 구조를 밝혀냈습니다.

① 돌턴 (1803): "원자는 더 이상 쪼갤 수 없는 단단한 공이다"
② 톰슨 (1897): 전자(-) 발견 → 양전하 속에 전자가 박힌 "건포도 푸딩 모형"
③ 러더퍼드 (1911): α입자 산란 실험 → 원자 중심에 작고 무거운 원자핵 발견
④ 보어 (1913): 전자는 정해진 궤도에서만 원운동 → 현재 고등학교 기준 모형

■ 원자를 이루는 세 입자 (핵심)

  입자       기호   전하   상대 질량   위치
  ──────────────────────────────────────
  양성자     p⁺     +1     1          원자핵 내부
  중성자     n⁰      0     1          원자핵 내부
  전자       e⁻     −1     1/1836≈0   전자 껍질(궤도)

■ 원자의 크기 (심화)
- 원자 반지름: 약 10⁻¹⁰ m (= 1 Å, 옹스트롬)
- 원자핵 반지름: 약 10⁻¹⁵ m (원자의 10만분의 1)
- 원자 내부의 대부분(99.99%)은 빈 공간!
- 마치 서울시 크기(원자)에 작은 구슬 하나(원자핵)가 있는 것과 같음

■ 중성 원자의 전하 균형
중성 원자에서는 양성자 수(+) = 전자 수(−) 이므로 전체 전하 = 0',
    '[
      {"label": "원자 번호 (Z)", "formula": "Z = 양성자 수", "description": "원소의 종류를 결정. 같은 원소는 항상 동일한 Z를 가짐"},
      {"label": "질량수 (A)", "formula": "A = 양성자 수 + 중성자 수", "description": "원자핵을 이루는 입자의 총 수. 전자 질량은 너무 작아 무시"},
      {"label": "중성자 수 (N)", "formula": "N = A − Z", "description": "질량수에서 원자 번호를 빼면 중성자 수를 구할 수 있음"}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na)의 원자 번호는 11, 질량수는 23입니다. 양성자 수, 중성자 수, 전자 수를 각각 구하시오.", "solution": "양성자 수 = Z = 11\n중성자 수 = A − Z = 23 − 11 = 12\n전자 수 = 양성자 수 = 11 (중성 원자)"},
      {"problem": "어떤 원자의 원자 번호가 8이고 질량수가 16이다. 중성자 수를 구하시오.", "solution": "중성자 수 N = A − Z = 16 − 8 = 8"}
    ]'::jsonb,
    '원자를 거대한 축구 경기장에 비유해 보세요. 경기장 한가운데 모래알 하나가 바로 원자핵입니다. 나머지 경기장 전체는 텅 빈 공간이고, 그 어딘가를 전자들이 빠르게 돌고 있습니다. 원자핵이 작고 무거운 덩어리라는 사실은 러더퍼드가 금박에 알파 입자를 쏘는 실험으로 처음 증명했습니다!',
    1
  )
  RETURNING id INTO v_lesson1_id;

  -- Lesson 1 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '다음 중 원자핵을 구성하는 입자를 올바르게 짝지은 것은?',
    '원자핵은 양성자(+)와 중성자(전하 없음)로 구성됩니다. 전자(−)는 원자핵 주위의 전자 껍질에 위치하며, 원자핵에는 포함되지 않습니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양성자와 중성자', true,  1),
    (v_quiz_id, '양성자와 전자',   false, 2),
    (v_quiz_id, '중성자와 전자',   false, 3),
    (v_quiz_id, '양성자, 중성자, 전자 모두', false, 4);

  -- Lesson 1 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '탄소(C)의 원자 번호가 6이고 질량수가 12일 때, 중성자 수는?',
    '중성자 수 N = A − Z = 12 − 6 = 6입니다. 탄소 원자는 양성자 6개, 중성자 6개, 전자 6개로 이루어져 있습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '6',  true,  1),
    (v_quiz_id, '12', false, 2),
    (v_quiz_id, '18', false, 3),
    (v_quiz_id, '3',  false, 4);

  -- Lesson 1 · Quiz 3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '전자(e⁻)의 전하와 상대적 질량으로 옳은 것은?',
    '전자의 전하는 −1이고, 상대적 질량은 양성자의 약 1/1836로 매우 작아 질량수 계산에서 무시합니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전하 −1, 질량 ≈ 0 (무시)',  true,  1),
    (v_quiz_id, '전하 −1, 질량 1',           false, 2),
    (v_quiz_id, '전하 0,  질량 1',           false, 3),
    (v_quiz_id, '전하 +1, 질량 ≈ 0 (무시)', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: 원자 번호와 질량수
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '원자 번호와 질량수',
    '■ 원자 번호 (Atomic Number, Z) — 기초
원자핵 속 양성자의 수입니다.
- 원소의 종류를 결정하는 절대적 기준
- 같은 원자 번호 = 같은 원소 (H: Z=1, C: Z=6, O: Z=8, Na: Z=11)
- 주기율표에서 원소의 배열 순서

■ 질량수 (Mass Number, A) — 기초
원자핵을 구성하는 양성자 수와 중성자 수의 합입니다.
전자의 질량은 양성자의 1/1836이므로 무시합니다.

■ 원소 표기법
원소 기호 왼쪽 위에 질량수(A), 왼쪽 아래에 원자 번호(Z)를 씁니다.

  ¹²₆C  →  탄소, Z=6, A=12, N=6
  ¹⁶₈O  →  산소, Z=8, A=16, N=8
  ²³₁₁Na →  나트륨, Z=11, A=23, N=12

■ 중성 원자 vs 이온의 전자 수 — 심화
중성 원자: 전자 수 = 양성자 수 = Z

이온(전하를 띤 원자)은 전자를 잃거나 얻어서 생성됩니다.
  Na  → Na⁺ + e⁻  (전자 1개 잃음)  전자 수 = 11 − 1 = 10
  Cl + e⁻ → Cl⁻    (전자 1개 얻음)  전자 수 = 17 + 1 = 18
  Ca → Ca²⁺ + 2e⁻  (전자 2개 잃음) 전자 수 = 20 − 2 = 18

이온의 전자 수 = Z − (이온 전하)
  (예: Na⁺ → 11 − (+1) = 10, Cl⁻ → 17 − (−1) = 18)',
    '[
      {"label": "원소 표기법", "formula": "ᴬ_Z X (A: 질량수, Z: 원자 번호, X: 원소 기호)", "description": "질량수는 왼쪽 위, 원자 번호는 왼쪽 아래에 표기"},
      {"label": "중성 원자의 전자 수", "formula": "전자 수 = 양성자 수 = Z", "description": "중성 원자는 전하가 0 → 양성자 수와 전자 수가 같음"},
      {"label": "이온의 전자 수", "formula": "전자 수 = Z − (이온 전하)", "description": "양이온은 전자를 잃음(−), 음이온은 전자를 얻음(+)"}
    ]'::jsonb,
    '[
      {"problem": "¹⁶₈O(산소)에서 양성자 수, 중성자 수, 전자 수를 각각 구하시오.", "solution": "양성자 수 = Z = 8\n중성자 수 = A − Z = 16 − 8 = 8\n전자 수 = 양성자 수 = 8 (중성 원자이므로)"},
      {"problem": "Na⁺ 이온의 전자 수는? (Na의 원자 번호 = 11)", "solution": "Na는 전자를 1개 잃어 Na⁺가 됨\n전자 수 = Z − 이온 전하 = 11 − 1 = 10"}
    ]'::jsonb,
    '원자 번호는 사람의 주민등록번호와 같습니다. 세상에 같은 주민번호를 가진 사람이 없듯, 같은 원자 번호는 무조건 같은 원소입니다. 이온은 마치 지갑(전자)을 잃어버리거나 빌린 상태와 같습니다. Na가 지갑 1개(전자 1개)를 잃으면 Na⁺가 되고, Cl이 지갑 1개를 주우면 Cl⁻가 됩니다!',
    2
  )
  RETURNING id INTO v_lesson2_id;

  -- Lesson 2 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '²⁷₁₃Al(알루미늄)에서 중성자 수는 얼마인가?',
    '중성자 수 N = A − Z = 27 − 13 = 14입니다. 알루미늄은 양성자 13개, 중성자 14개로 이루어진 원자핵을 가집니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '14', true,  1),
    (v_quiz_id, '13', false, 2),
    (v_quiz_id, '27', false, 3),
    (v_quiz_id, '40', false, 4);

  -- Lesson 2 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '원자 번호 17인 염소(Cl) 중성 원자의 전자 수는?',
    '중성 원자에서 전자 수 = 양성자 수 = 원자 번호 = 17입니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '17', true,  1),
    (v_quiz_id, '35', false, 2),
    (v_quiz_id, '18', false, 3),
    (v_quiz_id, '16', false, 4);

  -- Lesson 2 · Quiz 3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, 'Na⁺ 이온의 전자 수는? (Na 원자 번호 = 11)',
    'Na는 전자를 1개 잃어 Na⁺가 됩니다. 전자 수 = 11 − 1 = 10. Na⁺는 Ne(Z=10)와 같은 전자 배치를 가집니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '10', true,  1),
    (v_quiz_id, '11', false, 2),
    (v_quiz_id, '12', false, 3),
    (v_quiz_id, '9',  false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: 동위 원소
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '동위 원소',
    '■ 동위 원소(Isotope)란? — 기초
같은 원소(Z 동일)이지만 중성자 수(N)가 달라 질량수(A)가 다른 원자들을 동위 원소라고 합니다.

  조건: 원자 번호(Z) 동일, 질량수(A) 다름 = 중성자 수(N) 다름

수소(H)의 동위 원소 — 가장 유명한 예:
  ¹H  (프로튬):   p⁺ 1개, n⁰ 0개 → 존재 비율 99.985%
  ²H  (중수소):   p⁺ 1개, n⁰ 1개 → 존재 비율 0.015% (원자로, 핵융합)
  ³H  (삼중수소): p⁺ 1개, n⁰ 2개 → 방사성, 극미량 존재

탄소(C)의 동위 원소:
  ¹²C: 가장 흔함 (98.9%) — 원자 질량 기준
  ¹³C: 1.1% 존재 — NMR 분광법에 활용
  ¹⁴C: 방사성 동위 원소 — 탄소 연대 측정(고고학)에 사용

■ 화학적 성질은 같다!
동위 원소는 전자 수(= 양성자 수)가 같으므로 화학적 성질이 거의 동일합니다.
물(H₂O)과 중수(D₂O)는 같은 화학식 구조이지만 밀도와 끓는점이 약간 다릅니다.

■ 평균 원자량 — 심화
실제 원소의 원자량은 자연에 존재하는 동위 원소들의 평균입니다.

  평균 원자량 = Σ (각 동위 원소의 질량수 × 존재 비율)

예) 염소(Cl): ³⁵Cl(75%) + ³⁷Cl(25%)
  = 35 × 0.75 + 37 × 0.25 = 26.25 + 9.25 = 35.5',
    '[
      {"label": "동위 원소 조건", "formula": "Z 동일, A 다름 (= N 다름)", "description": "양성자 수(원소 종류)는 같고, 중성자 수가 달라 질량수가 다른 원자"},
      {"label": "평균 원자량", "formula": "평균 원자량 = Σ(질량수 × 존재 비율)", "description": "자연에 존재하는 동위 원소 비율로 계산한 가중 평균값"}
    ]'::jsonb,
    '[
      {"problem": "염소(Cl)의 동위 원소: ³⁵Cl(존재 비율 75%), ³⁷Cl(25%)일 때 평균 원자량을 구하시오.", "solution": "평균 원자량 = 35 × 0.75 + 37 × 0.25\n= 26.25 + 9.25\n= 35.5"},
      {"problem": "¹²C와 ¹⁴C는 동위 원소인가? 이유와 함께 답하시오.", "solution": "동위 원소 맞음\n이유: 원자 번호(Z=6)가 같고, 중성자 수가 달라(N=6 vs N=8) 질량수가 다름(A=12 vs A=14)"}
    ]'::jsonb,
    '동위 원소를 쌍둥이에 비유해 보세요. 같은 부모(양성자 수 = 원소 종류)에서 태어난 쌍둥이이지만, 한 명이 더 무겁습니다(중성자 수가 많아 질량수가 다름). 얼굴(화학적 성질)은 거의 똑같지만, 몸무게(원자량)가 다릅니다. 주기율표의 원자량이 딱 떨어지지 않는 이유(예: Cl = 35.5)가 바로 이 때문입니다!',
    3
  )
  RETURNING id INTO v_lesson3_id;

  -- Lesson 3 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '동위 원소의 정의로 옳은 것은?',
    '동위 원소는 원자 번호(양성자 수)가 같고, 중성자 수가 달라 질량수가 다른 원자들입니다. 화학적 성질은 거의 동일합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '원자 번호가 같고 질량수가 다른 원자',  true,  1),
    (v_quiz_id, '질량수가 같고 원자 번호가 다른 원자',  false, 2),
    (v_quiz_id, '양성자 수와 중성자 수가 모두 같은 원자', false, 3),
    (v_quiz_id, '전자 수가 같고 양성자 수가 다른 원자', false, 4);

  -- Lesson 3 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '염소의 평균 원자량은? (³⁵Cl 75%, ³⁷Cl 25%)',
    '평균 원자량 = 35 × 0.75 + 37 × 0.25 = 26.25 + 9.25 = 35.5입니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '35.5', true,  1),
    (v_quiz_id, '35',   false, 2),
    (v_quiz_id, '36',   false, 3),
    (v_quiz_id, '37',   false, 4);

  -- Lesson 3 · Quiz 3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '¹⁴C(탄소-14)는 ¹²C와 어떤 관계인가?',
    '¹⁴C와 ¹²C는 모두 Z=6으로 같은 원소(탄소)이지만, 중성자 수가 달라(각각 8개, 6개) 질량수가 다른 동위 원소 관계입니다. ¹⁴C는 방사성을 가져 고고학 연대 측정에 활용됩니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '동위 원소 (Z=6로 같고 A가 다름)',  true,  1),
    (v_quiz_id, '완전히 다른 원소',                  false, 2),
    (v_quiz_id, '같은 원자 (이성질체)',               false, 3),
    (v_quiz_id, '이온 관계',                         false, 4);

  -- ════════════════════════════════════════
  -- LESSON 4: 전자 배치
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '전자 배치',
    '■ 전자 껍질 — 기초
전자는 원자핵 주위의 전자 껍질(electron shell)에 배치됩니다.
원자핵에서 가까운 순서대로 K, L, M, N … 이라고 부릅니다.
각 껍질이 채울 수 있는 최대 전자 수는 **2n²** (n은 껍질 번호: K=1, L=2, M=3)으로 계산합니다 — 아래 표를 참고하세요.

■ 전자 배치 규칙
① 전자는 에너지가 낮은 안쪽 껍질부터 채웁니다 (K → L → M 순)
② 각 껍질의 최대 전자 수를 초과할 수 없습니다
이 규칙대로 수소(H)부터 아르곤(Ar)까지 채운 전자 배치와 **원자가 전자**(최외각 껍질의 전자 수)는 아래 표에 정리했습니다.

■ 비활성 기체와 옥텟 규칙 — 심화
He(2), Ne(10), Ar(18) 등 비활성 기체(18족)는 최외각 껍질이 꽉 찬 안정한 전자 배치를 가집니다.
다른 원소들은 이 안정한 전자 배치(8개, 옥텟)를 이루려고 화학 결합에 참여합니다.
→ 이것이 이온 결합·공유 결합의 근본 원리',
    '[
      {"label": "껍질 최대 전자 수", "formula": "최대 전자 수 = 2n²", "description": "n은 껍질 번호 (K=1, L=2, M=3). K=2개, L=8개, M=18개"},
      {"label": "원자가 전자", "formula": "원자가 전자 = 최외각 껍질의 전자 수", "description": "원소의 화학적 성질을 결정하는 핵심 전자 (비활성 기체 제외 최대 7개)"}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na, Z=11)의 전자 배치를 구하고, 원자가 전자 수를 쓰시오.", "solution": "총 전자 수 = 11개\nK 껍질: 2개 (최대 2 → 꽉 참)\nL 껍질: 8개 (최대 8 → 꽉 참)\nM 껍질: 나머지 1개\n\n전자 배치: K(2) L(8) M(1)\n원자가 전자 수: 1개"},
      {"problem": "염소(Cl, Z=17)의 전자 배치를 쓰고 원자가 전자 수를 구하시오.", "solution": "K 껍질: 2개, L 껍질: 8개, M 껍질: 7개\n전자 배치: K(2) L(8) M(7)\n원자가 전자 수: 7개"}
    ]'::jsonb,
    '전자 껍질을 아파트에 비유해 보세요. 1층(K)은 방 2개, 2층(L)은 방 8개, 3층(M)은 방 18개입니다. 입주자(전자)들은 반드시 아래층부터 채워야 합니다. 옥상(비활성 기체)은 모든 방이 꽉 차서 이웃과 어울릴 필요가 없는 이유입니다. 다른 층의 입주자들은 빈방을 채우거나 여분의 짐을 나눠주려 이웃 건물(원자)과 협력합니다 — 이것이 화학 결합!',
    4
  )
  RETURNING id INTO v_lesson4_id;

  -- Lesson 4 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '전자 배치가 K(2) L(8) M(7)인 원소의 원자 번호는?',
    '총 전자 수 = 2 + 8 + 7 = 17. 중성 원자에서 전자 수 = 원자 번호이므로 Z = 17. 이 원소는 염소(Cl)입니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '17', true,  1),
    (v_quiz_id, '15', false, 2),
    (v_quiz_id, '7',  false, 3),
    (v_quiz_id, '18', false, 4);

  -- Lesson 4 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, 'M 껍질(n=3)에 들어갈 수 있는 최대 전자 수는?',
    '최대 전자 수 = 2n² = 2 × 3² = 18입니다. K(2), L(8), M(18) 순서로 기억하세요.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '18', true,  1),
    (v_quiz_id, '8',  false, 2),
    (v_quiz_id, '12', false, 3),
    (v_quiz_id, '6',  false, 4);

  -- Lesson 4 · Quiz 3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '아르곤(Ar, Z=18)의 전자 배치로 옳은 것은?',
    'Z=18이므로 총 전자 18개. K(2) → L(8) → M(8)로 배치. M껍질 최대는 18개이지만 Ar은 8개만 들어갑니다. 이 배치가 옥텟 안정 구조입니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'K(2) L(8) M(8)',  true,  1),
    (v_quiz_id, 'K(2) L(8) M(6)',  false, 2),
    (v_quiz_id, 'K(2) L(8) M(18)', false, 3),
    (v_quiz_id, 'K(2) L(16)',      false, 4);

  -- ════════════════════════════════════════
  -- LESSON 5: 원자가 전자와 화학적 성질
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '원자가 전자와 화학적 성질',
    '■ 원자가 전자(Valence Electron) — 기초
최외각 껍질(가장 바깥 전자 껍질)에 있는 전자를 원자가 전자라고 합니다.
원자가 전자 수가 같은 원소들은 화학적 성질이 비슷합니다.

■ 족(Group)과 원자가 전자 수
주기율표에서 세로줄을 족이라고 합니다. 같은 족 원소는 원자가 전자 수가 같습니다.

  족       원자가 전자 수    예시
  ─────────────────────────────────────
  1족 (알칼리 금속)    1       H, Li, Na, K
  2족 (알칼리 토금속)  2       Be, Mg, Ca
  13족                 3       B, Al
  14족                 4       C, Si
  15족 (질소족)        5       N, P
  16족 (칼코겐족)      6       O, S
  17족 (할로겐족)      7       F, Cl, Br
  18족 (비활성 기체)   0 (8)   He, Ne, Ar

■ 옥텟 규칙 — 심화
비활성 기체(18족)는 원자가 전자가 8개(He는 2개)로 완전히 안정합니다.
다른 원소들은 이 상태를 이루려고 전자를 주고받거나 공유합니다.

  Na (원자가 전자 1개) → 전자 1개 내주기 → Na⁺ (Ne와 같은 배치)
  Cl (원자가 전자 7개) → 전자 1개 받기  → Cl⁻ (Ar와 같은 배치)
  Na⁺ + Cl⁻ → NaCl (소금!) — 이것이 이온 결합

  H (원자가 전자 1개) + H → 전자 공유 → H₂ — 이것이 공유 결합

■ 화학적 성질이 비슷한 이유
Li, Na, K은 모두 1족 → 원자가 전자 1개 → 비슷하게 물과 격렬히 반응
F, Cl, Br은 모두 17족 → 원자가 전자 7개 → 비슷하게 강한 산화제로 작용
→ 주기율표는 원자가 전자 수를 기준으로 원소를 배열한 표!',
    '[
      {"label": "족과 원자가 전자", "formula": "1족=1개, 2족=2개, 13족=3개 … 17족=7개, 18족=0(8)개", "description": "주기율표 세로줄(족)이 같으면 원자가 전자 수가 같아 화학적 성질이 유사"}
    ]'::jsonb,
    '[
      {"problem": "Li, Na, K이 모두 같은 족(1족)에 속하는 이유를 원자가 전자로 설명하시오.", "solution": "Li: K(2) L(1) → 원자가 전자 1개\nNa: K(2) L(8) M(1) → 원자가 전자 1개\nK: K(2) L(8) M(8) N(1) → 원자가 전자 1개\n\n세 원소 모두 원자가 전자가 1개로 같기 때문에 화학적 성질이 유사하고, 같은 1족(알칼리 금속)에 배치됩니다."}
    ]'::jsonb,
    '원자가 전자를 포커 패에 비유해 보세요. 패가 7장(17족)인 사람은 딱 한 장만 더 있으면 8장 풀셋(안정)이 되므로 적극적으로 한 장을 빼앗으려 합니다(강한 반응성). 반면 이미 8장 풀셋(18족, 비활성 기체)인 사람은 더 이상 뺏거나 줄 이유가 없어 조용히 앉아 있습니다(반응하지 않음). 패가 1장(1족)인 사람은 빨리 내버리고 싶어 합니다(전자를 잃어 이온 형성)!',
    5
  )
  RETURNING id INTO v_lesson5_id;

  -- Lesson 5 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '원자가 전자가 6개인 원소가 속하는 족은?',
    '원자가 전자 6개 = 16족(칼코겐족). 대표 원소로 산소(O), 황(S) 등이 있습니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '16족', true,  1),
    (v_quiz_id, '6족',  false, 2),
    (v_quiz_id, '17족', false, 3),
    (v_quiz_id, '14족', false, 4);

  -- Lesson 5 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '비활성 기체(18족)가 반응성이 거의 없는 이유는?',
    '비활성 기체는 최외각 껍질이 이미 꽉 찬 안정한 전자 배치(옥텟, He는 듀엣)를 가지고 있어 전자를 주고받을 필요가 없습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '최외각 껍질 전자가 꽉 차 안정하기 때문',   true,  1),
    (v_quiz_id, '원자량이 너무 크기 때문',                    false, 2),
    (v_quiz_id, '원자 번호가 작아서 핵 인력이 약하기 때문',  false, 3),
    (v_quiz_id, '원자핵에 중성자가 없기 때문',               false, 4);

  RAISE NOTICE '원자 구조 단원 콘텐츠 v2 삽입 완료: 레슨 5개, 퀴즈 14개';

END $$;
