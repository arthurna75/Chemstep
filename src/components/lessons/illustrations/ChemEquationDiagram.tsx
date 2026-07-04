export default function ChemEquationDiagram() {
  return (
    <svg
      viewBox="0 0 500 308"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="화학 반응식 시각화: 2H₂(g) + O₂(g) → 2H₂O(l) 반응에서 원자의 재배열"
      className="w-full max-w-xl mx-auto"
    >
      {/* 제목 */}
      <text x="250" y="22" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        화학 반응식: 2H₂(g) + O₂(g) → 2H₂O(l)
      </text>

      {/* 섹션 레이블 */}
      <text x="112" y="46" textAnchor="middle" fontSize="12" fill="#64748B">반응물</text>
      <text x="375" y="46" textAnchor="middle" fontSize="12" fill="#64748B">생성물</text>

      {/* ─── 반응물: 2H₂ ─── */}
      {/* H₂ 분자 #1 */}
      <line x1="48" y1="105" x2="82" y2="105" stroke="#94A3B8" strokeWidth="2.5"/>
      <circle cx="48" cy="105" r="15" fill="#3B82F6"/>
      <text x="48" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">H</text>
      <circle cx="82" cy="105" r="15" fill="#3B82F6"/>
      <text x="82" y="110" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">H</text>

      {/* H₂ 분자 #2 */}
      <line x1="48" y1="168" x2="82" y2="168" stroke="#94A3B8" strokeWidth="2.5"/>
      <circle cx="48" cy="168" r="15" fill="#3B82F6"/>
      <text x="48" y="173" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">H</text>
      <circle cx="82" cy="168" r="15" fill="#3B82F6"/>
      <text x="82" y="173" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">H</text>

      {/* 2H₂ 화학식 라벨 */}
      <text x="65" y="202" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563EB">2H₂(g)</text>

      {/* + 기호 */}
      <text x="115" y="142" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#475569">+</text>

      {/* ─── 반응물: O₂ ─── */}
      {/* 이중 결합 표시 */}
      <line x1="148" y1="133" x2="194" y2="133" stroke="#94A3B8" strokeWidth="2"/>
      <line x1="148" y1="141" x2="194" y2="141" stroke="#94A3B8" strokeWidth="2"/>
      <circle cx="144" cy="137" r="18" fill="#EF4444"/>
      <text x="144" y="143" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">O</text>
      <circle cx="198" cy="137" r="18" fill="#EF4444"/>
      <text x="198" y="143" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">O</text>

      {/* O₂ 화학식 라벨 */}
      <text x="171" y="178" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#DC2626">O₂(g)</text>

      {/* ─── 화살표 ─── */}
      <defs>
        <marker id="eqArrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill="#1E293B"/>
        </marker>
      </defs>
      <line x1="220" y1="137" x2="255" y2="137" stroke="#1E293B" strokeWidth="2.5" markerEnd="url(#eqArrow)"/>

      {/* ─── 생성물: 2H₂O ─── */}
      {/* H₂O 분자 #1: O at (313, 158), H at (283, 115), H at (343, 115) */}
      <line x1="283" y1="115" x2="313" y2="158" stroke="#94A3B8" strokeWidth="2.5"/>
      <line x1="343" y1="115" x2="313" y2="158" stroke="#94A3B8" strokeWidth="2.5"/>
      <circle cx="283" cy="115" r="13" fill="#3B82F6"/>
      <text x="283" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H</text>
      <circle cx="343" cy="115" r="13" fill="#3B82F6"/>
      <text x="343" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H</text>
      <circle cx="313" cy="158" r="18" fill="#EF4444"/>
      <text x="313" y="164" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">O</text>

      {/* H₂O 분자 #2: O at (430, 158), H at (400, 115), H at (460, 115) */}
      <line x1="400" y1="115" x2="430" y2="158" stroke="#94A3B8" strokeWidth="2.5"/>
      <line x1="460" y1="115" x2="430" y2="158" stroke="#94A3B8" strokeWidth="2.5"/>
      <circle cx="400" cy="115" r="13" fill="#3B82F6"/>
      <text x="400" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H</text>
      <circle cx="460" cy="115" r="13" fill="#3B82F6"/>
      <text x="460" y="120" textAnchor="middle" fontSize="11" fontWeight="bold" fill="white">H</text>
      <circle cx="430" cy="158" r="18" fill="#EF4444"/>
      <text x="430" y="164" textAnchor="middle" fontSize="13" fontWeight="bold" fill="white">O</text>

      {/* 2H₂O 화학식 라벨 */}
      <text x="371" y="202" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#7C3AED">2H₂O(l)</text>

      {/* ─── 원자 수 확인 박스 ─── */}
      <rect x="18" y="217" width="218" height="48" rx="8" fill="#FFF7ED" stroke="#F97316" strokeWidth="1.5"/>
      <text x="127" y="234" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#C2410C">반응 전 원자 수</text>
      <text x="127" y="252" textAnchor="middle" fontSize="12" fill="#1E293B">H: 4개   O: 2개</text>
      <text x="127" y="262" textAnchor="middle" fontSize="10" fill="#78716C">(H₂×2→H×4, O₂→O×2)</text>

      <rect x="264" y="217" width="218" height="48" rx="8" fill="#F0FDF4" stroke="#22C55E" strokeWidth="1.5"/>
      <text x="373" y="234" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#15803D">반응 후 원자 수 ✓</text>
      <text x="373" y="252" textAnchor="middle" fontSize="12" fill="#1E293B">H: 4개   O: 2개</text>
      <text x="373" y="262" textAnchor="middle" fontSize="10" fill="#78716C">(H₂O×2→H×4, O×2)</text>

      {/* ─── 범례 ─── */}
      <circle cx="145" cy="290" r="7" fill="#3B82F6"/>
      <text x="158" y="295" fontSize="11" fill="#1E293B">수소(H)</text>
      <circle cx="230" cy="290" r="7" fill="#EF4444"/>
      <text x="243" y="295" fontSize="11" fill="#1E293B">산소(O)</text>
    </svg>
  )
}
