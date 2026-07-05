export default function BondEnergyDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-label="결합 에너지로 ΔH 계산하기: H₂ + ½O₂ → H₂O 반응의 결합 끊기·형성 에너지 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        결합 에너지로 ΔH 계산 — H₂ + ½O₂ → H₂O
      </text>

      <defs>
        <marker id="beArrowUp" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
          <path d="M0,8 L4,0 L8,8 z" fill="#F97316" />
        </marker>
        <marker id="beArrowDown" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto">
          <path d="M0,0 L4,8 L8,0 z" fill="#3B82F6" />
        </marker>
        <marker id="beArrowNet" markerWidth="8" markerHeight="8" refX="4" refY="1" orient="auto">
          <path d="M0,0 L4,8 L8,0 z" fill="#DC2626" />
        </marker>
      </defs>

      {/* ── 에너지 레벨 박스 (왼쪽) ── */}

      {/* 최상단: 원자 상태 (결합 모두 끊어짐) */}
      <rect x="24" y="46" width="188" height="46" rx="6" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" />
      <text x="118" y="66" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#C2410C">2H + 2H + O + O (원자)</text>
      <text x="118" y="82" textAnchor="middle" fontSize="9" fill="#9A3412">최고 에너지 상태 (결합 없음)</text>

      {/* 중간: 반응물 H₂ + ½O₂ */}
      <rect x="24" y="150" width="188" height="46" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="118" y="170" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">H₂(g) + ½O₂(g)</text>
      <text x="118" y="186" textAnchor="middle" fontSize="10" fill="#1D4ED8">반응물</text>

      {/* 하단: 생성물 H₂O */}
      <rect x="24" y="270" width="188" height="46" rx="6" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2" />
      <text x="118" y="290" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">H₂O(g)</text>
      <text x="118" y="306" textAnchor="middle" fontSize="10" fill="#166534">생성물 (최저 에너지)</text>

      {/* ── 화살표 ── */}

      {/* 반응물 → 원자 (결합 끊기, 위로, 주황) */}
      <line x1="70" y1="150" x2="70" y2="94" stroke="#F97316" strokeWidth="2.5" markerEnd="url(#beArrowUp)" />
      <text x="46" y="128" fontSize="9" fontWeight="bold" fill="#C2410C">흡열</text>
      <text x="46" y="140" fontSize="9" fill="#9A3412">+685 kJ</text>

      {/* 원자 → 생성물 (결합 형성, 아래로, 파랑) */}
      <line x1="166" y1="92" x2="166" y2="270" stroke="#3B82F6" strokeWidth="2.5" markerEnd="url(#beArrowDown)" />
      <text x="172" y="176" fontSize="9" fontWeight="bold" fill="#1D4ED8">발열</text>
      <text x="172" y="188" fontSize="9" fill="#1E40AF">−926 kJ</text>

      {/* 반응물 → 생성물 (순 ΔH, 점선 빨강) */}
      <line x1="30" y1="196" x2="30" y2="270" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#beArrowNet)" />
      <text x="4" y="238" fontSize="9" fontWeight="bold" fill="#991B1B">ΔH</text>

      {/* ── 우측 설명 패널 ── */}
      <rect x="228" y="46" width="228" height="270" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="342" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">결합 에너지 (kJ/mol)</text>

      <text x="238" y="92" fontSize="11" fontWeight="bold" fill="#C2410C">① 끊는 결합 (반응물, 흡열 +)</text>
      <text x="238" y="108" fontSize="10" fill="#334155">H–H = 436</text>
      <text x="238" y="122" fontSize="10" fill="#334155">½ × O=O = ½ × 498 = 249</text>
      <text x="238" y="138" fontSize="10" fontWeight="bold" fill="#9A3412">합계 = +685 kJ</text>

      <line x1="238" y1="148" x2="446" y2="148" stroke="#E2E8F0" strokeWidth="1" />

      <text x="238" y="168" fontSize="11" fontWeight="bold" fill="#1D4ED8">② 형성 결합 (생성물, 발열 −)</text>
      <text x="238" y="184" fontSize="10" fill="#334155">2 × O–H = 2 × 463 = 926</text>
      <text x="238" y="200" fontSize="10" fontWeight="bold" fill="#1E40AF">합계 = −926 kJ</text>

      <line x1="238" y1="210" x2="446" y2="210" stroke="#E2E8F0" strokeWidth="1" />

      <rect x="238" y="220" width="208" height="82" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
      <text x="248" y="238" fontSize="11" fontWeight="bold" fill="#991B1B">③ 순 ΔH 계산</text>
      <text x="248" y="254" fontSize="10" fill="#7F1D1D">ΔH = Σ(끊는 결합) − Σ(형성 결합)</text>
      <text x="248" y="270" fontSize="10" fill="#7F1D1D">ΔH = 685 − 926</text>
      <text x="248" y="290" fontSize="12" fontWeight="bold" fill="#991B1B">ΔH ≈ −241 kJ (발열)</text>
    </svg>
  )
}
