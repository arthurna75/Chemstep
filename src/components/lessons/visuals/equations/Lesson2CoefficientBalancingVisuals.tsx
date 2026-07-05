import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2CoefficientBalancingVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주요 반응식과 계수 예
        </h3>
        <ChemTable
          headers={['반응 이름', '반응식', '반응 유형 / 비고']}
          rows={[
            ['메탄 연소', 'CH₄ + 2O₂ → CO₂ + 2H₂O', '연소 반응'],
            ['암모니아 합성', 'N₂ + 3H₂ → 2NH₃', '합성 반응'],
            ['마그네슘 연소', '2Mg + O₂ → 2MgO', '합성(산화) 반응'],
            ['철의 산화', '4Fe + 3O₂ → 2Fe₂O₃', '합성(산화) 반응'],
          ]}
          highlightCol={1}
          caption="계수만 조정하고 화학식의 아래 첨자는 바꾸지 않습니다"
        />
      </div>
    </div>
  )
}
