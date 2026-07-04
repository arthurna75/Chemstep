import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson2PeriodGroupVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주요 족(Group) 정리
        </h3>
        <ChemTable
          headers={['족 번호', '이름', '원자가 전자 수', '대표 원소', '특징']}
          rows={[
            ['1족', '알칼리 금속', '1개', 'Li, Na, K, Rb, Cs', '물과 격렬히 반응, 반응성 강함'],
            ['2족', '알칼리 토금속', '2개', 'Be, Mg, Ca, Sr, Ba', '1족보다 반응성 약함'],
            ['13족', '붕소족', '3개', 'B, Al, Ga, In, Tl', 'Al: 가벼운 금속 소재'],
            ['14족', '탄소족', '4개', 'C, Si, Ge, Sn, Pb', 'C: 유기물 기반, Si: 반도체'],
            ['15족', '질소족', '5개', 'N, P, As, Sb, Bi', 'N₂: 공기의 78%'],
            ['16족', '칼코겐족', '6개', 'O, S, Se, Te, Po', 'O₂: 호흡, S: 화학 공업'],
            ['17족', '할로겐족', '7개', 'F, Cl, Br, I, At', '반응성 매우 강함, 염 형성'],
            ['18족', '비활성 기체', '0(8)개', 'He, Ne, Ar, Kr, Xe', '화학 반응 거의 안 함'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 족 위치 확인
        </h3>
        <PeriodicTableMini
          highlightGroups={[1, 2, 17, 18]}
          mode="default"
          caption="같은 족(세로줄) 원소는 화학적 성질이 유사합니다"
        />
      </div>
    </div>
  )
}
