import ChemTable from '@/components/ui/ChemTable'

export default function Lesson5QuantumNumbersVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 양자수 네 가지 정리
        </h3>
        <ChemTable
          headers={['이름', '기호', '나타내는 것', '가능한 값']}
          rows={[
            ['주양자수', 'n', '전자 껍질(에너지 준위)', '1, 2, 3 …'],
            ['방위양자수', 'l', '오비탈의 모양', '0 ~ (n-1)'],
            ['자기양자수', 'mₗ', '오비탈이 향하는 방향', '-l ~ +l'],
            ['스핀양자수', 'mₛ', '전자의 스핀', '+1/2 또는 -1/2'],
          ]}
          caption="네 양자수가 모두 같은 전자 두 개는 한 원자 안에 존재할 수 없음 (파울리 배타 원리)"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 방위양자수(l)와 오비탈 이름
        </h3>
        <ChemTable
          headers={['l 값', '오비탈 이름', '오비탈 개수 (2l+1)', '최대 전자 수']}
          rows={[
            ['0', 's', '1개', '2개'],
            ['1', 'p', '3개', '6개'],
            ['2', 'd', '5개', '10개'],
            ['3', 'f', '7개', '14개'],
          ]}
        />
      </div>
    </div>
  )
}
