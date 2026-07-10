export default function OLEDEncapsulationDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="OLED 박막봉지 구조와 열화 메커니즘 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        박막봉지(TFE): 산소 · 수분의 침투를 막는 다층 구조
      </text>

      {/* Outside moisture/oxygen arrows */}
      <text x="240" y="50" textAnchor="middle" fontSize="10" fill="#0EA5E9">외부의 산소(O₂) · 수분(H₂O)</text>
      <defs>
        <marker id="arrowTFE" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#0EA5E9" />
        </marker>
      </defs>
      <line x1="150" y1="58" x2="150" y2="78" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrowTFE)" />
      <line x1="240" y1="58" x2="240" y2="78" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrowTFE)" />
      <line x1="330" y1="58" x2="330" y2="78" stroke="#0EA5E9" strokeWidth="2" markerEnd="url(#arrowTFE)" />

      {/* Layer 1 inorganic (with a pinhole) */}
      <rect x="90" y="80" width="300" height="18" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
      <rect x="235" y="80" width="10" height="18" fill="#F8FAFC" />
      <text x="400" y="93" fontSize="8" fill="#334155">무기막①</text>

      {/* Layer 2 organic */}
      <rect x="90" y="98" width="300" height="18" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
      <text x="400" y="111" fontSize="8" fill="#78350F">유기막</text>

      {/* Layer 3 inorganic offset pinhole */}
      <rect x="90" y="116" width="300" height="18" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
      <rect x="130" y="116" width="10" height="18" fill="#F8FAFC" />
      <text x="400" y="129" fontSize="8" fill="#334155">무기막②</text>

      {/* Blocked path illustration */}
      <path d="M240,98 L240,116 L135,116 L135,134" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="150" y="150" fontSize="8" fill="#DC2626">핀홀이 겹치지 않아 침투 경로가 차단됨</text>

      {/* 유기 발광층 */}
      <rect x="90" y="134" width="300" height="20" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1.5" />
      <text x="240" y="148" textAnchor="middle" fontSize="9" fill="#9D174D">유기 발광층 (산소·수분에 취약)</text>

      {/* Bottom substrate */}
      <rect x="90" y="154" width="300" height="16" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
      <text x="240" y="166" textAnchor="middle" fontSize="8" fill="#334155">기판</text>

      {/* Bottom: next-gen materials comparison */}
      <rect x="30" y="200" width="200" height="150" rx="6" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="130" y="222" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">양자점(QD)</text>
      <circle cx="80" cy="260" r="10" fill="#3B82F6" />
      <text x="80" y="285" textAnchor="middle" fontSize="8" fill="#1E3A8A">작은 입자</text>
      <text x="80" y="298" textAnchor="middle" fontSize="8" fill="#1E3A8A">큰 밴드갭</text>
      <text x="80" y="311" textAnchor="middle" fontSize="8" fill="#1E3A8A">짧은 파장(파랑)</text>
      <circle cx="180" cy="260" r="18" fill="#EF4444" />
      <text x="180" y="290" textAnchor="middle" fontSize="8" fill="#7F1D1D">큰 입자</text>
      <text x="180" y="303" textAnchor="middle" fontSize="8" fill="#7F1D1D">작은 밴드갭</text>
      <text x="180" y="316" textAnchor="middle" fontSize="8" fill="#7F1D1D">긴 파장(빨강)</text>
      <text x="130" y="335" textAnchor="middle" fontSize="8" fill="#334155">입자 크기로 발광색 조절</text>

      <rect x="250" y="200" width="200" height="150" rx="6" fill="#FDF4FF" stroke="#D8B4FE" strokeWidth="2" />
      <text x="350" y="222" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#7E22CE">페로브스카이트</text>
      <text x="350" y="250" textAnchor="middle" fontSize="9" fill="#4C1D95">독특한 결정 구조</text>
      <text x="350" y="268" textAnchor="middle" fontSize="9" fill="#4C1D95">높은 발광 효율</text>
      <text x="350" y="286" textAnchor="middle" fontSize="9" fill="#4C1D95">저비용 공정</text>
      <text x="350" y="304" textAnchor="middle" fontSize="9" fill="#4C1D95">차세대 디스플레이·</text>
      <text x="350" y="320" textAnchor="middle" fontSize="9" fill="#4C1D95">태양전지 소재로 연구</text>
    </svg>
  )
}
