export default function ValenceElectronDiagram() {
  // 표시할 원소 데이터: [족, 주기, 기호, 원자가전자, 색상키]
  type ColKey = 'g1' | 'g2' | 'g13' | 'g14' | 'g15' | 'g16' | 'g17' | 'g18'
  const elements: { group: ColKey; period: number; symbol: string; valence: number }[] = [
    { group: 'g1',  period: 1, symbol: 'H',  valence: 1 },
    { group: 'g18', period: 1, symbol: 'He', valence: 0 },
    { group: 'g1',  period: 2, symbol: 'Li', valence: 1 },
    { group: 'g2',  period: 2, symbol: 'Be', valence: 2 },
    { group: 'g13', period: 2, symbol: 'B',  valence: 3 },
    { group: 'g14', period: 2, symbol: 'C',  valence: 4 },
    { group: 'g15', period: 2, symbol: 'N',  valence: 5 },
    { group: 'g16', period: 2, symbol: 'O',  valence: 6 },
    { group: 'g17', period: 2, symbol: 'F',  valence: 7 },
    { group: 'g18', period: 2, symbol: 'Ne', valence: 0 },
    { group: 'g1',  period: 3, symbol: 'Na', valence: 1 },
    { group: 'g2',  period: 3, symbol: 'Mg', valence: 2 },
    { group: 'g13', period: 3, symbol: 'Al', valence: 3 },
    { group: 'g14', period: 3, symbol: 'Si', valence: 4 },
    { group: 'g15', period: 3, symbol: 'P',  valence: 5 },
    { group: 'g16', period: 3, symbol: 'S',  valence: 6 },
    { group: 'g17', period: 3, symbol: 'Cl', valence: 7 },
    { group: 'g18', period: 3, symbol: 'Ar', valence: 0 },
  ]

  const colKeys: ColKey[] = ['g1','g2','g13','g14','g15','g16','g17','g18']
  const colLabels: Record<ColKey, string> = {
    g1:'1족', g2:'2족', g13:'13족', g14:'14족', g15:'15족', g16:'16족', g17:'17족', g18:'18족'
  }
  const colColors: Record<ColKey, { bg: string; border: string; text: string; valText: string }> = {
    g1:  { bg:'#EFF6FF', border:'#3B82F6', text:'#1D4ED8', valText:'#2563EB' },
    g2:  { bg:'#F0FDF4', border:'#22C55E', text:'#15803D', valText:'#16A34A' },
    g13: { bg:'#FFF7ED', border:'#F97316', text:'#C2410C', valText:'#EA580C' },
    g14: { bg:'#FEFCE8', border:'#EAB308', text:'#92400E', valText:'#CA8A04' },
    g15: { bg:'#FDF4FF', border:'#A855F7', text:'#7E22CE', valText:'#9333EA' },
    g16: { bg:'#FFF1F2', border:'#F43F5E', text:'#BE123C', valText:'#E11D48' },
    g17: { bg:'#ECFEFF', border:'#06B6D4', text:'#0E7490', valText:'#0891B2' },
    g18: { bg:'#F8FAFC', border:'#94A3B8', text:'#475569', valText:'#64748B' },
  }

  const colX: Record<ColKey, number> = {
    g1:18, g2:78, g13:138, g14:198, g15:258, g16:318, g17:378, g18:438
  }
  const rowY: Record<number, number> = { 1: 68, 2: 128, 3: 188 }
  const cellW = 52
  const cellH = 52

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox="0 0 500 260"
        width="100%"
        style={{ maxWidth: 500, minWidth: 340 }}
        aria-label="원자가 전자와 족 관계표"
      >
        {/* 제목 */}
        <text x={250} y={20} textAnchor="middle" fontSize={13} fontWeight="bold" fill="#1E293B">
          족(Group)별 원자가 전자 수
        </text>

        {/* 열 머리글 */}
        {colKeys.map((key) => {
          const c = colColors[key]
          const x = colX[key]
          return (
            <g key={key}>
              <rect x={x} y={38} width={cellW} height={22} rx={4} fill={c.bg} stroke={c.border} strokeWidth={1} />
              <text x={x + cellW / 2} y={53} textAnchor="middle" fontSize={10} fontWeight="bold" fill={c.text}>
                {colLabels[key]}
              </text>
            </g>
          )
        })}

        {/* 행 머리글 (주기) */}
        {[1, 2, 3].map((period) => (
          <text key={period} x={8} y={rowY[period] + 30} textAnchor="middle" fontSize={10} fill="#64748B" fontWeight="bold">
            {period}
          </text>
        ))}

        {/* 원소 셀 */}
        {elements.map((el) => {
          const c = colColors[el.group]
          const x = colX[el.group]
          const y = rowY[el.period]
          return (
            <g key={el.symbol}>
              <rect x={x} y={y} width={cellW} height={cellH} rx={4} fill={c.bg} stroke={c.border} strokeWidth={1.5} />
              {/* 원소 기호 */}
              <text x={x + cellW / 2} y={y + 22} textAnchor="middle" fontSize={15} fontWeight="bold" fill={c.text}>
                {el.symbol}
              </text>
              {/* 원자가 전자 수 */}
              <text x={x + cellW / 2} y={y + 40} textAnchor="middle" fontSize={11} fill={c.valText}>
                {el.valence === 0 ? '0(8)' : `${el.valence}개`}
              </text>
            </g>
          )
        })}

        {/* 주기 레이블 */}
        <text x={8} y={58} textAnchor="middle" fontSize={9} fill="#94A3B8">주기</text>

        {/* 하단 범례 */}
        <rect x={10} y={250} width={480} height={1} fill="#E2E8F0" />
        <text x={250} y={258} textAnchor="middle" fontSize={9} fill="#94A3B8">
          같은 색 = 같은 족 → 원자가 전자 수 동일 → 화학적 성질 유사
        </text>
      </svg>
    </div>
  )
}
