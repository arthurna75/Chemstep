export default function WaferFabricationDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="반도체 웨이퍼 제조 공정 흐름도"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        모래에서 회로가 새겨진 웨이퍼까지
      </text>

      <defs>
        <marker id="arrowWafer" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" fill="#6366F1" />
        </marker>
      </defs>

      {/* Step boxes */}
      <g>
        <rect x="20" y="50" width="90" height="70" rx="6" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
        <text x="65" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1E293B">① 모래</text>
        <text x="65" y="94" textAnchor="middle" fontSize="9" fill="#475569">SiO₂ + C 환원</text>
        <text x="65" y="108" textAnchor="middle" fontSize="9" fill="#475569">조 실리콘</text>
      </g>

      <line x1="112" y1="85" x2="140" y2="85" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />

      <g>
        <rect x="142" y="50" width="90" height="70" rx="6" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
        <text x="187" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">② 지멘스 공정</text>
        <text x="187" y="94" textAnchor="middle" fontSize="9" fill="#1E3A8A">SiHCl₃ 정제</text>
        <text x="187" y="108" textAnchor="middle" fontSize="9" fill="#1E3A8A">9N급 실리콘</text>
      </g>

      <line x1="234" y1="85" x2="262" y2="85" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />

      <g>
        <rect x="264" y="50" width="90" height="70" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="309" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#92400E">③ 초크랄스키법</text>
        <text x="309" y="94" textAnchor="middle" fontSize="9" fill="#78350F">단결정 잉곳</text>
        <text x="309" y="108" textAnchor="middle" fontSize="9" fill="#78350F">성장</text>
      </g>

      <line x1="356" y1="85" x2="384" y2="85" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />

      <g>
        <rect x="386" y="50" width="80" height="70" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
        <text x="426" y="78" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">④ 절단·연마</text>
        <text x="426" y="94" textAnchor="middle" fontSize="9" fill="#14532D">웨이퍼</text>
        <text x="426" y="108" textAnchor="middle" fontSize="9" fill="#14532D">완성</text>
      </g>

      {/* down arrow */}
      <line x1="426" y1="120" x2="426" y2="150" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />
      <line x1="426" y1="150" x2="200" y2="150" stroke="#6366F1" strokeWidth="2" />
      <line x1="200" y1="150" x2="200" y2="180" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />

      <g>
        <rect x="130" y="182" width="140" height="70" rx="6" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" />
        <text x="200" y="208" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#5B21B6">⑤ 열산화</text>
        <text x="200" y="224" textAnchor="middle" fontSize="9" fill="#4C1D95">Si + O₂ → SiO₂</text>
        <text x="200" y="238" textAnchor="middle" fontSize="9" fill="#4C1D95">절연막 형성</text>
      </g>

      <line x1="270" y1="217" x2="298" y2="217" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrowWafer)" />

      <g>
        <rect x="300" y="182" width="150" height="70" rx="6" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" />
        <text x="375" y="205" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#9D174D">⑥ 포토리소그래피</text>
        <text x="375" y="220" textAnchor="middle" fontSize="9" fill="#831843">감광액 노광 · 현상</text>
        <text x="375" y="234" textAnchor="middle" fontSize="9" fill="#831843">→ 식각(패턴 새김)</text>
      </g>

      {/* bottom summary */}
      <rect x="30" y="280" width="420" height="70" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
      <text x="240" y="305" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">
        습식 식각(산 용액, 등방성) vs 건식 식각(플라즈마, 이방성)
      </text>
      <text x="240" y="325" textAnchor="middle" fontSize="10" fill="#64748B">
        이 과정을 수십~수백 번 반복해 웨이퍼 위에 미세한 회로가 완성된다
      </text>
    </svg>
  )
}
