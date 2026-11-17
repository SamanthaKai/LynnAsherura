import { iconMap } from './icons.js'
import { useReveal } from '../../hooks/useReveal.js'

// Renders a Lucide icon by name, so content data can stay plain strings.
export function Icon({ name, ...props }) {
  const Cmp = iconMap[name] ?? iconMap.Circle
  return <Cmp aria-hidden="true" strokeWidth={1.75} {...props} />
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

export function Section({ id, eyebrow, index, title, intro, className = '', children, tone = 'light' }) {
  const dark = tone === 'dark'
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${className}`}>
      <div className="frame">
        <Reveal className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className={`eyebrow ${dark ? 'text-peach-300' : ''}`}>
              {index && (
                <span className={`font-semibold ${dark ? 'text-white/50' : 'text-grey-500'}`}>{index}</span>
              )}
              <span className={`h-px w-6 ${dark ? 'bg-peach-300/60' : 'bg-blue-600/50'}`} aria-hidden="true" />
              {eyebrow}
            </p>
            <h2
              id={`${id}-title`}
              className={`mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.025em] sm:text-[2.6rem] ${
                dark ? 'text-white' : 'text-ink'
              }`}
            >
              {title}
            </h2>
          </div>
          {intro && (
            <p
              className={`text-base leading-relaxed lg:col-span-5 lg:pb-1 ${
                dark ? 'text-white/70' : 'text-grey-500'
              }`}
            >
              {intro}
            </p>
          )}
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function IconBadge({ name, tone = 'blue', size = 'md' }) {
  const tones = {
    blue: 'bg-blue-50 text-blue-600 ring-blue-100',
    peach: 'bg-peach-100 text-peach-700 ring-peach-200',
    ink: 'bg-ink text-white ring-ink',
  }
  const sizes = { sm: 'h-9 w-9 rounded-lg', md: 'h-11 w-11 rounded-xl' }
  return (
    <span className={`inline-flex shrink-0 items-center justify-center ring-1 ring-inset ${tones[tone]} ${sizes[size]}`}>
      <Icon name={name} className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
    </span>
  )
}

export function ButtonLink({ href, variant = 'primary', children, className = '', ...rest }) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-200'
  const variants = {
    primary: 'bg-blue-600 text-white shadow-lift hover:bg-blue-700 hover:-translate-y-0.5',
    secondary: 'border border-grey-300 bg-white text-ink hover:border-ink hover:-translate-y-0.5',
    light: 'bg-white text-ink hover:bg-peach-100 hover:-translate-y-0.5',
  }
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  )
}
