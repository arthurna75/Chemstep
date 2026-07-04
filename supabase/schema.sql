-- ChemStep 데이터베이스 스키마

-- 단원 (원자 구조, 주기율표 등)
create table if not exists chapters (
  id           uuid primary key default gen_random_uuid(),
  title        text not null,
  description  text,
  icon         text,
  order_index  int  not null,
  created_at   timestamptz default now()
);

-- 레슨 (단원 내 학습 콘텐츠)
create table if not exists lessons (
  id           uuid primary key default gen_random_uuid(),
  chapter_id   uuid not null references chapters(id) on delete cascade,
  title        text not null,
  content      text not null,
  key_formulas jsonb default '[]'::jsonb,
  examples     jsonb default '[]'::jsonb,
  analogy      text,
  order_index  int  not null,
  created_at   timestamptz default now()
);

-- 퀴즈 문제
create table if not exists quizzes (
  id           uuid primary key default gen_random_uuid(),
  lesson_id    uuid not null references lessons(id) on delete cascade,
  question     text not null,
  explanation  text,
  order_index  int  not null,
  created_at   timestamptz default now()
);

-- 퀴즈 선택지
create table if not exists quiz_options (
  id           uuid primary key default gen_random_uuid(),
  quiz_id      uuid not null references quizzes(id) on delete cascade,
  content      text not null,
  is_correct   boolean not null default false,
  order_index  int  not null
);

-- 사용자 학습 진도
create table if not exists user_progress (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  lesson_id    uuid not null references lessons(id) on delete cascade,
  is_completed boolean not null default false,
  completed_at timestamptz,
  created_at   timestamptz default now(),
  unique (user_id, lesson_id)
);

-- 사용자 퀴즈 응답 이력
create table if not exists user_answers (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users(id) on delete cascade,
  quiz_id            uuid not null references quizzes(id) on delete cascade,
  selected_option_id uuid not null references quiz_options(id),
  is_correct         boolean not null,
  answered_at        timestamptz default now()
);

-- 인덱스
create index if not exists idx_lessons_chapter on lessons(chapter_id, order_index);
create index if not exists idx_quizzes_lesson on quizzes(lesson_id);
create index if not exists idx_quiz_options_quiz on quiz_options(quiz_id);
create index if not exists idx_user_progress_user on user_progress(user_id);
create index if not exists idx_user_answers_user on user_answers(user_id, quiz_id);

-- RLS 정책
alter table chapters enable row level security;
alter table lessons enable row level security;
alter table quizzes enable row level security;
alter table quiz_options enable row level security;
alter table user_progress enable row level security;
alter table user_answers enable row level security;

-- 공개 읽기 (chapters, lessons, quizzes, quiz_options)
create policy "Anyone can read chapters" on chapters for select using (true);
create policy "Anyone can read lessons" on lessons for select using (true);
create policy "Anyone can read quizzes" on quizzes for select using (true);
create policy "Anyone can read quiz_options" on quiz_options for select using (true);

-- 본인 데이터만 접근 (user_progress, user_answers)
create policy "Users can manage own progress" on user_progress
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can manage own answers" on user_answers
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- 시드 데이터 (화학 5개 단원)
insert into chapters (title, description, icon, order_index) values
  ('원자 구조', '원자의 구성 입자와 전자 배치를 학습합니다', '⚛️', 1),
  ('주기율표', '원소의 주기적 성질과 주기율표를 이해합니다', '🧪', 2),
  ('화학 결합', '이온 결합, 공유 결합, 금속 결합을 학습합니다', '🔗', 3),
  ('몰과 화학식량', '몰 개념과 화학식량 계산을 마스터합니다', '⚖️', 4),
  ('화학 반응식', '화학 반응식 작성과 양적 관계를 학습합니다', '🔥', 5)
on conflict do nothing;
