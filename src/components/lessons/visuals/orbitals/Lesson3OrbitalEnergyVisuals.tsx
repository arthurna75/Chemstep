import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3OrbitalEnergyVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 부껍질별 오비탈 수와 최대 전자 수
        </h3>
        <ChemTable
          headers={['부껍질', '오비탈 개수', '최대 전자 수', '대표 모양']}
          rows={[
            ['s', '1개', '2개', '구형'],
            ['p', '3개', '6개', '아령형'],
            ['d', '5개', '10개', '대부분 클로버형'],
            ['f', '7개', '14개', '복잡한 다중 로브형'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 오비탈 채움 순서 (쌓음 원리)
        </h3>
        <ChemTable
          headers={['순서', '오비탈']}
          rows={[
            ['1', '1s'],
            ['2 ~ 3', '2s → 2p'],
            ['4 ~ 5', '3s → 3p'],
            ['6 ~ 7', '4s → 3d'],
            ['8', '4p'],
          ]}
          caption="4s가 3d보다 에너지가 낮아 먼저 채워짐에 주의"
          highlightCol={1}
        />
      </div>
    </div>
  )
}
