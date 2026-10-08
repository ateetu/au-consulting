import Image from 'next/image'
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
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/brand/logo-full.png"
            alt="Ateet Upadhyaya Business Consulting — Finance, Technology, Strategy"
            width={1024}
            height={572}
            className="h-28 w-auto rounded-lg ring-1 ring-white/10"
          />
          <div className="flex flex-col gap-1 sm:items-end">
            <p>&copy; {new Date().getFullYear()} Ateet Upadhyaya Business Consulting. Nashville, TN.</p>
            <p className="font-mono text-xs uppercase tracking-wider">Finance &middot; Technology &middot; Strategy</p>
          </div>
        </div>
      </footer>
    </>
  )
}
