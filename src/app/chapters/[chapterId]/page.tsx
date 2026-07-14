import Link from 'next/link'
import { getChapterById, getLessonsByChapterId } from '@/lib/data'
import { notFound } from 'next/navigation'

interface Props {
  params: Promise<{ chapterId: string }>
}

export default async function ChapterDetailPage({ params }: Props) {
  const { chapterId } = await params

  let chapter = null
  let lessons: Awaited<ReturnType<typeof getLessonsByChapterId>> = []

  try {
    chapter = await getChapterById(chapterId)
    if (!chapter) notFound()
    lessons = await getLessonsByChapterId(chapterId)
  } catch {
    notFound()
  }

  return (
    <div className="space-y-6">
      {/* 헤더 */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/chapters" className="hover:text-blue-600">단원 목록</Link>
        <span>›</span>
        <span className="text-gray-900">{chapter!.title}</span>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-4xl mb-3">{chapter!.icon}</div>
        <h1 className="text-2xl font-bold mb-2">{chapter!.title}</h1>
        <p className="text-blue-100">{chapter!.description}</p>
        <p className="text-sm text-blue-200 mt-2">{lessons.length}개 레슨</p>
      </div>

      {/* 레슨 목록 */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold text-gray-900">레슨 목록</h2>
          {lessons.length > 0 && (
            <Link
              href={`/chapters/${chapterId}/print`}
              target="_blank"
              className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              <span>📄</span> PDF로 출력
            </Link>
          )}
        </div>
        {lessons.length > 0 ? (
          <div className="grid gap-3">
            {lessons.map((lesson, i) => (
              <Link
                key={lesson.id}
                href={`/chapters/${chapterId}/lessons/${lesson.id}`}
                className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{lesson.title}</p>
                </div>
                <span className="text-gray-400 text-sm">→</span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
            <p className="text-gray-400">아직 레슨이 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
