import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const credentials = [
  { label: 'Education', value: 'BBA, Accounting' },
  { label: 'Experience', value: '10+ years' },
  { label: 'Focus', value: 'Billing workflows & financial controls' },
  { label: 'Based in', value: 'Nashville, TN' },
]

const arsenal = [
  { name: 'MS Excel', detail: 'TEXTSPLIT · INDEX · MATCH' },
  { name: 'SQL', detail: 'Modeling & pipelines' },
  { name: 'Power BI', detail: 'DAX · Semantic models' },
  { name: 'Workday', detail: 'Configuration' },
  { name: 'SAP', detail: 'Migration' },
  { name: 'Concur', detail: 'Expense policy' },
  { name: 'LLM Frameworks', detail: 'Prompt engineering' },
  { name: 'Web & App Dev', detail: 'React · Next.js' },
]

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading id="about-title" eyebrow="About the Consultant" title="I see the entire operational picture." />
          <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
            <p>
              With a BBA in Accounting and more than a decade optimizing billing workflows and financial controls, I&apos;ve
              worked on every side of the ledger &mdash; from auditing global teams to managing portfolios generating
              $5M&ndash;$8M in monthly revenue.
            </p>
            <p>
              That range is the point. Having reconciled the accounts, configured the ERP, and written the code, I can
              trace a problem from a contract clause to a database table to a board-level KPI &mdash; and then build the
              tool that fixes it.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t pt-8">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{c.label}</dt>
                <dd className="mt-1 font-medium">{c.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-primary">Technical Arsenal</h3>
          <ul className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg border bg-border">
            {arsenal.map((tool, i) => (
              <li key={tool.name} className="bg-background">
                <Reveal delay={i * 50} className="flex h-full flex-col justify-center p-5">
                  <span className="font-semibold tracking-tight">{tool.name}</span>
                  <span className="mt-1 font-mono text-xs text-muted-foreground">{tool.detail}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
