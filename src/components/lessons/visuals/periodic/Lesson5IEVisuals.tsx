import ChemTable from '@/components/ui/ChemTable'
import PeriodicTableMini from '@/components/ui/PeriodicTableMini'

export default function Lesson5IEVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 이온화 에너지 vs 전기 음성도 비교
        </h3>
        <ChemTable
          headers={['구분', '이온화 에너지', '전기 음성도']}
          rows={[
            ['정의', '전자 1개를 떼어내는 에너지 (kJ/mol)', '공유 전자쌍을 당기는 능력 (단위 없음)'],
            ['같은 주기 경향', '오른쪽으로 갈수록 대체로 증가', '오른쪽으로 갈수록 증가'],
            ['같은 족 경향', '아래로 갈수록 감소', '아래로 갈수록 감소'],
            ['가장 큰 원소', 'Ne (2081 kJ/mol)', 'F (4.0)'],
            ['가장 작은 원소', 'Cs (~376 kJ/mol)', 'Cs·Fr (~0.7)'],
          ]}
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 2주기 1차 이온화 에너지
        </h3>
        <ChemTable
          headers={['원소', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne']}
          rows={[
            ['IE₁(kJ/mol)', '520', '900', '800', '1086', '1402', '1314', '1681', '2081'],
          ]}
          caption="주의: N > O, Be > B — 반충전/전충전 안정성 예외"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 순차 이온화 에너지 (Na 예시)
        </h3>
        <ChemTable
          headers={['단계', '에너지(kJ/mol)', '비고']}
          rows={[
            ['IE₁', '496', '3주기 원자가 전자(1개) 제거'],
            ['IE₂', '4562', '급격한 도약 — 안쪽 전자 껍질 진입'],
            ['IE₃', '6910', '내부 전자 계속 제거'],
            ['IE₄', '9540', '내부 전자 계속 제거'],
          ]}
          highlightCol={1}
          caption="IE₁ → IE₂ 사이의 큰 도약이 Na가 1족 원소(원자가 전자 1개)임을 보여준다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">🧪</span> 이온화 에너지 · 전기 음성도 경향
        </h3>
        <PeriodicTableMini mode="trend-ie" caption="이온화 에너지·전기 음성도 경향: → 증가, ↓ 감소" />
      </div>
    </div>
  )
}
