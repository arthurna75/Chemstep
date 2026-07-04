type Mode = 'default' | 'classification' | 'trend-radius' | 'trend-ie'

interface PeriodicTableMiniProps {
  mode?: Mode
  caption?: string
  highlightGroups?: number[]
}

// 원소 데이터: { symbol, Z, group, period }
const ELEMENTS = [
  // 1족
  { symbol: 'H',  Z: 1,  group: 1,  period: 1 },
  { symbol: 'Li', Z: 3,  group: 1,  period: 2 },
  { symbol: 'Na', Z: 11, group: 1,  period: 3 },
  { symbol: 'K',  Z: 19, group: 1,  period: 4 },
  // 2족
  { symbol: 'Be', Z: 4,  group: 2,  period: 2 },
  { symbol: 'Mg', Z: 12, group: 2,  period: 3 },
  { symbol: 'Ca', Z: 20, group: 2,  period: 4 },
  // 13족
  { symbol: 'B',  Z: 5,  group: 13, period: 2 },
  { symbol: 'Al', Z: 13, group: 13, period: 3 },
  { symbol: 'Ga', Z: 31, group: 13, period: 4 },
  // 14족
  { symbol: 'C',  Z: 6,  group: 14, period: 2 },
  { symbol: 'Si', Z: 14, group: 14, period: 3 },
  { symbol: 'Ge', Z: 32, group: 14, period: 4 },
  // 15족
  { symbol: 'N',  Z: 7,  group: 15, period: 2 },
  { symbol: 'P',  Z: 15, group: 15, period: 3 },
  { symbol: 'As', Z: 33, group: 15, period: 4 },
  // 16족
  { symbol: 'O',  Z: 8,  group: 16, period: 2 },
  { symbol: 'S',  Z: 16, group: 16, period: 3 },
  { symbol: 'Se', Z: 34, group: 16, period: 4 },
  // 17족
  { symbol: 'F',  Z: 9,  group: 17, period: 2 },
  { symbol: 'Cl', Z: 17, group: 17, period: 3 },
  { symbol: 'Br', Z: 35, group: 17, period: 4 },
  // 18족
  { symbol: 'He', Z: 2,  group: 18, period: 1 },
  { symbol: 'Ne', Z: 10, group: 18, period: 2 },
  { symbol: 'Ar', Z: 18, group: 18, period: 3 },
  { symbol: 'Kr', Z: 36, group: 18, period: 4 },
]

// 컬럼 x 좌표 (group → x)
const GROUP_X: Record<number, number> = {
  1:  10,
  2:  56,
  // 3~12 전이금속 블록: x=102, width=220 (별도 처리)
  13: 324,
  14: 370,
  15: 416,
  16: 462,
  17: 508,  // 실제 SVG viewBox 너비에 맞게 조정 필요 → viewBox 확장
  18: 554,
}

// 실제 viewBox 너비: 1족(10)+44 + 2족(56)+44 + transition(102~322) + 13~18(324~598) + 여유 → 610
// 하지만 요구사항 viewBox="0 0 520 240"에 맞추기 위해 17, 18족 x 재조정
const GROUP_X_FINAL: Record<number, number> = {
  1:  10,
  2:  56,
  13: 270,
  14: 316,
  15: 362,
  16: 408,
  17: 454,
  18: 500,
}

const CELL_W = 44
const CELL_H = 36
const HEADER_Y = 14
const ROW_START_Y = 28

// 전이금속 블록 위치
const TRANSITION_X = 102
const TRANSITION_W = 162  // (270 - 102) - 6 = 162
const TRANSITION_PERIOD4_Y = ROW_START_Y + 3 * CELL_H  // 4주기

// 색상 계산 함수
function getCellColor(
  symbol: string,
  group: number,
  period: number,
  mode: Mode
): string {
  if (mode === 'default') {
    if (group === 1) return '#DBEAFE'
    if (group === 2) return '#DCFCE7'
    if (group >= 13 && group <= 17) return '#FFEDD5'
    if (group === 18) return '#F1F5F9'
    return '#FFFFFF'
  }

  if (mode === 'classification') {
    // 비활성 기체 (18족) — 먼저 체크
    if (group === 18) return '#E2E8F0'
    // 준금속
    if (['B', 'Si', 'Ge', 'As'].includes(symbol)) return '#BBF7D0'
    // 비금속 (H 포함, 16·17족 + C,N,O,P,S,Se)
    if (symbol === 'H') return '#FED7AA'
    if (['C', 'N', 'O', 'P', 'S', 'Se'].includes(symbol)) return '#FED7AA'
    if (group === 16 || group === 17) return '#FED7AA'
    // 금속 (1·2족 + Al·Ga)
    if (group === 1 || group === 2) return '#BFDBFE'
    if (['Al', 'Ga'].includes(symbol)) return '#BFDBFE'
    return '#FFFFFF'
  }

  // trend-radius, trend-ie → default 색상
  if (group === 1) return '#DBEAFE'
  if (group === 2) return '#DCFCE7'
  if (group >= 13 && group <= 17) return '#FFEDD5'
  if (group === 18) return '#F1F5F9'
  return '#FFFFFF'
}

function getTransitionColor(mode: Mode): string {
  if (mode === 'default' || mode === 'trend-radius' || mode === 'trend-ie') return '#EDE9FE'
  if (mode === 'classification') return '#BFDBFE'  // 전이금속 = 금속
  return '#EDE9FE'
}

// 족 헤더 레이블
const GROUP_LABELS: Array<{ group: number; label: string }> = [
  { group: 1,  label: '1' },
  { group: 2,  label: '2' },
  { group: 13, label: '13' },
  { group: 14, label: '14' },
  { group: 15, label: '15' },
  { group: 16, label: '16' },
  { group: 17, label: '17' },
  { group: 18, label: '18' },
]

export default function PeriodicTableMini({ mode = 'default', caption, highlightGroups }: PeriodicTableMiniProps) {
  const isRadius = mode === 'trend-radius'
  const isIE = mode === 'trend-ie'
  const showTrend = isRadius || isIE
  const arrowColor = isRadius ? '#EF4444' : '#3B82F6'

  // 상단 여백 (트렌드 화살표용)
  const topPad = showTrend ? 24 : 0
  const leftPad = showTrend ? 48 : 0
  const svgW = 560 + leftPad
  const svgH = 240 + topPad

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full max-w-2xl"
        aria-label="미니 주기율표"
      >
        {/* 족 헤더 */}
        {GROUP_LABELS.map(({ group, label }) => {
          const x = GROUP_X_FINAL[group] + leftPad + CELL_W / 2
          return (
            <text
              key={group}
              x={x}
              y={HEADER_Y + topPad}
              textAnchor="middle"
              fontSize={9}
              fill="#64748B"
              fontWeight="600"
            >
              {label}족
            </text>
          )
        })}

        {/* 전이금속 블록 헤더 */}
        <text
          x={TRANSITION_X + leftPad + TRANSITION_W / 2}
          y={HEADER_Y + topPad}
          textAnchor="middle"
          fontSize={9}
          fill="#64748B"
          fontWeight="600"
        >
          3~12족
        </text>

        {/* 주기 레이블 */}
        {[1, 2, 3, 4].map((period) => (
          <text
            key={period}
            x={leftPad > 0 ? leftPad - 6 : 4}
            y={ROW_START_Y + topPad + (period - 1) * CELL_H + CELL_H / 2 + 4}
            textAnchor="end"
            fontSize={9}
            fill="#94A3B8"
          >
            {period}
          </text>
        ))}

        {/* 전이금속 통합 블록 (4주기) */}
        <rect
          x={TRANSITION_X + leftPad}
          y={TRANSITION_PERIOD4_Y + topPad}
          width={TRANSITION_W}
          height={CELL_H - 2}
          rx={4}
          fill={getTransitionColor(mode)}
          stroke="#CBD5E1"
          strokeWidth={0.5}
        />
        <text
          x={TRANSITION_X + leftPad + TRANSITION_W / 2}
          y={TRANSITION_PERIOD4_Y + topPad + CELL_H / 2 - 4}
          textAnchor="middle"
          fontSize={8}
          fill="#6B7280"
          fontWeight="600"
        >
          전이 금속
        </text>
        <text
          x={TRANSITION_X + leftPad + TRANSITION_W / 2}
          y={TRANSITION_PERIOD4_Y + topPad + CELL_H / 2 + 7}
          textAnchor="middle"
          fontSize={7}
          fill="#9CA3AF"
        >
          (3~12족, Sc–Zn)
        </text>

        {/* 2·3주기 전이금속 자리 — 빈 회색 블록 */}
        {[2, 3].map((period) => (
          <rect
            key={period}
            x={TRANSITION_X + leftPad}
            y={ROW_START_Y + topPad + (period - 1) * CELL_H}
            width={TRANSITION_W}
            height={CELL_H - 2}
            rx={4}
            fill="#F8FAFC"
            stroke="#E2E8F0"
            strokeWidth={0.5}
            strokeDasharray="3 2"
          />
        ))}

        {/* 원소 셀 */}
        {ELEMENTS.map((el) => {
          const x = GROUP_X_FINAL[el.group] + leftPad
          const y = ROW_START_Y + topPad + (el.period - 1) * CELL_H
          const fill = highlightGroups?.includes(el.group)
            ? '#BFDBFE'
            : getCellColor(el.symbol, el.group, el.period, mode)

          return (
            <g key={el.symbol}>
              <rect
                x={x}
                y={y}
                width={CELL_W - 2}
                height={CELL_H - 2}
                rx={4}
                fill={fill}
                stroke="#CBD5E1"
                strokeWidth={0.5}
              />
              {/* 원자 번호 */}
              <text
                x={x + 3}
                y={y + 9}
                fontSize={6.5}
                fill="#6B7280"
              >
                {el.Z}
              </text>
              {/* 원소 기호 */}
              <text
                x={x + (CELL_W - 2) / 2}
                y={y + CELL_H / 2 + 5}
                textAnchor="middle"
                fontSize={13}
                fontWeight="700"
                fill="#1E3A5F"
              >
                {el.symbol}
              </text>
            </g>
          )
        })}

        {/* 트렌드 화살표 오버레이 */}
        {showTrend && (
          <>
            {/* 상단 가로 화살표 (주기 방향) */}
            <defs>
              <marker id="arrowH" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={arrowColor} />
              </marker>
              <marker id="arrowV" markerWidth="6" markerHeight="6" refX="3" refY="5" orient="auto">
                <path d="M0,0 L3,6 L6,0 Z" fill={arrowColor} />
              </marker>
              <marker id="arrowVUp" markerWidth="6" markerHeight="6" refX="3" refY="1" orient="auto">
                <path d="M0,6 L3,0 L6,6 Z" fill={arrowColor} />
              </marker>
            </defs>

            {/* 가로 화살표 선 */}
            <line
              x1={leftPad + 10}
              y1={topPad - 6}
              x2={svgW - 14}
              y2={topPad - 6}
              stroke={arrowColor}
              strokeWidth={1.5}
              markerEnd="url(#arrowH)"
            />
            <text
              x={leftPad + 10 + (svgW - leftPad - 24) / 2}
              y={topPad - 10}
              textAnchor="middle"
              fontSize={8.5}
              fill={arrowColor}
              fontWeight="600"
            >
              {isRadius
                ? '원자 반지름 감소 →'
                : '이온화 에너지·전기 음성도 증가 →'}
            </text>

            {/* 세로 화살표 선 */}
            {isRadius ? (
              <>
                {/* 아래 방향 (증가) */}
                <line
                  x1={leftPad - 10}
                  y1={topPad + ROW_START_Y}
                  x2={leftPad - 10}
                  y2={topPad + ROW_START_Y + 3 * CELL_H + 20}
                  stroke={arrowColor}
                  strokeWidth={1.5}
                  markerEnd="url(#arrowV)"
                />
                <text
                  x={leftPad - 22}
                  y={topPad + ROW_START_Y + 1.5 * CELL_H + 4}
                  textAnchor="middle"
                  fontSize={8}
                  fill={arrowColor}
                  fontWeight="600"
                  transform={`rotate(-90, ${leftPad - 22}, ${topPad + ROW_START_Y + 1.5 * CELL_H + 4})`}
                >
                  ↓ 증가
                </text>
              </>
            ) : (
              <>
                {/* 위 방향 (감소: 아래로 갈수록 감소) */}
                <line
                  x1={leftPad - 10}
                  y1={topPad + ROW_START_Y + 3 * CELL_H + 20}
                  x2={leftPad - 10}
                  y2={topPad + ROW_START_Y}
                  stroke={arrowColor}
                  strokeWidth={1.5}
                  markerEnd="url(#arrowVUp)"
                />
                <text
                  x={leftPad - 22}
                  y={topPad + ROW_START_Y + 1.5 * CELL_H + 4}
                  textAnchor="middle"
                  fontSize={8}
                  fill={arrowColor}
                  fontWeight="600"
                  transform={`rotate(-90, ${leftPad - 22}, ${topPad + ROW_START_Y + 1.5 * CELL_H + 4})`}
                >
                  ↑ 감소
                </text>
              </>
            )}
          </>
        )}

        {/* 범례 (classification 모드) */}
        {mode === 'classification' && (
          <g transform={`translate(${leftPad + 10}, ${topPad + ROW_START_Y + 4 * CELL_H + 8})`}>
            {[
              { color: '#BFDBFE', label: '금속' },
              { color: '#FED7AA', label: '비금속' },
              { color: '#BBF7D0', label: '준금속' },
              { color: '#E2E8F0', label: '비활성 기체' },
            ].map(({ color, label }, i) => (
              <g key={label} transform={`translate(${i * 110}, 0)`}>
                <rect width={12} height={12} rx={2} fill={color} stroke="#CBD5E1" strokeWidth={0.5} />
                <text x={16} y={10} fontSize={9} fill="#374151">{label}</text>
              </g>
            ))}
          </g>
        )}
      </svg>

      {caption && (
        <p className="text-xs text-gray-500 mt-1 text-center">{caption}</p>
      )}
    </div>
  )
}
