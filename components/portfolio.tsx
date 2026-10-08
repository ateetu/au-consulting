'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { Clock, Play, X } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

type Chapter = { time: string; title: string; note: string }

type Project = {
  slug: string
  title: string
  category: string
  problem: string
  stack: string[]
  poster: string
  duration: string
  /** Drop an .mp4 into /public/videos and set its path here to enable playback. */
  videoSrc?: string
  chapters: Chapter[]
}

const projects: Project[] = [
  {
    slug: 'inventory',
    title: 'Inventory Process Tracker',
    category: 'Custom Web App',
    problem: 'Warehouse teams lost hours reconciling stock across spreadsheets, hiding shrink and slowing replenishment.',
    stack: ['SQL', 'Next.js', 'Power Automate'],
    poster: '/portfolio/inventory-dashboard.png',
    duration: '2:40',
    chapters: [
      { time: '0:00', title: 'The bottleneck', note: 'Manual counts in five disconnected sheets created a 3-day lag.' },
      { time: '0:35', title: 'Data model', note: 'A normalized SQL layer unifies SKUs, locations, and movements.' },
      { time: '1:20', title: 'Live cycle tracking', note: 'Status changes stream to the dashboard with cycle-time KPIs.' },
      { time: '2:05', title: 'Business outcome', note: 'Exceptions surface same-day, so buyers act before stock-outs.' },
    ],
  },
  {
    slug: 'trading',
    title: 'High-Volume Trading Analytics',
    category: 'Data Intelligence',
    problem: 'Analyzing equity technical indicators across thousands of daily bars was slow and error-prone in Excel.',
    stack: ['Python', 'SQL', 'Power BI'],
    poster: '/portfolio/trading-dashboard.png',
    duration: '3:15',
    chapters: [
      { time: '0:00', title: 'Volume problem', note: 'Millions of rows made spreadsheet-based indicators unusable.' },
      { time: '0:45', title: 'Ingestion pipeline', note: 'Scheduled scripts land and clean tick data into SQL.' },
      { time: '1:40', title: 'Indicator engine', note: 'RSI, MACD, and moving averages computed server-side.' },
      { time: '2:30', title: 'Decision view', note: 'A watchlist highlights signal crossovers at a glance.' },
    ],
  },
  {
    slug: 'scorecard',
    title: 'Executive Scorecard & QBR',
    category: 'Power BI Dashboard',
    problem: 'Leadership waited weeks for monthly scorecards assembled by hand from multiple ERPs.',
    stack: ['Power BI', 'SQL', 'DAX'],
    poster: '/portfolio/scorecard-dashboard.png',
    duration: '2:10',
    chapters: [
      { time: '0:00', title: 'Reporting lag', note: 'Scorecards were rebuilt manually every month-end.' },
      { time: '0:30', title: 'Semantic model', note: 'A single star schema feeds every KPI and variance measure.' },
      { time: '1:10', title: 'Variance drill-down', note: 'Budget vs. actual drills from region to account.' },
      { time: '1:45', title: 'QBR automation', note: 'Quarterly decks refresh automatically on schedule.' },
    ],
  },
  {
    slug: 'revenue',
    title: 'Contract Reconciliation App',
    category: 'Revenue Operations',
    problem: 'Usage-based contracts were reconciled by hand, leaking revenue and delaying recognition.',
    stack: ['SQL', 'LLM scrubbing', 'React'],
    poster: '/portfolio/revenue-app.png',
    duration: '2:55',
    chapters: [
      { time: '0:00', title: 'Revenue leaks', note: 'Unbilled usage and mismatched rates went unnoticed.' },
      { time: '0:40', title: 'AI data scrubbing', note: 'LLM prompts normalize messy contract and usage exports.' },
      { time: '1:35', title: 'Rules engine', note: 'Recognition schedules apply automatically per contract term.' },
      { time: '2:20', title: 'Audit trail', note: 'Every adjustment is logged for controllers and auditors.' },
    ],
  },
]

function WalkthroughDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.slug}-dialog-title`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/80 p-4 backdrop-blur-sm animate-in fade-in"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
    >
      <div
        className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-lg bg-card shadow-2xl animate-in zoom-in-95"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
            <h3 id={`${project.slug}-dialog-title`} className="font-semibold tracking-tight">
              {project.title} &mdash; Architecture Walkthrough
            </h3>
          </div>
          <button
            type="button"
            autoFocus
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Close walkthrough</span>
          </button>
        </div>
        <div className="grid lg:grid-cols-[1fr_320px]">
          <div className="flex items-center bg-navy">
            {project.videoSrc ? (
              <video
                className="aspect-video w-full"
                controls
                autoPlay
                playsInline
                poster={project.poster}
                src={project.videoSrc}
              >
                Your browser does not support embedded video.
              </video>
            ) : (
              <div className="relative aspect-video w-full">
                <Image src={project.poster} alt={`${project.title} interface`} fill className="object-cover opacity-60" />
                <div className="absolute inset-0 grid place-items-center p-6 text-center text-navy-foreground">
                  <p className="rounded-md bg-navy/80 px-4 py-2 font-mono text-xs uppercase tracking-wider">
                    Narrated walkthrough coming soon
                  </p>
                </div>
              </div>
            )}
          </div>
          <ol className="divide-y border-t lg:border-l lg:border-t-0">
            {project.chapters.map((c) => (
              <li key={c.time} className="px-5 py-4">
                <p className="flex items-center gap-2 font-mono text-xs text-primary">
                  <Clock className="size-3" aria-hidden="true" />
                  {c.time}
                </p>
                <p className="mt-1 text-sm font-medium">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const [active, setActive] = useState<Project | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = () => {
    setActive(null)
    triggerRef.current?.focus()
  }

  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          id="portfolio-title"
          eyebrow="Proof of Work"
          title="Watch the systems I've built, explained."
          description="Short narrated walkthroughs of real dashboards and apps — each one showing how the architecture solves a specific business problem."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-card">
                <button
                  type="button"
                  className="group relative block aspect-video w-full overflow-hidden bg-navy text-left"
                  onClick={(e) => {
                    triggerRef.current = e.currentTarget
                    setActive(project)
                  }}
                >
                  <Image
                    src={project.poster}
                    alt={`${project.title} dashboard preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute inset-0 bg-navy/30 transition-colors group-hover:bg-navy/45" aria-hidden="true" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid size-16 place-items-center rounded-full bg-white/95 text-primary shadow-lg transition-transform group-hover:scale-110">
                      <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded bg-navy/85 px-2 py-1 font-mono text-xs text-navy-foreground">
                    {project.duration}
                  </span>
                  <span className="sr-only">Play {project.title} walkthrough</span>
                </button>
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-primary">{project.category}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Problem: </span>
                    {project.problem}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Tech stack">
                    {project.stack.map((s) => (
                      <li key={s} className="rounded border bg-secondary px-2 py-1 font-mono text-xs">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {active && <WalkthroughDialog project={active} onClose={close} />}
    </section>
  )
}
