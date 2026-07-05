-- ============================================================
-- 고등학교 화학I 2015 개정 교육과정
-- Chapter 5: 화학 반응식
-- 레슨 5개 + 퀴즈 13개
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
  -- 챕터가 없으면 생성
  INSERT INTO chapters (title, description, icon, order_index)
  SELECT '화학 반응식', '화학 반응을 기호로 표현하고 반응의 양적 관계를 이해한다', '⚗️', 5
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '화학 반응식');

  -- 챕터 조회
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '화학 반응식';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '화학 반응식 단원을 찾을 수 없습니다.';
  END IF;

  -- 기존 레슨 삭제 (퀴즈/옵션은 CASCADE로 삭제됨)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 화학 반응식의 표현
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '화학 반응식의 표현',
    E'■ 화학 반응식이란?\n'
    '**화학 반응식**(chemical equation)은 화학 반응을 원소 기호와 화학식으로 나타낸 식이다.\n'
    '**반응물**(reactant)은 화살표(→) 왼쪽에, **생성물**(product)은 오른쪽에 쓴다.\n\n'
    '■ 화학 반응식의 구성 요소\n'
    '- 반응물: 반응이 시작될 때 존재하는 물질 (→ 왼쪽)\n'
    '- 생성물: 반응 후 새로 만들어진 물질 (→ 오른쪽)\n'
    '- **계수**(coefficient): 각 화학식 앞에 붙는 숫자, 반응하는 몰수의 비를 나타냄\n'
    '- +: 반응물 또는 생성물이 여러 종류일 때 사용\n\n'
    '■ 상태 기호\n'
    '물질의 상태를 괄호 안에 **상태 기호**로 표시한다. (자세한 내용은 아래 표 참고)\n\n'
    '■ 화학 반응식 읽기\n'
    '2H₂(g) + O₂(g) → 2H₂O(l)\n'
    '→ "수소 기체 2몰과 산소 기체 1몰이 반응하여 물 2몰이 생성된다."\n\n'
    '■ 계수의 의미\n'
    '계수는 원자나 분자의 개수비이자 동시에 몰수의 비를 나타낸다.\n'
    '2H₂ + O₂ → 2H₂O에서 H₂ : O₂ : H₂O = 2 : 1 : 2의 몰비로 반응한다.',
    '[
      {"label": "화학 반응식 기본 형식", "formula": "반응물 → 생성물", "description": "반응물은 화살표 왼쪽, 생성물은 화살표 오른쪽에 쓴다."},
      {"label": "계수의 의미", "formula": "계수 = 분자 수의 비 = 몰수의 비", "description": "2H₂ + O₂ → 2H₂O에서 H₂ : O₂ : H₂O = 2 : 1 : 2 (개수비 = 몰비)"}
    ]'::jsonb,
    '[
      {"problem": "다음 반응식에서 반응물과 생성물을 구분하시오: 2Mg(s) + O₂(g) → 2MgO(s)", "solution": "반응물: Mg, O₂ (화살표 왼쪽) / 생성물: MgO (화살표 오른쪽)"},
      {"problem": "2H₂O₂(l) → 2H₂O(l) + O₂(g)에서 H₂O₂와 O₂의 몰수 비를 구하시오.", "solution": "계수비로 H₂O₂ : O₂ = 2 : 1. H₂O₂ 2몰이 분해되면 O₂ 1몰이 생성된다."}
    ]'::jsonb,
    '화학 반응식은 화학 반응을 문장으로 쓰는 것을 기호로 줄인 것이다. 마치 수학에서 "사과 2개에 사과 3개를 더하면 사과 5개"를 "2 + 3 = 5"로 표현하듯, 화학 반응도 기호와 숫자로 간결하게 표현한다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- ============================================================
  -- QUIZZES: LESSON 1 (화학 반응식의 표현)
  -- ============================================================

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '화학 반응식 2H₂(g) + O₂(g) → 2H₂O(l)에서 화살표(→) 오른쪽에 위치하는 것은?',
    '화학 반응식에서 반응물은 화살표 왼쪽(H₂, O₂), 생성물은 화살표 오른쪽(H₂O)에 위치한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'H₂', false, 1),
    (v_quiz_id, 'O₂', false, 2),
    (v_quiz_id, 'H₂O', true, 3),
    (v_quiz_id, 'H₂와 O₂ 모두', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '화학 반응식에서 계수가 나타내는 것으로 옳은 것은?',
    '화학 반응식의 계수는 분자(또는 원자) 수의 비를 나타내며, 이는 곧 몰수의 비와 같다. 반응물과 생성물의 질량비와는 다르다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응물과 생성물의 질량비', false, 1),
    (v_quiz_id, '반응에 참여하는 분자 수의 비 (= 몰수의 비)', true, 2),
    (v_quiz_id, '반응 속도의 비율', false, 3),
    (v_quiz_id, '물질의 온도 변화', false, 4);

  -- ============================================================
  -- LESSON 2: 화학 반응식 완성 (계수 맞추기)
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '화학 반응식 완성 (계수 맞추기)',
    E'■ 질량 보존 법칙\n'
    '화학 반응에서 원자는 새로 생기거나 사라지지 않는다.\n'
    '반응 전후 각 원소의 원자 수가 같아야 한다. 이것이 **질량 보존 법칙**의 근거이다.\n'
    '따라서 화학 반응식에서 화살표 양쪽의 원자 수를 같게 맞춰야 한다.\n\n'
    '■ 계수 맞추기 원칙\n'
    '1. 화학식의 아래 첨자(subscript)는 절대 바꾸지 않는다. (바꾸면 다른 물질이 됨)\n'
    '2. **계수**(coefficient, 화학식 앞의 숫자)만 조정한다.\n'
    '3. 모든 계수는 가장 간단한 **최소 정수비**로 나타낸다.\n'
    '4. 계수 1은 생략한다.\n\n'
    '■ 계수 맞추기 절차 예시: 수소와 산소의 반응\n'
    '① 골격 반응식: H₂ + O₂ → H₂O\n'
    '② 원자 수 확인: O는 왼쪽 2개, 오른쪽 1개 (불일치!)\n'
    '③ H₂O 계수 2로 조정: H₂ + O₂ → 2H₂O → H: 왼쪽 2개, 오른쪽 4개 (불일치)\n'
    '④ H₂ 계수 2로 조정: 2H₂ + O₂ → 2H₂O\n'
    '⑤ 검증: H: 좌4 = 우4 ✓, O: 좌2 = 우2 ✓ → 완성!\n\n'
    '■ 주요 반응식 계수 예\n'
    '메탄 연소, 암모니아 합성, 마그네슘 연소, 철의 산화 등 대표 반응의 계수를 맞춰볼 수 있다. (자세한 내용은 아래 표 참고)',
    '[
      {"label": "계수 맞추기 원칙", "formula": "반응 전 원자 수 = 반응 후 원자 수 (원소별 확인)", "description": "화학식의 아래 첨자는 바꾸지 않고, 계수만 조정하여 양쪽 원자 수를 같게 맞춘다."},
      {"label": "질량 보존 법칙", "formula": "반응물의 전체 질량 = 생성물의 전체 질량", "description": "원자의 종류와 수가 변하지 않으므로, 반응 전후 질량의 합이 항상 같다."}
    ]'::jsonb,
    '[
      {"problem": "aN₂ + bH₂ → cNH₃에서 계수 a, b, c를 구하시오.", "solution": "N 원자: 2a = c, H 원자: 2b = 3c. a=1로 놓으면 c=2, 2b=6이므로 b=3. 완성: N₂ + 3H₂ → 2NH₃"},
      {"problem": "CH₄ + O₂ → CO₂ + H₂O 반응식을 완성하시오.", "solution": "H₂O 계수 2 → CH₄ + O₂ → CO₂ + 2H₂O. O 확인: 우측 4개이므로 O₂ 계수 2. 완성: CH₄ + 2O₂ → CO₂ + 2H₂O (C:1=1, H:4=4, O:4=4 ✓)"}
    ]'::jsonb,
    '계수 맞추기는 레시피 비율을 맞추는 것과 같다. 팬케이크 1개를 만들 때 밀가루 1컵, 달걀 2개가 필요하면, 4개를 만들 때는 밀가루 4컵, 달걀 8개가 필요하다. 화학 반응에서도 원자 수의 비율(계수)이 정확히 맞아야 반응식이 올바르게 표현된다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- ============================================================
  -- QUIZZES: LESSON 2 (계수 맞추기)
  -- ============================================================

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '화학 반응식 계수를 맞출 때 해서는 안 되는 것은?',
    '계수 맞추기 시 화학식의 아래 첨자(subscript)는 절대 변경하면 안 된다. 아래 첨자를 바꾸면 전혀 다른 물질이 되기 때문이다. 계수(앞에 붙는 숫자)만 조정한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '화학식 앞의 계수를 변경한다.', false, 1),
    (v_quiz_id, '화학식 내의 아래 첨자(subscript)를 변경한다.', true, 2),
    (v_quiz_id, '계수 1을 생략한다.', false, 3),
    (v_quiz_id, '계수를 가장 간단한 정수비로 나타낸다.', false, 4);

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '암모니아 합성 반응식 N₂ + ?H₂ → ?NH₃에서 빈칸의 계수를 순서대로 고르면?',
    'N₂ + 3H₂ → 2NH₃: N 원자(왼쪽 2 = 오른쪽 2), H 원자(왼쪽 6 = 오른쪽 6) 모두 일치한다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '2, 1', false, 1),
    (v_quiz_id, '1, 2', false, 2),
    (v_quiz_id, '3, 2', true, 3),
    (v_quiz_id, '2, 3', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '다음 중 계수가 올바르게 맞춰진 화학 반응식은?',
    '4Fe + 3O₂ → 2Fe₂O₃은 Fe: 좌4=우4, O: 좌6=우6으로 원자 수가 모두 일치한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Fe + O₂ → Fe₂O₃', false, 1),
    (v_quiz_id, '2Fe + O₂ → Fe₂O₃', false, 2),
    (v_quiz_id, '4Fe + 3O₂ → 2Fe₂O₃', true, 3),
    (v_quiz_id, '3Fe + 2O₂ → Fe₂O₃', false, 4);

  -- ============================================================
  -- LESSON 3: 반응의 양적 관계 (몰비)
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '반응의 양적 관계 (몰비)',
    E'■ 계수와 몰비\n'
    '균형 맞춰진 화학 반응식의 계수는 각 물질의 몰수 비(**몰비**)를 나타낸다.\n'
    'N₂ + 3H₂ → 2NH₃\n'
    '→ N₂ : H₂ : NH₃ = 1 : 3 : 2 (몰비)\n'
    '→ N₂ 1몰이 반응하면 H₂ 3몰이 필요하고 NH₃ 2몰이 생성된다.\n\n'
    '■ 양적 관계 계산 흐름\n'
    '질량(g)을 몰질량으로 나누어 몰수를 구하고, 계수비를 곱해 다른 물질의 몰수와 질량을 구한다. (자세한 내용은 아래 표 참고)\n\n'
    '■ 한계 반응물 (Limiting Reactant)\n'
    '두 반응물이 정확한 계수비(몰비)로 존재하지 않을 경우, 먼저 소모되는 반응물인 **한계 반응물**이 반응을 제한하고, 남는 **과잉 반응물**이 생긴다. (자세한 내용은 아래 표 참고)\n\n'
    '■ 계산 예시\n'
    'N₂ + 3H₂ → 2NH₃에서 N₂ 28 g이 완전 반응할 때 생성되는 NH₃의 질량:\n'
    '① N₂ 몰수 = 28 g ÷ 28 g/mol = 1 mol\n'
    '② NH₃ 몰수 = 1 mol × (2/1) = 2 mol   (계수비 N₂ : NH₃ = 1 : 2)\n'
    '③ NH₃ 질량 = 2 mol × 17 g/mol = 34 g',
    '[
      {"label": "몰비 관계", "formula": "계수비 = 몰수비", "description": "aA + bB → cC에서 A : B : C의 몰비는 a : b : c이다."},
      {"label": "질량-몰 변환 흐름", "formula": "질량(g) ÷ 몰질량 → 몰수 →(×계수비)→ 목표 몰수 ×몰질량 → 목표 질량", "description": "반응물 질량으로부터 생성물 질량을 구하는 계산 순서"}
    ]'::jsonb,
    '[
      {"problem": "2H₂ + O₂ → 2H₂O에서 H₂ 4 g이 완전 반응할 때 생성되는 H₂O의 질량은? (H=1, O=16)", "solution": "① H₂ 몰수 = 4g ÷ 2g/mol = 2mol ② H₂ : H₂O = 2:2 = 1:1이므로 H₂O 2mol ③ H₂O 질량 = 2mol × 18g/mol = 36g"},
      {"problem": "N₂ + 3H₂ → 2NH₃에서 N₂ 14 g과 H₂ 9 g이 반응할 때 한계 반응물은? (N=14, H=1)", "solution": "N₂: 14÷28=0.5mol, H₂: 9÷2=4.5mol. N₂ 0.5mol에 필요한 H₂: 0.5×3=1.5mol. 실제 H₂(4.5mol) > 필요량(1.5mol)이므로 한계 반응물은 N₂"}
    ]'::jsonb,
    '반응의 양적 관계는 레시피 비율처럼 생각하면 된다. 빵 1개를 만들 때 밀가루 2컵:물 1컵:달걀 1개가 필요하다면, 밀가루 4컵이 있어도 달걀이 1개뿐이면 빵은 1개만 만들 수 있다. 달걀이 한계 재료(한계 반응물)가 된 것이다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- ============================================================
  -- QUIZZES: LESSON 3 (반응의 양적 관계)
  -- ============================================================

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '2H₂ + O₂ → 2H₂O에서 H₂와 H₂O의 몰비는?',
    '화학 반응식의 계수가 몰수의 비를 나타낸다. H₂의 계수는 2, H₂O의 계수도 2이므로 H₂ : H₂O = 2 : 2 = 1 : 1이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1 : 2', false, 1),
    (v_quiz_id, '2 : 1', false, 2),
    (v_quiz_id, '1 : 1', true, 3),
    (v_quiz_id, '2 : 3', false, 4);

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    'N₂ + 3H₂ → 2NH₃에서 N₂ 2몰이 완전 반응할 때 생성되는 NH₃는 몇 몰인가?',
    '계수비 N₂ : NH₃ = 1 : 2이므로, N₂ 2몰이 반응하면 NH₃는 2×2 = 4몰이 생성된다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1몰', false, 1),
    (v_quiz_id, '2몰', false, 2),
    (v_quiz_id, '3몰', false, 3),
    (v_quiz_id, '4몰', true, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '한계 반응물(limiting reactant)에 대한 설명으로 옳은 것은?',
    '한계 반응물은 두 반응물의 몰비가 계수비와 다를 때 먼저 소비되어 반응을 제한하는 물질이다. 반응 후에는 남지 않으며, 생성물의 양을 결정한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응 후 과잉으로 남는 물질이다.', false, 1),
    (v_quiz_id, '먼저 소비되어 반응을 제한하고 생성물의 양을 결정한다.', true, 2),
    (v_quiz_id, '항상 분자량이 큰 물질이다.', false, 3),
    (v_quiz_id, '촉매와 같은 역할을 한다.', false, 4);

  -- ============================================================
  -- LESSON 4: 여러 가지 화학 반응 유형
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '여러 가지 화학 반응 유형',
    E'■ 화학 반응의 분류\n'
    '화학 반응은 반응물과 생성물의 관계에 따라 여러 유형으로 분류할 수 있다.\n\n'
    '■ **합성 반응** (Synthesis)\n'
    '두 가지 이상의 물질이 결합하여 하나의 새로운 물질을 만드는 반응: A + B → AB. 예) 2Mg + O₂ → 2MgO (마그네슘 산화) (자세한 내용은 아래 표 참고)\n\n'
    '■ **분해 반응** (Decomposition)\n'
    '하나의 물질이 두 가지 이상의 물질로 나뉘는 반응: AB → A + B. 예) 2H₂O → 2H₂ + O₂ (물의 전기 분해) (자세한 내용은 아래 표 참고)\n\n'
    '■ **치환 반응** (Single Displacement)\n'
    '한 원소가 화합물에서 다른 원소를 밀어내는 반응: A + BC → AC + B. 예) Fe + CuSO₄ → FeSO₄ + Cu (반응성 비교 활용) (자세한 내용은 아래 표 참고)\n\n'
    '■ **이중 치환 반응** (Double Displacement, 복분해)\n'
    '두 화합물의 양이온이 서로 교환되는 반응: AB + CD → AD + CB. 예) NaCl + AgNO₃ → AgCl↓ + NaNO₃ (앙금 생성) (자세한 내용은 아래 표 참고)\n\n'
    '■ **연소 반응** (Combustion)\n'
    '물질이 산소와 빠르게 반응하여 열과 빛을 방출하는 반응. 예) C₃H₈ + 5O₂ → 3CO₂ + 4H₂O (프로판 연소) (자세한 내용은 아래 표 참고)\n\n'
    '■ **앙금 생성 반응**\n'
    '수용액에서 난용성 염(앙금)이 생성되는 이중 치환 반응으로, 생성물에 ↓ 기호로 표시한다. 예) Ba²⁺ + SO₄²⁻ → BaSO₄↓ (흰색) (자세한 내용은 아래 표 참고)',
    '[
      {"label": "합성 반응", "formula": "A + B → AB", "description": "두 물질이 결합하여 새로운 하나의 물질이 생성된다."},
      {"label": "분해 반응", "formula": "AB → A + B", "description": "하나의 물질이 두 가지 이상의 물질로 분리된다."},
      {"label": "치환 반응", "formula": "A + BC → AC + B", "description": "반응성이 더 큰 원소 A가 화합물 BC에서 B를 밀어내고 자리를 차지한다."}
    ]'::jsonb,
    '[
      {"problem": "2H₂O₂ → 2H₂O + O₂의 반응 유형은?", "solution": "과산화수소(H₂O₂) 하나의 물질이 물(H₂O)과 산소(O₂)로 나뉘므로 분해 반응이다."},
      {"problem": "NaCl(aq) + AgNO₃(aq) → AgCl↓ + NaNO₃(aq)의 반응 유형은?", "solution": "Na⁺와 Ag⁺가 서로 위치를 교환하므로 이중 치환(복분해) 반응이며, 난용성 AgCl 앙금이 생성되는 앙금 생성 반응이다."}
    ]'::jsonb,
    '화학 반응 유형은 사람들의 관계 유형과 비슷하다. 합성은 두 사람이 결혼하여 하나의 가정을 이루는 것, 분해는 이혼하여 따로 사는 것, 치환은 삼각관계에서 새 사람이 기존 사람을 대체하는 것, 이중 치환은 두 커플이 파트너를 서로 교환하는 것과 비슷하다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- ============================================================
  -- QUIZZES: LESSON 4 (반응 유형)
  -- ============================================================

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '다음 반응 중 합성(결합) 반응에 해당하는 것은?',
    '합성 반응은 두 가지 이상의 물질이 결합하여 하나의 새로운 물질을 만드는 반응(A+B→AB)이다. 2Na+Cl₂→2NaCl이 이에 해당한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '2H₂O → 2H₂ + O₂', false, 1),
    (v_quiz_id, '2Na + Cl₂ → 2NaCl', true, 2),
    (v_quiz_id, 'Zn + 2HCl → ZnCl₂ + H₂', false, 3),
    (v_quiz_id, 'HCl + NaOH → NaCl + H₂O', false, 4);

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '앙금 생성 반응에서 생성되는 침전물을 표시하는 기호는?',
    '앙금 생성 반응에서 수용액에 녹지 않는 침전물(앙금)이 생성될 때 화학식 뒤에 ↓ 기호를 붙여 표시한다. 예: AgCl↓, BaSO₄↓',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '↑', false, 1),
    (v_quiz_id, '↓', true, 2),
    (v_quiz_id, '(g)', false, 3),
    (v_quiz_id, '(aq)', false, 4);

  -- ============================================================
  -- LESSON 5: 화학 반응에서의 에너지 변화
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '화학 반응에서의 에너지 변화',
    E'■ 화학 반응과 에너지\n'
    '모든 화학 반응에는 에너지 변화가 수반된다.\n'
    '반응 전후 물질의 화학적 에너지(퍼텐셜 에너지)가 달라지며, 그 차이가 열이나 빛으로 방출되거나 흡수된다.\n\n'
    '■ **발열 반응** (Exothermic Reaction)\n'
    '반응 후 에너지가 방출되는 반응으로, 생성물의 에너지가 반응물의 에너지보다 낮다. (자세한 내용은 아래 표 참고)\n'
    'CH₄ + 2O₂ → CO₂ + 2H₂O + 에너지(열)\n\n'
    '■ **흡열 반응** (Endothermic Reaction)\n'
    '반응이 진행되려면 에너지를 흡수해야 하는 반응으로, 생성물의 에너지가 반응물의 에너지보다 높다. (자세한 내용은 아래 표 참고)\n'
    '6CO₂ + 6H₂O + 에너지(빛) → C₆H₁₂O₆ + 6O₂\n\n'
    '■ **반응열**(ΔH)\n'
    '반응열은 생성물의 에너지에서 반응물의 에너지를 뺀 값이다. 발열 반응은 ΔH < 0, 흡열 반응은 ΔH > 0이다.\n\n'
    '■ **활성화 에너지** (Activation Energy, Ea)\n'
    '반응이 시작되려면 반응물이 넘어야 할 에너지 장벽이다.\n'
    '- 활성화 에너지가 높을수록 반응이 일어나기 어렵다.\n'
    '- **촉매**(catalyst): 활성화 에너지를 낮춰 반응 속도를 빠르게 한다.\n'
    '  촉매는 활성화 에너지는 낮추지만 반응열(ΔH)은 변화시키지 않는다.\n\n'
    '■ 에너지 다이어그램 해석\n'
    '발열 반응: 반응물 → (에너지 봉우리) → 생성물이 낮은 위치\n'
    '흡열 반응: 반응물 → (에너지 봉우리) → 생성물이 높은 위치',
    '[
      {"label": "반응열(ΔH)", "formula": "ΔH = 생성물의 에너지 - 반응물의 에너지", "description": "ΔH < 0이면 발열 반응(에너지 방출), ΔH > 0이면 흡열 반응(에너지 흡수)"},
      {"label": "활성화 에너지(Ea)", "formula": "Ea = 전이 상태 에너지 - 반응물 에너지", "description": "반응 시작에 필요한 최소 에너지. 촉매를 사용하면 이 값이 낮아져 반응 속도가 빨라진다."}
    ]'::jsonb,
    '[
      {"problem": "손난로는 철가루의 산화 반응(4Fe + 3O₂ → 2Fe₂O₃)을 이용한다. 이 반응의 유형(발열/흡열)과 그 근거를 설명하시오.", "solution": "발열 반응이다. 생성물(Fe₂O₃)의 에너지가 반응물(Fe, O₂)의 에너지보다 낮아, 그 차이만큼 열이 방출되어 주변 온도가 올라간다."},
      {"problem": "촉매를 사용했을 때 변하는 것과 변하지 않는 것을 각각 쓰시오.", "solution": "변하는 것: 활성화 에너지(감소), 반응 속도(증가). 변하지 않는 것: 반응열(ΔH), 반응물과 생성물의 종류 및 에너지."}
    ]'::jsonb,
    '에너지 변화는 산을 넘는 것과 같다. 산(활성화 에너지 장벽)을 넘어야 목적지(생성물)에 도달할 수 있다. 발열 반응은 출발지(반응물)보다 목적지(생성물)가 낮은 내리막 등산, 흡열 반응은 목적지가 더 높은 오르막 등산이다. 촉매는 더 낮은 고개를 찾아주는 길 안내자로, 목적지의 높이 자체는 바꾸지 않는다.'
  )
  RETURNING id INTO v_lesson5_id;

  -- ============================================================
  -- QUIZZES: LESSON 5 (에너지 변화)
  -- ============================================================

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '발열 반응에 대한 설명으로 옳은 것은?',
    '발열 반응에서는 반응이 진행되면서 열이 주변으로 방출되므로 주변 온도가 올라간다. 생성물의 에너지가 반응물의 에너지보다 낮다(ΔH < 0).',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응이 일어날 때 주변 온도가 낮아진다.', false, 1),
    (v_quiz_id, '반응이 일어날 때 열이 방출되어 주변 온도가 높아진다.', true, 2),
    (v_quiz_id, '생성물의 에너지가 반응물보다 높다.', false, 3),
    (v_quiz_id, '광합성이 대표적인 예이다.', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '촉매(catalyst)를 사용했을 때 변화하는 것은?',
    '촉매는 활성화 에너지를 낮추어 반응 속도를 빠르게 한다. 그러나 반응열(ΔH)이나 반응물, 생성물 자체는 변화시키지 않는다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응열(ΔH)', false, 1),
    (v_quiz_id, '반응물의 종류', false, 2),
    (v_quiz_id, '활성화 에너지(Ea)', true, 3),
    (v_quiz_id, '생성물의 에너지', false, 4);

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '다음 중 흡열 반응의 예로 옳은 것은?',
    '광합성은 빛 에너지를 흡수하여 CO₂와 H₂O로부터 포도당을 합성하는 흡열 반응이다. 연소, 철의 산화, 중화 반응은 모두 발열 반응이다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '연소 반응 (CH₄ + 2O₂ → CO₂ + 2H₂O)', false, 1),
    (v_quiz_id, '철의 산화 (4Fe + 3O₂ → 2Fe₂O₃)', false, 2),
    (v_quiz_id, '광합성 (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂)', true, 3),
    (v_quiz_id, '중화 반응 (HCl + NaOH → NaCl + H₂O)', false, 4);

  RAISE NOTICE '화학 반응식 단원 삽입 완료: 레슨 5개, 퀴즈 13개';
END $$;
