export default function PeriodGroupDiagram() {
  // ── 레이아웃 상수 ──────────────────────────────────────────────
  // 왼쪽 여백(주기 레이블용): 48px
  // 상단 여백(헤더용): 64px
  // 셀 크기
  const LEFT = 48
  const TOP = 64
  const CW = 38   // 셀 너비
  const CH = 42   // 셀 높이
  const GAP = 2   // 셀 간격

  // 1~18족 → x 좌표 (0-indexed col)
  // 컬럼 0~17 → 족 1~18
  // 전이금속 블록(3~12족 = col 2~11)은 병합 표시
  const colX = (col: number) => LEFT + col * (CW + GAP)

  // 주기 1~4 → y 좌표
  const rowY = (period: number) => TOP + (period - 1) * (CH + GAP)

  // ── 색상 정의 ────────────────────────────────────────────────
  const colors = {
    g1:         { bg: '#EFF6FF', border: '#93C5FD', text: '#1D4ED8' },
    g2:         { bg: '#F0FDF4', border: '#86EFAC', text: '#15803D' },
    transition: { bg: '#FAF5FF', border: '#C4B5FD', text: '#6D28D9' },
    g13to17:    { bg: '#FFF7ED', border: '#FDba74', text: '#C2410C' },
    g18:        { bg: '#F8FAFC', border: '#CBD5E1', text: '#475569' },
  }

  // ── 원소 데이터 ──────────────────────────────────────────────
  // col: 0-indexed (족-1)
  interface ElementCell {
    symbol: string
    period: number
    col: number   // 0-indexed
    colorKey: keyof typeof colors
  }

  const elements: ElementCell[] = [
    // 1주기
    { symbol: 'H',  period: 1, col: 0,  colorKey: 'g1' },
    { symbol: 'He', period: 1, col: 17, colorKey: 'g18' },
    // 2주기
    { symbol: 'Li', period: 2, col: 0,  colorKey: 'g1' },
    { symbol: 'Be', period: 2, col: 1,  colorKey: 'g2' },
    { symbol: 'B',  period: 2, col: 12, colorKey: 'g13to17' },
    { symbol: 'C',  period: 2, col: 13, colorKey: 'g13to17' },
    { symbol: 'N',  period: 2, col: 14, colorKey: 'g13to17' },
    { symbol: 'O',  period: 2, col: 15, colorKey: 'g13to17' },
    { symbol: 'F',  period: 2, col: 16, colorKey: 'g13to17' },
    { symbol: 'Ne', period: 2, col: 17, colorKey: 'g18' },
    // 3주기
    { symbol: 'Na', period: 3, col: 0,  colorKey: 'g1' },
    { symbol: 'Mg', period: 3, col: 1,  colorKey: 'g2' },
    { symbol: 'Al', period: 3, col: 12, colorKey: 'g13to17' },
    { symbol: 'Si', period: 3, col: 13, colorKey: 'g13to17' },
    { symbol: 'P',  period: 3, col: 14, colorKey: 'g13to17' },
    { symbol: 'S',  period: 3, col: 15, colorKey: 'g13to17' },
    { symbol: 'Cl', period: 3, col: 16, colorKey: 'g13to17' },
    { symbol: 'Ar', period: 3, col: 17, colorKey: 'g18' },
    // 4주기 — 1~2족
    { symbol: 'K',  period: 4, col: 0,  colorKey: 'g1' },
    { symbol: 'Ca', period: 4, col: 1,  colorKey: 'g2' },
    // 4주기 — 13~18족
    { symbol: 'Ga', period: 4, col: 12, colorKey: 'g13to17' },
    { symbol: 'Ge', period: 4, col: 13, colorKey: 'g13to17' },
    { symbol: 'As', period: 4, col: 14, colorKey: 'g13to17' },
    { symbol: 'Se', period: 4, col: 15, colorKey: 'g13to17' },
    { symbol: 'Br', period: 4, col: 16, colorKey: 'g13to17' },
    { symbol: 'Kr', period: 4, col: 17, colorKey: 'g18' },
  ]

  // 족 번호 표시할 컬럼 목록 (0-indexed)
  const headerCols = [0, 1, 12, 13, 14, 15, 16, 17]
  // 전이금속 통합 블록: col 2~11 (족 3~12)
  const transitionStartX = colX(2)
  const transitionWidth   = 10 * (CW + GAP) - GAP

  // 화살표 마커
  const ARROW_ID = 'pgArrow'

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 480 320"
        width="100%"
        style={{ maxWidth: 480, minWidth: 360 }}
        aria-label="주기율표의 구조 — 주기와 족"
      >
        {/* 화살표 마커 */}
        <defs>
          <marker id={ARROW_ID} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#64748B" />
          </marker>
        </defs>

        {/* 제목 */}
        <text x={240} y={18} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          주기율표의 구조 — 주기와 족
        </text>

        {/* ── 족 컬럼 헤더 ── */}
        {headerCols.map((col) => {
          const groupNum = col + 1
          const x = colX(col)
          return (
            <g key={`header-${col}`}>
              <rect x={x} y={TOP - 26} width={CW} height={20} rx={3}
                fill={
                  col === 0 ? colors.g1.bg :
                  col === 1 ? colors.g2.bg :
                  col === 17 ? colors.g18.bg :
                  colors.g13to17.bg
                }
                stroke={
                  col === 0 ? colors.g1.border :
                  col === 1 ? colors.g2.border :
                  col === 17 ? colors.g18.border :
                  colors.g13to17.border
                }
                strokeWidth={1}
              />
              <text
                x={x + CW / 2} y={TOP - 12}
                textAnchor="middle" fontSize={9} fontWeight="bold"
                fill={
                  col === 0 ? colors.g1.text :
                  col === 1 ? colors.g2.text :
                  col === 17 ? colors.g18.text :
                  colors.g13to17.text
                }
              >
                {groupNum}족
              </text>
            </g>
          )
        })}

        {/* 전이금속 통합 헤더 */}
        <rect
          x={transitionStartX} y={TOP - 26}
          width={transitionWidth} height={20} rx={3}
          fill={colors.transition.bg} stroke={colors.transition.border} strokeWidth={1}
        />
        <text
          x={transitionStartX + transitionWidth / 2} y={TOP - 12}
          textAnchor="middle" fontSize={9} fontWeight="bold" fill={colors.transition.text}
        >
          3~12족 (전이금속)
        </text>

        {/* ── 주기 레이블 (왼쪽) ── */}
        {[1, 2, 3, 4].map((period) => {
          const y = rowY(period)
          return (
            <g key={`period-${period}`}>
              <rect x={2} y={y + 4} width={40} height={20} rx={3} fill="#F1F5F9" stroke="#CBD5E1" strokeWidth={1} />
              <text x={22} y={y + 18} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#475569">
                {period}주기
              </text>
            </g>
          )
        })}

        {/* ── 주기별 가로 강조 줄 ── */}
        {[1, 2, 3, 4].map((period) => {
          const y = rowY(period)
          // 전체 행 배경
          return (
            <rect
              key={`rowbg-${period}`}
              x={LEFT} y={y}
              width={18 * (CW + GAP) - GAP} height={CH}
              rx={3} fill="none"
              stroke={period % 2 === 0 ? '#E2E8F0' : 'none'}
              strokeWidth={1}
            />
          )
        })}

        {/* ── 원소 셀 ── */}
        {elements.map((el) => {
          const c = colors[el.colorKey]
          const x = colX(el.col)
          const y = rowY(el.period)
          const groupNum = el.col + 1
          return (
            <g key={el.symbol}>
              <rect x={x} y={y} width={CW} height={CH} rx={3}
                fill={c.bg} stroke={c.border} strokeWidth={1.5}
              />
              <text x={x + CW / 2} y={y + 17} textAnchor="middle" fontSize={13} fontWeight="bold" fill={c.text}>
                {el.symbol}
              </text>
              <text x={x + CW / 2} y={y + 30} textAnchor="middle" fontSize={8} fill={c.text} opacity={0.75}>
                {groupNum}족
              </text>
              <text x={x + CW / 2} y={y + 39} textAnchor="middle" fontSize={7} fill="#94A3B8">
                {el.period}주기
              </text>
            </g>
          )
        })}

        {/* ── 전이금속 통합 블록 (2~4주기) ── */}
        {[2, 3, 4].map((period) => {
          const y = rowY(period)
          const label = period === 4 ? '전이금속 10개 (Sc~Zn)' : '전이금속 (3~12족)'
          return (
            <g key={`trans-${period}`}>
              <rect
                x={transitionStartX} y={y}
                width={transitionWidth} height={CH}
                rx={3}
                fill={colors.transition.bg} stroke={colors.transition.border} strokeWidth={1.5}
                strokeDasharray={period === 2 ? 'none' : '4 2'}
              />
              <text
                x={transitionStartX + transitionWidth / 2} y={y + CH / 2 + 5}
                textAnchor="middle" fontSize={period === 4 ? 9 : 10}
                fontWeight="bold" fill={colors.transition.text}
              >
                {label}
              </text>
            </g>
          )
        })}

        {/* 1주기에는 전이금속 없음 — 빈 블록 표시 */}
        <rect
          x={transitionStartX} y={rowY(1)}
          width={transitionWidth} height={CH}
          rx={3} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={1}
          strokeDasharray="4 2"
        />
        <text
          x={transitionStartX + transitionWidth / 2} y={rowY(1) + CH / 2 + 4}
          textAnchor="middle" fontSize={9} fill="#CBD5E1"
        >
          (해당 없음)
        </text>

        {/* ── 주기 방향 화살표 (오른쪽) ── */}
        <line
          x1={LEFT + 18 * (CW + GAP) + 4}
          y1={rowY(1) + CH / 2}
          x2={LEFT + 18 * (CW + GAP) + 4}
          y2={rowY(4) + CH / 2}
          stroke="#64748B" strokeWidth={1.5}
          markerEnd={`url(#${ARROW_ID})`}
        />
        <text
          x={LEFT + 18 * (CW + GAP) + 13}
          y={(rowY(1) + rowY(4)) / 2 + CH / 2}
          textAnchor="middle" fontSize={8} fill="#64748B"
          transform={`rotate(90, ${LEFT + 18 * (CW + GAP) + 13}, ${(rowY(1) + rowY(4)) / 2 + CH / 2})`}
        >
          주기 증가 →
        </text>

        {/* ── 하단 범례 ── */}
        <line x1={8} y1={298} x2={472} y2={298} stroke="#E2E8F0" strokeWidth={1} />
        {/* 색상 범례 */}
        {([
          { colorKey: 'g1'        as const, label: '1족(알칼리)', x: 12 },
          { colorKey: 'g2'        as const, label: '2족(알칼리토)', x: 90 },
          { colorKey: 'transition'as const, label: '전이금속', x: 185 },
          { colorKey: 'g13to17'   as const, label: '13~17족', x: 258 },
          { colorKey: 'g18'       as const, label: '18족(비활성)', x: 335 },
        ]).map(({ colorKey, label, x }) => {
          const c = colors[colorKey]
          return (
            <g key={label}>
              <rect x={x} y={305} width={10} height={10} rx={2} fill={c.bg} stroke={c.border} strokeWidth={1} />
              <text x={x + 13} y={314} fontSize={8} fill="#475569">{label}</text>
            </g>
          )
        })}
      </svg>
    </div>
  )
}
