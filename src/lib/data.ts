import { cache } from 'react'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase/server'
import type { Chapter, Lesson, QuizWithOptions } from '@/types'

export async function getChapters(): Promise<Chapter[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .order('order_index')
if (error) throw new Error(error.message)
  return data ?? []
}

export async function getChapterById(id: string): Promise<Chapter | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('id', id)
    .single()
  if (error) return null
  return data
}

export async function getChapterByTitle(title: string): Promise<Chapter | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('chapters')
    .select('*')
    .eq('title', title)
    .single()
  if (error) return null
  return data
}

export async function getLessonByChapterTitleAndOrder(
  chapterTitle: string,
  orderIndex: number
): Promise<{ chapterId: string; lessonId: string } | null> {
  const chapter = await getChapterByTitle(chapterTitle)
  if (!chapter) return null

  const supabase = await createClient()
  const { data, error } = await supabase
    .from('lessons')
    .select('id')
    .eq('chapter_id', chapter.id)
    .eq('order_index', orderIndex)
    .single()
  if (error || !data) return null
  return { chapterId: chapter.id, lessonId: data.id }
}

export async function getLessonsByChapterId(chapterId: string): Promise<Lesson[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('chapter_id', chapterId)
    .order('order_index')
  if (error) throw new Error(error.message)
  return data ?? []
}

export async function getLessonById(id: string): Promise<Lesson | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('lessons')
    .select('*')
    .eq('id', id)
    .single()
  if (error) return null
  return data
}

export async function getQuizzesByLessonId(lessonId: string): Promise<QuizWithOptions[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('quizzes')
    .select('*, quiz_options(*)')
    .eq('lesson_id', lessonId)
    .order('order_index')
  if (error) throw new Error(error.message)
  return (data ?? []) as QuizWithOptions[]
}

export async function getUserProgress(userId: string) {
  const supabase = await createClient()
  const { data } = await supabase
    .from('user_progress')
    .select('lesson_id, is_completed')
    .eq('user_id', userId)
  return data ?? []
}

export async function markLessonComplete(userId: string, lessonId: string) {
  const supabase = await createClient()
  const { error } = await supabase
    .from('user_progress')
    .upsert(
      { user_id: userId, lesson_id: lessonId, is_completed: true, completed_at: new Date().toISOString() },
      { onConflict: 'user_id,lesson_id' }
    )
  if (error) throw new Error(error.message)
}

export const getCurrentUser = cache(async (): Promise<User | null> => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  return user ?? null
})

export async function getNextLessonForUser(
  userId: string | null
): Promise<{ chapterId: string; lessonId: string } | null> {
  const chapters = await getChapters()
  if (chapters.length === 0) return null

  const lessonsByChapter = await Promise.all(
    chapters.map(chapter => getLessonsByChapterId(chapter.id))
  )

  const completedLessonIds = new Set<string>()
  if (userId) {
    const progress = await getUserProgress(userId)
    for (const p of progress) {
      if (p.is_completed) completedLessonIds.add(p.lesson_id)
    }
  }

  let lastLesson: { chapterId: string; lessonId: string } | null = null
  for (let i = 0; i < chapters.length; i++) {
    for (const lesson of lessonsByChapter[i]) {
      lastLesson = { chapterId: chapters[i].id, lessonId: lesson.id }
      if (!completedLessonIds.has(lesson.id)) {
        return lastLesson
      }
    }
  }
  return lastLesson
}

export interface ChapterProgressSummary {
  chapterId: string
  title: string
  icon: string | null
  totalLessons: number
  completedLessons: number
}

export interface ProgressSummary {
  totalLessons: number
  completedLessons: number
  correctAnswers: number
  chapters: ChapterProgressSummary[]
}

async function buildProgressSummary(
  completedLessonIds: Set<string>,
  correctAnswers: number
): Promise<ProgressSummary> {
  const chapters = await getChapters()
  const lessonsByChapter = await Promise.all(
    chapters.map(chapter => getLessonsByChapterId(chapter.id))
  )

  const chapterSummaries: ChapterProgressSummary[] = chapters.map((chapter, i) => {
    const lessons = lessonsByChapter[i]
    const completed = lessons.filter(lesson => completedLessonIds.has(lesson.id)).length
    return {
      chapterId: chapter.id,
      title: chapter.title,
      icon: chapter.icon,
      totalLessons: lessons.length,
      completedLessons: completed,
    }
  })

  return {
    totalLessons: chapterSummaries.reduce((sum, c) => sum + c.totalLessons, 0),
    completedLessons: chapterSummaries.reduce((sum, c) => sum + c.completedLessons, 0),
    correctAnswers,
    chapters: chapterSummaries,
  }
}

export async function getProgressSummaryForUser(userId: string | null): Promise<ProgressSummary> {
  const completedLessonIds = new Set<string>()
  let correctAnswers = 0

  if (userId) {
    const progress = await getUserProgress(userId)
    for (const p of progress) {
      if (p.is_completed) completedLessonIds.add(p.lesson_id)
    }

    const supabase = await createClient()
    const { count } = await supabase
      .from('user_answers')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', userId)
      .eq('is_correct', true)
    correctAnswers = count ?? 0
  }

  return buildProgressSummary(completedLessonIds, correctAnswers)
}

export interface RecentAnswer {
  quizId: string
  question: string
  lessonTitle: string
  isCorrect: boolean
  answeredAt: string
}

interface RawRecentAnswerRow {
  quiz_id: string
  is_correct: boolean
  answered_at: string
  quizzes: { question: string; lessons: { title: string } | null } | null
}

export async function getRecentAnswers(userId: string, limit = 20): Promise<RecentAnswer[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from('user_answers')
    .select('quiz_id, is_correct, answered_at, quizzes(question, lessons(title))')
    .eq('user_id', userId)
    .order('answered_at', { ascending: false })
    .limit(limit)
  if (error) throw new Error(error.message)

  return ((data ?? []) as unknown as RawRecentAnswerRow[]).map(row => ({
    quizId: row.quiz_id,
    question: row.quizzes?.question ?? '',
    lessonTitle: row.quizzes?.lessons?.title ?? '',
    isCorrect: row.is_correct,
    answeredAt: row.answered_at,
  }))
}

export async function getMyGuestCode(userId: string): Promise<string | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('guest_codes')
    .select('code')
    .eq('user_id', userId)
    .maybeSingle()
  return data?.code ?? null
}

interface ProgressByCodeAnswer {
  quiz_id: string
  is_correct: boolean
  answered_at: string
  question: string
  lesson_title: string
}

export interface ProgressByCodeResult {
  lessons: { lesson_id: string; is_completed: boolean; completed_at: string | null }[]
  answers: ProgressByCodeAnswer[]
}

export async function getProgressByCode(code: string): Promise<ProgressByCodeResult | null> {
  const supabase = await createClient()
  const { data, error } = await supabase.rpc('get_progress_by_code', { p_code: code })
  if (error) throw new Error(error.message)
  return (data as ProgressByCodeResult | null) ?? null
}

export async function getProgressSummaryFromRaw(raw: ProgressByCodeResult): Promise<ProgressSummary> {
  const completedLessonIds = new Set(
    raw.lessons.filter(l => l.is_completed).map(l => l.lesson_id)
  )
  const correctAnswers = raw.answers.filter(a => a.is_correct).length

  return buildProgressSummary(completedLessonIds, correctAnswers)
}

export function toRecentAnswersFromCode(
  raw: ProgressByCodeResult,
  limit = 20
): RecentAnswer[] {
  return raw.answers.slice(0, limit).map(a => ({
    quizId: a.quiz_id,
    question: a.question,
    lessonTitle: a.lesson_title,
    isCorrect: a.is_correct,
    answeredAt: a.answered_at,
  }))
}
