export default function OrbitalEnergyLevelDiagram() {
  const levels = [
    { label: '1s', y: 290, x: 60, color: '#3B82F6' },
    { label: '2s', y: 250, x: 60, color: '#3B82F6' },
    { label: '2p', y: 230, x: 140, color: '#F59E0B' },
    { label: '3s', y: 195, x: 60, color: '#3B82F6' },
    { label: '3p', y: 175, x: 140, color: '#F59E0B' },
    { label: '4s', y: 145, x: 60, color: '#3B82F6' },
    { label: '3d', y: 125, x: 230, color: '#22C55E' },
    { label: '4p', y: 100, x: 140, color: '#F59E0B' },
    { label: '5s', y: 75, x: 60, color: '#3B82F6' },
    { label: '4f', y: 55, x: 330, color: '#A855F7' },
  ]

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="오비탈의 에너지 준위 다이어그램"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          오비탈 에너지 준위 (아래일수록 낮음)
        </text>

        {levels.map(lv => (
          <g key={lv.label}>
            <rect x={lv.x} y={lv.y} width={44} height={16} rx={3} fill={lv.color} opacity={0.18} stroke={lv.color} strokeWidth={1.3} />
            <text x={lv.x + 22} y={lv.y + 12} textAnchor="middle" fontSize={10} fontWeight="bold" fill={lv.color}>
              {lv.label}
            </text>
          </g>
        ))}

        {/* 4s가 3d보다 낮음을 강조하는 화살표 */}
        <line x1={104} y1={153} x2={228} y2={131} stroke="#DC2626" strokeWidth={1.3} strokeDasharray="4,3" />
        <text x={280} y={140} fontSize={9} fill="#DC2626">4s가 3d보다 먼저 채워짐</text>

        <line x1={30} y1={310} x2={30} y2={40} stroke="#94A3B8" strokeWidth={1.3} markerEnd="url(#energyArrow)" />
        <text x={18} y={45} fontSize={9} fill="#64748B" textAnchor="middle">에너지</text>

        <defs>
          <marker id="energyArrow" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
            <path d="M0,8 L4,0 L8,8 Z" fill="#94A3B8" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}
