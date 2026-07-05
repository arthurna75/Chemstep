const atoms = [
  { symbol: 'H', weight: 1, r: 10, color: '#94A3B8', stroke: '#64748B' },
  { symbol: 'C', weight: 12, r: 16, color: '#334155', stroke: '#1E293B' },
  { symbol: 'O', weight: 16, r: 18, color: '#EF4444', stroke: '#B91C1C' },
  { symbol: 'Na', weight: 23, r: 22, color: '#3B82F6', stroke: '#1D4ED8' },
]

export default function AtomicMolecularWeightDiagram() {
  return (
    <svg
      viewBox="0 0 480 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="원자량과 분자량: 원자량이 다른 원자들의 상대 크기 비교와, H2O 분자량이 구성 원자의 원자량 합임을 보여주는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        원자량과 분자량
      </text>
      <text x="240" y="42" textAnchor="middle" fontSize="11" fill="#64748B">
        ¹²C(탄소-12) = 12.000을 기준으로 한 상대 질량
      </text>

      {/* ── 위: 원자량 상대 크기 비교 패널 ── */}
      <rect x="18" y="56" width="444" height="150" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="240" y="76" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#334155">
        원자량이 클수록 원자를 크게 표현 (상대적 비교)
      </text>

      {atoms.map((atom, i) => {
        const cx = 90 + i * 100
        const cy = 148
        return (
          <g key={atom.symbol}>
            <circle cx={cx} cy={cy} r={atom.r} fill={atom.color} stroke={atom.stroke} strokeWidth="2" opacity="0.9" />
            <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">
              {atom.symbol}
            </text>
            <text x={cx} y={186} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">
              원자량 {atom.weight}
            </text>
          </g>
        )
      })}

      {/* ── 아래: H2O 분자량 = 원자량의 합 ── */}
      <rect x="18" y="218" width="444" height="150" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
      <text x="240" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        분자량 = 구성 원자들의 원자량의 합 (예: H₂O)
      </text>

      {/* H2O 분자 모형 */}
      <g transform="translate(120, 258)">
        {/* 결합선 */}
        <line x1="0" y1="20" x2="45" y2="0" stroke="#64748B" strokeWidth="3" />
        <line x1="0" y1="20" x2="45" y2="42" stroke="#64748B" strokeWidth="3" />
        {/* O 원자 */}
        <circle cx="0" cy="20" r="18" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
        <text x="0" y="25" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#fff">O</text>
        {/* H 원자 2개 */}
        <circle cx="45" cy="0" r="10" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />
        <text x="45" y="4" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">H</text>
        <circle cx="45" cy="42" r="10" fill="#94A3B8" stroke="#64748B" strokeWidth="2" />
        <text x="45" y="46" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#fff">H</text>
      </g>

      <text x="120" y="336" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        H₂O
      </text>

      {/* 계산 화살표 및 식 */}
      <text x="240" y="288" textAnchor="middle" fontSize="16" fill="#94A3B8">→</text>

      <rect x="260" y="256" width="182" height="66" rx="8" fill="#fff" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="351" y="276" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        분자량 계산
      </text>
      <text x="351" y="294" textAnchor="middle" fontSize="12" fill="#1E293B">
        (1×2) + 16
      </text>
      <text x="351" y="312" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1D4ED8">
        = 18
      </text>

      <text x="240" y="352" textAnchor="middle" fontSize="11" fill="#64748B">
        원자량과 분자량은 모두 단위가 없는 상대적인 값이다
      </text>
    </svg>
  )
}
