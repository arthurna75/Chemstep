import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1StateSymbolsVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 상태 기호
        </h3>
        <ChemTable
          headers={['기호', '의미']}
          rows={[
            ['(s)', '고체(solid)'],
            ['(l)', '액체(liquid)'],
            ['(g)', '기체(gas)'],
            ['(aq)', '수용액(aqueous)'],
          ]}
          caption="화학 반응식에서 물질명 뒤 괄호 안에 상태를 표시합니다"
        />
      </div>
    </div>
  )
}
