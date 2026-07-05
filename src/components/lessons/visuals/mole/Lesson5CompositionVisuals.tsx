import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5CompositionVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> H₂O의 질량 백분율
        </h3>
        <ChemTable
          headers={['원소', '계산식', '질량 백분율']}
          rows={[
            ['H', '(1×2) / 18 × 100', '11.1%'],
            ['O', '16 / 18 × 100', '88.9%'],
          ]}
          caption="H=1, O=16, H₂O의 분자량=18 기준"
          highlightCol={2}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 실험식 vs 분자식
        </h3>
        <ChemTable
          headers={['개념', '정의', '예 (포도당)']}
          rows={[
            ['실험식(경험식)', '원자 수 비를 가장 간단한 정수비로 나타낸 식', 'CH₂O'],
            ['분자식', '분자를 이루는 원자들의 실제 개수를 나타낸 식 = (실험식)ₙ', 'C₆H₁₂O₆ (n=6)'],
          ]}
          caption="포도당: 실험식량 30, 분자량 180 → n = 180/30 = 6"
        />
      </div>
    </div>
  )
}
