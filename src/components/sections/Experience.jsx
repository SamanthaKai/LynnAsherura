import { experience, leadership } from '../../data/content.js'
import { Reveal, Section, SubHeading } from '../ui/index.jsx'

function ExperienceCard({ x, delay }) {
  return (
    <Reveal as="article" delay={delay} className="card card-hover p-6 sm:p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="font-display text-[1.75rem] leading-tight">{x.role}</h3>
        <p className="shrink-0 text-sm font-medium tabular-nums text-charcoal-muted">{x.period}</p>
      </div>
      <p className="mt-1.5 font-semibold text-blue-700">{x.org}</p>
      <p className="mt-0.5 text-sm text-charcoal-muted">{x.note}</p>

      <ul className="mt-6 space-y-2.5 border-t border-grey-300 pt-6">
        {x.points.map((p) => (
          <li key={p} className="flex gap-3 leading-relaxed text-charcoal-soft">
            <span className="mt-[0.7rem] h-px w-3 shrink-0 bg-charcoal/40" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>

      {x.years && (
        <div className="mt-7">
          <p className="sr-only">Volunteered in {x.years.join(', ')}</p>
          <ol className="grid max-w-sm grid-cols-4 gap-2" aria-hidden="true">
            {x.years.map((y) => (
              <li key={y}>
                <span className="block h-1 rounded-full bg-peach" />
                <span className="mt-2 block text-xs font-medium tabular-nums text-charcoal-muted">{y}</span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </Reveal>
  )
}

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      note="Industrial training, four years of volunteer coordination, and leadership roles from school onward."
    >
      <div className="space-y-5">
        {experience.map((x, i) => (
          <ExperienceCard key={x.role} x={x} delay={i * 80} />
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <SubHeading>Leadership &amp; community</SubHeading>
        </Reveal>
        <ul className="mt-5 border-b border-grey-300">
          {leadership.map((l, i) => (
            <Reveal
              as="li"
              key={l.role}
              delay={i * 60}
              className="grid gap-1 border-t border-grey-300 py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <p className="text-sm font-medium tabular-nums text-charcoal-muted sm:pt-1">{l.period}</p>
              <div>
                <h4 className="font-display text-xl leading-snug">{l.role}</h4>
                <p className="mt-0.5 text-sm font-semibold text-blue-700">{l.org}</p>
                <p className="mt-2.5 max-w-2xl leading-relaxed text-charcoal-soft">{l.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
