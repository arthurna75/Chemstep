import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">로그인</h1>
        <p className="text-gray-500 mt-1">이메일과 비밀번호로 로그인하세요</p>
      </div>
      <LoginForm />
    </div>
  )
}
