-- ============================================================
-- 고등학교 화학II 2015 개정 교육과정 연계
-- Chapter 7: 탄화수소와 석유 정제
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
  SELECT '탄화수소와 석유 정제', '탄화수소의 구조를 이해하고 원유가 가솔린·나프타 등 유용한 제품으로 변환되는 과정을 학습한다', '🛢️', 7
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '탄화수소와 석유 정제');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '탄화수소와 석유 정제';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '탄화수소와 석유 정제 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 탄화수소의 분류와 구조
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '탄화수소의 분류와 구조',
    E'■ 탄화수소(Hydrocarbon)란?\n'
    '탄소(C)와 수소(H)만으로 이루어진 유기 화합물이다.\n'
    '석유·천연가스의 주성분이며, 연료와 화학 원료의 근간이 된다.\n\n'
    '■ 탄화수소의 분류\n'
    '1. 알케인 (Alkane, 포화 탄화수소)\n'
    '   - 일반식: CₙH₂ₙ₊₂  (n ≥ 1)\n'
    '   - 탄소 간 단결합만 존재 (포화)\n'
    '   - 예: 메탄(CH₄, n=1), 에탄(C₂H₆, n=2), 프로판(C₃H₈, n=3), 부탄(C₄H₁₀, n=4)\n'
    '   - 물리적 성질: n이 증가할수록 끓는점·분자량 증가\n\n'
    '2. 알켄 (Alkene, 불포화 탄화수소)\n'
    '   - 일반식: CₙH₂ₙ  (n ≥ 2)\n'
    '   - 탄소 간 이중결합(C=C) 1개 포함\n'
    '   - 예: 에틸렌(C₂H₄), 프로필렌(C₃H₆), 부텐(C₄H₈)\n'
    '   - 반응성: 이중결합으로 첨가 반응(addition) 가능\n\n'
    '3. 알카인 (Alkyne, 불포화 탄화수소)\n'
    '   - 일반식: CₙH₂ₙ₋₂  (n ≥ 2)\n'
    '   - 탄소 간 삼중결합(C≡C) 1개 포함\n'
    '   - 예: 아세틸렌(C₂H₂), 프로파인(C₃H₄)\n\n'
    '■ 탄소 수(n)와 끓는점\n'
    '탄소 수가 많을수록 분자량이 크고 분자 간 인력(반데르발스 힘)이 강해 끓는점이 높아진다.\n'
    'C₁~C₄: 상온에서 기체 / C₅~C₁₇: 액체 / C₁₈↑: 고체(왁스)\n\n'
    '■ IUPAC 명명법 기초\n'
    '탄소 수에 따른 접두어: 메트(1)-에트(2)-프로프(3)-부트(4)-펜트(5)-헥스(6)-헵트(7)-옥트(8)',
    '[
      {"label": "알케인 일반식", "formula": "CₙH₂ₙ₊₂ (n≥1)", "description": "단결합만 있는 포화 탄화수소. 탄소 수 n이 늘수록 끓는점이 높아진다."},
      {"label": "알켄 일반식", "formula": "CₙH₂ₙ (n≥2)", "description": "이중결합(C=C) 1개 포함. 알케인보다 수소가 2개 적다."},
      {"label": "알카인 일반식", "formula": "CₙH₂ₙ₋₂ (n≥2)", "description": "삼중결합(C≡C) 1개 포함. 알케인보다 수소가 4개 적다."}
    ]'::jsonb,
    '[
      {"problem": "C₅H₁₂의 탄화수소 종류와 명칭은?", "solution": "CₙH₂ₙ₊₂ 공식에 n=5 대입: C₅H₁₂ ✓. 알케인이며 펜탄(pentane)이라고 한다."},
      {"problem": "에틸렌(C₂H₄)이 알케인이 아닌 알켄인 이유를 설명하시오.", "solution": "알케인의 일반식 CₙH₂ₙ₊₂에서 n=2이면 C₂H₆이어야 한다. C₂H₄은 H가 2개 적으므로 이중결합(C=C)이 1개 있는 알켄이다."}
    ]'::jsonb,
    '탄화수소를 탄소 사슬 길이로 분류하는 것은 옷 사이즈 분류와 같다. 탄소 수(사슬 길이)가 같아도 이중결합이 있으면(바지 허리 조임) 다른 분류가 된다. 단결합(알케인)은 여유 있는 일반 바지, 이중결합(알켄)은 허리가 조여 있는 슬림핏, 삼중결합(알카인)은 더 타이트한 스키니 바지라고 생각하면 된다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    'C₄H₈에 해당하는 탄화수소의 종류는?',
    'CₙH₂ₙ 공식에 n=4 대입: C₄H₈ ✓. 이중결합 1개를 포함한 알켄이다. (알케인이면 C₄H₁₀, 알카인이면 C₄H₆)',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '알케인 (Alkane)', false, 1),
    (v_quiz_id, '알켄 (Alkene)', true, 2),
    (v_quiz_id, '알카인 (Alkyne)', false, 3),
    (v_quiz_id, '방향족 탄화수소', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '탄소 수가 증가할수록 알케인의 끓는점이 높아지는 이유는?',
    '분자량이 커질수록 분자 간 분산력(반데르발스 힘)이 증가하여 끓는점이 높아진다. C₁~C₄는 상온에서 기체, C₅ 이상은 액체 또는 고체 상태이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '탄소 결합이 강해지기 때문', false, 1),
    (v_quiz_id, '분자량이 커져 분자 간 인력이 증가하기 때문', true, 2),
    (v_quiz_id, '이중결합이 생기기 때문', false, 3),
    (v_quiz_id, '수소 비율이 낮아지기 때문', false, 4);

  -- ============================================================
  -- LESSON 2: 원유의 구성과 분별 증류
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '원유의 구성과 분별 증류',
    E'■ 원유(Crude Oil)란?\n'
    '지하에서 채굴한 천연 탄화수소 혼합물이다. 탄소 수 C₁부터 C₅₀ 이상까지 다양한 탄화수소가 혼합되어 있다.\n\n'
    '■ 분별 증류 (Fractional Distillation)\n'
    '끓는점(boiling point) 차이를 이용하여 혼합물을 분리하는 방법이다.\n'
    '원유를 증류탑(가열로 + 분리탑)에 넣어 가열하면 끓는점이 낮은(탄소 수 적은) 성분이 먼저 증발하여 상단에서 분리된다.\n\n'
    '■ 분별 증류로 얻는 주요 제품 (탄소 수 순서)\n'
    '┌─────────────────────────────────────────────────┐\n'
    '│ 부분       탄소 수   끓는점(°C)   주요 용도       │\n'
    '├─────────────────────────────────────────────────┤\n'
    '│ 액화석유가스(LPG)  C₃~C₄  −40~0     연료(가스레인지) │\n'
    '│ 나프타(Naphtha)    C₅~C₉  30~180    석유화학 원료   │\n'
    '│ 가솔린(Gasoline)   C₅~C₁₀ 30~200   자동차 연료     │\n'
    '│ 등유(Kerosene)     C₁₁~C₁₃ 150~280  항공유, 난방    │\n'
    '│ 경유(Diesel)       C₁₄~C₂₀ 250~350  트럭, 선박 연료 │\n'
    '│ 중유(Heavy Fuel)   C₂₁~C₃₅ 350~450  발전소, 선박   │\n'
    '│ 윤활유·아스팔트    C₃₅↑    450↑     도로 포장      │\n'
    '└─────────────────────────────────────────────────┘\n\n'
    '■ 분리 원리\n'
    '끓는점 낮음 → 탄소 수 적음 → 탑 상단에서 분리 (기체/가솔린)\n'
    '끓는점 높음 → 탄소 수 많음 → 탑 하단에서 분리 (중유/아스팔트)\n\n'
    '■ 나프타의 중요성\n'
    '나프타(Naphtha, C₅~C₉)는 석유화학 공업의 핵심 원료이다.\n'
    '나프타 분해 → 에틸렌·프로필렌·벤젠 등 기초 화학 원료 생산',
    '[
      {"label": "분별 증류 원리", "formula": "끓는점 낮음 ↔ 탄소 수 적음 → 탑 상단 분리", "description": "탑 아래에서 원유 가열 → 끓는점 순서대로 상단 포집. 탑 상단일수록 저분자량, 저끓는점 제품"},
      {"label": "나프타 위치", "formula": "나프타: C₅~C₉, 끓는점 30~180°C", "description": "석유화학의 핵심 원료. 분해하면 에틸렌·프로필렌·벤젠 등 기초 원료 생성"}
    ]'::jsonb,
    '[
      {"problem": "분별 증류탑에서 가솔린(C₅~C₁₀)이 경유(C₁₄~C₂₀)보다 탑의 어느 위치에서 분리되는가?", "solution": "가솔린은 끓는점이 낮아(30~200°C) 탑의 상단부에서 분리된다. 경유는 끓는점이 높아(250~350°C) 탑의 중·하단부에서 분리된다."},
      {"problem": "원유 1배럴에서 가솔린 분율이 낮은 경우 이를 늘리기 위해 사용하는 공정은?", "solution": "크래킹(Cracking) 공정. 끓는점이 높은 긴 사슬 탄화수소(중유, 경유)를 열이나 촉매로 분해하여 가솔린 범위의 짧은 사슬 분자로 만든다."}
    ]'::jsonb,
    '분별 증류탑은 건물 층층이 다른 임차인이 사는 것과 같다. 가장 가볍고(탄소 수 적은) 빨리 올라가는 성분이 최상층(옥상)에 자리잡고, 무겁고 끈적한 성분(아스팔트)은 1층에 남는다. 온도가 올라갈수록 더 무거운 성분이 증발하여 자기 자리(층)를 찾아간다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '분별 증류탑에서 가장 상단부(최상단)에서 분리되는 제품은?',
    '끓는점이 가장 낮은 성분이 탑 상단에서 분리된다. LPG(C₃~C₄, 끓는점 -40~0°C)가 가장 끓는점이 낮아 최상단에서 기체로 포집된다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '아스팔트', false, 1),
    (v_quiz_id, '경유(Diesel)', false, 2),
    (v_quiz_id, 'LPG (액화석유가스)', true, 3),
    (v_quiz_id, '등유(Kerosene)', false, 4);

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '나프타(Naphtha)의 주요 역할은?',
    '나프타(C₅~C₉)는 분별 증류로 얻은 중간 유분으로, 석유화학 공업에서 에틸렌·프로필렌·벤젠 등 기초 화학 원료를 만드는 핵심 원료이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '항공기 연료로만 사용', false, 1),
    (v_quiz_id, '도로 포장 재료', false, 2),
    (v_quiz_id, '석유화학 기초 원료 (에틸렌·프로필렌 생산)', true, 3),
    (v_quiz_id, '가정용 가스레인지 연료', false, 4);

  -- ============================================================
  -- LESSON 3: 크래킹과 접촉 개질
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '크래킹과 접촉 개질',
    E'■ 크래킹이 필요한 이유\n'
    '원유를 단순 분별 증류하면 가솔린·나프타 등 수요가 높은 경질 유분의 비율이 충분하지 않다.\n'
    '크래킹(Cracking)으로 수요가 적은 중질 유분을 경질 유분으로 변환한다.\n\n'
    '■ 열 크래킹 (Thermal Cracking)\n'
    '고온(450~550°C)·고압에서 탄화수소 결합을 열로 끊는 방법.\n'
    'C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆   (긴 사슬 → 짧은 사슬 + 알켄 생성)\n'
    '알켄이 부산물로 많이 생성되어 석유화학 원료로 활용.\n\n'
    '■ 촉매 크래킹 (Fluid Catalytic Cracking, FCC)\n'
    '제올라이트(Zeolite) 촉매를 사용하여 500°C에서 분해.\n'
    '열 크래킹보다 낮은 온도에서 더 선택적으로 반응 → 고옥탄가 가솔린 생산.\n'
    '현대 정유 공장에서 가장 중요한 공정 중 하나.\n\n'
    '■ 접촉 개질 (Catalytic Reforming)\n'
    '가솔린 범위(C₆~C₁₀)의 직선 사슬 알케인을 백금(Pt) 촉매로 변환.\n'
    '- 이성질체화(Isomerization): 직선형 → 분지형 (옥탄가↑)\n'
    '- 탈수소화(Dehydrogenation): 알케인 → 방향족 (벤젠, 톨루엔 생성)\n'
    'n-C₆H₁₄ → 벤젠(C₆H₆) + 4H₂   (개질 반응 예시)\n\n'
    '■ 옥탄가 (Octane Number)\n'
    '가솔린의 노킹(비정상 점화) 저항성 지표.\n'
    '높을수록 엔진 효율↑, 노킹↓\n'
    '- n-헵탄(직선형): 옥탄가 0\n'
    '- 이소옥탄(분지형): 옥탄가 100\n'
    '일반 휘발유: 옥탄가 약 87~91 / 고급 휘발유: 91~95',
    '[
      {"label": "크래킹 반응 (예시)", "formula": "C₁₆H₃₄ → C₈H₁₈ + C₈H₁₆", "description": "긴 사슬 알케인이 짧은 사슬 알케인과 알켄으로 분해된다. 알켄은 석유화학 원료로 사용"},
      {"label": "옥탄가 기준", "formula": "이소옥탄=100, n-헵탄=0", "description": "가솔린 옥탄가가 높을수록 엔진 노킹이 적고 고압 엔진에 적합하다"}
    ]'::jsonb,
    '[
      {"problem": "촉매 크래킹(FCC)이 열 크래킹보다 유리한 점 2가지를 쓰시오.", "solution": "① 더 낮은 온도에서 반응 가능(에너지 절감) ② 반응의 선택성이 높아 고옥탄가 가솔린이나 특정 화학 원료를 더 효율적으로 생산 가능"},
      {"problem": "n-헥산(n-C₆H₁₄)을 접촉 개질하면 벤젠이 생성되는 이유를 설명하시오.", "solution": "백금(Pt) 촉매 하에 n-헥산이 탈수소화되고 고리화(방향족화)되어 벤젠(C₆H₆)과 H₂가 생성된다. 이 과정에서 탄소 골격 수(C6)는 유지되고 수소가 제거된다."}
    ]'::jsonb,
    '크래킹은 큰 레고 블록(긴 탄화수소)을 부숴 작은 조각(짧은 탄화수소)으로 만드는 것이다. 접촉 개질은 같은 수의 블록이지만 배열을 바꿔 더 멋진(고성능) 모양으로 조립하는 것이다. 정유 공장은 이 두 기술로 원유에서 최대한 많은 고부가가치 제품을 만들어낸다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '크래킹(Cracking)의 주요 목적은?',
    '크래킹은 탄소 수가 많아 수요가 적은 중질 유분(중유, 경유)을 분해하여 수요가 높은 경질 유분(가솔린, 나프타)을 더 많이 얻기 위한 공정이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '원유의 불순물(S, N)을 제거하기 위해', false, 1),
    (v_quiz_id, '중질 유분을 분해하여 경질 유분(가솔린 등)을 더 얻기 위해', true, 2),
    (v_quiz_id, '탄소 수를 늘려 고분자를 합성하기 위해', false, 3),
    (v_quiz_id, '원유의 황 함량을 높이기 위해', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '가솔린의 옥탄가에 대한 설명으로 옳은 것은?',
    '옥탄가는 엔진 노킹에 대한 저항성 지수이다. 이소옥탄(분지형)=100, n-헵탄(직선형)=0으로 정의한다. 분지형 구조일수록 옥탄가가 높다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '옥탄가가 높을수록 엔진 노킹이 심하다.', false, 1),
    (v_quiz_id, '직선 사슬 알케인이 분지형보다 옥탄가가 높다.', false, 2),
    (v_quiz_id, '옥탄가가 높을수록 노킹 저항성이 크고 고성능 엔진에 적합하다.', true, 3),
    (v_quiz_id, 'n-헵탄의 옥탄가는 100이다.', false, 4);

  -- ============================================================
  -- LESSON 4: 석유화학 제품과 고분자
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '석유화학 제품과 고분자',
    E'■ 나프타 분해와 기초 원료\n'
    '나프타(C₅~C₉)를 고온(약 800°C)에서 열분해(스팀 크래킹)하면 기초 화학 원료가 생산된다.\n'
    '주요 생성물:\n'
    '- 에틸렌(Ethylene, C₂H₄): 가장 많이 생산되는 화학 원료\n'
    '- 프로필렌(Propylene, C₃H₆): 폴리프로필렌 원료\n'
    '- 부타디엔(Butadiene, C₄H₆): 합성 고무 원료\n'
    '- 벤젠(Benzene, C₆H₆): 방향족 화합물의 기초\n\n'
    '■ 첨가 중합 (Addition Polymerization)\n'
    '알켄 단량체(monomer)가 이중결합이 열리면서 사슬 형태로 연결되어 중합체(polymer)가 된다.\n'
    'nCH₂=CH₂ → (–CH₂–CH₂–)ₙ  : 에틸렌 → 폴리에틸렌(PE)\n'
    'nCH₂=CHCH₃ → (–CH₂–CHCH₃–)ₙ  : 프로필렌 → 폴리프로필렌(PP)\n'
    'nCH₂=CHCl → (–CH₂–CHCl–)ₙ  : 염화 비닐 → PVC\n\n'
    '■ 주요 석유화학 제품\n'
    '- 폴리에틸렌(PE): 비닐봉지, 플라스틱 용기\n'
    '- 폴리프로필렌(PP): 식품 용기, 자동차 부품\n'
    '- PVC: 파이프, 바닥재, 전선 피복\n'
    '- 나일론: 합성 섬유, 파라코드\n'
    '- 폴리스타이렌(PS): 스타이로폼, 일회용 컵\n'
    '- 합성 고무: 타이어, 방진 고무\n\n'
    '■ 석유화학 산업 연계\n'
    '원유 → 분별 증류 → 나프타 → 스팀 크래킹 → 에틸렌/프로필렌 → 중합 → 플라스틱/합성 섬유/합성 고무',
    '[
      {"label": "폴리에틸렌 합성", "formula": "nCH₂=CH₂ → (–CH₂–CH₂–)ₙ", "description": "에틸렌 단량체가 첨가 중합하여 폴리에틸렌 생성. n은 중합도(수천~수만)."},
      {"label": "나프타 → 기초원료 흐름", "formula": "나프타 → 에틸렌+프로필렌+벤젠+... (스팀 크래킹)", "description": "나프타를 800°C에서 스팀과 함께 열분해하면 다양한 기초 유기 화학 원료 생성"}
    ]'::jsonb,
    '[
      {"problem": "폴리프로필렌(PP)의 단량체와 합성 반응식을 쓰시오.", "solution": "단량체: 프로필렌(CH₂=CHCH₃). 합성: nCH₂=CHCH₃ → (–CH₂–CHCH₃–)ₙ. 이중결합이 열리면서 첨가 중합이 일어난다."},
      {"problem": "PVC 파이프가 뜨거운 물에 사용 불가한 경우가 있는 이유를 고분자 관점에서 설명하시오.", "solution": "PVC는 유리전이 온도(Tg)가 약 80°C로 비교적 낮아, 뜨거운 물(약 90°C 이상)에서 연화·변형될 수 있다. 고온용에는 내열성이 높은 가교 고분자나 금속 배관이 적합하다."}
    ]'::jsonb,
    '석유화학은 원유를 레고 기본 블록(에틸렌, 프로필렌 등)으로 분해한 뒤, 이를 다양한 모양으로 조립해 필요한 제품(플라스틱, 섬유, 고무)을 만드는 과정이다. 같은 에틸렌 블록을 어떻게 연결하느냐에 따라 비닐봉지(저밀도 PE), 딱딱한 용기(고밀도 PE)가 되듯, 연결 방식이 제품 성질을 결정한다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '나프타 스팀 크래킹의 주요 생성물이 아닌 것은?',
    '나프타 스팀 크래킹의 주요 생성물은 에틸렌, 프로필렌, 부타디엔, 벤젠 등이다. 아스팔트는 원유 분별 증류의 최하단 잔사(C₃₅↑)이며 크래킹 생성물이 아니다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '에틸렌(Ethylene)', false, 1),
    (v_quiz_id, '프로필렌(Propylene)', false, 2),
    (v_quiz_id, '아스팔트(Asphalt)', true, 3),
    (v_quiz_id, '벤젠(Benzene)', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '첨가 중합 반응의 특징으로 옳은 것은?',
    '첨가 중합은 단량체(알켄)의 이중결합이 열리면서 단량체끼리 결합하여 중합체가 되는 반응이다. 부산물(물 등)이 생기지 않으며, 단량체의 모든 원자가 중합체에 포함된다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응 시 물(H₂O)이 부산물로 생성된다.', false, 1),
    (v_quiz_id, '이중결합이 열리면서 단량체가 연결되어 중합체가 된다.', true, 2),
    (v_quiz_id, '삼중결합을 가진 단량체에만 일어난다.', false, 3),
    (v_quiz_id, '중합도(n)는 항상 100 이하이다.', false, 4);

  -- ============================================================
  -- LESSON 5: 대기 오염과 친환경 연료
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '대기 오염과 친환경 연료',
    E'■ 화석 연료 연소와 대기 오염\n'
    '화석 연료(석탄, 석유, 천연가스)의 연소로 다양한 대기 오염 물질이 발생한다.\n\n'
    '■ 주요 대기 오염 물질\n'
    '① 이산화황 (SO₂)\n'
    '   - 원인: 석유·석탄 속 황(S) 성분 연소\n'
    '   - 반응: S + O₂ → SO₂, 2SO₂ + O₂ → 2SO₃ → H₂SO₄ (산성비)\n'
    '   - 대책: 탈황(FGD) 공정, 저황 연료 사용\n\n'
    '② 질소산화물 (NOx: NO, NO₂)\n'
    '   - 원인: 고온 연소 시 대기 중 N₂와 O₂ 반응\n'
    '   - 반응: N₂ + O₂ → 2NO (>1200°C), 2NO + O₂ → 2NO₂\n'
    '   - 영향: 광화학 스모그, 오존(O₃) 생성\n'
    '   - 대책: SCR(선택적 촉매 환원), EGR(배기가스 재순환)\n\n'
    '③ 미세먼지 (PM₂.₅, PM₁₀)\n'
    '   - 원인: 불완전 연소, 2차 생성 (SOx+NOx 반응)\n'
    '   - 디젤 차량의 DPF(매연 포집 필터)로 저감\n\n'
    '④ 이산화탄소 (CO₂)\n'
    '   - 완전 연소 시 필연적 생성, 온실 효과(지구 온난화) 원인\n\n'
    '■ 친환경 연료\n'
    '① 바이오디젤 (Biodiesel)\n'
    '   식물성 기름 + 메탄올 → 바이오디젤 + 글리세롤 (에스테르화 반응)\n'
    '   CO₂ 순배출 감소 (식물 광합성으로 CO₂ 흡수 → 탄소 순환)\n\n'
    '② 바이오에탄올\n'
    '   당류(옥수수, 사탕수수) 발효 → 에탄올 → 가솔린과 혼합(E10, E85)\n\n'
    '③ 수소 연료\n'
    '   연소: 2H₂ + O₂ → 2H₂O (CO₂ 무배출)\n'
    '   연료전지에서 전기로 변환 (7장 참고)\n\n'
    '■ 에너지 전환 전망\n'
    '탄소중립(Net Zero) 목표: 2050년까지 CO₂ 순배출 0\n'
    '방향: 화석 연료 → 재생에너지(태양광, 풍력) + 수소 경제',
    '[
      {"label": "산성비 생성 반응", "formula": "S+O₂→SO₂ → SO₃ → H₂SO₄ (산성비)", "description": "연료 속 황(S)이 연소되면 SO₂ 발생. 대기 중 추가 산화되어 황산(H₂SO₄)으로 산성비 형성"},
      {"label": "NOx 생성 조건", "formula": "N₂ + O₂ → 2NO (고온, >1200°C)", "description": "고온 연소 환경에서 대기 질소가 산화. SCR 촉매로 N₂+H₂O로 환원하여 처리"}
    ]'::jsonb,
    '[
      {"problem": "경유(Diesel) 차량에서 PM(미세먼지)이 많이 발생하는 이유와 저감 장치를 쓰시오.", "solution": "경유는 점도가 높고 탄소 사슬이 길어 불완전 연소 시 탄소 입자(블랙 카본)와 미세먼지 전구체가 많이 생성된다. 저감 장치: DPF(Diesel Particulate Filter, 매연 포집 필터)로 배기 가스 속 입자를 포집·소각한다."},
      {"problem": "바이오디젤이 화석 연료보다 CO₂ 면에서 친환경적인 이유를 탄소 순환 관점에서 설명하시오.", "solution": "바이오디젤의 원료 식물은 성장하면서 대기 중 CO₂를 광합성으로 고정한다. 연소 시 CO₂가 배출되지만 이는 식물이 흡수했던 CO₂를 되돌려 놓는 것이므로 탄소 순환상 추가 CO₂ 배출이 없다(탄소 중립)."}
    ]'::jsonb,
    '화석 연료 사용은 수억 년 동안 땅속에 갇혀 있던 탄소를 단 몇 초 만에 CO₂로 대기에 푸는 것이다. 친환경 연료는 이미 대기에 있는 탄소를 순환시키거나(바이오연료), 탄소 없이 에너지를 만드는(수소, 태양광) 방식이다. 마치 은행에서 새 돈을 인쇄하는 것(화석연료)과 기존 돈을 재사용하는 것(바이오연료)의 차이다.'
  )
  RETURNING id INTO v_lesson5_id;

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '화석 연료 연소 시 산성비의 원인이 되는 물질은?',
    '연료 속 황(S)이 연소되면 SO₂가 발생하고, 대기 중 추가 산화되어 SO₃ → H₂SO₄(황산)이 된다. 이것이 산성비의 주원인이다. NOx도 HNO₃를 형성하여 산성비에 기여한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CO₂', false, 1),
    (v_quiz_id, 'H₂O', false, 2),
    (v_quiz_id, 'SO₂ (이산화황)', true, 3),
    (v_quiz_id, 'N₂', false, 4);

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '바이오에탄올을 가솔린과 혼합하여 사용하는 가장 주된 이유는?',
    '바이오에탄올은 식물 발효로 생산되어 탄소 순환 측면에서 CO₂ 순배출이 적다. 가솔린과 혼합하면 화석 연료 사용량을 줄이고 온실가스 배출을 감소시킬 수 있다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '연료의 끓는점을 낮추기 위해', false, 1),
    (v_quiz_id, '화석 연료 사용량을 줄여 CO₂ 배출을 감소하기 위해', true, 2),
    (v_quiz_id, '가솔린의 점도를 높이기 위해', false, 3),
    (v_quiz_id, '엔진 소음을 줄이기 위해', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '디젤 차량의 DPF(Diesel Particulate Filter)가 저감하는 오염 물질은?',
    'DPF(매연 포집 필터)는 디젤 차량 배기 가스 속 미세먼지(PM, Particulate Matter)와 블랙카본(탄소 입자)을 포집하는 장치다. SO₂나 NOx 저감은 별도 장치(SCR, EGR)가 담당한다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CO₂', false, 1),
    (v_quiz_id, 'SO₂', false, 2),
    (v_quiz_id, '미세먼지(PM)', true, 3),
    (v_quiz_id, 'NOx', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '고온 연소 조건(>1200°C)에서 NOx가 생성되는 반응으로 옳은 것은?',
    '고온 연소 시 대기 중 질소(N₂)와 산소(O₂)가 반응하여 NO가 생성된다: N₂ + O₂ → 2NO. 이후 2NO + O₂ → 2NO₂로 추가 산화될 수 있다.',
    4
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'N₂ + H₂ → 2NH₃', false, 1),
    (v_quiz_id, 'N₂ + O₂ → 2NO', true, 2),
    (v_quiz_id, '2NO₂ → N₂ + 2O₂', false, 3),
    (v_quiz_id, 'N₂ + 3O₂ → 2NO₃', false, 4);

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '수소(H₂)를 연료로 연소할 때 배출되는 물질은?',
    '2H₂ + O₂ → 2H₂O. 수소 연소의 생성물은 물(H₂O)뿐이다. CO₂, SOx, NOx 등 오염 물질이 전혀 배출되지 않아 궁극의 친환경 연료로 주목받는다.',
    5
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'CO₂와 H₂O', false, 1),
    (v_quiz_id, 'H₂O만', true, 2),
    (v_quiz_id, 'SO₂와 H₂O', false, 3),
    (v_quiz_id, '배출 물질 없음', false, 4);

  RAISE NOTICE '탄화수소와 석유 정제 단원 삽입 완료: 레슨 5개, 퀴즈 13개';
END $$;
