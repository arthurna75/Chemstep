import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4ProtectionMethodsVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 부식 방지법 비교
        </h3>
        <ChemTable
          headers={['방법', '원리', '특징']}
          rows={[
            ['도장(코팅)', '금속과 전해질의 접촉을 물리적으로 차단', '흠집이 나면 그 부위부터 부식 시작'],
            ['아연 도금', '아연이 철보다 먼저 산화되는 희생 보호', '흠집이 나도 철이 보호됨'],
            ['주석 도금', '주석이 얇은 보호막 역할만 함(희생 안 함)', '흠집이 나면 철이 더 빨리 부식'],
            ['부동태화(스테인리스강)', '크로뮴 산화막이 스스로 재생', '손상되어도 막이 다시 형성됨'],
            ['부식억제제', '금속 표면에 흡착층 형성', '배관·냉각수 등에 소량 첨가'],
          ]}
          caption="부식 방지법은 물리적 차단과 전기화학적 희생 보호로 나눌 수 있다."
        />
      </div>
    </div>
  )
}
