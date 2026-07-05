export default function HydrocarbonStructureDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="알케인, 알켄, 알카인의 구조 비교 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        탄화수소의 분류: 결합 형태 비교
      </text>

      {/* ── 열 제목 ── */}
      <text x="90" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">알케인 (에탄, C₂H₆)</text>
      <text x="240" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">알켄 (에틸렌, C₂H₄)</text>
      <text x="390" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">알카인 (아세틸렌, C₂H₂)</text>

      {/* ══ 알케인: 단일 결합 (에탄, C-C 단일 + 각 C에 H 3개) ══ */}
      <g>
        <circle cx="65" cy="140" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
        <text x="65" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">C</text>
        <circle cx="115" cy="140" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
        <text x="115" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">C</text>
        {/* C-C 단일 결합 */}
        <line x1="85" y1="140" x2="95" y2="140" stroke="#1D4ED8" strokeWidth="2.5" />

        {/* 각 C에 붙은 H 3개 */}
        {[[45, 115], [45, 165], [30, 140]].map(([hx, hy], i) => (
          <g key={`hL-${i}`}>
            <line x1="65" y1="140" x2={hx} y2={hy} stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx={hx} cy={hy} r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <text x={hx} y={hy + 4} textAnchor="middle" fontSize="9" fill="#475569">H</text>
          </g>
        ))}
        {[[135, 115], [135, 165], [150, 140]].map(([hx, hy], i) => (
          <g key={`hR-${i}`}>
            <line x1="115" y1="140" x2={hx} y2={hy} stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx={hx} cy={hy} r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <text x={hx} y={hy + 4} textAnchor="middle" fontSize="9" fill="#475569">H</text>
          </g>
        ))}

        <text x="90" y="205" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E293B">C–C</text>
        <rect x="48" y="216" width="84" height="20" rx="4" fill="#DBEAFE" />
        <text x="90" y="230" textAnchor="middle" fontSize="10.5" fill="#1D4ED8">단일 결합 (포화)</text>
        <text x="90" y="254" textAnchor="middle" fontSize="10" fill="#64748B">일반식 CₙH₂ₙ₊₂</text>
      </g>

      {/* ══ 알켄: 이중 결합 (에틸렌, C=C + 각 C에 H 2개) ══ */}
      <g>
        <circle cx="215" cy="140" r="20" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
        <text x="215" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">C</text>
        <circle cx="265" cy="140" r="20" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
        <text x="265" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">C</text>
        {/* C=C 이중 결합 */}
        <line x1="235" y1="135" x2="245" y2="135" stroke="#15803D" strokeWidth="2.5" />
        <line x1="235" y1="145" x2="245" y2="145" stroke="#15803D" strokeWidth="2.5" />

        {[[195, 115], [195, 165]].map(([hx, hy], i) => (
          <g key={`heL-${i}`}>
            <line x1="215" y1="140" x2={hx} y2={hy} stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx={hx} cy={hy} r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <text x={hx} y={hy + 4} textAnchor="middle" fontSize="9" fill="#475569">H</text>
          </g>
        ))}
        {[[285, 115], [285, 165]].map(([hx, hy], i) => (
          <g key={`heR-${i}`}>
            <line x1="265" y1="140" x2={hx} y2={hy} stroke="#94A3B8" strokeWidth="1.5" />
            <circle cx={hx} cy={hy} r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
            <text x={hx} y={hy + 4} textAnchor="middle" fontSize="9" fill="#475569">H</text>
          </g>
        ))}

        <text x="240" y="205" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E293B">C=C</text>
        <rect x="198" y="216" width="84" height="20" rx="4" fill="#DCFCE7" />
        <text x="240" y="230" textAnchor="middle" fontSize="10.5" fill="#15803D">이중 결합 (불포화)</text>
        <text x="240" y="254" textAnchor="middle" fontSize="10" fill="#64748B">일반식 CₙH₂ₙ</text>
      </g>

      {/* ══ 알카인: 삼중 결합 (아세틸렌, C≡C + 각 C에 H 1개) ══ */}
      <g>
        <circle cx="368" cy="140" r="20" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="368" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B91C1C">C</text>
        <circle cx="418" cy="140" r="20" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
        <text x="418" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B91C1C">C</text>
        {/* C≡C 삼중 결합 */}
        <line x1="388" y1="132" x2="398" y2="132" stroke="#B91C1C" strokeWidth="2.5" />
        <line x1="388" y1="140" x2="398" y2="140" stroke="#B91C1C" strokeWidth="2.5" />
        <line x1="388" y1="148" x2="398" y2="148" stroke="#B91C1C" strokeWidth="2.5" />

        <g>
          <line x1="368" y1="140" x2="348" y2="140" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="348" cy="140" r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="348" y="144" textAnchor="middle" fontSize="9" fill="#475569">H</text>
        </g>
        <g>
          <line x1="418" y1="140" x2="438" y2="140" stroke="#94A3B8" strokeWidth="1.5" />
          <circle cx="438" cy="140" r="9" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="438" y="144" textAnchor="middle" fontSize="9" fill="#475569">H</text>
        </g>

        <text x="393" y="205" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E293B">C≡C</text>
        <rect x="351" y="216" width="84" height="20" rx="4" fill="#FEE2E2" />
        <text x="393" y="230" textAnchor="middle" fontSize="10.5" fill="#B91C1C">삼중 결합 (불포화)</text>
        <text x="393" y="254" textAnchor="middle" fontSize="10" fill="#64748B">일반식 CₙH₂ₙ₋₂</text>
      </g>

      {/* ── 구분선 ── */}
      <line x1="30" y1="270" x2="450" y2="270" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* ── 범례 ── */}
      <circle cx="60" cy="292" r="7" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="72" y="296" fontSize="10" fill="#334155">단결합 = 포화 탄화수소</text>
      <circle cx="220" cy="292" r="7" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1.5" />
      <text x="232" y="296" fontSize="10" fill="#334155">이중결합 1개 = 불포화 (알켄)</text>
      <circle cx="60" cy="314" r="7" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
      <text x="72" y="318" fontSize="10" fill="#334155">삼중결합 1개 = 불포화 (알카인)</text>
      <text x="330" y="318" fontSize="10" fill="#64748B">회색 원 = 수소(H)</text>
    </svg>
  )
}
