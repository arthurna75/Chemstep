'use client'

import { useState, useCallback } from 'react'

interface AnswerRecord {
  quizId: string
  optionId: string
  isCorrect: boolean
}

export function useQuiz(totalQuestions: number) {
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [finished, setFinished] = useState(false)

  const recordAnswer = useCallback((isCorrect: boolean, quizId: string, optionId: string) => {
    setAnswers(prev => {
      const next = [...prev, { quizId, optionId, isCorrect }]
      return next
    })
  }, [])

  const nextQuestion = useCallback(() => {
    if (currentIndex + 1 >= totalQuestions) {
      setFinished(true)
    } else {
      setCurrentIndex(i => i + 1)
    }
  }, [currentIndex, totalQuestions])

  const score = answers.filter(a => a.isCorrect).length

  return { answers, currentIndex, finished, score, recordAnswer, nextQuestion }
}
