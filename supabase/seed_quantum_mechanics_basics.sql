-- ============================================================
-- 심화과정 챕터 A: 양자역학의 기본 개념 (심화)
-- 레슨 5개 + 퀴즈 12개
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
  SELECT '양자역학의 기본 개념 (심화)', '보어 모형의 한계를 넘어, 전자의 위치를 확률로 설명하는 양자역학의 핵심 개념을 배웁니다', '🌌', 1, 'advanced'
  WHERE NOT EXISTS (SELECT 1 FROM chapters WHERE title = '양자역학의 기본 개념 (심화)');

  SELECT id INTO v_chapter_id FROM chapters WHERE title = '양자역학의 기본 개념 (심화)';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '양자역학의 기본 개념 (심화) 단원을 찾을 수 없습니다.';
  END IF;

  DELETE FROM lessons WHERE chapter_id = v_chapter_id;

  -- ════════════════════════════════════════
  -- LESSON 1: 보어 모형의 한계
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '보어 모형의 한계',
    '■ 보어 모형이 설명하지 못한 것들 (기초)
[원자 구조](chapter:원자 구조) 단원에서 배운 보어의 원자 모형은 전자가 태양 주위를 도는 행성처럼 정해진 궤도를 돈다고 설명했습니다. 수소 원자의 스펙트럼은 정확히 맞아떨어졌지만, 곧 한계가 드러났습니다.

① 전자가 2개 이상인 원자(헬륨 이상)의 스펙트럼을 정확히 설명하지 못함
② 전자가 왜 특정 궤도에서만 안정하게 존재하는지 이론적 근거가 없음
③ 자기장 속에서 스펙트럼선이 여러 갈래로 갈라지는 현상을 설명하지 못함
④ 전자를 작은 알갱이가 원 궤도를 도는 모습으로 그린 그림 자체가 실제 전자의 행동과 어긋남

■ 전자는 정말 궤도를 도는가 (핵심)
1920년대 물리학자들은 전자를 정해진 길을 도는 작은 공처럼 볼 수 없다는 사실을 깨달았습니다. **양자역학**은 전자의 위치와 에너지를 확률로 설명하는 새로운 언어입니다. 이 관점에서 전자는 하나의 위치에 고정되지 않고, 원자핵 주위 여러 곳에 동시에 존재할 확률을 가집니다.

■ 두 모형의 근본적 차이 — 심화
보어 모형은 전자의 위치를 정확한 궤도로 못박았지만, 양자역학적 모형은 전자가 있을 확률이 높은 영역만 알려줍니다. 두 모형을 나란히 비교하면 그 차이가 뚜렷합니다.

※ 고등학교 화학I에서 배우는 K, L, M 전자 껍질은 보어 모형을 단순화한 것으로 계산에는 여전히 유용하지만, 실제 전자의 미시적인 행동을 정확히 설명하지는 못합니다.',
    '[
      {"label": "보어 모형의 에너지 준위", "formula": "Eₙ = -13.6/n² (eV, 수소 원자 한정)", "description": "수소처럼 전자가 1개인 원자에서만 정확하며, 전자가 여러 개인 원자에는 적용되지 않음"}
    ]'::jsonb,
    '[
      {"problem": "보어 모형이 헬륨(He) 이상의 원자 스펙트럼을 정확히 설명하지 못하는 이유를 한 문장으로 설명하시오.", "solution": "보어 모형은 전자 하나만 있는 수소 원자에 맞춰 만들어져 전자 사이의 상호작용(반발력)을 고려하지 않았기 때문에, 전자가 여러 개인 원자에서는 오차가 커집니다."},
      {"problem": "보어 모형에서 양자역학적 모형으로 넘어오면서 전자의 위치를 보는 관점이 어떻게 바뀌었는지 설명하시오.", "solution": "보어 모형은 전자가 정해진 궤도 위의 정확한 위치에 있다고 보았지만, 양자역학적 모형은 전자의 정확한 위치 대신 특정 위치에서 전자가 발견될 확률만을 알 수 있다고 봅니다."}
    ]'::jsonb,
    '보어 모형은 기차가 정해진 철로 위만 달리는 것과 같습니다. 반면 양자역학적 모형은 기차가 있을 법한 장소를 안개처럼 옅고 짙은 정도로 표시한 확률 지도에 가깝습니다. 안개가 짙은 곳일수록 기차(전자)를 발견할 가능성이 높습니다.',
    1
  )
  RETURNING id INTO v_lesson1_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '다음 중 보어 모형의 한계로 옳지 않은 것은?',
    '보어 모형은 수소 원자의 스펙트럼은 정확히 설명했습니다. 문제가 된 것은 전자가 여러 개인 원자였습니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '수소 원자의 스펙트럼을 전혀 설명하지 못한다', true,  1),
    (v_quiz_id, '전자가 2개 이상인 원자의 스펙트럼을 정확히 설명하지 못한다', false, 2),
    (v_quiz_id, '자기장 속에서 스펙트럼선이 갈라지는 현상을 설명하지 못한다', false, 3),
    (v_quiz_id, '전자가 왜 특정 궤도에서만 존재하는지 이론적 근거가 없다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson1_id, '양자역학적 모형에서 전자의 위치를 표현하는 방식으로 가장 적절한 것은?',
    '양자역학에서는 전자의 정확한 위치 대신, 특정 위치에서 전자가 발견될 확률이 높은 영역으로 전자의 상태를 나타냅니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전자가 발견될 확률이 높은 영역으로 나타낸다', true,  1),
    (v_quiz_id, '전자가 항상 도는 원형 궤도로 나타낸다', false, 2),
    (v_quiz_id, '전자의 정확한 위치와 속도를 동시에 알 수 있다', false, 3),
    (v_quiz_id, '전자는 원자핵과 항상 같은 위치에 있다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: 빛과 전자의 이중성
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '빛과 전자의 이중성',
    '■ 빛은 입자일까 파동일까 (기초)
빛은 오랫동안 파동으로 여겨졌지만, 아인슈타인은 빛이 광자라는 에너지 알갱이(입자)로도 행동한다는 것을 광전 효과로 증명했습니다.

① 금속 표면에 빛을 쬐면 전자가 튀어나오는 현상을 **광전 효과**라고 함
② 빛의 세기를 아무리 높여도 진동수가 낮으면 전자가 튀어나오지 않음 → 파동으로는 설명 불가
③ 빛을 에너지 알갱이(광자)의 흐름으로 보면, 광자 하나의 에너지가 충분히 커야 전자를 떼어낼 수 있음이 설명됨
④ 즉 빛은 상황에 따라 파동처럼도, 입자처럼도 행동함 → 빛의 이중성

■ 전자도 파동처럼 행동한다 (핵심)
드브로이는 빛만이 아니라 전자 같은 물질 입자도 파동의 성질을 가진다고 제안했습니다. 이를 **물질파**라고 합니다. 실제로 전자를 얇은 결정에 통과시키면 빛처럼 회절·간섭무늬가 나타나는 실험으로 확인되었습니다.

■ 이중성이 화학에 주는 의미 — 심화
전자가 파동의 성질을 가진다는 사실은 전자를 한 점에 있는 작은 공이 아니라 공간에 퍼진 파동으로 다뤄야 한다는 뜻입니다. 이 발상이 다음 레슨에서 배울 {{불확정성 원리::위치와 운동량을 동시에 정확히 측정할 수 없다는 원리}}와 오비탈 개념의 출발점이 됩니다.

※ 물질파의 파장은 입자의 질량과 속도에 반비례하기 때문에, 야구공처럼 무거운 물체의 파동성은 너무 작아 우리가 느낄 수 없습니다.',
    '[
      {"label": "광자 에너지", "formula": "E = hν", "description": "h는 플랑크 상수, ν는 빛의 진동수 — 진동수가 클수록 광자 하나의 에너지가 큼"},
      {"label": "드브로이 물질파 파장", "formula": "λ = h/mv", "description": "질량 m, 속도 v인 입자의 물질파 파장 — 질량이 클수록 파장이 짧아져 파동성이 드러나지 않음"}
    ]'::jsonb,
    '[
      {"problem": "광전 효과 실험에서 빛의 세기를 높여도 전자가 튀어나오지 않는 경우가 있는 이유를 설명하시오.", "solution": "전자가 튀어나오려면 광자 하나의 에너지(E=hν)가 금속의 문턱 에너지보다 커야 합니다. 빛의 세기를 높이는 것은 광자의 개수를 늘리는 것일 뿐 광자 하나의 에너지(진동수)를 바꾸지 않으므로, 진동수가 낮으면 아무리 세기를 높여도 전자가 튀어나오지 않습니다."},
      {"problem": "드브로이의 물질파 개념이 전자를 이해하는 방식에 어떤 변화를 주었는지 설명하시오.", "solution": "전자를 더 이상 한 점에 있는 작은 입자로만 보지 않고, 공간에 퍼져 있는 파동으로도 다룰 수 있게 되었습니다. 이는 전자의 위치를 확률적으로만 알 수 있다는 양자역학적 관점의 기초가 되었습니다."}
    ]'::jsonb,
    '빛과 전자의 이중성은 물이 상황에 따라 출렁이는 파도(파동)처럼 보이기도 하고, 물총에서 튀는 물방울(입자)처럼 보이기도 하는 것과 비슷합니다. 무엇을 관찰하느냐에 따라 같은 대상이 다른 모습으로 나타납니다.',
    2
  )
  RETURNING id INTO v_lesson2_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '광전 효과에 대한 설명으로 옳은 것은?',
    '전자가 튀어나오려면 광자 하나의 에너지가 문턱값을 넘어야 하며, 이는 빛의 세기가 아니라 진동수로 결정됩니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '빛의 진동수가 충분히 크면 세기가 약해도 전자가 튀어나올 수 있다', true,  1),
    (v_quiz_id, '빛의 세기만 높이면 진동수와 상관없이 전자가 튀어나온다', false, 2),
    (v_quiz_id, '광전 효과는 빛이 순수한 파동이라는 것을 증명한다', false, 3),
    (v_quiz_id, '금속에 빛을 쬐면 진동수와 관계없이 항상 전자가 튀어나온다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson2_id, '드브로이의 물질파 개념이 의미하는 것은?',
    '드브로이는 전자와 같은 물질 입자도 파동의 성질(물질파)을 가진다고 제안했으며, 이는 실험으로 확인되었습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전자와 같은 물질 입자도 파동의 성질을 가진다', true,  1),
    (v_quiz_id, '빛은 입자의 성질을 전혀 갖지 않는다', false, 2),
    (v_quiz_id, '무거운 물체일수록 파동성이 뚜렷하게 나타난다', false, 3),
    (v_quiz_id, '전자는 절대 회절이나 간섭을 일으키지 않는다', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: 하이젠베르크 불확정성 원리
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '하이젠베르크 불확정성 원리',
    '■ 위치와 속도를 동시에 정확히 알 수 없다 (기초)
하이젠베르크는 전자처럼 작은 입자는 위치와 운동량(속도와 관련된 양)을 동시에 정확히 측정할 수 없다는 **불확정성 원리**를 제시했습니다.

① 위치를 더 정확히 측정하려 할수록 운동량의 측정 오차는 커짐
② 반대로 운동량을 더 정확히 측정하려 할수록 위치의 측정 오차는 커짐
③ 이는 측정 기술의 한계가 아니라 자연 그 자체의 근본적인 성질
④ 전자를 관측하려면 빛(광자)을 쏴야 하는데, 이 과정 자체가 전자의 상태를 바꿔버림

■ "궤도"라는 말이 사라진 이유 (핵심)
보어 모형처럼 전자가 정해진 궤도를 돈다고 말하려면 위치와 속도를 동시에 알아야 합니다. 그러나 불확정성 원리에 따르면 이는 원리적으로 불가능합니다. 그래서 양자역학에서는 전자의 궤도라는 말 대신 **확률 분포**라는 말을 사용합니다.

■ 확률로 전자를 그린다는 것 — 심화
전자의 위치를 정확한 점이 아니라, 특정 공간에서 전자가 발견될 확률의 분포로 나타내는 것이 다음 챕터에서 다룰 오비탈 개념의 핵심입니다. 확률이 높은 곳은 짙게, 낮은 곳은 옅게 표현한 전자 구름 그림이 대표적인 예입니다.

※ 불확정성 원리는 일상적인 크기의 물체(자동차, 야구공)에서는 그 효과가 무시할 수 있을 만큼 작아 느껴지지 않습니다.',
    '[
      {"label": "하이젠베르크 불확정성 원리", "formula": "Δx · Δp ≥ h/4π", "description": "위치의 불확정성(Δx)과 운동량의 불확정성(Δp)의 곱은 항상 일정 값 이상 — 둘을 동시에 0으로 만들 수 없음"}
    ]'::jsonb,
    '[
      {"problem": "불확정성 원리에 따르면 전자의 위치를 더 정확히 측정하려고 할 때 어떤 일이 일어나는가?", "solution": "위치의 측정 오차(Δx)가 작아질수록 운동량의 측정 오차(Δp)는 커집니다. Δx와 Δp의 곱은 일정 값 이상으로 유지되어야 하기 때문입니다."},
      {"problem": "보어 모형의 전자 궤도 개념이 양자역학에서 확률 분포로 바뀐 이유를 설명하시오.", "solution": "궤도를 정의하려면 전자의 위치와 속도를 동시에 정확히 알아야 하는데, 불확정성 원리에 의해 이것이 원리적으로 불가능하기 때문입니다. 따라서 전자가 특정 위치에서 발견될 확률만을 다룰 수 있습니다."}
    ]'::jsonb,
    '어두운 방에서 날아다니는 벌을 사진 찍는다고 생각해 보세요. 셔터 속도를 빠르게 해서 벌의 위치를 선명하게 찍으면 벌이 얼마나 빨리 날고 있었는지는 사진에서 알 수 없고, 셔터를 느리게 해서 움직임(속도)을 담으면 벌의 위치가 흐릿하게 번져 정확한 위치를 알 수 없습니다.',
    3
  )
  RETURNING id INTO v_lesson3_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '하이젠베르크 불확정성 원리에 대한 설명으로 옳은 것은?',
    '불확정성 원리는 측정 기술의 한계가 아니라 자연의 근본적인 성질로, 전자의 위치와 운동량을 동시에 정확히 알 수 없음을 말합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '전자의 위치와 운동량을 동시에 정확히 측정할 수 없다', true,  1),
    (v_quiz_id, '측정 기술이 발전하면 언젠가 위치와 속도를 동시에 정확히 알 수 있다', false, 2),
    (v_quiz_id, '불확정성 원리는 전자에만 적용되고 다른 입자에는 적용되지 않는다', false, 3),
    (v_quiz_id, '전자의 위치는 항상 정확히 알 수 있지만 속도만 알 수 없다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson3_id, '양자역학에서 "전자 궤도" 대신 "확률 분포"라는 표현을 쓰는 이유는?',
    '위치와 운동량을 동시에 정확히 알 수 없으므로 정해진 궤도를 그릴 수 없고, 대신 전자가 발견될 확률로만 표현할 수 있습니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '위치와 운동량을 동시에 정확히 알 수 없어 정해진 궤도를 그릴 수 없기 때문', true,  1),
    (v_quiz_id, '전자가 원자핵 주위를 돌지 않기 때문', false, 2),
    (v_quiz_id, '확률 분포가 궤도보다 계산하기 쉬워서', false, 3),
    (v_quiz_id, '전자가 여러 개의 원자핵을 동시에 돌기 때문', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 4: 슈뢰딩거 방정식과 파동함수
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '슈뢰딩거 방정식과 파동함수',
    '■ 전자를 파동으로 기술하는 방정식 (기초)
슈뢰딩거는 전자를 파동으로 보고, 그 파동의 모양을 수학적으로 나타내는 **슈뢰딩거 방정식**을 만들었습니다. 이 방정식을 풀면 **파동함수**(그리스 문자 ψ로 표기)라는 함수를 얻습니다.

■ 파동함수가 뜻하는 것 (핵심)
파동함수 ψ 자체는 직접적인 물리적 의미가 없지만, ψ를 제곱한 값(ψ²)은 특정 위치에서 전자가 발견될 확률과 비례합니다. 즉 ψ²이 큰 곳일수록 전자가 존재할 가능성이 높은 곳입니다.

① 슈뢰딩거 방정식을 원자에 대해 풀면 여러 개의 파동함수 해가 나옴
② 각 해는 서로 다른 에너지와 모양을 가진 전자의 상태를 나타냄
③ 이 해 하나하나가 다음 챕터에서 배울 **오비탈**의 수학적 실체

■ 복잡한 계산은 몰라도 괜찮다 — 심화
고등학교 과정에서는 슈뢰딩거 방정식을 직접 풀 필요가 없습니다. 중요한 것은 전자의 위치는 확률로만 설명되며, 그 확률 분포가 파동함수의 제곱으로 계산된다는 개념적 이해입니다.

※ ψ²을 공간에 그려서 전자가 발견될 확률이 높은 영역을 구름처럼 표현한 그림을 전자 구름 모형이라고 하며, 오비탈 모양의 기초가 됩니다.',
    '[
      {"label": "확률 밀도", "formula": "확률 밀도 ∝ ψ²", "description": "파동함수 ψ를 제곱한 값이 특정 위치에서 전자가 발견될 확률에 비례함"}
    ]'::jsonb,
    '[
      {"problem": "파동함수 ψ 자체가 아니라 ψ²을 전자의 확률과 연결짓는 이유는 무엇인지 설명하시오.", "solution": "ψ 자체는 음수 값을 가질 수도 있어 직접 확률로 해석할 수 없지만, ψ를 제곱한 ψ²은 항상 0 이상의 값을 가지므로 특정 위치에서 전자가 발견될 확률과 비례하는 양으로 사용할 수 있습니다."},
      {"problem": "슈뢰딩거 방정식을 원자에 대해 풀었을 때 얻는 여러 해는 화학적으로 무엇에 해당하는가?", "solution": "각 해는 서로 다른 에너지와 공간적 모양을 가진 전자의 상태, 즉 오비탈에 해당합니다."}
    ]'::jsonb,
    '파동함수를 기타 줄의 진동에 비유할 수 있습니다. 줄이 진동하는 모양(파동함수) 자체보다, 그 진동이 만들어내는 소리의 세기(파동함수의 제곱)가 우리 귀에 더 의미 있게 다가오는 것과 비슷합니다.',
    4
  )
  RETURNING id INTO v_lesson4_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '파동함수 ψ에 대한 설명으로 옳은 것은?',
    'ψ 자체가 아니라 ψ를 제곱한 값이 특정 위치에서 전자가 발견될 확률과 비례합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, 'ψ를 제곱한 값이 전자가 발견될 확률과 비례한다', true,  1),
    (v_quiz_id, 'ψ 값 자체가 전자의 정확한 위치를 알려준다', false, 2),
    (v_quiz_id, 'ψ는 항상 0보다 큰 값만 가진다', false, 3),
    (v_quiz_id, 'ψ는 전자의 질량을 계산하는 데 사용된다', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson4_id, '슈뢰딩거 방정식을 원자에 대해 풀어서 얻는 여러 해는 무엇을 의미하는가?',
    '각 해는 서로 다른 에너지와 모양을 가진 오비탈에 해당합니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '서로 다른 에너지와 모양을 가진 오비탈', true,  1),
    (v_quiz_id, '원자핵 속 중성자의 개수', false, 2),
    (v_quiz_id, '전자가 도는 정확한 원 궤도', false, 3),
    (v_quiz_id, '원자의 질량수', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 5: 양자수와 오비탈로 가는 다리
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '양자수와 오비탈로 가는 다리',
    '■ 전자의 상태를 나타내는 네 개의 숫자 (기초)
슈뢰딩거 방정식을 풀어 얻은 각 전자의 상태는 **양자수**라는 네 가지 숫자로 구분됩니다.

① 주양자수 (n): 전자 껍질(에너지 준위)을 나타냄 — n = 1, 2, 3 …
② 방위(부)양자수 (l): 오비탈의 모양을 나타냄 — l = 0(s), 1(p), 2(d), 3(f)
③ 자기양자수 (mₗ): 같은 모양의 오비탈이 공간에서 향하는 방향을 나타냄
④ 스핀양자수 (mₛ): 전자 자체가 가진 자전과 같은 성질로, +1/2 또는 −1/2 두 값만 가짐

■ 파울리 배타 원리 (핵심)
한 원자 안의 어떤 두 전자도 네 양자수가 모두 같을 수 없습니다. 이를 **파울리 배타 원리**라고 합니다. 같은 오비탈(n, l, mₗ이 모두 같음)에는 스핀양자수가 다른 전자 2개까지만 들어갈 수 있습니다.

■ 이제 오비탈로 — 심화
방위양자수 l이 정해지면 오비탈의 모양(s, p, d, f)이 정해지고, 주양자수 n과 결합하면 1s, 2s, 2p처럼 구체적인 오비탈 이름이 됩니다. 다음 챕터 [오비탈 (심화)](chapter:오비탈 (심화))에서 이 오비탈들이 실제로 어떤 모양을 가지는지, 전자가 어떤 순서로 채워지는지 자세히 배웁니다.

※ l 값은 알파벳 s, p, d, f로 표기하는데, 이는 각각 옛 분광학 용어(sharp, principal, diffuse, fundamental)에서 따온 이름입니다.',
    '[
      {"label": "방위양자수의 범위", "formula": "l = 0, 1, 2, … (n-1)", "description": "주양자수 n이 정해지면 방위양자수 l은 0부터 n-1까지의 정수 값을 가짐"},
      {"label": "자기양자수의 범위", "formula": "mₗ = -l, …, 0, …, +l", "description": "방위양자수 l이 정해지면 자기양자수는 -l부터 +l까지 (2l+1)개의 정수 값을 가짐"}
    ]'::jsonb,
    '[
      {"problem": "주양자수 n=2일 때 가능한 방위양자수 l의 값을 모두 구하시오.", "solution": "l은 0부터 n-1까지의 값을 가지므로, n=2일 때 l = 0, 1 두 가지 값이 가능합니다. l=0은 2s 오비탈, l=1은 2p 오비탈에 해당합니다."},
      {"problem": "파울리 배타 원리에 따르면 하나의 오비탈에는 전자가 최대 몇 개까지 들어갈 수 있는가? 이유와 함께 설명하시오.", "solution": "최대 2개입니다. 같은 오비탈 안의 전자는 n, l, mₗ이 모두 같으므로, 파울리 배타 원리에 의해 남은 스핀양자수(mₛ = +1/2, -1/2)가 서로 달라야만 두 전자가 공존할 수 있기 때문입니다."}
    ]'::jsonb,
    '양자수 네 개를 학생의 정보(학년-반-분단-자리번호)에 비유할 수 있습니다. 같은 학교(원자) 안에 학년-반-분단-자리번호가 모두 똑같은 학생 두 명은 있을 수 없다는 것이 파울리 배타 원리와 같은 원리입니다.',
    5
  )
  RETURNING id INTO v_lesson5_id;

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '방위양자수(l)가 나타내는 것은?',
    '방위양자수 l은 오비탈의 모양(s, p, d, f)을 결정합니다.', 1)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '오비탈의 모양', true,  1),
    (v_quiz_id, '전자 껍질의 크기', false, 2),
    (v_quiz_id, '전자의 스핀 방향', false, 3),
    (v_quiz_id, '원자핵의 전하', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '주양자수 n=3일 때 가능한 방위양자수 l의 개수는?',
    'l은 0부터 n-1까지의 값을 가지므로 n=3일 때 l = 0, 1, 2로 3개입니다.', 2)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '3개', true,  1),
    (v_quiz_id, '2개', false, 2),
    (v_quiz_id, '4개', false, 3),
    (v_quiz_id, '1개', false, 4);

  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (v_lesson5_id, '파울리 배타 원리에 대한 설명으로 옳은 것은?',
    '한 원자 안의 어떤 두 전자도 네 양자수(n, l, mₗ, mₛ)가 모두 같을 수 없습니다.', 3)
  RETURNING id INTO v_quiz_id;
  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '한 원자 안의 어떤 두 전자도 네 양자수가 모두 같을 수 없다', true,  1),
    (v_quiz_id, '모든 전자는 같은 스핀 방향을 가져야 한다', false, 2),
    (v_quiz_id, '하나의 오비탈에는 전자가 최대 8개까지 들어갈 수 있다', false, 3),
    (v_quiz_id, '양자수는 전자마다 임의로 정해진다', false, 4);

  RAISE NOTICE '양자역학의 기본 개념 (심화) 단원 콘텐츠 삽입 완료: 레슨 5개, 퀴즈 12개';

END $$;
