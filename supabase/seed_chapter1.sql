-- ChemStep: 원자 구조 단원 콘텐츠 시드
-- Supabase SQL Editor에서 실행하세요

DO $$
DECLARE
  v_chapter_id uuid;
  v_lesson1_id uuid;
  v_lesson2_id uuid;
  v_lesson3_id uuid;
  v_quiz_id    uuid;
BEGIN

  -- ────────────────────────────
  -- 0. 원자 구조 단원 ID 조회
  -- ────────────────────────────
  SELECT id INTO v_chapter_id FROM chapters WHERE title = '원자 구조';
  IF v_chapter_id IS NULL THEN
    RAISE EXCEPTION '원자 구조 단원을 찾을 수 없습니다. schema.sql 시드를 먼저 실행하세요.';
  END IF;

  -- ════════════════════════════════════════
  -- LESSON 1: 원자의 구성 입자
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '원자의 구성 입자',
    '원자는 크게 두 부분으로 이루어져 있습니다: 중심의 원자핵과 그 주위를 도는 전자입니다.

■ 양성자 (Proton)
- 전하: +1
- 상대적 질량: 1
- 위치: 원자핵 내부

■ 중성자 (Neutron)
- 전하: 0 (없음)
- 상대적 질량: 1
- 위치: 원자핵 내부

■ 전자 (Electron)
- 전하: −1
- 상대적 질량: 1/1836 ≈ 0 (무시 가능)
- 위치: 원자핵 주위 (전자 껍질)

중성 원자에서는 양성자 수 = 전자 수이기 때문에 원자 전체의 전하는 0입니다.
원자의 종류는 양성자 수(원자 번호)에 의해 결정됩니다.',
    '[
      {"label": "원자 번호 (Z)", "formula": "Z = 양성자 수", "description": "원소의 종류를 결정. 같은 원소는 항상 동일한 Z를 가짐"},
      {"label": "질량수 (A)", "formula": "A = 양성자 수 + 중성자 수", "description": "원자핵을 이루는 입자(양성자+중성자)의 총 수"},
      {"label": "중성자 수 (N)", "formula": "N = A − Z", "description": "질량수에서 원자 번호를 빼면 중성자 수를 구할 수 있음"}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na) 원자는 양성자 11개, 중성자 12개를 가집니다. 원자 번호(Z)와 질량수(A)를 구하시오.", "solution": "원자 번호 Z = 양성자 수 = 11\n질량수 A = 양성자 수 + 중성자 수 = 11 + 12 = 23"},
      {"problem": "어떤 원자의 원자 번호가 8이고 질량수가 16이다. 중성자 수를 구하시오.", "solution": "중성자 수 N = A − Z = 16 − 8 = 8"}
    ]'::jsonb,
    '원자를 태양계에 비유해 보세요. 원자핵은 거대한 태양에 해당하고, 전자들은 태양 주위를 도는 행성과 같습니다. 태양이 태양계 질량의 99.8%를 차지하듯, 원자핵도 원자 질량의 대부분을 차지합니다. 또한 태양계의 대부분이 빈 공간이듯, 원자 내부도 대부분 텅 빈 공간으로 이루어져 있습니다!',
    1
  )
  RETURNING id INTO v_lesson1_id;

  -- Lesson 1 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '다음 중 원자핵을 구성하는 입자를 올바르게 짝지은 것은?',
    '원자핵은 양성자(+)와 중성자(전하 없음)로 구성됩니다. 전자(−)는 원자핵 주위의 전자 껍질에 위치하며, 원자핵에는 포함되지 않습니다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '양성자와 중성자', true,  1),
    (v_quiz_id, '양성자와 전자',   false, 2),
    (v_quiz_id, '중성자와 전자',   false, 3),
    (v_quiz_id, '양성자, 중성자, 전자 모두', false, 4);

  -- Lesson 1 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson1_id,
    '탄소(C) 원자의 원자 번호가 6이고 질량수가 12일 때, 중성자 수는 얼마인가?',
    '중성자 수 N = A − Z = 12 − 6 = 6입니다. 탄소 원자는 양성자 6개, 중성자 6개, 전자 6개로 이루어져 있습니다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '6',  true,  1),
    (v_quiz_id, '12', false, 2),
    (v_quiz_id, '18', false, 3),
    (v_quiz_id, '3',  false, 4);

  -- ════════════════════════════════════════
  -- LESSON 2: 원자 번호와 질량수
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '원자 번호와 질량수',
    '■ 원자 번호 (Atomic Number, Z)
원자핵 속 양성자의 수입니다. 원자 번호가 같으면 같은 원소이며, 주기율표에서 원소의 순서를 결정합니다.

예) H: Z=1 / He: Z=2 / Li: Z=3 / C: Z=6 / O: Z=8

■ 질량수 (Mass Number, A)
원자핵을 구성하는 양성자 수와 중성자 수의 합입니다. 전자의 질량은 매우 작아 무시합니다.

■ 원소 표기법
원소 기호 왼쪽 위에 질량수, 왼쪽 아래에 원자 번호를 씁니다.

예: ¹²₆C → 탄소(C), 원자 번호 6, 질량수 12
    ¹⁶₈O → 산소(O), 원자 번호 8, 질량수 16

■ 중성 원자의 전자 수
중성 원자는 전체 전하가 0이므로: 전자 수 = 양성자 수 = Z',
    '[
      {"label": "원소 표기법", "formula": "ᴬ_Z X", "description": "A: 질량수(위), Z: 원자 번호(아래), X: 원소 기호"},
      {"label": "중성 원자의 전자 수", "formula": "전자 수 = 양성자 수 = Z", "description": "중성 원자는 전하가 0 → 양성자 수와 전자 수가 같음"}
    ]'::jsonb,
    '[
      {"problem": "¹⁶₈O (산소)에서 양성자 수, 중성자 수, 전자 수를 각각 구하시오.", "solution": "양성자 수 = Z = 8\n중성자 수 = A − Z = 16 − 8 = 8\n전자 수 = 양성자 수 = 8 (중성 원자이므로)"}
    ]'::jsonb,
    '원자 번호는 사람의 주민등록번호와 같습니다. 세상에 같은 주민등록번호를 가진 사람이 없듯, 원자 번호가 같으면 무조건 같은 원소입니다. 질량수는 사람의 몸무게와 비슷한 개념으로, 같은 원소(같은 주민번호)라도 몸무게(질량수)가 다를 수 있습니다. 이것이 바로 동위원소입니다!',
    2
  )
  RETURNING id INTO v_lesson2_id;

  -- Lesson 2 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '²⁷₁₃Al (알루미늄)에서 중성자 수는 얼마인가?',
    '중성자 수 N = A − Z = 27 − 13 = 14입니다. 알루미늄은 양성자 13개, 중성자 14개로 이루어진 원자핵을 가집니다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '14', true,  1),
    (v_quiz_id, '13', false, 2),
    (v_quiz_id, '27', false, 3),
    (v_quiz_id, '40', false, 4);

  -- Lesson 2 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson2_id,
    '원자 번호가 17인 염소(Cl) 원자가 중성일 때, 전자 수는 얼마인가?',
    '중성 원자에서 전자 수 = 양성자 수 = 원자 번호 = 17입니다. 전하가 없는 중성 상태이므로 (+)전하와 (−)전하의 수가 같아야 합니다.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '17', true,  1),
    (v_quiz_id, '35', false, 2),
    (v_quiz_id, '18', false, 3),
    (v_quiz_id, '16', false, 4);

  -- ════════════════════════════════════════
  -- LESSON 3: 전자 배치
  -- ════════════════════════════════════════
  INSERT INTO lessons (chapter_id, title, content, key_formulas, examples, analogy, order_index)
  VALUES (
    v_chapter_id,
    '전자 배치',
    '전자는 원자핵 주위의 전자 껍질(electron shell)에 배치됩니다.

■ 전자 껍질의 이름과 최대 전자 수
껍질은 원자핵에서 가까운 순서대로 K, L, M, N … 으로 부릅니다.

  K 껍질 (n=1): 최대 2개
  L 껍질 (n=2): 최대 8개
  M 껍질 (n=3): 최대 18개

■ 전자 배치 규칙
① 전자는 에너지가 낮은 안쪽 껍질부터 채웁니다 (K → L → M 순)
② 맨 바깥 껍질(최외각 껍질)의 전자를 원자가 전자라고 합니다
③ 원자가 전자 수가 같은 원소는 화학적 성질이 비슷합니다

■ 주요 원소의 전자 배치
  H  (Z=1):  K(1)
  He (Z=2):  K(2)
  Li (Z=3):  K(2) L(1)
  Ne (Z=10): K(2) L(8)
  Na (Z=11): K(2) L(8) M(1)
  Cl (Z=17): K(2) L(8) M(7)',
    '[
      {"label": "껍질 최대 전자 수", "formula": "최대 전자 수 = 2n²", "description": "n은 껍질 번호 (K=1, L=2, M=3 …). K=2개, L=8개, M=18개"},
      {"label": "원자가 전자", "formula": "원자가 전자 = 최외각 껍질의 전자 수", "description": "원소의 화학적 성질(반응성, 결합 방식)을 결정하는 핵심 전자"}
    ]'::jsonb,
    '[
      {"problem": "나트륨(Na, Z=11)의 전자 배치를 구하고, 원자가 전자 수를 쓰시오.", "solution": "총 전자 수 = 11개\nK 껍질: 2개 채움 (최대 2)\nL 껍질: 8개 채움 (최대 8)\nM 껍질: 나머지 1개\n\n전자 배치: K(2) L(8) M(1)\n원자가 전자 수: 1"}
    ]'::jsonb,
    '전자 껍질을 아파트에 비유해 보세요. 1층(K 껍질)은 방이 2개뿐이고, 2층(L 껍질)은 8개, 3층(M 껍질)은 18개입니다. 입주자(전자)들은 반드시 아래층부터 채워야 합니다. 맨 꼭대기 층에 남은 입주자들이 바로 "원자가 전자"로, 이웃 원자와 만났을 때 화학 결합에 참여하는 활발한 전자들입니다!',
    3
  )
  RETURNING id INTO v_lesson3_id;

  -- Lesson 3 · Quiz 1
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    '전자 배치가 K(2) L(8) M(7)인 원소의 원자 번호는?',
    '총 전자 수 = 2 + 8 + 7 = 17. 중성 원자에서 전자 수 = 양성자 수 = 원자 번호이므로 Z = 17입니다. 이 원소는 염소(Cl)입니다.',
    1
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '17', true,  1),
    (v_quiz_id, '15', false, 2),
    (v_quiz_id, '7',  false, 3),
    (v_quiz_id, '18', false, 4);

  -- Lesson 3 · Quiz 2
  INSERT INTO quizzes (lesson_id, question, explanation, order_index)
  VALUES (
    v_lesson3_id,
    'M 껍질(n=3)에 들어갈 수 있는 최대 전자 수는?',
    '최대 전자 수 = 2n² = 2 × 3² = 2 × 9 = 18입니다. K(2개), L(8개), M(18개) 순서로 기억하세요.',
    2
  )
  RETURNING id INTO v_quiz_id;

  INSERT INTO quiz_options (quiz_id, content, is_correct, order_index) VALUES
    (v_quiz_id, '18', true,  1),
    (v_quiz_id, '8',  false, 2),
    (v_quiz_id, '12', false, 3),
    (v_quiz_id, '6',  false, 4);

  RAISE NOTICE '원자 구조 단원 콘텐츠 삽입 완료: 레슨 3개, 퀴즈 6개, 선택지 24개';

END $$;
