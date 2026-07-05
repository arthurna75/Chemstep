import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1BondFormationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 결합 종류 개관
        </h3>
        <ChemTable
          headers={['결합 종류', '원자 조합', '형성 방식', '예']}
          rows={[
            ['이온 결합', '금속 + 비금속', '금속 → 비금속으로 전자 이동, 양이온·음이온 사이 정전기적 인력', 'NaCl'],
            ['공유 결합', '비금속 + 비금속', '두 원자가 전자쌍을 공유하여 분자 형성', 'H₂O, CO₂'],
            ['금속 결합', '금속 + 금속', '금속 양이온과 자유 전자 사이의 인력', 'Fe, Cu'],
          ]}
          caption="원자들이 옥텟 규칙을 만족하는 방법에 따라 결합 종류가 달라집니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 옥텟 규칙의 예외
        </h3>
        <ChemTable
          headers={['유형', '원자가 전자 수', '예']}
          rows={[
            ['듀엣 규칙', '2개 (He처럼)', 'H, Li, Be'],
            ['불완전 옥텟', '6개', 'B, Al'],
            ['확장 옥텟', '8개 초과 가능', 'P, S, Cl, Xe'],
          ]}
          caption="3주기 이상 원소는 확장 옥텟이 가능합니다"
        />
      </div>
    </div>
  )
}
