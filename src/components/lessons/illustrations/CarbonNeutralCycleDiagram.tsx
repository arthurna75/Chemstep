export default function CarbonNeutralCycleDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="바이오 연료의 탄소 순환(탄소중립)과 화석 연료의 일방향 탄소 배출 비교 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        탄소 순환: 바이오 연료 vs 화석 연료
      </text>

      {/* ══ 왼쪽: 바이오 연료 순환 (원형) ══ */}
      <text x="130" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        바이오 연료 (탄소중립 순환)
      </text>

      <defs>
        <marker id="arrowGreen" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="#22C55E" />
        </marker>
      </defs>

      {/* 순환 화살표 (원형 3단계: 식물 성장 → 연소 → 대기 CO2 → 다시 식물) */}
      <path d="M 130 90 A 70 70 0 0 1 195 165" fill="none" stroke="#22C55E" strokeWidth="3" markerEnd="url(#arrowGreen)" />
      <path d="M 195 220 A 70 70 0 0 1 90 235" fill="none" stroke="#22C55E" strokeWidth="3" markerEnd="url(#arrowGreen)" />
      <path d="M 65 200 A 70 70 0 0 1 100 100" fill="none" stroke="#22C55E" strokeWidth="3" markerEnd="url(#arrowGreen)" />

      {/* 노드 1: 식물 성장 (CO2 흡수) */}
      <circle cx="130" cy="90" r="34" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="130" y="86" textAnchor="middle" fontSize="18">🌱</text>
      <text x="130" y="102" textAnchor="middle" fontSize="8.5" fill="#065F46">CO₂ 흡수</text>

      {/* 노드 2: 바이오연료 연소 */}
      <circle cx="205" cy="200" r="34" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="205" y="196" textAnchor="middle" fontSize="18">🔥</text>
      <text x="205" y="212" textAnchor="middle" fontSize="8.5" fill="#065F46">연소·CO₂ 배출</text>

      {/* 노드 3: 대기 중 CO2 */}
      <circle cx="60" cy="200" r="34" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="60" y="196" textAnchor="middle" fontSize="18">☁️</text>
      <text x="60" y="212" textAnchor="middle" fontSize="8.5" fill="#065F46">대기 중 CO₂</text>

      <rect x="55" y="252" width="150" height="24" rx="6" fill="#DCFCE7" stroke="#22C55E" strokeWidth="1" />
      <text x="130" y="268" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#065F46">순배출 = 0 (탄소중립)</text>

      {/* ══ 오른쪽: 화석 연료 일방향 배출 ══ */}
      <text x="360" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">
        화석 연료 (일방향 배출)
      </text>

      {/* 지하 매장 탄소 */}
      <rect x="310" y="80" width="100" height="50" rx="6" fill="#F3F4F6" stroke="#78716C" strokeWidth="1.5" />
      <text x="360" y="102" textAnchor="middle" fontSize="16">⛏️</text>
      <text x="360" y="120" textAnchor="middle" fontSize="9" fill="#44403C">지하 매장 탄소 (수억 년)</text>

      <defs>
        <marker id="arrowRed" markerWidth="9" markerHeight="7" refX="7" refY="3.5" orient="auto">
          <polygon points="0 0, 9 3.5, 0 7" fill="#EF4444" />
        </marker>
      </defs>
      <line x1="360" y1="132" x2="360" y2="168" stroke="#EF4444" strokeWidth="3" markerEnd="url(#arrowRed)" />
      <text x="405" y="153" textAnchor="middle" fontSize="9" fill="#B91C1C">채굴·연소</text>

      {/* 대기 중 CO2 증가 (한 방향, 되돌아가지 않음) */}
      <rect x="305" y="172" width="110" height="50" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
      <text x="360" y="194" textAnchor="middle" fontSize="16">☁️</text>
      <text x="360" y="212" textAnchor="middle" fontSize="9" fill="#991B1B">대기 중 CO₂ 증가</text>

      <rect x="305" y="252" width="110" height="24" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1" />
      <text x="360" y="268" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#991B1B">순배출 &gt; 0 (온난화)</text>

      {/* ── 구분선 ── */}
      <line x1="240" y1="55" x2="240" y2="280" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* ── 하단 설명 ── */}
      <line x1="30" y1="296" x2="450" y2="296" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="240" y="316" textAnchor="middle" fontSize="10" fill="#334155">
        바이오 연료: 식물이 흡수한 CO₂만큼만 연소로 되돌려 순환 (탄소중립)
      </text>
      <text x="240" y="334" textAnchor="middle" fontSize="10" fill="#334155">
        화석 연료: 땅속에 갇혀 있던 탄소를 대기로 새로 방출 (순배출 증가)
      </text>
    </svg>
  )
}
