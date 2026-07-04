export default function FuelCellDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="수소-산소 연료전지(PEMFC) 구조 다이어그램"
      className="w-full h-auto"
    >
      {/* 배경 */}
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        수소-산소 연료전지 (PEMFC)
      </text>

      {/* ── 음극 (연료극, H₂ 공급) ── */}
      <rect x="30" y="50" width="100" height="220" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="80" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1D4ED8">음극</text>
      <text x="80" y="91" textAnchor="middle" fontSize="10" fill="#1D4ED8">(연료극, −)</text>
      {/* H₂ 공급 */}
      <text x="80" y="140" textAnchor="middle" fontSize="24">H₂</text>
      <text x="80" y="162" textAnchor="middle" fontSize="10" fill="#3B82F6">공급</text>
      {/* 반응식 */}
      <text x="80" y="200" textAnchor="middle" fontSize="10" fill="#1D4ED8">H₂ →</text>
      <text x="80" y="214" textAnchor="middle" fontSize="10" fill="#1D4ED8">2H⁺ + 2e⁻</text>
      <text x="80" y="228" textAnchor="middle" fontSize="9" fill="#64748B">(산화)</text>

      {/* ── 고분자 전해질막 (PEM) ── */}
      <rect x="155" y="50" width="50" height="220" rx="0" fill="#FEF9C3" stroke="#FACC15" strokeWidth="2" />
      <text x="180" y="140" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854D0E"
        transform="rotate(-90,180,140)">고분자 전해질막 (H⁺ 통과)</text>

      {/* H⁺ 이동 화살표 */}
      <line x1="185" y1="165" x2="215" y2="165" stroke="#854D0E" strokeWidth="1.5" markerEnd="url(#arrowOrange)" />
      <text x="200" y="158" textAnchor="middle" fontSize="10" fill="#854D0E">H⁺</text>

      <defs>
        <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#854D0E" />
        </marker>
        <marker id="arrowGray" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#475569" />
        </marker>
      </defs>

      {/* ── 양극 (공기극, O₂ 공급) ── */}
      <rect x="230" y="50" width="100" height="220" rx="4" fill="#FFF7ED" stroke="#FCA5A5" strokeWidth="2" />
      <text x="280" y="76" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B45309">양극</text>
      <text x="280" y="91" textAnchor="middle" fontSize="10" fill="#B45309">(공기극, +)</text>
      {/* O₂ 공급 */}
      <text x="280" y="140" textAnchor="middle" fontSize="24">O₂</text>
      <text x="280" y="162" textAnchor="middle" fontSize="10" fill="#EF4444">공급</text>
      {/* 반응식 */}
      <text x="280" y="200" textAnchor="middle" fontSize="10" fill="#B91C1C">O₂ + 4H⁺ + 4e⁻</text>
      <text x="280" y="214" textAnchor="middle" fontSize="10" fill="#B91C1C">→ 2H₂O</text>
      <text x="280" y="228" textAnchor="middle" fontSize="9" fill="#64748B">(환원)</text>

      {/* ── H₂O 배출 ── */}
      <text x="280" y="290" textAnchor="middle" fontSize="12" fill="#0EA5E9">H₂O 배출</text>
      <line x1="280" y1="272" x2="280" y2="282" stroke="#0EA5E9" strokeWidth="1.5" />

      {/* ── 외부 회로 (전자 흐름) ── */}
      <polyline points="80,50 80,30 280,30 280,50"
        fill="none" stroke="#475569" strokeWidth="2.5" />
      {/* 전구/부하 */}
      <circle cx="180" cy="30" r="14" fill="white" stroke="#475569" strokeWidth="2" />
      <text x="180" y="35" textAnchor="middle" fontSize="11" fill="#334155">⚡</text>
      {/* 전자 방향 표시 */}
      <text x="120" y="23" textAnchor="middle" fontSize="11" fill="#6366F1">e⁻ →</text>
      <text x="240" y="23" textAnchor="middle" fontSize="11" fill="#6366F1">e⁻ →</text>

      {/* ── 오른쪽 정보 패널 ── */}
      <rect x="345" y="50" width="120" height="220" rx="6" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="405" y="72" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#0F172A">PEMFC 특징</text>
      <text x="355" y="96" fontSize="10" fill="#334155">• 운전 온도: ~80°C</text>
      <text x="355" y="114" fontSize="10" fill="#334155">• 전해질: 고분자막</text>
      <text x="355" y="132" fontSize="10" fill="#334155">• 배출물: H₂O만</text>
      <text x="355" y="150" fontSize="10" fill="#334155">• 이론 효율: ~83%</text>
      <text x="355" y="168" fontSize="10" fill="#334155">• 용도: 수소차·</text>
      <text x="365" y="184" fontSize="10" fill="#334155">  드론·가정용</text>

      {/* ── 전체 반응식 ── */}
      <rect x="30" y="295" width="300" height="36" rx="6" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="1" />
      <text x="180" y="311" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532D">
        2H₂ + O₂ → 2H₂O + 전기에너지
      </text>
      <text x="180" y="325" textAnchor="middle" fontSize="10" fill="#166534">
        탄소 배출 제로 (Zero Carbon Emission)
      </text>
    </svg>
  )
}
