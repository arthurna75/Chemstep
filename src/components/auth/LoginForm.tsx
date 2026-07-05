'use client'

import { useActionState } from 'react'
import Link from 'next/link'
import { loginWithPassword, type AuthActionState } from '@/lib/actions/auth'

const initialState: AuthActionState = {}

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginWithPassword, initialState)

  return (
    <form action={formAction} className="space-y-4 bg-white border border-gray-200 rounded-xl p-6">
      <div>
        <label className="block text-sm text-gray-600 mb-1">이메일</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-1">비밀번호</label>
        <input
          type="password"
          name="password"
          required
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-400"
        />
      </div>
      {state.error && <p className="text-sm text-red-500">{state.error}</p>}
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
      >
        {isPending ? '로그인 중...' : '로그인'}
      </button>
      <p className="text-sm text-gray-500 text-center">
        계정이 없나요?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">
          회원가입
        </Link>
      </p>
    </form>
  )
}
