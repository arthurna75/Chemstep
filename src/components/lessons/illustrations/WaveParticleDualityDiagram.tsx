export default function WaveParticleDualityDiagram() {
  const wavePoints = (x0: number, y0: number, len: number, amp: number, cycles: number) => {
    const pts: string[] = []
    const steps = 60
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const x = x0 + t * len
      const y = y0 + amp * Math.sin(t * cycles * 2 * Math.PI)
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  }

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="빛과 전자의 이중성 다이어그램: 광전 효과와 물질파"
      >
        <text x={220} y={24} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          빛과 전자의 이중성
        </text>

        {/* 위쪽: 광전 효과 */}
        <g>
          <text x={20} y={54} fontSize={11} fontWeight="bold" fill="#1E40AF">① 광전 효과 — 빛이 입자(광자)처럼 행동</text>
          <polyline points={wavePoints(30, 90, 130, 12, 3)} fill="none" stroke="#3B82F6" strokeWidth={2} />
          <text x={95} y={72} textAnchor="middle" fontSize={9} fill="#3B82F6">빛(광자)</text>
          <rect x={175} y={70} width={26} height={50} fill="#94A3B8" />
          <text x={188} y={132} textAnchor="middle" fontSize={9} fill="#475569">금속판</text>
          <line x1={201} y1={95} x2={250} y2={80} stroke="#EF4444" strokeWidth={1.5} markerEnd="url(#arrow1)" />
          <circle cx={255} cy={78} r={6} fill="#EF4444" />
          <text x={260} y={65} fontSize={9} fill="#B91C1C">튀어나온 전자</text>
        </g>

        {/* 가운데: 드브로이 물질파 */}
        <g>
          <text x={20} y={168} fontSize={11} fontWeight="bold" fill="#1E40AF">② 드브로이 물질파 — 전자가 파동처럼 행동</text>
          <circle cx={40} cy={205} r={7} fill="#3B82F6" />
          <text x={40} y={228} textAnchor="middle" fontSize={9} fill="#1E40AF">전자</text>
          <line x1={55} y1={205} x2={90} y2={205} stroke="#94A3B8" strokeWidth={1.5} markerEnd="url(#arrow2)" />
          <polyline points={wavePoints(100, 205, 180, 14, 3.5)} fill="none" stroke="#7C3AED" strokeWidth={2} />
          <text x={190} y={232} textAnchor="middle" fontSize={9} fill="#6D28D9">전자의 물질파 (파장 λ)</text>
        </g>

        <defs>
          <marker id="arrow1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#EF4444" />
          </marker>
          <marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#94A3B8" />
          </marker>
        </defs>

        <rect x={20} y={258} width={400} height={44} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={220} y={276} textAnchor="middle" fontSize={10} fill="#334155">
          빛은 파동이면서 입자처럼, 전자는 입자이면서 파동처럼 행동합니다
        </text>
        <text x={220} y={292} textAnchor="middle" fontSize={10} fill="#334155">
          → 무엇을 관찰하느냐에 따라 다른 성질이 드러남 (이중성)
        </text>
      </svg>
    </div>
  )
}
