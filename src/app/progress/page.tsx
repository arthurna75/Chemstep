import Link from 'next/link'
import {
  getCurrentUser,
  getProgressSummaryForUser,
  getProgressSummaryFromRaw,
  getProgressByCode,
  getRecentAnswers,
  getMyGuestCode,
  toRecentAnswersFromCode,
  type ProgressSummary,
  type RecentAnswer,
} from '@/lib/data'
import CodeLookupForm from '@/components/progress/CodeLookupForm'
import GuestCodeSection from '@/components/progress/GuestCodeSection'
import { signOutUser } from '@/lib/actions/progress'

interface Props {
  searchParams: Promise<{ code?: string }>
}

export default async function ProgressPage({ searchParams }: Props) {
  const { code } = await searchParams

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📊 학습 진행 상황</h1>
        <p className="text-gray-500 mt-1">챕터별 학습 현황과 퀴즈 기록을 확인하세요</p>
      </div>

      {code ? <CodeProgressView code={code} /> : <MyProgressView />}
    </div>
  )
}

async function MyProgressView() {
  const user = await getCurrentUser()

  if (!user) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center">
          <p className="text-gray-500">아직 학습 기록이 없습니다.</p>
          <Link href="/chapters" className="inline-block mt-3 text-blue-600 hover:underline text-sm">
            학습 시작하러 가기 →
          </Link>
        </div>
        <CodeLookupForm />
      </div>
    )
  }

  const [summary, recentAnswers, guestCode] = await Promise.all([
    getProgressSummaryForUser(user.id),
    getRecentAnswers(user.id),
    getMyGuestCode(user.id),
  ])

  return (
    <div className="space-y-6">
      <ProgressSummaryView summary={summary} recentAnswers={recentAnswers} />

      <div className="bg-white border border-gray-200 rounded-xl p-4 space-y-3">
        {user.is_anonymous ? (
          <>
            <p className="text-sm text-gray-600">게스트로 학습 중입니다.</p>
            <GuestCodeSection initialCode={guestCode} />
            <Link href="/signup" className="inline-block text-sm text-blue-600 hover:underline">
              이메일로 계정 전환하기 →
            </Link>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-600">{user.email}로 로그인됨</p>
            <form action={signOutUser}>
              <button type="submit" className="text-sm text-gray-500 hover:underline">
                로그아웃
              </button>
            </form>
          </>
        )}
      </div>

      <CodeLookupForm />
    </div>
  )
}

async function CodeProgressView({ code }: { code: string }) {
  const raw = await getProgressByCode(code)

  if (!raw) {
    return (
      <div className="space-y-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 font-medium">유효하지 않은 코드입니다.</p>
        </div>
        <CodeLookupForm />
      </div>
    )
  }

  const summary = await getProgressSummaryFromRaw(raw)
  const recentAnswers = toRecentAnswersFromCode(raw)

  return (
    <div className="space-y-6">
      <p className="text-sm text-gray-500">
        코드 <span className="font-mono font-semibold">{code}</span>로 조회한 진행 상황입니다.
      </p>
      <ProgressSummaryView summary={summary} recentAnswers={recentAnswers} />
      <CodeLookupForm />
    </div>
  )
}

function ProgressSummaryView({
  summary,
  recentAnswers,
}: {
  summary: ProgressSummary
  recentAnswers: RecentAnswer[]
}) {
  const overallPercent =
    summary.totalLessons > 0 ? Math.round((summary.completedLessons / summary.totalLessons) * 100) : 0

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-3 gap-4">
        <StatTile label="전체 완료율" value={`${overallPercent}%`} icon="📈" />
        <StatTile label="완료 레슨" value={`${summary.completedLessons}/${summary.totalLessons}`} icon="📝" />
        <StatTile label="정답 수" value={summary.correctAnswers} icon="✅" />
      </section>

      <section>
        <h2 className="text-lg font-bold text-gray-900 mb-3">챕터별 진행</h2>
        <div className="grid gap-3">
          {summary.chapters.map(chapter => {
            const percent =
              chapter.totalLessons > 0
                ? Math.round((chapter.completedLessons / chapter.totalLessons) * 100)
                : 0
            return (
              <div key={chapter.chapterId} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">
                    {chapter.icon ?? '📚'} {chapter.title}
                  </span>
                  <span className="text-xs text-gray-500">
                    {chapter.completedLessons}/{chapter.totalLessons}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${percent}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {recentAnswers.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-3">최근 퀴즈 기록</h2>
          <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
            {recentAnswers.map((answer, i) => (
              <div key={`${answer.quizId}-${i}`} className="flex items-center justify-between px-4 py-3">
                <div className="min-w-0">
                  <p className="text-sm text-gray-900 truncate">{answer.question}</p>
                  <p className="text-xs text-gray-400">{answer.lessonTitle}</p>
                </div>
                <span className="text-lg">{answer.isCorrect ? '✅' : '❌'}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function StatTile({ label, value, icon }: { label: string; value: string | number; icon: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="text-xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  )
}
