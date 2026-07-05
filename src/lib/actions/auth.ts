'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export interface AuthActionState {
  error?: string
}

export async function loginWithPassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await createClient()
  const { error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) return { error: error.message }

  redirect('/progress')
}

export async function signupOrUpgrade(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get('email') ?? '')
  const password = String(formData.get('password') ?? '')

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user?.is_anonymous) {
    const { error } = await supabase.auth.updateUser({ email, password })
    if (error) return { error: error.message }
  } else {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) return { error: error.message }
  }

  redirect('/progress')
}
