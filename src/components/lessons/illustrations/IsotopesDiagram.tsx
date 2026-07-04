export default function IsotopesDiagram() {
  // 3개 동위원소: 각각 cx 위치 다름
  const isotopes = [
    { cx: 80,  name: '프로튬',   symbol: '¹H',  protons: 1, neutrons: 0, color: '#EFF6FF', border: '#3B82F6' },
    { cx: 220, name: '중수소',   symbol: '²H',  protons: 1, neutrons: 1, color: '#F0FDF4', border: '#22C55E' },
    { cx: 360, name: '삼중수소', symbol: '³H',  protons: 1, neutrons: 2, color: '#FEF2F2', border: '#EF4444' },
  ]
  const cy = 130
  const orbitR = 52

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 310"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="수소 동위원소 비교"
      >
        {/* 제목 */}
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          수소(H)의 동위 원소 — Z는 같고 N이 다름
        </text>

        {/* 각 동위원소 */}
        {isotopes.map((iso) => {
          // 핵 입자 배치
          const particles: { x: number; y: number; type: 'p' | 'n' }[] = []
          // 양성자 1개: 중앙
          if (iso.neutrons === 0) {
            particles.push({ x: iso.cx, y: cy, type: 'p' })
          } else if (iso.neutrons === 1) {
            particles.push({ x: iso.cx - 9, y: cy, type: 'p' })
            particles.push({ x: iso.cx + 9, y: cy, type: 'n' })
          } else {
            particles.push({ x: iso.cx,     y: cy - 9, type: 'p' })
            particles.push({ x: iso.cx - 9, y: cy + 8, type: 'n' })
            particles.push({ x: iso.cx + 9, y: cy + 8, type: 'n' })
          }

          const nucleusR = iso.neutrons === 0 ? 14 : iso.neutrons === 1 ? 22 : 26
          const electronAngle = -90 * (Math.PI / 180) // 상단
          const ex = Math.round(iso.cx + orbitR * Math.cos(electronAngle))
          const ey = Math.round(cy + orbitR * Math.sin(electronAngle))

          return (
            <g key={iso.name}>
              {/* 원자 배경 박스 */}
              <rect
                x={iso.cx - 68} y={38}
                width={136} height={200}
                rx={10}
                fill={iso.color}
                stroke={iso.border}
                strokeWidth={1.5}
              />

              {/* 원소 기호 (우상단) */}
              <text x={iso.cx + 40} y={58} textAnchor="end" fontSize={18} fontWeight="bold" fill="#0F172A">
                {iso.symbol}
              </text>

              {/* 궤도 */}
              <circle cx={iso.cx} cy={cy} r={orbitR} fill="none" stroke="#CBD5E1" strokeWidth={1.5} strokeDasharray="4,3" />

              {/* 원자핵 배경 */}
              <circle cx={iso.cx} cy={cy} r={nucleusR} fill="white" stroke="#94A3B8" strokeWidth={1} />

              {/* 핵 입자 */}
              {particles.map((p, i) => (
                <g key={i}>
                  <circle cx={p.x} cy={p.y} r={8} fill={p.type === 'p' ? '#EF4444' : '#94A3B8'} />
                  <text x={p.x} y={p.y + 3.5} textAnchor="middle" fontSize={7} fill="white" fontWeight="bold">
                    {p.type}
                  </text>
                </g>
              ))}

              {/* 전자 */}
              <circle cx={ex} cy={ey} r={9} fill="#3B82F6" />
              <text x={ex} y={ey + 3.5} textAnchor="middle" fontSize={8} fill="white" fontWeight="bold">e⁻</text>

              {/* 이름 */}
              <text x={iso.cx} y={cy + 78} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
                {iso.name}
              </text>

              {/* Z, A, N 정보 */}
              <text x={iso.cx} y={cy + 96} textAnchor="middle" fontSize={10} fill="#475569">
                Z=1  A={1 + iso.neutrons}  N={iso.neutrons}
              </text>

              {/* 존재 비율 */}
              <text x={iso.cx} y={cy + 114} textAnchor="middle" fontSize={9} fill="#64748B">
                {iso.neutrons === 0 ? '99.98%' : iso.neutrons === 1 ? '0.015%' : '극미량(방사성)'}
              </text>
            </g>
          )
        })}

        {/* 하단 포인트 */}
        <rect x={10} y={265} width={420} height={36} rx={6} fill="#FFF7ED" stroke="#FED7AA" strokeWidth={1} />
        <text x={220} y={280} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#C2410C">
          핵심: 세 원소 모두 양성자 1개(Z=1) → 같은 수소 원소
        </text>
        <text x={220} y={295} textAnchor="middle" fontSize={10} fill="#92400E">
          중성자 수(N)가 달라 질량수(A)가 다름 → 동위 원소
        </text>
      </svg>
    </div>
  )
}
