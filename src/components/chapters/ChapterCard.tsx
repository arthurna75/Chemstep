import Link from 'next/link'
import type { Chapter } from '@/types'

interface Props {
  chapter: Chapter
  lessonCount: number
  completedCount: number
}

export default function ChapterCard({ chapter, lessonCount, completedCount }: Props) {
  const progress = lessonCount > 0 ? Math.round((completedCount / lessonCount) * 100) : 0

  return (
    <Link
      href={`/chapters/${chapter.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-4">
        <span className="text-3xl">{chapter.icon ?? '📚'}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-900">{chapter.title}</h3>
              {chapter.track === 'advanced' && (
                <span className="text-[11px] font-medium text-purple-700 bg-purple-100 rounded-full px-2 py-0.5">
                  심화
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">{completedCount}/{lessonCount}</span>
          </div>
          {chapter.description && (
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{chapter.description}</p>
          )}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">{progress}% 완료</p>
        </div>
      </div>
    </Link>
  )
}
