import { useRef, useState } from 'react'
import { coursework } from '../../data/content.js'
import { Reveal, SubHeading } from '../ui/index.jsx'

const total = coursework.reduce((n, c) => n + c.units.length, 0)

// Tabbed list of BIT course units (WAI-ARIA tabs pattern, automatic activation).
export default function Coursework() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const current = coursework[active]

  const onKeyDown = (e) => {
    const last = coursework.length - 1
    let next = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = active === last ? 0 : active + 1
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = active === 0 ? last : active - 1
    if (e.key === 'Home') next = 0
    if (e.key === 'End') next = last
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div id="coursework" data-anchor className="mt-16">
      <Reveal className="flex flex-wrap items-baseline justify-between gap-3">
        <SubHeading>Degree coursework</SubHeading>
        <p className="text-sm text-charcoal-muted">{total} course units across five areas</p>
      </Reveal>

      <Reveal className="mt-5 rounded-xl border border-grey-300 bg-white">
        <div
          role="tablist"
          aria-label="Coursework areas"
          onKeyDown={onKeyDown}
          className="flex flex-wrap gap-x-1 border-b border-grey-300 px-3 sm:px-5"
        >
          {coursework.map((c, i) => {
            const selected = i === active
            return (
              <button
                key={c.id}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={selected}
                aria-controls={`panel-${c.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={`relative shrink-0 whitespace-nowrap px-3 py-4 text-[0.92rem] font-medium transition-colors ${
                  selected ? 'text-charcoal' : 'text-charcoal-muted hover:text-charcoal'
                }`}
              >
                {c.tab}
                <span
                  className={`absolute inset-x-3 -bottom-px h-[2px] rounded-full bg-blue transition-opacity ${
                    selected ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="p-6 sm:p-8"
        >
          <div key={current.id} className="fade-in">
            <h4 className="font-display text-2xl leading-tight">{current.title}</h4>
            <p className="mt-2 max-w-lg text-charcoal-muted">{current.blurb}</p>
            <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
              {current.units.map((u) => (
                <li key={u} className="flex items-start gap-3 border-t border-grey-300 py-3">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
