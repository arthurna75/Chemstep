import ChemTable from '@/components/ui/ChemTable'

export default function Lesson4GasMolarVolumeVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> 기체의 몰 부피 (STP)
        </h3>
        <ChemTable
          headers={['기체', '분자량', '몰 부피(STP)']}
          rows={[
            ['H₂', '2', '22.4 L'],
            ['O₂', '32', '22.4 L'],
            ['CO₂', '44', '22.4 L'],
          ]}
          caption="분자량이 달라도 STP(0°C, 1기압)에서 1몰의 부피는 모두 22.4 L로 동일"
          highlightCol={2}
        />
      </div>
    </div>
  )
}
