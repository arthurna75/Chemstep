export default function CathodicProtectionDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      aria-label="희생양극법과 외부전원법에 의한 음극 방식 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="400" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        음극 방식: 배관을 인위적으로 음극(환원 상태)으로 유지
      </text>

      {/* 지표면 */}
      <line x1="20" y1="140" x2="460" y2="140" stroke="#78716C" strokeWidth="2" />
      <text x="60" y="130" textAnchor="middle" fontSize="9" fill="#78716C">지표면</text>

      {/* 땅속 */}
      <rect x="0" y="140" width="480" height="140" fill="#EFE6D8" />

      {/* 배관 */}
      <rect x="60" y="190" width="280" height="24" rx="4" fill="#64748B" stroke="#334155" strokeWidth="2" />
      <text x="200" y="206" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#F8FAFC">
        지하 배관 (Fe)
      </text>

      {/* 희생 양극(마그네슘) */}
      <rect x="380" y="185" width="30" height="34" fill="#CBD5E1" stroke="#475569" strokeWidth="1.5" />
      <text x="395" y="175" textAnchor="middle" fontSize="9" fill="#1D4ED8">Mg(희생 양극)</text>

      {/* 연결 도선 및 전자 흐름 */}
      <defs>
        <marker id="arrowCathodic" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#6366F1" />
        </marker>
      </defs>
      <line x1="380" y1="202" x2="345" y2="202" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowCathodic)" />
      <text x="362" y="194" textAnchor="middle" fontSize="9" fill="#4338CA">e⁻</text>

      {/* 하단 비교 박스 */}
      <rect x="30" y="300" width="200" height="90" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="322" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">희생양극법</text>
      <text x="130" y="345" textAnchor="middle" fontSize="10" fill="#1E293B">Mg가 Fe보다 먼저 산화</text>
      <text x="130" y="365" textAnchor="middle" fontSize="10" fill="#1E293B">→ Fe는 음극(보호)</text>

      <rect x="250" y="300" width="200" height="90" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="350" y="322" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">외부전원법</text>
      <text x="350" y="345" textAnchor="middle" fontSize="10" fill="#1E293B">외부 전원(-)→배관</text>
      <text x="350" y="365" textAnchor="middle" fontSize="10" fill="#1E293B">강제 전류로 넓은 범위 보호</text>
    </svg>
  )
}
