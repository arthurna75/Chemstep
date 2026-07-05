import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5ElectrolysisVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 전기분해의 산업 응용
        </h3>
        <ChemTable
          headers={['응용 분야', '음극 반응', '양극 반응 / 설명']}
          rows={[
            ['알루미늄 제련 (Hall-Héroult)', 'Al³⁺ + 3e⁻ → Al', '2O²⁻ → O₂ + 4e⁻ (Al₂O₃ 용융 전기분해)'],
            ['전기도금 (니켈 도금)', 'Ni²⁺ + 2e⁻ → Ni (도금할 물체, 표면 석출)', '도금 금속(Ni)이 양극에서 녹아 보충됨'],
            ['구리 정련', '순수 Cu 석출 (음극)', '조동(불순물 포함 Cu)이 양극에서 녹음 → 99.99% 순동 제조'],
            ['그린 수소 생산', '2H₂O + 2e⁻ → H₂ + 2OH⁻', '재생에너지 전력으로 물을 전기분해하여 H₂ 생산'],
          ]}
        />
      </div>
    </div>
  )
}
