import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2WaferProcessVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 습식 식각 vs 건식 식각
        </h3>
        <ChemTable
          headers={['구분', '반응 매커니즘', '방향성', '대표 화학종']}
          rows={[
            ['습식 식각', '산 용액이 표면과 화학 반응해 용해 제거', '등방성(사방으로 깎임)', '불산(HF) 등'],
            ['건식 식각', '플라즈마의 반응성 이온·라디칼이 반응', '이방성(특정 방향만 깎임)', '플라즈마 반응성 라디칼'],
          ]}
          caption="건식 식각은 방향성이 있어 미세한 회로 패턴을 정밀하게 새길 수 있다."
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 웨이퍼 제조 공정 순서
        </h3>
        <ChemTable
          headers={['단계', '공정', '핵심 화학 반응/원리']}
          rows={[
            ['① 조 실리콘 생성', '탄소 환원', 'SiO₂ + 2C → Si + 2CO↑'],
            ['② 초고순도 정제', '지멘스 공정', 'SiHCl₃ 증류 정제 후 수소 환원'],
            ['③ 잉곳 성장', '초크랄스키법', '녹은 실리콘에서 단결정 인상'],
            ['④ 절연막 형성', '열산화', 'Si + O₂ → SiO₂'],
          ]}
          caption="모래에서 회로가 새겨진 웨이퍼가 되기까지의 핵심 단계."
        />
      </div>
    </div>
  )
}
