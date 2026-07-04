import { getChapters } from '@/lib/data'
import ChapterCard from '@/components/chapters/ChapterCard'
import type { Chapter } from '@/types'

export default async function ChaptersPage() {
  let chapters: Chapter[] = []
  try {
    chapters = await getChapters()
  } catch {
    // Supabase 미설정 시
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📚 학습 단원</h1>
        <p className="text-gray-500 mt-1">단원을 선택해서 학습을 시작하세요</p>
      </div>

      {chapters.length > 0 ? (
        <div className="grid gap-4">
          {chapters.map(chapter => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              lessonCount={0}
              completedCount={0}
            />
          ))}
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-gray-400">아직 단원이 없습니다</p>
          <p className="text-sm text-gray-400 mt-1">Supabase 연결 후 시드 데이터를 실행하세요</p>
        </div>
      )}
    </div>
  )
}
