export default function IonizationEnergyDiagram() {
  // ── 데이터 ─────────────────────────────────────────────────
  const data = [
    { symbol: 'Li', value: 520,  note: '' },
    { symbol: 'Be', value: 900,  note: '' },
    { symbol: 'B',  value: 800,  note: '↓ 예외' },
    { symbol: 'C',  value: 1086, note: '' },
    { symbol: 'N',  value: 1402, note: '↑ 예외' },
    { symbol: 'O',  value: 1314, note: '' },
    { symbol: 'F',  value: 1681, note: '' },
    { symbol: 'Ne', value: 2081, note: '' },
  ]

  const MAX_VALUE   = 2081
  const MAX_HEIGHT  = 180   // px — 최대 막대 높이
  const BAR_WIDTH   = 36
  const BAR_GAP     = 12

  // ── 좌표 상수 ──────────────────────────────────────────────
  const CHART_LEFT   = 52   // y축 레이블 여백
  const CHART_BOTTOM = 258  // 막대 하단 기준선 y
  const CHART_RIGHT  = CHART_LEFT + data.length * (BAR_WIDTH + BAR_GAP) - BAR_GAP + 8

  const barX = (i: number) => CHART_LEFT + i * (BAR_WIDTH + BAR_GAP)
  const barH = (v: number) => Math.round((v / MAX_VALUE) * MAX_HEIGHT)
  const barY = (v: number) => CHART_BOTTOM - barH(v)

  // y축 눈금 (상대값 → 실제 kJ/mol)
  const yTicks = [0, 500, 1000, 1500, 2000]

  // 색상
  const barColor     = (sym: string) => sym === 'Ne' ? '#F59E0B' : '#3B82F6'
  const barFill      = (sym: string) => sym === 'Ne' ? '#FEF3C7' : '#DBEAFE'
  const noteColor    = (note: string) => note.startsWith('↑') ? '#EF4444' : '#F59E0B'

  const ARROW_ID = 'ieArrow'

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 460 340"
        width="100%"
        style={{ maxWidth: 460, minWidth: 340 }}
        aria-label="1차 이온화 에너지 경향 (2주기 원소)"
      >
        <defs>
          <marker id={ARROW_ID} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L6,3 z" fill="#64748B" />
          </marker>
        </defs>

        {/* ── 제목 ── */}
        <text x={230} y={18} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          1차 이온화 에너지 경향 (2주기 원소)
        </text>

        {/* ── 우상단 안내 문구 ── */}
        <rect x={200} y={26} width={252} height={22} rx={4} fill="#EFF6FF" stroke="#93C5FD" strokeWidth={1} />
        <text x={326} y={41} textAnchor="middle" fontSize={8} fill="#1D4ED8">
          → 주기가 증가할수록 이온화 에너지 대체로 증가
        </text>

        {/* ── y축 눈금 및 격자선 ── */}
        {yTicks.map((tick) => {
          const y = CHART_BOTTOM - Math.round((tick / MAX_VALUE) * MAX_HEIGHT)
          return (
            <g key={`tick-${tick}`}>
              {/* 격자선 */}
              <line x1={CHART_LEFT - 4} y1={y} x2={CHART_RIGHT} y2={y}
                stroke="#F1F5F9" strokeWidth={tick === 0 ? 0 : 1}
              />
              {/* 눈금 레이블 */}
              <text x={CHART_LEFT - 6} y={y + 3}
                textAnchor="end" fontSize={8} fill="#94A3B8"
              >
                {tick}
              </text>
            </g>
          )
        })}

        {/* ── y축 레이블 ── */}
        <text
          x={10} y={CHART_BOTTOM - MAX_HEIGHT / 2}
          textAnchor="middle" fontSize={8} fill="#64748B"
          transform={`rotate(-90, 10, ${CHART_BOTTOM - MAX_HEIGHT / 2})`}
        >
          이온화 에너지 (kJ/mol)
        </text>

        {/* ── 기준선 ── */}
        <line x1={CHART_LEFT - 4} y1={CHART_BOTTOM} x2={CHART_RIGHT} y2={CHART_BOTTOM}
          stroke="#CBD5E1" strokeWidth={1.5}
        />

        {/* ── 막대 + 레이블 ── */}
        {data.map((el, i) => {
          const x  = barX(i)
          const h  = barH(el.value)
          const y  = barY(el.value)
          const cx = x + BAR_WIDTH / 2
          return (
            <g key={el.symbol}>
              {/* 막대 */}
              <rect
                x={x} y={y}
                width={BAR_WIDTH} height={h}
                rx={3}
                fill={barFill(el.symbol)}
                stroke={barColor(el.symbol)}
                strokeWidth={1.5}
              />

              {/* 값 레이블 (막대 상단) */}
              <text x={cx} y={y - 4}
                textAnchor="middle" fontSize={7.5} fontWeight="bold"
                fill={barColor(el.symbol)}
              >
                {el.value}
              </text>

              {/* 예외 노트 (N↑, B↓) */}
              {el.note && (
                <text x={cx} y={y - 14}
                  textAnchor="middle" fontSize={8} fontWeight="bold"
                  fill={noteColor(el.note)}
                >
                  {el.note}
                </text>
              )}

              {/* x축 원소 기호 */}
              <text x={cx} y={CHART_BOTTOM + 14}
                textAnchor="middle" fontSize={11} fontWeight="bold"
                fill={el.symbol === 'Ne' ? '#D97706' : '#1D4ED8'}
              >
                {el.symbol}
              </text>
            </g>
          )
        })}

        {/* ── 전체 추세 화살표 (막대 상단 위) ── */}
        <line
          x1={barX(0) + BAR_WIDTH / 2}
          y1={CHART_BOTTOM - MAX_HEIGHT - 8}
          x2={barX(data.length - 1) + BAR_WIDTH / 2}
          y2={CHART_BOTTOM - MAX_HEIGHT - 8}
          stroke="#64748B" strokeWidth={1} strokeDasharray="4 2"
          markerEnd={`url(#${ARROW_ID})`}
        />

        {/* ── N 예외 설명 박스 ── */}
        {(() => {
          const ni = data.findIndex((d) => d.symbol === 'N')
          const oi = data.findIndex((d) => d.symbol === 'O')
          const nx = barX(ni) + BAR_WIDTH / 2
          const ox = barX(oi) + BAR_WIDTH / 2
          return (
            <g>
              {/* N→O 사이 꺾임 강조선 */}
              <line
                x1={nx} y1={barY(data[ni].value)}
                x2={ox} y2={barY(data[oi].value)}
                stroke="#EF4444" strokeWidth={1.5} strokeDasharray="3 2"
              />
              {/* 설명 박스 */}
              <rect x={240} y={82} width={212} height={36} rx={4}
                fill="#FFF7ED" stroke="#FDba74" strokeWidth={1}
              />
              <text x={346} y={96} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#C2410C">
                N &gt; O — 반채움(half-filled) 안정성
              </text>
              <text x={346} y={110} textAnchor="middle" fontSize={7.5} fill="#92400E">
                N: 2p³ 완전 반채움 → 전자 제거가 더 어려움
              </text>
            </g>
          )
        })()}

        {/* ── B 예외 설명 ── */}
        <rect x={52} y={82} width={160} height={28} rx={4}
          fill="#FFFBEB" stroke="#FDE68A" strokeWidth={1}
        />
        <text x={132} y={96} textAnchor="middle" fontSize={8} fontWeight="bold" fill="#D97706">
          Be &gt; B — 오비탈 에너지 차이
        </text>
        <text x={132} y={108} textAnchor="middle" fontSize={7.5} fill="#92400E">
          B: 2p 오비탈(에너지 높음) → 제거 쉬움
        </text>

        {/* ── 하단 설명 ── */}
        <rect x={8} y={282} width={444} height={48} rx={6}
          fill="#F8FAFC" stroke="#E2E8F0" strokeWidth={1}
        />
        <text x={230} y={296} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#1E293B">
          주기적 경향 요약
        </text>
        <text x={16} y={310} fontSize={8.5} fill="#475569">
          • 같은 주기에서 오른쪽으로 갈수록 대체로 증가 (유효 핵전하 ↑, 전자 제거 어려움)
        </text>
        <text x={16} y={324} fontSize={8.5} fill="#475569">
          • 같은 족에서는 아래로 갈수록 감소 (전자 껍질 증가 → 핵전하 차폐 효과 ↑)
        </text>
      </svg>
    </div>
  )
}
