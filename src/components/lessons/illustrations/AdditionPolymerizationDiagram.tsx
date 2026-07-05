export default function AdditionPolymerizationDiagram() {
  return (
    <svg
      viewBox="0 0 480 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="첨가 중합: 에틸렌 단량체가 연결되어 폴리에틸렌 고분자 사슬이 되는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      <rect width="480" height="300" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        첨가 중합: 에틸렌 → 폴리에틸렌(PE)
      </text>

      {/* ── 단량체 (에틸렌) 여러 개 ── */}
      <text x="240" y="56" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
        단량체(monomer): 에틸렌 CH₂=CH₂
      </text>
      {[70, 170, 270, 370].map((x, i) => (
        <g key={`mono-${i}`}>
          <circle cx={x} cy={90} r="16" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x={x} y={95} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">C</text>
          <circle cx={x + 30} cy={90} r="16" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
          <text x={x + 30} y={95} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">C</text>
          {/* 이중 결합 */}
          <line x1={x + 16} y1={85} x2={x + 14} y2={85} stroke="#1D4ED8" strokeWidth="2" />
          <line x1={x + 16} y1={95} x2={x + 14} y2={95} stroke="#1D4ED8" strokeWidth="2" />
        </g>
      ))}
      <text x="240" y="122" textAnchor="middle" fontSize="10" fill="#64748B">이중결합이 열리며 서로 연결됩니다</text>

      {/* 화살표 */}
      <defs>
        <marker id="arrowPoly" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
          <path d="M0,0 L0,8 L10,4 z" fill="#059669" />
        </marker>
      </defs>
      <line x1="240" y1="134" x2="240" y2="160" stroke="#059669" strokeWidth="3" markerEnd="url(#arrowPoly)" />
      <rect x="170" y="136" width="140" height="22" rx="6" fill="#D1FAE5" stroke="#059669" strokeWidth="1.5" />
      <text x="240" y="151" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#065F46">첨가 중합 (촉매/열)</text>

      {/* ── 생성된 고분자 사슬 (반복 단위 + 괄호 표기) ── */}
      <text x="240" y="188" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
        중합체(polymer): 폴리에틸렌
      </text>

      {/* 대괄호 왼쪽 */}
      <path d="M 95 205 L 85 205 L 85 245 L 95 245" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      {/* 대괄호 오른쪽 */}
      <path d="M 385 205 L 395 205 L 395 245 L 385 245" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <text x="405" y="252" fontSize="15" fontWeight="bold" fill="#1E293B">n</text>

      {/* 반복 단위 사슬: –CH₂–CH₂– x 3 (연결선으로 표현) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const x = 105 + i * 36
        const y = 225 + (i % 2 === 0 ? 0 : 12)
        return <circle key={`pc-${i}`} cx={x} cy={y} r="12" fill="#A7F3D0" stroke="#059669" strokeWidth="1.5" />
      })}
      {Array.from({ length: 7 }).map((_, i) => {
        const x1 = 105 + i * 36
        const y1 = 225 + (i % 2 === 0 ? 0 : 12)
        const x2 = 105 + (i + 1) * 36
        const y2 = 225 + ((i + 1) % 2 === 0 ? 0 : 12)
        return <line key={`pb-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#059669" strokeWidth="2" />
      })}
      <text x="380" y="229" fontSize="11" fill="#065F46">···</text>

      {/* ── 하단 화학식 표기 ── */}
      <text x="240" y="278" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E293B">
        [–CH₂–CH₂–]ₙ
      </text>
      <line x1="30" y1="290" x2="450" y2="290" stroke="#E2E8F0" strokeWidth="1" />
    </svg>
  )
}
