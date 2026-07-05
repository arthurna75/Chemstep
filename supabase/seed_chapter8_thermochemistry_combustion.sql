-- ============================================================
-- 고등학교 화학II 2015 개정 교육과정 연계
-- Chapter 8: 열화학과 연소공학
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
  INSERT INTO chapters (title, description, icon, order_index)
  SELECT '열화학과 연소공학', '반응 엔탈피와 헤스 법칙을 이해하고 연소 반응의 양적 계산과 에너지 효율을 학습한다', '🔥', 8
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '열화학과 연소공학');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '열화학과 연소공학';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '열화학과 연소공학 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 반응 엔탈피와 헤스 법칙
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '반응 엔탈피와 헤스 법칙',
    E'■ **엔탈피**(Enthalpy, H)\n'
    '일정 압력에서 계(system)가 보유한 열에너지. 화학에서는 반응 엔탈피 변화(ΔH)가 중요하다.\n'
    'ΔH = H(생성물) − H(반응물)\n'
    '- ΔH < 0: **발열 반응** (에너지 방출)\n'
    '- ΔH > 0: **흡열 반응** (에너지 흡수)\n\n'
    '■ 표준 반응 엔탈피 (ΔH°rxn)\n'
    '표준 상태(25°C, 1 atm)에서 측정한 반응 엔탈피.\n'
    '반응식의 계수에 비례한다:\n'
    'CH₄ + 2O₂ → CO₂ + 2H₂O  ΔH° = −890 kJ\n'
    '2CH₄ + 4O₂ → 2CO₂ + 4H₂O  ΔH° = −1780 kJ (2배)\n\n'
    '■ 표준 생성 엔탈피 (ΔH°f)\n'
    '홑원소 물질에서 화합물 1몰을 생성할 때의 ΔH.\n'
    '- 홑원소 물질의 ΔH°f = 0 (정의)\n'
    '- 몇 가지 물질의 ΔH°f 값 (자세한 내용은 아래 표 참고)\n\n'
    '■ **헤스 법칙** (Hess''s Law)\n'
    '반응 엔탈피는 반응 경로에 무관하고 초기·최종 상태만으로 결정된다. (상태 함수)\n\n'
    '활용: ΔH°rxn = Σ ΔH°f(생성물) − Σ ΔH°f(반응물)\n\n'
    '예시: CH₄ + 2O₂ → CO₂ + 2H₂O\n'
    'ΔH° = [ΔH°f(CO₂) + 2ΔH°f(H₂O)] − [ΔH°f(CH₄) + 2ΔH°f(O₂)]\n'
    '     = [−394 + 2(−286)] − [−74.8 + 2(0)]\n'
    '     = −966 − (−74.8) = −891.2 kJ ≈ −890 kJ',
    '[
      {"label": "헤스 법칙 공식", "formula": "ΔH°rxn = Σ ΔH°f(생성물) − Σ ΔH°f(반응물)", "description": "각 물질의 표준 생성 엔탈피를 이용하여 반응열 계산. 홑원소 물질의 ΔH°f = 0"},
      {"label": "반응 엔탈피의 비례성", "formula": "반응식 계수 ×k → ΔH° ×k", "description": "반응식을 2배로 쓰면 ΔH°도 2배. 반응식을 역으로 쓰면 ΔH° 부호 반전"}
    ]'::jsonb,
    '[
      {"problem": "다음 자료를 이용하여 C(s) + ½O₂(g) → CO(g)의 ΔH°를 구하시오.\n① C(s)+O₂(g)→CO₂(g) ΔH₁=-394 kJ\n② CO(g)+½O₂(g)→CO₂(g) ΔH₂=-283 kJ", "solution": "목표 반응 = ① − ②: C+O₂→CO₂ 에서 CO+½O₂→CO₂를 역전하여 빼면\nΔH = ΔH₁ − ΔH₂ = −394 − (−283) = −111 kJ"},
      {"problem": "C₂H₂(g)(아세틸렌)의 표준 연소 엔탈피를 생성 엔탈피로 계산하시오.\n2C₂H₂+5O₂→4CO₂+2H₂O, ΔH°f: CO₂=-394, H₂O(l)=-286, C₂H₂=+227 kJ/mol", "solution": "C₂H₂ 1몰 연소: C₂H₂ + 5/2 O₂ → 2CO₂ + H₂O\nΔH° = [2(-394)+(-286)] − [227+0] = [−1074] − 227 = −1301 kJ/mol"}
    ]'::jsonb,
    '헤스 법칙은 산을 오르는 경로가 달라도 정상의 높이는 같다는 것과 같다. 서울에서 부산까지 고속도로로 가든 국도로 가든 "높이 차이"(ΔH)는 같다. 화학 반응에서 ΔH는 출발물질과 최종 생성물에만 의존하고 중간 경로와는 무관하다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '발열 반응에서 반응 엔탈피(ΔH)의 부호는?',
    '발열 반응: 계(반응물)가 에너지를 방출하므로 H(생성물) < H(반응물). 따라서 ΔH = H(생성물)−H(반응물) < 0, 즉 ΔH < 0이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'ΔH > 0', false, 1),
    (v_quiz_id, 'ΔH < 0', true, 2),
    (v_quiz_id, 'ΔH = 0', false, 3),
    (v_quiz_id, 'ΔH는 정해지지 않는다', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '헤스 법칙에 따르면 반응 엔탈피는 무엇에 의해 결정되는가?',
    '헤스 법칙: ΔH는 반응 경로(중간 단계)에 무관하고, 반응의 초기 상태(반응물)와 최종 상태(생성물)에만 의존한다. 엔탈피(H)는 상태 함수이기 때문이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응 경로의 수와 복잡도', false, 1),
    (v_quiz_id, '반응 속도', false, 2),
    (v_quiz_id, '반응물과 생성물의 초기·최종 상태', true, 3),
    (v_quiz_id, '촉매의 종류', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '홑원소 물질(O₂, H₂ 등)의 표준 생성 엔탈피(ΔH°f) 값은?',
    '표준 생성 엔탈피는 "홑원소 물질에서 화합물 1몰을 생성"할 때의 ΔH이다. 홑원소 물질 자체는 홑원소 물질에서 만들어지는 것이 아니므로 ΔH°f = 0으로 정의한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '+100 kJ/mol', false, 1),
    (v_quiz_id, '-100 kJ/mol', false, 2),
    (v_quiz_id, '0 kJ/mol', true, 3),
    (v_quiz_id, '물질마다 다르다', false, 4);

  -- ============================================================
  -- LESSON 2: 결합 에너지와 ΔH
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '결합 에너지와 ΔH',
    E'■ **결합 에너지** (Bond Energy, BE)\n'
    '기체 상태에서 공유 결합 1몰을 끊는 데 필요한 에너지 (항상 양수, 흡열).\n'
    '반대로 결합이 형성될 때는 같은 에너지를 방출 (발열).\n'
    '주요 결합의 결합 에너지 값 (자세한 내용은 아래 표 참고)\n\n'
    '■ 결합 에너지로 ΔH 계산\n'
    'ΔH = Σ(끊는 결합 에너지) − Σ(형성 결합 에너지)\n'
    '끊는 결합 (반응물): 에너지 흡수 → 양수 기여\n'
    '형성 결합 (생성물): 에너지 방출 → 음수 기여\n\n'
    '■ 예시: H₂(g) + F₂(g) → 2HF(g) 반응의 ΔH\n'
    '끊는 결합: H–H (436 kJ) + F–F (159 kJ) = +595 kJ\n'
    '형성 결합: 2 × H–F (568 kJ) = −1136 kJ\n'
    'ΔH = 595 − 1136 = −541 kJ\n\n'
    '■ 결합 에너지와 결합 강도\n'
    '- 결합 에너지 높음 → 결합이 강함 → 끊기 어려움\n'
    '- **삼중결합**(N≡N: 945 kJ) > **이중결합**(O=O: 498 kJ) > 단결합(O–O: 146 kJ)\n'
    '- 결합 에너지가 높을수록 결합 길이가 짧다\n\n'
    '■ 결합 에너지 ΔH vs 생성 엔탈피 ΔH\n'
    '결합 에너지로 계산한 ΔH는 근사값이다 (기체 상태 결합 가정).\n'
    '생성 엔탈피로 계산한 ΔH가 실험값에 더 가깝다.',
    '[
      {"label": "결합 에너지로 ΔH 계산", "formula": "ΔH = Σ(반응물 결합 에너지) − Σ(생성물 결합 에너지)", "description": "반응물 결합을 끊는 데 에너지 흡수(+), 생성물 결합 형성 시 에너지 방출(-). 차이가 ΔH"},
      {"label": "결합 차수와 에너지", "formula": "삼중결합 > 이중결합 > 단결합 (결합 에너지 순서)", "description": "결합 차수가 높을수록 결합 에너지 크고(강함), 결합 길이는 짧다"}
    ]'::jsonb,
    '[
      {"problem": "CH₄(g) + 2O₂(g) → CO₂(g) + 2H₂O(g) 반응의 ΔH를 결합 에너지로 계산하시오.\n결합 에너지(kJ/mol): C–H=414, O=O=498, C=O(CO₂)=799, O–H=463", "solution": "끊기: 4(C-H)+2(O=O) = 4(414)+2(498) = 1656+996 = +2652 kJ\n형성: 2(C=O)+4(O-H) = 2(799)+4(463) = 1598+1852 = −3450 kJ\nΔH = 2652−3450 = −798 kJ"},
      {"problem": "N≡N 결합 에너지가 945 kJ/mol로 매우 높다. 이것이 N₂의 화학적 안정성에 어떤 의미가 있는가?", "solution": "결합 에너지가 높다는 것은 그 결합을 끊는 데 많은 에너지가 필요하다는 뜻이다. N₂는 삼중결합으로 매우 강하게 결합되어 있어 쉽게 다른 물질과 반응하지 않는다 (대기 중 N₂가 안정하게 존재하는 이유). 이것이 하버 공정으로 암모니아를 합성하기 어려운 이유이기도 하다."}
    ]'::jsonb,
    '결합 에너지로 ΔH를 구하는 것은 탑 쌓기 게임과 같다. 반응물의 결합(탑)을 부수는 데 에너지(블록)가 필요하고, 생성물의 결합(새 탑)을 쌓을 때 에너지가 방출된다. 부순 탑의 블록 수(에너지)와 새로 쌓은 탑의 블록 수의 차이가 ΔH이다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '결합 에너지로 반응 엔탈피를 계산할 때, 생성물의 결합 에너지는 어떻게 취급하는가?',
    '생성물에서는 새로운 결합이 형성되어 에너지가 방출된다. 따라서 ΔH 계산 시 생성물 결합 에너지는 음수(−)로 기여한다. ΔH = Σ(반응물 결합 끊기) − Σ(생성물 결합 형성).',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양수(+)로 더한다', false, 1),
    (v_quiz_id, '음수(−)로 뺀다', true, 2),
    (v_quiz_id, '무시한다', false, 3),
    (v_quiz_id, '반응물과 같은 부호로 적용한다', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '다음 결합 중 결합 에너지가 가장 큰 것은?',
    'N≡N(삼중결합)=945 kJ/mol > O=O(이중결합)=498 kJ/mol > O-H(단결합)=463 kJ/mol > C-H(단결합)=414 kJ/mol. 삼중결합이 가장 강하다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'C–H 단결합', false, 1),
    (v_quiz_id, 'O=O 이중결합', false, 2),
    (v_quiz_id, 'N≡N 삼중결합', true, 3),
    (v_quiz_id, 'O–H 단결합', false, 4);

  -- ============================================================
  -- LESSON 3: 연소 반응의 화학량론
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '연소 반응의 화학량론',
    E'■ 연소 반응이란?\n'
    '연료가 산소(O₂)와 빠르게 반응하여 열과 빛을 방출하는 산화-환원 반응이다.\n\n'
    '■ **완전 연소** (Complete Combustion)\n'
    '연료 중 탄소 → CO₂, 수소 → H₂O로 완전히 산화되는 연소.\n'
    '탄화수소 일반 완전 연소식:\n'
    'CₙHₘ + (n + m/4) O₂ → nCO₂ + (m/2) H₂O\n\n'
    '주요 연료(메탄·에탄·프로판·옥탄)의 완전 연소식과 ΔH° (자세한 내용은 아래 표 참고)\n\n'
    '■ **불완전 연소** (Incomplete Combustion)\n'
    '산소가 부족할 때 CO(일산화탄소)와 그을음(탄소 입자)이 생성.\n'
    'CH₄ + 3/2 O₂ → CO + 2H₂O  (산소 부족, CO 생성)\n'
    'CH₄ + O₂ → C(s) + 2H₂O  (산소 극도 부족, 그을음)\n\n'
    '■ 연료 **발열량** 비교\n'
    '연료 종류에 따라 단위 질량당 발열량(MJ/kg)이 크게 다르다 (자세한 내용은 아래 표 참고)\n\n'
    '■ 양적 계산 흐름\n'
    '① 연료 질량 → 몰수 (÷ 몰질량)\n'
    '② 반응식 계수비로 O₂ 몰수, CO₂ 몰수 계산\n'
    '③ 발열량: 연료 몰수 × ΔH°combustion',
    '[
      {"label": "탄화수소 완전 연소식", "formula": "CₙHₘ + (n+m/4)O₂ → nCO₂ + (m/2)H₂O", "description": "계수 계산: O₂ 계수 = n + m/4. CO₂는 탄소 수(n)와 같고 H₂O는 수소 수의 절반(m/2)"},
      {"label": "발열량 순서", "formula": "H₂(142) > CH₄(55) > C₃H₈(50) > 가솔린(44) > 석탄(24) [MJ/kg]", "description": "수소가 단위 질량당 발열량이 가장 높다. C:H 비율이 낮을수록 발열량이 높은 경향"}
    ]'::jsonb,
    '[
      {"problem": "프로판(C₃H₈) 44 g의 완전 연소 시 발생하는 CO₂의 질량은? (C=12, H=1, O=16)", "solution": "C₃H₈ 몰질량=44 g/mol. 44÷44=1 mol. 반응식: C₃H₈+5O₂→3CO₂+4H₂O. C₃H₈ 1몰에서 CO₂ 3몰. CO₂ 질량=3×44=132 g"},
      {"problem": "불완전 연소가 발생하면 CO가 생성되는 이유를 설명하고, CO가 위험한 이유를 쓰시오.", "solution": "산소가 부족하면 탄소가 CO₂까지 완전히 산화되지 못하고 CO에서 멈춘다(CH₄+3/2O₂→CO+2H₂O). CO는 혈액 속 헤모글로빈과 강하게 결합하여 산소 운반을 방해하므로 극소량(200 ppm)에도 중독 위험이 있다."}
    ]'::jsonb,
    '완전 연소는 쓰레기를 완벽하게 소각하는 것(재만 남음), 불완전 연소는 불이 중간에 꺼져 그을음과 악취가 남는 것이다. 가스레인지 불꽃이 파란색이면 완전 연소(충분한 산소), 노란색이면 불완전 연소(산소 부족, CO 위험)를 나타낸다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '부탄(C₄H₁₀)의 완전 연소 반응식에서 O₂의 계수는?',
    'CₙHₘ에서 n=4, m=10. O₂ 계수 = n + m/4 = 4 + 10/4 = 4 + 2.5 = 6.5. 정수로: 2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O. C₄H₁₀ 1몰 기준 O₂ = 6.5몰.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '5', false, 1),
    (v_quiz_id, '6', false, 2),
    (v_quiz_id, '6.5 (또는 13/2)', true, 3),
    (v_quiz_id, '8', false, 4);

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '가스레인지 불꽃이 노란색으로 변할 때 나타나는 현상은?',
    '불꽃이 노란색이 되면 산소 공급이 부족하여 불완전 연소가 일어나고 있다는 신호다. 이때 유독한 CO(일산화탄소)와 그을음(C 입자)이 생성되어 위험하다. 파란 불꽃=완전 연소.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '완전 연소가 더 잘 일어난다', false, 1),
    (v_quiz_id, '불완전 연소로 CO와 그을음이 발생한다', true, 2),
    (v_quiz_id, '에너지 효율이 높아진다', false, 3),
    (v_quiz_id, '수소가 연소된다는 신호이다', false, 4);

  -- ============================================================
  -- LESSON 4: 연소 효율과 발열량 계산
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '연소 효율과 발열량 계산',
    E'■ 연소 엔탈피 (ΔH°combustion)\n'
    '연료 1몰이 완전 연소할 때 방출하는 에너지 (발열이므로 ΔH < 0).\n'
    '주요 연료(CH₄·C₃H₈·C₈H₁₈·H₂)의 연소 엔탈피 값 (자세한 내용은 아래 표 참고)\n\n'
    '■ **고발열량(HHV)** vs **저발열량(LHV)**\n'
    '- HHV(High Heating Value): 연소 후 H₂O가 액체로 응결할 때 (잠열 포함)\n'
    '- LHV(Low Heating Value): H₂O가 기체로 남을 때 (잠열 미포함)\n'
    '실제 엔진·보일러 설계에는 LHV를 주로 사용한다.\n\n'
    '■ 이론 공기량과 공연비 (AFR: Air-Fuel Ratio)\n'
    '연료를 완전 연소시키는 데 필요한 최소 공기량.\n'
    '공기 조성: 약 21% O₂, 79% N₂ (질량비로 O₂ : 공기 ≈ 1 : 4.76)\n\n'
    '메탄 기준:\n'
    'CH₄ + 2O₂ → CO₂ + 2H₂O\n'
    'O₂ 필요량 = 2 mol × 32 g/mol = 64 g\n'
    '이론 공기량 = 64 × (100/23.2) ≈ 276 g  [공기 중 O₂ 질량 % ≈ 23.2%]\n'
    '이론 AFR = 276 / 16 ≈ 17.2 (질량비)\n\n'
    '■ 과잉 공기 계수 (λ, Lambda)\n'
    'λ = 실제 공급 공기량 / 이론 공기량\n'
    '- λ < 1: 공기 부족 → 불완전 연소 (CO, HC 배출)\n'
    '- λ = 1: 이론 공연비 (완전 연소 조건)\n'
    '- λ > 1: 과잉 공기 → 완전 연소, 그러나 효율↓ (과잉 N₂ 가열 손실)\n\n'
    '■ **열효율** (Thermal Efficiency)\n'
    '열효율 = (유효 출력) / (연료 공급 에너지) × 100%\n'
    '엔진·장치 종류별 열효율 범위 비교 (자세한 내용은 아래 표 참고)',
    '[
      {"label": "이론 AFR (메탄 기준)", "formula": "AFR(CH₄) = 이론 공기질량 / 연료질량 ≈ 17.2", "description": "CH₄ 1 g 완전 연소에 공기 17.2 g 필요. 공기 중 O₂ 비율(23.2%)로 역산"},
      {"label": "과잉 공기 계수 λ", "formula": "λ = 실제 공기량 / 이론 공기량 (λ=1이 이론 완전 연소)", "description": "λ<1: 불완전 연소(CO), λ>1: 완전 연소이나 효율 감소, λ=1: 최적 연소 조건"}
    ]'::jsonb,
    '[
      {"problem": "메탄(CH₄) 32 g을 완전 연소할 때 발생하는 에너지는? (ΔH°c = −890 kJ/mol, 몰질량=16 g/mol)", "solution": "메탄 몰수 = 32÷16 = 2 mol. 발생 에너지 = 2 × 890 = 1780 kJ"},
      {"problem": "디젤 엔진의 열효율이 40%이고 연료 소비가 시간당 10 L라면, 실제 출력(kW)은? (경유 밀도=0.84 kg/L, LHV=43 MJ/kg)", "solution": "연료 질량=10×0.84=8.4 kg/h. 공급 에너지=8.4×43=361.2 MJ/h=100.3 kWh. 유효 출력=100.3×0.40=40.1 kW"}
    ]'::jsonb,
    '연소 효율은 자동차 연비와 같다. 연료 에너지 100원 중 40원이 실제 바퀴를 굴리는 데 쓰이고(열효율 40%), 나머지 60원은 열로 날아간다. 엔진 설계자들은 이 60원을 줄이기 위해 수십 년간 노력해왔고, 연료전지차는 이 손실을 크게 줄인 대안이다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '메탄(CH₄) 80 g이 완전 연소할 때 방출되는 에너지는? (ΔH°c = −890 kJ/mol, 몰질량=16 g/mol)',
    'CH₄ 몰수 = 80 ÷ 16 = 5 mol. 방출 에너지 = 5 × 890 = 4450 kJ.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '890 kJ', false, 1),
    (v_quiz_id, '2225 kJ', false, 2),
    (v_quiz_id, '4450 kJ', true, 3),
    (v_quiz_id, '7120 kJ', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '과잉 공기 계수(λ)가 1보다 작을 때(λ<1) 나타나는 결과는?',
    'λ<1이면 실제 공급 공기량이 이론 공기량보다 적다 → 산소 부족 → 불완전 연소. CO와 미연 탄화수소(HC)가 배출된다. 연소 온도도 낮아지고 에너지 효율이 떨어진다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '완전 연소가 일어나 효율이 최대화된다', false, 1),
    (v_quiz_id, '산소 과잉으로 NOx가 증가한다', false, 2),
    (v_quiz_id, '불완전 연소로 CO와 미연 탄화수소가 배출된다', true, 3),
    (v_quiz_id, '연소가 일어나지 않는다', false, 4);

  -- ============================================================
  -- LESSON 5: 반응 속도와 연소 제어
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '반응 속도와 연소 제어',
    E'■ **아레니우스 방정식** (Arrhenius Equation)\n'
    '반응 속도 상수(k)와 온도(T), **활성화 에너지**(Ea)의 관계:\n'
    'k = A · e^(−Ea/RT)\n'
    '- A: 빈도 인자 (충돌 빈도)\n'
    '- Ea: 활성화 에너지 (J/mol)\n'
    '- R: 기체 상수 = 8.314 J/(mol·K)\n'
    '- T: 절대 온도 (K)\n'
    '→ 온도↑ 또는 Ea↓ 이면 k 증가 (반응 빨라짐)\n\n'
    '■ 점화 에너지와 **발화점**\n'
    '- 발화점(Ignition Temperature): 외부 점화 없이 자연 발화하는 최저 온도\n'
    '- 연소 범위(Flammability Limit): 공기 중 가연성 가스 농도 범위\n'
    '연료별 발화점·연소 범위 값 (자세한 내용은 아래 표 참고)\n\n'
    '■ 연소 제어 — 연쇄 반응\n'
    '연소는 연쇄 반응(chain reaction) 메커니즘으로 진행된다.\n'
    '① 개시(Initiation): 라디칼(·H, ·OH) 생성 — 점화 에너지 필요\n'
    '② 전파(Propagation): 라디칼이 연료 분자와 반응, 새 라디칼 생성 (자기 가속)\n'
    '③ 종결(Termination): 라디칼끼리 결합하여 안정한 분자로 — 연소 종료\n\n'
    '■ 소화의 원리 (**소화 삼각형**)\n'
    '연소의 3요소: 연료 + 산소 + 점화원 → 이 중 하나 제거 = 소화\n'
    '소화 방법별 제거 대상과 예시 (자세한 내용은 아래 표 참고)\n\n'
    '■ 촉매와 연소 제어\n'
    '자동차 삼원 촉매(TWC): Pt·Pd·Rh 촉매로 CO, HC, NOx 동시 처리\n'
    'CO + O₂ → CO₂, HC + O₂ → CO₂ + H₂O, NO + CO → N₂ + CO₂',
    '[
      {"label": "아레니우스 방정식", "formula": "k = A·e^(−Ea/RT)", "description": "온도(T) 증가 또는 활성화 에너지(Ea) 감소 → k 증가 → 반응 속도 빨라짐"},
      {"label": "소화 삼각형", "formula": "연소 = 연료 + 산소 + 점화원 → 1개 제거 = 소화", "description": "냉각(점화원↓), 질식(O₂↓), 제거(연료↓), 억제(라디칼 포획) 4가지 소화 방법"}
    ]'::jsonb,
    '[
      {"problem": "수소(H₂)의 연소 범위가 4~75%로 메탄(5~15%)보다 훨씬 넓다. 이것이 수소 안전에서 의미하는 바는?", "solution": "연소 범위가 넓다는 것은 공기 중 수소 농도가 4%만 돼도, 또는 75%까지도 폭발 위험이 있다는 뜻이다. 메탄은 5~15% 범위만 위험하지만 수소는 훨씬 넓은 농도에서 점화될 수 있어 누출 감지·환기 설계가 매우 중요하다."},
      {"problem": "자동차 삼원 촉매(TWC)가 동시에 처리하는 오염 물질 3가지를 쓰고 각 반응식을 쓰시오.", "solution": "① CO: 2CO + O₂ → 2CO₂ ② HC(미연 탄화수소): CₙHₘ + O₂ → CO₂ + H₂O ③ NOx: 2NO + 2CO → N₂ + 2CO₂ (NOx를 무해한 N₂로 환원)"}
    ]'::jsonb,
    '연소 제어는 요리 화력 조절과 같다. 불을 붙이려면(점화) 충분한 온도와 산소가 필요하고, 불이 붙은 후 요리를 마치면(소화) 가스 밸브를 잠그거나(연료 제거), 뚜껑을 덮어(산소 차단), 물을 부어(냉각) 끈다. 연소 라디칼은 연쇄적으로 반응을 이어가는 심지와 같아서, 이 심지를 포획하면 소화가 빨라진다(억제 소화).'
  )
  RETURNING id INTO v_lesson5_id;

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '아레니우스 방정식에서 온도(T)가 증가할 때 반응 속도 상수(k)는?',
    'k = A·e^(−Ea/RT)에서 T가 증가하면 지수 −Ea/RT의 절댓값이 감소 → e^(−Ea/RT) 증가 → k 증가. 따라서 온도가 높을수록 반응이 빨라진다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '감소한다', false, 1),
    (v_quiz_id, '변화 없다', false, 2),
    (v_quiz_id, '증가한다', true, 3),
    (v_quiz_id, '먼저 증가 후 감소한다', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '수조에 CO₂ 소화기를 사용하여 불을 끄는 것은 소화 삼각형의 어떤 요소 제거에 해당하는가?',
    'CO₂는 불연성 기체로 연소 부위를 덮어 공기(O₂)의 접근을 차단한다. 이것은 산소 제거 방식(질식 소화)이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '연료 제거 (제거 소화)', false, 1),
    (v_quiz_id, '산소 제거 (질식 소화)', true, 2),
    (v_quiz_id, '점화원 제거 (냉각 소화)', false, 3),
    (v_quiz_id, '라디칼 포획 (억제 소화)', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '자동차 삼원 촉매(TWC)의 주요 역할은?',
    '삼원 촉매(Three-Way Catalyst)는 Pt, Pd, Rh 등의 귀금속 촉매로 배기 가스 속 CO, HC(미연 탄화수소), NOx를 동시에 CO₂, H₂O, N₂로 변환한다. "삼원(三元)"은 세 가지 오염물 동시 처리를 의미한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CO₂만 포집하는 장치', false, 1),
    (v_quiz_id, 'CO, HC, NOx를 무해한 물질로 동시 변환', true, 2),
    (v_quiz_id, '미세먼지(PM)를 포집하는 필터', false, 3),
    (v_quiz_id, '연소 온도를 높여 효율을 개선', false, 4);

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '연쇄 반응의 "전파(Propagation)" 단계의 특징으로 옳은 것은?',
    '전파 단계에서는 라디칼이 연료 분자와 반응하여 새로운 라디칼과 생성물을 만들어 연쇄적으로 반응이 계속된다. 이 단계가 연소의 핵심 자기 가속 메커니즘이다.',
    4
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '라디칼이 생성되는 첫 번째 단계', false, 1),
    (v_quiz_id, '라디칼끼리 결합하여 안정 분자가 된다', false, 2),
    (v_quiz_id, '라디칼이 연료와 반응하여 새 라디칼과 생성물이 계속 만들어진다', true, 3),
    (v_quiz_id, '외부 점화 에너지가 필요한 단계', false, 4);

  RAISE NOTICE '열화학과 연소공학 단원 삽입 완료: 레슨 5개, 퀴즈 13개';
END $$;
