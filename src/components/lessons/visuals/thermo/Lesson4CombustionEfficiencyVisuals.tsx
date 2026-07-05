import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4CombustionEfficiencyVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 연료별 연소 엔탈피
        </h3>
        <ChemTable
          headers={['연료', 'ΔH°combustion (kJ/mol)']}
          rows={[
            ['CH₄', '−890'],
            ['C₃H₈', '−2220'],
            ['C₈H₁₈ (옥탄)', '−5471'],
            ['H₂', '−286'],
          ]}
          highlightCol={1}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 엔진/장치별 열효율
        </h3>
        <ChemTable
          headers={['엔진/장치', '열효율 범위']}
          rows={[
            ['가솔린 내연기관', '약 25~40%'],
            ['디젤 엔진', '약 35~45%'],
            ['가스터빈 복합 발전', '약 55~60%'],
            ['수소 연료전지', '약 40~60% (이론 최대 83%)'],
          ]}
          highlightCol={1}
        />
      </div>
    </div>
  )
}
