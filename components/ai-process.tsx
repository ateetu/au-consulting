import { Database, FileCheck2, Sparkles, Wand2 } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const steps = [
  {
    icon: Database,
    title: 'Ingest',
    body: 'Raw exports from ERPs, billing systems, and spreadsheets are pulled into a staging layer — untouched.',
  },
  {
    icon: Wand2,
    title: 'Scrub with LLMs',
    body: 'Engineered prompts normalize vendor names, classify line items, and flag anomalies humans usually miss.',
  },
  {
    icon: Sparkles,
    title: 'Validate',
    body: 'SQL rules and variance thresholds cross-check every AI output against the ledger before it moves forward.',
  },
  {
    icon: FileCheck2,
    title: 'Report',
    body: 'Finance-ready reports and scorecards generate automatically, with a full audit trail for controllers.',
  },
]

export function AiProcess() {
  return (
    <section aria-labelledby="ai-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        id="ai-title"
        eyebrow="AI Automation"
        title="From messy data to finance-ready reports."
        description="A repeatable pipeline that uses LLMs where they excel and financial controls where accuracy is non-negotiable."
      />
      <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
        <span aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-border md:block" />
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <Reveal delay={i * 120}>
              <span className="relative grid size-12 place-items-center rounded-full border bg-background text-primary">
                <step.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-mono text-xs text-muted-foreground">STEP {String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-1 font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
