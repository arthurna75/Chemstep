-- ============================================================
-- 고등학교 화학I 2015 개정 교육과정
-- Chapter 2: 주기율표
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
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '주기율표';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '주기율표 단원을 찾을 수 없습니다.';
  END IF;

  -- 기존 레슨 삭제 (퀴즈/옵션은 CASCADE로 삭제됨)
  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ============================================================
  -- LESSON 1: 주기율표의 발전
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    1,
    '주기율표의 발전',
    E'■ 주기율표란 무엇인가?\n'
    '원소들을 원자 번호(또는 성질)에 따라 배열한 표로, 원소의 성질이 주기적으로 반복됨을 나타낸다.\n\n'
    '■ 돌베라이너의 세쌍원소설 (1829)\n'
    '독일의 화학자 돌베라이너(Döbereiner)는 성질이 비슷한 원소 세 개를 한 묶음으로 분류하였다.\n'
    '- 세쌍원소: 가운데 원소의 원자량 ≈ 나머지 두 원소 원자량의 평균\n'
    '- 예: 리튬(Li, 6.9) – 나트륨(Na, 23.0) – 칼륨(K, 39.1)\n'
    '  → 나트륨 원자량 ≈ (6.9 + 39.1) / 2 = 23.0 (일치)\n'
    '- 한계: 당시 알려진 원소 수가 적어 모든 원소를 분류하지 못함\n\n'
    '■ 뉴랜즈의 옥타브 법칙 (1865)\n'
    '영국의 화학자 뉴랜즈(Newlands)는 원소를 원자량 순으로 배열했을 때 8번째마다 성질이 비슷한 원소가 나타남을 발견하였다.\n'
    '- 음악의 옥타브(8음계)에 비유하여 ''옥타브 법칙''이라 명명\n'
    '- 한계: 비활성 기체 미발견, 원자량이 큰 원소에서는 성질이 맞지 않는 경우 발생\n\n'
    '■ 멘델레예프의 주기율표 (1869)\n'
    '러시아의 화학자 멘델레예프(Mendeleev)는 당시 알려진 63종 원소를 원자량 순으로 배열하여 주기율표를 완성하였다.\n'
    '- 성질이 비슷한 원소가 같은 세로줄(족)에 오도록 배열\n'
    '- 미발견 원소의 존재를 예언하고 빈칸으로 남겨둠\n'
    '  → 에카-알루미늄(갈륨, Ga), 에카-규소(저마늄, Ge) 등 이후 발견으로 예측이 입증됨\n'
    '- 한계: 원자량 순 배열로 인한 일부 역전 현상(예: Co과 Ni의 순서)\n\n'
    '■ 모즐리와 현대 주기율표 (1913)\n'
    '영국의 물리학자 모즐리(Moseley)는 X선 실험을 통해 원소의 고유한 특성이 원자량이 아닌 원자 번호(양성자 수)임을 밝혔다.\n'
    '- 현대 주기율표: 원소를 원자 번호 순으로 배열\n'
    '- 멘델레예프 주기율표의 역전 현상 해결\n'
    '- 현재 118종 원소가 수록된 표준 주기율표 사용\n\n'
    '■ 주기율표 발전 요약\n'
    '┌──────────────┬──────┬────────────────────────────────┐\n'
    '│ 과학자        │ 연도 │ 주요 내용                       │\n'
    '├──────────────┼──────┼────────────────────────────────┤\n'
    '│ 돌베라이너    │ 1829 │ 세쌍원소설 (원자량 평균)         │\n'
    '│ 뉴랜즈        │ 1865 │ 옥타브 법칙 (8번째마다 반복)     │\n'
    '│ 멘델레예프    │ 1869 │ 원자량 순 배열, 미발견 원소 예언 │\n'
    '│ 모즐리        │ 1913 │ 원자 번호 순 배열 (현대 주기율표)│\n'
    '└──────────────┴──────┴────────────────────────────────┘',
    '[
      {"label": "세쌍원소 원자량 관계", "formula": "M_중간 ≈ (M_첫 + M_끝) / 2", "description": "가운데 원소의 원자량은 나머지 두 원소 원자량의 평균에 가깝다."},
      {"label": "뉴랜즈 옥타브", "formula": "n번째 원소 ≈ (n+8)번째 원소와 성질 유사", "description": "원자량 순 배열 시 8번째마다 성질이 비슷한 원소 반복"}
    ]'::jsonb,
    '[
      {"problem": "돌베라이너의 세쌍원소 중 칼슘(Ca, 40.1), 스트론튬(Sr, 87.6), 바륨(Ba, 137.3)에서 스트론튬의 예측 원자량을 구하시오.", "solution": "(40.1 + 137.3) / 2 = 177.4 / 2 = 88.7 → 실제 87.6과 거의 일치"},
      {"problem": "멘델레예프가 에카-알루미늄으로 예언한 원소는 이후 어떤 원소로 발견되었는가?", "solution": "갈륨(Ga, 원자 번호 31). 멘델레예프가 예측한 원자량·밀도·산화물 성질이 실험과 일치하여 주기율표의 타당성이 입증되었다."}
    ]'::jsonb,
    '도서관 책 정리에 비유할 수 있다. 처음에는 책 두께(원자량)로 정리했지만 비슷한 분류의 책끼리 모이지 않는 문제가 생겼다. 결국 고유 번호(원자 번호)로 정리하니 비슷한 성질의 원소들이 자연스럽게 같은 칸에 모이게 되었다.'
  )
  RETURNING id INTO v_lesson1_id;

  -- ============================================================
  -- LESSON 2: 주기와 족
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    2,
    '주기와 족',
    E'■ 주기(Period): 가로줄\n'
    '주기율표의 가로줄을 주기(period)라 한다.\n'
    '- 같은 주기 원소들은 전자 껍질 수가 같다.\n'
    '- 1주기: 2개 원소 (H, He)\n'
    '- 2주기: 8개 원소 (Li ~ Ne)\n'
    '- 3주기: 8개 원소 (Na ~ Ar)\n'
    '- 4주기: 18개 원소 (K ~ Kr)\n'
    '- 5주기: 18개 원소 (Rb ~ Xe)\n'
    '- 6주기: 32개 원소 (Cs ~ Rn)\n'
    '- 7주기: 32개 원소 (Fr ~ Og)\n'
    '→ 현재까지 7개 주기가 있으며, 총 118종 원소가 배치됨\n\n'
    '■ 족(Group): 세로줄\n'
    '주기율표의 세로줄을 족(group)이라 한다.\n'
    '- 같은 족 원소들은 원자가 전자 수가 같아 화학적 성질이 유사하다.\n'
    '- 1족 ~ 18족으로 총 18개 족\n\n'
    '■ 주요 족의 이름과 특징\n'
    '┌──────┬──────────────────┬──────────────────────────────┐\n'
    '│ 족   │ 이름              │ 대표 원소                     │\n'
    '├──────┼──────────────────┼──────────────────────────────┤\n'
    '│ 1족  │ 알칼리 금속       │ Li, Na, K, Rb, Cs, Fr        │\n'
    '│ 2족  │ 알칼리 토금속     │ Be, Mg, Ca, Sr, Ba, Ra       │\n'
    '│ 17족 │ 할로겐 원소       │ F, Cl, Br, I, At             │\n'
    '│ 18족 │ 비활성 기체       │ He, Ne, Ar, Kr, Xe, Rn       │\n'
    '└──────┴──────────────────┴──────────────────────────────┘\n\n'
    '■ 대표 원소와 전이 원소\n'
    '- 대표 원소(주족 원소): 1, 2족 + 13~18족\n'
    '  → s 오비탈 또는 p 오비탈에 원자가 전자가 채워짐\n'
    '  → 같은 족끼리 성질이 매우 유사함\n'
    '- 전이 원소: 3~12족\n'
    '  → d 오비탈에 전자가 채워지는 원소들\n'
    '  → 여러 가지 산화 상태를 가지며, 색깔 있는 이온 형성\n'
    '  → 예: Fe(철), Cu(구리), Zn(아연), Au(금), Ag(은)\n\n'
    '■ 원자가 전자와 족\n'
    '대표 원소의 경우 족 번호의 일의 자리 = 원자가 전자 수\n'
    '- 1족: 원자가 전자 1개 (Na: 2,8,1)\n'
    '- 2족: 원자가 전자 2개 (Mg: 2,8,2)\n'
    '- 17족: 원자가 전자 7개 (Cl: 2,8,7)\n'
    '- 18족: 원자가 전자 8개 (단, He은 2개)',
    '[
      {"label": "족 번호와 원자가 전자", "formula": "원자가 전자 수 = 족 번호의 일의 자리 (대표 원소, 18족 제외)", "description": "18족의 경우 He은 2, 나머지는 8개의 원자가 전자를 가짐"},
      {"label": "주기와 전자 껍질", "formula": "전자 껍질 수 = 주기 번호", "description": "2주기 원소는 2개의 전자 껍질, 3주기 원소는 3개의 전자 껍질을 가짐"}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na)은 몇 주기, 몇 족에 속하는가? 전자 배치를 이용하여 설명하시오.", "solution": "Na의 전자 배치: 2,8,1 → 전자 껍질 3개이므로 3주기, 원자가 전자 1개이므로 1족. 따라서 3주기 1족."},
      {"problem": "전이 원소가 대표 원소와 다른 점을 두 가지 서술하시오.", "solution": "① d 오비탈에 전자가 채워진다. ② 여러 가지 산화 상태(다양한 원자가)를 가지며, 같은 족이라도 성질 유사성이 대표 원소보다 낮다."}
    ]'::jsonb,
    '주기율표는 아파트 단지와 같다. 층(주기)은 몇 층에 사는지(전자 껍질 수)를 나타내고, 동(족)은 어떤 스타일의 가구(원자가 전자 수)를 가지고 있는지를 나타낸다. 같은 동에 사는 사람들은 비슷한 생활 방식(화학적 성질)을 공유한다.'
  )
  RETURNING id INTO v_lesson2_id;

  -- ============================================================
  -- LESSON 3: 금속, 비금속, 준금속
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    3,
    '금속, 비금속, 준금속',
    E'■ 금속 원소 (Metals)\n'
    '주기율표의 왼쪽과 아래쪽에 위치하며, 전체 원소의 약 80%를 차지한다.\n\n'
    '주요 성질:\n'
    '- 상온에서 고체 (예외: Hg은 액체)\n'
    '- 금속 광택을 가짐\n'
    '- 전기 및 열 전도성이 우수\n'
    '- 연성(늘어나는 성질)과 전성(펴지는 성질) 있음\n'
    '- 양이온이 되기 쉬움 (전자를 잃음)\n'
    '- 예: Fe(철), Cu(구리), Al(알루미늄), Au(금), Na(나트륨)\n\n'
    '■ 알칼리 금속 (1족, Li·Na·K·Rb·Cs·Fr)\n'
    '- 원자가 전자 1개, 반응성 매우 강함\n'
    '- 물과 격렬하게 반응하여 수소 기체 발생\n'
    '  2Na + 2H₂O → 2NaOH + H₂↑\n'
    '- 공기 중 산화를 막기 위해 석유(등유)에 보관\n'
    '- 족에서 아래로 갈수록 반응성 증가: Li < Na < K < Rb < Cs\n\n'
    '■ 비금속 원소 (Nonmetals)\n'
    '주기율표의 오른쪽 위에 위치한다.\n\n'
    '주요 성질:\n'
    '- 고체, 액체, 기체 다양\n'
    '- 금속 광택 없음\n'
    '- 전기 및 열 전도성 불량\n'
    '- 음이온이 되기 쉬움 (전자를 얻음)\n'
    '- 예: C(탄소), N(질소), O(산소), S(황), P(인)\n\n'
    '■ 할로겐 원소 (17족, F·Cl·Br·I·At)\n'
    '- 원자가 전자 7개, 반응성 매우 강함\n'
    '- 주로 이원자 분자(F₂, Cl₂, Br₂, I₂)로 존재\n'
    '- 금속과 반응하여 염(salt) 형성: 2Na + Cl₂ → 2NaCl\n'
    '- 족에서 아래로 갈수록 반응성 감소: F > Cl > Br > I\n\n'
    '■ 비활성 기체 (18족, He·Ne·Ar·Kr·Xe·Rn)\n'
    '- 원자가 전자 8개 (He은 2개), 최외각 전자 완전 충족\n'
    '- 화학 반응 거의 하지 않음 (안정)\n'
    '- 단원자 분자로 존재\n'
    '- 용도: He(기구, MRI 냉각), Ne(네온사인), Ar(형광등), Kr·Xe(특수 조명)\n\n'
    '■ 준금속 원소 (Metalloids)\n'
    '금속과 비금속의 경계에 위치하며, 두 성질을 모두 가진다.\n'
    '- 해당 원소: B(붕소), Si(규소), Ge(저마늄), As(비소), Sb(안티모니), Te(텔루륨), Po(폴로늄)\n'
    '- 반도체 성질: 조건에 따라 전기 전도성이 변함\n'
    '- Si, Ge은 반도체 재료로 전자 산업에서 핵심 소재\n\n'
    '■ 주기율표에서의 위치 요약\n'
    '금속 ← (계단선 경계) → 비금속\n'
    '준금속은 계단선 주변에 위치\n'
    '(B-Si-Ge-As-Sb-Te-Po 라인)',
    '[
      {"label": "알칼리 금속 + 물 반응", "formula": "2M + 2H₂O → 2MOH + H₂↑  (M = Li, Na, K 등)", "description": "알칼리 금속은 물과 반응하여 금속 수산화물과 수소 기체를 생성한다."},
      {"label": "할로겐 + 금속 반응", "formula": "2Na + Cl₂ → 2NaCl", "description": "할로겐은 금속과 반응하여 이온성 화합물(염)을 형성한다."}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na)을 물에 넣으면 어떤 반응이 일어나는지 화학 반응식과 함께 설명하시오.", "solution": "2Na + 2H₂O → 2NaOH + H₂↑. 나트륨이 물과 격렬하게 반응하여 수산화 나트륨(NaOH)과 수소 기체(H₂)를 생성한다. 이때 발생한 열로 수소에 불이 붙을 수 있다."},
      {"problem": "규소(Si)가 반도체 소재로 사용되는 이유를 준금속의 성질과 관련지어 설명하시오.", "solution": "Si는 준금속으로 금속과 비금속의 중간 성질을 가진다. 순수한 Si는 전기 전도성이 낮으나, 특정 불순물을 첨가(도핑)하거나 온도, 빛 등의 조건을 변화시키면 전도성을 조절할 수 있어 트랜지스터, 태양전지 등 반도체 소자에 활용된다."}
    ]'::jsonb,
    '금속은 사교적인 사람(전자를 쉽게 내어주는), 비금속은 욕심 많은 사람(전자를 받으려는), 준금속은 양쪽 성질을 조금씩 가진 애매한 사람과 같다. 반도체는 스위치처럼 상황에 따라 전자를 흘리거나 막는 역할을 한다.'
  )
  RETURNING id INTO v_lesson3_id;

  -- ============================================================
  -- LESSON 4: 원자 반지름의 주기적 변화
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    4,
    '원자 반지름의 주기적 변화',
    E'■ 원자 반지름이란?\n'
    '원자 반지름은 원자핵 중심에서 최외각 전자까지의 평균 거리이다.\n'
    '- 측정 방법: 같은 종류 원자 두 개가 결합했을 때 핵 간 거리의 절반\n'
    '- 예: Cl₂에서 Cl-Cl 결합 길이 = 198 pm → 원자 반지름 = 99 pm\n\n'
    '■ 같은 주기에서의 경향: 오른쪽으로 갈수록 감소\n'
    '예) 2주기: Li > Be > B > C > N > O > F > Ne\n\n'
    '이유:\n'
    '① 같은 주기 원소들은 전자 껍질 수(주양자수)가 동일하다.\n'
    '② 오른쪽으로 갈수록 원자 번호 증가 → 양성자 수 증가\n'
    '③ 유효 핵전하(Z_eff) 증가: 핵이 전자를 더 강하게 당김\n'
    '④ 따라서 전자 구름이 핵 쪽으로 수축 → 원자 반지름 감소\n\n'
    '■ 유효 핵전하(Z_eff)\n'
    '실제 핵전하(Z)에서 내부 전자들의 가리기 효과(σ, shielding)를 뺀 값\n'
    'Z_eff = Z - σ\n'
    '- 같은 주기에서 오른쪽으로 갈수록 Z는 1씩 증가하지만 σ는 크게 변하지 않음\n'
    '→ Z_eff 증가 → 전자가 더 강하게 당겨짐\n\n'
    '■ 같은 족에서의 경향: 아래로 갈수록 증가\n'
    '예) 1족: Li < Na < K < Rb < Cs\n\n'
    '이유:\n'
    '① 아래로 갈수록 전자 껍질 수 증가 (주양자수 n 증가)\n'
    '② 새로운 전자 껍질이 추가되면서 핵에서 멀어짐\n'
    '③ 내부 전자들의 가리기 효과도 커짐\n'
    '④ 따라서 유효 핵전하 증가 효과보다 전자 껍질 추가 효과가 지배적\n\n'
    '■ 원자 반지름 비교 예시 (단위: pm)\n'
    '┌─────┬────┬────┬────┬────┬────┬────┬────┐\n'
    '│     │ Li │ Be │ B  │ C  │ N  │ O  │ F  │\n'
    '├─────┼────┼────┼────┼────┼────┼────┼────┤\n'
    '│ 반지름│152 │112 │87  │77  │75  │73  │72  │\n'
    '└─────┴────┴────┴────┴────┴────┴────┴────┘\n'
    '※ 2주기 원소, 오른쪽으로 갈수록 감소\n\n'
    '■ 이온 반지름과의 차이\n'
    '- 양이온: 전자를 잃어 전자 수 감소 → 원자 반지름보다 작음\n'
    '  예: Na(186 pm) > Na⁺(102 pm)\n'
    '- 음이온: 전자를 얻어 전자 수 증가, 전자 간 반발 증가 → 원자 반지름보다 큼\n'
    '  예: Cl(99 pm) < Cl⁻(181 pm)',
    '[
      {"label": "유효 핵전하", "formula": "Z_eff = Z - σ", "description": "Z: 원자 번호(양성자 수), σ: 가리기 상수(내부 전자들의 가리기 효과). 유효 핵전하가 클수록 전자를 강하게 당겨 원자 반지름이 감소한다."},
      {"label": "원자 반지름 경향", "formula": "같은 주기: 원자 번호 ↑ → 반지름 ↓ / 같은 족: 원자 번호 ↑ → 반지름 ↑", "description": "유효 핵전하 증가 vs 전자 껍질 수 증가의 경쟁 결과"}
    ]'::jsonb,
    '[
      {"problem": "Na, Mg, Al의 원자 반지름 크기를 비교하고 그 이유를 설명하시오.", "solution": "Na > Mg > Al. 모두 3주기 원소로 전자 껍질 수가 같다. 오른쪽으로 갈수록 양성자 수가 증가하여 유효 핵전하가 커지고, 전자가 핵에 더 강하게 당겨져 원자 반지름이 감소한다."},
      {"problem": "F와 Cl의 원자 반지름을 비교하고 이유를 설명하시오.", "solution": "F < Cl. 같은 17족 원소로 Cl이 F보다 아래에 위치한다. Cl은 전자 껍질이 3개(2, 8, 7)로 F(2개: 2, 7)보다 많아 핵에서 최외각 전자까지의 거리가 더 멀다."}
    ]'::jsonb,
    '원자를 태양계에 비유하면, 같은 주기에서 오른쪽으로 갈수록 태양(핵)이 더 강해지는 것과 같다. 행성(전자)들은 더 강한 인력에 끌려 궤도가 안쪽으로 수축한다. 반면 같은 족에서 아래로 내려갈수록 행성 궤도가 하나씩 더 추가되어 전체 크기가 커지는 것과 같다.'
  )
  RETURNING id INTO v_lesson4_id;

  -- ============================================================
  -- LESSON 5: 이온화 에너지와 전기 음성도
  -- ============================================================
  INSERT INTO lessons (
    chapter_id, order_index, title, content, key_formulas, examples, analogy
  )
  VALUES (
    v_chapter_id,
    5,
    '이온화 에너지와 전기 음성도',
    E'■ 이온화 에너지 (Ionization Energy, IE)\n'
    '기체 상태의 원자에서 전자 1개를 떼어내는 데 필요한 최소 에너지\n'
    'X(g) + 에너지 → X⁺(g) + e⁻\n\n'
    '- 단위: kJ/mol 또는 eV\n'
    '- 이온화 에너지가 클수록 전자를 떼어내기 어려움 → 양이온이 되기 어려움\n\n'
    '■ 이온화 에너지의 주기적 경향\n\n'
    '같은 주기: 오른쪽으로 갈수록 대체로 증가\n'
    '- 유효 핵전하 증가 → 전자를 더 강하게 잡음 → IE 증가\n'
    '- 예외: 2족 > 3족 (s → p 오비탈 전환), 5족 > 6족 (반충전 안정성)\n'
    '  2주기: Li < B < Be < C < O < N < F < Ne  ← 예외 주의!\n'
    '  (일반: Li < Be < B < C < N < O < F < Ne)\n\n'
    '같은 족: 아래로 갈수록 감소\n'
    '- 전자 껍질 수 증가, 가리기 효과 증가 → 전자를 잡는 힘 감소\n'
    '- 예: Li(520) > Na(496) > K(419) > Rb(403) kJ/mol\n\n'
    '■ 순차 이온화 에너지\n'
    '전자를 하나씩 차례로 제거할 때 필요한 에너지\n'
    '- IE₁ < IE₂ < IE₃ < ···  (전자 제거될수록 전자 수 감소 → 남은 전자에 유효 핵전하 증가)\n'
    '- 큰 도약이 나타나는 구간 → 새로운 전자 껍질로 진입\n'
    '- 예: Na의 경우: IE₁(496) << IE₂(4562) kJ/mol\n'
    '  → 1개 원자가 전자 후 급격히 증가 → Na는 1족 원소임을 확인\n\n'
    '■ 전기 음성도 (Electronegativity, EN)\n'
    '결합된 원자가 공유 전자쌍을 끌어당기는 상대적 능력\n'
    '- 폴링(Pauling) 척도: F = 4.0을 기준으로 상대적 값 설정\n'
    '- 단위 없음 (상대적 척도)\n\n'
    '■ 전기 음성도의 주기적 경향\n\n'
    '같은 주기: 오른쪽으로 갈수록 증가\n'
    '- 유효 핵전하 증가 → 전자를 더 강하게 당김\n\n'
    '같은 족: 아래로 갈수록 감소\n'
    '- 원자 반지름 증가 → 결합 전자와 핵의 거리 멀어짐\n\n'
    '■ 주요 원소의 폴링 전기 음성도\n'
    '┌────┬────┬────┬────┬────┬────┬────┬────┐\n'
    '│ H  │ Li │ C  │ N  │ O  │ F  │ Na │ Cl │\n'
    '├────┼────┼────┼────┼────┼────┼────┼────┤\n'
    '│2.1 │1.0 │2.5 │3.0 │3.5 │4.0 │0.9 │3.2 │\n'
    '└────┴────┴────┴────┴────┴────┴────┴────┘\n'
    '※ F(4.0)이 가장 높고, Cs·Fr(0.7)이 가장 낮음\n\n'
    '■ 이온화 에너지 vs 전기 음성도 비교\n'
    '┌──────────────┬──────────────────────┬───────────────────────┐\n'
    '│ 구분          │ 이온화 에너지          │ 전기 음성도             │\n'
    '├──────────────┼──────────────────────┼───────────────────────┤\n'
    '│ 정의         │ 전자 제거에 필요한 에너지│ 공유 전자쌍 당기는 능력  │\n'
    '│ 대상         │ 고립된 기체 원자        │ 화학 결합 내 원자        │\n'
    '│ 주기 경향    │ → 증가 (예외 있음)      │ → 증가                  │\n'
    '│ 족 경향      │ ↓ 감소                 │ ↓ 감소                  │\n'
    '└──────────────┴──────────────────────┴───────────────────────┘',
    '[
      {"label": "이온화 에너지 반응식", "formula": "X(g) + IE → X⁺(g) + e⁻", "description": "기체 상태 원자 X에서 전자 1개를 완전히 떼어내는 데 필요한 최소 에너지 (kJ/mol)"},
      {"label": "순차 이온화 에너지 증가", "formula": "IE₁ < IE₂ < IE₃ < ···", "description": "전자를 하나 제거할수록 전자 수 감소 → 남은 전자에 유효 핵전하 증가 → 이온화 에너지 점점 증가"},
      {"label": "폴링 전기 음성도 기준", "formula": "EN(F) = 4.0 (최대),  EN(Cs) ≈ 0.7 (최소)", "description": "폴링 척도에서 플루오린(F)이 가장 전기 음성도가 크고, 세슘(Cs)이 가장 작다."}
    ]'::jsonb,
    '[
      {"problem": "마그네슘(Mg)의 첫 번째 이온화 에너지(738 kJ/mol)가 나트륨(Na, 496 kJ/mol)보다 큰 이유를 설명하시오.", "solution": "Mg(3주기 2족)는 Na(3주기 1족)보다 오른쪽에 위치하여 유효 핵전하가 더 크다. 따라서 전자를 핵에서 더 강하게 잡고 있어 전자를 떼어내는 데 더 많은 에너지가 필요하다."},
      {"problem": "Al의 순차 이온화 에너지가 IE₁=577, IE₂=1817, IE₃=2745, IE₄=11578 kJ/mol일 때, Al의 족을 예측하고 이유를 설명하시오.", "solution": "IE₃와 IE₄ 사이에서 급격한 증가(약 4.2배)가 나타난다. 이는 3개의 원자가 전자를 모두 제거한 후 안쪽 전자 껍질의 전자를 제거하려 할 때 일어나는 것이다. 따라서 Al은 원자가 전자가 3개인 13족 원소이다."}
    ]'::jsonb,
    '이온화 에너지는 주차장에서 차를 빼내는 비용과 같다. 핵(주차 관리소)이 강할수록(유효 핵전하 클수록) 차(전자)를 빼는 데 더 많은 돈(에너지)이 든다. 전기 음성도는 줄다리기에서 전자쌍을 얼마나 강하게 자기 쪽으로 당기는지를 나타낸다. 둘 다 오른쪽·위로 갈수록 강해진다.'
  )
  RETURNING id INTO v_lesson5_id;

  -- ============================================================
  -- QUIZZES: LESSON 1 (주기율표의 발전)
  -- ============================================================

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '멘델레예프가 주기율표를 만들 때 사용한 배열 기준으로 옳은 것은?',
    '멘델레예프는 1869년 원소를 원자량 순으로 배열하여 주기율표를 작성하였다. 현대 주기율표는 모즐리의 연구 이후 원자 번호(양성자 수) 순으로 배열한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '원자 번호 순서', false, 1),
    (v_quiz_id, '원자량 순서', true, 2),
    (v_quiz_id, '전기 음성도 순서', false, 3),
    (v_quiz_id, '이온화 에너지 순서', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '돌베라이너의 세쌍원소설에서 리튬(Li, 원자량 6.9)과 칼륨(K, 원자량 39.1)으로부터 예측한 나트륨(Na)의 원자량으로 가장 적절한 것은?',
    '세쌍원소설에 따르면 가운데 원소의 원자량 ≈ (6.9 + 39.1) / 2 = 23.0이다. 실제 Na의 원자량은 23.0으로 일치한다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '16.0', false, 1),
    (v_quiz_id, '23.0', true, 2),
    (v_quiz_id, '28.1', false, 3),
    (v_quiz_id, '32.0', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '현대 주기율표가 원자 번호 순으로 배열되게 된 계기를 제공한 과학자는?',
    '모즐리(Moseley)는 1913년 X선 실험을 통해 원소의 고유 특성이 원자량이 아닌 원자 번호(양성자 수)임을 증명하여 현대 주기율표의 토대를 마련하였다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '돌베라이너', false, 1),
    (v_quiz_id, '뉴랜즈', false, 2),
    (v_quiz_id, '멘델레예프', false, 3),
    (v_quiz_id, '모즐리', true, 4);

  -- ============================================================
  -- QUIZZES: LESSON 2 (주기와 족)
  -- ============================================================

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '주기율표에서 ''족(group)''에 대한 설명으로 옳은 것은?',
    '족은 주기율표의 세로줄이다. 같은 족 원소들은 원자가 전자 수가 같아 화학적 성질이 유사하다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '가로줄이며, 같은 주기 원소는 전자 껍질 수가 같다.', false, 1),
    (v_quiz_id, '세로줄이며, 같은 족 원소는 원자가 전자 수가 같다.', true, 2),
    (v_quiz_id, '가로줄이며, 같은 주기 원소는 원자가 전자 수가 같다.', false, 3),
    (v_quiz_id, '세로줄이며, 같은 족 원소는 전자 껍질 수가 같다.', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '전자 배치가 2, 8, 7인 원소가 속하는 주기와 족으로 올바른 것은?',
    '전자 껍질이 3개(2, 8, 7)이므로 3주기이다. 원자가 전자가 7개이므로 17족이다. 이 원소는 염소(Cl)이다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '2주기 17족', false, 1),
    (v_quiz_id, '3주기 7족', false, 2),
    (v_quiz_id, '3주기 17족', true, 3),
    (v_quiz_id, '4주기 17족', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '다음 중 전이 원소에 해당하는 것은?',
    '전이 원소는 3~12족 원소로 d 오비탈에 전자가 채워진다. 구리(Cu), 철(Fe) 등이 해당된다. 나트륨(Na)은 1족, 칼슘(Ca)은 2족, 염소(Cl)는 17족 대표 원소이다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '나트륨(Na)', false, 1),
    (v_quiz_id, '칼슘(Ca)', false, 2),
    (v_quiz_id, '구리(Cu)', true, 3),
    (v_quiz_id, '염소(Cl)', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 3 (금속, 비금속, 준금속)
  -- ============================================================

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '알칼리 금속의 반응성 크기를 올바르게 나타낸 것은?',
    '알칼리 금속은 같은 족에서 아래로 내려갈수록 원자 반지름이 커지고 원자가 전자가 핵에서 멀어져 더 쉽게 떨어진다. 따라서 반응성은 Li < Na < K < Rb < Cs 순으로 증가한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Li > Na > K > Rb > Cs', false, 1),
    (v_quiz_id, 'Cs > Rb > K > Na > Li', true, 2),
    (v_quiz_id, 'Na > K > Li > Rb > Cs', false, 3),
    (v_quiz_id, 'K > Na > Cs > Rb > Li', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '규소(Si)에 대한 설명으로 옳지 않은 것은?',
    '규소(Si)는 준금속 원소로 반도체 성질을 가진다. 금속 광택이 있지만 전기 전도성은 금속보다 훨씬 낮다. 규소는 반도체 재료로 사용되지, 전기 전도성이 좋은 도체는 아니다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '준금속 원소이다.', false, 1),
    (v_quiz_id, '반도체 성질을 가진다.', false, 2),
    (v_quiz_id, '금속과 비금속의 중간 성질을 가진다.', false, 3),
    (v_quiz_id, '전기 전도성이 금속처럼 매우 우수하다.', true, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '비활성 기체(18족)의 화학적 특성으로 가장 적절한 설명은?',
    '비활성 기체는 최외각 전자 껍질이 완전히 채워져 있어(He: 2개, 나머지: 8개) 화학 반응을 거의 하지 않는다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응성이 매우 강하여 금속과 쉽게 결합한다.', false, 1),
    (v_quiz_id, '원자가 전자가 1개여서 안정하다.', false, 2),
    (v_quiz_id, '최외각 전자 껍질이 완전히 채워져 화학 반응을 거의 하지 않는다.', true, 3),
    (v_quiz_id, '음이온이 되기 쉬워 이온 결합을 잘 형성한다.', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 4 (원자 반지름의 주기적 변화)
  -- ============================================================

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '같은 주기에서 원자 번호가 증가할수록 원자 반지름이 감소하는 주된 이유는?',
    '같은 주기에서는 전자 껍질 수가 동일하다. 원자 번호(양성자 수)가 증가할수록 유효 핵전하가 증가하여 전자를 더 강하게 당기므로 원자 반지름이 감소한다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전자 껍질 수가 감소하기 때문이다.', false, 1),
    (v_quiz_id, '유효 핵전하가 증가하여 전자를 더 강하게 당기기 때문이다.', true, 2),
    (v_quiz_id, '중성자 수가 증가하여 원자핵이 수축하기 때문이다.', false, 3),
    (v_quiz_id, '원자가 전자 수가 감소하기 때문이다.', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    '다음 원소 중 원자 반지름이 가장 큰 것은? (Na, Mg, K, Ca)',
    'K는 4주기 1족, Ca는 4주기 2족, Na는 3주기 1족, Mg는 3주기 2족이다. 같은 주기에서는 1족이 가장 크고, 같은 족에서는 아래로 갈수록 크다. K(4주기 1족)의 원자 반지름이 가장 크다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Na', false, 1),
    (v_quiz_id, 'Mg', false, 2),
    (v_quiz_id, 'K', true, 3),
    (v_quiz_id, 'Ca', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson4_id,
    'Na와 Na⁺의 반지름 크기 비교로 올바른 것은?',
    'Na가 전자 1개를 잃으면 Na⁺가 된다. 전자 수가 줄어들면 핵전하에 비해 전자 수가 적어지므로 남은 전자들이 더 강하게 당겨진다. 따라서 Na⁺의 반지름은 Na보다 작다.',
    3
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Na < Na⁺', false, 1),
    (v_quiz_id, 'Na = Na⁺', false, 2),
    (v_quiz_id, 'Na > Na⁺', true, 3),
    (v_quiz_id, '비교할 수 없다.', false, 4);

  -- ============================================================
  -- QUIZZES: LESSON 5 (이온화 에너지와 전기 음성도)
  -- ============================================================

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '다음 중 첫 번째 이온화 에너지가 가장 큰 원소는?',
    '비활성 기체인 Ne(네온)은 최외각 전자 껍질이 완전히 채워져 가장 안정하다. 따라서 전자를 떼어내는 데 가장 많은 에너지가 필요하여 이온화 에너지가 가장 크다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'Na', false, 1),
    (v_quiz_id, 'Cl', false, 2),
    (v_quiz_id, 'Ne', true, 3),
    (v_quiz_id, 'O', false, 4);

  -- Q14
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson5_id,
    '폴링(Pauling) 척도에서 전기 음성도가 가장 큰 원소와 그 값으로 올바른 것은?',
    '폴링 척도에서 플루오린(F)의 전기 음성도가 4.0으로 모든 원소 중 가장 크다. F는 2주기 17족으로, 작은 원자 크기와 큰 유효 핵전하로 인해 공유 전자쌍을 가장 강하게 당긴다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'O (3.5)', false, 1),
    (v_quiz_id, 'F (4.0)', true, 2),
    (v_quiz_id, 'N (3.0)', false, 3),
    (v_quiz_id, 'Cl (3.2)', false, 4);

  RAISE NOTICE '주기율표 단원 콘텐츠 삽입 완료: 레슨 5개, 퀴즈 14개';
END $$;
