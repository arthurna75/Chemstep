export default function RedoxElectronTransferDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="산화-환원 반응에서의 전자 이동 다이어그램"
      className="w-full h-auto"
    >
      {/* 배경 */}
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        산화-환원 반응: 동시에 일어나는 전자 이동
      </text>

      {/* ── 산화 박스 (Zn → Zn²⁺ + 2e⁻) ── */}
      <rect x="30" y="70" width="170" height="150" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="115" y="96" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        산화 (Oxidation)
      </text>
      <text x="115" y="130" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1E293B">Zn</text>
      <text x="115" y="152" textAnchor="middle" fontSize="11" fill="#3B82F6">전자 2개 잃음</text>
      <text x="115" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        Zn → Zn²⁺ + 2e⁻
      </text>
      <text x="115" y="192" textAnchor="middle" fontSize="10" fill="#64748B">산화수: 0 → +2</text>

      {/* ── 환원 박스 (Cu²⁺ + 2e⁻ → Cu) ── */}
      <rect x="280" y="70" width="170" height="150" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="365" y="96" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">
        환원 (Reduction)
      </text>
      <text x="365" y="130" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#1E293B">Cu²⁺</text>
      <text x="365" y="152" textAnchor="middle" fontSize="11" fill="#EF4444">전자 2개 얻음</text>
      <text x="365" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">
        Cu²⁺ + 2e⁻ → Cu
      </text>
      <text x="365" y="192" textAnchor="middle" fontSize="10" fill="#64748B">산화수: +2 → 0</text>

      {/* ── 전자 이동 화살표 ── */}
      <defs>
        <marker id="arrowElectron" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#6366F1" />
        </marker>
      </defs>
      <line x1="203" y1="140" x2="277" y2="140" stroke="#6366F1" strokeWidth="2.5" markerEnd="url(#arrowElectron)" />
      <text x="240" y="128" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#6366F1">2e⁻</text>
      <text x="240" y="158" textAnchor="middle" fontSize="10" fill="#4338CA">전자 이동</text>

      {/* ── 하단 요약 패널 ── */}
      <rect x="40" y="245" width="400" height="72" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="240" y="266" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">
        전체 반응: Zn + Cu²⁺ → Zn²⁺ + Cu
      </text>
      <text x="240" y="286" textAnchor="middle" fontSize="10" fill="#334155">
        Zn은 전자를 잃고 산화됨 (환원제) · Cu²⁺는 전자를 얻고 환원됨 (산화제)
      </text>
      <text x="240" y="304" textAnchor="middle" fontSize="10" fill="#334155">
        산화와 환원은 항상 동시에 일어난다 (잃은 전자 수 = 얻은 전자 수)
      </text>
    </svg>
  )
}
