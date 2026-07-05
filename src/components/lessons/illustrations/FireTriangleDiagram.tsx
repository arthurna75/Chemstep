export default function FireTriangleDiagram() {
  return (
    <svg
      viewBox="0 0 480 340"
      aria-label="연소 삼각형(소화 삼각형): 연료·산소·열의 3요소와 각 요소를 제거하는 소화 방법"
      className="w-full h-auto"
    >
      <rect width="480" height="340" fill="#F8FAFC" rx="8" />

      {/* 제목 */}
      <text x="240" y="24" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1E293B">
        연소 삼각형(소화 삼각형)
      </text>

      {/* ── 삼각형 (좌측) ── */}
      <polygon
        points="120,58 30,286 210,286"
        fill="#FFF7ED"
        stroke="#F97316"
        strokeWidth="3"
      />

      {/* 중심: 연소 표시 */}
      <text x="120" y="210" textAnchor="middle" fontSize="20">🔥</text>
      <text x="120" y="228" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7C2D12">연소</text>

      {/* 꼭짓점 원 마커 */}
      <circle cx="120" cy="58" r="6" fill="#EF4444" />
      <circle cx="30" cy="286" r="6" fill="#F59E0B" />
      <circle cx="210" cy="286" r="6" fill="#3B82F6" />

      {/* 열 (상단 꼭짓점) */}
      <text x="120" y="88" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">열</text>
      <text x="120" y="102" textAnchor="middle" fontSize="9" fill="#B91C1C">(Heat)</text>

      {/* 연료 (좌하단 꼭짓점) */}
      <text x="55" y="256" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B45309">연료</text>
      <text x="55" y="270" textAnchor="middle" fontSize="9" fill="#B45309">(Fuel)</text>

      {/* 산소 (우하단 꼭짓점) */}
      <text x="185" y="256" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">산소</text>
      <text x="185" y="270" textAnchor="middle" fontSize="9" fill="#1D4ED8">(Oxygen)</text>

      {/* ── 우측 설명 패널 ── */}
      <rect x="228" y="46" width="232" height="270" rx="8" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
      <text x="344" y="70" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0F172A">
        소화 방법 — 한 꼭짓점 제거 = 소화
      </text>

      {/* 냉각 소화 (열 제거) */}
      <circle cx="242" cy="90" r="5" fill="#EF4444" />
      <text x="252" y="94" fontSize="11" fontWeight="bold" fill="#B91C1C">냉각 소화 — 열 제거</text>
      <text x="252" y="109" fontSize="9" fill="#334155">물을 뿌려 온도↓ → k↓ → 연소 중단</text>

      <line x1="238" y1="120" x2="450" y2="120" stroke="#E2E8F0" strokeWidth="1" />

      {/* 제거 소화 (연료 제거) */}
      <circle cx="242" cy="140" r="5" fill="#F59E0B" />
      <text x="252" y="144" fontSize="11" fontWeight="bold" fill="#B45309">제거 소화 — 연료 제거</text>
      <text x="252" y="159" fontSize="9" fill="#334155">가스 밸브 잠금, 연료 공급 차단</text>

      <line x1="238" y1="170" x2="450" y2="170" stroke="#E2E8F0" strokeWidth="1" />

      {/* 질식 소화 (산소 제거) */}
      <circle cx="242" cy="190" r="5" fill="#3B82F6" />
      <text x="252" y="194" fontSize="11" fontWeight="bold" fill="#1D4ED8">질식 소화 — 산소 제거</text>
      <text x="252" y="209" fontSize="9" fill="#334155">CO₂·모래로 덮어 O₂ 접촉 차단</text>

      <line x1="238" y1="220" x2="450" y2="220" stroke="#E2E8F0" strokeWidth="1" />

      {/* 억제 소화 (연쇄 반응 차단, 삼각형 내부) */}
      <circle cx="242" cy="240" r="5" fill="#7C3AED" />
      <text x="252" y="244" fontSize="11" fontWeight="bold" fill="#6D28D9">억제 소화 — 연쇄 반응 차단</text>
      <text x="252" y="259" fontSize="9" fill="#334155">할론·분말 소화제가 라디칼(·H,·OH)</text>
      <text x="252" y="271" fontSize="9" fill="#334155">을 포획해 연소를 중단시킴</text>

      <rect x="238" y="282" width="212" height="28" rx="4" fill="#FEF2F2" stroke="#FECACA" strokeWidth="1" />
      <text x="344" y="300" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#991B1B">
        3요소 중 하나만 제거해도 불은 꺼진다
      </text>
    </svg>
  )
}
