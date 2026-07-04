'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { QuizWithOptions } from '@/types'
import QuizCard from '@/components/quiz/QuizCard'

interface Props {
  quizzes: QuizWithOptions[]
  lessonTitle: string
  chapterId: string
  lessonId: string
}

interface AnswerRecord {
  quizId: string
  optionId: string
  isCorrect: boolean
}

export default function QuizRunner({ quizzes, lessonTitle, chapterId, lessonId }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)

  const currentQuiz = quizzes[currentIndex]
  const score = answers.filter(a => a.isCorrect).length

  function handleAnswer(isCorrect: boolean, quizId: string, optionId: string) {
    setAnswers(prev => [...prev, { quizId, optionId, isCorrect }])
    setAnswered(true)
  }

  function handleNext() {
    if (currentIndex + 1 >= quizzes.length) {
      setFinished(true)
    } else {
      setCurrentIndex(i => i + 1)
      setAnswered(false)
    }
  }

  if (finished) {
    const percent = Math.round((score / quizzes.length) * 100)
    const passed = percent >= 60

    return (
      <div className="space-y-6">
        <div className={`rounded-2xl p-8 text-center ${passed ? 'bg-green-50 border border-green-200' : 'bg-orange-50 border border-orange-200'}`}>
          <div className="text-5xl mb-4">{passed ? '🎉' : '💪'}</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">퀴즈 완료!</h2>
          <p className="text-gray-600 mb-4">{lessonTitle}</p>
          <div className="text-5xl font-bold mb-2" style={{ color: passed ? '#16a34a' : '#ea580c' }}>
            {score} / {quizzes.length}
          </div>
          <p className={`text-lg font-semibold ${passed ? 'text-green-600' : 'text-orange-600'}`}>
            정답률 {percent}% — {passed ? '통과!' : '다시 도전해 보세요'}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href={`/chapters/${chapterId}/lessons/${lessonId}`}
            className="flex-1 text-center bg-white border border-gray-200 text-gray-700 font-medium px-6 py-3 rounded-xl hover:border-blue-400 transition-colors"
          >
            ← 레슨으로 돌아가기
          </Link>
          <Link
            href={`/chapters/${chapterId}`}
            className="flex-1 text-center bg-blue-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
          >
            다음 레슨 →
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 진행 표시줄 */}
      <div>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>{lessonTitle} 퀴즈</span>
          <span>{currentIndex + 1} / {quizzes.length}</span>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex) / quizzes.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 퀴즈 카드 */}
      <QuizCard
        key={currentQuiz.id}
        quiz={currentQuiz}
        questionNumber={currentIndex + 1}
        total={quizzes.length}
        onAnswer={handleAnswer}
      />

      {/* 다음 버튼 */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          {currentIndex + 1 < quizzes.length ? '다음 문제 →' : '결과 보기 🎯'}
        </button>
      )}
    </div>
  )
}
