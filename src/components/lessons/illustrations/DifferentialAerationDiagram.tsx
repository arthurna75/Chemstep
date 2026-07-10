export default function DifferentialAerationDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-label="통기차 부식(산소 농도차 전지) 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        통기차 부식: 산소가 적은 틈새에 부식이 집중된다
      </text>

      {/* 금속 표면 */}
      <rect x="40" y="170" width="400" height="50" rx="4" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
      <text x="140" y="210" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">금속 표면</text>

      {/* 개방된 얇은 수막 */}
      <rect x="40" y="140" width="400" height="30" fill="#BFDBFE" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="1" />

      {/* 틈새(정체 전해질) */}
      <rect x="225" y="150" width="30" height="70" fill="#1E3A8A" fillOpacity="0.65" stroke="#1E3A8A" strokeWidth="1" />

      {/* 라벨 (겹치지 않도록 서로 충분히 이격 배치) */}
      <text x="110" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B91C1C">노출부(양극)</text>
      <text x="240" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">틈새(음극)</text>
      <text x="370" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B91C1C">노출부(양극)</text>

      {/* 마커 */}
      <circle cx="110" cy="185" r="5" fill="#B91C1C" />
      <circle cx="240" cy="185" r="5" fill="#1D4ED8" />
      <circle cx="370" cy="185" r="5" fill="#B91C1C" />

      {/* 하단 설명 박스 */}
      <rect x="30" y="250" width="200" height="100" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="272" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">틈새 (음극·산화)</text>
      <text x="130" y="298" textAnchor="middle" fontSize="10" fill="#1E293B">산소 농도 낮음</text>
      <text x="130" y="318" textAnchor="middle" fontSize="10" fill="#1E293B">→ Fe 산화(부식) 진행</text>

      <rect x="250" y="250" width="200" height="100" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="350" y="272" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">노출부 (양극·환원)</text>
      <text x="350" y="298" textAnchor="middle" fontSize="10" fill="#1E293B">산소 농도 높음</text>
      <text x="350" y="318" textAnchor="middle" fontSize="10" fill="#1E293B">→ 상대적으로 보호됨</text>
    </svg>
  )
}
