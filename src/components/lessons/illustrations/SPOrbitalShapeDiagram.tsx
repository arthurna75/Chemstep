const AXIS_COLOR = '#64748B'

type Panel = {
  cx: number
  labelBefore: string
  axis?: 'x' | 'y' | 'z'
  labelAfter: string
  labelColor: string
  gradId: string
  edgeColor: string
}

const PANELS: Panel[] = [
  { cx: 69, labelBefore: 's', labelAfter: ' 오비탈', labelColor: '#1E40AF', gradId: 'sOrbitalGrad', edgeColor: '#3B82F6' },
  { cx: 176, labelBefore: 'p', axis: 'x', labelAfter: ' 오비탈', labelColor: '#B45309', gradId: 'pxOrbitalGrad', edgeColor: '#F59E0B' },
  { cx: 284, labelBefore: 'p', axis: 'y', labelAfter: ' 오비탈', labelColor: '#15803D', gradId: 'pyOrbitalGrad', edgeColor: '#22C55E' },
  { cx: 391, labelBefore: 'p', axis: 'z', labelAfter: ' 오비탈', labelColor: '#7E22CE', gradId: 'pzOrbitalGrad', edgeColor: '#A855F7' },
]

const CY = 118

function AxisTriad({ cx }: { cx: number }) {
  return (
    <g>
      {/* z축: 수직 */}
      <line x1={cx} y1={CY} x2={cx} y2={CY - 42} stroke={AXIS_COLOR} strokeWidth={1.3} markerEnd="url(#axisArrow)" />
      <line x1={cx} y1={CY} x2={cx} y2={CY + 26} stroke={AXIS_COLOR} strokeWidth={1} strokeDasharray="2,3" />
      <text x={cx} y={CY - 48} textAnchor="middle" fontSize={9} fill={AXIS_COLOR}>z</text>

      {/* y축: 우상 대각선 */}
      <line x1={cx} y1={CY} x2={cx + 36} y2={CY - 21} stroke={AXIS_COLOR} strokeWidth={1.3} markerEnd="url(#axisArrow)" />
      <line x1={cx} y1={CY} x2={cx - 23} y2={CY + 13} stroke={AXIS_COLOR} strokeWidth={1} strokeDasharray="2,3" />
      <text x={cx + 42} y={CY - 24} textAnchor="middle" fontSize={9} fill={AXIS_COLOR}>y</text>

      {/* x축: 좌하 대각선 */}
      <line x1={cx} y1={CY} x2={cx - 40} y2={CY + 14} stroke={AXIS_COLOR} strokeWidth={1.3} markerEnd="url(#axisArrow)" />
      <line x1={cx} y1={CY} x2={cx + 24} y2={CY - 9} stroke={AXIS_COLOR} strokeWidth={1} strokeDasharray="2,3" />
      <text x={cx - 46} y={CY + 19} textAnchor="middle" fontSize={9} fill={AXIS_COLOR}>x</text>
    </g>
  )
}

export default function SPOrbitalShapeDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 460 310"
        width="100%"
        style={{ maxWidth: 460 }}
        aria-label="s 오비탈과 p 오비탈의 모양 비교 (x, y, z축 방향 표시)"
      >
        <defs>
          <marker id="axisArrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={AXIS_COLOR} />
          </marker>
          <radialGradient id="sOrbitalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>
          <radialGradient id="pxOrbitalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F59E0B" />
          </radialGradient>
          <radialGradient id="pyOrbitalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#22C55E" />
          </radialGradient>
          <radialGradient id="pzOrbitalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#A855F7" />
          </radialGradient>
        </defs>

        <text x={230} y={20} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          s 오비탈과 p 오비탈의 모양
        </text>

        {PANELS.map((panel) => (
          <g key={panel.gradId}>
            <AxisTriad cx={panel.cx} />
          </g>
        ))}

        {/* s 오비탈: 구형, 원점에 위치 */}
        <circle cx={PANELS[0].cx} cy={CY} r={22} fill="url(#sOrbitalGrad)" stroke={PANELS[0].edgeColor} strokeWidth={1.2} />
        <circle cx={PANELS[0].cx} cy={CY} r={2.5} fill="#334155" />

        {/* p_x 오비탈: x축 대각선 방향 아령형 */}
        <ellipse cx={PANELS[1].cx - 21} cy={CY + 7.5} rx={18} ry={9} fill="url(#pxOrbitalGrad)" stroke={PANELS[1].edgeColor} strokeWidth={1.2} transform={`rotate(-20 ${PANELS[1].cx - 21} ${CY + 7.5})`} />
        <ellipse cx={PANELS[1].cx + 21} cy={CY - 7.5} rx={18} ry={9} fill="url(#pxOrbitalGrad)" stroke={PANELS[1].edgeColor} strokeWidth={1.2} transform={`rotate(-20 ${PANELS[1].cx + 21} ${CY - 7.5})`} />
        <circle cx={PANELS[1].cx} cy={CY} r={2.5} fill="#334155" />

        {/* p_y 오비탈: y축 대각선 방향 아령형 */}
        <ellipse cx={PANELS[2].cx + 19} cy={CY - 11} rx={18} ry={9} fill="url(#pyOrbitalGrad)" stroke={PANELS[2].edgeColor} strokeWidth={1.2} transform={`rotate(-30 ${PANELS[2].cx + 19} ${CY - 11})`} />
        <ellipse cx={PANELS[2].cx - 19} cy={CY + 11} rx={18} ry={9} fill="url(#pyOrbitalGrad)" stroke={PANELS[2].edgeColor} strokeWidth={1.2} transform={`rotate(-30 ${PANELS[2].cx - 19} ${CY + 11})`} />
        <circle cx={PANELS[2].cx} cy={CY} r={2.5} fill="#334155" />

        {/* p_z 오비탈: z축(수직) 방향 아령형 */}
        <ellipse cx={PANELS[3].cx} cy={CY - 22} rx={9} ry={18} fill="url(#pzOrbitalGrad)" stroke={PANELS[3].edgeColor} strokeWidth={1.2} />
        <ellipse cx={PANELS[3].cx} cy={CY + 22} rx={9} ry={18} fill="url(#pzOrbitalGrad)" stroke={PANELS[3].edgeColor} strokeWidth={1.2} />
        <circle cx={PANELS[3].cx} cy={CY} r={2.5} fill="#334155" />

        {PANELS.map((panel) => (
          <text key={`label-${panel.gradId}`} x={panel.cx} y={184} textAnchor="middle" fontSize={10} fontWeight="bold" fill={panel.labelColor}>
            {panel.axis ? (
              <>
                {panel.labelBefore}
                <tspan dy={2} fontSize={7}>{panel.axis}</tspan>
                <tspan dy={-2}>{panel.labelAfter}</tspan>
              </>
            ) : (
              `${panel.labelBefore}${panel.labelAfter}`
            )}
          </text>
        ))}

        <rect x={20} y={200} width={420} height={90} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={230} y={222} textAnchor="middle" fontSize={10} fill="#334155">
          s 오비탈: 방향 구분 없이 1가지 (구형)
        </text>
        <text x={230} y={242} textAnchor="middle" fontSize={10} fill="#334155">
          p 오비탈: 서로 수직인 x, y, z축 방향으로 3가지 (아령형)
        </text>
        <text x={230} y={262} textAnchor="middle" fontSize={10} fill="#334155">
          같은 주양자수 n에서 s보다 p의 에너지가 약간 높음
        </text>
        <text x={230} y={282} textAnchor="middle" fontSize={10} fill="#334155">
          n = 1에는 p 오비탈이 존재하지 않음
        </text>
      </svg>
    </div>
  )
}
