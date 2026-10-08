'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#impact', label: 'Impact' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 text-navy-foreground backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <span
            aria-hidden="true"
            className="grid size-7 place-items-center rounded-sm bg-signal font-mono text-xs font-bold text-navy"
          >
            K
          </span>
          Keystone Advisory
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy-foreground/70 transition-colors hover:text-navy-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-signal px-4 py-2 text-sm font-medium text-navy transition-opacity hover:opacity-90"
          >
            Book a Strategy Call
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-white/10 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {[...links, { href: '#contact', label: 'Book a Strategy Call' }].map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
