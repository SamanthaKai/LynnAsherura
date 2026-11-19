import { ArrowRight } from 'lucide-react'
import { heroFacts, profile } from '../../data/content.js'
import { ButtonLink, Reveal } from '../ui/index.jsx'

// Portrait set on two flat shapes: a blue block offset behind it and a peach disc at the corner.
function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[25rem] lg:ml-auto lg:mr-0">
      <div className="absolute -bottom-4 -right-4 left-12 top-14 rounded-xl bg-blue sm:-bottom-6 sm:-right-6" aria-hidden="true" />
      <div
        className="absolute -left-5 -top-5 h-24 w-24 rounded-full bg-peach sm:-left-8 sm:-top-8 sm:h-32 sm:w-32"
        aria-hidden="true"
      />
      <img
        src="/images/asherura-800.webp"
        srcSet="/images/asherura-480.webp 480w, /images/asherura-800.webp 800w"
        sizes="(min-width: 640px) 25rem, 88vw"
        width="800"
        height="1000"
        alt="Portrait of Asherura Marilynn, smiling, in a red dress"
        fetchpriority="high"
        decoding="async"
        className="relative aspect-[4/5] w-full rounded-xl bg-grey object-cover object-top"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden bg-white pt-28 sm:pt-36">
      <div className="frame relative grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-[0.95rem] font-semibold text-blue-700">
              {profile.role}
              <span className="mx-2.5 text-charcoal/25" aria-hidden="true">
                /
              </span>
              <span className="font-medium text-charcoal-muted">{profile.location}</span>
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1
              id="hero-title"
              className="mt-6 font-display text-[clamp(3.7rem,13.5vw,7.4rem)] font-medium leading-[0.9] tracking-[-0.035em]"
            >
              {profile.firstName}
              <br />
              <span className="text-blue">{profile.lastName}</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-charcoal-soft">{profile.intro}</p>
          </Reveal>
          <Reveal delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#experience">
              View my experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={140} className="lg:col-span-5">
          <Portrait />
        </Reveal>
      </div>

      <div className="frame relative mt-20 sm:mt-24">
        <Reveal as="dl" className="grid grid-cols-2 gap-x-6 gap-y-2 pb-14 sm:gap-x-10 lg:grid-cols-4">
          {heroFacts.map((f) => (
            <div key={f.term} className="border-t border-charcoal/15 py-5">
              <dt className="text-sm text-charcoal-muted">{f.term}</dt>
              <dd className="mt-1.5 font-display text-xl leading-snug sm:text-2xl">{f.detail}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
