import { skills } from '../../data/content.js'
import { Icon, IconBadge, Reveal, Section } from '../ui/index.jsx'

export default function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title="Technical foundations, professional strengths."
      intro="The tools and fundamentals from my studies and certification, paired with the people skills I bring to every team."
      className="border-y border-grey-200 bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h3 className="text-xs font-bold uppercase tracking-label text-grey-500">Technical</h3>
          </Reveal>
          <ul className="mt-5 space-y-4">
            {skills.technical.map((s, i) => (
              <Reveal
                as="li"
                key={s.title}
                delay={i * 70}
                className="group flex items-start gap-5 rounded-2xl border border-grey-200 bg-grey-50/60 p-6 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-card"
              >
                <IconBadge name={s.icon} />
                <div>
                  <h4 className="text-base font-bold tracking-tight">{s.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-grey-500">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120} className="lg:col-span-5">
          <h3 className="text-xs font-bold uppercase tracking-label text-grey-500">Professional</h3>
          <div className="grid-bg-dark relative mt-5 overflow-hidden rounded-2xl bg-ink p-6 text-white sm:p-8">
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-blue-600/30 blur-3xl"
              aria-hidden="true"
            />
            <ul className="relative space-y-1">
              {skills.professional.map((s) => (
                <li
                  key={s.title}
                  className="flex items-center gap-4 border-b border-white/10 py-4 last:border-b-0"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.07] text-peach-300 ring-1 ring-inset ring-white/10">
                    <Icon name={s.icon} className="h-4 w-4" />
                  </span>
                  <span className="text-[1.05rem] font-bold tracking-tight">{s.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
