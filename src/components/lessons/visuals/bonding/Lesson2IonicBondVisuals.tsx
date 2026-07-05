import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2IonicBondVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 이온 결합 물질의 성질
        </h3>
        <ChemTable
          headers={['성질', '내용']}
          rows={[
            ['녹는점 · 끓는점', '높음: 강한 이온 결합 → 많은 에너지 필요'],
            ['고체 상태 전도성', '없음: 이온이 격자에 고정되어 이동 불가'],
            ['액체 · 수용액 전도성', '있음: 이온이 자유롭게 이동 가능'],
            ['수용성', '큼: 극성 용매인 물에 잘 녹음'],
            ['취성 (brittleness)', '외부 충격 시 같은 전하 이온끼리 맞닿아 반발 → 쉽게 부서짐'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 대표적인 이온 결합 화합물
        </h3>
        <ChemTable
          headers={['화합물', '명칭', '용도']}
          rows={[
            ['NaCl', '염화 나트륨', '소금'],
            ['KCl', '염화 칼륨', '소금 대용품'],
            ['CaCO₃', '탄산 칼슘', '대리석, 석회석'],
            ['MgO', '산화 마그네슘', '내화재'],
            ['CaF₂', '플루오린화 칼슘', '형석'],
          ]}
        />
      </div>
    </div>
  )
}
