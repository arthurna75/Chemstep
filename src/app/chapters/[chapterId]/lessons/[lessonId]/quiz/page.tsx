import { notFound } from 'next/navigation'
import { getQuizzesByLessonId, getLessonById } from '@/lib/data'
import QuizRunner from './_components/QuizRunner'

interface Props {
  params: Promise<{ chapterId: string; lessonId: string }>
}

export default async function QuizPage({ params }: Props) {
  const { chapterId, lessonId } = await params

  let quizzes: Awaited<ReturnType<typeof getQuizzesByLessonId>> = []
  let lesson = null

  try {
    quizzes = await getQuizzesByLessonId(lessonId)
    lesson = await getLessonById(lessonId)
  } catch {
    notFound()
  }

  if (quizzes.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-4xl mb-4">📭</p>
        <p className="text-gray-600 font-medium">아직 퀴즈가 없습니다</p>
        <p className="text-sm text-gray-400 mt-1">레슨 학습으로 돌아가세요</p>
      </div>
    )
  }

  return (
    <QuizRunner
      quizzes={quizzes}
      lessonTitle={lesson?.title ?? ''}
      chapterId={chapterId}
      lessonId={lessonId}
    />
  )
}
