export default function CrackingProcessDiagram() {
  return (
    <svg
      viewBox="0 0 480 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="크래킹: 긴 사슬 탄화수소가 열/촉매로 짧은 사슬 탄화수소로 분해되는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      <rect width="480" height="300" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        크래킹(Cracking): 긴 사슬 → 짧은 사슬 분해
      </text>

      {/* ── 반응 전: 긴 사슬 탄화수소 (C₁₆H₃₄) ── */}
      <text x="240" y="60" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
        반응 전: 긴 사슬 탄화수소 (예: C₁₆H₃₄)
      </text>
      <g>
        {Array.from({ length: 12 }).map((_, i) => {
          const x = 60 + i * 30
          const y = 90 + (i % 2 === 0 ? 0 : 14)
          return (
            <circle key={`c-${i}`} cx={x} cy={y} r="11" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1.5" />
          )
        })}
        {Array.from({ length: 11 }).map((_, i) => {
          const x1 = 60 + i * 30
          const y1 = 90 + (i % 2 === 0 ? 0 : 14)
          const x2 = 60 + (i + 1) * 30
          const y2 = 90 + ((i + 1) % 2 === 0 ? 0 : 14)
          return <line key={`b-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#7C3AED" strokeWidth="2" />
        })}
        {/* 분해될 지점 표시 (가운데) */}
        <line x1="195" y1="70" x2="195" y2="130" stroke="#EF4444" strokeWidth="2" strokeDasharray="4,3" />
      </g>

      {/* ── 화살표 + 반응 조건 ── */}
      <defs>
        <marker id="arrowCrack" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
          <path d="M0,0 L0,8 L10,4 z" fill="#B45309" />
        </marker>
      </defs>
      <line x1="240" y1="150" x2="240" y2="180" stroke="#B45309" strokeWidth="3" markerEnd="url(#arrowCrack)" />
      <rect x="180" y="152" width="120" height="24" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="240" y="168" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">열 / 촉매 🔥</text>

      {/* ── 반응 후: 두 개의 짧은 사슬 ── */}
      <text x="240" y="200" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
        반응 후: 짧은 사슬 알케인 + 알케인 (예: C₈H₁₈ + C₈H₁₆)
      </text>

      {/* 왼쪽 조각 */}
      <g>
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 40 + i * 26
          const y = 230 + (i % 2 === 0 ? 0 : 12)
          return <circle key={`lc-${i}`} cx={x} cy={y} r="10" fill="#BFDBFE" stroke="#2563EB" strokeWidth="1.5" />
        })}
        {Array.from({ length: 5 }).map((_, i) => {
          const x1 = 40 + i * 26
          const y1 = 230 + (i % 2 === 0 ? 0 : 12)
          const x2 = 40 + (i + 1) * 26
          const y2 = 230 + ((i + 1) % 2 === 0 ? 0 : 12)
          return <line key={`lb-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2563EB" strokeWidth="2" />
        })}
        <text x="105" y="266" textAnchor="middle" fontSize="10" fill="#1D4ED8">짧은 사슬 알케인 (C₈H₁₈)</text>
      </g>

      {/* 플러스 기호 */}
      <text x="240" y="242" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#64748B">+</text>

      {/* 오른쪽 조각 */}
      <g>
        {Array.from({ length: 6 }).map((_, i) => {
          const x = 300 + i * 26
          const y = 230 + (i % 2 === 0 ? 0 : 12)
          return <circle key={`rc-${i}`} cx={x} cy={y} r="10" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5" />
        })}
        {Array.from({ length: 5 }).map((_, i) => {
          const x1 = 300 + i * 26
          const y1 = 230 + (i % 2 === 0 ? 0 : 12)
          const x2 = 300 + (i + 1) * 26
          const y2 = 230 + ((i + 1) % 2 === 0 ? 0 : 12)
          return <line key={`rb-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#059669" strokeWidth="2" />
        })}
        {/* 이중 결합 표시 (알켄임을 나타내는 마지막 결합 이중선) */}
        <line x1="404" y1="230" x2="424" y2="230" stroke="#059669" strokeWidth="2" transform="translate(0,-4)" />
        <text x="365" y="266" textAnchor="middle" fontSize="10" fill="#047857">짧은 사슬 알켄 (C₈H₁₆)</text>
      </g>

      {/* ── 하단 설명 ── */}
      <line x1="30" y1="280" x2="450" y2="280" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="240" y="296" textAnchor="middle" fontSize="9.5" fill="#64748B">
        열 크래킹(고온·고압) 또는 촉매 크래킹(제올라이트, 500°C)으로 C–C 결합이 끊어져 짧은 사슬 분자가 생성됩니다
      </text>
    </svg>
  )
}
