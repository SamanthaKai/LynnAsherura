import { degree, schooling } from '../../data/content.js'
import { Reveal, Section, SubHeading } from '../ui/index.jsx'
import Coursework from './Coursework.jsx'

function DegreeCard() {
  return (
    <Reveal as="article" className="relative overflow-hidden rounded-xl bg-blue-700 p-7 text-white sm:p-10">
      {/* A single quarter-disc in the corner, echoing the hero */}
      <span
        className="absolute -right-14 -top-14 h-40 w-40 rounded-full border-[14px] border-peach/90 sm:-right-10 sm:-top-10"
        aria-hidden="true"
      />
      <p className="relative text-[0.95rem] font-medium text-white/80">{degree.period}</p>
      <h3 className="relative mt-3 max-w-md font-display text-[2rem] font-medium leading-[1.08] tracking-[-0.01em] sm:text-[2.6rem]">
        {degree.title}
      </h3>
      <p className="relative mt-3 text-white/85">{degree.school}</p>

      <dl className="relative mt-10 grid gap-6 border-t border-white/20 pt-7 sm:grid-cols-3 sm:gap-4">
        {degree.facts.map((f) => (
          <div key={f.term}>
            <dt className="text-sm text-white/75">{f.term}</dt>
            <dd className="mt-1 font-display text-xl leading-snug sm:text-[1.35rem]">{f.detail}</dd>
          </div>
        ))}
      </dl>

      <a
        href="#coursework"
        className="relative mt-9 inline-block text-[0.95rem] font-semibold underline decoration-white/40 underline-offset-[6px] transition-colors hover:decoration-peach"
      >
        Browse the coursework
      </a>
    </Reveal>
  )
}

export default function Education() {
  return (
    <Section
      id="education"
      title="Education"
      note="From primary school in Mbarara to a degree in Information Technology."
    >
      <DegreeCard />

      <div className="mt-14">
        <Reveal>
          <SubHeading>Before university</SubHeading>
        </Reveal>
        <ol className="mt-5 border-b border-grey-300">
          {schooling.map((s, i) => (
            <Reveal
              as="li"
              key={s.short}
              delay={i * 60}
              className="grid gap-1 border-t border-grey-300 py-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6"
            >
              <p className="text-sm font-medium tabular-nums text-charcoal-muted sm:pt-1">{s.period}</p>
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <div>
                  <h4 className="font-display text-xl leading-snug">
                    {s.title} <span className="text-charcoal-muted">({s.short})</span>
                  </h4>
                  <p className="mt-1 text-charcoal-muted">{s.school}</p>
                </div>
                <p className="shrink-0 text-sm font-medium text-blue-700 md:text-right">{s.result}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <Coursework />
    </Section>
  )
}
