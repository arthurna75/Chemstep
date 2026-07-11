import ChemTable from '@/components/ui/ChemTable'

export default function Lesson2OrbitalShapesVisuals() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
          <span className="text-blue-600">📊</span> s, p 오비탈 비교
        </h3>
        <ChemTable
          headers={['오비탈', '모양', '방향의 가짓수', '존재하는 최소 주양자수']}
          rows={[
            ['s', '구형', '1가지', 'n = 1부터'],
            ['p', <>아령형 (p<sub>x</sub>, p<sub>y</sub>, p<sub>z</sub>)</>, '3가지', 'n = 2부터'],
          ]}
          caption="주양자수 n이 커질수록 오비탈의 크기는 커지고, 모양의 종류는 방위양자수(l)로 결정됩니다"
        />
      </div>
    </div>
  )
}
