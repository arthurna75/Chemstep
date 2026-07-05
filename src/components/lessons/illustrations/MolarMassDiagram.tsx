const substances = [
  { formula: 'H₂O', mass: '18 g', color: '#3B82F6', light: '#DBEAFE', stroke: '#1D4ED8' },
  { formula: 'NaCl', mass: '58.5 g', color: '#22C55E', light: '#DCFCE7', stroke: '#15803D' },
  { formula: 'CaCO₃', mass: '100 g', color: '#EF4444', light: '#FEE2E2', stroke: '#B91C1C' },
]

export default function MolarMassDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="몰 질량: H2O, NaCl, CaCO3 각 1몰이 각각 18g, 58.5g, 100g의 저울 눈금으로 표시된 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        몰 질량: 1몰의 질량(g)
      </text>
      <text x="240" y="42" textAnchor="middle" fontSize="11" fill="#64748B">
        물질 1몰의 질량 = 몰 질량(g/mol) × 1 mol
      </text>

      {substances.map((s, i) => {
        const baseX = 30 + i * 150
        const panelW = 130
        const panelY = 56
        const panelH = 190
        const scaleBaseY = panelY + panelH - 24
        return (
          <g key={s.formula}>
            {/* 패널 배경 */}
            <rect x={baseX} y={panelY} width={panelW} height={panelH} rx="10" fill={s.light} stroke={s.stroke} strokeWidth="2" />

            {/* 물질 이름 */}
            <text x={baseX + panelW / 2} y={panelY + 22} textAnchor="middle" fontSize="14" fontWeight="bold" fill={s.stroke}>
              {s.formula}
            </text>
            <text x={baseX + panelW / 2} y={panelY + 38} textAnchor="middle" fontSize="10" fill="#64748B">
              1 mol
            </text>

            {/* 저울 받침대 */}
            <line x1={baseX + panelW / 2} y1={panelY + 50} x2={baseX + panelW / 2} y2={scaleBaseY} stroke="#94A3B8" strokeWidth="3" />
            {/* 저울 접시 */}
            <ellipse cx={baseX + panelW / 2} cy={scaleBaseY} rx="42" ry="10" fill="#fff" stroke="#94A3B8" strokeWidth="2" />
            {/* 저울 위 물질 덩어리 */}
            <rect
              x={baseX + panelW / 2 - 30}
              y={scaleBaseY - 42}
              width="60"
              height="38"
              rx="6"
              fill={s.color}
              stroke={s.stroke}
              strokeWidth="2"
              opacity="0.85"
            />
            <text x={baseX + panelW / 2} y={scaleBaseY - 20} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">
              {s.formula}
            </text>

            {/* 받침 다리 */}
            <rect x={baseX + panelW / 2 - 3} y={scaleBaseY} width="6" height="14" fill="#94A3B8" />
            <rect x={baseX + panelW / 2 - 26} y={scaleBaseY + 14} width="52" height="6" rx="3" fill="#94A3B8" />

            {/* 질량 표시 */}
            <text x={baseX + panelW / 2} y={panelY + panelH + 22} textAnchor="middle" fontSize="16" fontWeight="bold" fill={s.stroke}>
              {s.mass}
            </text>
          </g>
        )
      })}

      {/* 핵심 공식 박스 */}
      <rect x="30" y="284" width="420" height="34" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <text x="240" y="306" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400E">
        물질이 달라도 "1몰의 질량"은 각 물질 고유의 몰 질량과 같다
      </text>

      <rect x="30" y="326" width="420" height="28" rx="7" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="345" textAnchor="middle" fontSize="12" fill="#1E293B">
        m(g) = n(mol) × M(g/mol)     |     n(mol) = m(g) ÷ M(g/mol)
      </text>
    </svg>
  )
}
