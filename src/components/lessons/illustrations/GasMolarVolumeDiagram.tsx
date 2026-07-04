const gases = [
  { symbol: 'H₂', name: '수소', molarMass: '2 g/mol', color: '#3B82F6', light: '#DBEAFE', stroke: '#1D4ED8', particles: [
    {cx:28,cy:30},{cx:52,cy:18},{cx:76,cy:35},{cx:34,cy:58},{cx:60,cy:50},
    {cx:82,cy:62},{cx:22,cy:80},{cx:48,cy:72},{cx:70,cy:88},{cx:90,cy:40},
  ]},
  { symbol: 'O₂', name: '산소', molarMass: '32 g/mol', color: '#22C55E', light: '#DCFCE7', stroke: '#15803D', particles: [
    {cx:30,cy:25},{cx:55,cy:15},{cx:78,cy:30},{cx:20,cy:55},{cx:45,cy:48},
    {cx:70,cy:58},{cx:88,cy:20},{cx:35,cy:82},{cx:60,cy:75},{cx:85,cy:85},
  ]},
  { symbol: 'CO₂', name: '이산화 탄소', molarMass: '44 g/mol', color: '#EF4444', light: '#FEE2E2', stroke: '#B91C1C', particles: [
    {cx:25,cy:28},{cx:50,cy:18},{cx:75,cy:32},{cx:32,cy:60},{cx:58,cy:50},
    {cx:82,cy:65},{cx:18,cy:85},{cx:44,cy:78},{cx:68,cy:88},{cx:92,cy:45},
  ]},
]

export default function GasMolarVolumeDiagram() {
  return (
    <svg
      viewBox="0 0 480 370"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="기체의 몰 부피: STP(0°C, 1기압)에서 H₂, O₂, CO₂ 각 1몰이 모두 22.4L임을 보여주는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        기체의 몰 부피 (STP 기준)
      </text>
      <text x="240" y="42" textAnchor="middle" fontSize="11" fill="#64748B">
        온도: 0°C (273 K)  |  압력: 1기압 (101.3 kPa)
      </text>

      {/* ── 3개의 기체 실린더 ── */}
      {gases.map((gas, gi) => {
        const baseX = 28 + gi * 152
        const containerW = 118
        const containerH = 140
        const containerY = 58

        return (
          <g key={gi}>
            {/* 실린더 몸체 */}
            <rect
              x={baseX}
              y={containerY}
              width={containerW}
              height={containerH}
              rx="8"
              fill={gas.light}
              stroke={gas.stroke}
              strokeWidth="2"
            />

            {/* 기체 분자 점 */}
            {gas.particles.map((p, pi) => (
              <circle
                key={pi}
                cx={baseX + 10 + p.cx * (containerW - 20) / 112}
                cy={containerY + 10 + p.cy * (containerH - 20) / 100}
                r="4"
                fill={gas.color}
                opacity="0.8"
              />
            ))}

            {/* 기체 기호 (중앙 크게) */}
            <text
              x={baseX + containerW / 2}
              y={containerY + containerH / 2 + 5}
              textAnchor="middle"
              fontSize="22"
              fontWeight="bold"
              fill={gas.stroke}
              opacity="0.35"
            >
              {gas.symbol}
            </text>

            {/* 기체 이름 */}
            <text x={baseX + containerW / 2} y={containerY + containerH + 20} textAnchor="middle" fontSize="13" fontWeight="bold" fill={gas.stroke}>
              {gas.symbol}
            </text>
            <text x={baseX + containerW / 2} y={containerY + containerH + 36} textAnchor="middle" fontSize="10" fill="#475569">
              {gas.name}
            </text>
            <text x={baseX + containerW / 2} y={containerY + containerH + 50} textAnchor="middle" fontSize="10" fill="#64748B">
              몰 질량: {gas.molarMass}
            </text>
            <text x={baseX + containerW / 2} y={containerY + containerH + 64} textAnchor="middle" fontSize="10" fill="#64748B">
              1몰
            </text>

            {/* 22.4L 화살표 레이블 */}
            <line
              x1={baseX + containerW + 6}
              y1={containerY + containerH / 2}
              x2={baseX + containerW + 18}
              y2={containerY + containerH / 2}
              stroke="#94A3B8"
              strokeWidth="1.5"
            />
          </g>
        )
      })}

      {/* 모두 같다 → 22.4L 강조 박스 */}
      <rect x="80" y="292" width="320" height="34" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <text x="240" y="311" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400E">
        기체 종류와 관계없이
      </text>
      <text x="240" y="326" textAnchor="middle" fontSize="13" fill="#78350F">
        1몰의 부피 = 22.4 L (STP)
      </text>

      {/* 공식 박스 */}
      <rect x="30" y="336" width="420" height="28" rx="7" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="354" textAnchor="middle" fontSize="12" fill="#1E293B">
        V(L) = n(mol) × 22.4 L/mol     |     n(mol) = V(L) ÷ 22.4
      </text>

      {/* 아보가드로 법칙 레이블 */}
      <text x="240" y="48" textAnchor="middle" fontSize="11" fill="#64748B" />
    </svg>
  )
}
