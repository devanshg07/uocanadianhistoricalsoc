'use server'

import { db } from '@/lib/db'
import { emailRegistry } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export type RegistryState = {
  status: 'idle' | 'success' | 'error'
  message: string
}

export async function joinEmailRegistry(_previousState: RegistryState, formData: FormData): Promise<RegistryState> {
  const rawEmail = formData.get('email')
  const email = typeof rawEmail === 'string' ? rawEmail.trim().toLowerCase() : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: 'error', message: 'Please enter a valid email address.' }
  }

  try {
    const existing = await db.select({ id: emailRegistry.id }).from(emailRegistry).where(eq(emailRegistry.email, email)).limit(1)
    if (existing.length > 0) {
      return { status: 'success', message: 'You are already on the list. We will be in touch.' }
    }

    await db.insert(emailRegistry).values({ email })
    return { status: 'success', message: 'You are on the list. We will keep you posted.' }
  } catch {
    return { status: 'error', message: 'Something went wrong. Please try again.' }
  }
}
