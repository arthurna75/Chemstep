export default function ElectrolysisDiagram() {
  return (
    <svg
      viewBox="0 0 480 360"
      aria-label="물의 전기분해 다이어그램"
      className="w-full h-auto"
    >
      {/* 배경 */}
      <rect width="480" height="360" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        물의 전기분해 (Electrolysis)
      </text>

      {/* ── 전해조 (하나의 용기, 갈바니 전지와 달리 격벽/염다리 없음) ── */}
      <rect x="90" y="90" width="300" height="160" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="240" y="115" textAnchor="middle" fontSize="12" fill="#1D4ED8">전해질 수용액 (H₂O)</text>

      {/* 음극 (환원, 외부전원 −극에 연결) */}
      <rect x="130" y="70" width="16" height="150" rx="3" fill="#94A3B8" />
      <text x="138" y="64" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">음극</text>
      <text x="138" y="150" textAnchor="middle" fontSize="10" fill="#1D4ED8">2H₂O + 2e⁻</text>
      <text x="138" y="164" textAnchor="middle" fontSize="10" fill="#1D4ED8">→ H₂↑ + 2OH⁻</text>
      <text x="138" y="180" textAnchor="middle" fontSize="9" fill="#64748B">(환원)</text>
      <text x="138" y="240" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">음극 (−)</text>

      {/* 양극 (산화, 외부전원 +극에 연결) */}
      <rect x="334" y="70" width="16" height="150" rx="3" fill="#F59E0B" />
      <text x="342" y="64" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#92400E">양극</text>
      <text x="342" y="150" textAnchor="middle" fontSize="10" fill="#B91C1C">2H₂O →</text>
      <text x="342" y="164" textAnchor="middle" fontSize="10" fill="#B91C1C">O₂↑ + 4H⁺ + 4e⁻</text>
      <text x="342" y="180" textAnchor="middle" fontSize="9" fill="#64748B">(산화)</text>
      <text x="342" y="240" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B91C1C">양극 (+)</text>

      {/* 기체 방울 표시 */}
      <circle cx="132" cy="100" r="4" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1" />
      <circle cx="144" cy="90" r="3" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1" />
      <circle cx="336" cy="100" r="4" fill="#FED7AA" stroke="#F59E0B" strokeWidth="1" />
      <circle cx="348" cy="90" r="3" fill="#FED7AA" stroke="#F59E0B" strokeWidth="1" />

      {/* ── 외부 전원 (배터리 기호) : 자발 반응이 아니라 전원이 강제로 전류를 흘림 ── */}
      <polyline points="138,70 138,30 240,30" fill="none" stroke="#475569" strokeWidth="2.5" />
      <polyline points="240,30 342,30 342,70" fill="none" stroke="#475569" strokeWidth="2.5" />
      {/* 배터리 심볼 */}
      <line x1="222" y1="18" x2="222" y2="42" stroke="#334155" strokeWidth="4" />
      <line x1="234" y1="12" x2="234" y2="48" stroke="#334155" strokeWidth="2" />
      <text x="222" y="12" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">−</text>
      <text x="234" y="12" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">+</text>
      <text x="228" y="60" textAnchor="middle" fontSize="10" fill="#334155">외부 전원</text>

      {/* 전자 방향 (전원 −극 → 음극, 양극 → 전원 +극) */}
      <text x="180" y="24" textAnchor="middle" fontSize="10" fill="#6366F1">e⁻ →</text>
      <text x="290" y="24" textAnchor="middle" fontSize="10" fill="#6366F1">e⁻ →</text>

      {/* ── 하단 요약 패널 ── */}
      <rect x="40" y="270" width="400" height="72" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="240" y="291" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">
        전체 반응: 2H₂O → 2H₂ + O₂ (부피비 H₂:O₂ = 2:1)
      </text>
      <text x="240" y="309" textAnchor="middle" fontSize="10" fill="#334155">
        비자발적 반응 — 외부 전원이 전자를 강제로 흘려 반응을 일으킴
      </text>
      <text x="240" y="327" textAnchor="middle" fontSize="10" fill="#334155">
        갈바니 전지(자발적, 전기 생성)와 반대로 전기를 공급해 화학 반응을 일으킨다
      </text>
    </svg>
  )
}
