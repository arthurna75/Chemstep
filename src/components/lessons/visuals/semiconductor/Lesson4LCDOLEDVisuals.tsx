import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4LCDOLEDVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> LCD vs OLED
        </h3>
        <ChemTable
          headers={['구분', '구동 원리', '광원', '명암비', '소비전력(어두운 화면)']}
          rows={[
            ['LCD', '액정으로 백라이트 빛의 통과량 조절', '별도 백라이트 필요', '상대적으로 낮음(빛샘)', '항상 백라이트 소비'],
            ['OLED', '유기 발광층이 스스로 발광', '백라이트 불필요', '매우 높음(완전한 검정)', '어두울수록 소비전력 감소'],
          ]}
          caption="OLED는 화소 단위로 발광을 직접 켜고 끌 수 있어 명암비와 전력 효율에서 유리하다."
        />
      </div>
    </div>
  )
}
