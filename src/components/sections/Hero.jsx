import { ArrowDown, ArrowRight, GraduationCap, MapPin, ShieldCheck } from 'lucide-react'
import { profile } from '../../data/content.js'
import { ButtonLink, Reveal } from '../ui/index.jsx'

// Portrait card with a peach blueprint backdrop and a few factual detail chips.
function Composition() {
  return (
    <div className="relative mx-auto w-full max-w-[25rem] sm:max-w-[26rem]">
      {/* Offset backdrop */}
      <div
        className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.9rem] bg-peach-200 sm:translate-x-6 sm:translate-y-6"
        aria-hidden="true"
      >
        <div className="grid-bg h-full w-full rounded-[1.9rem] opacity-70" />
      </div>

      <figure className="relative rounded-[1.9rem] border border-grey-200 bg-white p-2.5 shadow-lift">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-grey-100">
          <img
            src="/images/asherura-800.webp"
            srcSet="/images/asherura-480.webp 480w, /images/asherura-800.webp 800w"
            sizes="(min-width: 640px) 26rem, 90vw"
            width="800"
            height="1000"
            alt="Portrait of Asherura Marilynn, smiling, in a red dress"
            fetchpriority="high"
            decoding="async"
            className="h-full w-full object-cover object-top"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent"
            aria-hidden="true"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
            <span>
              <span className="block text-lg font-extrabold tracking-tight">{profile.name}</span>
              <span className="block text-sm text-white/80">{profile.role}</span>
            </span>
            <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-bold ring-1 ring-inset ring-white/25 backdrop-blur-sm">
              Class of 2026
            </span>
          </figcaption>
        </div>
      </figure>

      {/* Floating detail chips (facts from her CV) */}
      {/* Chips sit clear of her face: this one above the head, the next beside the arm. */}
      <div data-chip className="card absolute -left-6 -top-7 hidden items-center gap-3 px-4 py-3 sm:flex lg:-left-14">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-xs leading-tight">
          <span className="block font-bold">Bachelor of IT</span>
          <span className="text-grey-500">Second Class Upper · CGPA {profile.cgpa}</span>
        </span>
      </div>
      <div data-chip className="card absolute -right-4 top-[52%] hidden items-center gap-3 px-4 py-3 sm:flex lg:-right-10">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-peach-100 text-peach-700">
          <ShieldCheck className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="text-xs leading-tight">
          <span className="block font-bold">Network Security</span>
          <span className="text-grey-500">The Open University · 2025</span>
        </span>
      </div>
      <div className="absolute -bottom-3 left-8 hidden items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white shadow-lift sm:flex">
        <MapPin className="h-3.5 w-3.5 text-peach-300" aria-hidden="true" />
        {profile.location}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 sm:pb-28 sm:pt-36" aria-labelledby="hero-title">
      {/* Soft background wash, kept very light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] grid-bg [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden="true"
      />
      <div className="frame grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-grey-200 bg-white py-1.5 pl-1.5 pr-4 text-xs font-semibold text-grey-700 shadow-card">
              <span className="rounded-full bg-peach-100 px-2.5 py-0.5 font-bold text-peach-700">2026</span>
              Information Technology Graduate
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 text-sm font-bold uppercase tracking-label text-blue-700">{profile.name}</p>
            <h1
              id="hero-title"
              className="mt-3 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl xl:text-[4.4rem]"
            >
              Technology, <span className="accent text-blue-600">People</span>
              <br className="hidden sm:block" /> &amp; Possibilities.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey-500">
              A motivated, detail-oriented IT graduate with a Second Class Upper degree, certified in network security
              and website optimisation, and passionate about creating meaningful digital solutions.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">
              Contact me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="#about" variant="secondary">
              Explore my background
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-6 lg:pl-8 xl:pl-14">
          <Composition />
        </Reveal>
      </div>
    </section>
  )
}
