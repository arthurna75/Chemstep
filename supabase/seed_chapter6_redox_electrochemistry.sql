-- ============================================================
-- 고등학교 화학II 2015 개정 교육과정 연계
-- Chapter 6: 산화-환원과 전기화학
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
  SELECT '산화-환원과 전기화학', '산화수와 전자 이동을 이해하고 전지·연료전지·이차전지의 원리를 학습한다', '🔋', 6
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '산화-환원과 전기화학');

  -- 챕터 조회
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '산화-환원과 전기화학';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '산화-환원과 전기화학 단원을 찾을 수 없습니다.';
  END IF;

  -- 기존 레슨 삭제 (퀴즈/옵션은 CASCADE로 삭제됨)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 산화수와 산화-환원 반응
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '산화수와 산화-환원 반응',
    E'■ 산화와 환원의 정의\n'
    '산화-환원 반응은 전자(e⁻)가 한 물질에서 다른 물질로 이동하는 반응이다.\n'
    '- **산화**(Oxidation): 전자를 잃는 것 → 산화수 증가\n'
    '- **환원**(Reduction): 전자를 얻는 것 → 산화수 감소\n'
    '산화와 환원은 항상 동시에 일어난다 (전자를 잃는 물질이 있으면 반드시 받는 물질이 있다).\n\n'
    '■ **산화수**(Oxidation Number) 규칙\n'
    '산화수는 홑원소 물질=0, 단원자 이온=이온의 전하, 화합물에서 O=-2(일반), H=+1(일반), 다원자 이온의 산화수 합=이온 전하, 중성 화합물의 산화수 합=0의 규칙으로 결정한다. (자세한 내용은 아래 표 참고)\n\n'
    '■ **산화제**와 **환원제**\n'
    '- 산화제(Oxidizing Agent): 다른 물질을 산화시키고 자신은 환원되는 물질 (전자를 얻음)\n'
    '- 환원제(Reducing Agent): 다른 물질을 환원시키고 자신은 산화되는 물질 (전자를 잃음)\n\n'
    '■ 반쪽 반응식 (Half-Reaction)\n'
    '산화-환원 반응을 산화 반쪽 반응과 환원 반쪽 반응으로 분리하면 전자 이동을 명확히 볼 수 있다.\n'
    '예) Zn + Cu²⁺ → Zn²⁺ + Cu\n'
    '산화: Zn → Zn²⁺ + 2e⁻   (Zn의 산화수: 0 → +2, 전자 2개 잃음)\n'
    '환원: Cu²⁺ + 2e⁻ → Cu   (Cu의 산화수: +2 → 0, 전자 2개 얻음)',
    '[
      {"label": "산화수 규칙 요약", "formula": "홑원소=0, 단원자이온=전하, O=-2(일반), H=+1(일반), 화합물 합=0", "description": "산화수를 구하는 순서: 홑원소→이온→O→H→나머지 순으로 적용"},
      {"label": "반쪽 반응식", "formula": "산화: Zn → Zn²⁺ + 2e⁻ / 환원: Cu²⁺ + 2e⁻ → Cu", "description": "전체 반응은 두 반쪽 반응의 합. 잃은 전자 수 = 얻은 전자 수"}
    ]'::jsonb,
    '[
      {"problem": "H₂SO₄에서 S의 산화수를 구하시오.", "solution": "H₂SO₄은 전기적으로 중성. H=+1이므로 2(+1)+S+4(-2)=0 → S=+6"},
      {"problem": "2Fe + 3Cl₂ → 2FeCl₃에서 산화되는 물질과 환원되는 물질을 각각 구하시오.", "solution": "Fe: 산화수 0→+3 (산화됨, 환원제). Cl: 산화수 0→-1 (환원됨, 산화제)"}
    ]'::jsonb,
    '산화-환원은 전자를 주고받는 거래다. 산화되는 물질은 전자를 "파는" 쪽(환원제), 환원되는 물질은 전자를 "사는" 쪽(산화제)이다. 돈(전자)은 항상 파는 쪽에서 사는 쪽으로 이동하며, 중간에 사라지지 않는다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    'MnO₄⁻ 이온에서 Mn의 산화수는?',
    'MnO₄⁻에서 O의 산화수=-2(4개), 전체 이온 전하=-1. Mn+4(-2)=-1 → Mn=+7. 과망가니즈산 이온에서 Mn은 최고 산화수인 +7이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '+3', false, 1),
    (v_quiz_id, '+5', false, 2),
    (v_quiz_id, '+7', true, 3),
    (v_quiz_id, '+9', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '다음 반응에서 산화제 역할을 하는 물질은? Zn + 2HCl → ZnCl₂ + H₂',
    'Zn은 산화수 0→+2 (산화됨 → 환원제). H는 산화수 +1→0 (환원됨 → 산화제). 즉 HCl 속의 H⁺가 산화제이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Zn', false, 1),
    (v_quiz_id, 'HCl (H⁺)', true, 2),
    (v_quiz_id, 'ZnCl₂', false, 3),
    (v_quiz_id, 'Cl⁻', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '산화-환원 반응에 대한 설명으로 옳지 않은 것은?',
    '산화와 환원은 항상 동시에 일어나므로, 산화만 일어나거나 환원만 일어나는 반응은 없다. 전자를 잃는 물질이 있으면 반드시 그 전자를 받는 물질이 있다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '산화가 일어날 때는 반드시 환원도 동시에 일어난다.', false, 1),
    (v_quiz_id, '환원제는 전자를 잃고 산화된다.', false, 2),
    (v_quiz_id, '산화 반응만 단독으로 일어날 수 있다.', true, 3),
    (v_quiz_id, '산화수가 증가한 물질은 산화된 것이다.', false, 4);

  -- ============================================================
  -- LESSON 2: 전기화학 전지의 원리
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '전기화학 전지의 원리',
    E'■ 전기화학 전지란?\n'
    '자발적인 산화-환원 반응에서 발생하는 전자의 흐름을 외부 회로를 통해 전류로 사용하는 장치이다.\n'
    '이를 **갈바니 전지**(Galvanic Cell) 또는 볼타 전지(Voltaic Cell)라고 한다.\n\n'
    '■ 전지의 구성 요소\n'
    '- **음극**(Anode, -극): 산화 반응이 일어나는 전극 (전자를 방출, 질량 감소)\n'
    '- **양극**(Cathode, +극): 환원 반응이 일어나는 전극 (전자를 받음, 질량 증가)\n'
    '- 전해질 용액: 이온이 이동하는 매체\n'
    '- **염다리**(Salt Bridge): 두 반쪽 전지의 이온 균형을 유지하여 전하 중성 유지\n\n'
    '■ 다니엘 전지 (Daniel Cell)\n'
    '음극: Zn | ZnSO₄(aq) — 양극: CuSO₄(aq) | Cu\n'
    '음극 반응(산화): Zn → Zn²⁺ + 2e⁻\n'
    '양극 반응(환원): Cu²⁺ + 2e⁻ → Cu\n'
    '전체 반응: Zn + Cu²⁺ → Zn²⁺ + Cu\n'
    '전지 전압: E°cell ≈ +1.10 V\n\n'
    '■ **표준 환원 전위** (E°)\n'
    '각 반쪽 반응이 환원될 때 발생하는 전압. 단위: V (볼트). Cu²⁺/Cu는 +0.34 V, Zn²⁺/Zn은 -0.76 V로, 값이 높을수록 양극이 된다. (자세한 내용은 아래 표 참고)\n'
    '전지 전압: E°cell = E°(양극) − E°(음극) = 0.34 − (−0.76) = +1.10 V\n\n'
    '■ 반응 자발성\n'
    'E°cell > 0 이면 반응이 자발적으로 일어나 전류를 생성할 수 있다.\n'
    'E°(환원 전위)가 높은 쪽이 양극(+극)이 된다.',
    '[
      {"label": "전지 전압", "formula": "E°cell = E°환원(양극) − E°환원(음극)", "description": "표준 환원 전위가 높은 쪽이 양극(+), 낮은 쪽이 음극(-). E°cell > 0이면 자발적 반응"},
      {"label": "다니엘 전지 반응", "formula": "음극: Zn→Zn²⁺+2e⁻ / 양극: Cu²⁺+2e⁻→Cu", "description": "전체: Zn + Cu²⁺ → Zn²⁺ + Cu, E°cell = +1.10 V"}
    ]'::jsonb,
    '[
      {"problem": "E°(Ag⁺/Ag)=+0.80V, E°(Fe²⁺/Fe)=-0.44V인 전지를 구성할 때 양극과 음극은?", "solution": "E°가 높은 Ag⁺/Ag가 양극(환원), E°가 낮은 Fe²⁺/Fe가 음극(산화). E°cell = 0.80−(−0.44) = +1.24 V"},
      {"problem": "다니엘 전지에서 시간이 지날수록 Zn 전극과 Cu 전극의 질량 변화는?", "solution": "음극(Zn): Zn이 Zn²⁺로 녹아들어 질량 감소. 양극(Cu): Cu²⁺가 Cu로 석출되어 질량 증가."}
    ]'::jsonb,
    '전지는 산화-환원 반응의 에너지를 전기로 변환하는 장치다. 높은 곳의 물이 낮은 곳으로 흐르며 터빈을 돌리듯, 산화되기 쉬운 금속(음극)에서 환원되기 쉬운 이온(양극)으로 전자가 흘러 전류를 만든다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '다니엘 전지에서 질량이 감소하는 전극은?',
    '음극(Zn 전극)에서 산화 반응 Zn→Zn²⁺+2e⁻이 일어나 Zn이 녹아 들어가므로 질량이 감소한다. 양극(Cu)에서는 Cu²⁺+2e⁻→Cu로 구리가 석출되어 질량이 증가한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양극 (Cu 전극)', false, 1),
    (v_quiz_id, '음극 (Zn 전극)', true, 2),
    (v_quiz_id, '두 전극 모두 감소', false, 3),
    (v_quiz_id, '두 전극 모두 변화 없음', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    'E°(Mg²⁺/Mg)=-2.37 V, E°(Ag⁺/Ag)=+0.80 V인 전지의 E°cell은?',
    'E°가 높은 Ag⁺/Ag가 양극, Mg²⁺/Mg가 음극. E°cell = E°(양극)−E°(음극) = 0.80−(−2.37) = +3.17 V',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '+1.57 V', false, 1),
    (v_quiz_id, '+3.17 V', true, 2),
    (v_quiz_id, '-1.57 V', false, 3),
    (v_quiz_id, '-3.17 V', false, 4);

  -- ============================================================
  -- LESSON 3: 이차전지 — 충전과 방전
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '이차전지: 충전과 방전',
    E'■ **일차전지** vs **이차전지**\n'
    '- 일차전지(Primary Cell): 방전 후 재사용 불가 (건전지, 알칼리 전지)\n'
    '- 이차전지(Secondary Cell): 전기를 가해 역반응으로 충전 가능, 반복 사용 (리튬이온 전지, 납축전지)\n\n'
    '■ **납축전지** (Lead-Acid Battery)\n'
    '자동차 배터리의 기본 형태. 전해질: 묽은 황산(H₂SO₄)\n'
    '방전 시 음극(Pb)이 산화되어 PbSO₄가 되고, 양극(PbO₂)이 환원되어 PbSO₄가 된다. (자세한 반응식은 아래 표 참고)\n'
    '충전 시: 방전과 역반응. 외부 전원이 전자를 강제로 역방향으로 흘림.\n'
    '납축전지 전압: 약 2 V/셀 → 6셀 직렬 = 12 V 배터리\n\n'
    '■ **리튬이온 전지** (Li-ion Battery)\n'
    '스마트폰·전기차의 핵심 배터리. **에너지 밀도**가 높고 가볍다.\n'
    '전해질: 유기 용매 속 Li⁺ 이온 (리튬염)\n'
    '방전 시 음극(흑연)에서 Li⁺가 탈리되며 산화되고, 양극(LiCoO₂)에서 Li⁺가 삽입되며 환원된다. (자세한 반응식은 아래 표 참고)\n'
    '충전 시: 역방향. 외부 전원으로 Li⁺를 다시 음극으로 이동.\n\n'
    '■ 이차전지의 주요 성능 지표\n'
    '이차전지의 성능은 용량(mAh), 에너지 밀도(Wh/kg), 사이클 수명, C-rate 등의 지표로 평가한다. (자세한 내용은 아래 표 참고)',
    '[
      {"label": "납축전지 전압", "formula": "셀 전압 ≈ 2V, 12V 배터리 = 6셀 직렬", "description": "각 셀의 산화(Pb→PbSO₄)와 환원(PbO₂→PbSO₄) 반응에서 약 2V 발생"},
      {"label": "리튬이온 전지 작동 원리", "formula": "방전: Li⁺ 음극→양극 이동 / 충전: Li⁺ 양극→음극 이동", "description": "Li⁺가 두 전극 사이를 왕복하는 흔들의자(Rocking Chair) 메커니즘"}
    ]'::jsonb,
    '[
      {"problem": "납축전지를 충전할 때 음극(Pb)에서 일어나는 반응을 쓰시오.", "solution": "충전 시 방전의 역반응: PbSO₄ + 2e⁻ → Pb + SO₄²⁻ (환원). 충전 중에는 음극에서 환원이 일어난다."},
      {"problem": "리튬이온 전지가 납축전지보다 전기차에 적합한 이유를 에너지 밀도 측면에서 설명하시오.", "solution": "리튬이온 전지는 에너지 밀도가 약 150~250 Wh/kg으로, 납축전지(30~40 Wh/kg)보다 5~8배 높다. 같은 에너지를 저장할 때 훨씬 가볍고 작아 전기차에 적합하다."}
    ]'::jsonb,
    '이차전지는 물을 담을 수 있는 댐과 같다. 충전은 물을 위쪽 저수지로 펌프질하는 것, 방전은 저수지에서 물을 흘려 터빈을 돌려 전기를 생산하는 것이다. 충전-방전을 반복해도 물(에너지)을 재사용할 수 있는 점이 일차전지(물을 한번만 쓰고 버리는 통)와 다르다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '리튬이온 전지의 방전 시 Li⁺ 이온은 어느 방향으로 이동하는가?',
    '방전 시 음극(흑연)에서 Li⁺가 빠져나와(산화) 전해질을 통해 양극(LiCoO₂)으로 삽입된다(환원). 전자는 외부 회로를 통해 음극→양극으로 흘러 전류를 형성한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양극 → 음극', false, 1),
    (v_quiz_id, '음극 → 양극', true, 2),
    (v_quiz_id, '이동하지 않는다', false, 3),
    (v_quiz_id, '전해질 내에서만 순환', false, 4);

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '납축전지 12 V를 구성하려면 2 V 셀이 몇 개 필요한가?',
    '셀 전압 2V, 목표 전압 12V. 직렬 연결 시 전압이 합산되므로 12 ÷ 2 = 6개의 셀이 필요하다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '4개', false, 1),
    (v_quiz_id, '5개', false, 2),
    (v_quiz_id, '6개', true, 3),
    (v_quiz_id, '8개', false, 4);

  -- ============================================================
  -- LESSON 4: 연료전지 — 수소 경제의 핵심
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '연료전지: 수소 경제의 핵심',
    E'■ **연료전지**란?\n'
    '연료(수소, 메탄 등)와 산소의 산화-환원 반응 에너지를 직접 전기로 변환하는 장치이다.\n'
    '열기관(연소 → 열 → 기계 → 전기)과 달리 열 단계를 거치지 않아 효율이 높다 (이론 효율 ~83%).\n\n'
    '■ 수소-산소 연료전지 (**PEMFC**: Proton Exchange Membrane Fuel Cell)\n'
    '전해질: 고분자 전해질막(양이온 교환막) — H⁺만 통과 가능\n'
    '음극(Anode, 연료극): H₂ → 2H⁺ + 2e⁻   (수소 산화)\n'
    '양극(Cathode, 공기극): O₂ + 4H⁺ + 4e⁻ → 2H₂O   (산소 환원)\n'
    '전체 반응: 2H₂ + O₂ → 2H₂O + 전기 에너지\n'
    '특징: 배출물이 순수한 물(H₂O)뿐 → 친환경 에너지원\n\n'
    '■ 연료전지의 종류와 비교\n'
    '연료전지는 전해질 종류에 따라 PEMFC, SOFC, MCFC, AFC로 구분되며 운전 온도와 주요 용도가 다르다. (자세한 내용은 아래 표 참고)\n\n'
    '■ **수소 경제**와 에너지 전환\n'
    '수소는 연소해도 물만 생성하므로 탄소중립(carbon neutral) 연료로 주목받는다.\n'
    '**그린 수소**: 재생에너지(태양광, 풍력)로 물을 전기분해 → H₂ 생산\n'
    '수소 연료전지차(FCEV): PEMFC + 수소 탱크 → 충전 3분, 주행 600 km 이상\n\n'
    '■ 연료전지 vs 이차전지\n'
    '- 연료전지: 연료(H₂)를 계속 공급하면 지속 발전 (발전 장치)\n'
    '- 이차전지: 저장된 에너지 소진 후 충전 필요 (에너지 저장 장치)',
    '[
      {"label": "PEMFC 전극 반응", "formula": "음극: 2H₂ → 4H⁺ + 4e⁻ / 양극: O₂ + 4H⁺ + 4e⁻ → 2H₂O", "description": "전체: 2H₂ + O₂ → 2H₂O + 전기에너지. 배출물은 물뿐."},
      {"label": "연료전지 이론 효율", "formula": "효율 = ΔG / ΔH × 100% ≈ 83% (이론값)", "description": "실제 효율은 40~60%. 열기관(카르노 한계 ~40%)보다 높다."}
    ]'::jsonb,
    '[
      {"problem": "PEMFC에서 H₂ 2몰이 반응할 때 이동하는 전자는 몇 몰인가?", "solution": "음극 반응: H₂ → 2H⁺ + 2e⁻. H₂ 1몰당 전자 2몰. H₂ 2몰이면 전자 4몰이 이동한다."},
      {"problem": "연료전지차(FCEV)와 전기차(BEV)의 에너지 저장 방식 차이를 설명하시오.", "solution": "FCEV: 수소 탱크에 H₂ 기체 저장, 연료전지로 발전하여 모터 구동. BEV: 리튬이온 이차전지에 전기 에너지 직접 저장. FCEV는 충전이 빠르고 항속 거리가 길지만 수소 인프라가 필요하다."}
    ]'::jsonb,
    '연료전지는 수소를 직접 전기로 바꾸는 마법 같은 장치다. 마치 제빵기가 밀가루(수소)를 넣으면 빵(전기)을 바로 만들어주는 것처럼, 연소라는 중간 단계 없이 화학 에너지를 전기로 직접 변환한다. 굴뚝이 없고 배출물은 물뿐이다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    'PEMFC(고분자 전해질막 연료전지)에서 전해질막을 통해 이동하는 이온은?',
    'PEM(양이온 교환막)은 H⁺(양성자)만 선택적으로 통과시킨다. 전자(e⁻)는 외부 회로를 통해 흐르고, 음이온은 통과하지 못한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'OH⁻', false, 1),
    (v_quiz_id, 'O²⁻', false, 2),
    (v_quiz_id, 'H⁺', true, 3),
    (v_quiz_id, 'e⁻', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '수소-산소 연료전지의 최종 배출물은?',
    '2H₂ + O₂ → 2H₂O. 수소와 산소만 반응하여 물이 생성되므로 CO₂, NOx, 미세먼지 등 오염 물질이 없다. 이것이 연료전지를 친환경 에너지원으로 주목하는 이유다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CO₂와 H₂O', false, 1),
    (v_quiz_id, 'H₂O만', true, 2),
    (v_quiz_id, 'O₂와 H₂O', false, 3),
    (v_quiz_id, '배출물 없음', false, 4);

  -- ============================================================
  -- LESSON 5: 전기분해와 산업 응용
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '전기분해와 산업 응용',
    E'■ **전기분해** (Electrolysis)\n'
    '외부 전원으로 비자발적 산화-환원 반응을 강제로 일으키는 것이다.\n'
    '갈바니 전지(자발적 반응 → 전기 생성)의 반대 과정이다.\n'
    '- 전원 양극(+)에 연결된 전극 → 산화 발생 (산화 전극, Anode)\n'
    '- 전원 음극(-)에 연결된 전극 → 환원 발생 (환원 전극, Cathode)\n\n'
    '■ 물의 전기분해\n'
    '음극(환원): 2H₂O + 2e⁻ → H₂↑ + 2OH⁻\n'
    '양극(산화): 2H₂O → O₂↑ + 4H⁺ + 4e⁻\n'
    '전체: 2H₂O → 2H₂ + O₂\n'
    '부피비: H₂ : O₂ = 2 : 1  (몰비 = 부피비)\n\n'
    '■ **패러데이 법칙** (Faraday\'s Laws)\n'
    '석출 질량 m = (M × I × t) / (n × F)\n'
    '- M: 원자량 (g/mol)\n'
    '- I: 전류 (A = C/s)\n'
    '- t: 시간 (s)\n'
    '- n: 이온의 전하수 (반응 전자 수)\n'
    '- F: 패러데이 상수 = 96,485 C/mol ≈ 96,500 C/mol\n\n'
    '■ 산업 응용\n'
    '전기분해는 알루미늄 제련, **전기도금**, 구리 정련, 그린 수소 생산 등 다양한 산업 공정에 응용된다. (자세한 내용은 아래 표 참고)',
    '[
      {"label": "패러데이 석출 법칙", "formula": "m = (M × I × t) / (n × F)", "description": "n=이온 전하수, F=96,500 C/mol. 전류×시간=전하량(C), 전하량 96,500C당 1mol 반응."},
      {"label": "물의 전기분해 부피비", "formula": "H₂ : O₂ = 2 : 1 (부피비 = 몰비)", "description": "음극에서 H₂, 양극에서 O₂ 발생. 수집 기체 부피가 2:1이면 정상 반응."}
    ]'::jsonb,
    '[
      {"problem": "2A 전류를 965초간 흘렸을 때 음극에서 석출되는 Cu의 질량은? (Cu 원자량=64, n=2, F=96,500 C/mol)", "solution": "m = (64 × 2 × 965) / (2 × 96,500) = 123,520 / 193,000 ≈ 0.64 g"},
      {"problem": "전기분해에서 전극과 갈바니 전지 전극의 차이점을 산화/환원 측면에서 설명하시오.", "solution": "갈바니 전지: 음극=환원(양극으로부터 전자 받음), 양극=산화(전자 방출). 전기분해: 외부 전원 음극(-)에 연결된 전극=환원, 양극(+)에 연결된 전극=산화. 산화-환원이 일어나는 전극은 동일하나, 자발성(전지)과 비자발성(전기분해)의 차이가 있다."}
    ]'::jsonb,
    '전기분해는 갈바니 전지를 역방향으로 돌리는 것이다. 강물이 자연히 낮은 곳으로 흐르듯(전지: 자발적 반응→전기), 펌프를 써서 물을 위로 끌어올리는 것(전기분해: 전기→비자발적 반응)이 전기분해다. 알루미늄 제련, 전기도금, 그린 수소 생산 모두 이 원리를 산업에 응용한 것이다.'
  )
  RETURNING id INTO v_lesson5_id;

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '물의 전기분해에서 발생하는 수소(H₂)와 산소(O₂)의 부피비는?',
    '음극: 2H₂O + 2e⁻ → H₂ + 2OH⁻ → H₂ 발생. 양극: 2H₂O → O₂ + 4H⁺ + 4e⁻ → O₂ 발생. 전체 반응 2H₂O → 2H₂ + O₂에서 H₂ : O₂ = 2 : 1 (몰비=부피비).',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1 : 1', false, 1),
    (v_quiz_id, '2 : 1', true, 2),
    (v_quiz_id, '1 : 2', false, 3),
    (v_quiz_id, '4 : 1', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '전기도금 시 도금할 물체를 연결해야 하는 전극은?',
    '전기도금에서 도금할 물체는 환원 전극(음극, -)에 연결한다. 양이온 상태의 도금 금속이 환원되어 물체 표면에 석출된다. 도금 금속 덩어리는 양극(+)에 연결하여 지속적으로 녹아 보충된다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양극(+)', false, 1),
    (v_quiz_id, '음극(-)', true, 2),
    (v_quiz_id, '전원과 무관하게 아무 전극', false, 3),
    (v_quiz_id, '염다리에 연결', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '패러데이 법칙에서 m = (M × I × t) / (n × F)의 n이 의미하는 것은?',
    'n은 해당 이온의 전하수 (반응에 참여하는 전자 수)이다. 예를 들어 Cu²⁺이면 n=2, Al³⁺이면 n=3. 같은 전하량이라도 이온의 전하수가 클수록 석출 질량이 적어진다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '원자량 (g/mol)', false, 1),
    (v_quiz_id, '패러데이 상수 (C/mol)', false, 2),
    (v_quiz_id, '이온의 전하수 (반응 전자 수)', true, 3),
    (v_quiz_id, '몰 농도 (mol/L)', false, 4);

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '그린 수소(Green Hydrogen)를 생산하는 방법으로 올바른 것은?',
    '그린 수소는 태양광·풍력 등 재생에너지 전력으로 물을 전기분해(water electrolysis)하여 생산한 수소이다. CO₂를 배출하지 않아 탄소중립 에너지원으로 주목받는다.',
    4
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '천연가스를 고온 수증기와 반응(개질)시켜 생산', false, 1),
    (v_quiz_id, '재생에너지 전력으로 물을 전기분해하여 생산', true, 2),
    (v_quiz_id, '원유를 분별 증류하여 분리', false, 3),
    (v_quiz_id, '석탄을 가스화하여 생산', false, 4);

  RAISE NOTICE '산화-환원과 전기화학 단원 삽입 완료: 레슨 5개, 퀴즈 13개';
END $$;
