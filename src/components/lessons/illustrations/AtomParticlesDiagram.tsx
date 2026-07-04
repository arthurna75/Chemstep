export default function AtomParticlesDiagram() {
  const cx = 200
  const cy = 190
  const orbitR = 140

  const cols = [-24, -8, 8, 24]
  const rows = [-16, 0, 16]
  const nucleusParticles = rows.flatMap((dy, ri) =>
    cols.map((dx, ci) => ({
      x: cx + dx,
      y: cy + dy,
      isProton: (ri + ci) % 2 === 0,
    }))
  )

  const electrons = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 * Math.PI) / 180
    return {
      x: Math.round(cx + orbitR * Math.cos(angle)),
      y: Math.round(cy - orbitR * Math.sin(angle)),
    }
  })

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 400 400"
        width="100%"
        style={{ maxWidth: 360 }}
        aria-label="탄소 원자 보어 모델"
      >
        {/* 제목 */}
        <text x={cx} y={18} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1E293B">
          탄소(C) 원자 — 원자 번호 6, 질량수 12
        </text>

        {/* 궤도 */}
        <circle
          cx={cx}
          cy={cy}
          r={orbitR}
          fill="none"
          stroke="#CBD5E1"
          strokeWidth="1.5"
          strokeDasharray="5,4"
        />

        {/* 원자핵 배경 */}
        <circle cx={cx} cy={cy} r={50} fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />

        {/* 원자핵 입자 */}
        {nucleusParticles.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r={8} fill={p.isProton ? '#EF4444' : '#94A3B8'} />
            <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">
              {p.isProton ? 'p' : 'n'}
            </text>
          </g>
        ))}

        {/* 원자핵 레이블 — 원 바로 아래, 흰 배경으로 궤도선 위에 선명하게 표시 */}
        <rect x={cx - 26} y={cy + 53} width={52} height={18} rx={3} fill="white" />
        <text x={cx} y={cy + 66} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
          원자핵
        </text>

        {/* 전자 */}
        {electrons.map((e, i) => (
          <g key={i}>
            <circle cx={e.x} cy={e.y} r={11} fill="#3B82F6" />
            <text x={e.x} y={e.y + 4} textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">
              e⁻
            </text>
          </g>
        ))}

        {/* 범례 — 하단 여백 충분히 확보 */}
        <g transform="translate(14, 345)">
          <circle cx={10} cy={10} r={8} fill="#EF4444" />
          <text x={24} y={14} fontSize="11" fill="#374151">양성자 (p⁺) × 6</text>

          <circle cx={140} cy={10} r={8} fill="#94A3B8" />
          <text x={154} y={14} fontSize="11" fill="#374151">중성자 (n⁰) × 6</text>

          <circle cx={270} cy={10} r={8} fill="#3B82F6" />
          <text x={284} y={14} fontSize="11" fill="#374151">전자 (e⁻) × 6</text>
        </g>
      </svg>
    </div>
  )
}
