import { training } from '../../data/content.js'
import { Icon, Reveal, Section } from '../ui/index.jsx'

export default function Training() {
  return (
    <Section
      id="training"
      index="05"
      eyebrow="Training & certifications"
      title="Building beyond the degree."
      intro="Courses in leadership, business and security that round out a technical education."
      className="border-y border-grey-200 bg-white"
    >
      <ul className="grid gap-5 md:grid-cols-3">
        {training.map((t, i) => (
          <Reveal
            as="li"
            key={t.title}
            delay={i * 90}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-grey-200 bg-grey-50/60 transition-all duration-300 hover:-translate-y-1 hover:border-grey-300 hover:bg-white hover:shadow-lift"
          >
            {/* Header band */}
            <div className="flex items-center justify-between border-b border-grey-200 px-6 py-4">
              <span className="text-3xl font-extrabold tracking-tight text-ink">{t.year}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600 ring-1 ring-grey-200 transition-colors group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600">
                <Icon name={t.icon} className="h-[1.1rem] w-[1.1rem]" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold leading-snug tracking-tight">{t.title}</h3>
              {t.issuer && <p className="mt-1 text-sm font-semibold text-grey-500">{t.issuer}</p>}
              <p className="mt-4 text-sm leading-relaxed text-grey-700">{t.text}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {t.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-peach-100 px-3 py-1 text-xs font-semibold text-peach-700"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <span
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
