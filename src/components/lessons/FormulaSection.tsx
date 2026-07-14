import type { KeyFormula } from '@/types'
import { renderMarkup } from '@/lib/markup'

interface Props {
  formulas: KeyFormula[]
}

export default function FormulaSection({ formulas }: Props) {
  if (formulas.length === 0) return null

  return (
    <section className="bg-blue-50 rounded-xl border border-blue-200 p-6 print:break-inside-avoid">
      <h2 className="text-lg font-semibold text-blue-900 mb-4 flex items-center gap-2">
        <span>📐</span> 핵심 공식
      </h2>
      <div className="space-y-4">
        {formulas.map((f, i) => (
          <div key={i} className="bg-white rounded-lg p-4 border border-blue-100">
            <div className="text-xs font-medium text-blue-500 mb-1">{f.label}</div>
            <div className="text-xl font-mono font-bold text-gray-900 mb-2">{renderMarkup(f.formula)}</div>
            <div className="text-sm text-gray-600">{renderMarkup(f.description)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
