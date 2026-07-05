import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2BondEnergyVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주요 결합 에너지
        </h3>
        <ChemTable
          headers={['결합', '결합 에너지 (kJ/mol)']}
          rows={[
            ['H–H', '436'],
            ['O=O', '498'],
            ['O–H', '463'],
            ['C–H', '414'],
            ['C=O', '799'],
          ]}
          highlightCol={1}
          caption="결합 차수가 높을수록(단일<이중<삼중) 결합 에너지가 크다"
        />
      </div>
    </div>
  )
}
