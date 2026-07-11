export default function BohrLimitationDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="보어 모형과 양자역학적 모형 비교 다이어그램"
      >
        <text x={220} y={24} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          궤도(보어 모형) vs 확률 분포(양자역학)
        </text>

        {/* 왼쪽: 보어 모형 */}
        <g>
          <rect x={20} y={44} width={190} height={230} rx={10} fill="#F0F9FF" stroke="#93C5FD" strokeWidth={1.5} />
          <text x={115} y={66} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1E40AF">
            보어 모형
          </text>
          <circle cx={115} cy={175} r={70} fill="none" stroke="#93C5FD" strokeWidth={1.5} strokeDasharray="4,3" />
          <circle cx={115} cy={175} r={20} fill="#BFDBFE" stroke="#3B82F6" strokeWidth={1.5} />
          <text x={115} y={180} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1E40AF">핵</text>
          <circle cx={185} cy={175} r={8} fill="#3B82F6" />
          <text x={115} y={258} textAnchor="middle" fontSize={10} fill="#1E40AF">
            전자가 정해진 궤도 위 한 점에 있음
          </text>
        </g>

        {/* 오른쪽: 양자역학적 모형 */}
        <g>
          <rect x={230} y={44} width={190} height={230} rx={10} fill="#FEF2F2" stroke="#FCA5A5" strokeWidth={1.5} />
          <text x={325} y={66} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#B91C1C">
            양자역학적 모형
          </text>
          <defs>
            <radialGradient id="quantumCloudDiagram" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity={0.9} />
              <stop offset="35%" stopColor="#EF4444" stopOpacity={0.55} />
              <stop offset="70%" stopColor="#EF4444" stopOpacity={0.2} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0} />
            </radialGradient>
          </defs>
          <circle cx={325} cy={175} r={78} fill="url(#quantumCloudDiagram)" />
          <circle cx={325} cy={175} r={16} fill="#FECACA" stroke="#EF4444" strokeWidth={1.5} />
          <text x={325} y={180} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#B91C1C">핵</text>
          <text x={325} y={258} textAnchor="middle" fontSize={10} fill="#B91C1C">
            전자가 있을 확률을 구름으로 표현
          </text>
        </g>

        <text x={220} y={300} textAnchor="middle" fontSize={11} fill="#64748B">
          진한 곳일수록 전자가 발견될 확률이 높음
        </text>
      </svg>
    </div>
  )
}
