export default function WaveFunctionDiagram() {
  const psiPoints: string[] = []
  const psiSquaredPoints: string[] = []
  const steps = 60
  const x0 = 40
  const width = 360
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const xRel = (t - 0.5) * 6
    const psi = Math.exp(-xRel * xRel) * Math.cos(xRel * 2.4)
    const x = x0 + t * width
    psiPoints.push(`${x.toFixed(1)},${(120 - psi * 55).toFixed(1)}`)
    psiSquaredPoints.push(`${x.toFixed(1)},${(255 - psi * psi * 90).toFixed(1)}`)
  }

  return (
    <div className="w-full">
      <svg
        viewBox="0 0 440 320"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="파동함수와 확률 밀도 그래프"
      >
        <text x={220} y={22} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          파동함수(ψ)와 확률 밀도(ψ²)
        </text>

        {/* ψ 그래프 */}
        <text x={40} y={48} fontSize={11} fontWeight="bold" fill="#3B82F6">ψ (파동함수) — 양수와 음수 값을 모두 가짐</text>
        <line x1={40} y1={120} x2={400} y2={120} stroke="#CBD5E1" strokeWidth={1} />
        <polyline points={psiPoints.join(' ')} fill="none" stroke="#3B82F6" strokeWidth={2} />

        {/* ψ² 그래프 */}
        <text x={40} y={172} fontSize={11} fontWeight="bold" fill="#EF4444">ψ² (확률 밀도) — 항상 0 이상, 전자를 발견할 확률과 비례</text>
        <line x1={40} y1={255} x2={400} y2={255} stroke="#CBD5E1" strokeWidth={1} />
        <polygon
          points={`${x0},255 ${psiSquaredPoints.join(' ')} ${x0 + width},255`}
          fill="#FEE2E2"
          opacity={0.8}
        />
        <polyline points={psiSquaredPoints.join(' ')} fill="none" stroke="#EF4444" strokeWidth={2} />

        <rect x={40} y={272} width={360} height={36} rx={8} fill="#F8FAFC" stroke="#E2E8F0" />
        <text x={220} y={294} textAnchor="middle" fontSize={10} fill="#334155">
          ψ² 값이 큰 위치일수록 전자가 발견될 확률이 높습니다
        </text>
      </svg>
    </div>
  )
}
