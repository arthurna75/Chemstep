import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2GalvanicSeriesVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 금속의 갈바니 계열 (표준 환원 전위)
        </h3>
        <ChemTable
          headers={['금속', 'E° (V)', '반응성']}
          rows={[
            ['마그네슘(Mg)', '-2.37', '매우 큼 (가장 쉽게 산화)'],
            ['아연(Zn)', '-0.76', '큼'],
            ['철(Fe)', '-0.44', '중간'],
            ['주석(Sn)', '-0.14', '작음'],
            ['구리(Cu)', '+0.34', '매우 작음 (환원되기 쉬움)'],
          ]}
          caption="E°가 낮을수록 반응성이 커서 두 금속이 접촉하면 먼저 산화(부식)된다."
          highlightCol={1}
        />
      </div>
    </div>
  )
}
