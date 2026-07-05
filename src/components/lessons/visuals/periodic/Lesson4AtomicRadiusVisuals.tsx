import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson4AtomicRadiusVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 2주기 원소 원자 반지름 비교 (단위: pm)
        </h3>
        <ChemTable
          headers={['원소', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F']}
          rows={[
            ['원자 반지름(pm)', '152', '112', '87', '77', '75', '73', '72'],
            ['원자 번호(Z)', '3', '4', '5', '6', '7', '8', '9'],
          ]}
          caption="오른쪽으로 갈수록 원자 반지름 감소 (유효 핵전하 증가)"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 1족 원소 세로 비교
        </h3>
        <ChemTable
          headers={['원소', '주기', '원자 반지름(pm)']}
          rows={[
            ['Li', '2주기', '152'],
            ['Na', '3주기', '186'],
            ['K', '4주기', '227'],
          ]}
          caption="아래로 갈수록 원자 반지름 증가 (전자 껍질 수 증가)"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 원자 반지름 vs 이온 반지름
        </h3>
        <ChemTable
          headers={['입자', '반지름(pm)', '비고']}
          rows={[
            ['Na (원자)', '186', '전자 11개'],
            ['Na⁺ (양이온)', '102', '전자 10개 — 전자를 잃어 반지름 감소'],
            ['Cl (원자)', '99', '전자 17개'],
            ['Cl⁻ (음이온)', '181', '전자 18개 — 전자를 얻어 반지름 증가'],
          ]}
          caption="양이온은 원래 원자보다 작고, 음이온은 원래 원자보다 크다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 원자 반지름 경향
        </h3>
        <PeriodicTableMini mode="trend-radius" caption="원자 반지름 경향: → 감소, ↓ 증가" />
      </div>
    </div>
  )
}
