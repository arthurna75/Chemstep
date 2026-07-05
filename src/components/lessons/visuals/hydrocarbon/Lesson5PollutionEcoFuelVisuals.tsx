import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5PollutionEcoFuelVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🌫️</span> 대기 오염 물질
        </h3>
        <ChemTable
          headers={['오염물질', '발생 원인', '주요 반응식', '저감 대책']}
          rows={[
            ['이산화황(SO₂)', '석유·석탄 속 황(S) 성분 연소', 'S+O₂→SO₂ → 2SO₂+O₂→2SO₃ → H₂SO₄(산성비)', '탈황(FGD) 공정, 저황 연료 사용'],
            ['질소산화물(NOx)', '고온 연소 시 대기 중 N₂와 O₂ 반응', 'N₂+O₂→2NO(>1200°C), 2NO+O₂→2NO₂', 'SCR(선택적 촉매 환원), EGR(배기가스 재순환)'],
            ['미세먼지(PM₂.₅, PM₁₀)', '불완전 연소, SOx·NOx의 2차 생성', '-', 'DPF(디젤 매연 포집 필터)'],
            ['이산화탄소(CO₂)', '완전 연소 시 필연적 생성', '-', '온실 효과(지구 온난화) 원인, 탄소중립 정책'],
          ]}
          highlightCol={0}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🌱</span> 친환경 연료
        </h3>
        <ChemTable
          headers={['연료', '원료', '반응', '특징']}
          rows={[
            ['바이오디젤', '식물성 기름 + 메탄올', '에스테르화 반응 → 바이오디젤 + 글리세롤', '탄소 순환으로 CO₂ 순배출 감소'],
            ['바이오에탄올', '당류(옥수수, 사탕수수) 발효', '발효 → 에탄올', '가솔린과 혼합 사용(E10, E85)'],
            ['수소 연료', '-', '2H₂+O₂→2H₂O', 'CO₂ 무배출, 연료전지로 전기 변환 가능'],
          ]}
          highlightCol={0}
        />
      </div>
    </div>
  )
}
