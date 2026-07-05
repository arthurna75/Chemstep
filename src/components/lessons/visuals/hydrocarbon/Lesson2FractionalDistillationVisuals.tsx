import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2FractionalDistillationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 분별 증류 생성물
        </h3>
        <ChemTable
          headers={['분류', '탄소 수', '끓는점(°C)', '용도']}
          rows={[
            ['액화석유가스(LPG)', 'C₃~C₄', '−40~0', '연료(가스레인지)'],
            ['나프타(Naphtha)', 'C₅~C₉', '30~180', '석유화학 원료'],
            ['가솔린(Gasoline)', 'C₅~C₁₀', '30~200', '자동차 연료'],
            ['등유(Kerosene)', 'C₁₁~C₁₃', '150~280', '항공유, 난방'],
            ['경유(Diesel)', 'C₁₄~C₂₀', '250~350', '트럭, 선박 연료'],
            ['중유(Heavy Fuel)', 'C₂₁~C₃₅', '350~450', '발전소, 선박'],
            ['윤활유·아스팔트', 'C₃₅↑', '450↑', '도로 포장'],
          ]}
          highlightCol={1}
          caption="탄소 수가 적고 끓는점이 낮을수록 증류탑 상단에서 분리됩니다"
        />
      </div>
    </div>
  )
}
