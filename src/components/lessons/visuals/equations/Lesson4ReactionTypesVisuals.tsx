import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4ReactionTypesVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 화학 반응의 유형
        </h3>
        <ChemTable
          headers={['반응 유형', '일반식', '예시 반응식']}
          rows={[
            ['합성(결합) 반응', 'A + B → AB', '2Na + Cl₂ → 2NaCl'],
            ['분해 반응', 'AB → A + B', '2H₂O₂ → 2H₂O + O₂'],
            ['치환(단일 치환) 반응', 'A + BC → AC + B', 'Zn + 2HCl → ZnCl₂ + H₂↑'],
            ['이중 치환(복분해) 반응', 'AB + CD → AD + CB', 'HCl + NaOH → NaCl + H₂O'],
            ['연소 반응', '물질 + O₂ → CO₂ + H₂O(+열·빛)', 'CH₄ + 2O₂ → CO₂ + 2H₂O'],
            ['앙금 생성 반응', 'AB + CD → AD↓ + CB', 'Ag⁺ + Cl⁻ → AgCl↓'],
          ]}
          highlightCol={1}
          caption="앙금 생성 반응은 이중 치환 반응 중 난용성 염(↓)이 생기는 경우입니다"
        />
      </div>
    </div>
  )
}
