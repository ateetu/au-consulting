'use client'

import { useEffect, useState } from 'react'
import { useInView } from './reveal'
import { SectionHeading } from './section-heading'

type Stat = {
  value: number
  prefix?: string
  suffix?: string
  label: string
  detail: string
  bar: number
}

const stats: Stat[] = [
  {
    value: 110,
    prefix: '$',
    suffix: 'M+',
    label: 'Re-allocated monthly',
    detail: 'Accounts re-allocated each month across enterprise portfolios with zero reconciliation drift.',
    bar: 100,
  },
  {
    value: 8,
    prefix: '$',
    suffix: 'M',
    label: 'Monthly portfolio revenue',
    detail: 'High-value portfolios generating $5M–$8M per month under managed billing controls.',
    bar: 72,
  },
  {
    value: 60,
    suffix: '%',
    label: 'Cycle time reduction',
    detail: 'Typical reduction in manual reporting cycles after LLM-driven data scrubbing is deployed.',
    bar: 60,
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years optimizing billing',
    detail: 'Billing workflows, financial controls, and global audit programs across industries.',
    bar: 85,
  },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])
  return value
}

function StatCard({ stat, active, index }: { stat: Stat; active: boolean; index: number }) {
  const count = useCountUp(stat.value, active)
  return (
    <div className="flex flex-col bg-navy p-8">
      <p className="font-mono text-xs uppercase tracking-wider text-navy-foreground/50">
        {String(index + 1).padStart(2, '0')} / {stat.label}
      </p>
      <p className="mt-4 text-5xl font-semibold tabular-nums tracking-tight" aria-label={`${stat.prefix ?? ''}${stat.value}${stat.suffix ?? ''}`}>
        {stat.prefix}
        {count}
        <span className="text-signal">{stat.suffix}</span>
      </p>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
        <div
          className="h-full rounded-full bg-signal transition-[width] duration-[1600ms] ease-out"
          style={{ width: active ? `${stat.bar}%` : '0%', transitionDelay: `${index * 120}ms` }}
        />
      </div>
      <p className="mt-6 text-sm leading-relaxed text-navy-foreground/70">{stat.detail}</p>
    </div>
  )
}

export function ImpactStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25)
  return (
    <section id="impact" aria-labelledby="impact-title" className="bg-navy py-24 text-navy-foreground md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="impact-title"
          invert
          eyebrow="Enterprise Impact"
          title="Results measured in cycle time and dollars."
          description="Concrete outcomes from managing high-value portfolios, multi-million dollar integrations, and automation programs."
        />
        <div
          ref={ref}
          className="mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={inView} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
