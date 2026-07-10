export default function SPOrbitalShapeDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="s 오비탈과 p 오비탈의 모양 비교"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          s 오비탈과 p 오비탈의 모양
        </text>

        {/* s 오비탈 */}
        <g>
          <text x={80} y={48} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#1E40AF">s 오비탈 (구형, 1가지)</text>
          <circle cx={80} cy={110} r={48} fill="#DBEAFE" stroke="#3B82F6" strokeWidth={1.5} />
          <circle cx={80} cy={110} r={5} fill="#1E40AF" />
          <text x={80} y={176} textAnchor="middle" fontSize={9} fill="#1E40AF">모든 방향에서 동일</text>
        </g>

        {/* p 오비탈 3종 */}
        <g>
          <text x={310} y={48} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#B45309">p 오비탈 (아령형, 3가지)</text>

          {/* pₓ */}
          <ellipse cx={225} cy={110} rx={26} ry={13} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.5} />
          <ellipse cx={280} cy={110} rx={26} ry={13} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.5} />
          <circle cx={252} cy={110} r={4} fill="#B45309" />
          <text x={252} y={138} textAnchor="middle" fontSize={9} fill="#B45309">pₓ</text>

          {/* p_y (세로 방향) */}
          <ellipse cx={340} cy={90} rx={13} ry={24} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.5} />
          <ellipse cx={340} cy={140} rx={13} ry={24} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.5} />
          <circle cx={340} cy={115} r={4} fill="#B45309" />
          <text x={368} y={119} textAnchor="middle" fontSize={9} fill="#B45309">p_y</text>

          {/* p_z (대각선으로 3차원 느낌) */}
          <ellipse cx={385} cy={95} rx={20} ry={11} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.2} transform="rotate(-35 385 95)" opacity={0.75} />
          <ellipse cx={385} cy={145} rx={20} ry={11} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.2} transform="rotate(-35 385 145)" opacity={0.75} />
          <text x={400} y={176} textAnchor="middle" fontSize={9} fill="#B45309">p_z</text>
        </g>

        <rect x={20} y={210} width={400} height={80} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={220} y={232} textAnchor="middle" fontSize={10} fill="#334155">
          s 오비탈: 방향 구분 없이 1가지 (구형)
        </text>
        <text x={220} y={250} textAnchor="middle" fontSize={10} fill="#334155">
          p 오비탈: 서로 수직인 x, y, z축 방향으로 3가지 (아령형)
        </text>
        <text x={220} y={268} textAnchor="middle" fontSize={10} fill="#334155">
          같은 주양자수 n에서 s보다 p의 에너지가 약간 높음
        </text>
        <text x={220} y={286} textAnchor="middle" fontSize={10} fill="#334155">
          n = 1에는 p 오비탈이 존재하지 않음
        </text>
      </svg>
    </div>
  )
}
