import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3CrackingVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 옥탄가 비교
        </h3>
        <ChemTable
          headers={['연료 종류', '옥탄가']}
          rows={[
            ['n-헵탄 (직선형)', '0'],
            ['이소옥탄 (분지형)', '100'],
            ['일반 휘발유', '87~91'],
            ['고급 휘발유', '91~95'],
          ]}
          highlightCol={1}
          caption="옥탄가가 높을수록 엔진 노킹 저항성이 크고 고성능 엔진에 적합합니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">⚙️</span> 공정 비교
        </h3>
        <ChemTable
          headers={['공정명', '조건/촉매', '반응 유형', '목적']}
          rows={[
            ['열 크래킹', '고온(450~550°C)·고압', '열분해', '긴 사슬 → 짧은 사슬 + 알켄 생성'],
            ['촉매 크래킹(FCC)', '제올라이트 촉매, 500°C', '선택적 촉매 분해', '고옥탄가 가솔린 생산'],
            ['접촉 개질', '백금(Pt) 촉매', '이성질체화·탈수소화', '옥탄가 향상, 방향족(벤젠 등) 생성'],
          ]}
          highlightCol={0}
        />
      </div>
    </div>
  )
}
