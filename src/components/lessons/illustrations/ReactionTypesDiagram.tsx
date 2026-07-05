import type { ReactNode } from 'react'

interface Box {
  label: string
  color: string
}

interface Panel {
  type: string
  borderColor: string
  bgColor: string
  titleColor: string
  reactants: Box[]
  products: Box[]
  formula: string
  general: string
}

const PANELS: Panel[] = [
  {
    type: '합성 반응',
    borderColor: '#3B82F6',
    bgColor: '#EFF6FF',
    titleColor: '#1D4ED8',
    reactants: [{ label: 'Na', color: '#3B82F6' }, { label: 'Cl₂', color: '#EF4444' }],
    products: [{ label: 'NaCl', color: '#22C55E' }],
    formula: '2Na + Cl₂ → 2NaCl',
    general: 'A + B → AB',
  },
  {
    type: '분해 반응',
    borderColor: '#F97316',
    bgColor: '#FFF7ED',
    titleColor: '#C2410C',
    reactants: [{ label: 'H₂O₂', color: '#3B82F6' }],
    products: [{ label: 'H₂O', color: '#22C55E' }, { label: 'O₂', color: '#22C55E' }],
    formula: '2H₂O₂ → 2H₂O + O₂',
    general: 'AB → A + B',
  },
  {
    type: '치환 반응',
    borderColor: '#8B5CF6',
    bgColor: '#F5F3FF',
    titleColor: '#6D28D9',
    reactants: [{ label: 'Zn', color: '#3B82F6' }, { label: 'HCl', color: '#EF4444' }],
    products: [{ label: 'ZnCl₂', color: '#22C55E' }, { label: 'H₂↑', color: '#94A3B8' }],
    formula: 'Zn + 2HCl → ZnCl₂ + H₂↑',
    general: 'A + BC → AC + B',
  },
  {
    type: '이중 치환 반응',
    borderColor: '#EC4899',
    bgColor: '#FDF2F8',
    titleColor: '#BE185D',
    reactants: [{ label: 'HCl', color: '#3B82F6' }, { label: 'NaOH', color: '#EF4444' }],
    products: [{ label: 'NaCl', color: '#22C55E' }, { label: 'H₂O', color: '#22C55E' }],
    formula: 'HCl + NaOH → NaCl + H₂O',
    general: 'AB + CD → AD + CB',
  },
  {
    type: '연소 반응',
    borderColor: '#EF4444',
    bgColor: '#FEF2F2',
    titleColor: '#B91C1C',
    reactants: [{ label: 'CH₄', color: '#3B82F6' }, { label: 'O₂', color: '#EF4444' }],
    products: [{ label: 'CO₂', color: '#22C55E' }, { label: 'H₂O', color: '#22C55E' }],
    formula: 'CH₄ + 2O₂ → CO₂ + 2H₂O',
    general: '물질 + O₂ → 산화물 + 열·빛',
  },
  {
    type: '앙금 생성 반응',
    borderColor: '#06B6D4',
    bgColor: '#ECFEFF',
    titleColor: '#0E7490',
    reactants: [{ label: 'Ag⁺', color: '#3B82F6' }, { label: 'Cl⁻', color: '#EF4444' }],
    products: [{ label: 'AgCl↓', color: '#94A3B8' }],
    formula: 'Ag⁺ + Cl⁻ → AgCl↓',
    general: '양이온 + 음이온 → 앙금(침전)',
  },
]

const PANEL_W = 160
const PANEL_H = 170
const COL_GAP = 14
const ROW_GAP = 14
const COL_X = [15, 15 + PANEL_W + COL_GAP, 15 + (PANEL_W + COL_GAP) * 2]
const ROW_Y = [40, 40 + PANEL_H + ROW_GAP]

function renderBoxRow(items: Box[], y: number, keyPrefix: string) {
  const boxW = 50
  const boxH = 30
  const plusW = 20
  const n = items.length
  const totalW = n * boxW + (n - 1) * plusW
  const startX = (PANEL_W - totalW) / 2

  const nodes: ReactNode[] = []
  items.forEach((item, i) => {
    const x = startX + i * (boxW + plusW)
    nodes.push(
      <g key={`${keyPrefix}-${i}`}>
        <rect x={x} y={y} width={boxW} height={boxH} rx="6" fill={item.color} />
        <text x={x + boxW / 2} y={y + boxH / 2 + 4} textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">
          {item.label}
        </text>
      </g>
    )
    if (i < n - 1) {
      nodes.push(
        <text
          key={`${keyPrefix}-plus-${i}`}
          x={x + boxW + plusW / 2}
          y={y + boxH / 2 + 5}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#475569"
        >
          +
        </text>
      )
    }
  })
  return nodes
}

export default function ReactionTypesDiagram() {
  return (
    <svg
      viewBox="0 0 550 410"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="화학 반응 유형 6가지 개요: 합성 반응, 분해 반응, 치환 반응, 이중 치환 반응, 연소 반응, 앙금 생성 반응을 각각 반응물 박스와 생성물 박스, 화살표로 간단히 도식화"
      className="w-full max-w-2xl mx-auto"
    >
      {/* 제목 */}
      <text x="275" y="20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        여러 가지 화학 반응 유형
      </text>

      <defs>
        <marker id="rtArrow" markerWidth="8" markerHeight="6" refX="4" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#475569" />
        </marker>
      </defs>

      {PANELS.map((panel, idx) => {
        const col = idx % 3
        const row = Math.floor(idx / 3)
        const x = COL_X[col]
        const y = ROW_Y[row]
        return (
          <g key={panel.type} transform={`translate(${x}, ${y})`}>
            <rect
              x="0"
              y="0"
              width={PANEL_W}
              height={PANEL_H}
              rx="10"
              fill={panel.bgColor}
              stroke={panel.borderColor}
              strokeWidth="1.5"
            />
            <text x={PANEL_W / 2} y="20" textAnchor="middle" fontSize="12" fontWeight="bold" fill={panel.titleColor}>
              {panel.type}
            </text>

            {renderBoxRow(panel.reactants, 38, `${idx}-r`)}

            <line
              x1={PANEL_W / 2}
              y1="70"
              x2={PANEL_W / 2}
              y2="92"
              stroke={panel.borderColor}
              strokeWidth="2"
              markerEnd="url(#rtArrow)"
            />

            {renderBoxRow(panel.products, 96, `${idx}-p`)}

            <text x={PANEL_W / 2} y="146" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E293B">
              {panel.formula}
            </text>
            <text x={PANEL_W / 2} y="160" textAnchor="middle" fontSize="9" fill="#64748B">
              {panel.general}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
