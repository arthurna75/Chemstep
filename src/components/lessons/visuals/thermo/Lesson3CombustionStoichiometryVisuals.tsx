import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3CombustionStoichiometryVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 연료별 완전 연소 반응식과 ΔH
        </h3>
        <ChemTable
          headers={['연료', '완전 연소식', 'ΔH° (kJ/mol)']}
          rows={[
            ['메탄(천연가스)', 'CH₄ + 2O₂ → CO₂ + 2H₂O', '−890'],
            ['에탄', 'C₂H₆ + 7/2 O₂ → 2CO₂ + 3H₂O', '−1560'],
            ['프로판(LPG)', 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', '−2220'],
            ['옥탄(가솔린)', 'C₈H₁₈ + 12.5O₂ → 8CO₂ + 9H₂O', '−5471'],
          ]}
          highlightCol={2}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 연료별 발열량 비교
        </h3>
        <ChemTable
          headers={['연료', '발열량 (MJ/kg)']}
          rows={[
            ['수소(H₂)', '142'],
            ['천연가스(CH₄)', '55'],
            ['LPG(C₃H₈)', '50'],
            ['가솔린', '44'],
            ['석탄', '24'],
          ]}
          highlightCol={1}
          caption="수소 > 천연가스 > LPG > 가솔린 > 석탄 순으로 단위 질량당 발열량이 높다"
        />
      </div>
    </div>
  )
}
