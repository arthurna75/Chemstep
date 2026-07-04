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
