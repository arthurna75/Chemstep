import { notFound } from 'next/navigation'
import { getQuizzesByLessonId, getLessonById } from '@/lib/data'
import QuizRunner from './_components/QuizRunner'
import EmptyQuizNotice from './_components/EmptyQuizNotice'

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
    return <EmptyQuizNotice lessonId={lessonId} />
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
