import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4PetrochemicalPolymerVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">⚛️</span> 단량체 → 고분자 반응
        </h3>
        <ChemTable
          headers={['단량체', '반응식', '생성 고분자']}
          rows={[
            ['에틸렌 (CH₂=CH₂)', 'nCH₂=CH₂ → (–CH₂–CH₂–)ₙ', '폴리에틸렌(PE)'],
            ['프로필렌 (CH₂=CHCH₃)', 'nCH₂=CHCH₃ → (–CH₂–CHCH₃–)ₙ', '폴리프로필렌(PP)'],
            ['염화 비닐 (CH₂=CHCl)', 'nCH₂=CHCl → (–CH₂–CHCl–)ₙ', 'PVC'],
          ]}
          highlightCol={2}
          caption="이중결합이 열리며 단량체끼리 연결되는 첨가 중합 반응입니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 석유화학 고분자 제품
        </h3>
        <ChemTable
          headers={['고분자', '단량체', '주요 용도']}
          rows={[
            ['폴리에틸렌(PE)', '에틸렌', '비닐봉지, 플라스틱 용기'],
            ['폴리프로필렌(PP)', '프로필렌', '식품 용기, 자동차 부품'],
            ['PVC', '염화 비닐', '파이프, 바닥재, 전선 피복'],
            ['나일론', '-', '합성 섬유, 파라코드'],
            ['폴리스타이렌(PS)', '-', '스타이로폼, 일회용 컵'],
            ['합성 고무', '부타디엔', '타이어, 방진 고무'],
          ]}
          highlightCol={0}
        />
      </div>
    </div>
  )
}
