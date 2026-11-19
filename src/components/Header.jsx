import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const ids = nav.map((n) => n.id)
const links = nav.filter((n) => n.id !== 'contact')

export default function Header() {
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [bar, setBar] = useState({ x: 0, w: 0, on: false })
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const linkRefs = useRef({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sliding underline under the active link. Re-measured on resize and once web fonts load.
  useLayoutEffect(() => {
    const place = () => {
      const el = linkRefs.current[active]
      setBar(el ? { x: el.offsetLeft, w: el.offsetWidth, on: true } : (b) => ({ ...b, on: false }))
    }
    place()
    document.fonts?.ready.then(place)
    window.addEventListener('resize', place)
    return () => window.removeEventListener('resize', place)
  }, [active])

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'border-b border-grey-300/80 bg-white/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="frame flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a href="#top" className="group flex items-baseline gap-1.5" aria-label={`${profile.name}, back to top`}>
          <span className="font-display text-[1.35rem] font-medium tracking-[-0.01em]">{profile.firstName}</span>
          <span className="font-display text-[1.35rem] text-blue-600">{profile.lastName}</span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="relative flex items-center gap-7">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  ref={(el) => (linkRefs.current[item.id] = el)}
                  href={`#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className={`block py-2 text-[0.92rem] font-medium transition-colors ${
                    active === item.id ? 'text-charcoal' : 'text-charcoal-muted hover:text-charcoal'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <span
              className="pointer-events-none absolute bottom-0 left-0 h-[2px] rounded-full bg-blue transition-[transform,width,opacity] duration-300 ease-out"
              style={{ transform: `translateX(${bar.x}px)`, width: bar.w, opacity: bar.on ? 1 : 0 }}
              aria-hidden="true"
            />
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            aria-current={active === 'contact' ? 'true' : undefined}
            className={`hidden rounded-lg px-4 py-2 text-[0.92rem] font-semibold transition-colors md:inline-block ${
              active === 'contact'
                ? 'bg-blue-700 text-white'
                : 'border border-charcoal/20 text-charcoal hover:border-blue-700 hover:text-blue-700'
            }`}
          >
            Get in touch
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-grey-300 bg-white text-charcoal md:hidden"
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
          className="menu-in h-[calc(100dvh-4rem)] overflow-y-auto border-t border-grey-300 bg-white md:hidden"
        >
          <nav aria-label="Mobile" className="frame py-6">
            <ul>
              {nav.map((item) => (
                <li key={item.id} className="border-b border-grey-300">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => goTo(e, item.id)}
                    aria-current={active === item.id ? 'true' : undefined}
                    className={`flex items-center justify-between py-4 font-display text-[1.7rem] ${
                      active === item.id ? 'text-blue-700' : 'text-charcoal'
                    }`}
                  >
                    {item.label}
                    {active === item.id && <span className="h-2 w-2 rounded-full bg-peach" aria-hidden="true" />}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-charcoal-muted">
              {profile.role} · {profile.location}
            </p>
          </nav>
        </div>
      )}
    </header>
  )
}
