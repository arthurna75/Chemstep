import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5DisplayDegradationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 차세대 발광 소재 비교
        </h3>
        <ChemTable
          headers={['구분', '핵심 원리', '특징']}
          rows={[
            ['OLED', '유기 분자의 여기자 발광', '뛰어난 명암비, 산소·수분에 열화 취약'],
            ['양자점(QD)', '나노 반도체 결정의 밴드갭', '입자 크기로 발광색을 정밀 조절'],
            ['페로브스카이트', '독특한 결정 구조의 발광재료', '높은 발광 효율, 저비용 공정 가능성'],
          ]}
          caption="발광 원리가 다른 세 가지 소재는 각각 장단점을 가지고 함께 연구되고 있다."
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 양자점 입자 크기와 발광 색
        </h3>
        <ChemTable
          headers={['입자 크기', '밴드갭', '방출 파장']}
          rows={[
            ['작음', '큼', '짧은 파장(파란색 계열)'],
            ['큼', '작음', '긴 파장(붉은색 계열)'],
          ]}
          caption="양자점은 입자 크기만 조절해도 원하는 색의 빛을 낼 수 있다."
        />
      </div>
    </div>
  )
}
