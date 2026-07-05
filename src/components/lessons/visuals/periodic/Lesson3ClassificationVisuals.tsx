import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson3ClassificationVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 금속 · 비금속 · 준금속 성질 비교
        </h3>
        <ChemTable
          headers={['구분', '전기 전도성', '열 전도성', '광택', '이온 형성', '주요 예시']}
          rows={[
            ['금속', '우수 (도체)', '우수', '있음 (금속 광택)', '양이온 (전자 잃음)', 'Na, Fe, Cu, Al, Au'],
            ['비금속', '불량 (부도체)', '불량', '없음', '음이온 (전자 얻음)', 'O, N, Cl, S, C'],
            ['준금속', '조건부 전도 (반도체)', '보통', '약한 광택', '다양', 'B, Si, Ge, As'],
            ['비활성 기체', '없음', '매우 낮음', '없음', '이온 형성 안 함', 'He, Ne, Ar, Kr'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 비활성 기체의 활용
        </h3>
        <ChemTable
          headers={['원소', '기호', '주요 용도']}
          rows={[
            ['헬륨', 'He', '기구, MRI 냉각'],
            ['네온', 'Ne', '네온사인'],
            ['아르곤', 'Ar', '형광등, 백열전구 충전 기체'],
            ['크립톤·제논', 'Kr, Xe', '특수 조명'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 주기율표에서의 분류
        </h3>
        <PeriodicTableMini
          mode="classification"
          caption="주기율표에서의 분류: 파랑=금속, 주황=비금속, 초록=준금속, 회색=비활성기체"
        />
      </div>
    </div>
  )
}
