interface ChemTableProps {
  headers: string[]
  rows: string[][]
  caption?: string
  highlightCol?: number  // 0-based, 이 컬럼 셀을 강조
}

export default function ChemTable({ headers, rows, caption, highlightCol }: ChemTableProps) {
  return (
    <div className="w-full">
      {caption && (
        <p className="text-sm font-semibold text-blue-700 mb-2">{caption}</p>
      )}
      <div className="overflow-x-auto rounded-xl border border-blue-100 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              {headers.map((h, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 border-b border-blue-100 ${
                      ci === 0 ? 'font-medium text-gray-800' : 'text-gray-700'
                    } ${
                      highlightCol !== undefined && ci === highlightCol
                        ? 'font-bold text-blue-700 bg-blue-100'
                        : ''
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
