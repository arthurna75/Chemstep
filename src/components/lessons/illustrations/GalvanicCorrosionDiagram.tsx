export default function GalvanicCorrosionDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-label="이종 금속 접촉에 의한 갈바니 부식 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        갈바니 부식: 반응성이 큰 금속이 대신 부식된다
      </text>

      {/* 전해질 용기 */}
      <rect x="50" y="100" width="380" height="100" rx="4" fill="#DBEAFE" fillOpacity="0.4" stroke="#93C5FD" strokeWidth="2" />

      {/* Fe 판 */}
      <rect x="110" y="70" width="30" height="130" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
      <text x="125" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">Fe</text>

      {/* Cu 판 */}
      <rect x="340" y="70" width="30" height="130" fill="#C2703D" stroke="#7C2D12" strokeWidth="2" />
      <text x="355" y="58" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">Cu</text>

      {/* 연결 도선 */}
      <path d="M125,70 Q240,40 355,70" fill="none" stroke="#334155" strokeWidth="2" />
      <defs>
        <marker id="arrowGalvanic" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#6366F1" />
        </marker>
      </defs>
      <line x1="180" y1="53" x2="230" y2="42" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowGalvanic)" />
      <text x="240" y="30" textAnchor="middle" fontSize="10" fill="#4338CA">e⁻ 이동 (Fe → Cu)</text>

      {/* 반응 표시 */}
      <circle cx="125" cy="150" r="5" fill="#1D4ED8" />
      <text x="125" y="175" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1D4ED8">산화(부식)</text>
      <circle cx="355" cy="150" r="5" fill="#B91C1C" />
      <text x="355" y="175" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B91C1C">환원(보호)</text>

      {/* 하단 비교 박스 */}
      <rect x="30" y="230" width="200" height="110" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="252" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">Fe (E°=-0.44V)</text>
      <text x="130" y="278" textAnchor="middle" fontSize="11" fill="#1E293B">반응성 큼 → 음극</text>
      <text x="130" y="298" textAnchor="middle" fontSize="11" fill="#1E293B">산화되어 부식됨</text>
      <text x="130" y="320" textAnchor="middle" fontSize="10" fill="#64748B">전자를 내어줌</text>

      <rect x="250" y="230" width="200" height="110" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="350" y="252" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">Cu (E°=+0.34V)</text>
      <text x="350" y="278" textAnchor="middle" fontSize="11" fill="#1E293B">반응성 작음 → 양극</text>
      <text x="350" y="298" textAnchor="middle" fontSize="11" fill="#1E293B">환원되어 보호됨</text>
      <text x="350" y="320" textAnchor="middle" fontSize="10" fill="#64748B">전자를 받음</text>
    </svg>
  )
}
