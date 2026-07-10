import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5CathodicProtectionVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 희생양극법 vs 외부전원법
        </h3>
        <ChemTable
          headers={['구분', '희생양극법', '외부전원법']}
          rows={[
            ['전원 필요 여부', '불필요(반응성 차이만 이용)', '필요(정류기 등 외부 전원)'],
            ['보호 범위', '비교적 좁음', '넓은 범위까지 강하게 보호'],
            ['유지 관리', '희생 양극 주기적 교체', '전원 설비 점검 필요'],
          ]}
          caption="구조물 규모와 조건에 따라 두 방식을 선택하거나 함께 적용한다."
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 음극 방식의 산업 응용 사례
        </h3>
        <ChemTable
          headers={['적용 대상', '방식법 예시']}
          rows={[
            ['선박 선체', '아연·알루미늄 희생 양극 부착'],
            ['지하 매설 배관', '마그네슘 희생 양극 또는 외부전원법'],
            ['해양 구조물·교량', '외부전원법으로 장기간 관리'],
          ]}
          caption="음극 방식은 다양한 산업 인프라의 부식 관리에 활용된다."
        />
      </div>
    </div>
  )
}
