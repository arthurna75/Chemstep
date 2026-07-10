import ChemTable from '@/components/ui/ChemTable'

export default function Lesson3CVDALDVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> CVD vs ALD 비교
        </h3>
        <ChemTable
          headers={['구분', '증착 방식', '두께 제어', '단차피복성', '대표 전구체']}
          rows={[
            ['CVD', '기체 전구체가 동시에 표면 반응', '상대적으로 거침', '복잡한 구조에서 불균일할 수 있음', 'SiH₄, O₂ 등'],
            ['ALD', '전구체 펄스-퍼지 사이클 반복', '원자층 단위로 정밀', '매우 균일(자기제한 반응)', '금속-유기 전구체 등'],
          ]}
          caption="ALD는 자기제한 반응 덕분에 CVD보다 두께와 단차피복성을 훨씬 정밀하게 제어할 수 있다."
        />
      </div>
    </div>
  )
}
