import Image from 'next/image'
import { ArrowRight, PlayCircle } from 'lucide-react'

const ticker = [
  { label: 'Monthly revenue managed', value: '$5M–$8M' },
  { label: 'Accounts re-allocated / mo', value: '$110M+' },
  { label: 'Experience', value: '10+ yrs' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-16 text-navy-foreground">
      <div aria-hidden="true" className="grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-signal">
          <span className="size-1.5 animate-pulse rounded-full bg-signal" aria-hidden="true" />
          Finance &times; Technology Consulting
        </p>
        <div className="mt-6 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
          <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Bridging Enterprise Finance and Next-Gen Technology.
          </h1>
          <Image
            src="/brand/logo-mark.png"
            alt="Ateet Upadhyaya Business Consulting monogram"
            width={275}
            height={245}
            priority
            className="h-auto w-24 shrink-0 [mask-image:radial-gradient(closest-side,black_70%,transparent)] md:w-56"
          />
        </div>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/70">
          I help businesses automate workflows, uncover revenue leaks, and build intelligent data systems. I don&apos;t
          just advise &mdash; I build the dashboards, apps, and automations that execute the strategy.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-6 py-3 font-medium text-navy transition-opacity hover:opacity-90"
          >
            Book a Strategy Call
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-6 py-3 font-medium transition-colors hover:bg-white/5"
          >
            <PlayCircle className="size-4" aria-hidden="true" />
            Watch Build Walkthroughs
          </a>
        </div>

        <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
          {ticker.map((item) => (
            <div key={item.label} className="bg-navy px-6 py-5">
              <dt className="font-mono text-xs uppercase tracking-wider text-navy-foreground/50">{item.label}</dt>
              <dd className="mt-1 text-2xl font-semibold tracking-tight">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
