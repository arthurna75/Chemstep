import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3SecondaryBatteryVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 납축전지 vs 리튬이온 전지
        </h3>
        <ChemTable
          headers={['전지 종류', '음극', '양극', '전해질']}
          rows={[
            ['납축전지', 'Pb (Pb + SO₄²⁻ → PbSO₄ + 2e⁻)', 'PbO₂ (PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O)', '묽은 황산 (H₂SO₄)'],
            ['리튬이온 전지', '흑연, C (LiC₆ → Li⁺ + e⁻ + C₆)', 'LiCoO₂ (Li₁₋ₓCoO₂ + xLi⁺ + xe⁻ → LiCoO₂)', '유기 용매 속 Li⁺ (리튬염)'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 이차전지의 주요 성능 지표
        </h3>
        <ChemTable
          headers={['지표', '정의']}
          rows={[
            ['용량 (mAh)', '방전할 수 있는 총 전하량'],
            ['에너지 밀도 (Wh/kg)', '단위 질량당 저장 에너지'],
            ['사이클 수명', '충전-방전 반복 가능 횟수'],
            ['C-rate', '충방전 속도 (1C = 1시간에 완전 방전)'],
          ]}
        />
      </div>
    </div>
  )
}
