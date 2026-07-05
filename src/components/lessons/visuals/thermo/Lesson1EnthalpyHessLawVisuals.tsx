import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1EnthalpyHessLawVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 표준 생성 엔탈피 (ΔH°f)
        </h3>
        <ChemTable
          headers={['물질', '상태', 'ΔH°f (kJ/mol)']}
          rows={[
            ['H₂O', '액체(l)', '−286'],
            ['CO₂', '기체(g)', '−394'],
            ['CH₄', '기체(g)', '−74.8'],
            ['O₂', '기체(g)', '0 (홑원소 물질)'],
          ]}
          highlightCol={2}
          caption="홑원소 물질(O₂ 등)의 ΔH°f는 정의상 0이다"
        />
      </div>
    </div>
  )
}
