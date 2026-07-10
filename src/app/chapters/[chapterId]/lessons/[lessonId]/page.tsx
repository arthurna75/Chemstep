import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getLessonById, getChapterById } from '@/lib/data'
import ConceptSection from '@/components/lessons/ConceptSection'
import FormulaSection from '@/components/lessons/FormulaSection'
import ExampleSection from '@/components/lessons/ExampleSection'
import AnalogySection from '@/components/lessons/AnalogySection'
import { LESSON_ILLUSTRATIONS } from '@/components/lessons/illustrations'
import { LESSON_VISUALS } from '@/components/lessons/visuals'
import type { KeyFormula, Example } from '@/types'

interface Props {
  params: Promise<{ chapterId: string; lessonId: string }>
}

export default async function LessonPage({ params }: Props) {
  const { chapterId, lessonId } = await params

  let lesson = null
  let chapter = null

  try {
    lesson = await getLessonById(lessonId)
    chapter = await getChapterById(chapterId)
    if (!lesson) notFound()
  } catch {
    notFound()
  }

  const formulas = (lesson!.key_formulas ?? []) as KeyFormula[]
  const examples = (lesson!.examples ?? []) as Example[]
  const Illustration = LESSON_ILLUSTRATIONS[lesson!.title]
  const LessonVisuals = LESSON_VISUALS[lesson!.title]

  return (
    <div className="space-y-6">
      {/* 브레드크럼 */}
      <nav className="flex items-center gap-2 text-sm text-gray-500">
        <Link href="/chapters" className="hover:text-blue-600">단원 목록</Link>
        <span>›</span>
        <Link href={`/chapters/${chapterId}`} className="hover:text-blue-600">
          {chapter?.title ?? '단원'}
        </Link>
        <span>›</span>
        <span className="text-gray-900 truncate">{lesson!.title}</span>
      </nav>

      {/* 레슨 제목 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{chapter?.icon ?? '📚'}</span>
          <div>
            <p className="text-sm text-gray-500">{chapter?.title}</p>
            <h1 className="text-2xl font-bold text-gray-900">{lesson!.title}</h1>
          </div>
        </div>
      </div>

      {/* 일러스트 */}
      {Illustration && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 flex justify-center">
          <Illustration />
        </div>
      )}

      {/* 개념 설명 */}
      <ConceptSection content={lesson!.content} />

      {/* 레슨 비주얼 보충 (표 + 미니 주기율표) */}
      {LessonVisuals && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
          <LessonVisuals />
        </div>
      )}

      {/* 핵심 공식 */}
      {formulas.length > 0 && <FormulaSection formulas={formulas} />}

      {/* 예제 */}
      {examples.length > 0 && <ExampleSection examples={examples} />}

      {/* 쉬운 비유 */}
      {lesson!.analogy && <AnalogySection analogy={lesson!.analogy} />}

      {/* 퀴즈 시작 버튼 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
        <p className="text-gray-600 mb-4">개념을 충분히 익혔나요? 퀴즈로 확인해 보세요!</p>
        <Link
          href={`/chapters/${chapterId}/lessons/${lessonId}/quiz`}
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors"
        >
          <span>📝</span> 퀴즈 시작하기
        </Link>
      </div>
    </div>
  )
}
