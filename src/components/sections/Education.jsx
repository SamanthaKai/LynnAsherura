import { GraduationCap } from 'lucide-react'
import { education } from '../../data/content.js'
import { Reveal, Section } from '../ui/index.jsx'

export default function Education() {
  return (
    <Section
      id="education"
      index="02"
      eyebrow="Education"
      title="A steady path to Information Technology."
      intro="From primary school in Mbarara to a degree in Information Technology, every stage built on the last."
      className="border-y border-grey-200 bg-white"
    >
      <ol className="relative">
        {/* Timeline spine */}
        <span
          className="absolute bottom-6 left-[1.1rem] top-6 w-px bg-gradient-to-b from-blue-600 via-grey-300 to-grey-200 sm:left-[11.6rem]"
          aria-hidden="true"
        />
        {education.map((e, i) => (
          <Reveal as="li" key={e.title} delay={i * 80} className="relative grid gap-2 pb-8 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-14">
            <div className="hidden pt-6 text-right sm:block">
              <p className="text-sm font-extrabold tracking-tight">{e.period}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-label text-grey-500">{e.level}</p>
            </div>

            {/* Marker */}
            <span
              className={`absolute left-[0.45rem] top-6 flex h-[1.35rem] w-[1.35rem] items-center justify-center rounded-full ring-4 ring-white sm:left-[10.95rem] ${
                e.highlight ? 'bg-blue-600' : 'border border-grey-300 bg-white'
              }`}
              aria-hidden="true"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${e.highlight ? 'bg-peach-300' : 'bg-grey-400'}`} />
            </span>

            <article
              className={`ml-12 rounded-2xl border p-6 transition-shadow sm:ml-0 ${
                e.highlight
                  ? 'border-blue-100 bg-gradient-to-br from-blue-50 to-white shadow-card'
                  : 'border-grey-200 bg-grey-50/60'
              }`}
            >
              <p className="mb-2 text-xs font-bold uppercase tracking-label text-grey-500 sm:hidden">
                {e.period} · {e.level}
              </p>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold leading-snug tracking-tight">{e.title}</h3>
                  <p className="mt-1 text-sm text-grey-500">{e.school}</p>
                </div>
                {e.highlight && (
                  <span className="hidden shrink-0 items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-xs font-bold text-white sm:inline-flex">
                    <GraduationCap className="h-3.5 w-3.5 text-peach-300" aria-hidden="true" />
                    Graduate
                  </span>
                )}
              </div>
              {e.details && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {e.details.map((d) => (
                    <li
                      key={d}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        e.highlight ? 'bg-white text-blue-700 ring-1 ring-blue-100' : 'bg-white text-grey-700 ring-1 ring-grey-200'
                      }`}
                    >
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {e.highlight && (
                <a
                  href="#coursework"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 transition-colors hover:decoration-blue-600"
                >
                  View coursework
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
