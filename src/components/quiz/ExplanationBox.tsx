import { renderMarkup } from '@/lib/markup'

interface Props {
  explanation: string
  isCorrect: boolean
}

export default function ExplanationBox({ explanation, isCorrect }: Props) {
  return (
    <div className={`rounded-xl border p-4 mt-4 ${
      isCorrect
        ? 'bg-green-50 border-green-300'
        : 'bg-red-50 border-red-300'
    }`}>
      <p className={`font-semibold mb-2 text-sm ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
        {isCorrect ? '🎉 정답입니다!' : '❌ 오답입니다'}
      </p>
      {explanation && (
        <p className="text-sm text-gray-700 leading-relaxed">{renderMarkup(explanation)}</p>
      )}
    </div>
  )
}
