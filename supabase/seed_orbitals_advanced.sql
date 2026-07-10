-- ============================================================
-- 심화과정 챕터 B: 오비탈 (심화)
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
  -- 챕터가 없으면 생성 (심화 트랙)
  INSERT INTO chapters (title, description, icon, order_index, track)
  SELECT '오비탈 (심화)', '양자역학을 바탕으로 오비탈의 모양과 전자가 채워지는 규칙을 깊이 있게 학습합니다', '☁️', 2, 'advanced'
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '오비탈 (심화)');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '오비탈 (심화)';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '오비탈 (심화) 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ════════════════════════════════════════
  -- LESSON 1: 전자 구름 모형과 오비탈
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '전자 구름 모형과 오비탈',
    '■ 오비탈이란 무엇인가 (기초)
앞선 [양자수와 오비탈로 가는 다리](lesson:양자역학의 기본 개념 (심화)/5) 레슨에서 살펴본 것처럼, 슈뢰딩거 방정식을 풀어 얻은 파동함수 하나하나가 바로 **오비탈**입니다. 오비탈은 전자가 발견될 확률이 높은 공간적 영역을 나타냅니다.

① 오비탈은 궤도가 아니라 전자가 있을 확률이 90% 이상인 공간의 경계로 이해하는 것이 정확함
② 오비탈 안에서 전자는 정해진 길을 따라 움직이지 않고, 순간순간 다른 위치에서 발견됨
③ 확률이 높은 곳은 진하게, 낮은 곳은 옅게 점을 찍어 표현한 그림을 **전자 구름 모형**이라고 함

■ 전자 구름의 모양 읽는 법 (핵심)
전자 구름은 원자핵을 중심으로 안개처럼 퍼져 있으며, 핵에서 특정 거리만큼 떨어진 곳에서 전자가 발견될 확률이 가장 높습니다. 이 확률이 최대가 되는 반지름을 최대 확률 반지름이라고 부릅니다.

■ 오비탈과 전자 껍질의 관계 — 심화
[원자 구조](chapter:원자 구조) 단원에서 배운 K, L, M 전자 껍질은 사실 주양자수(n)가 같은 오비탈들을 하나로 묶어 부르는 이름입니다. 예를 들어 L 껍질(n=2)은 2s 오비탈과 2p 오비탈로 이루어져 있습니다. 다음 레슨부터는 이 오비탈들이 실제로 어떤 모양을 가지는지 살펴봅니다.

※ 오비탈의 경계를 확률 90%로 정하는 것은 편의를 위한 약속이며, 실제로 전자 구름은 명확한 경계 없이 무한히 옅어지며 퍼져 있습니다.',
    '[
      {"label": "오비탈당 최대 전자 수", "formula": "오비탈 1개 = 전자 최대 2개", "description": "파울리 배타 원리에 따라 스핀이 반대인 전자 2개까지만 하나의 오비탈에 들어갈 수 있음"}
    ]'::jsonb,
    '[
      {"problem": "L 전자 껍질(n=2)은 어떤 오비탈들로 이루어져 있는지 쓰시오.", "solution": "n=2일 때 방위양자수 l은 0, 1이 가능하므로 L 껍질은 2s 오비탈(l=0)과 2p 오비탈(l=1)로 이루어져 있습니다."},
      {"problem": "전자 구름 모형에서 특정 위치의 점이 진하게 표시된 것은 무엇을 의미하는가?", "solution": "그 위치에서 전자가 발견될 확률이 높다는 것을 의미합니다. 점이 옅을수록 전자가 발견될 확률이 낮습니다."}
    ]'::jsonb,
    '전자 구름 모형은 밤에 가로등 주변을 날아다니는 날벌레 떼를 긴 노출로 찍은 사진과 비슷합니다. 가로등(원자핵) 가까이에는 벌레(전자)가 자주 지나가 사진이 진하게 찍히고, 멀어질수록 옅게 찍힙니다. 사진 속 어느 한 점이 특정 순간의 벌레 위치를 정확히 알려주지는 않지만, 벌레를 발견할 가능성이 높은 곳은 알려줍니다.',
    1
  )
  RETURNING id INTO v_lesson1_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '오비탈에 대한 설명으로 가장 적절한 것은?',
    '오비탈은 전자가 도는 정확한 궤도가 아니라, 전자가 발견될 확률이 높은 공간적 영역을 뜻합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전자가 발견될 확률이 높은 공간적 영역', true,  1),
    (v_quiz_id, '전자가 도는 정확한 원형 궤도', false, 2),
    (v_quiz_id, '원자핵 속 양성자의 배열', false, 3),
    (v_quiz_id, '전자 껍질과 완전히 동일한 개념', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, 'L 전자 껍질(n=2)을 이루는 오비탈로 옳은 것은?',
    'n=2일 때 l = 0, 1이 가능하므로 L 껍질은 2s와 2p 오비탈로 이루어집니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '2s와 2p', true,  1),
    (v_quiz_id, '1s만', false, 2),
    (v_quiz_id, '2s와 3p', false, 3),
    (v_quiz_id, '2p와 2d', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: s 오비탈과 p 오비탈의 모양
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    's 오비탈과 p 오비탈의 모양',
    '■ s 오비탈 — 둥근 공 모양 (기초)
방위양자수 l=0인 **s 오비탈**은 원자핵을 중심으로 완전한 구 모양을 가집니다. 어느 방향에서 봐도 모양이 같아서 방향에 따른 구분이 없습니다 (mₗ = 0, 한 가지뿐).

■ p 오비탈 — 아령 모양, 세 방향 (핵심)
방위양자수 l=1인 **p 오비탈**은 아령 모양이며, 원자핵을 중심으로 서로 수직인 세 방향(x, y, z축)으로 뻗어 있는 pₓ, p_y, p_z 세 종류가 있습니다 (mₗ = -1, 0, +1 세 가지).

① s 오비탈: 방향 구분 없이 1가지 (구형)
② p 오비탈: pₓ, p_y, p_z 3가지 (아령형, 서로 직각)
③ 같은 주양자수 n에서 p 오비탈은 s 오비탈보다 에너지가 약간 높음
④ n=1에는 s 오비탈만 존재하고 p 오비탈은 없음 (n≥2부터 p 오비탈 존재)

■ 오비탈 모양이 화학에 미치는 영향 — 심화
오비탈의 모양은 원자들이 결합할 때 어느 방향으로 겹칠 수 있는지를 결정합니다. p 오비탈이 특정 방향을 향하고 있다는 사실은 [화학 결합](chapter:화학 결합) 단원에서 배우는 공유 결합의 방향성과 분자의 입체 구조를 이해하는 실마리가 됩니다.',
    '[
      {"label": "오비탈 종류별 개수", "formula": "s: 1개, p: 3개, d: 5개, f: 7개", "description": "방위양자수 l이 정해지면 자기양자수 mₗ의 가짓수(2l+1)만큼 오비탈이 존재함"}
    ]'::jsonb,
    '[
      {"problem": "p 오비탈이 pₓ, p_y, p_z 세 가지로 나뉘는 이유를 양자수와 관련지어 설명하시오.", "solution": "p 오비탈은 방위양자수 l=1이며, 이때 자기양자수 mₗ은 -1, 0, +1의 세 값을 가질 수 있습니다. 이 세 값이 공간에서 서로 수직인 세 방향(x, y, z축)에 대응되어 pₓ, p_y, p_z 세 가지 오비탈로 나뉩니다."},
      {"problem": "n=1 껍질에는 p 오비탈이 존재하지 않는 이유를 설명하시오.", "solution": "방위양자수 l은 0부터 n-1까지의 값만 가질 수 있습니다. n=1일 때는 l=0(s 오비탈)만 가능하고 l=1(p 오비탈)은 존재할 수 없기 때문입니다."}
    ]'::jsonb,
    's 오비탈은 풍선을 균일하게 분 둥근 공과 같아서 어느 방향에서 봐도 똑같습니다. p 오비탈은 매듭 지은 풍선 두 개를 반대 방향으로 묶어 놓은 땅콩 모양과 같으며, 이런 땅콩 모양 풍선을 x, y, z 세 축 방향으로 하나씩 놓아둔 것이 pₓ, p_y, p_z입니다.',
    2
  )
  RETURNING id INTO v_lesson2_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, 's 오비탈의 모양으로 옳은 것은?',
    's 오비탈(l=0)은 원자핵을 중심으로 완전한 구 모양을 가집니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '구형', true,  1),
    (v_quiz_id, '아령형', false, 2),
    (v_quiz_id, '도넛형', false, 3),
    (v_quiz_id, '십자형', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, 'p 오비탈에 대한 설명으로 옳지 않은 것은?',
    'p 오비탈은 방위양자수 l=1로, n=1(l은 0부터 n-1까지)에서는 존재할 수 없고 n≥2부터 존재합니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'n=1 껍질에도 p 오비탈이 존재한다', true,  1),
    (v_quiz_id, 'pₓ, p_y, p_z 세 가지가 존재한다', false, 2),
    (v_quiz_id, '아령 모양이다', false, 3),
    (v_quiz_id, '서로 수직인 세 방향을 향한다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '방위양자수 l=1일 때 가능한 자기양자수(mₗ)의 개수는?',
    '자기양자수의 가짓수는 2l+1이므로 l=1일 때 2(1)+1=3개입니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '3개', true,  1),
    (v_quiz_id, '1개', false, 2),
    (v_quiz_id, '5개', false, 3),
    (v_quiz_id, '2개', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: d, f 오비탈과 오비탈의 에너지 준위
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    'd, f 오비탈과 오비탈의 에너지 준위',
    '■ 더 복잡한 모양의 d, f 오비탈 (기초)
방위양자수 l=2인 **d 오비탈**은 대부분 클로버 모양이며 5가지 방향(mₗ = -2 ~ +2)이 있습니다. l=3인 **f 오비탈**은 더욱 복잡한 모양으로 7가지 방향이 있으며, 주로 란타넘족·악티늄족 원소에서 중요합니다.

■ 오비탈의 에너지 준위 순서 (핵심)
같은 주양자수 n 안에서는 s < p < d < f 순으로 에너지가 높아집니다. 그런데 주양자수가 다른 오비탈끼리 비교하면 이 순서가 뒤바뀌는 경우가 있습니다. 대표적으로 4s 오비탈은 3d 오비탈보다 에너지가 더 낮습니다.

① 1s
② 2s → 2p
③ 3s → 3p
④ 4s → 3d → 4p
⑤ 5s → 4d → 5p …

■ 왜 4s가 3d보다 먼저 채워질까 — 심화
4s 오비탈은 3d 오비탈보다 원자핵에서 더 멀리 퍼져 있지만, 에너지 준위가 오히려 더 낮습니다. 이런 에너지 준위의 순서는 다음 레슨에서 배울 **쌓음 원리**에 따라 전자가 채워지는 순서를 결정합니다.

※ d, f 오비탈의 정확한 3차원 모양은 고등학교 과정에서 자세히 다루지 않지만, s<p<d<f로 갈수록 모양이 복잡해지고 방향의 가짓수가 늘어난다는 흐름만 기억해도 충분합니다.',
    '[
      {"label": "오비탈 최대 수용 전자 수", "formula": "부껍질 최대 전자 수 = 오비탈 개수 × 2", "description": "s부껍질 최대 2개, p부껍질 최대 6개, d부껍질 최대 10개, f부껍질 최대 14개"}
    ]'::jsonb,
    '[
      {"problem": "d 오비탈과 f 오비탈에 들어갈 수 있는 전자의 최대 개수를 각각 구하시오.", "solution": "d 오비탈은 5가지 방향(mₗ = -2~+2)이 있고 오비탈 하나당 전자 2개까지 들어가므로 5×2=10개, f 오비탈은 7가지 방향이 있으므로 7×2=14개까지 들어갈 수 있습니다."},
      {"problem": "4s 오비탈이 3d 오비탈보다 먼저 전자로 채워지는 이유를 에너지 준위와 관련지어 설명하시오.", "solution": "오비탈에 전자가 채워지는 순서는 원자핵으로부터의 거리가 아니라 에너지 준위의 높낮이로 결정됩니다. 4s 오비탈은 3d 오비탈보다 원자핵에서 멀리 퍼져 있지만 에너지 준위는 오히려 더 낮기 때문에 먼저 채워집니다."}
    ]'::jsonb,
    '오비탈의 에너지 준위를 건물의 계단이 아니라 구불구불한 오르막길에 비유할 수 있습니다. 겉보기에는 3d가 4s보다 낮은 층처럼 보이지만, 실제로 올라가야 하는 힘(에너지)은 4s 쪽이 더 적게 듭니다. 그래서 전자는 4s를 먼저 채우고 나서야 3d로 올라갑니다.',
    3
  )
  RETURNING id INTO v_lesson3_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, 'd 오비탈에 들어갈 수 있는 전자의 최대 개수는?',
    'd 오비탈은 5가지 방향이 있으며 오비탈 하나당 전자 2개까지 들어가므로 최대 10개입니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '10개', true,  1),
    (v_quiz_id, '6개', false, 2),
    (v_quiz_id, '14개', false, 3),
    (v_quiz_id, '2개', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '오비탈의 에너지 준위 순서로 옳은 것은?',
    '4s 오비탈은 3d 오비탈보다 원자핵에서 멀리 퍼져 있지만 에너지 준위는 더 낮아 먼저 채워집니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '4s가 3d보다 낮다', true,  1),
    (v_quiz_id, '3d가 4s보다 항상 낮다', false, 2),
    (v_quiz_id, '4s와 3d는 항상 에너지가 같다', false, 3),
    (v_quiz_id, '3d가 2p보다 낮다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, 'f 오비탈에 대한 설명으로 옳은 것은?',
    'f 오비탈은 방위양자수 l=3이며, 자기양자수 mₗ은 -3부터 +3까지 7가지 값을 가집니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '방위양자수 l=3이며 7가지 방향이 있다', true,  1),
    (v_quiz_id, '방위양자수 l=2이며 5가지 방향이 있다', false, 2),
    (v_quiz_id, 's 오비탈보다 항상 에너지가 낮다', false, 3),
    (v_quiz_id, '모든 원자에서 가장 먼저 채워진다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 4: 쌓음 원리와 훈트 규칙
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '쌓음 원리와 훈트 규칙',
    '■ 전자가 채워지는 세 가지 규칙 (기초)
여러 개의 전자를 오비탈에 채울 때는 세 가지 규칙을 따릅니다.

① **쌓음 원리**: 전자는 에너지가 낮은 오비탈부터 순서대로 채워짐 (1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p …)
② **파울리 배타 원리**: 하나의 오비탈에는 스핀이 반대인 전자 최대 2개까지만 들어감 ([양자수와 오비탈로 가는 다리](lesson:양자역학의 기본 개념 (심화)/5)에서 배운 내용)
③ **훈트 규칙**: 에너지가 같은 오비탈(예: 2pₓ, 2p_y, 2p_z)이 여러 개 있을 때, 전자는 최대한 서로 다른 오비탈에 나뉘어 들어가며 같은 방향의 스핀을 가짐

■ 오비탈 전자배치 표기법 (핵심)
오비탈에 전자가 채워진 상태는 오비탈 이름과 전자 수(위 첨자)로 표기합니다. 예를 들어 탄소(Z=6)의 전자배치는 1s²2s²2p²로 씁니다.

■ 훈트 규칙이 필요한 이유 — 심화
2p 오비탈에 전자 2개를 채울 때, 같은 오비탈에 몰아넣는 것보다 서로 다른 pₓ, p_y에 하나씩 나눠 넣는 것이 전자끼리의 반발을 줄여 더 안정합니다. 이 안정한 배치를 찾는 규칙이 바로 훈트 규칙입니다.

※ [원자 구조](chapter:원자 구조) 단원에서 배운 K(2) L(8) M(8) 표기는 오비탈 전자배치를 껍질 단위로 뭉뚱그린 것입니다. 예를 들어 L(8)은 2s²2p⁶을 합쳐서 8개로 나타낸 것입니다.',
    '[
      {"label": "오비탈 전자배치 표기", "formula": "오비탈 이름 + 전자 수(위 첨자), 예: 1s²2s²2p²", "description": "쌓음 원리 순서대로 오비탈 이름을 쓰고, 그 오비탈에 들어간 전자 수를 위 첨자로 표기"}
    ]'::jsonb,
    '[
      {"problem": "탄소(C, Z=6)의 오비탈 전자배치를 쓰시오.", "solution": "전자 6개를 쌓음 원리 순서(1s→2s→2p)로 채우면 1s²2s²2p²가 됩니다."},
      {"problem": "질소(N, Z=7)의 2p 오비탈에 전자 3개가 채워질 때, 훈트 규칙에 따라 어떻게 배치되는지 설명하시오.", "solution": "훈트 규칙에 따라 전자 3개는 2pₓ, 2p_y, 2p_z 세 오비탈에 하나씩 같은 방향의 스핀으로 나뉘어 들어갑니다. 한 오비탈에 2개를 먼저 채우고 나머지 오비탈을 비워두지 않습니다."}
    ]'::jsonb,
    '훈트 규칙은 버스 좌석에 앉는 승객들과 비슷합니다. 빈 2인석이 여러 줄 있을 때, 먼저 탄 승객들은 굳이 한 줄에 몰려 앉지 않고 각자 다른 줄의 창가 자리부터 하나씩 차지합니다. 자리가 부족해질 때가 되어서야 어쩔 수 없이 같은 줄에 나란히 앉습니다.',
    4
  )
  RETURNING id INTO v_lesson4_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '탄소(C, Z=6)의 오비탈 전자배치로 옳은 것은?',
    '전자 6개를 쌓음 원리 순서(1s→2s→2p)로 채우면 1s²2s²2p²가 됩니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1s²2s²2p²', true,  1),
    (v_quiz_id, '1s²2s⁴', false, 2),
    (v_quiz_id, '1s²2s²2p⁴', false, 3),
    (v_quiz_id, '1s⁶', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '훈트 규칙에 대한 설명으로 옳은 것은?',
    '훈트 규칙에 따르면 에너지가 같은 오비탈에는 전자가 최대한 나뉘어 들어갑니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '에너지가 같은 오비탈에 전자가 최대한 나뉘어 들어간다', true,  1),
    (v_quiz_id, '전자는 항상 한 오비탈부터 가득 채운 뒤 다음 오비탈로 넘어간다', false, 2),
    (v_quiz_id, '파울리 배타 원리와 반대되는 규칙이다', false, 3),
    (v_quiz_id, 's 오비탈에만 적용되는 규칙이다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '산소(O, Z=8)의 오비탈 전자배치로 옳은 것은?',
    '전자 8개를 쌓음 원리 순서로 채우면 1s²2s²2p⁴가 됩니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '1s²2s²2p⁴', true,  1),
    (v_quiz_id, '1s²2s²2p⁶', false, 2),
    (v_quiz_id, '1s²2s⁴2p²', false, 3),
    (v_quiz_id, '1s²2s²2p²3s²', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 5: 오비탈에서 주기율표와 화학 결합으로
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '오비탈에서 주기율표와 화학 결합으로',
    '■ 오비탈로 주기율표 읽기 (기초)
주기율표는 사실 오비탈이 채워지는 순서를 바탕으로 배열되어 있습니다. 원소를 마지막으로 채워지는 오비탈 종류에 따라 구역으로 나눌 수 있습니다.

① **s 구역**: 1족, 2족 (마지막 전자가 s 오비탈에 채워짐)
② **p 구역**: 13~18족 (마지막 전자가 p 오비탈에 채워짐)
③ **d 구역**: 3~12족, 전이 금속 (마지막 전자가 d 오비탈에 채워짐)
④ **f 구역**: 란타넘족·악티늄족 (마지막 전자가 f 오비탈에 채워짐)

■ 원자가 전자와 오비탈의 관계 (핵심)
[주기율표](chapter:주기율표) 단원에서 배운 같은 족은 원자가 전자 수가 같다는 규칙은, 오비탈 관점에서 보면 같은 족은 최외각 오비탈의 전자배치 유형이 같다는 뜻입니다. 예를 들어 17족(할로겐)은 모두 최외각이 ns²np⁵ 형태입니다.

■ 오비탈이 화학 결합을 결정한다 — 심화
[화학 결합](chapter:화학 결합) 단원에서 배우는 공유 결합은, 사실 두 원자의 오비탈이 서로 겹쳐서 전자를 공유하는 현상입니다. p 오비탈처럼 방향성을 가진 오비탈은 결합이 만들어지는 방향, 즉 분자의 입체 구조에도 영향을 줍니다.

이 챕터에서 배운 흐름을 정리하면 다음과 같습니다: [원자 구조](chapter:원자 구조)에서 원자를 처음 만나고, 양자역학으로 전자를 확률로 이해하고, 오비탈의 모양과 채움 규칙을 배운 뒤, 이제 그 지식을 [전자 배치](lesson:원자 구조/4)의 보어 모형과 비교하고 [주기율표](chapter:주기율표)와 [화학 결합](chapter:화학 결합)까지 확장해서 이해할 수 있습니다.

※ 전이 금속의 화학적 성질이 복잡하고 다양한 이유 중 하나는 d 오비탈의 전자배치가 s 오비탈보다 훨씬 다양한 조합을 가지기 때문입니다.',
    '[
      {"label": "할로겐(17족)의 최외각 전자배치", "formula": "ns²np⁵", "description": "n은 그 원소가 속한 주기 번호 — 예: F는 2s²2p⁵, Cl은 3s²3p⁵"}
    ]'::jsonb,
    '[
      {"problem": "염소(Cl, Z=17)의 오비탈 전자배치를 쓰고, 이 원소가 주기율표에서 어느 구역(s, p, d, f)에 속하는지 설명하시오.", "solution": "염소의 전자배치는 1s²2s²2p⁶3s²3p⁵입니다. 마지막 전자가 3p 오비탈에 채워지므로 p 구역(17족)에 속합니다."},
      {"problem": "오비탈 이론이 화학 결합의 방향성(분자의 입체 구조)과 어떤 관련이 있는지 한 문장으로 설명하시오.", "solution": "p 오비탈처럼 특정 방향으로 뻗어 있는 오비탈끼리 겹쳐서 결합이 만들어지기 때문에, 오비탈이 향하는 방향이 곧 분자가 이루는 입체적인 모양에 영향을 줍니다."}
    ]'::jsonb,
    '오비탈 이론은 주기율표라는 완성된 지도를 만든 설계도와 같습니다. 지도(주기율표)만 보고도 길을 찾을 수 있지만, 설계도(오비탈)를 알면 왜 그 길이 그렇게 나 있는지, 왜 어떤 원소들끼리 잘 결합하는지까지 이해할 수 있습니다.',
    5
  )
  RETURNING id INTO v_lesson5_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '마지막 전자가 d 오비탈에 채워지는 원소들이 속하는 주기율표 구역은?',
    'd 구역은 3~12족의 전이 금속으로, 마지막 전자가 d 오비탈에 채워집니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'd 구역, 전이 금속', true,  1),
    (v_quiz_id, 's 구역', false, 2),
    (v_quiz_id, 'p 구역', false, 3),
    (v_quiz_id, 'f 구역', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '17족(할로겐) 원소들의 최외각 전자배치 형태로 옳은 것은?',
    '할로겐 원소는 모두 최외각이 ns²np⁵ 형태로, 원자가 전자 7개를 가집니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'ns²np⁵', true,  1),
    (v_quiz_id, 'ns²np⁶', false, 2),
    (v_quiz_id, 'ns¹', false, 3),
    (v_quiz_id, 'ns²np³', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '오비탈 이론이 화학 결합을 설명하는 데 주는 통찰로 가장 적절한 것은?',
    '오비탈이 겹치는 방향에 따라 결합이 형성되는 방향이 정해지고, 이는 분자의 입체 구조에 영향을 줍니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '오비탈이 겹치는 방향이 분자의 입체 구조에 영향을 준다', true,  1),
    (v_quiz_id, '오비탈은 화학 결합과 관련이 없다', false, 2),
    (v_quiz_id, '모든 원자는 s 오비탈로만 결합한다', false, 3),
    (v_quiz_id, '오비탈의 모양은 항상 구형이다', false, 4);

  RAISE NOTICE '오비탈 (심화) 단원 콘텐츠 삽입 완료: 레슨 5개, 퀴즈 13개';

END $$;
