import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1OxidationNumberVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 산화수 결정 규칙
        </h3>
        <ChemTable
          headers={['규칙', '산화수', '예시']}
          rows={[
            ['① 홑원소 물질', '0', 'Fe, O₂, H₂ 각 원소의 산화수는 0'],
            ['② 단원자 이온', '이온의 전하', 'Na⁺ → +1, Cl⁻ → -1'],
            ['③ 화합물에서 O', '-2 (예외: 과산화물)', 'H₂O₂에서 O = -1'],
            ['④ 화합물에서 H', '+1 (예외: 금속 수소화물)', 'NaH에서 H = -1'],
            ['⑤ 다원자 이온', '산화수 합 = 이온 전하', 'SO₄²⁻: S + 4(-2) = -2 → S = +6'],
            ['⑥ 중성 화합물', '산화수 합 = 0', '전기적으로 중성인 화합물 전체'],
          ]}
        />
      </div>
    </div>
  )
}
