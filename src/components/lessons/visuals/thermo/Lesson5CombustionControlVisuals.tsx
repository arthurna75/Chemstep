import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5CombustionControlVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 연료별 발화점과 연소 범위
        </h3>
        <ChemTable
          headers={['연료', '발화점 (°C)', '연소 범위 (vol%)']}
          rows={[
            ['메탄', '약 595', '5~15'],
            ['가솔린', '약 246', '—'],
            ['수소', '약 500', '4~75'],
          ]}
          highlightCol={2}
          caption="수소는 연소 범위가 매우 넓어(4~75 vol%) 메탄보다 폭발 위험 구간이 더 넓다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 소화 방법
        </h3>
        <ChemTable
          headers={['소화 방법', '제거 대상', '예시']}
          rows={[
            ['냉각 소화', '점화원 (온도↓)', '물을 뿌려 온도 낮춤 → k 감소'],
            ['질식 소화', '산소', 'CO₂·모래로 O₂ 차단'],
            ['제거 소화', '연료', '가스 밸브 잠금, 연료 차단'],
            ['억제 소화', '연쇄 반응(라디칼)', '할론·분말 소화제로 라디칼 포획'],
          ]}
        />
      </div>
    </div>
  )
}
