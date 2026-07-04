export default function AtomNotationDiagram() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 480 300"
        width="100%"
        style={{ maxWidth: 440 }}
        aria-label="원소 표기법 다이어그램"
      >
        {/* 제목 */}
        <text x={240} y={28} textAnchor="middle" fontSize="13" fontWeight="bold" fill="#1E293B">
          원소 표기법 — 탄소(C)의 예
        </text>

        {/* 중앙 원소 기호 박스 */}
        <rect x={175} y={50} width={80} height={110} rx={8} fill="#F0F9FF" stroke="#BAE6FD" strokeWidth={2} />
        <text x={215} y={120} textAnchor="middle" fontSize={60} fontWeight="bold" fill="#0F172A">
          C
        </text>

        {/* 질량수 (왼쪽 위) */}
        <text x={165} y={75} textAnchor="middle" fontSize={28} fontWeight="bold" fill="#2563EB">
          12
        </text>

        {/* 원자 번호 (왼쪽 아래) */}
        <text x={165} y={150} textAnchor="middle" fontSize={28} fontWeight="bold" fill="#DC2626">
          6
        </text>

        {/* 질량수 → 설명 화살표 */}
        <line x1={185} y1={68} x2={270} y2={68} stroke="#2563EB" strokeWidth={1.5} markerEnd="url(#arrowBlue)" />
        <rect x={270} y={50} width={185} height={36} rx={4} fill="#EFF6FF" stroke="#BFDBFE" strokeWidth={1} />
        <text x={278} y={66} fontSize={11} fill="#1D4ED8" fontWeight="bold">질량수 A</text>
        <text x={278} y={80} fontSize={10} fill="#3B82F6">= 양성자 수 + 중성자 수</text>

        {/* 원자 번호 → 설명 화살표 */}
        <line x1={185} y1={143} x2={270} y2={143} stroke="#DC2626" strokeWidth={1.5} markerEnd="url(#arrowRed)" />
        <rect x={270} y={125} width={185} height={36} rx={4} fill="#FEF2F2" stroke="#FECACA" strokeWidth={1} />
        <text x={278} y={141} fontSize={11} fill="#DC2626" fontWeight="bold">원자 번호 Z</text>
        <text x={278} y={155} fontSize={10} fill="#EF4444">= 양성자 수 (원소 종류 결정)</text>

        {/* 하단: 입자 수 정보 박스 */}
        <g transform="translate(50, 210)">
          {[
            { label: '양성자', count: 6, color: '#EF4444', bg: '#FEF2F2', border: '#FECACA' },
            { label: '중성자', count: 6, color: '#64748B', bg: '#F8FAFC', border: '#CBD5E1' },
            { label: '전자',   count: 6, color: '#2563EB', bg: '#EFF6FF', border: '#BFDBFE' },
          ].map((item, i) => (
            <g key={i} transform={`translate(${i * 130}, 0)`}>
              <rect width={120} height={52} rx={6} fill={item.bg} stroke={item.border} strokeWidth={1.5} />
              <text x={60} y={20} textAnchor="middle" fontSize={11} fill="#6B7280">{item.label}</text>
              <text x={60} y={42} textAnchor="middle" fontSize={20} fontWeight="bold" fill={item.color}>
                {item.count}개
              </text>
            </g>
          ))}
        </g>

        {/* 화살표 마커 정의 */}
        <defs>
          <marker id="arrowBlue" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#2563EB" />
          </marker>
          <marker id="arrowRed" markerWidth={8} markerHeight={6} refX={8} refY={3} orient="auto">
            <path d="M0,0 L8,3 L0,6 Z" fill="#DC2626" />
          </marker>
        </defs>
      </svg>
    </div>
  )
}
