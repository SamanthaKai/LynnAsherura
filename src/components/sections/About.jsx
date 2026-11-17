import { languages, profile, qualities } from '../../data/content.js'
import { IconBadge, Reveal, Section } from '../ui/index.jsx'

export default function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About me"
      title={
        <>
          Grounded in IT, <span className="accent text-blue-600">curious</span> about everything around it.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-grey-700">
            <p>
              I’m {profile.firstName}, an Information Technology graduate from {profile.university}. I’m motivated, I
              learn quickly, and I enjoy the point where technology meets the people who use it.
            </p>
            <p>
              My degree gave me a broad foundation across software, data, networks, security and information systems.
              Alongside it, I’ve built up business knowledge through the NSSF Business Foundational Course and
              leadership experience through the Watoto Leadership Course.
            </p>
            <p>
              I bring strong communication, a steady approach to problems and a genuine willingness to learn, and I’m
              looking for opportunities where I can put all three to work.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-peach-200 bg-peach-50 p-6">
            <p className="text-xs font-bold uppercase tracking-label text-peach-700">Languages</p>
            <ul className="mt-4 space-y-3">
              {languages.map((l) => (
                <li key={l.name} className="flex items-center justify-between gap-4">
                  <span className="font-bold">{l.name}</span>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-grey-700 ring-1 ring-peach-200">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {qualities.map((q, i) => (
            <Reveal
              as="li"
              key={q.title}
              delay={i * 60}
              className="card group p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lift"
            >
              <IconBadge name={q.icon} tone={i % 3 === 1 ? 'peach' : 'blue'} />
              <h3 className="mt-5 text-base font-bold tracking-tight">{q.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-grey-500">{q.text}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}
