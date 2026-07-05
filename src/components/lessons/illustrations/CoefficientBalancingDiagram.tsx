export default function CoefficientBalancingDiagram() {
  return (
    <svg
      viewBox="0 0 500 350"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="계수 맞추기 다이어그램: CH₄ + O₂ → CO₂ + H₂O 반응의 불균형 상태와 계수를 맞춘 균형 상태 비교"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="250" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        계수 맞추기: CH₄ + O₂ → CO₂ + H₂O
      </text>

      {/* ─── ① 불균형 반응식 ─── */}
      <rect x="12" y="34" width="476" height="118" rx="10" fill="#FEF2F2" stroke="#EF4444" strokeWidth="1.5" />
      <text x="250" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">
        ① 계수를 맞추지 않은 반응식 (불균형)
      </text>
      <text x="250" y="80" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        CH₄(g) + O₂(g) → CO₂(g) + H₂O(g)
      </text>

      <rect x="30" y="94" width="200" height="46" rx="8" fill="white" stroke="#F87171" strokeWidth="1.2" />
      <text x="130" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">반응물 원자 수</text>
      <text x="130" y="128" textAnchor="middle" fontSize="12" fill="#1E293B">C: 1  H: 4  O: 2</text>

      <rect x="270" y="94" width="200" height="46" rx="8" fill="white" stroke="#F87171" strokeWidth="1.2" />
      <text x="370" y="110" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">생성물 원자 수</text>
      <text x="370" y="128" textAnchor="middle" fontSize="12" fill="#1E293B">C: 1  H: 2  O: 3</text>

      <text x="250" y="149" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#B91C1C">
        H, O 원자 수 불일치 → 계수 조정 필요
      </text>

      {/* ─── 화살표 (계수 조정) ─── */}
      <defs>
        <marker id="cbArrow" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#475569" />
        </marker>
      </defs>
      <line x1="250" y1="156" x2="250" y2="184" stroke="#475569" strokeWidth="2" markerEnd="url(#cbArrow)" />
      <text x="266" y="174" fontSize="11" fontWeight="bold" fill="#475569">계수 조정</text>

      {/* ─── ② 균형 맞춘 반응식 ─── */}
      <rect x="12" y="190" width="476" height="118" rx="10" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5" />
      <text x="250" y="210" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        ② 계수를 맞춘 반응식 (균형)
      </text>
      <text x="250" y="236" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        <tspan>CH₄(g) + </tspan>
        <tspan fill="#F97316">2</tspan>
        <tspan>O₂(g) → CO₂(g) + </tspan>
        <tspan fill="#F97316">2</tspan>
        <tspan>H₂O(g)</tspan>
      </text>

      <rect x="30" y="250" width="200" height="46" rx="8" fill="white" stroke="#4ADE80" strokeWidth="1.2" />
      <text x="130" y="266" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">반응물 원자 수</text>
      <text x="130" y="284" textAnchor="middle" fontSize="12" fill="#1E293B">C: 1  H: 4  O: 4</text>

      <rect x="270" y="250" width="200" height="46" rx="8" fill="white" stroke="#4ADE80" strokeWidth="1.2" />
      <text x="370" y="266" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">생성물 원자 수</text>
      <text x="370" y="284" textAnchor="middle" fontSize="12" fill="#1E293B">C: 1  H: 4  O: 4</text>

      <text x="250" y="303" textAnchor="middle" fontSize="10.5" fontWeight="bold" fill="#15803D">
        C, H, O 모두 일치 ✓ → 균형 완성!
      </text>

      {/* ─── 범례 ─── */}
      <circle cx="160" cy="328" r="7" fill="#94A3B8" />
      <text x="173" y="332" fontSize="11" fill="#1E293B">탄소(C)</text>
      <circle cx="245" cy="328" r="7" fill="#3B82F6" />
      <text x="258" y="332" fontSize="11" fill="#1E293B">수소(H)</text>
      <circle cx="330" cy="328" r="7" fill="#EF4444" />
      <text x="343" y="332" fontSize="11" fill="#1E293B">산소(O)</text>
    </svg>
  )
}
