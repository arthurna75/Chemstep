import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="mx-auto max-w-4xl px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-blue-600 text-lg">
          <span>⚗️</span>
          <span>ChemStep</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <Link href="/chapters" className="hover:text-blue-600 transition-colors">
            단원 목록
          </Link>
        </nav>
      </div>
    </header>
  )
}
