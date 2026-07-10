import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4ElectronConfigVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 껍질별 최대 전자 수
        </h3>
        <ChemTable
          dense
          headers={['껍질', 'n (주 양자수)', '최대 전자 수 (2n²)']}
          rows={[
            ['K', '1', '2'],
            ['L', '2', '8'],
            ['M', '3', '18'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주요 원소의 전자 배치 (H ~ Ar)
        </h3>
        <ChemTable
          dense
          headers={['원소 (Z)', 'K', 'L', 'M', '원자가 전자']}
          rows={[
            ['H (Z=1)', '1', '-', '-', '1'],
            ['He (Z=2)', '2', '-', '-', '2 (안정)'],
            ['Li (Z=3)', '2', '1', '-', '1'],
            ['Be (Z=4)', '2', '2', '-', '2'],
            ['B (Z=5)', '2', '3', '-', '3'],
            ['C (Z=6)', '2', '4', '-', '4'],
            ['N (Z=7)', '2', '5', '-', '5'],
            ['O (Z=8)', '2', '6', '-', '6'],
            ['F (Z=9)', '2', '7', '-', '7'],
            ['Ne (Z=10)', '2', '8', '-', '8 (안정)'],
            ['Na (Z=11)', '2', '8', '1', '1'],
            ['Mg (Z=12)', '2', '8', '2', '2'],
            ['Al (Z=13)', '2', '8', '3', '3'],
            ['Si (Z=14)', '2', '8', '4', '4'],
            ['P (Z=15)', '2', '8', '5', '5'],
            ['S (Z=16)', '2', '8', '6', '6'],
            ['Cl (Z=17)', '2', '8', '7', '7'],
            ['Ar (Z=18)', '2', '8', '8', '8 (안정)'],
          ]}
          highlightCol={4}
          caption="원자가 전자(강조 표시)는 최외각 껍질의 전자 수이며, 원소의 화학적 성질을 결정합니다"
        />
      </div>
    </div>
  )
}
