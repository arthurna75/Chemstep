import type { Example } from '@/types'
import { renderMarkup } from '@/lib/markup'

interface Props {
  examples: Example[]
}

export default function ExampleSection({ examples }: Props) {
  if (examples.length === 0) return null

  return (
    <section className="bg-white rounded-xl border border-gray-200 p-6 print:break-inside-avoid">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <span>✏️</span> 예제
      </h2>
      <div className="space-y-4">
        {examples.map((ex, i) => (
          <div key={i} className="border-l-4 border-blue-400 pl-4">
            <p className="text-sm font-medium text-gray-700 mb-2">문제 {i + 1}: {renderMarkup(ex.problem)}</p>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs font-medium text-green-600 mb-1">풀이</p>
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{renderMarkup(ex.solution)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
