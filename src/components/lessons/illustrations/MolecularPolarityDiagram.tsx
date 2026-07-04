export default function MolecularPolarityDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="분자의 극성: CO₂(무극성)와 H₂O(극성) 비교 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        분자의 극성 비교
      </text>

      {/* ── 구분선 ── */}
      <line x1="240" y1="40" x2="240" y2="370" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* ══ 왼쪽: CO₂ (무극성) ══ */}
      <text x="120" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">CO₂</text>
      <text x="120" y="74" textAnchor="middle" fontSize="11" fill="#64748B">직선형 구조 · 무극성 분자</text>

      {/* 원자 배치: O=C=O */}
      <circle cx="46" cy="140" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="46" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">O</text>

      <circle cx="120" cy="140" r="18" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2" />
      <text x="120" y="145" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#4338CA">C</text>

      <circle cx="194" cy="140" r="22" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="194" y="145" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#15803D">O</text>

      {/* 이중 결합 선 */}
      <line x1="68" y1="133" x2="102" y2="133" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="68" y1="147" x2="102" y2="147" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="138" y1="133" x2="172" y2="133" stroke="#22C55E" strokeWidth="2.5" />
      <line x1="138" y1="147" x2="172" y2="147" stroke="#22C55E" strokeWidth="2.5" />

      {/* 쌍극자 화살표 (왼쪽 O→C, 오른쪽 C→O — 방향 반대, 상쇄) */}
      <defs>
        <marker id="dipoleLeft" markerWidth="7" markerHeight="6" refX="0" refY="3" orient="auto">
          <polygon points="7 0, 0 3, 7 6" fill="#EF4444" />
        </marker>
        <marker id="dipoleRight" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="#EF4444" />
        </marker>
      </defs>
      <line x1="100" y1="165" x2="68" y2="165" stroke="#EF4444" strokeWidth="2" markerEnd="url(#dipoleLeft)" />
      <text x="84" y="158" textAnchor="middle" fontSize="9" fill="#B91C1C">δ⁻←δ⁺</text>
      <line x1="140" y1="165" x2="172" y2="165" stroke="#EF4444" strokeWidth="2" markerEnd="url(#dipoleRight)" />
      <text x="156" y="158" textAnchor="middle" fontSize="9" fill="#B91C1C">δ⁺→δ⁻</text>

      {/* 상쇄 표시 */}
      <text x="120" y="190" textAnchor="middle" fontSize="11" fill="#DC2626" fontWeight="bold">← 서로 상쇄 →</text>
      <text x="120" y="208" textAnchor="middle" fontSize="11" fill="#64748B">합벡터 = 0</text>

      {/* 무극성 판정 박스 */}
      <rect x="60" y="220" width="120" height="28" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="120" y="239" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">무극성 분자</text>

      {/* 비공유 전자쌍 (O 좌우) */}
      <line x1="22" y1="132" x2="30" y2="132" stroke="#22C55E" strokeWidth="2" />
      <line x1="22" y1="148" x2="30" y2="148" stroke="#22C55E" strokeWidth="2" />
      <line x1="210" y1="132" x2="218" y2="132" stroke="#22C55E" strokeWidth="2" />
      <line x1="210" y1="148" x2="218" y2="148" stroke="#22C55E" strokeWidth="2" />

      {/* 특성 */}
      <text x="120" y="272" textAnchor="middle" fontSize="10" fill="#475569">• 물에 잘 녹지 않음</text>
      <text x="120" y="288" textAnchor="middle" fontSize="10" fill="#475569">• 끓는점 −78.5°C (승화)</text>
      <text x="120" y="304" textAnchor="middle" fontSize="10" fill="#475569">• 무극성 용매에 잘 녹음</text>

      {/* ══ 오른쪽: H₂O (극성) ══ */}
      <text x="360" y="58" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#DC2626">H₂O</text>
      <text x="360" y="74" textAnchor="middle" fontSize="11" fill="#64748B">굽은형(V자) 구조 · 극성 분자</text>

      {/* O 원자 (중앙 위) */}
      <circle cx="360" cy="110" r="24" fill="#DCFCE7" stroke="#22C55E" strokeWidth="2" />
      <text x="360" y="115" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#15803D">O</text>

      {/* H 원자 (왼쪽 아래) */}
      <circle cx="308" cy="165" r="18" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="308" y="170" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">H</text>

      {/* H 원자 (오른쪽 아래) */}
      <circle cx="412" cy="165" r="18" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="412" y="170" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">H</text>

      {/* O-H 결합 선 */}
      <line x1="340" y1="128" x2="322" y2="150" stroke="#94A3B8" strokeWidth="2.5" />
      <line x1="380" y1="128" x2="398" y2="150" stroke="#94A3B8" strokeWidth="2.5" />

      {/* 쌍극자 화살표 (H→O 방향, 두 화살표 모두 위쪽 향함) */}
      <defs>
        <marker id="arrowUp1" markerWidth="7" markerHeight="6" refX="3.5" refY="6" orient="auto">
          <polygon points="0 6, 3.5 0, 7 6" fill="#EF4444" />
        </marker>
      </defs>
      <line x1="320" y1="152" x2="338" y2="132" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowUp1)" />
      <line x1="400" y1="152" x2="382" y2="132" stroke="#EF4444" strokeWidth="2" markerEnd="url(#arrowUp1)" />

      {/* δ⁺, δ⁻ 표시 */}
      <text x="300" y="188" textAnchor="middle" fontSize="10" fill="#B91C1C">δ⁺</text>
      <text x="420" y="188" textAnchor="middle" fontSize="10" fill="#B91C1C">δ⁺</text>
      <text x="360" y="97" textAnchor="middle" fontSize="10" fill="#B91C1C">δ⁻</text>

      {/* 비공유 전자쌍 표시 (O 위) */}
      <line x1="344" y1="88" x2="354" y2="88" stroke="#22C55E" strokeWidth="2" />
      <line x1="366" y1="88" x2="376" y2="88" stroke="#22C55E" strokeWidth="2" />

      {/* 합벡터 화살표 (위 방향) */}
      <defs>
        <marker id="arrowNet" markerWidth="8" markerHeight="6" refX="4" refY="6" orient="auto">
          <polygon points="0 6, 4 0, 8 6" fill="#7C3AED" />
        </marker>
      </defs>
      <line x1="360" y1="195" x2="360" y2="215" stroke="#7C3AED" strokeWidth="2.5" strokeDasharray="4 2" markerEnd="url(#arrowNet)" />
      <text x="360" y="232" textAnchor="middle" fontSize="10" fill="#7C3AED">합벡터 ≠ 0</text>

      {/* 극성 판정 박스 */}
      <rect x="300" y="243" width="120" height="28" rx="6" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
      <text x="360" y="262" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">극성 분자</text>

      {/* 특성 */}
      <text x="360" y="290" textAnchor="middle" fontSize="10" fill="#475569">• 물에 잘 녹음 (극성 용매)</text>
      <text x="360" y="306" textAnchor="middle" fontSize="10" fill="#475569">• 끓는점 100°C (높음)</text>
      <text x="360" y="322" textAnchor="middle" fontSize="10" fill="#475569">• 수소 결합 형성</text>

      {/* ── 하단 요약 ── */}
      <line x1="30" y1="340" x2="450" y2="340" stroke="#E2E8F0" strokeWidth="1.5" />
      <text x="240" y="360" textAnchor="middle" fontSize="11" fill="#475569">
        결합 쌍극자 합 = 0 → 무극성 / 합 ≠ 0 → 극성
      </text>
      <text x="240" y="378" textAnchor="middle" fontSize="10" fill="#94A3B8">
        대칭 구조 → 상쇄 → 무극성 | 비대칭 구조 → 미상쇄 → 극성
      </text>
    </svg>
  )
}
