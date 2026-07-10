export default function CVDALDDiagram() {
  return (
    <svg
      viewBox="0 0 480 380"
      aria-label="CVD와 ALD 박막 증착 비교 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="380" fill="#F8FAFC" rx="8" />

      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        CVD와 ALD: 박막을 쌓는 두 가지 방식
      </text>

      {/* CVD panel */}
      <rect x="30" y="50" width="200" height="150" rx="6" fill="#DBEAFE" fillOpacity="0.4" stroke="#3B82F6" strokeWidth="2" />
      <text x="130" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">CVD (화학기상증착)</text>

      {/* CVD chamber with gas swirl */}
      <rect x="55" y="85" width="150" height="60" rx="4" fill="#F8FAFC" stroke="#93C5FD" strokeWidth="1.5" />
      <circle cx="80" cy="105" r="4" fill="#60A5FA" />
      <circle cx="100" cy="120" r="4" fill="#60A5FA" />
      <circle cx="125" cy="100" r="4" fill="#60A5FA" />
      <circle cx="150" cy="118" r="4" fill="#60A5FA" />
      <circle cx="175" cy="105" r="4" fill="#60A5FA" />
      <text x="130" y="140" textAnchor="middle" fontSize="9" fill="#1D4ED8">기체 전구체가 표면에서 동시 반응</text>

      {/* wafer surface with uneven step coverage */}
      <path d="M55,170 L100,170 L100,155 L130,155 L130,170 L205,170 L205,190 L55,190 Z" fill="#93C5FD" stroke="#1D4ED8" strokeWidth="1.5" />
      <text x="130" y="185" textAnchor="middle" fontSize="8" fill="#1E3A8A"></text>
      <text x="130" y="212" textAnchor="middle" fontSize="9" fill="#1D4ED8">단차 부위는 두께가 고르지 않음</text>

      {/* ALD panel */}
      <rect x="250" y="50" width="200" height="150" rx="6" fill="#DCFCE7" fillOpacity="0.4" stroke="#16A34A" strokeWidth="2" />
      <text x="350" y="72" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#166534">ALD (원자층 증착)</text>

      <rect x="275" y="85" width="150" height="60" rx="4" fill="#F8FAFC" stroke="#86EFAC" strokeWidth="1.5" />
      <text x="350" y="108" textAnchor="middle" fontSize="9" fill="#166534">전구체 A 펄스 → 퍼지</text>
      <text x="350" y="124" textAnchor="middle" fontSize="9" fill="#166534">전구체 B 펄스 → 퍼지</text>
      <text x="350" y="140" textAnchor="middle" fontSize="9" fill="#166534">(자기제한 반응, 1사이클=1층)</text>

      {/* wafer surface with even step coverage */}
      <path d="M275,170 L320,170 L320,155 L350,155 L350,170 L425,170 L425,190 L275,190 Z" fill="#F8FAFC" stroke="#166534" strokeWidth="0" />
      <path d="M275,168 L320,168 L320,153 L350,153 L350,168 L425,168" fill="none" stroke="#16A34A" strokeWidth="3" />
      <path d="M275,190 L320,190 L320,175 L350,175 L350,190 L425,190" fill="none" stroke="#4ADE80" strokeWidth="2" />
      <text x="350" y="212" textAnchor="middle" fontSize="9" fill="#166534">균일한 두께로 완전히 덮임</text>

      {/* Bottom comparison table */}
      <rect x="30" y="235" width="420" height="115" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="2" />
      <text x="240" y="258" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#334155">비교 요약</text>
      <text x="130" y="282" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">CVD</text>
      <text x="130" y="300" textAnchor="middle" fontSize="9" fill="#334155">증착 속도 빠름</text>
      <text x="130" y="316" textAnchor="middle" fontSize="9" fill="#334155">두께·단차피복 제어 어려움</text>
      <text x="350" y="282" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#166534">ALD</text>
      <text x="350" y="300" textAnchor="middle" fontSize="9" fill="#334155">원자 단위 두께 정밀 제어</text>
      <text x="350" y="316" textAnchor="middle" fontSize="9" fill="#334155">복잡한 3차원 구조에도 균일</text>
    </svg>
  )
}
