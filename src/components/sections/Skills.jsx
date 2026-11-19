import { skillGroups } from '../../data/content.js'
import { Reveal, Section } from '../ui/index.jsx'

const KINDS = {
  technical: { label: 'Technical', rule: 'bg-blue' },
  professional: { label: 'Professional', rule: 'bg-peach' },
}

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      note="From my degree, certifications and industrial training, alongside the people skills I bring to a team."
      tone="grey"
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => {
          const kind = KINDS[g.kind]
          return (
            <Reveal
              as="li"
              key={g.title}
              delay={(i % 2) * 70}
              className={`card card-hover relative overflow-hidden p-6 sm:p-7 ${g.wide ? 'sm:col-span-2' : ''}`}
            >
              <span className={`absolute inset-x-0 top-0 h-1 ${kind.rule}`} aria-hidden="true" />
              <p className="text-sm text-charcoal-muted">{kind.label}</p>
              <h3 className="mt-1 font-display text-2xl leading-tight">{g.title}</h3>
              <ul className={`mt-5 ${g.wide ? 'grid gap-x-8 sm:grid-cols-2' : ''}`}>
                {g.items.map((s) => (
                  <li key={s} className="border-t border-grey-300 py-2.5 text-[0.97rem]">
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          )
        })}
      </ul>
    </Section>
  )
}
