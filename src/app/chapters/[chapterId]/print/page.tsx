import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getChapterById, getLessonsByChapterId } from '@/lib/data'
import ConceptSection from '@/components/lessons/ConceptSection'
import FormulaSection from '@/components/lessons/FormulaSection'
import ExampleSection from '@/components/lessons/ExampleSection'
import AnalogySection from '@/components/lessons/AnalogySection'
import { LESSON_ILLUSTRATIONS } from '@/components/lessons/illustrations'
import { LESSON_VISUALS } from '@/components/lessons/visuals'
import PrintButton from './PrintButton'
import type { KeyFormula, Example } from '@/types'

interface Props {
  params: Promise<{ chapterId: string }>
}

export default async function ChapterPrintPage({ params }: Props) {
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
      <div className="flex items-center justify-between gap-4 print:hidden">
        <Link href={`/chapters/${chapterId}`} className="text-sm text-gray-500 hover:text-blue-600">
          ← 단원으로 돌아가기
        </Link>
        <PrintButton />
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="text-4xl mb-3">{chapter!.icon}</div>
        <h1 className="text-2xl font-bold mb-2">{chapter!.title}</h1>
        <p className="text-blue-100">{chapter!.description}</p>
        <p className="text-sm text-blue-200 mt-2">{lessons.length}개 레슨</p>
      </div>

      {lessons.map((lesson, i) => {
        const formulas = (lesson.key_formulas ?? []) as KeyFormula[]
        const examples = (lesson.examples ?? []) as Example[]
        const Illustration = LESSON_ILLUSTRATIONS[lesson.title]
        const LessonVisuals = LESSON_VISUALS[lesson.title]

        return (
          <div key={lesson.id} className={`space-y-6 ${i > 0 ? 'print:break-before-page' : ''}`}>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{chapter!.icon}</span>
                <div>
                  <p className="text-sm text-gray-500">{chapter!.title}</p>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {i + 1}. {lesson.title}
                  </h2>
                </div>
              </div>
            </div>

            {Illustration && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 flex justify-center">
                <Illustration />
              </div>
            )}

            <ConceptSection content={lesson.content} />

            {LessonVisuals && (
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
                <LessonVisuals />
              </div>
            )}

            {formulas.length > 0 && <FormulaSection formulas={formulas} />}

            {examples.length > 0 && <ExampleSection examples={examples} />}

            {lesson.analogy && <AnalogySection analogy={lesson.analogy} />}
          </div>
        )
      })}
    </div>
  )
}
