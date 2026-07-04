export default function HessLawDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="헤스 법칙 에너지 경로 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        헤스 법칙 (Hess&apos;s Law) — C의 연소 예시
      </text>

      <defs>
        <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#3B82F6" />
        </marker>
        <marker id="arrowGreen" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#22C55E" />
        </marker>
        <marker id="arrowOr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#F97316" />
        </marker>
      </defs>

      {/* ── 에너지 레벨 박스 ── */}

      {/* 반응물: C(s) + O₂(g) — 상단 */}
      <rect x="30" y="70" width="170" height="48" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="115" y="90" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">C(s) + O₂(g)</text>
      <text x="115" y="108" textAnchor="middle" fontSize="10" fill="#1D4ED8">반응물 (기준점)</text>

      {/* 중간: CO(g) + ½O₂(g) — 중간 높이 */}
      <rect x="30" y="168" width="170" height="48" rx="6" fill="#FEF9C3" stroke="#FACC15" strokeWidth="2" />
      <text x="115" y="188" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854D0E">CO(g) + ½O₂(g)</text>
      <text x="115" y="206" textAnchor="middle" fontSize="10" fill="#92400E">중간 상태</text>

      {/* 생성물: CO₂(g) — 하단 */}
      <rect x="30" y="262" width="170" height="48" rx="6" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2" />
      <text x="115" y="282" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">CO₂(g)</text>
      <text x="115" y="300" textAnchor="middle" fontSize="10" fill="#166534">생성물 (최종 상태)</text>

      {/* ── 경로 화살표 ── */}

      {/* 경로 1: 직접 반응 (C → CO₂, 왼쪽 화살표) */}
      <line x1="60" y1="118" x2="60" y2="262" stroke="#3B82F6" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
      <rect x="8" y="178" width="42" height="34" rx="3" fill="white" stroke="#93C5FD" strokeWidth="1" />
      <text x="29" y="192" textAnchor="middle" fontSize="9" fill="#1D4ED8" fontWeight="bold">경로①</text>
      <text x="29" y="204" textAnchor="middle" fontSize="9" fill="#1D4ED8">ΔH₁</text>

      {/* 경로 2a: C → CO (녹색, 2단계 1) */}
      <line x1="130" y1="118" x2="130" y2="168" stroke="#22C55E" strokeWidth="2.5" markerEnd="url(#arrowGreen)" />
      <text x="148" y="148" fontSize="9" fill="#166534" fontWeight="bold">ΔH₂</text>
      <text x="148" y="160" fontSize="9" fill="#166534">−111 kJ</text>

      {/* 경로 2b: CO → CO₂ (주황, 2단계 2) */}
      <line x1="130" y1="216" x2="130" y2="262" stroke="#F97316" strokeWidth="2.5" markerEnd="url(#arrowOr)" />
      <text x="148" y="242" fontSize="9" fill="#EA580C" fontWeight="bold">ΔH₃</text>
      <text x="148" y="254" fontSize="9" fill="#EA580C">−283 kJ</text>

      {/* ── 우측 설명 패널 ── */}
      <rect x="228" y="60" width="228" height="250" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="342" y="84" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">헤스 법칙 적용</text>

      <text x="238" y="108" fontSize="11" fontWeight="bold" fill="#1D4ED8">경로 ①: 직접 반응</text>
      <text x="238" y="124" fontSize="10" fill="#334155">C + O₂ → CO₂</text>
      <text x="238" y="138" fontSize="10" fill="#334155">ΔH₁ = −394 kJ/mol</text>

      <line x1="238" y1="148" x2="446" y2="148" stroke="#E2E8F0" strokeWidth="1" />

      <text x="238" y="166" fontSize="11" fontWeight="bold" fill="#15803D">경로 ②: 2단계</text>
      <text x="238" y="182" fontSize="10" fill="#334155">C + ½O₂ → CO (ΔH₂=−111)</text>
      <text x="238" y="196" fontSize="10" fill="#334155">CO + ½O₂ → CO₂ (ΔH₃=−283)</text>
      <text x="238" y="212" fontSize="10" fill="#334155">ΔH₂ + ΔH₃ = −394 kJ ✓</text>

      <line x1="238" y1="222" x2="446" y2="222" stroke="#E2E8F0" strokeWidth="1" />

      <rect x="238" y="232" width="180" height="60" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
      <text x="248" y="250" fontSize="11" fontWeight="bold" fill="#991B1B">핵심 결론</text>
      <text x="248" y="266" fontSize="10" fill="#7F1D1D">ΔH는 경로에 무관하다.</text>
      <text x="248" y="280" fontSize="10" fill="#7F1D1D">초기·최종 상태만이 ΔH 결정</text>
    </svg>
  )
}
