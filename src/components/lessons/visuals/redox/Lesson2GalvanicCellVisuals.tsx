import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2GalvanicCellVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 표준 환원 전위 비교
        </h3>
        <ChemTable
          headers={['반쪽 반응', 'E° (V)', '전극 역할']}
          rows={[
            ['Ag⁺ + e⁻ → Ag', '+0.80', '환원되기 쉬움 → 양극'],
            ['Cu²⁺ + 2e⁻ → Cu', '+0.34', '환원되기 쉬움 → 양극'],
            ['Fe²⁺ + 2e⁻ → Fe', '-0.44', '산화되기 쉬움 → 음극'],
            ['Zn²⁺ + 2e⁻ → Zn', '-0.76', '산화되기 쉬움 → 음극'],
            ['Mg²⁺ + 2e⁻ → Mg', '-2.37', '산화되기 쉬움 → 음극'],
          ]}
          caption="E°가 높을수록 환원되기 쉬워 양극(+), 낮을수록 산화되기 쉬워 음극(-)이 된다."
        />
      </div>
    </div>
  )
}
