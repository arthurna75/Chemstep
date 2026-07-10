export default function RustFormationDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="철의 습윤부식 메커니즘 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        철의 습윤부식: 물방울 하나가 만드는 국소 전지
      </text>

      {/* 철 표면 */}
      <rect x="40" y="170" width="400" height="60" rx="4" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
      <text x="240" y="195" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">
        철 (Fe)
      </text>

      {/* 물방울 돔 */}
      <path d="M110,170 A130,75 0 0 1 370,170 Z" fill="#BFDBFE" fillOpacity="0.5" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="95" textAnchor="middle" fontSize="11" fill="#1D4ED8">
        물방울(전해질)
      </text>

      {/* 음극(중심) 표시 */}
      <text x="240" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">음극</text>
      <circle cx="240" cy="170" r="6" fill="#1D4ED8" />

      {/* 양극(가장자리) 표시 */}
      <text x="110" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B91C1C">양극</text>
      <circle cx="110" cy="170" r="6" fill="#B91C1C" />
      <text x="370" y="148" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B91C1C">양극</text>
      <circle cx="370" cy="170" r="6" fill="#B91C1C" />

      {/* 전자 흐름 화살표 */}
      <defs>
        <marker id="arrowRust" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#6366F1" />
        </marker>
      </defs>
      <line x1="225" y1="170" x2="122" y2="170" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowRust)" />
      <line x1="255" y1="170" x2="358" y2="170" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowRust)" />
      <text x="175" y="163" textAnchor="middle" fontSize="9" fill="#4338CA">e⁻</text>
      <text x="305" y="163" textAnchor="middle" fontSize="9" fill="#4338CA">e⁻</text>

      {/* 하단 반응 박스 */}
      <rect x="30" y="250" width="200" height="110" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="272" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        음극 (산화)
      </text>
      <text x="130" y="300" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1E293B">
        Fe → Fe²⁺ + 2e⁻
      </text>
      <text x="130" y="322" textAnchor="middle" fontSize="10" fill="#64748B">산소가 적은 곳(중심부)</text>
      <text x="130" y="340" textAnchor="middle" fontSize="10" fill="#64748B">철이 녹아 이온이 됨</text>

      <rect x="250" y="250" width="200" height="110" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="350" y="272" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">
        양극 (환원)
      </text>
      <text x="350" y="300" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">
        O₂+2H₂O+4e⁻→4OH⁻
      </text>
      <text x="350" y="322" textAnchor="middle" fontSize="10" fill="#64748B">산소가 많은 곳(가장자리)</text>
      <text x="350" y="340" textAnchor="middle" fontSize="10" fill="#64748B">물이 OH⁻ 이온으로 바뀜</text>
    </svg>
  )
}
