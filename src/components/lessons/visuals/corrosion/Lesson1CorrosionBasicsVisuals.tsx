import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1CorrosionBasicsVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 건식 부식 vs 습식 부식
        </h3>
        <ChemTable
          headers={['구분', '발생 조건', '대표 예시']}
          rows={[
            ['건식 부식', '고온의 기체(산소 등)와 직접 반응', '금속 표면의 고온 산화막'],
            ['습식 부식', '물+산소+전해질이 함께 있는 환경', '철의 녹, 배관·선박의 부식'],
          ]}
          caption="부식은 반응이 일어나는 환경에 따라 건식과 습식으로 나뉜다."
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 철의 습윤부식 진행 단계
        </h3>
        <ChemTable
          headers={['단계', '반응식', '설명']}
          rows={[
            ['① 음극(산화)', 'Fe → Fe²⁺ + 2e⁻', '철이 전자를 잃고 이온이 됨'],
            ['② 양극(환원)', 'O₂ + 2H₂O + 4e⁻ → 4OH⁻', '산소가 전자를 받아 OH⁻ 생성'],
            ['③ 녹 생성', '4Fe(OH)₂+O₂+2H₂O→4Fe(OH)₃', '최종적으로 붉은 녹(Fe₂O₃·xH₂O)으로 변함'],
          ]}
          caption="철의 습윤부식은 세 단계를 거쳐 진행된다."
        />
      </div>
    </div>
  )
}
