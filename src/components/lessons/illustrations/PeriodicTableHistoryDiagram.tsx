export default function PeriodicTableHistoryDiagram() {
  const nodes = [
    {
      x: 80,
      year: "1829",
      name: "돌베라이너",
      keyword: "세쌍원소설",
      color: "#93C5FD",
    },
    {
      x: 200,
      year: "1865",
      name: "뉴랜즈",
      keyword: "옥타브 법칙",
      color: "#6EE7B7",
    },
    {
      x: 320,
      year: "1869",
      name: "멘델레예프",
      keyword: "원자량 순 주기율표",
      color: "#FCA5A5",
    },
    {
      x: 440,
      year: "1913",
      name: "모즐리",
      keyword: "원자 번호 순 (현대)",
      color: "#FBBF24",
    },
  ];

  const arrowXPositions = [140, 260, 380];

  return (
    <svg
      viewBox="0 0 520 200"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="주기율표의 발전 역사 타임라인"
      style={{ width: "100%", height: "auto" }}
    >
      {/* 제목 */}
      <text
        x="260"
        y="18"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="#1e293b"
        fontFamily="sans-serif"
      >
        주기율표의 발전 역사
      </text>

      {/* 타임라인 선 */}
      <line
        x1="60"
        y1="100"
        x2="460"
        y2="100"
        stroke="#CBD5E1"
        strokeWidth="2"
      />

      {/* 화살표 */}
      {arrowXPositions.map((ax) => (
        <text
          key={ax}
          x={ax}
          y="105"
          textAnchor="middle"
          fontSize="16"
          fill="#94A3B8"
          fontFamily="sans-serif"
        >
          →
        </text>
      ))}

      {/* 노드 */}
      {nodes.map((node) => (
        <g key={node.x}>
          {/* 원 */}
          <circle
            cx={node.x}
            cy={100}
            r={22}
            fill={node.color}
            stroke="#fff"
            strokeWidth="2"
          />

          {/* 원 안 연도 */}
          <text
            x={node.x}
            y="97"
            textAnchor="middle"
            fontSize="10"
            fontWeight="bold"
            fill="#1e293b"
            fontFamily="sans-serif"
          >
            {node.year}
          </text>

          {/* 과학자 이름 (원 위) */}
          <text
            x={node.x}
            y="60"
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="#334155"
            fontFamily="sans-serif"
          >
            {node.name}
          </text>

          {/* 핵심 키워드 (원 아래) */}
          <text
            x={node.x}
            y="140"
            textAnchor="middle"
            fontSize="10"
            fill="#475569"
            fontFamily="sans-serif"
          >
            {node.keyword}
          </text>
        </g>
      ))}
    </svg>
  );
}
