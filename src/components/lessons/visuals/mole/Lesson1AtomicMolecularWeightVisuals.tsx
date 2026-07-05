import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1AtomicMolecularWeightVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주요 원소의 원자량 (¹²C = 12.000 기준)
        </h3>
        <ChemTable
          headers={['원소', 'H', 'C', 'N', 'O', 'Na', 'Cl', 'Ca']}
          rows={[
            ['원자량', '1', '12', '14', '16', '23', '35.5', '40'],
          ]}
          caption="원자량은 단위가 없는 상대적인 값 (반올림 값)"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧮</span> 분자량 계산 예
        </h3>
        <ChemTable
          headers={['분자식', '계산식', '분자량']}
          rows={[
            ['H₂O', '(1×2) + 16', '18'],
            ['CO₂', '12 + (16×2)', '44'],
            ['NH₃', '14 + (1×3)', '17'],
            ['CH₄', '12 + (1×4)', '16'],
            ['H₂SO₄', '(1×2) + 32 + (16×4)', '98'],
          ]}
          caption="분자량 = 분자를 구성하는 모든 원자의 원자량의 합"
          highlightCol={2}
        />
      </div>
    </div>
  )
}
