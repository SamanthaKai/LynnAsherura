import { highlights, languages, profile, qualities } from '../../data/content.js'
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
      <Reveal as="dl" className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-grey-200 bg-grey-200 lg:grid-cols-4">
        {highlights.map((h) => (
          <div key={h.label} className="flex flex-col-reverse bg-white p-5 sm:p-6">
            <dt className="mt-1.5 text-sm leading-snug text-grey-500">{h.label}</dt>
            <dd className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{h.value}</dd>
          </div>
        ))}
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-grey-700">
            <p>
              I’m {profile.firstName}, an Information Technology graduate from {profile.university}, where I earned a
              Bachelor of Information Technology with {profile.honours} Honours (CGPA {profile.cgpa}).
            </p>
            <p>
              I’m certified in Network Security and Website Optimisation, and my industrial training at The WIT
              Technologies gave me hands-on experience in hardware and software troubleshooting, networking, CCTV
              installation and web development.
            </p>
            <p>
              Beyond the technical side, I bring business fundamentals from the NSSF Hi-Innovator course, leadership
              from school and church roles, and four years of volunteer coordination. I’m looking for opportunities
              where I can put all of it to work.
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
