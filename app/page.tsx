import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { ImpactStats } from '@/components/impact-stats'
import { Portfolio } from '@/components/portfolio'
import { AiProcess } from '@/components/ai-process'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <ImpactStats />
        <Portfolio />
        <AiProcess />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-navy text-navy-foreground/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Keystone Advisory. Nashville, TN.</p>
          <p className="font-mono text-xs uppercase tracking-wider">Finance &times; Technology</p>
        </div>
      </footer>
    </>
  )
}
