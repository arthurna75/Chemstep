import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1HydrocarbonClassificationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 탄화수소의 분류
        </h3>
        <ChemTable
          headers={['분류', '일반식', '결합', '예시']}
          rows={[
            ['알케인 (포화)', 'CₙH₂ₙ₊₂ (n≥1)', '단결합만 존재', '메탄(CH₄), 에탄(C₂H₆), 프로판(C₃H₈), 부탄(C₄H₁₀)'],
            ['알켄 (불포화)', 'CₙH₂ₙ (n≥2)', '이중결합(C=C) 1개', '에틸렌(C₂H₄), 프로필렌(C₃H₆), 부텐(C₄H₈)'],
            ['알카인 (불포화)', 'CₙH₂ₙ₋₂ (n≥2)', '삼중결합(C≡C) 1개', '아세틸렌(C₂H₂), 프로파인(C₃H₄)'],
          ]}
          highlightCol={0}
          caption="탄소 간 결합 형태(단일/이중/삼중)에 따라 세 가지로 분류됩니다"
        />
      </div>
    </div>
  )
}
