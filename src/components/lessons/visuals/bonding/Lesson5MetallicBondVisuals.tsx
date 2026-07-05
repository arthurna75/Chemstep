import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5MetallicBondVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 결정의 종류 비교
        </h3>
        <ChemTable
          headers={['결정 종류', '결합 종류', '녹는점', '전도성', '예']}
          rows={[
            ['이온 결정', '이온 결합', '높음', '고체: 없음 / 액체·수용액: 있음', 'NaCl, CaO'],
            ['공유 결정 (원자 결정)', '공유 결합', '매우 높음', '없음 (흑연 예외)', '다이아몬드, SiO₂'],
            ['분자 결정', '분자 간 인력', '낮음', '없음', 'H₂O, CO₂, I₂'],
            ['금속 결정', '금속 결합', '다양함', '우수', 'Fe, Cu, Al'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> Na-Mg-Al 녹는점 비교
        </h3>
        <ChemTable
          headers={['원소', '원자가 전자 수', '녹는점']}
          rows={[
            ['Na (1족)', '1개', '98°C'],
            ['Mg (2족)', '2개', '650°C'],
            ['Al (13족)', '3개', '660°C'],
          ]}
          caption="원자가 전자 수가 많을수록 자유 전자 밀도가 높아져 금속 결합이 강해집니다"
        />
      </div>
    </div>
  )
}
