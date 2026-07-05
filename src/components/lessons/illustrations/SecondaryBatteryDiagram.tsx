export default function SecondaryBatteryDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-label="이차전지의 방전과 충전 사이클 다이어그램"
      className="w-full h-auto"
    >
      {/* 배경 */}
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        이차전지의 충전-방전 사이클 (리튬이온 전지)
      </text>

      <defs>
        <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#3B82F6" />
        </marker>
        <marker id="arrowRed" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#EF4444" />
        </marker>
      </defs>

      {/* ── 왼쪽 패널: 방전 (Discharge) ── */}
      <rect x="20" y="46" width="210" height="230" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="125" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">
        방전 (Discharge)
      </text>

      {/* 음극/양극 박스 (방전) */}
      <rect x="35" y="82" width="60" height="120" rx="3" fill="#94A3B8" />
      <text x="65" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">음극(흑연)</text>
      <rect x="165" y="82" width="60" height="120" rx="3" fill="#F59E0B" />
      <text x="195" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400E">양극(LiCoO₂)</text>

      {/* 전자 흐름 (외부회로, 음극→양극) */}
      <polyline points="65,82 65,58 195,58 195,82" fill="none" stroke="#3B82F6" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
      <text x="130" y="52" textAnchor="middle" fontSize="10" fill="#1D4ED8">e⁻ (음극→양극)</text>

      {/* Li+ 이온 흐름 (전해질, 음극→양극) */}
      <line x1="95" y1="142" x2="163" y2="142" stroke="#1D4ED8" strokeWidth="2" markerEnd="url(#arrowBlue)" />
      <text x="130" y="135" textAnchor="middle" fontSize="10" fill="#1D4ED8">Li⁺ →</text>
      <text x="130" y="160" textAnchor="middle" fontSize="9" fill="#1D4ED8">(전해질을 통해 이동)</text>

      <text x="125" y="222" textAnchor="middle" fontSize="9" fill="#1D4ED8">음극: Li⁺ 탈리(산화)</text>
      <text x="125" y="236" textAnchor="middle" fontSize="9" fill="#1D4ED8">양극: Li⁺ 삽입(환원)</text>
      <text x="125" y="256" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">전기 에너지 생성 → 사용</text>

      {/* ── 오른쪽 패널: 충전 (Charge) ── */}
      <rect x="250" y="46" width="210" height="230" rx="6" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="355" y="68" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#B91C1C">
        충전 (Charge)
      </text>

      {/* 음극/양극 박스 (충전) */}
      <rect x="265" y="82" width="60" height="120" rx="3" fill="#94A3B8" />
      <text x="295" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#475569">음극(흑연)</text>
      <rect x="395" y="82" width="60" height="120" rx="3" fill="#F59E0B" />
      <text x="425" y="76" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400E">양극(LiCoO₂)</text>

      {/* 전자 흐름 (외부전원이 역방향으로 강제, 양극→음극) */}
      <polyline points="425,82 425,58 295,58 295,82" fill="none" stroke="#EF4444" strokeWidth="2.5" markerEnd="url(#arrowRed)" />
      <text x="360" y="52" textAnchor="middle" fontSize="10" fill="#B91C1C">외부전원 강제 e⁻ (양극→음극)</text>

      {/* Li+ 이온 흐름 역방향 (양극→음극) */}
      <line x1="393" y1="142" x2="325" y2="142" stroke="#B91C1C" strokeWidth="2" markerEnd="url(#arrowRed)" />
      <text x="360" y="135" textAnchor="middle" fontSize="10" fill="#B91C1C">← Li⁺</text>
      <text x="360" y="160" textAnchor="middle" fontSize="9" fill="#B91C1C">(방전과 반대 방향)</text>

      <text x="355" y="222" textAnchor="middle" fontSize="9" fill="#B91C1C">음극: Li⁺ 삽입(환원)</text>
      <text x="355" y="236" textAnchor="middle" fontSize="9" fill="#B91C1C">양극: Li⁺ 탈리(산화)</text>
      <text x="355" y="256" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B91C1C">외부 전기 에너지 → 저장</text>

      {/* ── 하단 요약 패널 ── */}
      <rect x="40" y="290" width="400" height="56" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="240" y="310" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">
        Li⁺가 두 전극 사이를 왕복하는 흔들의자(Rocking Chair) 메커니즘
      </text>
      <text x="240" y="330" textAnchor="middle" fontSize="10" fill="#334155">
        방전: 화학 에너지 → 전기 에너지 / 충전: 전기 에너지 → 화학 에너지 (역반응)
      </text>
    </svg>
  )
}
