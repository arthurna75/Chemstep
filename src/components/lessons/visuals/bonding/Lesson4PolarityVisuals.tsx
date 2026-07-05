import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4PolarityVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 극성 분자 vs 무극성 분자
        </h3>
        <ChemTable
          headers={['분류', '분자', '구조(형태)']}
          rows={[
            ['극성 분자', 'HCl, HF, HBr', '2원자 이종핵 분자'],
            ['극성 분자', 'H₂O', 'V자형(굽은형) 구조'],
            ['극성 분자', 'NH₃', '삼각뿔형 구조'],
            ['무극성 분자', 'H₂, N₂, O₂, Cl₂', '동핵 2원자 분자'],
            ['무극성 분자', 'CO₂', '직선형 구조'],
            ['무극성 분자', 'CH₄', '정사면체형 구조'],
            ['무극성 분자', 'BF₃', '평면 삼각형 구조'],
          ]}
          caption="합벡터 ≠ 0 → 극성 분자 / 합벡터 = 0 → 무극성 분자"
          highlightCol={0}
        />
      </div>
    </div>
  )
}
