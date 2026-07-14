import Link from 'next/link'
import { getCurrentUser } from '@/lib/data'
import { signOutUser } from '@/lib/actions/progress'

export default async function Header() {
  const user = await getCurrentUser()
  const isRealAccount = !!user && !user.is_anonymous

  return (
    <header className="print:hidden bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-blue-600 text-lg">
          <span>⚗️</span>
          <span>ChemStep</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <Link href="/chapters" className="hover:text-blue-600 transition-colors">
            단원 목록
          </Link>
          <Link href="/progress" className="hover:text-blue-600 transition-colors">
            내 진행 상황
          </Link>
          {isRealAccount ? (
            <form action={signOutUser}>
              <button type="submit" className="hover:text-blue-600 transition-colors">
                로그아웃
              </button>
            </form>
          ) : (
            <Link href="/login" className="hover:text-blue-600 transition-colors">
              로그인
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
