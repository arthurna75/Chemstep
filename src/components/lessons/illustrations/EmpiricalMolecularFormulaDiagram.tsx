const unitPositions = [
  { x: 0, y: 0 },
  { x: 40, y: 0 },
  { x: 80, y: 0 },
  { x: 0, y: 50 },
  { x: 40, y: 50 },
  { x: 80, y: 50 },
]

export default function EmpiricalMolecularFormulaDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="실험식과 분자식: 포도당의 실험식 CH2O가 6번 반복되어 분자식 C6H12O6이 되는 과정을 보여주는 다이어그램"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="15" fontWeight="bold" fill="#1E293B">
        실험식 → 분자식 (포도당 예시)
      </text>
      <text x="240" y="42" textAnchor="middle" fontSize="11" fill="#64748B">
        분자식 = (실험식)ₙ
      </text>

      {/* ── 왼쪽: 실험식 단위 1개 ── */}
      <rect x="18" y="60" width="150" height="130" rx="10" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="2" />
      <text x="93" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        실험식
      </text>
      <text x="93" y="130" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1D4ED8">
        CH₂O
      </text>
      <text x="93" y="150" textAnchor="middle" fontSize="10" fill="#64748B">
        원자 수 비 1:2:1
      </text>
      <text x="93" y="172" textAnchor="middle" fontSize="10" fill="#64748B">
        실험식량 = 30
      </text>

      {/* ── 가운데: × 6 ── */}
      <text x="200" y="130" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">
        ×
      </text>
      <rect x="216" y="104" width="52" height="52" rx="8" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2" />
      <text x="242" y="136" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#92400E">
        6
      </text>
      <text x="242" y="172" textAnchor="middle" fontSize="10" fill="#78350F">
        n = 180/30 = 6
      </text>

      {/* 화살표 */}
      <line x1="278" y1="130" x2="308" y2="130" stroke="#94A3B8" strokeWidth="2" />
      <polygon points="308,124 320,130 308,136" fill="#94A3B8" />

      {/* ── 오른쪽: 분자식 (CH2O 단위 6개 반복 시각화 + 결과) ── */}
      <rect x="330" y="60" width="132" height="130" rx="10" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
      <text x="396" y="82" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">
        분자식
      </text>

      {/* 6개의 작은 CH2O 단위 블록 (3x2 배열) */}
      <g transform="translate(348, 92)">
        {unitPositions.map((pos, i) => (
          <rect
            key={i}
            x={pos.x}
            y={pos.y}
            width="32"
            height="42"
            rx="4"
            fill="#BBF7D0"
            stroke="#22C55E"
            strokeWidth="1.5"
          />
        ))}
        {unitPositions.map((pos, i) => (
          <text
            key={`t${i}`}
            x={pos.x + 16}
            y={pos.y + 26}
            textAnchor="middle"
            fontSize="8"
            fontWeight="bold"
            fill="#15803D"
          >
            CH₂O
          </text>
        ))}
      </g>

      <text x="396" y="216" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#15803D">
        C₆H₁₂O₆
      </text>

      {/* 실험식량 → 분자량 계산 박스 */}
      <rect x="30" y="204" width="420" height="30" rx="8" fill="#fff" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="240" y="224" textAnchor="middle" fontSize="12" fill="#1E293B">
        실험식량(30) × n(6) = 분자량(180)
      </text>

      {/* 핵심 정리 박스 */}
      <rect x="30" y="244" width="420" height="40" rx="8" fill="#EFF6FF" stroke="#3B82F6" strokeWidth="1.5" />
      <text x="240" y="260" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">
        n = 분자량 ÷ 실험식량
      </text>
      <text x="240" y="277" textAnchor="middle" fontSize="12" fill="#1E293B">
        분자식 = (실험식)ₙ = (CH₂O)₆ = C₆H₁₂O₆
      </text>

      <text x="240" y="304" textAnchor="middle" fontSize="11" fill="#64748B">
        실험식은 원자 수의 가장 간단한 정수비, 분자식은 실제 원자 개수를 나타낸다
      </text>
    </svg>
  )
}
