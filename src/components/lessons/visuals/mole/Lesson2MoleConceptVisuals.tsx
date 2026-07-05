import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2MoleConceptVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 몰수와 입자 수
        </h3>
        <ChemTable
          headers={['몰수', '입자 수']}
          rows={[
            ['1몰', '6.022×10²³개'],
            ['2몰', '1.204×10²⁴개'],
            ['0.5몰', '3.011×10²³개'],
            ['n몰', 'n × 6.022×10²³개'],
          ]}
          caption="입자 수 N = 몰수(n) × 아보가드로 수(NA)"
          highlightCol={1}
        />
      </div>
    </div>
  )
}
