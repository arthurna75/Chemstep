import Link from 'next/link'
import { getChapters } from '@/lib/data'

export default async function HomePage() {
  let chapters: Awaited<ReturnType<typeof getChapters>> = []
  try {
    chapters = await getChapters()
  } catch {
    // Supabase 미설정 시 빈 배열 사용
  }

  const totalChapters = chapters.length

  return (
    <div className="space-y-10">
      {/* 히어로 섹션 */}
      <section className="text-center py-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl text-white px-6">
        <h1 className="text-4xl font-bold mb-3">⚗️ ChemStep</h1>
        <p className="text-blue-100 text-lg mb-8">
          고등학교 화학을 기초부터 응용까지<br />단계적으로 학습하세요
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/chapters"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            🚀 학습 시작하기
          </Link>
          {totalChapters > 0 && (
            <Link
              href={`/chapters/${chapters[0].id}`}
              className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl border border-blue-400 hover:bg-blue-400 transition-colors"
            >
              ▶ 이어서 공부하기
            </Link>
          )}
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="grid grid-cols-3 gap-4">
        {[
          { label: '전체 단원', value: totalChapters, icon: '📚' },
          { label: '학습 레슨', value: '0', icon: '📝' },
          { label: '퀴즈 완료', value: '0', icon: '✅' },
        ].map(stat => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </section>

      {/* 단원 미리보기 */}
      {chapters.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">학습 단원</h2>
            <Link href="/chapters" className="text-sm text-blue-600 hover:underline">
              전체 보기 →
            </Link>
          </div>
          <div className="grid gap-3">
            {chapters.slice(0, 3).map(chapter => (
              <Link
                key={chapter.id}
                href={`/chapters/${chapter.id}`}
                className="flex items-center gap-4 bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-400 hover:shadow-sm transition-all"
              >
                <span className="text-2xl">{chapter.icon ?? '📚'}</span>
                <div>
                  <p className="font-semibold text-gray-900">{chapter.title}</p>
                  <p className="text-sm text-gray-500">{chapter.description}</p>
                </div>
                <span className="ml-auto text-gray-400">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* DB 미설정 안내 */}
      {chapters.length === 0 && (
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
          <p className="text-amber-700 font-medium mb-2">⚙️ Supabase 연결이 필요합니다</p>
          <p className="text-sm text-amber-600">
            .env.local 파일에 NEXT_PUBLIC_SUPABASE_URL과<br />
            NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정하세요
          </p>
        </section>
      )}
    </div>
  )
}
