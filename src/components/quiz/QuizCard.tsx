'use client'

import { useState } from 'react'
import type { QuizWithOptions } from '@/types'
import { renderMarkup } from '@/lib/markup'
import OptionButton from './OptionButton'
import ExplanationBox from './ExplanationBox'

interface Props {
  quiz: QuizWithOptions
  questionNumber: number
  total: number
  onAnswer: (isCorrect: boolean, quizId: string, optionId: string) => void
}

export default function QuizCard({ quiz, questionNumber, total, onAnswer }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)

  const correctOption = quiz.quiz_options.find(o => o.is_correct)
  const isCorrect = selectedId === correctOption?.id

  function handleSelect(optionId: string) {
    if (answered) return
    setSelectedId(optionId)
    setAnswered(true)
    onAnswer(optionId === correctOption?.id, quiz.id, optionId)
  }

  function getStatus(optionId: string): 'idle' | 'correct' | 'wrong' | 'disabled' {
    if (!answered) return 'idle'
    if (optionId === correctOption?.id) return 'correct'
    if (optionId === selectedId) return 'wrong'
    return 'disabled'
  }

  const sortedOptions = [...quiz.quiz_options].sort((a, b) => a.order_index - b.order_index)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          문제 {questionNumber} / {total}
        </span>
      </div>

      <p className="text-gray-900 font-medium mb-5 leading-relaxed">{renderMarkup(quiz.question)}</p>

      <div className="space-y-2">
        {sortedOptions.map((option, i) => (
          <OptionButton
            key={option.id}
            content={option.content}
            index={i}
            status={getStatus(option.id)}
            onClick={() => handleSelect(option.id)}
          />
        ))}
      </div>

      {answered && (
        <ExplanationBox
          explanation={quiz.explanation ?? ''}
          isCorrect={isCorrect}
        />
      )}
    </div>
  )
}
