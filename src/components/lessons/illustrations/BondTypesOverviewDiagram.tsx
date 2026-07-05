export default function BondTypesOverviewDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="화학 결합의 3가지 종류 비교: 이온 결합(전자 이동), 공유 결합(전자쌍 공유), 금속 결합(자유 전자) 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="22" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        화학 결합의 3가지 종류
      </text>

      {/* 구분선 */}
      <line x1="160" y1="36" x2="160" y2="330" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="320" y1="36" x2="320" y2="330" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ══════════ 컬럼 1: 이온 결합 ══════════ */}
      <text x="80" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">이온 결합</text>
      <text x="80" y="66" textAnchor="middle" fontSize="10" fill="#64748B">금속 + 비금속</text>

      {/* Na 원자 (금속) */}
      <circle cx="48" cy="105" r="18" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="48" y="109" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">Na</text>

      {/* Cl 원자 (비금속) */}
      <circle cx="112" cy="105" r="20" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="112" y="109" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">Cl</text>

      {/* 전자 이동 화살표 */}
      <defs>
        <marker id="ovArrowRed" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="#EF4444" />
        </marker>
        <marker id="ovArrowGray" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="#64748B" />
        </marker>
      </defs>
      <path d="M 62,88 C 75,72 85,72 96,88" fill="none" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#ovArrowRed)" />
      <text x="80" y="70" textAnchor="middle" fontSize="8" fill="#B91C1C">전자 이동</text>

      {/* 아래 화살표: 결과로 */}
      <line x1="80" y1="132" x2="80" y2="150" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#ovArrowGray)" />

      {/* 결과 이온쌍 */}
      <circle cx="52" cy="180" r="15" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="52" y="184" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">Na⁺</text>
      <circle cx="108" cy="180" r="19" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="108" y="184" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803D">Cl⁻</text>
      {/* 정전기적 인력 표시 */}
      <line x1="67" y1="180" x2="89" y2="180" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="2 2" />
      <text x="80" y="212" textAnchor="middle" fontSize="9" fill="#64748B">정전기적 인력</text>

      {/* 결과 박스 */}
      <rect x="45" y="228" width="70" height="26" rx="6" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="80" y="245" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400E">NaCl</text>

      <text x="80" y="278" textAnchor="middle" fontSize="9" fill="#475569">양이온 + 음이온</text>
      <text x="80" y="292" textAnchor="middle" fontSize="9" fill="#475569">→ 이온 결정</text>

      {/* ══════════ 컬럼 2: 공유 결합 ══════════ */}
      <text x="240" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">공유 결합</text>
      <text x="240" y="66" textAnchor="middle" fontSize="10" fill="#64748B">비금속 + 비금속</text>

      {/* 두 비금속 원자 */}
      <circle cx="212" cy="120" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="212" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">X</text>
      <circle cx="268" cy="120" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="268" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">X</text>

      {/* 공유 전자쌍 */}
      <line x1="234" y1="120" x2="246" y2="120" stroke="#F59E0B" strokeWidth="3" />
      <circle cx="234" cy="120" r="6" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="246" cy="120" r="6" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <text x="240" y="102" textAnchor="middle" fontSize="8" fill="#B45309">공유 전자쌍</text>

      <text x="240" y="165" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1E293B">X–X</text>

      <rect x="205" y="182" width="70" height="26" rx="6" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1.5" />
      <text x="240" y="199" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">X₂ 분자</text>

      <text x="240" y="232" textAnchor="middle" fontSize="9" fill="#475569">전자쌍을 공유</text>
      <text x="240" y="246" textAnchor="middle" fontSize="9" fill="#475569">→ 분자 형성</text>

      {/* ══════════ 컬럼 3: 금속 결합 ══════════ */}
      <text x="400" y="52" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7C3AED">금속 결합</text>
      <text x="400" y="66" textAnchor="middle" fontSize="10" fill="#64748B">금속 + 금속</text>

      {/* 금속 양이온 격자 (2x2) */}
      {[[372, 96], [428, 96], [372, 144], [428, 144]].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="15" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
          <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6D28D9">M⁺</text>
        </g>
      ))}

      {/* 자유 전자 (전자 바다) */}
      {[[400, 96], [372, 120], [428, 120], [400, 144], [400, 120]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="3.5" fill="#3B82F6" />
      ))}
      <text x="400" y="178" textAnchor="middle" fontSize="8" fill="#1D4ED8">자유 전자가 전 영역을 이동</text>

      <rect x="365" y="192" width="70" height="26" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="1.5" />
      <text x="400" y="209" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#6D28D9">전자 바다</text>

      <text x="400" y="242" textAnchor="middle" fontSize="9" fill="#475569">양이온 + 자유 전자</text>
      <text x="400" y="256" textAnchor="middle" fontSize="9" fill="#475569">→ 전도성 · 연성 · 전성</text>

      {/* 하단 구분선 및 요약 */}
      <line x1="30" y1="320" x2="450" y2="320" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="240" y="342" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">
        결합 종류는 원자들이 옥텟 규칙을 만족하는 방법에 따라 달라진다
      </text>
      <rect x="55" y="356" width="370" height="30" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="240" y="376" textAnchor="middle" fontSize="10" fill="#334155">
        전기 음성도 차 ≥ 1.7 → 이온 결합 경향 · 차이가 작을수록 → 공유 결합 경향
      </text>
    </svg>
  )
}
