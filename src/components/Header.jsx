import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const ids = nav.map((n) => n.id)

export function Monogram({ className = '' }) {
  return (
    <span className={`relative inline-flex h-9 w-9 items-center justify-center rounded-[10px] bg-ink ${className}`}>
      <span className="text-[0.8rem] font-extrabold tracking-tight text-white">AM</span>
      <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-peach-300 ring-2 ring-grey-50" />
    </span>
  )
}

export default function Header() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Mobile menu: Escape closes, desktop resize closes, body scroll locks while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const mq = window.matchMedia('(min-width: 768px)')
    const onMq = (e) => e.matches && setOpen(false)
    document.addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    document.body.style.overflow = 'hidden'
    panelRef.current?.querySelector('a')?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the menu first (unlocking scroll), then scroll once the layout has settled.
  const goTo = (e, id) => {
    e.preventDefault()
    setOpen(false)
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `#${id}`)
      }),
    )
  }

  const linkClass = (id) =>
    `relative isolate rounded-full px-3.5 py-2 text-sm font-semibold transition-colors ${
      active === id ? 'text-ink' : 'text-grey-500 hover:text-ink'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'border-b border-grey-200/80 bg-grey-50/85 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="frame flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" className="flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
          <Monogram />
          <span className="hidden text-[0.95rem] font-bold tracking-tight sm:inline">{profile.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-grey-200 bg-white/70 p-1 shadow-card">
            {nav.slice(0, -1).map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={linkClass(item.id)} aria-current={active === item.id ? 'true' : undefined}>
                  {active === item.id && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-grey-100" aria-hidden="true" />
                  )}
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className={`hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition-all md:inline-flex ${
              active === 'contact' ? 'bg-blue-600 text-white' : 'bg-ink text-white hover:bg-blue-600'
            }`}
          >
            Contact me <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-grey-200 bg-white text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="menu-in h-[calc(100dvh-4rem)] overflow-y-auto border-t border-grey-200 bg-grey-50 md:hidden"
        >
          <nav aria-label="Mobile" className="frame py-6">
            <ul className="divide-y divide-grey-200 border-y border-grey-200">
              {nav.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => goTo(e, item.id)}
                    className="flex items-center justify-between py-4 text-lg font-bold tracking-tight"
                    aria-current={active === item.id ? 'true' : undefined}
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="w-6 text-xs font-semibold text-grey-500">0{i + 1}</span>
                      <span className={active === item.id ? 'text-blue-600' : 'text-ink'}>{item.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-grey-400" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(e) => goTo(e, 'contact')}
              className="mt-8 flex items-center justify-between rounded-2xl bg-ink p-5 text-white"
            >
              <span>
                <span className="block text-xs font-bold uppercase tracking-label text-peach-300">Get in touch</span>
                <span className="mt-1.5 block font-semibold">Send {profile.firstName} a message</span>
              </span>
              <ArrowUpRight className="h-5 w-5 text-peach-300" aria-hidden="true" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
