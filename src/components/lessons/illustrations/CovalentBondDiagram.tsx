export default function CovalentBondDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="공유 결합 종류: 단일, 2중, 3중 결합 비교 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        공유 결합의 종류
      </text>

      {/* ── 열 제목 ── */}
      <text x="120" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">단일 결합 (H₂)</text>
      <text x="240" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">2중 결합 (O₂)</text>
      <text x="368" y="58" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">3중 결합 (N₂)</text>

      {/* ══ 단일 결합: H₂ ══ */}
      {/* H 원자 (왼쪽) */}
      <circle cx="75" cy="120" r="24" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="75" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1D4ED8">H</text>
      {/* H 원자 (오른쪽) */}
      <circle cx="165" cy="120" r="24" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="165" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1D4ED8">H</text>
      {/* 공유 전자쌍 (겹치는 원) */}
      <circle cx="99" cy="120" r="8" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="99" cy="120" r="4" fill="#F59E0B" />
      {/* 결합 선 표현 */}
      <line x1="99" y1="120" x2="141" y2="120" stroke="#F59E0B" strokeWidth="3" />
      <circle cx="141" cy="120" r="8" fill="#FDE68A" stroke="#F59E0B" strokeWidth="1.5" />
      <circle cx="141" cy="120" r="4" fill="#F59E0B" />
      {/* 루이스 구조 */}
      <text x="120" y="165" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1E293B">H–H</text>
      {/* 결합 차수 */}
      <rect x="78" y="180" width="84" height="20" rx="4" fill="#DBEAFE" />
      <text x="120" y="194" textAnchor="middle" fontSize="11" fill="#1D4ED8">결합 차수: 1</text>
      {/* 결합 에너지/길이 */}
      <text x="120" y="222" textAnchor="middle" fontSize="10" fill="#64748B">결합 에너지</text>
      <text x="120" y="236" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3B82F6">436 kJ/mol</text>
      <text x="120" y="254" textAnchor="middle" fontSize="10" fill="#64748B">결합 길이</text>
      <text x="120" y="268" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#3B82F6">74 pm</text>

      {/* ══ 2중 결합: O₂ ══ */}
      <circle cx="198" cy="120" r="26" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="198" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#15803D">O</text>
      <circle cx="282" cy="120" r="26" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="282" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#15803D">O</text>
      {/* 2개 공유 전자쌍 */}
      <line x1="224" y1="110" x2="256" y2="110" stroke="#22C55E" strokeWidth="3" />
      <line x1="224" y1="130" x2="256" y2="130" stroke="#22C55E" strokeWidth="3" />
      <circle cx="224" cy="110" r="5" fill="#22C55E" />
      <circle cx="224" cy="130" r="5" fill="#22C55E" />
      <circle cx="256" cy="110" r="5" fill="#22C55E" />
      <circle cx="256" cy="130" r="5" fill="#22C55E" />
      {/* 비공유 전자쌍 표시 (O의 비공유 전자쌍) */}
      <line x1="175" y1="108" x2="185" y2="108" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="175" y1="132" x2="185" y2="132" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="295" y1="108" x2="305" y2="108" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="295" y1="132" x2="305" y2="132" stroke="#22C55E" strokeWidth="2.5" />
      {/* 루이스 구조 */}
      <text x="240" y="165" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1E293B">O=O</text>
      <rect x="198" y="180" width="84" height="20" rx="4" fill="#DCFCE7" />
      <text x="240" y="194" textAnchor="middle" fontSize="11" fill="#15803D">결합 차수: 2</text>
      <text x="240" y="222" textAnchor="middle" fontSize="10" fill="#64748B">결합 에너지</text>
      <text x="240" y="236" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#22C55E">498 kJ/mol</text>
      <text x="240" y="254" textAnchor="middle" fontSize="10" fill="#64748B">결합 길이</text>
      <text x="240" y="268" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#22C55E">121 pm</text>

      {/* ══ 3중 결합: N₂ ══ */}
      <circle cx="322" cy="120" r="26" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
      <text x="322" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#B91C1C">N</text>
      <circle cx="414" cy="120" r="26" fill="#FEE2E2" stroke="#EF4444" strokeWidth="2" />
      <text x="414" y="125" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#B91C1C">N</text>
      {/* 3개 공유 전자쌍 */}
      <line x1="348" y1="108" x2="388" y2="108" stroke="#EF4444" strokeWidth="3" />
      <line x1="348" y1="120" x2="388" y2="120" stroke="#EF4444" strokeWidth="3" />
      <line x1="348" y1="132" x2="388" y2="132" stroke="#EF4444" strokeWidth="3" />
      <circle cx="348" cy="108" r="4" fill="#EF4444" />
      <circle cx="348" cy="120" r="4" fill="#EF4444" />
      <circle cx="348" cy="132" r="4" fill="#EF4444" />
      <circle cx="388" cy="108" r="4" fill="#EF4444" />
      <circle cx="388" cy="120" r="4" fill="#EF4444" />
      <circle cx="388" cy="132" r="4" fill="#EF4444" />
      {/* 비공유 전자쌍 (각 N에 1쌍) */}
      <line x1="300" y1="120" x2="310" y2="120" stroke="#EF4444" strokeWidth="2.5" />
      <line x1="426" y1="120" x2="436" y2="120" stroke="#EF4444" strokeWidth="2.5" />
      {/* 루이스 구조 */}
      <text x="368" y="165" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#1E293B">N≡N</text>
      <rect x="326" y="180" width="84" height="20" rx="4" fill="#FEE2E2" />
      <text x="368" y="194" textAnchor="middle" fontSize="11" fill="#B91C1C">결합 차수: 3</text>
      <text x="368" y="222" textAnchor="middle" fontSize="10" fill="#64748B">결합 에너지</text>
      <text x="368" y="236" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#EF4444">945 kJ/mol</text>
      <text x="368" y="254" textAnchor="middle" fontSize="10" fill="#64748B">결합 길이</text>
      <text x="368" y="268" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#EF4444">110 pm</text>

      {/* ── 구분선 ── */}
      <line x1="30" y1="284" x2="450" y2="284" stroke="#E2E8F0" strokeWidth="1.5" />

      {/* ── 결합 차수 경향 요약 ── */}
      <text x="240" y="308" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">
        결합 차수 증가에 따른 변화
      </text>
      {/* 화살표 좌→우: 결합 차수 증가 */}
      <defs>
        <marker id="arrowRight" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#64748B" />
        </marker>
      </defs>
      <line x1="60" y1="330" x2="420" y2="330" stroke="#64748B" strokeWidth="1.5" markerEnd="url(#arrowRight)" />
      <text x="240" y="346" textAnchor="middle" fontSize="11" fill="#64748B">결합 차수 증가 (1 → 2 → 3)</text>

      {/* 결합 에너지 증가 */}
      <text x="90" y="368" textAnchor="middle" fontSize="10" fill="#3B82F6">↑ 결합 에너지</text>
      <text x="240" y="368" textAnchor="middle" fontSize="10" fill="#22C55E">강해짐</text>
      <text x="390" y="368" textAnchor="middle" fontSize="10" fill="#EF4444">↑ 결합 에너지</text>

      {/* 결합 길이 감소 */}
      <text x="90" y="386" textAnchor="middle" fontSize="10" fill="#3B82F6">↓ 결합 길이</text>
      <text x="240" y="386" textAnchor="middle" fontSize="10" fill="#22C55E">짧아짐</text>
      <text x="390" y="386" textAnchor="middle" fontSize="10" fill="#EF4444">↓ 결합 길이</text>
    </svg>
  )
}
