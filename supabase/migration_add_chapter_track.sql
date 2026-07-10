-- ============================================================
-- 심화과정(track) 컬럼 추가 마이그레이션
-- 기존 prod DB는 schema.sql 재실행으로 갱신되지 않으므로 별도 실행 필요
-- ============================================================

alter table chapters add column if not exists track text not null default 'basic';

alter table chapters drop constraint if exists chapters_track_check;
alter table chapters add constraint chapters_track_check check (track in ('basic', 'advanced'));
