import {
  getChapters,
  getCurrentUser,
  getProgressSummaryForUser,
  getUserProgress,
  getLessonsByChapterId,
} from '@/lib/data'
import ChapterCard from '@/components/chapters/ChapterCard'
import type { Chapter } from '@/types'
import type { ProgressSummary } from '@/lib/data'

export default async function ChaptersPage() {
  let basicChapters: Chapter[] = []
  let advancedChapters: Chapter[] = []
  let summary: ProgressSummary | null = null
  let advancedProgress = new Map<string, { total: number; completed: number }>()
  try {
    basicChapters = await getChapters('basic')
    advancedChapters = await getChapters('advanced')
    const user = await getCurrentUser()
    summary = await getProgressSummaryForUser(user?.id ?? null)
    if (advancedChapters.length > 0) {
      const progress = user ? await getUserProgress(user.id) : []
      const completedIds = new Set(progress.filter(p => p.is_completed).map(p => p.lesson_id))
      const entries = await Promise.all(
        advancedChapters.map(async chapter => {
          const lessons = await getLessonsByChapterId(chapter.id)
          const completed = lessons.filter(l => completedIds.has(l.id)).length
          return [chapter.id, { total: lessons.length, completed }] as const
        })
      )
      advancedProgress = new Map(entries)
    }
  } catch {
    // Supabase 미설정 시
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📚 학습 단원</h1>
        <p className="text-gray-500 mt-1">단원을 선택해서 학습을 시작하세요</p>
      </div>

      {basicChapters.length > 0 ? (
        <div className="grid gap-4">
          {basicChapters.map(chapter => {
            const chapterSummary = summary?.chapters.find(c => c.chapterId === chapter.id)
            return (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                lessonCount={chapterSummary?.totalLessons ?? 0}
                completedCount={chapterSummary?.completedLessons ?? 0}
              />
            )
          })}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-gray-400">아직 단원이 없습니다</p>
          <p className="text-sm text-gray-400 mt-1">Supabase 연결 후 시드 데이터를 실행하세요</p>
        </div>
      )}

      {advancedChapters.length > 0 && (
        <div className="space-y-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900">🔬 심화과정</h2>
            <p className="text-gray-500 text-sm mt-0.5">
              양자역학과 오비탈을 깊이 있게 다루는 추가 학습 경로입니다
            </p>
          </div>
          <div className="grid gap-4">
            {advancedChapters.map(chapter => {
              const p = advancedProgress.get(chapter.id)
              return (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  lessonCount={p?.total ?? 0}
                  completedCount={p?.completed ?? 0}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
