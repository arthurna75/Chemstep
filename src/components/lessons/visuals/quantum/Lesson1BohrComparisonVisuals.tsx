import ChemTable from '@/components/ui/ChemTable'

export default function Lesson1BohrComparisonVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 보어 모형 vs 양자역학적 모형
        </h3>
        <ChemTable
          headers={['비교 항목', '보어 모형', '양자역학적 모형']}
          rows={[
            ['전자의 위치', '정해진 궤도 위의 정확한 점', '특정 위치에서 발견될 확률로만 표현'],
            ['핵심 개념', '궤도(orbit)', '오비탈(orbital), 확률 분포'],
            ['수소 원자 설명력', '정확함', '정확함'],
            ['다전자 원자 설명력', '오차가 큼', '정확함'],
            ['자기장 속 스펙트럼 분리', '설명 못함', '설명 가능'],
          ]}
          caption="같은 '전자 하나의 상태'를 서로 다른 방식으로 설명합니다"
        />
      </div>
    </div>
  )
}
