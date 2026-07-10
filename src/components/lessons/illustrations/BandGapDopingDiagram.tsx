export default function BandGapDopingDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="밴드갭과 도핑 원리 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        밴드갭 크기와 도체 · 반도체 · 절연체
      </text>

      {/* 도체 */}
      <g>
        <rect x="30" y="60" width="120" height="140" fill="none" />
        <text x="90" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">도체</text>
        <rect x="50" y="70" width="80" height="30" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="90" y="90" textAnchor="middle" fontSize="9" fill="#1D4ED8">전도띠</text>
        <rect x="50" y="150" width="80" height="30" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
        <text x="90" y="170" textAnchor="middle" fontSize="9" fill="#1E293B">원자가 띠</text>
        <text x="90" y="130" textAnchor="middle" fontSize="9" fill="#B91C1C">밴드갭 ≈ 0</text>
      </g>

      {/* 반도체 */}
      <g>
        <text x="240" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">반도체</text>
        <rect x="200" y="70" width="80" height="30" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="240" y="90" textAnchor="middle" fontSize="9" fill="#1D4ED8">전도띠</text>
        <rect x="200" y="150" width="80" height="30" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
        <text x="240" y="170" textAnchor="middle" fontSize="9" fill="#1E293B">원자가 띠</text>
        <line x1="240" y1="100" x2="240" y2="150" stroke="#B91C1C" strokeWidth="2" strokeDasharray="4 3" />
        <text x="290" y="128" textAnchor="middle" fontSize="9" fill="#B91C1C">밴드갭</text>
        <text x="290" y="140" textAnchor="middle" fontSize="9" fill="#B91C1C">(작음)</text>
      </g>

      {/* 절연체 */}
      <g>
        <text x="390" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">절연체</text>
        <rect x="350" y="65" width="80" height="25" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
        <text x="390" y="82" textAnchor="middle" fontSize="9" fill="#1D4ED8">전도띠</text>
        <rect x="350" y="160" width="80" height="30" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
        <text x="390" y="180" textAnchor="middle" fontSize="9" fill="#1E293B">원자가 띠</text>
        <text x="440" y="128" textAnchor="middle" fontSize="9" fill="#B91C1C">밴드갭</text>
        <text x="440" y="140" textAnchor="middle" fontSize="9" fill="#B91C1C">(매우 큼)</text>
      </g>

      {/* 하단 도핑 격자 비교 */}
      <rect x="30" y="230" width="200" height="120" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="252" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">n형 (P 도핑)</text>
      <circle cx="90" cy="290" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <text x="90" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">Si</text>
      <circle cx="130" cy="290" r="14" fill="#FCD34D" stroke="#B45309" strokeWidth="1.5" />
      <text x="130" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">P</text>
      <circle cx="170" cy="290" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <text x="170" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">Si</text>
      <circle cx="150" cy="260" r="4" fill="#1D4ED8" />
      <text x="150" y="325" textAnchor="middle" fontSize="9" fill="#1D4ED8">여분의 전자 → 다수 캐리어</text>

      <rect x="250" y="230" width="200" height="120" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="350" y="252" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">p형 (B 도핑)</text>
      <circle cx="310" cy="290" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <text x="310" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">Si</text>
      <circle cx="350" cy="290" r="14" fill="#FCA5A5" stroke="#B91C1C" strokeWidth="1.5" />
      <text x="350" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">B</text>
      <circle cx="390" cy="290" r="14" fill="#94A3B8" stroke="#475569" strokeWidth="1.5" />
      <text x="390" y="294" textAnchor="middle" fontSize="9" fill="#1E293B">Si</text>
      <circle cx="370" cy="260" r="4" fill="none" stroke="#B91C1C" strokeWidth="1.5" strokeDasharray="2 1" />
      <text x="370" y="325" textAnchor="middle" fontSize="9" fill="#B91C1C">정공(빈자리) → 다수 캐리어</text>
    </svg>
  )
}
