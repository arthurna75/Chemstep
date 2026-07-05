import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3MolarMassVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 물질별 몰 질량
        </h3>
        <ChemTable
          headers={['물질', '몰 질량(g/mol)']}
          rows={[
            ['H₂O', '18'],
            ['CO₂', '44'],
            ['NaCl', '58.5'],
            ['CaCO₃', '100'],
            ['H₂SO₄', '98'],
          ]}
          caption="몰 질량의 수치 = 원자량·분자량·화학식량의 수치와 동일 (단위만 g/mol)"
          highlightCol={1}
        />
      </div>
    </div>
  )
}
