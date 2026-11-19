import { certifications } from '../../data/content.js'
import { Reveal, Section } from '../ui/index.jsx'

export default function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      note="Courses completed alongside and after my degree, most recent first."
      tone="mist"
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c, i) => (
          <Reveal as="li" key={c.title} delay={(i % 2) * 70} className="card card-hover flex flex-col p-6 sm:p-7">
            <p className="text-sm font-semibold text-blue-700">{c.date}</p>
            <h3 className="mt-2 font-display text-[1.45rem] leading-[1.2]">{c.title}</h3>
            <p className="mt-1.5 text-sm text-charcoal-muted">{c.issuer}</p>
            <p className="mt-4 leading-relaxed text-charcoal-soft">{c.text}</p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-6" aria-label="Topics">
              {c.tags.map((t) => (
                <li key={t} className="rounded-md bg-peach-50 px-2.5 py-1 text-[0.8rem] font-medium text-peach-700">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
