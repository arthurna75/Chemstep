export default function ElectronCloudDiagram() {
  const cx = 130
  const cy = 175

  const radialProb: string[] = []
  const steps = 50
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const r = t * 4
    const prob = r * r * Math.exp(-r)
    const x = 250 + t * 150
    const y = 300 - prob * 260
    radialProb.push(`${x.toFixed(1)},${y.toFixed(1)}`)
  }

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="전자 구름 모형과 반지름에 따른 확률 분포"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          전자 구름 모형 (1s 오비탈)
        </text>

        {/* 왼쪽: 구름 점묘 */}
        {Array.from({ length: 220 }).map((_, i) => {
          const angle = (i * 137.5 * Math.PI) / 180
          const rBase = 8 + (i % 11) * 8
          const r = rBase
          const x = cx + r * Math.cos(angle)
          const y = cy + r * Math.sin(angle) * 0.95
          const opacity = Math.max(0.08, 0.8 - r / 100)
          return <circle key={i} cx={x} cy={y} r={2} fill="#3B82F6" opacity={opacity} />
        })}
        <circle cx={cx} cy={cy} r={14} fill="#DBEAFE" stroke="#3B82F6" strokeWidth={1.5} />
        <text x={cx} y={cy + 4} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#1E40AF">핵</text>
        <text x={cx} y={296} textAnchor="middle" fontSize={10} fill="#334155">확률 구름 (진할수록 확률 높음)</text>

        {/* 오른쪽: 반지름별 확률 그래프 */}
        <line x1={250} y1={300} x2={410} y2={300} stroke="#CBD5E1" strokeWidth={1} />
        <line x1={250} y1={70} x2={250} y2={300} stroke="#CBD5E1" strokeWidth={1} />
        <polyline points={radialProb.join(' ')} fill="none" stroke="#EF4444" strokeWidth={2} />
        <text x={330} y={60} textAnchor="middle" fontSize={10} fill="#334155">핵으로부터의 거리 r</text>
        <text x={230} y={185} textAnchor="middle" fontSize={10} fill="#334155" transform="rotate(-90 230 185)">
          발견 확률
        </text>
        <text x={330} y={315} textAnchor="middle" fontSize={9} fill="#B91C1C">
          최대 확률 반지름
        </text>
      </svg>
    </div>
  )
}
