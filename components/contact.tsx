'use client'

import { useActionState } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { submitIntake, type IntakeState } from '@/app/actions'
import { cn } from '@/lib/utils'

const initialState: IntakeState = { status: 'idle' }

const inputClass =
  'w-full rounded-md border border-white/15 bg-white/5 px-3.5 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:border-signal focus:outline-none focus:ring-2 focus:ring-signal/30'

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

export function Contact() {
  const [state, formAction, pending] = useActionState(submitIntake, initialState)
  const err = state.errors ?? {}

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-navy py-24 text-navy-foreground md:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-signal">Book a Strategy Call</p>
          <h2 id="contact-title" className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s find your revenue leaks and slow cycles.
          </h2>
          <p className="mt-4 leading-relaxed text-navy-foreground/70">
            Share where things are breaking down today. I&apos;ll come to the discovery call with a first read on what to
            automate, what to fix, and what to build.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            {['30-minute discovery call', 'Initial opportunity assessment', 'No-obligation proposal'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle2 className="size-4 text-signal" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {state.status === 'success' ? (
          <div role="status" className="flex flex-col items-start justify-center rounded-lg border border-white/10 bg-white/5 p-10">
            <CheckCircle2 className="size-10 text-signal" aria-hidden="true" />
            <p className="mt-4 text-xl font-semibold">Request received</p>
            <p className="mt-2 text-navy-foreground/70">{state.message}</p>
          </div>
        ) : (
          <form action={formAction} noValidate className="grid gap-5 rounded-lg border border-white/10 bg-white/[0.03] p-6 md:p-8 sm:grid-cols-2">
            <Field id="name" label="Full name" error={err.name}>
              <input id="name" name="name" autoComplete="name" required aria-invalid={!!err.name} aria-describedby={err.name ? 'name-error' : undefined} className={inputClass} placeholder="Jordan Lee" />
            </Field>
            <Field id="email" label="Work email" error={err.email}>
              <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!err.email} aria-describedby={err.email ? 'email-error' : undefined} className={inputClass} placeholder="jordan@company.com" />
            </Field>
            <Field id="company" label="Company">
              <input id="company" name="company" autoComplete="organization" className={inputClass} placeholder="Company name" />
            </Field>
            <Field id="companySize" label="Company size" error={err.companySize}>
              <select id="companySize" name="companySize" required defaultValue="" aria-invalid={!!err.companySize} aria-describedby={err.companySize ? 'companySize-error' : undefined} className={cn(inputClass, '[&>option]:text-foreground')}>
                <option value="" disabled>
                  Select employees
                </option>
                {['1-10', '11-50', '51-200', '201-1000', '1000+'].map((s) => (
                  <option key={s} value={s}>
                    {s} employees
                  </option>
                ))}
              </select>
            </Field>
            <div className="sm:col-span-2">
              <Field id="bottlenecks" label="Current operational bottlenecks" error={err.bottlenecks}>
                <textarea id="bottlenecks" name="bottlenecks" rows={3} required aria-invalid={!!err.bottlenecks} aria-describedby={err.bottlenecks ? 'bottlenecks-error' : undefined} className={inputClass} placeholder="e.g. Month-end close takes 10 days; billing reconciliation is manual." />
              </Field>
            </div>
            <div className="sm:col-span-2">
              <Field id="outcomes" label="Desired outcomes" error={err.outcomes}>
                <textarea id="outcomes" name="outcomes" rows={3} required aria-invalid={!!err.outcomes} aria-describedby={err.outcomes ? 'outcomes-error' : undefined} className={inputClass} placeholder="e.g. Automated QBR dashboard and a 5-day close." />
              </Field>
            </div>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
              <p aria-live="polite" className="text-sm text-red-300">
                {state.status === 'error' ? state.message : ''}
              </p>
              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3 font-medium text-navy transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                Request Strategy Call
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
