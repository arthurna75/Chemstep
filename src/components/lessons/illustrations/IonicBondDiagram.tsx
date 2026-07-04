export default function IonicBondDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="이온 결합 형성 과정: Na가 Cl에게 전자를 이동하여 NaCl을 형성하는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        이온 결합 형성 (NaCl)
      </text>

      {/* ── Na 원자 (왼쪽) ── */}
      <g transform="translate(80, 100)">
        {/* 전자 껍질 1 */}
        <circle cx="0" cy="0" r="18" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* 전자 껍질 2 */}
        <circle cx="0" cy="0" r="35" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* 전자 껍질 3 */}
        <circle cx="0" cy="0" r="52" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* 핵 */}
        <circle cx="0" cy="0" r="16" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">Na</text>
        {/* 내부 전자 2개 (껍질1) */}
        <circle cx="0" cy="-18" r="4" fill="#3B82F6" />
        <circle cx="0" cy="18" r="4" fill="#3B82F6" />
        {/* 2번째 껍질 전자 8개 */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <circle
            key={i}
            cx={35 * Math.cos((angle * Math.PI) / 180)}
            cy={35 * Math.sin((angle * Math.PI) / 180)}
            r="4"
            fill="#3B82F6"
          />
        ))}
        {/* 원자가 전자 1개 (껍질3) — 강조 */}
        <circle cx="0" cy="-52" r="5" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
        <text x="0" y="-26" textAnchor="middle" fontSize="9" fill="#B91C1C">원자가 e⁻</text>
      </g>
      <text x="80" y="176" textAnchor="middle" fontSize="12" fill="#475569">Na 원자</text>
      <text x="80" y="191" textAnchor="middle" fontSize="11" fill="#64748B">전자 배치: 2,8,1</text>

      {/* ── 화살표 (전자 이동) ── */}
      <defs>
        <marker id="arrowBlue" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#EF4444" />
        </marker>
      </defs>
      <path
        d="M 148,60 C 200,30 240,30 290,60"
        fill="none"
        stroke="#EF4444"
        strokeWidth="2"
        strokeDasharray="5 3"
        markerEnd="url(#arrowBlue)"
      />
      <text x="218" y="34" textAnchor="middle" fontSize="10" fill="#B91C1C">전자 1개 이동</text>

      {/* ── Cl 원자 (오른쪽) ── */}
      <g transform="translate(360, 100)">
        {/* 전자 껍질 */}
        <circle cx="0" cy="0" r="18" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="0" cy="0" r="35" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        <circle cx="0" cy="0" r="52" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
        {/* 핵 */}
        <circle cx="0" cy="0" r="16" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
        <text x="0" y="5" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">Cl</text>
        {/* 껍질1 전자 2개 */}
        <circle cx="0" cy="-18" r="4" fill="#22C55E" />
        <circle cx="0" cy="18" r="4" fill="#22C55E" />
        {/* 껍질2 전자 8개 */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <circle
            key={i}
            cx={35 * Math.cos((angle * Math.PI) / 180)}
            cy={35 * Math.sin((angle * Math.PI) / 180)}
            r="4"
            fill="#22C55E"
          />
        ))}
        {/* 껍질3 전자 7개 */}
        {[0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6].map((angle, i) => (
          <circle
            key={i}
            cx={52 * Math.cos((angle * Math.PI) / 180)}
            cy={52 * Math.sin((angle * Math.PI) / 180)}
            r="4"
            fill="#22C55E"
          />
        ))}
      </g>
      <text x="360" y="176" textAnchor="middle" fontSize="12" fill="#475569">Cl 원자</text>
      <text x="360" y="191" textAnchor="middle" fontSize="11" fill="#64748B">전자 배치: 2,8,7</text>

      {/* ── 결과 이온 ── */}
      {/* Na+ */}
      <g transform="translate(120, 295)">
        <circle cx="0" cy="0" r="30" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2.5" />
        <text x="0" y="5" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1D4ED8">Na⁺</text>
        <text x="0" y="-38" textAnchor="middle" fontSize="11" fill="#1D4ED8">전자 배치: 2,8</text>
      </g>

      {/* + 기호 */}
      <text x="190" y="300" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#64748B">+</text>

      {/* Cl- */}
      <g transform="translate(260, 295)">
        <circle cx="0" cy="0" r="36" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2.5" />
        <text x="0" y="5" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#15803D">Cl⁻</text>
        <text x="0" y="-44" textAnchor="middle" fontSize="11" fill="#15803D">전자 배치: 2,8,8</text>
      </g>

      {/* → NaCl */}
      <text x="328" y="300" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#64748B">→</text>

      <g transform="translate(410, 295)">
        <rect x="-38" y="-22" width="76" height="44" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
        <text x="0" y="6" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#92400E">NaCl</text>
      </g>

      {/* 하단 레이블 */}
      <text x="185" y="360" textAnchor="middle" fontSize="11" fill="#64748B">이온쌍 형성</text>
      <text x="410" y="360" textAnchor="middle" fontSize="11" fill="#92400E">이온 결합 화합물</text>
    </svg>
  )
}
