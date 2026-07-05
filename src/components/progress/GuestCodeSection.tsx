'use client'

import { useState, useTransition } from 'react'
import { generateOrGetGuestCode } from '@/lib/actions/progress'

export default function GuestCodeSection({ initialCode }: { initialCode: string | null }) {
  const [code, setCode] = useState(initialCode)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleGenerate() {
    setError(null)
    startTransition(async () => {
      try {
        const newCode = await generateOrGetGuestCode()
        setCode(newCode)
      } catch (e) {
        setError(e instanceof Error ? e.message : '코드 발급에 실패했습니다.')
      }
    })
  }

  if (code) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-700 mb-1">내 진행상황 조회 코드</p>
        <p className="text-2xl font-mono font-bold text-blue-900 tracking-widest">{code}</p>
        <p className="text-xs text-blue-600 mt-2">
          이 코드를 저장해두면 다른 기기에서도 진행상황을 조회할 수 있습니다.
        </p>
      </div>
    )
  }

  return (
    <div>
      <button
        onClick={handleGenerate}
        disabled={isPending}
        className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
      >
        {isPending ? '발급 중...' : '조회 코드 발급받기'}
      </button>
      {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
    </div>
  )
}
