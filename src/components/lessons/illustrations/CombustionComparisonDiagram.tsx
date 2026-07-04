export default function CombustionComparisonDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="완전 연소와 불완전 연소 비교 다이어그램"
      className="w-full h-auto"
    >
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        완전 연소 vs 불완전 연소 (CH₄ 기준)
      </text>

      {/* ── 완전 연소 (왼쪽) ── */}
      <rect x="20" y="42" width="210" height="278" rx="8" fill="#DCFCE7" stroke="#86EFAC" strokeWidth="2" />
      <text x="125" y="64" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#14532D">완전 연소</text>
      <text x="125" y="80" textAnchor="middle" fontSize="10" fill="#166534">(산소 충분, 파란 불꽃)</text>

      {/* 반응 조건 */}
      <rect x="32" y="90" width="186" height="36" rx="4" fill="white" stroke="#86EFAC" strokeWidth="1" />
      <text x="125" y="104" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A">반응식</text>
      <text x="125" y="118" textAnchor="middle" fontSize="10" fill="#0F172A">CH₄ + 2O₂ → CO₂ + 2H₂O</text>

      {/* 생성물 */}
      <text x="125" y="146" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532D">생성물</text>
      <rect x="42" y="152" width="80" height="48" rx="4" fill="#BBF7D0" stroke="#4ADE80" strokeWidth="1" />
      <text x="82" y="172" textAnchor="middle" fontSize="20">💨</text>
      <text x="82" y="192" textAnchor="middle" fontSize="10" fill="#14532D">CO₂</text>

      <rect x="132" y="152" width="80" height="48" rx="4" fill="#BAE6FD" stroke="#38BDF8" strokeWidth="1" />
      <text x="172" y="172" textAnchor="middle" fontSize="20">💧</text>
      <text x="172" y="192" textAnchor="middle" fontSize="10" fill="#0369A1">H₂O</text>

      {/* 특징 */}
      <text x="125" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#14532D">특징</text>
      <text x="38" y="236" fontSize="10" fill="#166534">✅ 최대 에너지 발생</text>
      <text x="38" y="250" fontSize="10" fill="#166534">✅ CO 없음 (안전)</text>
      <text x="38" y="264" fontSize="10" fill="#166534">✅ 그을음 없음</text>
      <text x="38" y="278" fontSize="10" fill="#166534">✅ λ ≥ 1 (공기 충분)</text>

      {/* ΔH */}
      <rect x="32" y="288" width="186" height="24" rx="4" fill="#D1FAE5" stroke="#34D399" strokeWidth="1" />
      <text x="125" y="304" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#065F46">
        ΔH° = −890 kJ/mol (최대 발열)
      </text>

      {/* ── 불완전 연소 (오른쪽) ── */}
      <rect x="250" y="42" width="210" height="278" rx="8" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="2" />
      <text x="355" y="64" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#991B1B">불완전 연소</text>
      <text x="355" y="80" textAnchor="middle" fontSize="10" fill="#B91C1C">(산소 부족, 노란 불꽃)</text>

      {/* 반응식 */}
      <rect x="262" y="90" width="186" height="36" rx="4" fill="white" stroke="#FCA5A5" strokeWidth="1" />
      <text x="355" y="104" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A">반응식</text>
      <text x="355" y="118" textAnchor="middle" fontSize="10" fill="#0F172A">CH₄ + 3/2O₂ → CO + 2H₂O</text>

      {/* 생성물 */}
      <text x="355" y="146" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991B1B">생성물</text>
      <rect x="272" y="152" width="80" height="48" rx="4" fill="#FEE2E2" stroke="#F87171" strokeWidth="1" />
      <text x="312" y="172" textAnchor="middle" fontSize="20">⚠️</text>
      <text x="312" y="192" textAnchor="middle" fontSize="10" fill="#991B1B">CO (독성!)</text>

      <rect x="362" y="152" width="80" height="48" rx="4" fill="#FEF3C7" stroke="#FCD34D" strokeWidth="1" />
      <text x="402" y="172" textAnchor="middle" fontSize="20">🫧</text>
      <text x="402" y="192" textAnchor="middle" fontSize="10" fill="#92400E">그을음(C)</text>

      {/* 특징 */}
      <text x="355" y="220" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#991B1B">특징</text>
      <text x="268" y="236" fontSize="10" fill="#B91C1C">❌ 에너지 손실 큼</text>
      <text x="268" y="250" fontSize="10" fill="#B91C1C">❌ CO 발생 (중독 위험)</text>
      <text x="268" y="264" fontSize="10" fill="#B91C1C">❌ 그을음 (미세먼지)</text>
      <text x="268" y="278" fontSize="10" fill="#B91C1C">❌ λ &lt; 1 (공기 부족)</text>

      {/* ΔH */}
      <rect x="262" y="288" width="186" height="24" rx="4" fill="#FEE2E2" stroke="#F87171" strokeWidth="1" />
      <text x="355" y="304" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991B1B">
        ΔH° = −519 kJ/mol (손실 발생)
      </text>
    </svg>
  )
}
