import { about, languages, qualities } from '../../data/content.js'
import { Reveal, Section, SubHeading } from '../ui/index.jsx'

export default function About() {
  return (
    <Section id="about" title="About" note="Background, interests and what I bring to a team." tone="mist">
      <Reveal>
        <p className="font-display text-[1.9rem] leading-[1.18] tracking-[-0.01em] sm:text-[2.5rem]">
          {about.lede.before}
          <span className="relative whitespace-nowrap">
            <span className="absolute inset-x-0 bottom-[0.12em] h-[0.32em] bg-peach/70" aria-hidden="true" />
            <span className="relative">{about.lede.mark}</span>
          </span>
          {about.lede.after}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_15rem] md:gap-10">
        <Reveal className="space-y-5 text-[1.05rem] leading-[1.75] text-charcoal-soft">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </Reveal>

        <Reveal as="aside" delay={100} className="space-y-10 md:border-l md:border-grey-300 md:pl-8">
          <div>
            <SubHeading>Interests</SubHeading>
            <ul className="mt-4 space-y-2.5">
              {about.interests.map((i) => (
                <li key={i} className="leading-snug">
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubHeading>Languages</SubHeading>
            <dl className="mt-4 space-y-2.5">
              {languages.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-3">
                  <dt>{l.name}</dt>
                  <dd className="text-sm text-charcoal-muted">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-20">
        <Reveal>
          <SubHeading>What I bring</SubHeading>
        </Reveal>
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {qualities.map((q, i) => (
            <Reveal as="li" key={q.title} delay={(i % 2) * 60} className="border-t border-grey-300 py-5">
              <h4 className="font-semibold">{q.title}</h4>
              <p className="mt-1.5 leading-relaxed text-charcoal-muted">{q.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
