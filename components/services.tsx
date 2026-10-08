import { BarChart3, Bot, Landmark, Layers } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const services = [
  {
    icon: Landmark,
    title: 'Financial & Revenue Operations',
    offerings: ['Revenue recognition', 'Variance analysis', 'Post-acquisition integration', 'Tariff 17 compliance'],
    audience:
      'Mid-market companies and real estate portfolio managers needing scalable financial controls and usage-based contract reconciliation.',
  },
  {
    icon: BarChart3,
    title: 'Data Intelligence & Dashboarding',
    offerings: ['Power BI & SQL dashboards', 'Predictive modeling', 'Supply chain forecasting', 'Equity technical indicators'],
    audience: 'Executives requiring automated Monthly Scorecards and Quarterly Business Review (QBR) tracking.',
  },
  {
    icon: Bot,
    title: 'AI Integration & Custom Tech',
    offerings: ['LLM prompt engineering', 'Automated data scrubbing', 'Custom web & app development', 'Script generation'],
    audience:
      'Scaling organizations in Nashville and beyond looking to reduce cycle times and automate manual back-office tasks.',
  },
  {
    icon: Layers,
    title: 'Systems Implementation',
    offerings: ['Migration management', 'SOP development', 'Workday configuration', 'SAP & Concur rollout'],
    audience: 'Enterprise teams navigating mergers, software transitions, or global policy standardizations.',
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-6 py-24 md:py-32">
      <SectionHeading
        id="services-title"
        eyebrow="How I Help"
        title="Strategy and execution, delivered by the same hands."
        description="Most financial analysts can't build apps, and most developers don't understand revenue recognition. Every engagement pairs financial rigor with the working tools that put it into practice."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 80}>
            <article className="group flex h-full flex-col rounded-lg border bg-card p-8 transition-colors hover:border-primary/40">
              <div className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-md bg-accent text-primary">
                  <service.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {service.offerings.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm">
                    <span className="size-1 rounded-full bg-primary" aria-hidden="true" />
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t pt-6 text-sm leading-relaxed text-muted-foreground">{service.audience}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
