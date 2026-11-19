import { useReveal } from '../../hooks/useReveal.js'

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useReveal()
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

const TONES = {
  white: 'bg-white',
  mist: 'bg-grey-50',
  grey: 'bg-grey',
}

// Editorial section: a sticky title column on the left, content on the right.
export function Section({ id, title, note, tone = 'white', className = '', children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-20 sm:py-28 ${TONES[tone]} ${className}`}>
      <div className="frame grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <span className="block h-[3px] w-10 rounded-full bg-peach" aria-hidden="true" />
            <h2
              id={`${id}-title`}
              className="mt-6 font-display text-[2.6rem] font-medium leading-[1.02] tracking-[-0.02em] sm:text-5xl"
            >
              {title}
            </h2>
            {note && <p className="mt-5 max-w-xs leading-relaxed text-charcoal-muted">{note}</p>}
          </Reveal>
        </div>
        <div className="min-w-0 lg:col-span-8">{children}</div>
      </div>
    </section>
  )
}

export function SubHeading({ children, className = '' }) {
  return <h3 className={`label ${className}`}>{children}</h3>
}

const BUTTONS = {
  primary: 'bg-blue-700 text-white hover:bg-blue-800',
  secondary: 'border border-charcoal/20 bg-white text-charcoal hover:border-charcoal',
}

export function ButtonLink({ href, variant = 'primary', children, className = '', ...rest }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200 ${BUTTONS[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
