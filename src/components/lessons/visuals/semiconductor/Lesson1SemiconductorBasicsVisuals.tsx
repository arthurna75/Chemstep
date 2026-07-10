import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1SemiconductorBasicsVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 진성 반도체 vs n형 vs p형
        </h3>
        <ChemTable
          headers={['구분', '도핑 원소', '다수 캐리어', '전도 메커니즘']}
          rows={[
            ['진성 반도체', '없음(순수 실리콘)', '전자·정공 소수', '열에너지로 생긴 소수의 전자-정공 쌍'],
            ['n형 반도체', '15족(P, As 등)', '전자', '여분의 전자가 전도띠로 쉽게 이동'],
            ['p형 반도체', '13족(B, Ga 등)', '정공', '부족한 전자 자리(정공)가 이동'],
          ]}
          caption="도핑 원소의 원자가 전자 수 차이가 반도체의 전도 메커니즘을 결정한다."
          highlightCol={2}
        />
      </div>
    </div>
  )
}
