export default function CombustionEfficiencyDiagram() {
  return (
    <svg
      viewBox="0 0 480 350"
      aria-label="연소 효율 에너지 흐름도: 연료 화학 에너지가 유효 출력과 폐열 손실로 나뉘는 모습"
      className="w-full h-auto"
    >
      <rect width="480" height="350" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        연소 효율 에너지 흐름 (가솔린 엔진 예시)
      </text>

      {/* ── 연료 박스 (좌측) ── */}
      <rect x="20" y="140" width="140" height="60" rx="6" fill="#FEF3C7" stroke="#FBBF24" strokeWidth="2" />
      <text x="90" y="164" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">연료 화학 에너지</text>
      <text x="90" y="182" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">100%</text>

      {/* ── 흐름 리본: 유효 출력 (상단, 초록) ── */}
      <path
        d="M 160,140 C 240,140 260,60 340,60 L 340,110 C 260,110 240,161 160,161 Z"
        fill="#22C55E"
        fillOpacity="0.35"
        stroke="#16A34A"
        strokeWidth="1.5"
      />
      <text x="250" y="85" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">약 35%</text>

      {/* ── 흐름 리본: 폐열 손실 (하단, 회색/빨강) ── */}
      <path
        d="M 160,161 C 240,161 260,230 340,230 L 340,320 C 260,320 240,200 160,200 Z"
        fill="#EF4444"
        fillOpacity="0.28"
        stroke="#DC2626"
        strokeWidth="1.5"
      />
      <text x="250" y="270" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B91C1C">약 65%</text>

      {/* ── 유효 출력 박스 (우측 상단, 초록) ── */}
      <rect x="340" y="60" width="120" height="50" rx="6" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2" />
      <text x="400" y="80" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#166534">유효 출력</text>
      <text x="400" y="96" textAnchor="middle" fontSize="10" fill="#166534">(바퀴 구동, 일)</text>

      {/* ── 폐열 손실 박스 (우측 하단, 빨강) ── */}
      <rect x="340" y="230" width="120" height="90" rx="6" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="400" y="254" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991B1B">폐열 손실</text>
      <text x="400" y="272" textAnchor="middle" fontSize="10" fill="#991B1B">냉각수 · 배기가스</text>
      <text x="400" y="288" textAnchor="middle" fontSize="10" fill="#991B1B">마찰·복사 손실</text>

      {/* ── 하단 요약 박스 ── */}
      <rect x="20" y="286" width="290" height="46" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="165" y="304" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A">
        열효율 = 유효 출력 ÷ 연료 공급 에너지 × 100%
      </text>
      <text x="165" y="320" textAnchor="middle" fontSize="10" fill="#334155">
        가솔린 엔진 열효율 ≈ 25~40% (나머지는 폐열로 손실)
      </text>
    </svg>
  )
}
