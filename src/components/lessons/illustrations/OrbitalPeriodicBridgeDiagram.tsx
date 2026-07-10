export default function OrbitalPeriodicBridgeDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="오비탈 구역으로 본 주기율표와 화학 결합으로의 연결"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          오비탈 구역과 주기율표
        </text>

        {/* 단순화한 주기율표 블록 */}
        <g>
          {/* s 구역 */}
          <rect x={30} y={44} width={40} height={140} fill="#DBEAFE" stroke="#3B82F6" strokeWidth={1.3} />
          <text x={50} y={195} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#1E40AF">s 구역</text>
          <text x={50} y={208} textAnchor="middle" fontSize={8} fill="#1E40AF">1, 2족</text>

          {/* d 구역 */}
          <rect x={70} y={64} width={200} height={80} fill="#DCFCE7" stroke="#22C55E" strokeWidth={1.3} />
          <text x={170} y={195} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#15803D">d 구역</text>
          <text x={170} y={208} textAnchor="middle" fontSize={8} fill="#15803D">3~12족 (전이 금속)</text>

          {/* p 구역 */}
          <rect x={270} y={44} width={100} height={140} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.3} />
          <text x={320} y={195} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#B45309">p 구역</text>
          <text x={320} y={208} textAnchor="middle" fontSize={8} fill="#B45309">13~18족</text>

          {/* f 구역 */}
          <rect x={100} y={150} width={170} height={26} fill="#F3E8FF" stroke="#A855F7" strokeWidth={1.3} />
          <text x={185} y={167} textAnchor="middle" fontSize={9} fontWeight="bold" fill="#7E22CE">f 구역 (란타넘·악티늄족)</text>
        </g>

        {/* 화살표: 오비탈 -> 결합 */}
        <line x1={220} y1={225} x2={220} y2={245} stroke="#94A3B8" strokeWidth={1.5} markerEnd="url(#bridgeArrow)" />
        <defs>
          <marker id="bridgeArrow" markerWidth="8" markerHeight="8" refX="4" refY="7" orient="auto">
            <path d="M0,0 L8,0 L4,8 Z" fill="#94A3B8" />
          </marker>
        </defs>

        {/* 결합 아이콘: 두 원자 오비탈이 겹치는 모습 */}
        <g>
          <ellipse cx={190} cy={280} rx={26} ry={16} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.3} opacity={0.85} />
          <ellipse cx={250} cy={280} rx={26} ry={16} fill="#DBEAFE" stroke="#3B82F6" strokeWidth={1.3} opacity={0.85} />
          <text x={220} y={306} textAnchor="middle" fontSize={9} fill="#334155">오비탈이 겹쳐 공유 결합 형성</text>
        </g>
      </svg>
    </div>
  )
}
