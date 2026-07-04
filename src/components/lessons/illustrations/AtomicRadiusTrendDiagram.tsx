export default function AtomicRadiusTrendDiagram() {
  // ── 2주기 원소: 왼→오 반지름 감소 ────────────────────────────
  const period2 = [
    { symbol: 'Li', r: 38 },
    { symbol: 'Be', r: 33 },
    { symbol: 'B',  r: 29 },
    { symbol: 'C',  r: 26 },
    { symbol: 'N',  r: 24 },
    { symbol: 'O',  r: 22 },
    { symbol: 'F',  r: 19 },
    { symbol: 'Ne', r: 16 },
  ]

  // ── 1족 원소: 위→아래 반지름 증가 ────────────────────────────
  const group1 = [
    { symbol: 'Li', r: 22, period: '2주기' },
    { symbol: 'Na', r: 30, period: '3주기' },
    { symbol: 'K',  r: 38, period: '4주기' },
  ]

  // ── 2주기 행 레이아웃 ──────────────────────────────────────
  // 중심 y = 165, 원 간격 = 52px, 시작 x = 130
  const P2_CY   = 165
  const P2_START_X = 130
  const P2_STEP    = 42

  // ── 1족 열 레이아웃 ──────────────────────────────────────
  // 중심 x = 58, 첫 원 y = 130, 간격 = 68px
  const G1_CX      = 58
  const G1_START_Y = 130
  const G1_STEP    = 68

  // 색상
  const PERIOD_COLOR = '#3B82F6'  // 파랑 (2주기)
  const GROUP_COLOR  = '#10B981'  // 초록 (1족)
  const SHARED_COLOR = '#8B5CF6'  // 보라 (Li — 공유)
  const ARROW_ID     = 'arTrendArrow'
  const ARROW_ID2    = 'arTrendArrow2'

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 460 380"
        width="100%"
        style={{ maxWidth: 460, minWidth: 340 }}
        aria-label="원자 반지름의 주기적 경향"
      >
        <defs>
          <marker id={ARROW_ID} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L0,7 L7,3.5 z" fill="#3B82F6" />
          </marker>
          <marker id={ARROW_ID2} markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0,0 L0,7 L7,3.5 z" fill="#10B981" />
          </marker>
        </defs>

        {/* ── 제목 ── */}
        <text x={230} y={20} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          원자 반지름의 주기적 경향
        </text>

        {/* ══════════════════════════════════
            섹션 A: 같은 주기(2주기) — 가로
        ══════════════════════════════════ */}
        <text x={230} y={44} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#3B82F6">
          같은 주기(2주기): 오른쪽으로 갈수록 감소
        </text>

        {/* "← 원자 반지름 감소" 화살표 */}
        <line
          x1={P2_START_X + (period2.length - 1) * P2_STEP + 10}
          y1={54}
          x2={P2_START_X - 10}
          y2={54}
          stroke="#3B82F6" strokeWidth={1.5}
          markerEnd={`url(#${ARROW_ID})`}
          // 화살표 방향: 왼쪽(감소)이므로 시작=오른쪽, 끝=왼쪽
        />
        <text
          x={(P2_START_X + P2_START_X + (period2.length - 1) * P2_STEP) / 2}
          y={51}
          textAnchor="middle" fontSize={9} fill="#3B82F6"
        >
          원자 반지름 감소 →
        </text>

        {/* 2주기 원소 원 */}
        {period2.map((el, i) => {
          const cx = P2_START_X + i * P2_STEP
          const cy = P2_CY
          const isLi = el.symbol === 'Li'
          const color = isLi ? SHARED_COLOR : PERIOD_COLOR
          return (
            <g key={`p2-${el.symbol}`}>
              {/* 원 */}
              <circle cx={cx} cy={cy} r={el.r}
                fill={isLi ? '#EDE9FE' : '#EFF6FF'}
                stroke={color} strokeWidth={2}
              />
              {/* 원소 기호 */}
              <text cx={cx} cy={cy} x={cx} y={cy + 4}
                textAnchor="middle" fontSize={el.r > 28 ? 13 : 11}
                fontWeight="bold" fill={color}
              >
                {el.symbol}
              </text>
              {/* 반지름 값 */}
              <text x={cx} y={cy + el.r + 12}
                textAnchor="middle" fontSize={8} fill="#64748B"
              >
                {el.r * 4}pm
              </text>
              {/* 원소 번호/이름 (하단) */}
              <text x={cx} y={P2_CY + 50}
                textAnchor="middle" fontSize={8} fill="#94A3B8"
              >
                {el.symbol}
              </text>
            </g>
          )
        })}

        {/* 2주기 구분선 */}
        <line x1={100} y1={220} x2={430} y2={220} stroke="#E2E8F0" strokeWidth={1} strokeDasharray="4 2" />

        {/* ══════════════════════════════════
            섹션 B: 같은 족(1족) — 세로
        ══════════════════════════════════ */}
        <text x={230} y={238} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#10B981">
          같은 족(1족): 아래로 갈수록 증가
        </text>

        {/* "원자 반지름 증가 ↓" */}
        <line
          x1={G1_CX + 52}
          y1={G1_START_Y - 8 + 240 - 130}
          x2={G1_CX + 52}
          y2={G1_START_Y + (group1.length - 1) * G1_STEP + group1[group1.length - 1].r + 4 + 240 - 130}
          stroke="#10B981" strokeWidth={1.5}
          markerEnd={`url(#${ARROW_ID2})`}
        />
        <text
          x={G1_CX + 62}
          y={G1_START_Y + (group1.length - 1) * G1_STEP / 2 + 10 + 240 - 130}
          textAnchor="start" fontSize={9} fill="#10B981"
          transform={`rotate(90, ${G1_CX + 62}, ${G1_START_Y + (group1.length - 1) * G1_STEP / 2 + 10 + 240 - 130})`}
        >
          원자 반지름 증가 ↓
        </text>

        {/* 1족 원소 원 */}
        {group1.map((el, i) => {
          const cx = G1_CX
          const cy = G1_START_Y + i * G1_STEP + 240 - 130
          const isLi = el.symbol === 'Li'
          const color = isLi ? SHARED_COLOR : GROUP_COLOR
          return (
            <g key={`g1-${el.symbol}`}>
              <circle cx={cx} cy={cy} r={el.r}
                fill={isLi ? '#EDE9FE' : '#ECFDF5'}
                stroke={color} strokeWidth={2}
              />
              <text x={cx} y={cy + 4}
                textAnchor="middle" fontSize={el.r > 28 ? 13 : 11}
                fontWeight="bold" fill={color}
              >
                {el.symbol}
              </text>
              <text x={cx + el.r + 6} y={cy + 4}
                textAnchor="start" fontSize={8} fill="#64748B"
              >
                {el.period} / {el.r * 4}pm
              </text>
            </g>
          )
        })}

        {/* Li 공유 설명 */}
        <text x={G1_CX} y={G1_START_Y + 240 - 130 - group1[0].r - 6}
          textAnchor="middle" fontSize={7} fill={SHARED_COLOR}
        >
          (두 섹션 공유)
        </text>

        {/* ── 하단 설명 박스 ── */}
        <rect x={8} y={316} width={444} height={56} rx={6}
          fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={1}
        />
        <text x={226} y={332} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#1E293B">
          원자 반지름 경향 — 이유
        </text>
        <text x={16} y={346} fontSize={8.5} fill="#475569">
          • 같은 주기: 오른쪽으로 갈수록 양성자(핵전하) 증가 → 전자를 더 강하게 당김 → 반지름 감소
        </text>
        <text x={16} y={360} fontSize={8.5} fill="#475569">
          • 같은 족: 아래로 갈수록 전자 껍질 수 증가 → 핵에서 멀어짐 → 반지름 증가
        </text>
        <text x={16} y={374} fontSize={8} fill="#94A3B8">
          * pm 값은 공유 원자 반지름 기준 (상대적 표현)
        </text>
      </svg>
    </div>
  )
}
