-- ============================================================
-- 고등학교 화학I 2015 개정 교육과정
-- Chapter 3: 화학 결합
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
  -- 챕터 조회
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '화학 결합';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '화학 결합 단원을 찾을 수 없습니다.';
  END IF;

  -- 기존 레슨 삭제 (퀴즈/옵션은 CASCADE로 삭제됨)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 화학 결합의 형성
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '화학 결합의 형성',
    E'■ 왜 원자들은 결합하는가?\n'
    '대부분의 원자는 혼자 존재하는 것보다 다른 원자와 결합할 때 에너지가 낮아져 더 안정하다.\n'
    '- 결합 형성 시 에너지 방출 → 계 전체의 퍼텐셜 에너지 감소\n'
    '- 에너지가 낮을수록 더 안정한 상태\n\n'
    '■ **옥텟 규칙** (Octet Rule)\n'
    '대부분의 원소는 전자 배치가 가장 가까운 비활성 기체(18족)와 같아지려는 경향이 있다.\n'
    '즉, 최외각 전자 껍질에 전자를 8개(옥텟) 채우려 한다.\n'
    '다만 H, Li, Be(**듀엣 규칙**), B, Al, P, S, Cl, Xe 등은 예외를 보인다(자세한 내용은 아래 표 참고).\n\n'
    '■ 루이스 전자점식 (Lewis Dot Structure)\n'
    '원자의 원자가 전자를 점으로 나타내는 표기법\n'
    '- 원소 기호 주위에 원자가 전자를 1개씩 배치한 후 쌍을 이룸\n'
    '- 공유 결합에서 공유 전자쌍과 비공유 전자쌍을 구분하는 데 사용\n\n'
    '■ 화학 결합의 종류\n'
    '원자들이 옥텟 규칙을 만족하는 방법에 따라 **이온 결합**, **공유 결합**, **금속 결합**으로 나뉜다(자세한 내용은 아래 표 참고).\n\n'
    '■ 전자 이동 vs 전자 공유\n'
    '- 전기 음성도 차이가 클수록(1.7 이상): 이온 결합 경향\n'
    '- 전기 음성도 차이가 작을수록(1.7 미만): 공유 결합 경향\n'
    '- 이 기준은 절대적이지 않으며, 실제 결합은 이온 결합과 공유 결합의 중간 성질을 나타냄',
    '[
      {"label": "결합 에너지 관계", "formula": "결합 형성 시 에너지 방출 → 퍼텐셜 에너지 감소 → 안정화", "description": "원자들이 결합할 때 에너지가 낮아지므로 자연적으로 결합이 형성됨"},
      {"label": "결합 구분 기준 (전기 음성도 차)", "formula": "ΔEN ≥ 1.7 → 이온 결합 경향 / ΔEN < 1.7 → 공유 결합 경향", "description": "두 원자의 전기 음성도 차이로 결합 종류를 예측하지만, 이는 경향성임"}
    ]'::jsonb,
    '[
      {"problem": "Na(전기 음성도 0.9)와 Cl(전기 음성도 3.0)의 전기 음성도 차이를 구하고 어떤 결합을 형성하는지 예측하시오.", "solution": "ΔEN = 3.0 - 0.9 = 2.1 ≥ 1.7이므로 이온 결합을 형성한다. 실제로 NaCl은 대표적인 이온 결합 화합물이다."},
      {"problem": "탄소(C)가 수소(H) 4개와 결합하여 CH₄를 형성할 때 C와 H 각각이 옥텟 규칙을 어떻게 만족하는지 설명하시오.", "solution": "C는 원자가 전자 4개를 가지며 H 4개와 전자쌍을 각각 1쌍씩 공유하면 8개의 전자를 가진다(옥텟 만족). H는 원자가 전자 1개를 가지며 C와 전자쌍 1쌍을 공유하면 2개의 전자를 가진다(듀엣 만족)."}
    ]'::jsonb,
    '원자 결합은 사람들이 모여 가족을 이루는 것과 같다. 혼자보다 함께할 때 더 안정적이고 에너지(비용)가 줄어든다. 전자를 주고받느냐(이온 결합), 함께 나누느냐(공유 결합), 아니면 자유롭게 공동 소유하느냐(금속 결합)는 상대방의 성격(전기 음성도)에 달려 있다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- ============================================================
  -- LESSON 2: 이온 결합
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '이온 결합',
    E'■ **이온 결합**이란?\n'
    '금속 원소(양이온)와 비금속 원소(음이온) 사이의 정전기적 인력(쿨롱 힘)에 의한 결합\n'
    '- 전자 이동: 금속 원자 → 전자 방출 → 양이온\n'
    '                비금속 원자 → 전자 흡수 → 음이온\n\n'
    '■ 이온 결합 형성 과정 (NaCl 예시)\n'
    'Na: 2,8,1 → 전자 1개 방출 → Na⁺: 2,8 (Ne 전자 배치)\n'
    'Cl: 2,8,7 → 전자 1개 흡수 → Cl⁻: 2,8,8 (Ar 전자 배치)\n'
    'Na⁺ + Cl⁻ → NaCl (이온 결합)\n\n'
    '■ **이온 결정** 구조\n'
    '이온 결합 화합물은 기체 상태에서 이온쌍을 이루지만, 고체 상태에서는 규칙적인 3차원 격자 구조를 형성한다.\n'
    '- NaCl 결정: Na⁺와 Cl⁻가 1:1로 교대 배열된 면심 입방 격자\n'
    '- 이온 결합은 모든 방향으로 동등하게 작용 (비방향성)\n'
    '- 결합력: 각 이온이 여러 반대 전하 이온에 의해 둘러싸임\n\n'
    '■ 이온 결합의 세기에 영향을 주는 요인\n'
    '**쿨롱 법칙**: F = k × (q₁ × q₂) / r²\n'
    '① 이온의 전하량(q): 전하가 클수록 인력 강함\n'
    '   예: MgO(2+, 2-)의 결합이 NaCl(1+, 1-)보다 강함\n'
    '② 이온 간 거리(r): 거리가 가까울수록 인력 강함\n'
    '   → 이온 반지름이 작을수록 결합이 강함\n\n'
    '■ 이온 결합 화합물의 성질\n'
    '이온 결합 화합물은 녹는점/끓는점이 높고, 고체 상태에서는 전기 전도성이 없지만 액체(용융) 또는 수용액 상태에서는 전도성이 있으며, 수용성이 크고 외부 충격에 쉽게 부서지는 **취성**(brittleness)을 가진다(자세한 내용은 아래 표 참고).\n\n'
    '■ 대표 이온 결합 화합물\n'
    'NaCl(염화 나트륨), KCl(염화 칼륨), CaCO₃(탄산 칼슘), MgO(산화 마그네슘), CaF₂(플루오린화 칼슘) 등이 대표적이다(자세한 내용은 아래 표 참고).',
    '[
      {"label": "쿨롱 법칙 (이온 결합 세기)", "formula": "F = k × (q₁ × q₂) / r²", "description": "이온 전하량(q)이 클수록, 이온 간 거리(r)가 작을수록 이온 결합이 강하다. k는 쿨롱 상수."},
      {"label": "이온 결합 형성", "formula": "금속(M) → M^n⁺ + ne⁻  /  비금속(X) + ne⁻ → X^n⁻", "description": "금속은 전자를 잃어 양이온, 비금속은 전자를 얻어 음이온이 되고 정전기적 인력으로 결합"}
    ]'::jsonb,
    '[
      {"problem": "MgO의 이온 결합이 NaCl보다 강한 이유를 쿨롱 법칙으로 설명하시오.", "solution": "쿨롱 법칙 F = k(q₁×q₂)/r²에 따라, NaCl은 q₁=1, q₂=1이지만 MgO는 q₁=2(Mg²⁺), q₂=2(O²⁻)이다. 전하량이 4배 더 크므로 이온 결합력이 훨씬 강하다. 실제로 MgO의 녹는점(2852°C)은 NaCl(801°C)보다 훨씬 높다."},
      {"problem": "NaCl 수용액이 전기를 통하는 이유와 고체 NaCl이 전기를 통하지 않는 이유를 비교하여 설명하시오.", "solution": "고체 NaCl: Na⁺와 Cl⁻가 결정 격자에 고정되어 있어 이동 불가 → 전기 전도성 없음. NaCl 수용액: 물에 녹아 Na⁺와 Cl⁻가 자유롭게 이동 가능 → 전하 운반체 역할 → 전기 전도성 있음."}
    ]'::jsonb,
    '이온 결합은 서로 반대 성격의 두 사람이 끌리는 것과 같다. 남는 것(전자)이 있는 사람(금속)이 부족한 사람(비금속)에게 주면서 두 사람 모두 만족스러운 상태가 된다. 결정 구조는 마치 남녀가 번갈아 앉는 결혼식 테이블 배치처럼 양이온과 음이온이 교대로 정렬한다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- ============================================================
  -- LESSON 3: 공유 결합
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '공유 결합',
    E'■ **공유 결합**이란?\n'
    '두 비금속 원자가 전자쌍을 공유하여 옥텟 규칙을 만족하는 결합\n'
    '- **공유 전자쌍**(bonding pair): 두 원자가 함께 사용하는 전자쌍\n'
    '- **비공유 전자쌍**(lone pair): 한 원자만 사용하는 전자쌍\n\n'
    '■ 단일 결합, 2중 결합, 3중 결합\n'
    '공유하는 전자쌍의 수에 따라 단일 결합(1쌍), 2중 결합(2쌍), 3중 결합(3쌍)으로 구분한다(자세한 내용은 아래 표 참고).\n\n'
    '■ 결합 차수와 결합의 성질\n'
    '결합 차수(bond order): 공유 전자쌍의 수\n'
    '- 결합 차수 증가 → 결합 에너지 증가 (더 강한 결합)\n'
    '- 결합 차수 증가 → 결합 길이 감소 (더 짧은 결합)\n'
    'N-N 계열의 결합 길이·결합 에너지 비교는 아래 표를 참고한다.\n\n'
    '■ 주요 분자의 루이스 구조\n'
    'H₂O, NH₃, CO₂, N₂, CH₄의 결합 구조와 비공유 전자쌍 수는 아래 표를 참고한다.\n\n'
    '■ 공유 결합 화합물(분자)의 성질\n'
    '① 녹는점/끓는점: 분자 간 인력(분산력, 쌍극자-쌍극자, 수소 결합)에 따라 다름\n'
    '   → 일반적으로 이온 결합 화합물보다 낮음\n'
    '② 전기 전도성: 이온이 없으므로 대부분 전기 전도성 없음\n'
    '   단, 산·염기는 수용액에서 이온화 → 전도성 있음\n'
    '③ 극성: 결합의 극성에 따라 극성 분자, 무극성 분자로 구분\n'
    '④ 용해성: 극성 분자는 극성 용매에, 무극성 분자는 무극성 용매에 잘 녹음\n'
    '   (like dissolves like)',
    '[
      {"label": "결합 차수와 결합 길이/에너지", "formula": "결합 차수 ↑ → 결합 길이 ↓, 결합 에너지 ↑", "description": "2중, 3중 결합일수록 결합이 강하고 짧다. N₂의 3중 결합(945 kJ/mol)은 매우 강하다."},
      {"label": "루이스 구조 전자 수 확인", "formula": "총 원자가 전자 수 = 각 원자의 원자가 전자 합", "description": "루이스 구조에서 공유 전자쌍 + 비공유 전자쌍의 전자 수 합이 총 원자가 전자 수와 일치해야 함"}
    ]'::jsonb,
    '[
      {"problem": "CO₂의 루이스 구조를 그리고, 공유 전자쌍과 비공유 전자쌍의 수를 각각 구하시오.", "solution": "CO₂의 루이스 구조: O=C=O. 공유 전자쌍: 4쌍(C-O 2중결합 2개 = 각 2쌍). 비공유 전자쌍: O 각 2쌍 × 2 = 4쌍. 총 원자가 전자: C(4) + O(6)×2 = 16개 = (4+4)쌍×2전자 = 16개 (일치)."},
      {"problem": "N₂가 H₂보다 결합 에너지가 훨씬 크고 화학 반응성이 낮은 이유를 설명하시오.", "solution": "N₂는 N≡N 3중 결합(결합 에너지 945 kJ/mol)을 형성하고, H₂는 H-H 단일 결합(436 kJ/mol)을 형성한다. N₂의 결합 차수(3)가 H₂(1)보다 높아 결합이 훨씬 강하므로 결합을 끊는 데 더 많은 에너지가 필요해 반응성이 낮다."}
    ]'::jsonb,
    '공유 결합은 두 사람이 하나의 도구를 함께 쓰는 것과 같다. 혼자는 부족하지만 공동으로 사용하면 둘 다 필요를 채울 수 있다. 전자쌍을 더 많이 공유할수록(2중, 3중 결합) 두 사람 사이의 연결이 더 단단해지고(결합 에너지 증가) 거리가 더 가까워진다(결합 길이 감소).'
  )
  RETURNING id INTO v_lesson3_id;

  -- ============================================================
  -- LESSON 4: 결합의 극성과 분자의 극성
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '결합의 극성과 분자의 극성',
    E'■ 결합의 극성 (Bond Polarity)\n'
    '두 원자의 전기 음성도가 다를 때, 공유 전자쌍이 전기 음성도가 큰 원자 쪽으로 치우친다.\n'
    '- 무극성 공유 결합: 같은 원자 간 결합 (ΔEN = 0)\n'
    '  예: H-H, Cl-Cl, N≡N, O=O\n'
    '- 극성 공유 결합: 다른 원자 간 결합 (ΔEN > 0)\n'
    '  예: H-Cl, H-O, C-O, N-H\n\n'
    '■ **쌍극자 모멘트** (Dipole Moment, μ)\n'
    'μ = q × d\n'
    '- q: 부분 전하량 (C), d: 두 원자 핵 간 거리 (m)\n'
    '- 단위: 데바이(D, debye), 1 D = 3.336 × 10⁻³⁰ C·m\n'
    '- 전기 음성도가 큰 쪽이 δ⁻(부분 음전하), 작은 쪽이 δ⁺(부분 양전하)\n'
    '- 화살표 표기: δ⁺ → δ⁻ 방향으로 화살표\n\n'
    '■ 분자의 극성\n'
    '분자 전체의 극성은 각 결합의 쌍극자 모멘트의 벡터 합으로 결정된다.\n'
    '합벡터가 0이 아니면 **극성 분자**, 0이면 **무극성 분자**이다(자세한 분자 목록과 구조는 아래 표 참고).\n\n'
    '■ 분자의 극성과 성질\n'
    '① 용해성 (like dissolves like)\n'
    '   - 극성 분자 ↔ 극성 용매(물)에 잘 녹음: HCl, NH₃, 에탄올\n'
    '   - 무극성 분자 ↔ 무극성 용매(벤젠, 헥세인)에 잘 녹음: I₂, 지방\n'
    '② 끓는점: 극성 분자는 쌍극자-쌍극자 인력으로 끓는점이 상대적으로 높음\n'
    '③ 전기장 속 거동: 극성 분자는 전기장 방향으로 배향됨',
    '[
      {"label": "쌍극자 모멘트", "formula": "μ = q × d  (단위: D, debye)", "description": "q: 부분 전하, d: 결합 길이. 벡터량이므로 방향이 있음. 분자 극성은 모든 결합의 쌍극자 벡터 합으로 결정"},
      {"label": "극성 분자 판별", "formula": "분자의 쌍극자 합벡터 ≠ 0 → 극성 분자  /  합벡터 = 0 → 무극성 분자", "description": "대칭 구조(직선형, 정사면체, 평면삼각형)이면 무극성, 비대칭 구조(V자형, 삼각뿔형)이면 극성"}
    ]'::jsonb,
    '[
      {"problem": "CO₂와 H₂O는 모두 C-O 또는 O-H 극성 결합을 가지지만 CO₂는 무극성, H₂O는 극성 분자이다. 그 이유를 구조와 관련지어 설명하시오.", "solution": "CO₂는 O=C=O 직선형 구조로, 두 C=O 결합의 쌍극자 모멘트가 서로 반대 방향으로 정확히 상쇄되어 분자 전체의 쌍극자 합 = 0(무극성). H₂O는 V자형(굽은형) 구조로, 두 O-H 결합의 쌍극자 모멘트가 같은 방향을 향해 상쇄되지 않으므로 합벡터 ≠ 0(극성 분자)."},
      {"problem": "요오드(I₂)가 물보다 사염화탄소(CCl₄)에 더 잘 녹는 이유를 극성과 관련지어 설명하시오.", "solution": "I₂는 I-I 동핵 결합으로 무극성 분자이고, CCl₄도 정사면체형의 무극성 분자이다. like dissolves like 원리에 의해 무극성 용질은 무극성 용매에 잘 녹는다. 물(극성 분자)은 I₂(무극성)를 잘 용해시키지 못한다."}
    ]'::jsonb,
    '결합의 극성은 줄다리기와 같다. 전기 음성도가 강한 원자가 공유 전자쌍을 자기 쪽으로 더 세게 당긴다. 분자의 극성은 여러 명이 다양한 방향으로 줄다리기할 때 전체 힘의 합과 같다. 대칭으로 배열되면 힘이 상쇄되어 무극성, 한쪽으로 치우치면 극성이 된다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- ============================================================
  -- LESSON 5: 금속 결합과 결정 구조
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '금속 결합과 결정 구조',
    E'■ **금속 결합** (Metallic Bonding)\n'
    '금속 원자들이 원자가 전자를 내어놓아 형성된 **자유 전자**(free electrons)와 금속 양이온 사이의 인력\n'
    '- 금속 원자: 원자가 전자를 쉽게 방출 (이온화 에너지 작음)\n'
    '- 자유 전자: 금속 양이온 사이를 자유롭게 이동 → "**전자 바다 모델**"\n'
    '- 금속 결합은 방향성이 없어 모든 방향으로 동등하게 작용\n\n'
    '■ 금속의 성질과 금속 결합의 관계\n'
    '① 전기 전도성 (Electrical Conductivity)\n'
    '   자유 전자가 전기장 방향으로 이동 → 전류 형성\n'
    '   → 금속이 전기를 잘 전도하는 이유\n\n'
    '② 열 전도성 (Thermal Conductivity)\n'
    '   자유 전자가 에너지(열)를 빠르게 전달\n'
    '   → 금속이 열을 잘 전도하는 이유\n\n'
    '③ 금속 광택 (Metallic Luster)\n'
    '   자유 전자가 빛을 흡수 후 재방출(반사)\n'
    '   → 금속이 빛나 보이는 이유\n\n'
    '④ **연성** (Ductility)과 **전성** (Malleability)\n'
    '   외부 힘으로 금속 양이온층이 이동해도 자유 전자가 결합을 유지\n'
    '   → 금속을 가늘게 늘리거나(연성) 얇게 펼 수 있음(전성)\n'
    '   → 이온 결합과 달리 부서지지 않는 이유\n\n'
    '■ 금속 결합의 세기\n'
    '원자가 전자 수가 많을수록, 원자 반지름이 작을수록 자유 전자 밀도가 높아져 금속 결합이 강해진다.\n'
    'Na, Mg, Al의 원자가 전자 수와 녹는점 비교는 아래 표를 참고한다(참고로 텅스텐(W)의 녹는점은 3422°C로 매우 높다).\n\n'
    '■ 고체 결정의 종류 비교\n'
    '결정은 결합 종류에 따라 이온 결정, 공유 결정(원자 결정), 분자 결정, 금속 결정으로 나뉘며 녹는점과 전도성 등의 성질이 서로 다르다(자세한 내용은 아래 표 참고).',
    '[
      {"label": "전자 바다 모델", "formula": "금속 = M^n⁺ 양이온 격자 + ne⁻ 자유 전자 (n = 원자가 전자 수)", "description": "자유 전자가 격자 사이를 자유롭게 이동하여 전기·열 전도, 광택, 연성·전성을 설명"},
      {"label": "금속 결합 세기 비교", "formula": "원자가 전자 수 ↑ 또는 원자 반지름 ↓ → 금속 결합 세기 ↑ → 녹는점 ↑", "description": "1족 < 2족 < 13족 순으로 금속 결합이 강해지는 경향"}
    ]'::jsonb,
    '[
      {"problem": "금속이 이온 결합 화합물과 달리 외부 충격에도 부서지지 않고 변형되는(연성, 전성) 이유를 전자 바다 모델로 설명하시오.", "solution": "이온 결합 화합물은 충격으로 이온층이 이동하면 같은 전하끼리 접촉하여 강한 반발로 갈라진다. 반면 금속에서는 금속 양이온층이 이동해도 자유 전자가 동시에 흘러들어 결합을 계속 유지하므로 부서지지 않고 변형된다."},
      {"problem": "Na, Mg, Al의 금속 결합 세기(녹는점 기준)를 비교하고 이유를 설명하시오.", "solution": "녹는점: Na(98°C) < Mg(650°C) < Al(660°C) 순으로 증가한다. Na는 원자가 전자 1개, Mg는 2개, Al은 3개를 내어 자유 전자를 형성한다. 자유 전자 수가 많을수록 금속 양이온과의 결합력이 강해지므로 녹는점이 높다."}
    ]'::jsonb,
    '금속 결합은 사회의 공공 인프라와 같다. 각 금속 원자(시민)가 자신의 일부 자원(원자가 전자)을 공동 기금(자유 전자)에 기부한다. 이 공동 기금이 모든 시민을 자유롭게 오가며 사회 전체(전기, 열 전도)를 유지한다. 아무리 구조를 재배치해도 공동 기금이 함께 이동하므로 사회가 무너지지 않는다(연성·전성).'
  )
  RETURNING id INTO v_lesson5_id;

  -- ============================================================
  -- QUIZZES: LESSON 1 (화학 결합의 형성)
  -- ============================================================

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '원자들이 화학 결합을 형성하는 근본적인 이유로 가장 적절한 것은?',
    '원자들은 결합을 형성할 때 에너지가 낮아져 더 안정한 상태가 된다. 이것이 화학 결합 형성의 근본적인 원동력이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '원자들이 서로 가까이 있으면 반발력이 생기기 때문이다.', false, 1),
    (v_quiz_id, '결합 형성 시 에너지가 낮아져 더 안정한 상태가 되기 때문이다.', true, 2),
    (v_quiz_id, '원자들이 질량을 줄이려는 성질이 있기 때문이다.', false, 3),
    (v_quiz_id, '원자핵끼리의 인력이 작용하기 때문이다.', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '옥텟 규칙에 대한 설명으로 옳은 것은?',
    '옥텟 규칙은 원자가 가장 가까운 비활성 기체(18족)의 전자 배치를 가지려는 경향이다. 이는 최외각 전자 껍질에 전자 8개를 채우려는 것이다. H는 예외로 듀엣(2개)을 만족한다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '모든 원자는 예외 없이 전자 8개를 가지려 한다.', false, 1),
    (v_quiz_id, '원자가 가장 가까운 비활성 기체의 전자 배치를 가지려는 경향이다.', true, 2),
    (v_quiz_id, '원자는 항상 전자를 잃어 양이온이 되려 한다.', false, 3),
    (v_quiz_id, '금속 원소에만 적용되는 규칙이다.', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    'Na(전기 음성도 0.9)와 F(전기 음성도 4.0)가 결합할 때 예상되는 결합의 종류는?',
    'ΔEN = 4.0 - 0.9 = 3.1로, 1.7 이상이므로 이온 결합을 형성한다. NaF는 대표적인 이온 결합 화합물이다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '무극성 공유 결합', false, 1),
    (v_quiz_id, '극성 공유 결합', false, 2),
    (v_quiz_id, '이온 결합', true, 3),
    (v_quiz_id, '금속 결합', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 2 (이온 결합)
  -- ============================================================

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    'MgO의 녹는점이 NaCl보다 훨씬 높은 이유로 가장 적절한 것은?',
    'MgO에서 Mg²⁺(+2)와 O²⁻(-2)의 전하량이 NaCl의 Na⁺(+1)와 Cl⁻(-1)보다 크다. 쿨롱 법칙에 따라 전하량이 클수록 이온 결합력이 강하므로 MgO의 녹는점이 더 높다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'MgO의 이온 반지름이 NaCl보다 크기 때문이다.', false, 1),
    (v_quiz_id, 'Mg²⁺와 O²⁻의 전하량이 Na⁺와 Cl⁻보다 커서 결합력이 강하기 때문이다.', true, 2),
    (v_quiz_id, 'MgO가 수용액에 잘 녹지 않기 때문이다.', false, 3),
    (v_quiz_id, 'Mg이 Na보다 반응성이 낮기 때문이다.', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '이온 결합 화합물의 성질로 옳지 않은 것은?',
    '이온 결합 화합물은 고체 상태에서 이온이 고정되어 있어 전기를 통하지 않는다. 용융(액체) 상태나 수용액 상태에서는 이온이 이동할 수 있어 전기를 통한다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '녹는점과 끓는점이 높다.', false, 1),
    (v_quiz_id, '고체 상태에서 전기를 잘 전도한다.', true, 2),
    (v_quiz_id, '수용액 상태에서 전기를 전도한다.', false, 3),
    (v_quiz_id, '외부 충격에 쉽게 부서지는 취성이 있다.', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    'CaF₂에서 Ca와 F의 이온 결합 형성을 전자 이동으로 옳게 나타낸 것은?',
    'Ca는 2족 원소로 원자가 전자 2개를 방출하여 Ca²⁺가 된다. F는 17족 원소로 전자 1개를 받아 F⁻가 된다. Ca²⁺ 1개와 F⁻ 2개가 결합하여 CaF₂가 형성된다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Ca가 전자 1개를 F에게 주어 Ca⁺와 F⁻를 형성한다.', false, 1),
    (v_quiz_id, 'F가 전자 2개를 Ca에게 주어 Ca²⁻와 F²⁺를 형성한다.', false, 2),
    (v_quiz_id, 'Ca가 전자 2개를 F 2개에게 각 1개씩 주어 Ca²⁺와 2F⁻를 형성한다.', true, 3),
    (v_quiz_id, 'Ca와 F가 전자 1쌍을 공유하여 결합을 형성한다.', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 3 (공유 결합)
  -- ============================================================

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    'N₂ 분자에서 N-N 결합의 종류와 공유 전자쌍 수로 옳은 것은?',
    'N 원자의 원자가 전자는 5개이다. 각 N 원자가 3개의 전자를 공유하면 두 N 원자 모두 8개의 전자를 가진다. 따라서 N₂는 3중 결합(공유 전자쌍 3쌍)을 형성한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '단일 결합, 공유 전자쌍 1쌍', false, 1),
    (v_quiz_id, '2중 결합, 공유 전자쌍 2쌍', false, 2),
    (v_quiz_id, '3중 결합, 공유 전자쌍 3쌍', true, 3),
    (v_quiz_id, '4중 결합, 공유 전자쌍 4쌍', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '다음 중 결합 에너지가 가장 크고 결합 길이가 가장 짧은 결합은?',
    '결합 차수가 높을수록 결합 에너지가 크고 결합 길이가 짧다. C≡C(3중 결합) > C=C(2중 결합) > C-C(단일 결합) 순서로 결합 에너지 크고 결합 길이 짧다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'C-C (에테인의 탄소-탄소 결합)', false, 1),
    (v_quiz_id, 'C=C (에틸렌의 탄소-탄소 결합)', false, 2),
    (v_quiz_id, 'C≡C (아세틸렌의 탄소-탄소 결합)', true, 3),
    (v_quiz_id, '모두 같다.', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    'H₂O 분자에서 O 원자 주위의 공유 전자쌍과 비공유 전자쌍의 수로 옳은 것은?',
    'O의 원자가 전자는 6개. H 2개와 각각 1쌍씩 공유하면 공유 전자쌍 2쌍. 나머지 (6-2×2)/2 = 2쌍이 비공유 전자쌍. 따라서 공유 전자쌍 2쌍, 비공유 전자쌍 2쌍.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '공유 전자쌍 1쌍, 비공유 전자쌍 3쌍', false, 1),
    (v_quiz_id, '공유 전자쌍 2쌍, 비공유 전자쌍 2쌍', true, 2),
    (v_quiz_id, '공유 전자쌍 3쌍, 비공유 전자쌍 1쌍', false, 3),
    (v_quiz_id, '공유 전자쌍 4쌍, 비공유 전자쌍 0쌍', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 4 (결합의 극성과 분자의 극성)
  -- ============================================================

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '다음 중 무극성 분자는?',
    'CO₂는 O=C=O 직선형 구조로 두 C=O 쌍극자가 서로 반대 방향으로 상쇄되어 무극성 분자이다. HCl, NH₃, H₂O는 모두 극성 분자이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'HCl', false, 1),
    (v_quiz_id, 'NH₃', false, 2),
    (v_quiz_id, 'CO₂', true, 3),
    (v_quiz_id, 'H₂O', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '극성 분자와 무극성 분자의 용해도에 관한 원리로 옳은 것은?',
    'like dissolves like 원리: 극성 분자는 극성 용매(물)에, 무극성 분자는 무극성 용매(벤젠 등)에 잘 녹는다. 극성 용매는 극성 용질을 용매화할 수 있는 쌍극자-쌍극자 인력이 있기 때문이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '극성 분자는 무극성 용매에 잘 녹는다.', false, 1),
    (v_quiz_id, '극성 분자는 극성 용매에, 무극성 분자는 무극성 용매에 잘 녹는다.', true, 2),
    (v_quiz_id, '분자의 극성은 용해도에 영향을 주지 않는다.', false, 3),
    (v_quiz_id, '모든 분자는 물에 잘 녹는다.', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    'H₂O가 극성 분자인 이유로 가장 적절한 것은?',
    'H₂O는 V자형(굽은형) 구조로 대칭이 아니다. 두 O-H 결합의 쌍극자 모멘트가 같은 방향(O 쪽)으로 향하여 상쇄되지 않고 합벡터 ≠ 0이므로 극성 분자이다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'O-H 결합이 무극성 결합이기 때문이다.', false, 1),
    (v_quiz_id, '직선형 구조로 두 O-H 쌍극자가 상쇄되기 때문이다.', false, 2),
    (v_quiz_id, 'V자형(굽은형) 구조로 두 O-H 쌍극자가 상쇄되지 않기 때문이다.', true, 3),
    (v_quiz_id, '산소 원자의 비공유 전자쌍이 없기 때문이다.', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 5 (금속 결합과 결정 구조)
  -- ============================================================

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '금속의 전기 전도성을 전자 바다 모델로 가장 잘 설명한 것은?',
    '금속의 자유 전자는 전기장이 가해지면 그 방향으로 이동하여 전류를 형성한다. 이것이 금속이 전기를 잘 전도하는 이유이다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '금속 양이온이 전기장 방향으로 이동하기 때문이다.', false, 1),
    (v_quiz_id, '자유 전자가 전기장 방향으로 자유롭게 이동하여 전류를 형성하기 때문이다.', true, 2),
    (v_quiz_id, '금속의 결정 구조가 전기를 통하는 채널을 형성하기 때문이다.', false, 3),
    (v_quiz_id, '금속 원자 간의 공유 결합이 전자를 이동시키기 때문이다.', false, 4);

  -- Q14
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '다음 결정 중 녹는점이 가장 높을 것으로 예상되는 것은?',
    '다이아몬드는 탄소 원자들이 강한 공유 결합(C-C)으로 연결된 공유 결정(원자 결정)이다. 공유 결정은 모든 결정 중 가장 높은 녹는점을 가진다(다이아몬드는 약 3550°C에서 분해). 이온 결정과 금속 결정도 높은 편이지만 공유 결정보다는 낮다. 분자 결정은 가장 낮다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'NaCl (이온 결정)', false, 1),
    (v_quiz_id, '다이아몬드 (공유 결정)', true, 2),
    (v_quiz_id, 'Fe (금속 결정)', false, 3),
    (v_quiz_id, 'I₂ (분자 결정)', false, 4);

  RAISE NOTICE '화학 결합 단원 콘텐츠 삽입 완료: 레슨 5개, 퀴즈 14개';
END $$;
