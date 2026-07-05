export default function LimitingReactantDiagram() {
  return (
    <svg
      viewBox="0 0 480 330"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="한계 반응물과 과잉 반응물 다이어그램: N₂ + 3H₂ → 2NH₃ 반응에서 N₂ 1개와 H₂ 5개가 만날 때 N₂가 먼저 소모되어 한계 반응물이 되고 H₂ 2개가 반응하지 않고 남아 과잉 반응물이 되는 과정"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        한계 반응물과 과잉 반응물: N₂ + 3H₂ → 2NH₃
      </text>
      <text x="240" y="40" textAnchor="middle" fontSize="11" fill="#64748B">
        반응 전: N₂ 1개, H₂ 5개 (필요 비율 N₂ : H₂ = 1 : 3)
      </text>

      {/* ─── 반응하는 분자 패널 ─── */}
      <rect x="20" y="52" width="270" height="150" rx="10" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5" />
      <text x="155" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        반응하는 분자 (몰비 1 : 3)
      </text>

      {/* N2 분자 */}
      <circle cx="70" cy="128" r="24" fill="#16A34A" />
      <text x="70" y="134" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">N₂</text>

      <text x="112" y="134" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#475569">+</text>

      {/* H2 분자 x3 */}
      <circle cx="150" cy="128" r="17" fill="#3B82F6" />
      <text x="150" y="133" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H₂</text>
      <circle cx="192" cy="128" r="17" fill="#3B82F6" />
      <text x="192" y="133" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H₂</text>
      <circle cx="234" cy="128" r="17" fill="#3B82F6" />
      <text x="234" y="133" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H₂</text>

      <text x="155" y="172" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        → NH₃ 2개 생성
      </text>
      <text x="155" y="188" textAnchor="middle" fontSize="10" fill="#64748B">
        N₂가 모두 소모되어 반응 종료
      </text>

      {/* ─── 과잉 반응물 패널 ─── */}
      <rect x="304" y="52" width="156" height="150" rx="10" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5" />
      <text x="382" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C2410C">
        과잉 반응물
      </text>

      {/* 남은 H2 분자 x2 (점선 강조) */}
      <circle cx="382" cy="110" r="22" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="382" cy="110" r="17" fill="#3B82F6" />
      <text x="382" y="115" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H₂</text>

      <circle cx="382" cy="158" r="22" fill="none" stroke="#F97316" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="382" cy="158" r="17" fill="#3B82F6" />
      <text x="382" y="163" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H₂</text>

      <text x="382" y="192" textAnchor="middle" fontSize="10" fill="#C2410C">H₂ 2개 남음</text>

      {/* ─── 결론 박스 ─── */}
      <rect x="20" y="216" width="440" height="62" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="238" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        한계 반응물: N₂ (다 소모됨 → 생성량을 결정)
      </text>
      <text x="240" y="258" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C2410C">
        과잉 반응물: H₂ (반응 후에도 일부 남음)
      </text>

      {/* ─── 범례 ─── */}
      <circle cx="175" cy="304" r="7" fill="#16A34A" />
      <text x="188" y="308" fontSize="11" fill="#1E293B">질소(N)</text>
      <circle cx="265" cy="304" r="7" fill="#3B82F6" />
      <text x="278" y="308" fontSize="11" fill="#1E293B">수소(H)</text>
    </svg>
  )
}
