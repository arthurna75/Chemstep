import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4FuelCellVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 연료전지의 종류와 비교
        </h3>
        <ChemTable
          headers={['종류', '전해질', '운전 온도', '주요 용도']}
          rows={[
            ['PEMFC', '고분자막 (양이온 교환막)', '~80°C (저온)', '자동차·드론'],
            ['SOFC', '고체 산화물', '700~1000°C (고온)', '발전소·산업용'],
            ['MCFC', '용융 탄산염', '650°C', '대형 발전'],
            ['AFC', 'KOH (알칼리)', '상온~고온', '우주선용'],
          ]}
        />
      </div>
    </div>
  )
}
