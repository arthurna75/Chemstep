export default function DanielCellDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="다니엘 전지 구조 다이어그램"
      className="w-full h-auto"
    >
      {/* 배경 */}
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        다니엘 전지 (Daniel Cell)
      </text>

      {/* ── 음극 비커 (Zn | ZnSO₄) ── */}
      {/* 비커 몸통 */}
      <rect x="30" y="80" width="160" height="160" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      {/* 전해질 레이블 */}
      <text x="110" y="170" textAnchor="middle" fontSize="12" fill="#1D4ED8">ZnSO₄(aq)</text>
      {/* Zn 전극 */}
      <rect x="85" y="60" width="16" height="130" rx="3" fill="#94A3B8" />
      <text x="93" y="54" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#475569">Zn</text>
      {/* 산화 반응식 */}
      <text x="110" y="200" textAnchor="middle" fontSize="10" fill="#3B82F6">
        Zn → Zn²⁺ + 2e⁻
      </text>
      <text x="110" y="214" textAnchor="middle" fontSize="10" fill="#64748B">(산화, 음극)</text>
      {/* 비커 레이블 */}
      <text x="110" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">음극 (−)</text>

      {/* ── 양극 비커 (Cu | CuSO₄) ── */}
      <rect x="290" y="80" width="160" height="160" rx="4" fill="#FFF7ED" stroke="#FCA5A5" strokeWidth="2" />
      <text x="370" y="170" textAnchor="middle" fontSize="12" fill="#B45309">CuSO₄(aq)</text>
      {/* Cu 전극 */}
      <rect x="375" y="60" width="16" height="130" rx="3" fill="#F59E0B" />
      <text x="383" y="54" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400E">Cu</text>
      {/* 환원 반응식 */}
      <text x="370" y="200" textAnchor="middle" fontSize="10" fill="#EF4444">
        Cu²⁺ + 2e⁻ → Cu
      </text>
      <text x="370" y="214" textAnchor="middle" fontSize="10" fill="#64748B">(환원, 양극)</text>
      <text x="370" y="255" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B91C1C">양극 (+)</text>

      {/* ── 염다리 ── */}
      <rect x="175" y="95" width="130" height="28" rx="14" fill="#D1FAE5" stroke="#6EE7B7" strokeWidth="1.5" />
      <text x="240" y="114" textAnchor="middle" fontSize="11" fill="#065F46">염다리 (KNO₃)</text>
      {/* 이온 이동 화살표 */}
      <text x="200" y="136" textAnchor="middle" fontSize="10" fill="#065F46">K⁺→</text>
      <text x="280" y="136" textAnchor="middle" fontSize="10" fill="#065F46">←NO₃⁻</text>

      {/* ── 외부 도선 + 전류계 ── */}
      {/* 도선 (위쪽) */}
      <polyline points="93,60 93,30 240,30 387,30 387,60"
        fill="none" stroke="#475569" strokeWidth="2.5" />
      {/* 전류계 원 */}
      <circle cx="240" cy="30" r="16" fill="white" stroke="#475569" strokeWidth="2" />
      <text x="240" y="34" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">A</text>

      {/* 전자 흐름 화살표 (도선 위) */}
      <text x="160" y="24" textAnchor="middle" fontSize="11" fill="#6366F1">e⁻ →</text>
      <text x="320" y="24" textAnchor="middle" fontSize="11" fill="#6366F1">e⁻ →</text>

      {/* ── 전체 반응식 ── */}
      <rect x="60" y="278" width="360" height="46" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="240" y="298" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">
        전체 반응: Zn + Cu²⁺ → Zn²⁺ + Cu
      </text>
      <text x="240" y="316" textAnchor="middle" fontSize="11" fill="#334155">
        E°cell = 0.34 − (−0.76) = +1.10 V
      </text>
    </svg>
  )
}
