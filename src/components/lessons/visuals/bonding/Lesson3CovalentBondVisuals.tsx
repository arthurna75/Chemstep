import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3CovalentBondVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 공유 결합의 종류
        </h3>
        <ChemTable
          headers={['결합 종류', '전자쌍 수', '예시']}
          rows={[
            ['단일 결합 (single bond)', '1쌍', 'H₂ (H-H), HCl (H-Cl), H₂O (O-H)'],
            ['2중 결합 (double bond)', '2쌍', 'O₂ (O=O), CO₂ (O=C=O), C₂H₄ (C=C)'],
            ['3중 결합 (triple bond)', '3쌍', 'N₂ (N≡N), C₂H₂ (C≡C)'],
          ]}
          caption="공유하는 전자쌍의 수(결합 차수)에 따라 구분합니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> N-N 결합 비교
        </h3>
        <ChemTable
          headers={['결합', '결합 길이', '결합 에너지']}
          rows={[
            ['N-N (단일 결합)', '145 pm', '160 kJ/mol'],
            ['N=N (2중 결합)', '123 pm', '418 kJ/mol'],
            ['N≡N (3중 결합)', '110 pm', '945 kJ/mol'],
          ]}
          caption="결합 차수가 증가할수록 결합 길이는 짧아지고 결합 에너지는 커집니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 분자의 루이스 구조
        </h3>
        <ChemTable
          headers={['분자', '결합 구조', '비공유 전자쌍']}
          rows={[
            ['H₂O', 'O가 H 2개와 각각 단일 결합', 'O에 2쌍'],
            ['NH₃', 'N이 H 3개와 각각 단일 결합', 'N에 1쌍'],
            ['CO₂', 'C가 O 2개와 각각 2중 결합 (O=C=O)', 'O 각각에 2쌍씩'],
            ['N₂', 'N 2개가 3중 결합 (N≡N)', '각 N에 1쌍'],
            ['CH₄', 'C가 H 4개와 각각 단일 결합', '없음'],
          ]}
        />
      </div>
    </div>
  )
}
