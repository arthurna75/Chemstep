import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson1PeriodicHistoryVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 주기율표 발전 역사 한눈에 보기
        </h3>
        <ChemTable
          headers={['과학자', '연도', '핵심 아이디어', '한계점']}
          rows={[
            ['돌베라이너', '1829', '세쌍원소 — 가운데 원소의 원자량 ≈ 양 끝 평균', '모든 원소 분류 불가'],
            ['뉴랜즈', '1865', '옥타브 법칙 — 8번째마다 성질 유사한 원소 반복', '비활성 기체 미발견, 큰 원소 예외 발생'],
            ['멘델레예프', '1869', '원자량 순 배열 + 미발견 원소 칸 비워둠', '원자량 역전 현상 (Co-Ni 등)'],
            ['모즐리', '1913', '원자 번호 순 배열 → 현대 주기율표 완성', '없음 (현재까지 표준)'],
          ]}
          highlightCol={1}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 현대 주기율표 구조
        </h3>
        <PeriodicTableMini mode="default" caption="현대 주기율표: 원소를 원자 번호 순으로 배열" />
      </div>
    </div>
  )
}
