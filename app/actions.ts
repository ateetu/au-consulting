'use server'

export type IntakeState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'email' | 'companySize' | 'bottlenecks' | 'outcomes', string>>
}

const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-1000', '1000+']

export async function submitIntake(_prev: IntakeState, formData: FormData): Promise<IntakeState> {
  const get = (key: string) => String(formData.get(key) ?? '').trim()
  const name = get('name')
  const email = get('email')
  const company = get('company')
  const companySize = get('companySize')
  const bottlenecks = get('bottlenecks')
  const outcomes = get('outcomes')

  const errors: IntakeState['errors'] = {}
  if (name.length < 2 || name.length > 100) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 200) errors.email = 'Please enter a valid email.'
  if (!COMPANY_SIZES.includes(companySize)) errors.companySize = 'Please select a company size.'
  if (bottlenecks.length < 10 || bottlenecks.length > 2000)
    errors.bottlenecks = 'Tell me a bit more (at least 10 characters).'
  if (outcomes.length < 10 || outcomes.length > 2000) errors.outcomes = 'Tell me a bit more (at least 10 characters).'

  if (Object.keys(errors).length > 0) {
    return { status: 'error', errors, message: 'Please fix the highlighted fields.' }
  }

  // TODO: deliver the lead (e.g. Resend email or a Neon table) once an integration is connected.
  console.log('[intake] New strategy call request', { name, email, company, companySize })

  return {
    status: 'success',
    message: `Thanks, ${name.split(' ')[0]}. I'll review your goals and reply within one business day.`,
  }
}
