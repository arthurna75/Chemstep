-- ============================================================
-- 심화과정 챕터 C: 부식과 방식 (심화)
-- 산화-환원과 전기화학 단원과 연계된 심화학습
-- 레슨 5개 + 퀴즈 14개
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
  -- 챕터가 없으면 생성 (심화 트랙)
  INSERT INTO chapters (title, description, icon, order_index, track)
  SELECT '부식과 방식 (심화)', '철이 녹스는 이유를 산화-환원 반응으로 분석하고, 도금·음극 방식 등 실제 산업에서 금속을 보호하는 전기화학 기술을 탐구합니다', '🛡️', 3, 'advanced'
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '부식과 방식 (심화)');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '부식과 방식 (심화)';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '부식과 방식 (심화) 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ════════════════════════════════════════
  -- LESSON 1: 부식이란? — 금속의 전기화학적 손상
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '부식이란? — 금속의 전기화학적 손상',
    '■ 부식이란 무엇인가 (기초)
금속이 주변 환경(공기, 물, 화학 물질)과 반응하여 원래의 성질을 잃고 화합물로 변하는 현상을 **부식**(corrosion)이라고 합니다. [산화-환원과 전기화학](chapter:산화-환원과 전기화학) 단원에서 배운 것처럼, 부식은 금속이 전자를 잃고 산화되는 반응입니다.

① 건식 부식: 고온의 기체(산소 등)와 직접 반응하여 표면에 산화막이 생기는 부식
② 습식 부식: 물(수분)과 {{전해질::이온이 녹아 있어 전기를 통할 수 있는 용액}}이 있는 환경에서 일어나는 전기화학적 부식 — 일상에서 보는 대부분의 녹이 이 유형
③ **습식 부식**은 반드시 물, 산소, 전해질 세 가지 조건이 함께 있어야 진행됨

■ 철의 녹슬음(습윤부식) 메커니즘 (핵심)
철 표면의 물방울 하나는 작은 **갈바니 전지**(부식 전지)처럼 작동합니다. [산화수와 산화-환원 반응](lesson:산화-환원과 전기화학/1)에서 배운 반쪽 반응식으로 정확히 나타낼 수 있습니다.

물방울 중심(산소가 적게 닿는 곳)에서는 산화 반응이, 물방울 가장자리(산소가 많이 닿는 곳)에서는 환원 반응이 일어납니다. 두 반응에서 생긴 이온들이 만나 Fe(OH)₂를 이루고, 공기 중 산소에 다시 산화되어 우리가 아는 붉은 녹(Fe₂O₃·xH₂O)이 됩니다.

■ 부식은 왜 국소 갈바니 전지인가 (심화)
[전기화학 전지의 원리](lesson:산화-환원과 전기화학/2)에서 다룬 다니엘 전지는 음극과 양극이 분리된 두 반쪽 전지였지만, 부식은 하나의 금속 표면 위에서 미세한 음극 영역과 양극 영역이 동시에 무작위로 형성되는 점이 다릅니다. 전자는 금속 내부를 통해, 이온은 물(전해질) 속을 통해 이동하며 회로가 완성됩니다.

※ 자동차·다리·선박처럼 철을 많이 쓰는 구조물에서 부식은 매년 막대한 경제적 손실을 일으키는 주요 원인입니다.',
    '[
      {"label": "습윤부식 반쪽 반응", "formula": "산화: Fe → Fe²⁺ + 2e⁻ / 환원: O₂ + 2H₂O + 4e⁻ → 4OH⁻", "description": "철 표면의 물방울에서 동시에 일어나는 두 반쪽 반응. 전자는 금속을 통해, 이온은 물을 통해 이동"},
      {"label": "녹의 최종 생성", "formula": "4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃ → Fe₂O₃·xH₂O", "description": "Fe(OH)₂가 추가로 산화·탈수되어 붉은 녹(산화철 수화물)이 됨"}
    ]'::jsonb,
    '[
      {"problem": "철의 습윤부식이 일어나려면 반드시 필요한 세 가지 조건을 쓰시오.", "solution": "물(수분), 산소, 전해질(이온을 포함한 용액). 셋 중 하나라도 없으면 습윤부식이 거의 진행되지 않는다."},
      {"problem": "철 표면 물방울에서 중심부와 가장자리 중 산화(부식)가 더 잘 일어나는 곳은 어디이며 그 이유는?", "solution": "중심부. 물방울 중심은 산소 공급이 가장자리보다 적어 환원 반응이 상대적으로 느리므로, 전자를 내보내는 산화 반응(Fe→Fe²⁺+2e⁻)이 그 지점에 집중되어 실제로 금속이 깎여나간다."}
    ]'::jsonb,
    '부식은 물방울 하나가 통째로 작은 배터리가 되는 것과 같습니다. 물방울 가장자리는 공기(산소)와 잘 닿아 전자를 받아가는 양극이 되고, 산소가 부족한 중심부는 전자를 내보내는 음극이 되어 철이 깎여 나갑니다. 배터리에 불이 들어오듯, 이 미세한 전지에서도 눈에 보이지 않는 전류가 흐르며 서서히 금속을 갉아먹습니다.',
    1
  )
  RETURNING id INTO v_lesson1_id;

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '습윤부식이 일어나기 위해 반드시 필요하지 않은 것은?',
    '습윤부식은 물, 산소, 전해질이 있으면 상온에서도 진행됩니다. 불꽃 같은 고온 열원은 필요하지 않습니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '물(수분)', false, 1),
    (v_quiz_id, '산소', false, 2),
    (v_quiz_id, '전해질(이온)', false, 3),
    (v_quiz_id, '높은 온도의 불꽃', true, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '철 표면 물방울에서 환원 반응(O₂+2H₂O+4e⁻→4OH⁻)이 주로 일어나는 위치는?',
    '산소 공급이 많은 가장자리에서 환원 반응이 활발히 일어나 양극이 되고, 중심부는 산화(음극)가 일어난다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '물방울 중심부', false, 1),
    (v_quiz_id, '물방울 가장자리(산소가 많이 닿는 곳)', true, 2),
    (v_quiz_id, '철 내부 깊숙한 곳', false, 3),
    (v_quiz_id, '물방울이 전혀 없는 건조한 표면', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '부식에 대한 설명으로 옳은 것은?',
    '습식 부식은 물, 산소, 전해질이 함께 있을 때 전기화학적으로 진행됩니다. 부식은 금속이 전자를 잃는 산화 반응입니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '부식은 금속이 전자를 얻어 환원되는 반응이다', false, 1),
    (v_quiz_id, '습식 부식은 물과 산소, 전해질이 함께 있을 때 전기화학적으로 진행된다', true, 2),
    (v_quiz_id, '건식 부식과 습식 부식은 항상 같은 메커니즘으로 일어난다', false, 3),
    (v_quiz_id, '부식이 진행되어도 금속의 화학적 조성은 변하지 않는다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: 갈바니 부식과 이종 금속 접촉
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '갈바니 부식과 이종 금속 접촉',
    '■ 두 금속이 만나면 무슨 일이 벌어질까 (기초)
서로 다른 두 금속이 전해질(습기, 물) 속에서 직접 맞닿으면, 반응성이 큰 금속에서 반응성이 작은 금속 쪽으로 전자가 흘러가는 하나의 전지가 만들어집니다. 이를 **갈바니 부식**(이종금속부식)이라고 합니다.

① 두 금속이 접촉한 부위에 물기가 있으면 즉시 전지가 형성됨
② 반응성이 큰(산화되기 쉬운) 금속이 음극이 되어 더 빨리, 더 심하게 부식됨
③ 반응성이 작은(환원되기 쉬운) 금속은 오히려 보호를 받아 부식이 느려짐

■ 표준 환원 전위로 예측하기 (핵심)
[전기화학 전지의 원리](lesson:산화-환원과 전기화학/2)에서 배운 **표준 환원 전위**(E°)를 그대로 적용할 수 있습니다. E°가 낮은(산화되기 쉬운) 금속이 접촉한 두 금속 중 먼저 부식되는 음극 역할을 맡습니다.

예) 철(Fe, E°=-0.44V)과 구리(Cu, E°=+0.34V)가 못과 파이프처럼 맞닿아 있으면, E°가 더 낮은 철이 음극이 되어 급격히 부식되고 구리는 보호받습니다.

■ 갈바니 계열과 실제 설계 (심화)
여러 금속을 반응성 순서로 나열한 목록을 **갈바니 계열**이라고 합니다. 배관, 선박, 건축 구조물을 설계할 때는 서로 반응성 차이가 큰 두 금속을 직접 접촉시키지 않도록 절연체를 끼우거나, 같은 계열의 금속을 사용해 갈바니 부식을 예방합니다.

※ 알루미늄 새시에 철제 나사를 그대로 박으면 알루미늄이 급격히 부식되는 것도 갈바니 부식의 대표적인 사례입니다.',
    '[
      {"label": "갈바니 부식 방향", "formula": "E°가 낮은 금속 = 음극(부식됨) / E°가 높은 금속 = 양극(보호됨)", "description": "두 금속이 접촉하면 표준 환원 전위가 낮은 쪽이 산화되어 희생된다"},
      {"label": "예시: Fe-Cu 접촉", "formula": "E°(Fe²⁺/Fe)=-0.44V < E°(Cu²⁺/Cu)=+0.34V → Fe가 음극, 빠르게 부식", "description": "전위차가 클수록 부식 속도가 빨라진다"}
    ]'::jsonb,
    '[
      {"problem": "아연(Zn, E°=-0.76V)과 철(Fe, E°=-0.44V)이 접촉했을 때 어느 금속이 부식되며, 어느 금속이 보호받는가?", "solution": "아연의 E°가 더 낮으므로 아연이 음극이 되어 산화(부식)되고, 철은 양극이 되어 보호받는다."},
      {"problem": "선박처럼 서로 다른 금속을 나사로 결합할 때 갈바니 부식을 막기 위한 설계 방법 한 가지를 쓰시오.", "solution": "두 금속 사이에 절연 재료(플라스틱 와셔 등)를 끼워 전기적으로 접촉하지 않게 하거나, 반응성이 비슷한 금속끼리만 결합한다."}
    ]'::jsonb,
    '갈바니 부식은 줄다리기에서 힘이 약한 쪽이 계속 끌려가는 것과 비슷합니다. 반응성이 큰 금속(전자를 잘 내주는 쪽)은 계속 전자를 빼앗기며 점점 부식되고, 반응성이 작은 금속은 그 덕분에 오히려 보호받습니다. 두 금속의 반응성 차이가 클수록 약한 쪽이 더 빨리, 더 심하게 끌려갑니다.',
    2
  )
  RETURNING id INTO v_lesson2_id;

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '두 금속이 접촉했을 때 부식되는(음극이 되는) 쪽은?',
    '표준 환원 전위(E°)가 더 낮은, 즉 반응성이 더 큰 금속이 음극이 되어 먼저 산화(부식)됩니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'E°가 더 높은 금속', false, 1),
    (v_quiz_id, 'E°가 더 낮은 금속', true, 2),
    (v_quiz_id, '두 금속 모두 동일한 속도로 부식', false, 3),
    (v_quiz_id, '부식은 일어나지 않는다', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '아연(E°=-0.76V)과 구리(E°=+0.34V)를 전선으로 연결하고 습기 있는 환경에 두었을 때 일어나는 현상은?',
    'E°가 더 낮은 아연이 음극이 되어 산화(부식)되고, E°가 더 높은 구리는 양극이 되어 보호받습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '구리가 산화되어 부식된다', false, 1),
    (v_quiz_id, '아연이 산화되어 부식되고 구리는 보호받는다', true, 2),
    (v_quiz_id, '둘 다 부식되지 않는다', false, 3),
    (v_quiz_id, '둘 다 동시에 같은 속도로 부식된다', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '갈바니 부식을 예방하는 방법으로 적절하지 않은 것은?',
    '접촉 부위에 물기가 고이면 전해질 역할을 하여 갈바니 부식이 오히려 촉진됩니다. 절연체 삽입, 반응성이 비슷한 금속 사용, 코팅은 모두 적절한 예방법입니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '서로 다른 반응성을 가진 금속 사이에 절연체를 끼운다', false, 1),
    (v_quiz_id, '반응성이 비슷한 금속끼리 결합한다', false, 2),
    (v_quiz_id, '접촉 부위에 물기가 잘 고이도록 설계한다', true, 3),
    (v_quiz_id, '금속 접촉부를 도장이나 코팅으로 밀폐한다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: 부식에 영향을 미치는 환경 요인
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '부식에 영향을 미치는 환경 요인',
    '■ 부식 속도를 좌우하는 환경 조건 (기초)
같은 철이라도 놓인 환경에 따라 부식 속도가 크게 달라집니다. 대표적인 요인은 다음과 같습니다.

① 습도: 상대습도가 높을수록 금속 표면에 물막이 쉽게 형성되어 부식이 빨라짐
② 염분: 바닷물이나 제설제의 염화 이온(Cl⁻)은 전해질의 이온 농도를 높여 전도도를 높이고, 보호막을 파괴하여 부식을 가속시킴
③ pH: 산성 환경(pH가 낮음)에서는 금속이 더 쉽게 이온화되어 부식이 빨라짐
④ 온도: 온도가 높을수록 반응 속도가 빨라져 부식도 촉진됨

■ 통기차 부식 — 산소 농도 차이가 만드는 국부전지 (핵심)
같은 금속 표면이라도 산소가 잘 닿는 부분과 그렇지 않은 부분이 있으면, 그 사이에서도 전지가 형성됩니다. 이를 **통기차 부식**이라고 합니다. 산소 농도가 낮은 부분(예: 틈새, 흙에 묻힌 부분, 물때 밑)이 음극(산화)이 되어 부식이 집중적으로 진행됩니다.

■ 국소적으로 심해지는 부식 유형 (심화)
- 틈부식: 볼트 이음매, 개스킷 틈새처럼 산소 공급이 제한된 좁은 틈에서 통기차 부식이 극단적으로 나타나는 경우
- 공식: 보호막의 미세한 결함 부위에 부식이 국소적으로 깊게 파고드는 현상
- **응력부식균열**: 인장 응력을 받는 금속이 특정 부식 환경에서 균열이 급속히 진행되는 현상

※ 해안가 교량, 지하 매설 배관, 선박 하부처럼 습도·염분·통기 조건이 나쁜 환경일수록 정기적인 부식 점검이 중요합니다.',
    '[
      {"label": "통기차 부식 원리", "formula": "산소 농도 낮은 부위 = 음극(산화) / 산소 농도 높은 부위 = 양극(환원)", "description": "틈새·매설부처럼 산소가 적게 공급되는 곳에 부식이 집중된다"}
    ]'::jsonb,
    '[
      {"problem": "지하에 매설된 철제 배관에서 흙에 완전히 파묻힌 부분과 지표면 가까이 공기와 접촉하는 부분 중 부식이 더 심하게 진행되는 곳은? 이유와 함께 답하시오.", "solution": "흙에 완전히 파묻혀 산소 공급이 적은 부분. 통기차 부식 원리에 따라 산소 농도가 낮은 부위가 음극(산화)이 되어 부식이 집중된다."},
      {"problem": "겨울철 도로에 뿌리는 제설제가 자동차 하부 철 부품의 부식을 가속시키는 이유를 설명하시오.", "solution": "염화 이온(Cl⁻)이 전해질의 이온 농도를 높여 전기 전도도를 높이고, 금속 표면의 보호 산화막을 국소적으로 파괴하여 부식 반응이 더 빠르게 진행되게 만든다."}
    ]'::jsonb,
    '통기차 부식은 이불을 반만 덮고 잔 팔이 상대적으로 시린 것과 비슷합니다. 산소가 잘 닿는 부위는 상대적으로 안전(환원=양극)하지만, 산소가 부족한 부위(이불 속, 틈새)는 그 불균형 때문에 오히려 더 활발히 반응(산화=음극)하며 깎여 나갑니다.',
    3
  )
  RETURNING id INTO v_lesson3_id;

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '통기차 부식에서 부식(산화)이 집중적으로 일어나는 부위는?',
    '산소 농도가 낮은 부위(틈새, 매설부 등)가 음극이 되어 산화(부식)가 집중적으로 일어납니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '산소 농도가 높은 부위', false, 1),
    (v_quiz_id, '산소 농도가 낮은 부위', true, 2),
    (v_quiz_id, '습도가 낮은 부위', false, 3),
    (v_quiz_id, '온도가 낮은 부위', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '부식을 가속시키는 환경 요인으로 옳지 않은 것은?',
    '온도가 낮아지면 반응 속도가 느려져 부식도 오히려 억제됩니다. 습도·염화 이온 증가·산성 환경은 모두 부식을 가속시킵니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '높은 습도', false, 1),
    (v_quiz_id, '낮은 온도', true, 2),
    (v_quiz_id, '염화 이온(Cl⁻) 농도 증가', false, 3),
    (v_quiz_id, '산성(pH가 낮은) 환경', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '볼트와 너트 사이 좁은 틈새에서 산소 공급이 제한되어 발생하는 국소 부식은?',
    '틈부식(crevice corrosion)은 산소 공급이 제한된 좁은 틈에서 통기차 부식이 극단적으로 나타나는 경우입니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '틈부식', true, 1),
    (v_quiz_id, '갈바니 부식', false, 2),
    (v_quiz_id, '건식 부식', false, 3),
    (v_quiz_id, '전기분해', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 4: 부식 방지 — 피막과 도금
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '부식 방지 — 피막과 도금',
    '■ 물리적으로 막기 — 도장과 코팅 (기초)
가장 간단한 부식 방지법은 금속 표면을 물, 산소와 차단하는 것입니다. 페인트, 니스, 방청유 등으로 도장하면 전해질과의 접촉 자체를 막아 부식을 억제합니다. 다만 도장이 긁히거나 벗겨지면 그 부위부터 부식이 시작될 수 있습니다.

■ 아연 도금 — 스스로 희생하는 보호막 (핵심)
철 표면에 아연을 얇게 입히는 것을 **아연 도금**(갈바니징)이라고 합니다. 아연은 철보다 반응성이 커서(E°가 더 낮아서) [갈바니 부식](lesson:부식과 방식 (심화)/2)에서 배운 원리에 따라 아연이 대신 산화되어 철을 보호합니다.

① 도금이 흠집 없이 온전할 때: 아연 막이 물리적으로 산소·수분을 차단
② 도금에 흠집이 나서 철이 드러나도: 아연이 철보다 먼저 산화(희생)되어 철은 계속 보호됨 — 이것이 **희생 보호** 원리
③ 반대로 철에 주석(Sn) 도금(양철)을 하면, 주석은 철보다 반응성이 작아 흠집이 나는 순간 오히려 철의 부식이 더 빨라짐

■ 부동태막과 부식억제제 (심화)
스테인리스강은 크로뮴(Cr)을 첨가해 표면에 아주 얇고 치밀한 산화크로뮴(Cr₂O₃) 막을 스스로 형성합니다. 이 막을 {{부동태막::금속 표면에 형성되어 산소·수분의 침투를 막는 얇고 치밀한 보호 산화막}}이라고 하며, 손상되어도 크로뮴이 다시 공기와 반응해 스스로 복구됩니다.

산업 현장에서는 냉각수나 배관 내부에 소량의 **부식억제제**를 첨가하기도 합니다. 억제제 분자가 금속 표면에 얇은 흡착층을 만들어 전해질과 금속의 직접 접촉을 줄이는 방식으로 작동합니다.',
    '[
      {"label": "희생 보호 원리", "formula": "E°(Zn) < E°(Fe) → 도금이 벗겨져도 Zn이 먼저 산화되어 Fe를 보호", "description": "아연 도금은 반응성이 더 큰 금속을 입혀 흠집이 나도 철 대신 부식되게 만드는 방법"},
      {"label": "부동태막 생성", "formula": "4Cr + 3O₂ → 2Cr₂O₃ (표면에 얇고 치밀한 보호막 형성)", "description": "스테인리스강 표면의 산화크로뮴 막은 손상돼도 스스로 재생되어 부식을 막는다"}
    ]'::jsonb,
    '[
      {"problem": "철에 아연 도금을 한 경우와 주석 도금을 한 경우, 도금이 긁혀 철이 드러났을 때 부식 진행에 어떤 차이가 있는지 설명하시오.", "solution": "아연 도금: 아연(E° 더 낮음)이 철보다 먼저 산화되어 철을 계속 보호한다(희생 보호). 주석 도금: 주석(E° 더 높음)은 철보다 반응성이 작아, 흠집이 나면 오히려 철이 음극이 되어 더 빠르게 부식된다."},
      {"problem": "스테인리스강이 일반 철에 비해 녹이 잘 슬지 않는 이유를 부동태막 개념으로 설명하시오.", "solution": "스테인리스강에 포함된 크로뮴이 표면에서 산소와 반응해 얇고 치밀한 산화크로뮴(Cr₂O₃) 부동태막을 형성한다. 이 막이 산소와 수분의 침투를 막고, 손상되어도 스스로 재생되어 부식을 억제한다."}
    ]'::jsonb,
    '아연 도금은 몸을 던져 동료를 지키는 방패병과 같습니다. 아연은 철보다 먼저 반응(산화)하며 자신을 희생해 철을 보호합니다. 반대로 반응성이 낮은 금속(주석)으로 도금하면, 흠집이 났을 때 오히려 철이 먼저 반응해 버리는 정반대의 상황이 벌어집니다.',
    4
  )
  RETURNING id INTO v_lesson4_id;

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '철에 아연 도금을 했을 때 도금이 긁혀도 철이 잘 부식되지 않는 이유는?',
    '아연은 철보다 반응성이 커서(E°가 낮아서) 도금이 벗겨져도 아연이 먼저 산화되어 철을 보호합니다(희생 보호).', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '아연이 철보다 반응성이 작아 대신 반응하지 않기 때문', false, 1),
    (v_quiz_id, '아연이 철보다 반응성이 커서 대신 산화되어 철을 보호하기 때문', true, 2),
    (v_quiz_id, '아연이 철과 반응하지 않는 비활성 금속이기 때문', false, 3),
    (v_quiz_id, '아연 도금이 항상 흠집 없이 유지되기 때문', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '스테인리스강 표면의 부동태막을 구성하는 물질은?',
    '스테인리스강에 포함된 크로뮴이 산소와 반응해 산화크로뮴(Cr₂O₃)으로 이루어진 부동태막을 형성합니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '산화철(Fe₂O₃)', false, 1),
    (v_quiz_id, '산화아연(ZnO)', false, 2),
    (v_quiz_id, '산화크로뮴(Cr₂O₃)', true, 3),
    (v_quiz_id, '탄산칼슘(CaCO₃)', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '부식 방지 방법에 대한 설명으로 옳지 않은 것은?',
    '주석 도금은 주석의 반응성이 철보다 작아, 흠집이 나면 오히려 철이 먼저 부식됩니다(주석이 먼저 부식되는 것이 아님).', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '도장은 금속 표면과 전해질의 접촉을 차단해 부식을 막는다', false, 1),
    (v_quiz_id, '아연 도금은 흠집이 나도 아연이 대신 부식되어 철을 보호한다', false, 2),
    (v_quiz_id, '주석 도금은 흠집이 나면 철보다 주석이 먼저 부식된다', true, 3),
    (v_quiz_id, '부식억제제는 금속 표면에 흡착층을 만들어 부식을 줄인다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 5: 전기화학적 방식 — 음극 방식법과 산업 응용
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '전기화학적 방식 — 음극 방식법과 산업 응용',
    '■ 음극 방식이란? (기초)
보호하고 싶은 금속을 인위적으로 음극(환원이 일어나는 전극)으로 만들어 산화(부식)를 막는 방법을 **음극 방식**이라고 합니다. [전기분해와 산업 응용](lesson:산화-환원과 전기화학/5)에서 배운 전기분해 개념과 마찬가지로, 외부에서 전자를 계속 공급하면 금속이 산화될 이유가 사라집니다.

■ 희생양극법 (핵심)
보호할 금속(예: 지하 배관, 선박 선체)에 반응성이 더 큰 금속(마그네슘, 아연, 알루미늄 등)을 전선으로 연결해 매설·부착하는 방법입니다. [갈바니 부식](lesson:부식과 방식 (심화)/2)과 같은 원리를 거꾸로 이용한 것으로, 반응성이 큰 금속(**희생 양극**)이 대신 산화되어 소모되고, 보호 대상 금속은 음극이 되어 부식되지 않습니다. 희생 양극은 시간이 지나 소모되면 주기적으로 교체합니다.

■ 외부전원법과 산업 응용 (심화)
희생양극법은 별도의 전원이 필요 없지만 보호 범위가 제한적입니다. 대형 구조물에는 **외부전원법**을 사용합니다. 정류기 등 외부 전원의 (-)극을 보호할 금속에, (+)극을 별도의 불활성 전극에 연결해 강제로 전류를 흘려보내는 방식으로, 훨씬 넓은 범위를 강하게 보호할 수 있습니다.

① 선박: 선체 하부에 아연·알루미늄 희생 양극을 부착해 해수 부식을 방지
② 지하 매설 배관(송유관, 가스관): 배관을 따라 마그네슘 희생 양극을 일정 간격으로 매설하거나, 장거리 배관에는 외부전원법을 함께 적용
③ 해양 구조물·교량: 철근콘크리트 교각, 석유 시추 플랫폼 등에 외부전원법을 적용해 장기간 부식을 관리

※ 음극 방식은 이미 부식이 상당히 진행된 금속을 원상 복구하지는 못하며, 앞으로의 부식 진행을 늦추거나 막는 예방적 기술입니다.',
    '[
      {"label": "희생양극법", "formula": "E°(희생 양극 금속) < E°(보호 대상 금속) → 희생 양극이 대신 산화·소모됨", "description": "마그네슘·아연·알루미늄처럼 반응성이 큰 금속을 연결해 보호 대상을 음극으로 유지"},
      {"label": "외부전원법", "formula": "외부 전원 (-) → 보호 금속(음극), (+) → 불활성 전극", "description": "전기분해처럼 외부 전원으로 강제 전류를 흘려 넓은 범위의 금속을 지속적으로 환원 상태로 유지"}
    ]'::jsonb,
    '[
      {"problem": "지하에 매설된 가스 배관 부식을 막기 위해 배관에 마그네슘 막대를 전선으로 연결해 함께 묻었다. 이 방법의 이름과 작동 원리를 설명하시오.", "solution": "희생양극법. 마그네슘이 배관(철)보다 반응성이 커서 먼저 산화·소모되며 전자를 배관에 공급해 배관을 음극(환원 상태)으로 유지시켜 부식을 막는다."},
      {"problem": "희생양극법과 외부전원법의 차이를 전원 필요 여부와 적용 규모 측면에서 비교하시오.", "solution": "희생양극법은 별도 전원 없이 반응성 차이만으로 작동하며 비교적 좁은 범위에 적합하다. 외부전원법은 정류기 등 외부 전원으로 강제 전류를 공급해 원하는 만큼 강하게, 훨씬 넓은 범위를 보호할 수 있지만 전원 설비와 유지관리가 필요하다."}
    ]'::jsonb,
    '희생양극법은 미끼를 던져 상어의 관심을 돌리는 것과 같습니다. 반응성이 큰 금속(미끼)을 배관 옆에 매달아 두면, 부식을 일으키는 반응이 배관 대신 미끼 쪽으로 쏠려 배관은 안전하게 남습니다. 외부전원법은 아예 발전기를 연결해 배관 전체에 지속적으로 방어막 전류를 흘려보내는, 더 강력하고 능동적인 버전이라 할 수 있습니다.',
    5
  )
  RETURNING id INTO v_lesson5_id;

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '희생양극법에서 보호 대상 금속(예: 철 배관)에 연결하는 금속으로 적절한 것은?',
    '철보다 반응성이 큰 금속(마그네슘, 아연 등)을 연결해야 그 금속이 대신 산화되어 철을 보호할 수 있습니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '철보다 반응성이 작은 금속(구리 등)', false, 1),
    (v_quiz_id, '철보다 반응성이 큰 금속(마그네슘, 아연 등)', true, 2),
    (v_quiz_id, '철과 반응성이 같은 금속', false, 3),
    (v_quiz_id, '비활성 금속(백금 등)', false, 4);

  -- Q14
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '음극 방식(cathodic protection)의 핵심 원리는?',
    '보호할 금속을 인위적으로 음극(환원 상태)으로 유지시켜 산화(부식)가 일어나지 않도록 하는 것이 음극 방식의 핵심입니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '보호할 금속을 인위적으로 양극(산화)으로 만든다', false, 1),
    (v_quiz_id, '보호할 금속을 인위적으로 음극(환원 상태)으로 유지한다', true, 2),
    (v_quiz_id, '금속 표면의 물을 완전히 제거한다', false, 3),
    (v_quiz_id, '금속을 고온으로 가열해 산화막을 없앤다', false, 4);

  RAISE NOTICE '부식과 방식 (심화) 단원 삽입 완료: 레슨 5개, 퀴즈 14개';
END $$;
