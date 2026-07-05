import SignupForm from '@/components/auth/SignupForm'

export default function SignupPage() {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">회원가입</h1>
        <p className="text-gray-500 mt-1">게스트로 학습한 기록이 있다면 자동으로 이어집니다</p>
      </div>
      <SignupForm />
    </div>
  )
}
