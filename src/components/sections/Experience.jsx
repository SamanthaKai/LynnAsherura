import { Check } from 'lucide-react'
import { experience, leadership } from '../../data/content.js'
import { IconBadge, Reveal, Section } from '../ui/index.jsx'

export default function Experience() {
  return (
    <Section
      id="experience"
      index="04"
      eyebrow="Experience"
      title={
        <>
          Learning on the job, <span className="accent text-blue-600">showing up</span> year after year.
        </>
      }
      intro="Industrial training in a professional IT environment, four consecutive years of volunteer coordination, and leadership roles from school onward."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {experience.map((x, i) => (
          <Reveal
            as="article"
            key={x.role}
            delay={i * 100}
            className="card flex flex-col p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <IconBadge name={x.icon} tone={i === 0 ? 'blue' : 'peach'} />
              <span className="rounded-full bg-grey-100 px-3 py-1 text-xs font-bold text-grey-700">{x.period}</span>
            </div>
            <p className="mt-6 text-xs font-bold uppercase tracking-label text-blue-700">{x.tag}</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{x.role}</h3>
            <p className="mt-1 font-semibold text-grey-500">{x.org}</p>

            <ul className="mt-6 space-y-3 border-t border-grey-200 pt-6">
              {x.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-relaxed text-grey-700">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            {x.years && (
              <div className="mt-auto pt-8">
                <p className="sr-only">Volunteered in {x.years.join(', ')}</p>
                <ol className="grid grid-cols-4 gap-2" aria-hidden="true">
                  {x.years.map((y) => (
                    <li key={y}>
                      <span className="block h-1.5 rounded-full bg-peach-300" />
                      <span className="mt-2 block text-xs font-bold tabular-nums text-grey-500">{y}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="text-xs font-bold uppercase tracking-label text-grey-500">Leadership &amp; extra-curricular</h3>
      </Reveal>
      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {leadership.map((l, i) => (
          <Reveal
            as="li"
            key={l.role}
            delay={i * 80}
            className="rounded-2xl border border-grey-200 bg-white p-6 transition-shadow hover:shadow-card"
          >
            <div className="flex items-start justify-between gap-4">
              <IconBadge name={l.icon} tone={i % 2 ? 'peach' : 'blue'} size="sm" />
              <span className="text-xs font-bold tabular-nums text-grey-500">{l.period}</span>
            </div>
            <h4 className="mt-5 font-bold leading-snug tracking-tight">{l.role}</h4>
            <p className="mt-1 text-sm font-semibold text-grey-500">{l.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-grey-700">{l.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
