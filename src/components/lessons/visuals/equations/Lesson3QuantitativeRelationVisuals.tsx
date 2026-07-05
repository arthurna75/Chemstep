import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3QuantitativeRelationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 양적 관계 계산 흐름
        </h3>
        <ChemTable
          headers={['단계', '연산', '결과']}
          rows={[
            ['①', '주어진 질량(g) ÷ 몰질량(g/mol)', '몰수(mol)'],
            ['②', '몰수 × 계수비', '다른 물질의 몰수(mol)'],
            ['③', '다른 물질의 몰수 × 몰질량', '질량(g)'],
          ]}
          highlightCol={1}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 한계 반응물 vs 과잉 반응물
        </h3>
        <ChemTable
          headers={['구분', '정의 / 역할']}
          rows={[
            ['한계 반응물', '반응 후 남지 않는 물질 → 생성량을 결정'],
            ['과잉 반응물', '반응 후 일부 남는 물질'],
          ]}
          caption="두 반응물이 정확한 계수비(몰비)로 존재하지 않을 때, 먼저 소모되는 반응물이 반응을 제한합니다"
        />
      </div>
    </div>
  )
}
