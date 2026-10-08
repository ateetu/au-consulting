import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
  id,
}: {
  eyebrow: string
  title: string
  description?: string
  invert?: boolean
  id?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className={cn('font-mono text-xs uppercase tracking-widest', invert ? 'text-signal' : 'text-primary')}>
        {eyebrow}
      </p>
      <h2 id={id} className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            invert ? 'text-navy-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
