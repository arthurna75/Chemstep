-- ============================================================
-- 심화과정 챕터 D: 반도체와 디스플레이 화학 (심화)
-- 화학 결합·원자 구조·산화-환원과 전기화학 단원과 연계된 심화학습
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
  SELECT '반도체와 디스플레이 화학 (심화)', '실리콘 반도체의 도핑 원리부터 소자 제작 공정, LCD·OLED 디스플레이의 발광 화학까지 우리 손안의 전자기기를 만드는 화학을 탐구합니다', '💾', 4, 'advanced'
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '반도체와 디스플레이 화학 (심화)');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '반도체와 디스플레이 화학 (심화)';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '반도체와 디스플레이 화학 (심화) 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ════════════════════════════════════════
  -- LESSON 1: 반도체의 화학적 원리
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '반도체의 화학적 원리',
    '■ 반도체란 무엇인가 (기초)
실리콘(Si)은 원자가 전자 4개를 가진 14족 원소로, 이웃한 원자 4개와 [공유 결합](chapter:화학 결합)을 이루며 다이아몬드와 같은 격자 구조를 만듭니다. 이렇게 순수한 실리콘만으로 이루어진 것을 **진성 반도체**라고 하며, 전기 전도성은 도체와 절연체의 중간 정도입니다.

■ 밴드갭과 전자의 이동 (핵심)
원자 안의 전자는 [원자 구조](chapter:원자 구조) 단원에서 배운 것처럼 특정한 에너지 준위에만 존재합니다. 고체에서는 전자가 채워진 **원자가 띠**와 전자가 비어 있는 **전도띠** 사이에 에너지 간격, 즉 **밴드갭**이 존재합니다.

① 도체: 밴드갭이 거의 없어 전자가 쉽게 전도띠로 이동
② 절연체: 밴드갭이 매우 커서 전자가 거의 이동하지 못함
③ 반도체: 밴드갭이 작아(예: 실리콘 약 1.1eV) 열에너지를 받으면 일부 전자가 전도띠로 넘어가 미약한 전도성을 가짐

■ 도핑: 불순물로 전도성을 설계하다 (심화)
순수한 실리콘에 다른 원소를 미량 섞는 것을 {{도핑::반도체의 전기적 성질을 조절하기 위해 불순물 원소를 미량 첨가하는 것}}이라고 합니다.

- **15족** 원소(인, 비소 등, 원자가 전자 5개)를 도핑하면 실리콘의 공유 결합에 쓰이고 남는 전자가 하나 생겨 **n형 반도체**가 됩니다 — 다수 캐리어는 전자
- **13족** 원소(붕소 등, 원자가 전자 3개)를 도핑하면 공유 결합에 전자가 하나 부족해 **정공**(전자가 빠진 빈자리)이 생기고 **p형 반도체**가 됩니다 — 다수 캐리어는 정공

이 n형과 p형을 붙인 것이 바로 다이오드·트랜지스터의 기본 단위인 p-n 접합입니다.

※ 도핑 농도를 정밀하게 조절하면 반도체의 전기 전도도를 원하는 수준으로 설계할 수 있습니다.',
    '[
      {"label": "n형 도핑", "formula": "Si(원자가전자 4개) + P(원자가전자 5개) → 여분의 전자 1개 → n형 반도체", "description": "15족 원소를 도핑하면 공유 결합에 쓰이고 남는 전자가 다수 캐리어가 된다"},
      {"label": "p형 도핑", "formula": "Si(원자가전자 4개) + B(원자가전자 3개) → 정공 1개 → p형 반도체", "description": "13족 원소를 도핑하면 결합에 전자가 부족해 생기는 정공이 다수 캐리어가 된다"}
    ]'::jsonb,
    '[
      {"problem": "순수 실리콘에 인(P)을 도핑하면 어떤 반도체가 되며, 다수 캐리어는 무엇인가?", "solution": "n형 반도체가 되며, 다수 캐리어는 전자다. 인은 원자가 전자가 5개로 실리콘의 공유 결합에 4개만 쓰이고 1개가 남아 쉽게 전도띠로 이동할 수 있는 전자를 제공한다."},
      {"problem": "실리콘에 붕소(B)를 도핑하면 어떤 현상이 일어나는지 설명하시오.", "solution": "붕소는 원자가 전자가 3개뿐이라 실리콘과 공유 결합을 이룰 때 전자가 하나 부족해 정공(빈자리)이 생긴다. 이 정공이 다수 캐리어가 되어 p형 반도체가 된다."}
    ]'::jsonb,
    '도핑은 야구팀에 특별한 선수를 영입하는 것과 같습니다. 인(P)을 넣으면 여분의 전자가 남아 마치 대기 선수가 늘어난 것처럼 전류가 흐르기 쉬워지고(n형), 붕소(B)를 넣으면 자리가 하나 비어(정공) 사람들이 계속 그 빈자리로 옮겨 다니듯 정공이 이동하며 전류가 흐릅니다(p형).',
    1
  )
  RETURNING id INTO v_lesson1_id;

  -- Q1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '순수 실리콘(진성 반도체)의 전기 전도성에 대한 설명으로 옳은 것은?',
    '반도체는 밴드갭이 작아 온도가 높아질수록 더 많은 전자가 열에너지를 받아 전도띠로 이동하므로 전도성이 커집니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '도체보다 전도성이 항상 높다', false, 1),
    (v_quiz_id, '절연체와 도체의 중간이며, 온도가 높아지면 전도성이 커진다', true, 2),
    (v_quiz_id, '온도가 높아지면 전도성이 감소한다', false, 3),
    (v_quiz_id, '항상 절연체와 같은 성질을 갖는다', false, 4);

  -- Q2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '실리콘에 인(P, 원자가 전자 5개)을 도핑했을 때 생성되는 반도체 유형과 다수 캐리어는?',
    '인은 원자가 전자가 5개로 실리콘과 결합하고 남는 전자 1개가 다수 캐리어가 되어 n형 반도체가 됩니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'p형, 다수 캐리어는 정공', false, 1),
    (v_quiz_id, 'n형, 다수 캐리어는 전자', true, 2),
    (v_quiz_id, 'p형, 다수 캐리어는 전자', false, 3),
    (v_quiz_id, 'n형, 다수 캐리어는 정공', false, 4);

  -- Q3
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '실리콘에 붕소(B, 원자가 전자 3개)를 도핑했을 때 나타나는 현상은?',
    '붕소는 원자가 전자가 3개뿐이라 공유 결합에 전자가 하나 부족해 정공이 생기고, 이 정공이 다수 캐리어인 p형 반도체가 됩니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '여분의 전자가 생겨 n형이 된다', false, 1),
    (v_quiz_id, '공유 결합에 전자가 부족해 정공이 생겨 p형이 된다', true, 2),
    (v_quiz_id, '전도성이 완전히 사라져 절연체가 된다', false, 3),
    (v_quiz_id, '밴드갭이 완전히 사라진다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: 반도체 소자 제작 공정 화학
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '반도체 소자 제작 공정 화학',
    '■ 초고순도 실리콘 만들기 (기초)
반도체의 원료인 실리콘은 모래 속 이산화규소(SiO₂)를 탄소로 환원해 얻습니다. 이렇게 얻은 실리콘은 순도가 98~99% 정도로, 반도체로 쓰기에는 불순물이 너무 많습니다.

■ 지멘스 공정 — 9N급 순도로 정제하기 (핵심)
반도체용 실리콘은 순도 99.9999999%(9N) 이상이어야 하며, 이를 위해 **지멘스 공정**을 거칩니다. 조 실리콘을 염화수소와 반응시켜 액체인 트리클로로실란(SiHCl₃)으로 만든 뒤 증류로 정제하고, 다시 수소로 환원시켜 매우 순수한 실리콘만 봉 위에 석출시킵니다.

■ 웨이퍼 성장과 산화막 형성 (핵심)
정제된 실리콘을 녹인 뒤 **초크랄스키법**으로 씨 결정을 담가 천천히 회전·인상하며 원기둥 모양의 단결정 잉곳을 성장시키고, 이를 얇게 절단·연마해 **웨이퍼**를 만듭니다. 이후 웨이퍼를 고온의 산소·수증기 분위기에 노출시키는 **열산화** 공정으로 표면에 SiO₂ 절연막을 형성합니다. 이 막은 트랜지스터의 게이트 절연체이자 소자 사이를 전기적으로 분리하는 역할을 합니다.

■ 포토리소그래피와 식각 화학 (심화)
웨이퍼에 빛에 반응하는 **감광액**(포토레지스트)을 얇게 도포한 뒤, 자외선으로 원하는 회로 패턴만 선택적으로 노광·현상해 패턴을 남깁니다. 이후 노출된 부분을 제거하는 {{이방성 식각::특정 방향으로만 선택적으로 깊게 깎이는 식각으로, 미세한 회로 패턴을 정밀하게 새기는 데 필요}}을 진행합니다.

① 습식 식각: 불산(HF) 등 산 용액이 SiO₂ 등과 화학 반응을 일으켜 제거 — 방향 구분 없이 사방으로 깎임
② 건식 식각: 플라즈마로 만든 반응성 라디칼·이온이 특정 방향으로만 반응해 깎아냄 — 미세하고 정밀한 패턴에 유리

이 과정을 수십~수백 번 반복해 웨이퍼 위에 회로가 완성됩니다.',
    '[
      {"label": "조 실리콘 생성", "formula": "SiO₂ + 2C → Si + 2CO↑", "description": "모래(SiO₂)를 탄소로 환원해 순도 98~99%의 조 실리콘을 얻는다"},
      {"label": "지멘스 공정 정제", "formula": "Si + 3HCl → SiHCl₃ + H₂ (증류 정제 후) → SiHCl₃ + H₂ → Si + 3HCl", "description": "트리클로로실란으로 만들어 정제한 뒤 다시 환원시켜 9N급 초고순도 실리콘을 얻는다"},
      {"label": "열산화막 형성", "formula": "Si + O₂ → SiO₂", "description": "웨이퍼 표면을 고온 산소 분위기에 노출시켜 절연막을 만든다"}
    ]'::jsonb,
    '[
      {"problem": "모래(SiO₂)로부터 반도체급 초고순도 실리콘을 얻기까지의 과정을 순서대로 설명하시오.", "solution": "먼저 SiO₂를 탄소로 환원해(SiO₂+2C→Si+2CO↑) 순도 98~99%의 조 실리콘을 얻는다. 이를 염화수소와 반응시켜 트리클로로실란(SiHCl₃)으로 만든 뒤 증류로 정제하고, 다시 수소로 환원 석출시키는 지멘스 공정을 거쳐 99.9999999% 이상의 초고순도 실리콘을 얻는다."},
      {"problem": "습식 식각과 건식 식각의 차이를 화학적 관점에서 설명하시오.", "solution": "습식 식각은 불산 등 산 용액이 SiO₂ 등과 화학 반응을 일으켜 사방으로 제거하는 방식이고, 건식 식각은 플라즈마로 생성된 반응성 라디칼과 이온이 특정 방향으로만 반응해 이방성 있게 미세 패턴을 새길 수 있다."}
    ]'::jsonb,
    '지멘스 공정은 모래알 속 실리콘을 몇 번이고 걸러내는 정수 필터와 같습니다. 조 실리콘을 일단 액체(트리클로로실란)로 바꿔 불순물을 증류로 걸러내고, 다시 고체로 환원시키는 과정을 통해 처음보다 훨씬 순수한 실리콘만 남깁니다.',
    2
  )
  RETURNING id INTO v_lesson2_id;

  -- Q4
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '모래(SiO₂)를 탄소로 환원해 얻은 조 실리콘(순도 98~99%)을 반도체 등급(9N급)까지 정제하는 공정의 이름은?',
    '지멘스 공정은 조 실리콘을 트리클로로실란으로 만들어 증류 정제한 뒤 다시 환원시켜 초고순도 실리콘을 얻는 공정입니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '초크랄스키법', false, 1),
    (v_quiz_id, '지멘스 공정', true, 2),
    (v_quiz_id, '스퍼터링', false, 3),
    (v_quiz_id, '화학기상증착', false, 4);

  -- Q5
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '웨이퍼 표면에 SiO₂ 절연막을 형성하는 공정은?',
    '열산화는 웨이퍼를 고온의 산소·수증기 분위기에 노출시켜 표면에 SiO₂ 절연막을 만드는 공정입니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '포토리소그래피', false, 1),
    (v_quiz_id, '이온 주입', false, 2),
    (v_quiz_id, '열산화', true, 3),
    (v_quiz_id, '화학적 기계 연마', false, 4);

  -- Q6
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '습식 식각과 비교했을 때 건식(플라즈마) 식각의 특징으로 옳은 것은?',
    '건식 식각은 플라즈마의 반응성 라디칼·이온이 특정 방향으로만 반응해 이방성이 있으므로 미세한 패턴을 정밀하게 새길 수 있습니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '화학 반응 없이 순수 물리적 마모만 일어난다', false, 1),
    (v_quiz_id, '반드시 액체 산 용액을 사용해야 한다', false, 2),
    (v_quiz_id, '이방성이 있어 미세한 패턴을 정밀하게 새길 수 있다', true, 3),
    (v_quiz_id, '웨이퍼 전체를 방향 구분 없이 균일하게 녹인다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: 박막 증착 화학: CVD와 ALD
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '박막 증착 화학: CVD와 ALD',
    '■ 얇은 막을 웨이퍼 위에 쌓다 (기초)
[반도체 소자 제작 공정 화학](lesson:반도체와 디스플레이 화학 (심화)/2)에서 만든 웨이퍼 위에는 절연막·금속 배선 등 다양한 얇은 막을 정교하게 쌓아야 합니다. **화학기상증착**(CVD, Chemical Vapor Deposition)은 기체 상태의 전구체 분자를 반응 챔버에 주입해 웨이퍼 표면에서 화학 반응을 일으켜 고체 박막을 만드는 방법입니다.

■ CVD의 원리와 한계 (핵심)
예를 들어 실레인(SiH₄)과 산소를 반응시키면 SiO₂ 박막이 만들어집니다. CVD는 대면적에 비교적 빠르게 증착할 수 있지만, 복잡한 3차원 구조 위에 얼마나 고르게 덮이는지를 나타내는 **단차피복성**에는 한계가 있습니다.

■ 원자층 증착(ALD): 원자 한 층씩 정밀하게 (심화)
**원자층 증착**(ALD, Atomic Layer Deposition)은 서로 다른 두 전구체를 교대로 아주 짧게 펄스로 흘려보내는 방식입니다. 각 펄스마다 표면의 반응 자리와 전구체가 정확히 한 층(단분자층)만 화학 흡착·반응하고, 남는 반응물은 퍼지 가스로 씻어냅니다.

이렇게 표면 반응 자리가 다 소모되면 더 이상 반응이 일어나지 않는 {{자기제한 반응::표면의 반응 자리가 모두 소모되면 더 이상 반응이 진행되지 않아 정확히 한 층만 형성되는 반응}} 덕분에, ALD는 원자(옹스트롬) 단위로 두께를 정밀하게 제어할 수 있고 미세하고 복잡한 3차원 구조에도 완벽하게 균일한 막을 입힐 수 있습니다. 이 때문에 최첨단 반도체의 초박막 절연막·배리어층 형성에 필수적으로 쓰입니다.',
    '[
      {"label": "CVD 반응 예시", "formula": "SiH₄ + O₂ → SiO₂ + 2H₂", "description": "기체 전구체(실레인)가 웨이퍼 표면에서 반응해 SiO₂ 박막을 형성한다"},
      {"label": "ALD 사이클", "formula": "전구체 A 펄스(단분자층 흡착) → 퍼지 → 전구체 B 펄스(반응) → 퍼지", "description": "1사이클마다 원자층 1개가 형성되며, 사이클 반복 횟수로 두께를 정밀 제어한다"}
    ]'::jsonb,
    '[
      {"problem": "CVD와 ALD 중 매우 미세하고 복잡한 3차원 구조에 균일하게 박막을 입히기에 더 적합한 방법은? 이유를 설명하시오.", "solution": "ALD. 자기제한 반응으로 표면 전체에 정확히 한 층씩만 흡착·반응하므로 단차피복성이 뛰어나 복잡한 구조에도 균일한 두께의 막을 형성할 수 있다."},
      {"problem": "ALD가 원자 단위로 두께를 정밀하게 제어할 수 있는 화학적 이유를 설명하시오.", "solution": "각 펄스마다 전구체가 표면의 반응 자리와 딱 한 층만 반응(자기제한 반응)하고 더 이상 반응하지 않으므로, 사이클 횟수를 조절하면 증착되는 원자층 수를 정확히 셀 수 있기 때문이다."}
    ]'::jsonb,
    'ALD는 페인트를 스프레이로 대충 뿌리는 대신, 붓으로 한 겹씩 정확히 칠하고 마르면 다음 겹을 칠하는 것과 같습니다. 매 겹마다 정확히 얼마나 칠했는지 알 수 있어, 아주 얇고 균일한 막을 원하는 만큼 정밀하게 쌓을 수 있습니다.',
    3
  )
  RETURNING id INTO v_lesson3_id;

  -- Q7
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '화학기상증착(CVD)의 기본 원리로 옳은 것은?',
    'CVD는 기체 상태의 전구체 분자가 웨이퍼 표면에서 화학 반응을 일으켜 고체 박막을 형성하는 방식입니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '기체 전구체가 표면에서 화학 반응을 일으켜 고체 박막을 형성한다', true, 1),
    (v_quiz_id, '액체 산 용액이 표면을 화학적으로 녹여낸다', false, 2),
    (v_quiz_id, '자외선으로 감광액을 경화시켜 막을 만든다', false, 3),
    (v_quiz_id, '전해질 속에서 금속 이온을 환원시켜 도금한다', false, 4);

  -- Q8
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '원자층 증착(ALD)이 CVD보다 미세한 3차원 구조의 단차피복성이 뛰어난 이유는?',
    'ALD는 자기제한 반응 덕분에 표면에 정확히 한 층씩만 흡착·반응하므로, 복잡한 구조에도 균일한 막을 입힐 수 있습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '두 전구체를 한 번에 섞어 반응시키기 때문', false, 1),
    (v_quiz_id, '자기제한 반응으로 표면에 정확히 한 층씩만 흡착·반응하기 때문', true, 2),
    (v_quiz_id, '반응 온도가 항상 CVD보다 낮기 때문', false, 3),
    (v_quiz_id, '전구체를 전혀 사용하지 않기 때문', false, 4);

  -- Q9
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, 'ALD 공정에서 박막의 두께를 조절하는 방법으로 옳은 것은?',
    'ALD는 1사이클마다 정확히 한 원자층이 쌓이므로, 전구체 펄스-퍼지 사이클의 반복 횟수로 두께를 정밀하게 조절합니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '반응 챔버의 압력만 조절한다', false, 1),
    (v_quiz_id, '사용하는 산의 농도를 조절한다', false, 2),
    (v_quiz_id, '전구체 펄스-퍼지 사이클의 반복 횟수를 조절한다', true, 3),
    (v_quiz_id, '웨이퍼의 회전 속도를 조절한다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 4: 디스플레이의 화학: LCD와 OLED
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '디스플레이의 화학: LCD와 OLED',
    '■ 액정 분자로 빛을 가두다 — LCD (기초)
**액정**(liquid crystal)은 고체(결정)와 액체의 중간 성질을 가진 막대 모양의 유기 분자입니다. 전압을 걸면 액정 분자의 배열 방향이 바뀌어 편광판을 통과하는 빛의 양이 조절됩니다. 액정 자체는 빛을 내지 않으며, 뒤에서 비추는 백라이트 빛의 통과 여부만 조절한다는 점이 핵심입니다.

■ 투명한데 전기가 통한다? — ITO 전극의 화학 (핵심)
화면에 보이는 전극은 투명해야 하는데, **ITO**(산화인듐주석, Indium Tin Oxide)는 인듐 산화물(In₂O₃)에 소량의 주석(Sn)을 도핑한 물질입니다. [반도체의 화학적 원리](lesson:반도체와 디스플레이 화학 (심화)/1)에서 배운 도핑과 같은 원리로 여분의 전자를 얻어 전기 전도성을 가지면서도, 가시광선은 대부분 통과시켜 투명함을 유지합니다. [산화-환원과 전기화학](chapter:산화-환원과 전기화학) 단원에서 배운 전극 반응 원리가 ITO 전극에서도 그대로 적용되어 각 화소를 구동합니다.

■ 스스로 빛나는 화면 — OLED 발광 화학 (심화)
**OLED**(유기발광다이오드)는 백라이트 없이 유기 발광재료 자체가 빛을 냅니다. 양극(ITO)에서 정공이, 음극에서 전자가 각각 유기층으로 주입되어 발광층에서 만나 **여기자**(exciton, 들뜬 상태의 전자-정공 쌍)를 형성하고, 여기자가 바닥상태로 떨어지며 그 에너지를 빛으로 방출합니다.

① LCD: 백라이트 필요, 액정은 빛의 통과량만 조절
② OLED: 백라이트 불필요, 유기 재료 자체가 발광 — 완전한 검정 표현·얇은 두께·유연성에 유리

※ OLED의 발광 색상은 유기 발광재료 분자의 구조(공액 구조, 치환기)를 어떻게 설계하느냐에 따라 달라집니다.',
    '[
      {"label": "ITO 도핑 원리", "formula": "In₂O₃ + 소량의 Sn 도핑 → 여분의 전자 제공 → 투명하면서 전도성을 가짐", "description": "반도체 도핑과 같은 원리로 인듐 산화물에 주석을 도핑해 투명 전극을 만든다"},
      {"label": "OLED 발광 과정", "formula": "양극(정공 주입) + 음극(전자 주입) → 유기 발광층에서 여기자 형성 → 여기자 소멸 시 빛 방출", "description": "정공과 전자가 유기 발광층에서 만나 에너지를 빛으로 내놓는다"}
    ]'::jsonb,
    '[
      {"problem": "ITO가 투명하면서도 전기를 흘릴 수 있는 화학적 이유를 설명하시오.", "solution": "인듐 산화물(In₂O₃)에 주석(Sn)을 소량 도핑해 여분의 전자를 제공, 반도체 도핑과 유사한 원리로 전기 전도성을 얻으면서도 가시광선 영역에서는 흡수가 적어 투명하게 유지된다."},
      {"problem": "LCD와 OLED가 화면에 검은색을 표현하는 방식의 차이를 설명하시오.", "solution": "LCD는 백라이트가 항상 켜진 상태에서 액정으로 빛을 최대한 차단해 검은색을 표현하므로 빛샘이 있을 수 있다. OLED는 해당 화소의 발광을 아예 꺼서(전류 미공급) 완전한 검정을 구현할 수 있다."}
    ]'::jsonb,
    'LCD는 창문에 블라인드를 쳐서 뒤에서 비추는 빛의 양을 조절하는 것과 같고, OLED는 창문 하나하나에 전구를 직접 심어 필요할 때만 스스로 불을 켜는 것과 같습니다.',
    4
  )
  RETURNING id INTO v_lesson4_id;

  -- Q10
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, 'LCD에서 액정 분자의 역할로 옳은 것은?',
    '액정 분자는 스스로 빛을 내지 않고, 전압에 따라 배열이 바뀌어 백라이트 빛이 통과하는 양을 조절합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '스스로 빛을 낸다', false, 1),
    (v_quiz_id, '전압에 따라 배열이 바뀌어 통과하는 빛의 양을 조절한다', true, 2),
    (v_quiz_id, '전기를 저장하는 축전지 역할을 한다', false, 3),
    (v_quiz_id, '산화-환원 반응으로 전류를 직접 발생시킨다', false, 4);

  -- Q11
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, 'ITO(산화인듐주석)가 투명 전극으로 사용될 수 있는 이유는?',
    'ITO는 인듐 산화물에 주석을 도핑해 전도성을 얻으면서도 가시광선을 잘 통과시켜 투명합니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '순수한 금속이라 항상 투명하기 때문', false, 1),
    (v_quiz_id, '인듐 산화물에 주석을 도핑해 전도성을 얻으면서도 가시광선을 잘 통과시키기 때문', true, 2),
    (v_quiz_id, '전기가 통하지 않는 절연체이기 때문', false, 3),
    (v_quiz_id, '유기 발광 물질이기 때문', false, 4);

  -- Q12
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, 'OLED에서 빛이 발생하는 직접적인 과정은?',
    '정공과 전자가 유기 발광층에서 만나 여기자를 형성하고, 이 여기자가 바닥상태로 떨어지며 에너지를 빛으로 방출합니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '액정 분자의 배열 변화', false, 1),
    (v_quiz_id, '여기자(정공-전자 쌍)가 바닥상태로 떨어지며 에너지를 빛으로 방출', true, 2),
    (v_quiz_id, '백라이트의 빛이 컬러 필터를 통과', false, 3),
    (v_quiz_id, 'ITO 전극이 직접 빛을 냄', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 5: 디스플레이 소재의 열화와 최신 화학 트렌드
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '디스플레이 소재의 열화와 최신 화학 트렌드',
    '■ OLED는 왜 시간이 지나면 어두워질까 (기초)
OLED의 유기 발광재료는 산소·수분과 접촉하면 산화·분해되어 발광 효율이 떨어지는 **열화**가 일어납니다. 대표적으로 화소에 결함(암점, dark spot)이 생기거나 화면 전체의 밝기가 서서히 저하됩니다.

■ 봉지(encapsulation) 화학 — 산소와 수분을 막아라 (핵심)
유기 발광층을 외부의 산소·수분으로부터 차단하기 위해 **박막봉지**(TFE, Thin Film Encapsulation) 기술을 사용합니다. 무기물 박막(질화규소 등)과 유기물 박막을 교대로 여러 겹 쌓아, 한 층에 미세한 {{핀홀::박막에 생기는 미세한 구멍 형태의 결함으로, 산소·수분이 침투하는 통로가 됨}}이 있어도 다음 층이 막아주는 다층 구조로 수분·산소의 투과를 극도로 억제합니다. [부식과 방식](chapter:부식과 방식 (심화)) 단원에서 배운 부동태막처럼 침투 경로를 최대한 복잡하게 만들어 차단하는 것이 핵심입니다.

■ 차세대 발광 소재: 양자점과 페로브스카이트 (심화)
**양자점**(Quantum Dot, QD)은 나노미터 크기의 반도체 결정으로, 입자 크기에 따라 밴드갭이 달라져 크기만 조절해도 원하는 색의 빛을 정밀하게 낼 수 있습니다(QLED 디스플레이에 적용). **페로브스카이트** 발광재료는 독특한 결정 구조를 가진 화합물로, 높은 발광 효율과 저비용 공정 가능성 덕분에 차세대 디스플레이·태양전지 소재로 활발히 연구되고 있습니다.

※ 입자 크기가 작아질수록 밴드갭이 커져 더 짧은 파장(파란색 계열)의 빛을 내고, 커질수록 밴드갭이 작아져 더 긴 파장(붉은색 계열)의 빛을 냅니다.',
    '[
      {"label": "박막봉지 구조", "formula": "무기막(질화규소 등) / 유기막 교대 적층 → 핀홀 경로 차단, 수분·산소 투과 극소화", "description": "여러 겹의 박막을 교대로 쌓아 한 층의 결함을 다음 층이 막아 침투 경로를 차단한다"},
      {"label": "양자점 발광 특성", "formula": "입자 크기가 작아질수록 밴드갭이 커져 더 짧은 파장의 빛을 방출", "description": "양자점은 입자 크기만으로 발광 색을 정밀하게 조절할 수 있다"}
    ]'::jsonb,
    '[
      {"problem": "OLED 화면에 박막봉지(TFE) 기술이 필요한 화학적 이유를 설명하시오.", "solution": "OLED의 유기 발광재료가 산소·수분에 노출되면 산화·분해되어 열화(암점, 휘도 저하)가 일어나므로, 무기물/유기물 박막을 교대로 쌓아 핀홀 결함이 겹치지 않게 만들어 수분·산소의 침투 경로를 차단해야 한다."},
      {"problem": "양자점(QD) 발광재료에서 입자 크기가 발광 색을 결정하는 원리를 설명하시오.", "solution": "양자점은 나노미터 크기의 반도체 결정으로, 입자 크기가 작아질수록 밴드갭이 커져 더 짧은 파장(파란색 계열)의 빛을 내고, 커질수록 밴드갭이 작아져 더 긴 파장(붉은색 계열)의 빛을 낸다."}
    ]'::jsonb,
    '박막봉지는 여러 겹의 방수 텐트를 겹쳐 치는 것과 같습니다. 한 겹에 작은 구멍이 나 있어도 다음 겹이 정확히 같은 자리에 뚫려 있을 확률은 매우 낮아, 여러 겹을 겹칠수록 수분·산소가 안으로 새어 들어오기 어려워집니다.',
    5
  )
  RETURNING id INTO v_lesson5_id;

  -- Q13
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, 'OLED에서 시간이 지날수록 화면이 어두워지거나 암점이 생기는 주된 화학적 원인은?',
    '유기 발광재료가 산소·수분과 접촉해 산화·분해되면서 발광 효율이 떨어지는 열화가 일어나기 때문입니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '액정 분자의 배열이 풀어지기 때문', false, 1),
    (v_quiz_id, '유기 발광재료가 산소·수분과 반응해 열화되기 때문', true, 2),
    (v_quiz_id, 'ITO 전극이 다른 금속으로 변하기 때문', false, 3),
    (v_quiz_id, '화면의 온도가 항상 일정하기 때문', false, 4);

  -- Q14
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '양자점(Quantum Dot) 발광재료에서 입자 크기가 작아질수록 나타나는 변화는?',
    '입자 크기가 작아질수록 밴드갭이 커져 더 짧은 파장(파란색 계열)의 빛을 냅니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '밴드갭이 작아져 더 긴 파장의 빛을 낸다', false, 1),
    (v_quiz_id, '밴드갭이 커져 더 짧은 파장의 빛을 낸다', true, 2),
    (v_quiz_id, '발광을 완전히 멈춘다', false, 3),
    (v_quiz_id, '전기 전도성이 사라진다', false, 4);

  RAISE NOTICE '반도체와 디스플레이 화학 (심화) 단원 삽입 완료: 레슨 5개, 퀴즈 14개';
END $$;
