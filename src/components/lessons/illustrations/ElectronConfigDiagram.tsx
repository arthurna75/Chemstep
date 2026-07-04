export default function ElectronConfigDiagram() {
  const cx = 200
  const cy = 215
  const shells = [
    { r: 58,  count: 2,  name: 'K', color: '#3B82F6', isValence: false },
    { r: 115, count: 8,  name: 'L', color: '#3B82F6', isValence: false },
    { r: 178, count: 1,  name: 'M', color: '#EF4444', isValence: true  },
  ]

  function getElectronPositions(r: number, count: number) {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i * (360 / count) - 90) * (Math.PI / 180)
      return {
        x: Math.round(cx + r * Math.cos(angle)),
        y: Math.round(cy + r * Math.sin(angle)),
      }
    })
  }

  // 각 껍질의 오른쪽 끝점 (레이블 연결선 시작점)
  const labelConnectors = [
    { x1: cx + 58,  y1: cy, x2: 400, labelY: cy,       text: 'K(2)',  color: '#64748B', bg: '#F1F5F9' },
    { x1: cx + 115, y1: cy, x2: 400, labelY: cy - 40,  text: 'L(8)',  color: '#64748B', bg: '#F1F5F9' },
    { x1: cx + 178, y1: cy, x2: 400, labelY: cy - 80,  text: 'M(1)',  color: '#DC2626', bg: '#FEF2F2' },
  ]

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 460 445"
        width="100%"
        style={{ maxWidth: 420 }}
        aria-label="나트륨 전자 배치 다이어그램"
      >
        {/* 제목 */}
        <text x={200} y={26} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          나트륨(Na) 전자 배치
        </text>

        {/* 껍질 원 */}
        {shells.map((shell) => (
          <circle
            key={shell.name}
            cx={cx}
            cy={cy}
            r={shell.r}
            fill="none"
            stroke={shell.isValence ? '#FCA5A5' : '#CBD5E1'}
            strokeWidth={shell.isValence ? 2 : 1.5}
            strokeDasharray={shell.isValence ? '6,4' : '4,3'}
          />
        ))}

        {/* 전자 */}
        {shells.map((shell) => {
          const positions = getElectronPositions(shell.r, shell.count)
          return positions.map((pos, i) => (
            <g key={`${shell.name}-${i}`}>
              <circle cx={pos.x} cy={pos.y} r={10} fill={shell.color} opacity={shell.isValence ? 1 : 0.85} />
              <text x={pos.x} y={pos.y + 4} textAnchor="middle" fontSize={8} fill="white" fontWeight="bold">
                e⁻
              </text>
            </g>
          ))
        })}

        {/* 오른쪽 레이블 패널 — 연결선 + 레이블 박스 */}
        {labelConnectors.map((lc) => (
          <g key={lc.text}>
            {/* 연결선 */}
            <line
              x1={lc.x1} y1={lc.y1}
              x2={lc.x2} y2={lc.labelY}
              stroke={lc.color}
              strokeWidth={1}
              strokeDasharray="3,2"
            />
            {/* 레이블 박스 */}
            <rect x={lc.x2} y={lc.labelY - 12} width={48} height={22} rx={4} fill={lc.bg} stroke={lc.color} strokeWidth={1} />
            <text x={lc.x2 + 24} y={lc.labelY + 4} textAnchor="middle" fontSize={12} fontWeight="bold" fill={lc.color}>
              {lc.text}
            </text>
          </g>
        ))}

        {/* 원자핵 */}
        <circle cx={cx} cy={cy} r={32} fill="#F0F9FF" stroke="#93C5FD" strokeWidth={2} />
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize={18} fontWeight="bold" fill="#1E40AF">Na</text>
        <text x={cx} y={cy + 13} textAnchor="middle" fontSize={9} fill="#60A5FA">Z=11</text>

        {/* 하단 설명 */}
        <text x={200} y={415} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1E293B">
          전자 배치: K(2) L(8) M(1) — 원자가 전자 1개
        </text>

        {/* 범례 */}
        <g transform="translate(20, 425)">
          <circle cx={8} cy={7} r={7} fill="#EF4444" />
          <text x={20} y={11} fontSize={10} fill="#DC2626" fontWeight="bold">원자가 전자</text>
          <circle cx={120} cy={7} r={7} fill="#3B82F6" />
          <text x={132} y={11} fontSize={10} fill="#374151">내부 전자</text>
        </g>
      </svg>
    </div>
  )
}
