import { useState } from 'react'
import { ArrowUpRight, CircleAlert, LoaderCircle } from 'lucide-react'
import { contactForm, profile } from '../../data/content.js'
import { Reveal } from '../ui/index.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const EMPTY = { name: '', email: '', message: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!v.email.trim()) e.email = 'Please enter your email address.'
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'That email address doesn’t look right.'
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.'
  return e
}

function Field({ id, label, error, as = 'input', className = '', ...props }) {
  const Tag = as
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-charcoal">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${className} mt-2 block w-full rounded-lg border bg-white px-4 py-3 text-charcoal placeholder:text-charcoal-muted/70 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          error
            ? 'border-peach-700 focus:ring-peach-700/30'
            : 'border-grey-300 hover:border-grey-400 focus:border-blue-600 focus:ring-blue-600/20'
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-peach-700">
          {error}
        </p>
      )}
    </div>
  )
}

function ContactForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState(false)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [failure, setFailure] = useState('')

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value }
    setValues(next)
    if (touched) setErrors(validate(next))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setTouched(true)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) {
      document.getElementById(Object.keys(errs)[0])?.focus()
      return
    }
    // Honeypot: real visitors never fill this hidden field.
    if (e.currentTarget.elements.botcheck?.checked) return

    if (!contactForm.accessKey) {
      setFailure('The contact form isn’t connected yet. Please try again later.')
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: contactForm.accessKey,
          subject: `Portfolio message from ${values.name.trim()}`,
          from_name: `${profile.name} · Portfolio`,
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: values.message.trim(),
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.success) throw new Error(data.message || `Request failed (${res.status})`)
      setStatus('sent')
    } catch {
      setFailure('Your message couldn’t be sent just now. Please check your connection and try again.')
      setStatus('error')
    }
  }

  const reset = () => {
    setValues(EMPTY)
    setErrors({})
    setTouched(false)
    setStatus('idle')
  }

  if (status === 'sent') {
    return (
      <div className="flex min-h-[24rem] flex-col justify-center" role="status" aria-live="polite">
        <span className="block h-[3px] w-10 rounded-full bg-peach" aria-hidden="true" />
        <h3 className="mt-6 font-display text-3xl">Thank you, {values.name.trim().split(' ')[0]}.</h3>
        <p className="mt-3 max-w-md leading-relaxed text-charcoal-soft">
          Your message is on its way, and I’ll reply to{' '}
          <span className="font-semibold text-charcoal">{values.email.trim()}</span>.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 self-start rounded-lg border border-charcoal/20 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-charcoal"
        >
          Write another message
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Your name"
          autoComplete="name"
          value={values.name}
          onChange={onChange}
          error={errors.name}
        />
        <Field
          id="email"
          label="Your email address"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={onChange}
          error={errors.email}
        />
      </div>
      <Field
        id="message"
        as="textarea"
        rows={6}
        label="Message"
        value={values.message}
        onChange={onChange}
        error={errors.message}
        className="resize-y"
      />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {status === 'error' && (
        <p
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-peach bg-peach-50 px-4 py-3 text-sm text-peach-700"
        >
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {failure}
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-charcoal-muted sm:max-w-[17rem]">
          Your details are only used to reply to your message.
        </p>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-6 py-3.5 text-[0.95rem] font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-wait disabled:opacity-70"
        >
          {status === 'sending' ? (
            <>
              Sending
              <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            </>
          ) : (
            'Send message'
          )}
        </button>
      </div>
    </form>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden bg-charcoal py-20 text-white sm:py-28"
    >
      {/* Peach ring, cropped by the section edge, echoing the hero and degree card */}
      <span
        className="absolute -right-32 -top-52 h-72 w-72 rounded-full border-[28px] border-peach/90 lg:-left-24 lg:right-auto lg:-top-44"
        aria-hidden="true"
      />

      <div className="frame relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <span className="block h-[3px] w-10 rounded-full bg-peach" aria-hidden="true" />
          <h2
            id="contact-title"
            className="mt-6 font-display text-[3.2rem] font-medium leading-[0.98] tracking-[-0.03em] sm:text-7xl"
          >
            Write to me.
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-white/80">
            Whether it’s an opportunity, a question or just a hello, I’d be glad to hear from you.
          </p>

          <dl className="mt-12 max-w-sm divide-y divide-white/15 border-y border-white/15">
            <div className="flex items-baseline justify-between gap-6 py-4">
              <dt className="text-sm text-white/65">Based in</dt>
              <dd className="text-right font-medium">{profile.location}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-6 py-4">
              <dt className="text-sm text-white/65">Replies</dt>
              <dd className="text-right font-medium">To the email you provide</dd>
            </div>
            {profile.links.length > 0 && (
              <div className="flex items-baseline justify-between gap-6 py-4">
                <dt className="text-sm text-white/65">Elsewhere</dt>
                <dd>
                  <ul className="flex flex-wrap justify-end gap-x-5 gap-y-2">
                    {profile.links.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-medium underline decoration-white/30 underline-offset-4 transition-colors hover:text-peach hover:decoration-peach"
                        >
                          {l.label}
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <div className="rounded-xl bg-white p-6 text-charcoal shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)] sm:p-9">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
