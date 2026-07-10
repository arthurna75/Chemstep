export default function LCDOLEDStructureDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="LCD와 OLED 소자 구조 비교 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        LCD와 OLED의 소자 구조 비교
      </text>

      {/* LCD stack */}
      <text x="120" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">LCD</text>
      <rect x="60" y="55" width="120" height="20" fill="#FCD34D" stroke="#B45309" strokeWidth="1" />
      <text x="190" y="69" fontSize="9" fill="#78350F">백라이트</text>
      <rect x="60" y="80" width="120" height="14" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      <text x="190" y="91" fontSize="9" fill="#334155">편광판</text>
      <rect x="60" y="99" width="120" height="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
      <text x="190" y="110" fontSize="9" fill="#1E3A8A">ITO 전극</text>
      <rect x="60" y="118" width="120" height="24" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="1" />
      <text x="190" y="132" fontSize="9" fill="#5B21B6">액정층</text>
      <rect x="60" y="147" width="120" height="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
      <text x="190" y="158" fontSize="9" fill="#1E3A8A">ITO 전극</text>
      <rect x="60" y="166" width="120" height="14" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      <text x="190" y="177" fontSize="9" fill="#334155">편광판</text>
      <rect x="60" y="185" width="120" height="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <text x="190" y="196" fontSize="9" fill="#334155">컬러 필터</text>

      <defs>
        <marker id="arrowLCD" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#B45309" />
        </marker>
      </defs>
      <line x1="120" y1="205" x2="120" y2="75" stroke="#B45309" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#arrowLCD)" />
      <text x="120" y="222" textAnchor="middle" fontSize="8" fill="#B45309">백라이트 빛이 통과량 조절되며 위로 나옴</text>

      {/* OLED stack */}
      <text x="360" y="48" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">OLED</text>
      <rect x="300" y="60" width="120" height="14" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
      <text x="430" y="71" fontSize="9" fill="#334155">봉지층(TFE)</text>
      <rect x="300" y="79" width="120" height="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
      <text x="430" y="90" fontSize="9" fill="#1E3A8A">음극</text>
      <rect x="300" y="98" width="120" height="24" fill="#FBCFE8" stroke="#DB2777" strokeWidth="1" />
      <text x="430" y="113" fontSize="9" fill="#9D174D">유기 발광층</text>
      <rect x="300" y="127" width="120" height="14" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1" />
      <text x="430" y="138" fontSize="9" fill="#1E3A8A">ITO 양극</text>
      <rect x="300" y="146" width="120" height="14" fill="#CBD5E1" stroke="#64748B" strokeWidth="1" />
      <text x="430" y="157" fontSize="9" fill="#334155">기판</text>

      <circle cx="360" cy="110" r="5" fill="#F472B6" />
      <text x="360" y="180" textAnchor="middle" fontSize="8" fill="#9D174D">여기자(exciton)가 빛을 직접 방출</text>

      <line x1="360" y1="108" x2="360" y2="60" stroke="#F472B6" strokeWidth="2" strokeDasharray="3 2" markerEnd="url(#arrowLCD)" />

      {/* Bottom comparison */}
      <rect x="30" y="235" width="420" height="115" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
      <text x="240" y="258" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">핵심 차이</text>
      <text x="130" y="282" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">LCD</text>
      <text x="130" y="300" textAnchor="middle" fontSize="9" fill="#334155">백라이트 필요</text>
      <text x="130" y="316" textAnchor="middle" fontSize="9" fill="#334155">액정이 빛의 통과량만 조절</text>
      <text x="350" y="282" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">OLED</text>
      <text x="350" y="300" textAnchor="middle" fontSize="9" fill="#334155">백라이트 불필요</text>
      <text x="350" y="316" textAnchor="middle" fontSize="9" fill="#334155">유기 재료 자체가 발광</text>
    </svg>
  )
}
