import { useRef, useState } from 'react'
import { coursework } from '../../data/content.js'
import { Icon, Reveal, Section } from '../ui/index.jsx'

const total = coursework.reduce((n, c) => n + c.units.length, 0)

export default function Coursework() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  const current = coursework[active]

  // Arrow keys move between tabs (WAI-ARIA tabs pattern, automatic activation).
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
    <Section
      id="coursework"
      eyebrow="Academic coursework"
      title={
        <>
          A degree with <span className="accent text-blue-600">range</span>.
        </>
      }
      intro={`${total} course units across five areas of the Bachelor of Information Technology programme at Mbarara University of Science and Technology.`}
    >
      <Reveal className="grid gap-6 lg:grid-cols-12">
        <div
          role="tablist"
          aria-label="Coursework categories"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
          className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 lg:col-span-4 lg:flex-col lg:overflow-visible"
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
                className={`group flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 lg:w-full lg:py-4 ${
                  selected
                    ? 'border-ink bg-ink text-white shadow-lift'
                    : 'border-grey-200 bg-white text-ink hover:border-grey-300 hover:bg-grey-100'
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    selected ? 'bg-white/10 text-peach-300' : 'bg-blue-50 text-blue-600'
                  }`}
                >
                  <Icon name={c.icon} className="h-4 w-4" />
                </span>
                <span className="whitespace-nowrap text-sm font-bold lg:whitespace-normal">{c.title}</span>
                <span
                  className={`ml-auto hidden rounded-full px-2 py-0.5 text-xs font-bold lg:inline ${
                    selected ? 'bg-white/10 text-white' : 'bg-grey-100 text-grey-500'
                  }`}
                >
                  {c.units.length}
                </span>
              </button>
            )
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          tabIndex={0}
          className="card relative overflow-hidden p-6 sm:p-9 lg:col-span-8"
        >
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-peach-100/70 blur-2xl"
            aria-hidden="true"
          />
          <div key={current.id} className="menu-in relative">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-extrabold tracking-tight">{current.title}</h3>
              <span className="rounded-full border border-grey-200 px-3 py-1 text-xs font-bold text-grey-500">
                {current.units.length} units
              </span>
            </div>
            <p className="mt-2 max-w-lg text-grey-500">{current.blurb}</p>
            <ul className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {current.units.map((u, i) => (
                <li key={u} className="flex items-baseline gap-4 border-t border-grey-200 py-3.5">
                  <span className="w-5 shrink-0 text-xs font-bold tabular-nums text-blue-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-grey-700">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
