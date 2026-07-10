import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson5PeriodicBondBridgeVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 오비탈 구역과 주기율표 위치
        </h3>
        <ChemTable
          headers={['구역', '족', '마지막으로 채워지는 오비탈', '대표 원소']}
          rows={[
            ['s 구역', '1, 2족', 's', 'Na, Mg, Ca'],
            ['p 구역', '13~18족', 'p', 'C, N, O, Cl'],
            ['d 구역', '3~12족 (전이 금속)', 'd', 'Fe, Cu, Zn'],
            ['f 구역', '란타넘·악티늄족', 'f', 'Ce, U'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 17족(할로겐) 위치 확인
        </h3>
        <PeriodicTableMini
          highlightGroups={[17]}
          mode="default"
          caption="17족 원소는 모두 최외각 전자배치가 ns²np⁵ 형태입니다"
        />
      </div>
    </div>
  )
}
