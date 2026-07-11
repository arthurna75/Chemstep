import type { ReactNode } from 'react'

interface ChemTableProps {
  headers: string[]
  rows: ReactNode[][]
  caption?: string
  highlightCol?: number  // 0-based, 이 컬럼 셀을 강조
  dense?: boolean        // 상하 padding을 좁게
}

export default function ChemTable({ headers, rows, caption, highlightCol, dense }: ChemTableProps) {
  const headerPad = dense ? 'py-2' : 'py-3'
  const cellPad = dense ? 'py-1.5' : 'py-3'
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
                <th key={i} className={`px-4 ${headerPad} text-left font-semibold whitespace-nowrap`}>
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
                    className={`px-4 ${cellPad} border-b border-blue-100 ${
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
