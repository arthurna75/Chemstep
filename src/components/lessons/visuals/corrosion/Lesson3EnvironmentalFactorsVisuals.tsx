import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3EnvironmentalFactorsVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 부식을 가속시키는 환경 요인
        </h3>
        <ChemTable
          headers={['요인', '부식에 미치는 영향']}
          rows={[
            ['습도 증가', '금속 표면에 물막 형성 → 부식 가속'],
            ['염화 이온(Cl⁻) 증가', '전해질 전도도 상승, 보호막 파괴 → 부식 가속'],
            ['pH 감소(산성화)', '금속 이온화가 쉬워짐 → 부식 가속'],
            ['온도 상승', '반응 속도 증가 → 부식 가속'],
            ['산소 농도 차이(통기차)', '산소가 적은 부위(틈새 등)에 부식 집중'],
          ]}
          caption="환경 요인이 겹칠수록 부식 속도는 더욱 빨라진다."
        />
      </div>
    </div>
  )
}
