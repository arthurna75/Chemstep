import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5ReactionEnergyVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 발열 반응 vs 흡열 반응
        </h3>
        <ChemTable
          headers={['구분', 'ΔH 부호', '온도 변화', '예시']}
          rows={[
            ['발열 반응', 'ΔH < 0', '주변 온도 상승', '연소 반응, 철의 산화(녹), 중화 반응, 손난로'],
            ['흡열 반응', 'ΔH > 0', '주변 온도 하강', '광합성, 물의 전기 분해, 냉찜질팩(질산 암모늄 용해)'],
          ]}
          highlightCol={1}
        />
      </div>
    </div>
  )
}
