function SpinArrow({ x, y, up }: { x: number; y: number; up: boolean }) {
  const y1 = up ? y + 16 : y + 2
  const y2 = up ? y + 2 : y + 16
  return (
    <line
      x1={x}
      y1={y1}
      x2={x}
      y2={y2}
      stroke="#1E40AF"
      strokeWidth={1.8}
      markerEnd="url(#spinArrowHead)"
    />
  )
}

export default function AufbauHundDiagram() {
  const boxY = 150
  const boxSize = 26
  const startX = 190

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="쌓음 원리와 훈트 규칙: 질소(N) 2p 오비탈 전자배치"
      >
        <defs>
          <marker id="spinArrowHead" markerWidth="6" markerHeight="6" refX="3" refY="0" orient="auto">
            <path d="M0,6 L3,0 L6,6 Z" fill="#1E40AF" />
          </marker>
        </defs>

        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          쌓음 원리 순서와 훈트 규칙 (질소 N, Z=7)
        </text>

        {/* 채움 순서 */}
        <text x={30} y={50} fontSize={11} fontWeight="bold" fill="#334155">쌓음 원리 채움 순서</text>
        <text x={30} y={72} fontSize={11} fill="#3B82F6">1s → 2s → 2p → 3s → 3p → 4s → 3d …</text>

        {/* 1s, 2s 박스 (전자 2개씩, 꽉 참) */}
        <text x={30} y={110} fontSize={10} fontWeight="bold" fill="#334155">전자배치: 1s²2s²2p³</text>

        <g>
          <rect x={30} y={boxY} width={boxSize} height={boxSize} fill="#EFF6FF" stroke="#3B82F6" strokeWidth={1.3} />
          <SpinArrow x={38} y={boxY} up={true} />
          <SpinArrow x={48} y={boxY} up={false} />
          <text x={43} y={boxY + 42} textAnchor="middle" fontSize={9} fill="#1E40AF">1s</text>

          <rect x={72} y={boxY} width={boxSize} height={boxSize} fill="#EFF6FF" stroke="#3B82F6" strokeWidth={1.3} />
          <SpinArrow x={80} y={boxY} up={true} />
          <SpinArrow x={90} y={boxY} up={false} />
          <text x={85} y={boxY + 42} textAnchor="middle" fontSize={9} fill="#1E40AF">2s</text>
        </g>

        {/* 2p 박스 3칸 - 훈트 규칙: 각각 1개씩, 같은 방향 스핀 */}
        <g>
          {[0, 1, 2].map(i => (
            <g key={i}>
              <rect x={startX + i * boxSize} y={boxY} width={boxSize} height={boxSize} fill="#FFFBEB" stroke="#F59E0B" strokeWidth={1.3} />
              <SpinArrow x={startX + i * boxSize + 13} y={boxY} up={true} />
            </g>
          ))}
          <text x={startX + boxSize * 1.5} y={boxY + 42} textAnchor="middle" fontSize={9} fill="#B45309">
            2pₓ  2p_y  2p_z
          </text>
        </g>

        <rect x={20} y={220} width={400} height={80} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={220} y={242} textAnchor="middle" fontSize={10} fill="#334155">
          2p 오비탈 3칸에 전자 3개가 들어갈 때
        </text>
        <text x={220} y={260} textAnchor="middle" fontSize={10} fill="#334155">
          한 칸에 몰아넣지 않고 세 칸에 하나씩, 같은 방향 스핀으로 채움
        </text>
        <text x={220} y={278} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#B45309">
          (훈트 규칙)
        </text>
      </svg>
    </div>
  )
}
