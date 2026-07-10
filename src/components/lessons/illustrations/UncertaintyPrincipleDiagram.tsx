export default function UncertaintyPrincipleDiagram() {
  const bump = (x0: number, y0: number, width: number, height: number, narrow: boolean) => {
    const pts: string[] = []
    const steps = 50
    const cycles = narrow ? 2.5 : 6
    for (let i = 0; i <= steps; i++) {
      const t = i / steps
      const envelope = Math.exp(-Math.pow((t - 0.5) * (narrow ? 3.2 : 1.3), 2))
      const x = x0 + t * width
      const y = y0 - envelope * height * Math.cos(t * cycles * Math.PI)
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
        aria-label="하이젠베르크 불확정성 원리 다이어그램: 위치와 운동량의 관계"
      >
        <text x={220} y={24} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          위치를 좁히면 운동량이 넓어진다
        </text>

        {/* 왼쪽: 위치가 정확한 경우 */}
        <g>
          <rect x={20} y={44} width={190} height={230} rx={10} fill="#F0F9FF" stroke="#93C5FD" strokeWidth={1.5} />
          <text x={115} y={66} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1E40AF">
            위치(Δx)가 좁을 때
          </text>
          <polyline points={bump(35, 175, 160, 60, true)} fill="none" stroke="#3B82F6" strokeWidth={2} />
          <line x1={35} y1={230} x2={195} y2={230} stroke="#CBD5E1" strokeWidth={1} />
          <text x={115} y={196} textAnchor="middle" fontSize={9} fill="#1E40AF">위치가 뚜렷함</text>
          <text x={115} y={252} textAnchor="middle" fontSize={10} fill="#1E40AF">→ 운동량(Δp)은 매우 불확실</text>
        </g>

        {/* 오른쪽: 운동량이 정확한 경우 */}
        <g>
          <rect x={230} y={44} width={190} height={230} rx={10} fill="#FEF2F2" stroke="#FCA5A5" strokeWidth={1.5} />
          <text x={325} y={66} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#B91C1C">
            운동량(Δp)이 정확할 때
          </text>
          <polyline points={bump(245, 175, 160, 60, false)} fill="none" stroke="#EF4444" strokeWidth={2} />
          <line x1={245} y1={230} x2={405} y2={230} stroke="#FCA5A5" strokeWidth={1} />
          <text x={325} y={196} textAnchor="middle" fontSize={9} fill="#B91C1C">퍼짐이 넓게 번짐</text>
          <text x={325} y={252} textAnchor="middle" fontSize={10} fill="#B91C1C">→ 위치(Δx)는 매우 불확실</text>
        </g>

        <text x={220} y={300} textAnchor="middle" fontSize={10} fill="#64748B">
          Δx · Δp ≥ h/4π — 둘 중 하나를 좁히면 다른 하나는 반드시 넓어짐
        </text>
      </svg>
    </div>
  )
}
