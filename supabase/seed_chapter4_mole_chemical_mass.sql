-- ============================================================
-- 고등학교 화학I 2015 개정 교육과정
-- Chapter 4: 몰과 화학식량
-- 레슨 5개 + 퀴즈 15개
-- ============================================================

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
  -- 챕터 조회
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '몰과 화학식량';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '몰과 화학식량 단원을 찾을 수 없습니다.';
  END IF;

  -- 기존 레슨 삭제 (퀴즈/옵션은 CASCADE로 삭제됨)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 원자량과 분자량
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '원자량과 분자량',
    E'■ 원자량이란?\n'
    '원자 1개의 실제 질량은 매우 작아(예: 수소 원자 1개 ≈ 1.67×10⁻²⁴ g) 직접 사용하기 불편하다.\n'
    '이를 해결하기 위해 ¹²C(탄소-12) 원자의 질량을 12.000으로 기준으로 정하고,\n'
    '다른 원소의 원자 질량을 이 기준과 비교한 **상대 질량**을 **원자량**이라 한다.\n'
    '- 원자량은 단위가 없는 상대적인 값이다.\n'
    '- 주요 원소 원자량(반올림, 자세한 내용은 아래 표 참고): H=1, C=12, N=14, O=16, Na=23, Cl=35.5, Ca=40\n\n'
    '■ 분자량이란?\n'
    '분자를 구성하는 모든 원자들의 원자량을 합한 값을 **분자량**이라 한다.\n'
    '분자량도 원자량과 마찬가지로 단위가 없는 상대적인 값이다.\n\n'
    '■ 화학식량이란?\n'
    '이온 결합 화합물처럼 분자가 아닌 물질의 경우, 실험식(화학식)에 포함된\n'
    '원자들의 원자량의 합을 **화학식량**이라 한다.\n'
    '- NaCl의 화학식량: 23 + 35.5 = 58.5\n'
    '- CaCO₃의 화학식량: 40 + 12 + (16×3) = 100\n\n'
    '■ 주요 분자의 분자량 계산\n'
    '분자식에 포함된 모든 원자의 원자량을 더하면 분자량이 된다 (계산 예는 아래 표 참고).',
    '[
      {"label": "분자량 계산", "formula": "분자량 = 구성 원자들의 (원자량 × 원자 수)의 합", "description": "분자식에서 각 원소의 원자량에 원자 수를 곱한 뒤 모두 더한다. 단위는 없다."},
      {"label": "화학식량 계산", "formula": "화학식량 = 실험식에 포함된 원자들의 원자량의 합", "description": "이온 결합 화합물 등 분자가 아닌 물질에 사용. 계산 방법은 분자량과 동일하다."}
    ]'::jsonb,
    '[
      {"problem": "황산(H₂SO₄)의 분자량을 구하시오. (H=1, S=32, O=16)", "solution": "H₂SO₄의 분자량 = (1×2) + 32 + (16×4) = 2 + 32 + 64 = 98"},
      {"problem": "탄산 칼슘(CaCO₃)의 화학식량을 구하시오. (Ca=40, C=12, O=16)", "solution": "CaCO₃의 화학식량 = 40 + 12 + (16×3) = 40 + 12 + 48 = 100"}
    ]'::jsonb,
    '원자들은 너무 작아서 실제 질량을 직접 사용하기 불편하다. 마치 물건 무게를 ng(나노그램) 단위 대신 kg으로 표현하듯, 탄소-12의 질량을 기준(12.000)으로 삼아 다른 원소의 상대적 무게를 나타낸 것이 원자량이다. 이 상대적 값 덕분에 원자들의 질량비를 간단한 숫자로 비교할 수 있다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- ============================================================
  -- QUIZZES: LESSON 1 (원자량과 분자량)
  -- ============================================================

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '원자량을 정하는 기준이 되는 원자는?',
    '원자량의 기준 원자는 ¹²C(탄소-12)이다. ¹²C의 질량을 정확히 12.000으로 정하고, 다른 원소의 원자 질량을 이에 대한 상대적인 값으로 나타낸 것이 원자량이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '¹H (수소-1)', false, 1),
    (v_quiz_id, '¹²C (탄소-12)', true, 2),
    (v_quiz_id, '¹⁶O (산소-16)', false, 3),
    (v_quiz_id, '⁵⁶Fe (철-56)', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '황산(H₂SO₄)의 분자량은? (H=1, S=32, O=16)',
    'H₂SO₄의 분자량 = (1×2) + 32 + (16×4) = 2 + 32 + 64 = 98이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '80', false, 1),
    (v_quiz_id, '82', false, 2),
    (v_quiz_id, '98', true, 3),
    (v_quiz_id, '112', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '원자량에 대한 설명으로 옳은 것은?',
    '원자량은 ¹²C를 기준(12.000)으로 한 상대적인 값이므로 단위가 없다. 원자 1개의 실제 질량(H: 약 1.67×10⁻²⁴g)을 g으로 나타낸 것이 아니다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '단위가 없는 상대적인 값이다.', true, 1),
    (v_quiz_id, '원자 1개의 실제 질량을 g으로 나타낸 것이다.', false, 2),
    (v_quiz_id, 'H의 원자량이 1g이므로 절대적인 질량값이다.', false, 3),
    (v_quiz_id, '분자량과 항상 동일한 값을 가진다.', false, 4);

  -- ============================================================
  -- LESSON 2: 몰의 개념 (아보가드로 수)
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '몰의 개념 (아보가드로 수)',
    E'■ 왜 몰(mol)이 필요한가?\n'
    '원자나 분자는 너무 작아 개수를 직접 세기 불가능하다.\n'
    '따라서 일정한 개수 묶음(단위)을 만들어 편리하게 계산하는 방법이 필요하다.\n\n'
    '■ 몰(mol)의 정의\n'
    '**1몰(1 mol)** = 6.022×10²³개의 입자(원자, 분자, 이온 등)\n'
    '- 이 수를 **아보가드로 수**(NA)라 한다: NA = 6.022×10²³ /mol\n'
    '- 이탈리아 과학자 아메데오 아보가드로(Amadeo Avogadro)를 기념하여 명명\n\n'
    '■ 아보가드로 수의 정의\n'
    '¹²C(탄소-12) 12 g에 들어있는 탄소 원자의 수 = 6.022×10²³개\n'
    '이것이 바로 1몰에 해당하는 입자의 수이다.\n\n'
    '■ 몰과 입자 수의 관계\n'
    '몰수가 커질수록 입자 수도 그에 비례하여 늘어난다 (자세한 대응표는 아래 표 참고).\n\n'
    '■ 몰의 대상\n'
    '몰은 원자, 분자, 이온, 전자 등 어떤 입자에도 사용할 수 있다.\n'
    '- 물(H₂O) 1몰: H₂O 분자 6.022×10²³개\n'
    '- 수소 이온(H⁺) 2몰: H⁺ 이온 1.204×10²⁴개\n'
    '- 전자 1몰: 전자 6.022×10²³개 (패러데이 상수와 관련)',
    '[
      {"label": "입자 수 계산", "formula": "N = n × NA", "description": "N: 입자 수(개), n: 물질의 양(mol), NA: 아보가드로 수(6.022×10²³ /mol)"},
      {"label": "몰수 계산", "formula": "n = N / NA", "description": "주어진 입자 수(N)를 아보가드로 수로 나누면 몰수(n)를 구할 수 있다."}
    ]'::jsonb,
    '[
      {"problem": "물(H₂O) 3몰에 들어있는 분자 수를 구하시오.", "solution": "N = n × NA = 3 mol × 6.022×10²³ /mol = 1.807×10²⁴개"},
      {"problem": "이산화 탄소(CO₂) 분자 1.204×10²⁴개는 몇 몰인가?", "solution": "n = N / NA = 1.204×10²⁴ ÷ 6.022×10²³ /mol = 2 mol"}
    ]'::jsonb,
    '계란 12개를 ''1다스''라고 부르듯, 원자나 분자 6.022×10²³개를 ''1몰''이라고 부른다. 1다스는 일상적인 물건을 셀 때 편리하고, 1몰은 원자처럼 극도로 작은 입자를 다룰 때 편리하다. 숫자가 커 보이지만, 원자가 그만큼 작기 때문에 이 정도 묶음이 필요한 것이다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- ============================================================
  -- QUIZZES: LESSON 2 (몰의 개념)
  -- ============================================================

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '아보가드로 수(NA)의 값으로 옳은 것은?',
    '아보가드로 수는 6.022×10²³ /mol이다. 이는 ¹²C 12g에 들어있는 탄소 원자의 수로 정의된다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '6.022×10²² /mol', false, 1),
    (v_quiz_id, '6.022×10²³ /mol', true, 2),
    (v_quiz_id, '6.022×10²⁴ /mol', false, 3),
    (v_quiz_id, '1.000×10²³ /mol', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '물(H₂O) 3몰에 들어있는 분자 수는?',
    '분자 수 = 몰수 × 아보가드로 수 = 3 × 6.022×10²³ = 1.807×10²⁴개',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '6.022×10²³개', false, 1),
    (v_quiz_id, '9.033×10²³개', false, 2),
    (v_quiz_id, '1.807×10²⁴개', true, 3),
    (v_quiz_id, '3.011×10²³개', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '1몰의 정의로 가장 옳은 것은?',
    '몰(mol)은 ¹²C 12g에 들어있는 탄소 원자 수(6.022×10²³)를 기준으로 정의된다. 이 수가 아보가드로 수이다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '¹²C 12g에 들어있는 탄소 원자 수만큼의 입자 집합', true, 1),
    (v_quiz_id, '¹H 1g에 들어있는 수소 원자 수만큼의 입자 집합', false, 2),
    (v_quiz_id, '물 18g에 들어있는 분자 수만큼의 입자 집합', false, 3),
    (v_quiz_id, '임의로 정한 정확히 10²³개의 입자 집합', false, 4);

  -- ============================================================
  -- LESSON 3: 몰 질량과 물질의 양
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '몰 질량과 물질의 양',
    E'■ 몰 질량(M)이란?\n'
    '어떤 물질 1몰의 질량을 **몰 질량**이라 하며, 단위는 g/mol이다.\n'
    '몰수(n)는 **물질의 양**을 mol 단위로 나타낸 값이다.\n'
    '- 몰 질량의 수치 = 원자량, 분자량, 또는 화학식량의 수치와 동일\n'
    '- 단, 단위는 g/mol\n\n'
    '■ 주요 물질의 몰 질량\n'
    '물질마다 고유한 몰 질량을 가진다 (자세한 수치는 아래 표 참고).\n\n'
    '■ 몰, 질량, 입자 수의 관계\n'
    '세 가지 양 사이의 변환 공식:\n'
    '① 질량 → 몰수: n(mol) = m(g) ÷ M(g/mol)\n'
    '② 몰수 → 질량: m(g) = n(mol) × M(g/mol)\n'
    '③ 몰수 → 입자 수: N = n × NA\n'
    '④ 입자 수 → 몰수: n = N ÷ NA\n\n'
    '■ 실전 계산 전략\n'
    '주어진 양(질량 또는 입자 수)을 먼저 몰수로 변환한 후,\n'
    '원하는 양으로 다시 변환하면 편리하다.\n'
    '질량 ↔ 몰수(중심) ↔ 입자 수',
    '[
      {"label": "질량과 몰수 변환", "formula": "n = m / M  또는  m = n × M", "description": "n: 몰수(mol), m: 질량(g), M: 몰 질량(g/mol). 분자량/원자량의 숫자값에 단위 g/mol을 붙이면 몰 질량이다."},
      {"label": "몰 질량의 정의", "formula": "몰 질량(g/mol) = 분자량(또는 원자량, 화학식량)의 수치에 단위 g/mol", "description": "예: CO₂의 분자량=44 → 몰 질량=44 g/mol"}
    ]'::jsonb,
    '[
      {"problem": "이산화 탄소(CO₂) 88 g은 몇 몰인가? (C=12, O=16)", "solution": "CO₂의 몰 질량 = 12 + (16×2) = 44 g/mol. 몰수 n = 88 g ÷ 44 g/mol = 2 mol"},
      {"problem": "수산화 나트륨(NaOH) 3몰의 질량은 몇 g인가? (Na=23, O=16, H=1)", "solution": "NaOH의 몰 질량 = 23 + 16 + 1 = 40 g/mol. 질량 m = 3 mol × 40 g/mol = 120 g"}
    ]'::jsonb,
    '사과 1다스(12개)의 총 무게를 알면, 몇 다스의 무게든 쉽게 계산할 수 있다. 마찬가지로 1몰의 질량(몰 질량)을 알면, n몰의 질량 = n × 몰 질량으로 어떤 양이든 계산할 수 있다. 몰 질량은 ''1몰의 기준 무게'' 역할을 한다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- ============================================================
  -- QUIZZES: LESSON 3 (몰 질량과 물질의 양)
  -- ============================================================

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '이산화 탄소(CO₂)의 몰 질량은? (C=12, O=16)',
    'CO₂의 몰 질량 = 12 + (16×2) = 12 + 32 = 44 g/mol. 몰 질량의 수치는 분자량(44)과 같고 단위만 g/mol이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '28 g/mol', false, 1),
    (v_quiz_id, '32 g/mol', false, 2),
    (v_quiz_id, '44 g/mol', true, 3),
    (v_quiz_id, '56 g/mol', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '수산화 나트륨(NaOH) 80 g은 몇 몰인가? (Na=23, O=16, H=1)',
    'NaOH의 몰 질량 = 23 + 16 + 1 = 40 g/mol. 몰수 n = 80 g ÷ 40 g/mol = 2 mol',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '0.5 mol', false, 1),
    (v_quiz_id, '1 mol', false, 2),
    (v_quiz_id, '2 mol', true, 3),
    (v_quiz_id, '4 mol', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '몰 질량에 대한 설명으로 옳은 것은?',
    '몰 질량은 물질 1몰의 질량이며 단위는 g/mol이다. 그 수치는 원자량, 분자량, 화학식량과 같지만 단위가 g/mol이라는 점이 다르다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '물질 1몰의 질량이며 단위는 g/mol이다.', true, 1),
    (v_quiz_id, '분자량의 2배이다.', false, 2),
    (v_quiz_id, '원자량과 동일한 단위(없음)를 가진다.', false, 3),
    (v_quiz_id, '이온 결합 화합물에는 적용되지 않는다.', false, 4);

  -- ============================================================
  -- LESSON 4: 기체의 몰 부피
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '기체의 몰 부피',
    E'■ 아보가드로 법칙\n'
    '같은 온도, 같은 압력에서 모든 기체는 같은 몰수(입자 수)일 때 같은 부피를 가진다는 것이 **아보가드로 법칙**이다.\n'
    '- 기체 분자의 실제 크기는 분자 간 거리에 비해 매우 작아서 무시 가능\n'
    '- 따라서 기체의 부피는 분자의 종류(질량)와 무관하고, 입자 수(몰수)에만 비례\n\n'
    '■ 표준 상태(STP)에서의 몰 부피\n'
    '**표준 상태(STP)**: 0°C(273 K), 1기압(101.3 kPa)\n'
    '→ 기체 1몰의 부피, 즉 **몰 부피**는 22.4 L이다 (기체 종류에 관계없이 동일)\n\n'
    '■ 다양한 기체의 1몰 부피 비교 (STP)\n'
    '분자량이 서로 다른 기체라도 STP에서 1몰의 부피는 모두 같다 (자세한 비교는 아래 표 참고).\n\n'
    '■ 몰 부피 계산\n'
    '부피 V(L) = n(mol) × 22.4 L/mol (STP 조건)\n'
    '몰수 n(mol) = V(L) ÷ 22.4 L/mol (STP 조건)\n\n'
    '■ 실생활 적용\n'
    '- 풍선에 공기(주로 N₂, O₂)를 넣거나, 헬륨(He)을 넣어도 같은 온도·압력에서\n'
    '  같은 입자 수(몰수)이면 같은 크기의 풍선이 된다.\n'
    '- 자동차 에어백은 N₂ 기체를 순식간에 발생시켜 부피를 키운다.',
    '[
      {"label": "기체의 몰 부피 (STP)", "formula": "V(L) = n(mol) × 22.4 L/mol", "description": "STP(0°C, 1기압) 조건에서만 적용. 모든 기체에 동일하게 적용된다."},
      {"label": "몰수 계산", "formula": "n(mol) = V(L) ÷ 22.4 L/mol", "description": "STP에서 기체의 부피를 22.4로 나누면 몰수를 구할 수 있다."}
    ]'::jsonb,
    '[
      {"problem": "STP에서 산소(O₂) 67.2 L는 몇 몰인가?", "solution": "n = V ÷ 22.4 = 67.2 L ÷ 22.4 L/mol = 3 mol"},
      {"problem": "STP에서 이산화 탄소(CO₂) 2.5몰의 부피는 몇 L인가?", "solution": "V = n × 22.4 = 2.5 mol × 22.4 L/mol = 56.0 L"}
    ]'::jsonb,
    '풍선에 공기를 넣든, 헬륨을 넣든, 이산화 탄소를 넣든, 같은 개수(몰수)의 기체 분자를 넣으면 같은 온도·압력에서 풍선 크기가 같아진다. 기체 분자들은 서로 엄청나게 멀리 떨어져 있어 분자 자체의 크기나 질량은 풍선 부피에 거의 영향을 주지 않기 때문이다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- ============================================================
  -- QUIZZES: LESSON 4 (기체의 몰 부피)
  -- ============================================================

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '표준 상태(STP: 0°C, 1기압)에서 기체 1몰의 부피는?',
    'STP(0°C, 1기압)에서 모든 기체 1몰의 부피는 종류에 관계없이 22.4 L이다. 이는 아보가드로 법칙에 의한 것으로, 기체 분자 크기가 분자 간 거리에 비해 무시할 만큼 작기 때문이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '11.2 L', false, 1),
    (v_quiz_id, '22.4 L', true, 2),
    (v_quiz_id, '24.0 L', false, 3),
    (v_quiz_id, '44.8 L', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    'STP에서 산소(O₂) 67.2 L는 몇 몰인가?',
    '몰수 n = 부피 ÷ 22.4 = 67.2 L ÷ 22.4 L/mol = 3 mol',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1 mol', false, 1),
    (v_quiz_id, '2 mol', false, 2),
    (v_quiz_id, '3 mol', true, 3),
    (v_quiz_id, '6 mol', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '아보가드로 법칙에 대한 설명으로 옳은 것은?',
    '아보가드로 법칙: 같은 온도, 같은 압력에서 같은 몰수(입자 수)의 기체는 기체의 종류에 관계없이 같은 부피를 가진다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '같은 온도·압력에서 같은 몰수의 기체는 종류에 관계없이 같은 부피를 가진다.', true, 1),
    (v_quiz_id, '기체의 부피는 절대 온도에 반비례한다.', false, 2),
    (v_quiz_id, '같은 부피의 기체는 질량이 모두 같다.', false, 3),
    (v_quiz_id, '기체의 몰 부피는 온도와 압력에 무관하다.', false, 4);

  -- ============================================================
  -- LESSON 5: 화학식량과 조성 백분율
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '화학식량과 조성 백분율',
    E'■ 조성 백분율(질량 백분율)이란?\n'
    '화합물에서 각 원소의 질량이 전체 질량에서 차지하는 비율을 백분율(%)로 나타낸 것을 **조성 백분율**이라 한다.\n'
    '- 같은 화합물이라면 양에 관계없이 조성 백분율은 항상 일정하며, 이를 **일정 성분비 법칙**이라 한다.\n\n'
    '■ 조성 백분율 계산\n'
    '원소 X의 질량 백분율 = (원소 X의 원자량 × 원자 수) / 분자량 × 100 (%)\n\n'
    '예시: H₂O에서 각 원소의 질량 백분율 (자세한 수치는 아래 표 참고)\n\n'
    '■ 실험식(경험식)과 분자식\n'
    '**실험식**(경험식)은 원자 수 비를 가장 간단한 정수비로 나타낸 식이고,\n'
    '**분자식**은 분자를 이루는 원자들의 실제 개수를 나타낸 식이다 (자세한 정의와 예는 아래 표 참고).\n'
    '분자식 = (실험식)ₙ  (n은 정수)\n\n'
    '■ 실험식에서 분자식 결정\n'
    '① 조성 백분율로 원소 비율 파악\n'
    '② 원자 수 비로 실험식 결정\n'
    '③ n = 분자량 / 실험식량 으로 n 결정\n'
    '④ 분자식 = (실험식)ₙ\n\n'
    '■ 예시: 포도당\n'
    '실험식 CH₂O, 분자량=180\n'
    '실험식량 = 12 + 2 + 16 = 30\n'
    'n = 180 / 30 = 6\n'
    '분자식 = (CH₂O)₆ = C₆H₁₂O₆',
    '[
      {"label": "조성 백분율(질량 백분율)", "formula": "원소 X의 질량 % = (원자량(X) × 원자 수) / 분자량 × 100", "description": "화합물 내 각 원소가 차지하는 질량 비율. 같은 화합물이면 양에 무관하게 일정하다."},
      {"label": "분자식 결정", "formula": "n = 분자량 / 실험식량,  분자식 = (실험식)ₙ", "description": "실험식에서 분자식을 결정할 때 사용. n은 양의 정수이다."}
    ]'::jsonb,
    '[
      {"problem": "H₂O에서 수소(H)와 산소(O)의 질량 백분율을 각각 구하시오. (H=1, O=16)", "solution": "분자량=18. H의 질량%=(2/18)×100≈11.1%, O의 질량%=(16/18)×100≈88.9%"},
      {"problem": "실험식이 CH₂O이고 분자량이 60인 화합물의 분자식을 구하시오. (C=12, H=1, O=16)", "solution": "실험식량 CH₂O = 12+2+16 = 30. n = 60/30 = 2. 분자식 = (CH₂O)₂ = C₂H₄O₂"}
    ]'::jsonb,
    '피자에서 치즈 비율이 30%라면, 작은 피자든 큰 피자든 그 30%는 치즈이다. 마찬가지로 H₂O에서 수소의 질량 비율은 항상 11.1%로 일정하다. 이것이 일정 성분비 법칙이며, 조성 백분율의 핵심이다.'
  )
  RETURNING id INTO v_lesson5_id;

  -- ============================================================
  -- QUIZZES: LESSON 5 (화학식량과 조성 백분율)
  -- ============================================================

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    'H₂O에서 산소(O)의 질량 백분율은? (H=1, O=16)',
    'H₂O의 분자량=18. O의 질량 백분율 = (16/18) × 100 ≈ 88.9%',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '11.1%', false, 1),
    (v_quiz_id, '50.0%', false, 2),
    (v_quiz_id, '75.0%', false, 3),
    (v_quiz_id, '88.9%', true, 4);

  -- Q14
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '실험식이 CH₂O이고 분자량이 60일 때 분자식은? (C=12, H=1, O=16)',
    '실험식 CH₂O의 식량 = 12+2+16 = 30. n = 분자량/실험식량 = 60/30 = 2. 분자식 = (CH₂O)₂ = C₂H₄O₂',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CH₂O', false, 1),
    (v_quiz_id, 'C₂H₄O₂', true, 2),
    (v_quiz_id, 'C₃H₆O₃', false, 3),
    (v_quiz_id, 'C₄H₈O₄', false, 4);

  -- Q15
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '조성 백분율(질량 백분율)에 대한 설명으로 옳은 것은?',
    '조성 백분율은 화합물의 화학적 특성으로, 같은 화합물이라면 어떤 양이든 동일한 원소 조성 비율을 가진다. 이를 일정 성분비 법칙이라 한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '같은 화합물이라면 양에 관계없이 조성 백분율은 항상 일정하다.', true, 1),
    (v_quiz_id, '물질의 양(질량)에 따라 달라진다.', false, 2),
    (v_quiz_id, '분자식이 있는 물질에만 적용할 수 있다.', false, 3),
    (v_quiz_id, '질량이 아닌 부피 기준으로 각 원소의 비율을 나타낸다.', false, 4);

  RAISE NOTICE '삽입 완료: 레슨 5개, 퀴즈 15개 (몰과 화학식량)';
END $$;
