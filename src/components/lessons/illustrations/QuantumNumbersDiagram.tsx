export default function QuantumNumbersDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 360"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="양자수 네 가지의 관계 다이어그램 (n=2 예시)"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          양자수 네 가지 (n = 2 예시)
        </text>

        {/* n */}
        <rect x={170} y={38} width={100} height={30} rx={6} fill="#DBEAFE" stroke="#3B82F6" strokeWidth={1.5} />
        <text x={220} y={58} textAnchor="middle" fontSize={12} fontWeight="bold" fill="#1E40AF">n = 2</text>

        {/* n -> l 분기선 */}
        <line x1={220} y1={68} x2={120} y2={100} stroke="#94A3B8" strokeWidth={1.5} />
        <line x1={220} y1={68} x2={320} y2={100} stroke="#94A3B8" strokeWidth={1.5} />

        {/* l=0 (2s) */}
        <rect x={70} y={100} width={100} height={30} rx={6} fill="#DCFCE7" stroke="#22C55E" strokeWidth={1.5} />
        <text x={120} y={120} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#15803D">l = 0 (2s)</text>

        {/* l=1 (2p) */}
        <rect x={270} y={100} width={100} height={30} rx={6} fill="#FEF3C7" stroke="#F59E0B" strokeWidth={1.5} />
        <text x={320} y={120} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#B45309">l = 1 (2p)</text>

        {/* l=0 -> ml=0 */}
        <line x1={120} y1={130} x2={120} y2={155} stroke="#94A3B8" strokeWidth={1.5} />
        <rect x={80} y={155} width={80} height={26} rx={5} fill="#F0FDF4" stroke="#86EFAC" strokeWidth={1.5} />
        <text x={120} y={172} textAnchor="middle" fontSize={10} fill="#15803D">mₗ = 0</text>

        {/* l=1 -> ml=-1,0,+1 */}
        <line x1={320} y1={130} x2={225} y2={155} stroke="#94A3B8" strokeWidth={1.5} />
        <line x1={320} y1={130} x2={320} y2={155} stroke="#94A3B8" strokeWidth={1.5} />
        <line x1={320} y1={130} x2={385} y2={155} stroke="#94A3B8" strokeWidth={1.5} />
        <rect x={185} y={155} width={80} height={26} rx={5} fill="#FFFBEB" stroke="#FCD34D" strokeWidth={1.5} />
        <text x={225} y={172} textAnchor="middle" fontSize={10} fill="#B45309">mₗ = -1</text>
        <rect x={280} y={155} width={80} height={26} rx={5} fill="#FFFBEB" stroke="#FCD34D" strokeWidth={1.5} />
        <text x={320} y={172} textAnchor="middle" fontSize={10} fill="#B45309">mₗ = 0</text>
        <rect x={345} y={155} width={80} height={26} rx={5} fill="#FFFBEB" stroke="#FCD34D" strokeWidth={1.5} />
        <text x={385} y={172} textAnchor="middle" fontSize={10} fill="#B45309">mₗ = +1</text>

        {/* 스핀 표시 (2p, ml=0 오비탈 예시) */}
        <line x1={320} y1={181} x2={320} y2={205} stroke="#94A3B8" strokeWidth={1.5} />
        <rect x={280} y={205} width={80} height={34} rx={5} fill="#FDF2F8" stroke="#F0ABFC" strokeWidth={1.5} />
        <text x={320} y={220} textAnchor="middle" fontSize={9} fill="#A21CAF">전자 최대 2개</text>
        <text x={320} y={232} textAnchor="middle" fontSize={9} fill="#A21CAF">mₛ = +1/2, -1/2</text>

        <rect x={30} y={258} width={380} height={70} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={220} y={278} textAnchor="middle" fontSize={10} fill="#334155">
          n(껍질) → l(오비탈 모양) → mₗ(오비탈 방향) → mₛ(전자 스핀)
        </text>
        <text x={220} y={296} textAnchor="middle" fontSize={10} fill="#334155">
          네 양자수가 모두 같은 전자 두 개는 한 원자 안에 존재할 수 없음
        </text>
        <text x={220} y={314} textAnchor="middle" fontSize={10} fontWeight="bold" fill="#334155">
          (파울리 배타 원리)
        </text>
      </svg>
    </div>
  )
}
