export default function FractionalDistillationDiagram() {
  const fractions = [
    { label: 'LPG (C₃~C₄)', bp: '−40~0°C', use: '연료(가스)', y: 76, color: '#BFDBFE', textColor: '#1E40AF' },
    { label: '나프타/가솔린 (C₅~C₁₀)', bp: '30~200°C', use: '자동차·석유화학', y: 120, color: '#A7F3D0', textColor: '#065F46' },
    { label: '등유 (C₁₁~C₁₃)', bp: '150~280°C', use: '항공유·난방', y: 164, color: '#FDE68A', textColor: '#92400E' },
    { label: '경유 (C₁₄~C₂₀)', bp: '250~350°C', use: '트럭·선박', y: 208, color: '#FCA5A5', textColor: '#991B1B' },
    { label: '중유 (C₂₁~)', bp: '350°C↑', use: '발전소·선박', y: 252, color: '#DDD6FE', textColor: '#4C1D95' },
  ]

  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="원유 분별 증류탑 구조 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        원유 분별 증류탑 (Fractional Distillation)
      </text>

      {/* ── 증류탑 본체 ── */}
      <rect x="120" y="50" width="90" height="248" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />

      {/* 온도 기울기 표시 (왼쪽) */}
      <defs>
        <linearGradient id="tempGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#FEF3C7" />
        </linearGradient>
      </defs>
      <rect x="100" y="50" width="16" height="248" fill="url(#tempGrad)" rx="2" />
      <text x="108" y="48" textAnchor="middle" fontSize="9" fill="#1D4ED8">저온</text>
      <text x="108" y="312" textAnchor="middle" fontSize="9" fill="#B45309">고온</text>

      {/* 탑 내부 단(tray) 선 */}
      {[98, 142, 186, 230].map((y, i) => (
        <line key={i} x1="120" y1={y} x2="210" y2={y} stroke="#CBD5E1" strokeWidth="1" strokeDasharray="4,3" />
      ))}

      {/* ── 가열로 (하단) ── */}
      <rect x="130" y="302" width="70" height="28" rx="4" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1.5" />
      <text x="165" y="320" textAnchor="middle" fontSize="10" fill="#991B1B">가열로 🔥</text>

      {/* 원유 주입 화살표 */}
      <line x1="50" y1="280" x2="120" y2="280" stroke="#64748B" strokeWidth="2" markerEnd="url(#arrowDark)" />
      <text x="85" y="273" textAnchor="middle" fontSize="10" fill="#334155">원유 주입</text>

      <defs>
        <marker id="arrowDark" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#64748B" />
        </marker>
        <marker id="arrowFrac" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#475569" />
        </marker>
      </defs>

      {/* ── 각 분획 출구 ── */}
      {fractions.map((f, i) => (
        <g key={i}>
          {/* 출구 파이프 */}
          <line x1="210" y1={f.y} x2="232" y2={f.y} stroke="#475569" strokeWidth="2" markerEnd="url(#arrowFrac)" />
          {/* 분획 박스 */}
          <rect x="234" y={f.y - 22} width="220" height="44" rx="5" fill={f.color} stroke="#CBD5E1" strokeWidth="1" />
          <text x="244" y={f.y - 7} fontSize="10" fontWeight="bold" fill={f.textColor}>{f.label}</text>
          <text x="244" y={f.y + 6} fontSize="9" fill="#475569">{f.bp}</text>
          <text x="244" y={f.y + 18} fontSize="9" fill="#64748B">{f.use}</text>
        </g>
      ))}

      {/* 아스팔트 (최하단 잔사) */}
      <line x1="165" y1="298" x2="165" y2="302" stroke="#475569" strokeWidth="2" />
      <rect x="100" y="298" width="70" height="0" fill="none" />
      <rect x="50" y="326" width="110" height="8" rx="3" fill="#78716C" />
      <text x="105" y="333" textAnchor="middle" fontSize="9" fill="white">아스팔트(C₃₅↑)</text>

      {/* 탑 레이블 */}
      <text x="165" y="46" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#475569">증류탑</text>
    </svg>
  )
}
