import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4ElectronConfigVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 원소별 오비탈 전자배치 예시
        </h3>
        <ChemTable
          headers={['원소', '원자 번호(Z)', '오비탈 전자배치', '보어 모형 표기']}
          rows={[
            ['수소(H)', '1', '1s¹', 'K(1)'],
            ['탄소(C)', '6', '1s²2s²2p²', 'K(2) L(4)'],
            ['질소(N)', '7', '1s²2s²2p³', 'K(2) L(5)'],
            ['산소(O)', '8', '1s²2s²2p⁴', 'K(2) L(6)'],
            ['나트륨(Na)', '11', '1s²2s²2p⁶3s¹', 'K(2) L(8) M(1)'],
          ]}
          caption="보어 모형의 L(8)은 오비탈 표기로 2s²2p⁶을 합친 것입니다"
        />
      </div>
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 전자 배치 세 가지 규칙
        </h3>
        <ChemTable
          headers={['규칙', '내용']}
          rows={[
            ['쌓음 원리', '에너지가 낮은 오비탈부터 순서대로 채움'],
            ['파울리 배타 원리', '하나의 오비탈에는 스핀이 반대인 전자 최대 2개'],
            ['훈트 규칙', '에너지가 같은 오비탈에는 전자가 최대한 나뉘어 들어감'],
          ]}
        />
      </div>
    </div>
  )
}
