'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { markLessonComplete } from '@/lib/data'

const CODE_ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789' // 0/O/1/I/L 제외
const CODE_LENGTH = 8
const MAX_CODE_ATTEMPTS = 5

function generateCode(): string {
  let code = ''
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)]
  }
  return code
}

async function ensureSessionUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) return { supabase, user }

  const { data, error } = await supabase.auth.signInAnonymously()
  if (error || !data.user) {
    throw new Error(error?.message ?? '게스트 세션을 시작하지 못했습니다.')
  }
  return { supabase, user: data.user }
}

export async function recordQuizAnswer(quizId: string, optionId: string, isCorrect: boolean) {
  const { supabase, user } = await ensureSessionUser()
  const { error } = await supabase.from('user_answers').insert({
    user_id: user.id,
    quiz_id: quizId,
    selected_option_id: optionId,
    is_correct: isCorrect,
  })
  if (error) throw new Error(error.message)
}

export async function finishLessonQuiz(lessonId: string, passed: boolean) {
  const { user } = await ensureSessionUser()
  if (passed) {
    await markLessonComplete(user.id, lessonId)
  }
}

export async function generateOrGetGuestCode(): Promise<string> {
  const { supabase, user } = await ensureSessionUser()

  const { data: existing } = await supabase
    .from('guest_codes')
    .select('code')
    .eq('user_id', user.id)
    .maybeSingle()
  if (existing?.code) return existing.code

  for (let attempt = 0; attempt < MAX_CODE_ATTEMPTS; attempt++) {
    const code = generateCode()
    const { data, error } = await supabase
      .from('guest_codes')
      .insert({ code, user_id: user.id })
      .select('code')
      .maybeSingle()
    if (!error && data?.code) return data.code
    if (error && error.code !== '23505') throw new Error(error.message)
  }
  throw new Error('코드 생성에 실패했습니다. 다시 시도해주세요.')
}

export async function signOutUser() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/')
}
