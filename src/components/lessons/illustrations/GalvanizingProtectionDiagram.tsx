export default function GalvanizingProtectionDiagram() {
  return (
    <svg
      viewBox="0 0 480 330"
      aria-label="아연 도금과 주석 도금의 부식 방지 원리 비교 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="330" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        도금 금속에 따른 흠집 부위의 부식 차이
      </text>

      {/* 왼쪽: 아연 도금 */}
      <text x="125" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">아연 도금 (Zn)</text>
      <rect x="40" y="140" width="170" height="40" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <rect x="40" y="125" width="70" height="15" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      <rect x="140" y="125" width="70" height="15" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      <text x="125" y="115" textAnchor="middle" fontSize="9" fill="#EF4444">흠집</text>
      <line x1="118" y1="122" x2="132" y2="140" stroke="#EF4444" strokeWidth="1.5" />
      <text x="125" y="195" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1D4ED8">Zn이 대신 부식 → Fe 보호</text>

      {/* 오른쪽: 주석 도금 */}
      <text x="355" y="60" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">주석 도금 (Sn)</text>
      <rect x="270" y="140" width="170" height="40" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <rect x="270" y="125" width="70" height="15" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
      <rect x="370" y="125" width="70" height="15" fill="#E5E7EB" stroke="#9CA3AF" strokeWidth="1" />
      <text x="355" y="115" textAnchor="middle" fontSize="9" fill="#EF4444">흠집</text>
      <line x1="348" y1="122" x2="362" y2="140" stroke="#EF4444" strokeWidth="1.5" />
      <text x="355" y="195" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#B91C1C">Fe가 먼저 부식 (Sn은 미보호)</text>

      {/* 하단 요약 패널 */}
      <rect x="40" y="225" width="400" height="80" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="240" y="250" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">
        핵심: 도금 금속의 반응성이 철보다 크면(Zn) 철을 보호하고,
      </text>
      <text x="240" y="270" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">
        철보다 작으면(Sn) 흠집이 났을 때 오히려 부식을 촉진한다
      </text>
      <text x="240" y="292" textAnchor="middle" fontSize="10" fill="#64748B">
        (E°(Zn) &lt; E°(Fe) &lt; E°(Sn) 순서로 반응성 비교)
      </text>
    </svg>
  )
}
