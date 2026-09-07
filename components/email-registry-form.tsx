'use client'

import { useActionState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { joinEmailRegistry, type RegistryState } from '@/app/actions/email-registry'

const initialState: RegistryState = { status: 'idle', message: '' }

export function EmailRegistryForm() {
  const [state, formAction, pending] = useActionState(joinEmailRegistry, initialState)

  return (
    <form action={formAction} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
      <label className="sr-only" htmlFor="registry-email">Email address</label>
      <input id="registry-email" name="email" type="email" required placeholder="Your email address" autoComplete="email" className="min-h-12 flex-1 border border-navy/25 bg-white/60 px-4 text-sm text-navy outline-none placeholder:text-navy/45 focus:border-navy" />
      <button type="submit" disabled={pending} className="inline-flex min-h-12 items-center justify-center gap-2 bg-navy px-5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-oxblood disabled:cursor-wait disabled:opacity-60">{pending ? 'Joining...' : 'Keep me posted'} <ArrowUpRight size={15} /></button>
      {state.message && <p aria-live="polite" className={`text-sm sm:absolute sm:mt-14 ${state.status === 'error' ? 'text-oxblood' : 'text-navy/70'}`}>{state.message}</p>}
    </form>
  )
}
