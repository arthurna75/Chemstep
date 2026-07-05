'use client'

import { useEffect, useRef } from 'react'
import { finishLessonQuiz } from '@/lib/actions/progress'

export default function EmptyQuizNotice({ lessonId }: { lessonId: string }) {
  const recorded = useRef(false)
  useEffect(() => {
    if (!recorded.current) {
      recorded.current = true
      finishLessonQuiz(lessonId, true).catch(() => {})
    }
  }, [lessonId])

  return (
    <div className="text-center py-16">
      <p className="text-4xl mb-4">📭</p>
      <p className="text-gray-600 font-medium">아직 퀴즈가 없습니다</p>
      <p className="text-sm text-gray-400 mt-1">레슨 학습으로 돌아가세요</p>
    </div>
  )
}
