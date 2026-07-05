export default function MetallicBondDiagram() {
  const cationCols = [90, 190, 290, 390]
  const cationRows = [90, 170, 250]

  // 격자 사이사이(가로/세로 중점)에 배치되는 자유 전자 좌표
  const electrons: [number, number][] = [
    // 가로 중점 (행별)
    [140, 90], [240, 90], [340, 90],
    [140, 170], [240, 170], [340, 170],
    [140, 250], [240, 250], [340, 250],
    // 세로 중점 (열 사이)
    [90, 130], [190, 130], [290, 130], [390, 130],
    [90, 210], [190, 210], [290, 210], [390, 210],
  ]

  return (
    <svg
      viewBox="0 0 480 440"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="금속 결합의 전자 바다 모델: 금속 양이온 격자 사이를 자유 전자가 이동하는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="26" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        금속 결합: 전자 바다 모델
      </text>

      {/* ── 금속 양이온 격자 ── */}
      {cationCols.map((cx) =>
        cationRows.map((cy) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="17" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">M⁺</text>
          </g>
        ))
      )}

      {/* ── 자유 전자 (전자 바다) ── */}
      {electrons.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#1D4ED8" opacity="0.85" />
      ))}

      {/* ── 전자 이동을 나타내는 점선 화살표 ── */}
      <defs>
        <marker id="metalArrow" markerWidth="7" markerHeight="6" refX="7" refY="3" orient="auto">
          <polygon points="0 0, 7 3, 0 6" fill="#2563EB" />
        </marker>
      </defs>
      <path d="M 140,90 C 160,110 170,120 190,130" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#metalArrow)" />
      <path d="M 290,210 C 310,225 320,235 340,250" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#metalArrow)" />
      <text x="240" y="292" textAnchor="middle" fontSize="10" fill="#1D4ED8">자유 전자가 양이온 사이를 자유롭게 이동 (delocalized e⁻)</text>

      {/* ── 범례 ── */}
      <line x1="30" y1="308" x2="450" y2="308" stroke="#E2E8F0" strokeWidth="1.5" />
      <circle cx="70" cy="328" r="12" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
      <text x="70" y="332" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1D4ED8">M⁺</text>
      <text x="140" y="332" textAnchor="start" fontSize="11" fill="#334155">금속 양이온 (격자에 고정)</text>

      <circle cx="70" cy="356" r="4" fill="#1D4ED8" />
      <text x="140" y="360" textAnchor="start" fontSize="11" fill="#334155">자유 전자 (전 영역을 이동)</text>

      {/* ── 하단 요약 박스 ── */}
      <rect x="45" y="378" width="390" height="50" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="240" y="396" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1E293B">
        금속 결합 = 금속 양이온 + 자유 전자의 정전기적 인력
      </text>
      <text x="240" y="414" textAnchor="middle" fontSize="10" fill="#475569">
        → 전기·열 전도성, 금속 광택, 연성·전성의 원인
      </text>
    </svg>
  )
}
