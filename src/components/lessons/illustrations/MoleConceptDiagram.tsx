export default function MoleConceptDiagram() {
  const eggPositions: { x: number; y: number }[] = []
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      eggPositions.push({ x: col * 32 + 16, y: row * 32 + 16 })
    }
  }

  const particlePositions: { x: number; y: number }[] = [
    {x:22,y:20},{x:48,y:14},{x:74,y:22},{x:100,y:15},{x:126,y:21},{x:152,y:13},
    {x:30,y:44},{x:56,y:38},{x:82,y:46},{x:108,y:39},{x:134,y:45},{x:160,y:36},
    {x:16,y:68},{x:42,y:62},{x:68,y:70},{x:94,y:63},{x:120,y:69},{x:146,y:61},
    {x:25,y:92},{x:51,y:86},{x:77,y:94},{x:103,y:87},{x:129,y:93},{x:155,y:85},
    {x:35,y:116},{x:61,y:110},{x:87,y:118},{x:113,y:111},{x:139,y:117},{x:165,y:109},
    {x:20,y:140},{x:46,y:134},{x:72,y:142},{x:98,y:135},{x:124,y:141},{x:150,y:133},
  ]

  return (
    <svg
      viewBox="0 0 480 390"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="몰(mol)의 개념: 1다스(12개)와 1몰(6.022×10²³개)의 비교 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        몰(mol)의 개념
      </text>

      {/* ── 왼쪽 패널: 1다스 ── */}
      <rect x="18" y="40" width="192" height="230" rx="10" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
      <text x="114" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#92400E">
        1다스 (일상 단위)
      </text>

      {/* 계란 12개 (3×4 배열) */}
      <g transform="translate(30, 72)">
        {eggPositions.map((pos, i) => (
          <g key={i}>
            <ellipse cx={pos.x} cy={pos.y} rx="11" ry="14" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
          </g>
        ))}
      </g>

      <text x="114" y="232" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#D97706">
        = 12개
      </text>
      <text x="114" y="254" textAnchor="middle" fontSize="11" fill="#78716C">
        일상의 편리한 계산 단위
      </text>

      {/* 가운데 VS */}
      <text x="240" y="165" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#94A3B8">vs</text>

      {/* ── 오른쪽 패널: 1몰 ── */}
      <rect x="270" y="40" width="192" height="230" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
      <text x="366" y="62" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">
        1몰 (화학 단위)
      </text>

      {/* 입자 점 구름 */}
      <g transform="translate(278, 72)">
        {particlePositions.map((pos, i) => (
          <circle key={i} cx={pos.x} cy={pos.y} r="3.5" fill="#3B82F6" opacity="0.75" />
        ))}
        {/* 생략 표시 */}
        <text x="88" y="160" textAnchor="middle" fontSize="18" fill="#3B82F6" fontWeight="bold">…</text>
      </g>

      <text x="366" y="232" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1D4ED8">
        = 6.022×10²³개
      </text>
      <text x="366" y="254" textAnchor="middle" fontSize="11" fill="#64748B">
        원자·분자의 편리한 계산 단위
      </text>

      {/* ── 아보가드로 수 정의 박스 ── */}
      <rect x="30" y="288" width="420" height="46" rx="8" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5" />
      <text x="240" y="308" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        아보가드로 수 정의
      </text>
      <text x="240" y="326" textAnchor="middle" fontSize="12" fill="#1E293B">
        ¹²C 12 g에 들어있는 탄소 원자 수 = 6.022×10²³ = NA
      </text>

      {/* ── 핵심 공식 박스 ── */}
      <rect x="30" y="344" width="420" height="38" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="359" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        핵심 공식
      </text>
      <text x="240" y="376" textAnchor="middle" fontSize="13" fill="#1E293B">
        입자 수 N = n(mol) × NA    |    n = N / NA
      </text>
    </svg>
  )
}
