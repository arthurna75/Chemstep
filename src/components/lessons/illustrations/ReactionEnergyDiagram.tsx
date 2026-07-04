export default function ReactionEnergyDiagram() {
  return (
    <svg
      viewBox="0 0 500 330"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="화학 반응 에너지 다이어그램: 발열 반응과 흡열 반응의 퍼텐셜 에너지 변화 비교"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="250" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        화학 반응에서의 에너지 변화
      </text>

      {/* ─── 발열 반응 패널 ─── */}
      <rect x="12" y="34" width="228" height="226" rx="10" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5"/>
      <text x="126" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#C2410C">
        발열 반응 (ΔH &lt; 0)
      </text>

      {/* 발열 반응 축 */}
      <line x1="38" y1="68" x2="38" y2="240" stroke="#64748B" strokeWidth="1.5"/>
      <line x1="38" y1="240" x2="228" y2="240" stroke="#64748B" strokeWidth="1.5"/>
      <text x="29" y="155" textAnchor="middle" fontSize="9" fill="#64748B" transform="rotate(-90 29 155)">에너지</text>
      <text x="133" y="254" textAnchor="middle" fontSize="9" fill="#64748B">반응 진행 →</text>

      {/* 발열 반응 곡선: 반응물(y=145) → 봉우리(y=85) → 생성물(y=190) */}
      <path
        d="M 52 145 C 80 145, 100 85, 120 85 C 140 85, 168 190, 200 190"
        fill="none"
        stroke="#F97316"
        strokeWidth="2.5"
      />

      {/* 반응물 수평선 */}
      <line x1="38" y1="145" x2="70" y2="145" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 생성물 수평선 */}
      <line x1="183" y1="190" x2="225" y2="190" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 3"/>

      {/* 반응물 / 생성물 레이블 */}
      <text x="55" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3B82F6">반응물</text>
      <text x="208" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#22C55E">생성물</text>

      {/* Ea 화살표 (반응물 레벨 → 봉우리): x=95 */}
      <line x1="95" y1="145" x2="95" y2="90" stroke="#F97316" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="91,95 95,85 99,95" fill="#F97316"/>
      <text x="78" y="118" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EA580C">Ea</text>

      {/* ΔH 화살표 (반응물 → 생성물 수직): x=210 */}
      <line x1="210" y1="145" x2="210" y2="188" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="206,183 210,193 214,183" fill="#DC2626"/>
      <text x="225" y="170" textAnchor="start" fontSize="10" fontWeight="bold" fill="#DC2626">ΔH&lt;0</text>

      {/* 봉우리 레이블 */}
      <text x="120" y="80" textAnchor="middle" fontSize="9" fill="#92400E">전이</text>
      <text x="120" y="90" textAnchor="middle" fontSize="9" fill="#92400E">상태</text>

      {/* 발열 예시 */}
      <text x="126" y="220" textAnchor="middle" fontSize="9" fill="#78716C">예) 연소, 중화, 손난로</text>

      {/* ─── 흡열 반응 패널 ─── */}
      <rect x="260" y="34" width="228" height="226" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5"/>
      <text x="374" y="54" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        흡열 반응 (ΔH &gt; 0)
      </text>

      {/* 흡열 반응 축 */}
      <line x1="286" y1="68" x2="286" y2="240" stroke="#64748B" strokeWidth="1.5"/>
      <line x1="286" y1="240" x2="476" y2="240" stroke="#64748B" strokeWidth="1.5"/>
      <text x="277" y="155" textAnchor="middle" fontSize="9" fill="#64748B" transform="rotate(-90 277 155)">에너지</text>
      <text x="381" y="254" textAnchor="middle" fontSize="9" fill="#64748B">반응 진행 →</text>

      {/* 흡열 반응 곡선: 반응물(y=190) → 봉우리(y=85) → 생성물(y=145) */}
      <path
        d="M 300 190 C 328 190, 348 85, 368 85 C 388 85, 416 145, 448 145"
        fill="none"
        stroke="#3B82F6"
        strokeWidth="2.5"
      />

      {/* 반응물 수평선 */}
      <line x1="286" y1="190" x2="318" y2="190" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 3"/>
      {/* 생성물 수평선 */}
      <line x1="431" y1="145" x2="475" y2="145" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 3"/>

      {/* 반응물 / 생성물 레이블 */}
      <text x="303" y="186" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3B82F6">반응물</text>
      <text x="455" y="141" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#22C55E">생성물</text>

      {/* Ea 화살표 (반응물 레벨 → 봉우리): x=343 */}
      <line x1="343" y1="190" x2="343" y2="90" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="339,95 343,85 347,95" fill="#3B82F6"/>
      <text x="326" y="138" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">Ea</text>

      {/* ΔH 화살표 (반응물 → 생성물 수직): x=458 */}
      <line x1="458" y1="190" x2="458" y2="149" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2"/>
      <polygon points="454,154 458,145 462,154" fill="#DC2626"/>
      <text x="466" y="170" textAnchor="start" fontSize="10" fontWeight="bold" fill="#DC2626">ΔH&gt;0</text>

      {/* 봉우리 레이블 */}
      <text x="368" y="80" textAnchor="middle" fontSize="9" fill="#1E40AF">전이</text>
      <text x="368" y="90" textAnchor="middle" fontSize="9" fill="#1E40AF">상태</text>

      {/* 흡열 예시 */}
      <text x="374" y="220" textAnchor="middle" fontSize="9" fill="#78716C">예) 광합성, 전기분해, 냉찜질팩</text>

      {/* ─── 촉매 설명 박스 ─── */}
      <rect x="12" y="272" width="476" height="46" rx="8" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5"/>
      <text x="250" y="290" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">
        촉매(catalyst)의 역할
      </text>
      <text x="250" y="308" textAnchor="middle" fontSize="11" fill="#1E293B">
        활성화 에너지(Ea) 감소 → 반응 속도 증가   |   반응열(ΔH)은 변하지 않음
      </text>
    </svg>
  )
}
