export default function ElementClassificationDiagram() {
  const cellW = 44;
  const cellH = 38;
  const offsetX = 10;
  const offsetY = 30;

  type ElementType = "metal" | "nonmetal" | "metalloid" | "noble" | "transition" | "empty";

  const colors: Record<ElementType, { bg: string; text: string }> = {
    metal:      { bg: "#BFDBFE", text: "#1D4ED8" },
    nonmetal:   { bg: "#FED7AA", text: "#C2410C" },
    metalloid:  { bg: "#BBF7D0", text: "#15803D" },
    noble:      { bg: "#E2E8F0", text: "#475569" },
    transition: { bg: "#DDD6FE", text: "#6D28D9" },
    empty:      { bg: "transparent", text: "transparent" },
  };

  // [symbol, atomicNumber, type, col(0-indexed), row(0-indexed)]
  // col mapping: 0=족1, 1=족2, 2~11=전이금속(족3~12), 12=족13, 13=족14, 14=족15, 15=족16, 16=족17, 17=족18
  type CellData = {
    symbol: string;
    num: number;
    type: ElementType;
    col: number;
    row: number;
  };

  const cells: CellData[] = [
    // 1주기 (row=0)
    { symbol: "H",  num: 1,  type: "nonmetal", col: 0,  row: 0 },
    { symbol: "He", num: 2,  type: "noble",     col: 17, row: 0 },

    // 2주기 (row=1)
    { symbol: "Li", num: 3,  type: "metal",     col: 0,  row: 1 },
    { symbol: "Be", num: 4,  type: "metal",     col: 1,  row: 1 },
    { symbol: "B",  num: 5,  type: "metalloid", col: 12, row: 1 },
    { symbol: "C",  num: 6,  type: "nonmetal",  col: 13, row: 1 },
    { symbol: "N",  num: 7,  type: "nonmetal",  col: 14, row: 1 },
    { symbol: "O",  num: 8,  type: "nonmetal",  col: 15, row: 1 },
    { symbol: "F",  num: 9,  type: "nonmetal",  col: 16, row: 1 },
    { symbol: "Ne", num: 10, type: "noble",     col: 17, row: 1 },

    // 3주기 (row=2)
    { symbol: "Na", num: 11, type: "metal",     col: 0,  row: 2 },
    { symbol: "Mg", num: 12, type: "metal",     col: 1,  row: 2 },
    { symbol: "Al", num: 13, type: "metal",     col: 12, row: 2 },
    { symbol: "Si", num: 14, type: "metalloid", col: 13, row: 2 },
    { symbol: "P",  num: 15, type: "nonmetal",  col: 14, row: 2 },
    { symbol: "S",  num: 16, type: "nonmetal",  col: 15, row: 2 },
    { symbol: "Cl", num: 17, type: "nonmetal",  col: 16, row: 2 },
    { symbol: "Ar", num: 18, type: "noble",     col: 17, row: 2 },

    // 4주기 (row=3)
    { symbol: "K",  num: 19, type: "metal",     col: 0,  row: 3 },
    { symbol: "Ca", num: 20, type: "metal",     col: 1,  row: 3 },
    // 전이금속 (Sc~Zn, col 2~11)
    { symbol: "Sc", num: 21, type: "transition", col: 2,  row: 3 },
    { symbol: "Ti", num: 22, type: "transition", col: 3,  row: 3 },
    { symbol: "V",  num: 23, type: "transition", col: 4,  row: 3 },
    { symbol: "Cr", num: 24, type: "transition", col: 5,  row: 3 },
    { symbol: "Mn", num: 25, type: "transition", col: 6,  row: 3 },
    { symbol: "Fe", num: 26, type: "transition", col: 7,  row: 3 },
    { symbol: "Co", num: 27, type: "transition", col: 8,  row: 3 },
    { symbol: "Ni", num: 28, type: "transition", col: 9,  row: 3 },
    { symbol: "Cu", num: 29, type: "transition", col: 10, row: 3 },
    { symbol: "Zn", num: 30, type: "transition", col: 11, row: 3 },
    { symbol: "Ga", num: 31, type: "metal",     col: 12, row: 3 },
    { symbol: "Ge", num: 32, type: "metalloid", col: 13, row: 3 },
    { symbol: "As", num: 33, type: "metalloid", col: 14, row: 3 },
    { symbol: "Se", num: 34, type: "nonmetal",  col: 15, row: 3 },
    { symbol: "Br", num: 35, type: "nonmetal",  col: 16, row: 3 },
    { symbol: "Kr", num: 36, type: "noble",     col: 17, row: 3 },
  ];

  const legendItems: { type: ElementType; label: string }[] = [
    { type: "metal",      label: "금속" },
    { type: "nonmetal",   label: "비금속" },
    { type: "metalloid",  label: "준금속" },
    { type: "noble",      label: "비활성 기체" },
    { type: "transition", label: "전이 금속" },
  ];

  const legendY = offsetY + 4 * cellH + 20;

  return (
    <svg
      viewBox="0 0 520 260"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="원소의 분류: 주기율표에서의 위치"
      style={{ width: "100%", height: "auto" }}
    >
      {/* 제목 */}
      <text
        x="260"
        y="18"
        textAnchor="middle"
        fontSize="13"
        fontWeight="bold"
        fill="#1e293b"
        fontFamily="sans-serif"
      >
        원소의 분류: 주기율표에서의 위치
      </text>

      {/* 원소 셀 */}
      {cells.map((cell) => {
        const x = offsetX + cell.col * cellW;
        const y = offsetY + cell.row * cellH;
        const c = colors[cell.type];
        return (
          <g key={cell.symbol}>
            <rect
              x={x}
              y={y}
              width={cellW - 2}
              height={cellH - 2}
              fill={c.bg}
              rx="3"
              stroke="#fff"
              strokeWidth="1"
            />
            {/* 원자 번호 (우상단) */}
            <text
              x={x + cellW - 6}
              y={y + 9}
              textAnchor="end"
              fontSize="8"
              fill={c.text}
              fontFamily="sans-serif"
            >
              {cell.num}
            </text>
            {/* 원소 기호 (중앙) */}
            <text
              x={x + (cellW - 2) / 2}
              y={y + (cellH - 2) / 2 + 5}
              textAnchor="middle"
              fontSize="13"
              fontWeight="bold"
              fill={c.text}
              fontFamily="sans-serif"
            >
              {cell.symbol}
            </text>
          </g>
        );
      })}

      {/* 범례 */}
      {legendItems.map((item, i) => {
        const lx = 10 + i * 100;
        const c = colors[item.type];
        return (
          <g key={item.type}>
            <rect
              x={lx}
              y={legendY}
              width={14}
              height={14}
              fill={c.bg}
              rx="2"
              stroke="#CBD5E1"
              strokeWidth="0.5"
            />
            <text
              x={lx + 18}
              y={legendY + 11}
              fontSize="10"
              fill="#374151"
              fontFamily="sans-serif"
            >
              {item.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
