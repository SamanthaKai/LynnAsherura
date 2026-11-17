import { useState } from 'react'
import { CircleAlert, CircleCheck, Inbox, LoaderCircle, MapPin, Send } from 'lucide-react'
import { contactForm, profile } from '../../data/content.js'
import { Reveal, Section } from '../ui/index.jsx'

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
      <label htmlFor={id} className="block text-sm font-semibold text-white/85">
        {label}
      </label>
      <Tag
        id={id}
        name={id}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${className} mt-2 block w-full rounded-xl border bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white placeholder:text-white/35 transition-colors focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-offset-0 ${
          error
            ? 'border-peach-400 focus:ring-peach-400/60'
            : 'border-white/15 hover:border-white/25 focus:border-blue-300 focus:ring-blue-500/50'
        }`}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-peach-300">
          {error}
        </p>
      )}
    </div>
  )
}

function InfoCard({ icon: IconCmp, label, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-3 text-white/60">
        <IconCmp className="h-4 w-4 text-peach-300" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-label">{label}</span>
      </div>
      <div className="mt-3 leading-relaxed text-white/80">{children}</div>
    </div>
  )
}

export default function Contact() {
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

  return (
    <Section
      id="contact"
      index="06"
      tone="dark"
      eyebrow="Contact"
      title={
        <>
          Let’s <span className="accent text-peach-300">connect</span>.
        </>
      }
      intro="Whether it’s an opportunity, a question or just a hello, I’d be glad to hear from you."
      className="grid-bg-dark relative overflow-hidden bg-ink"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-peach-300/50 to-transparent"
        aria-hidden="true"
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <Reveal className="space-y-4 lg:col-span-5">
          <InfoCard icon={Inbox} label="Straight to my inbox">
            Messages sent through this form come directly to me, and I’ll reply to the email address you provide.
          </InfoCard>
          <InfoCard icon={MapPin} label="Location">
            Based in <span className="font-semibold text-white">{profile.location}</span>.
          </InfoCard>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-2xl border border-white/10 bg-ink-soft p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] sm:p-8">
            {status === 'sent' ? (
              <div className="flex min-h-[22rem] flex-col items-start justify-center" role="status" aria-live="polite">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-peach-300 text-ink">
                  <CircleCheck className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-white">Message sent.</h3>
                <p className="mt-3 max-w-md leading-relaxed text-white/70">
                  Thank you, {values.name.trim().split(' ')[0]}. Your message is on its way, and I’ll get back to you at{' '}
                  <span className="font-semibold text-white">{values.email.trim()}</span>.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-8 rounded-full border border-white/20 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-white/50"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={onSubmit} className="space-y-5" aria-label="Contact form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Your name"
                    autoComplete="name"
                    placeholder="Jane Doe"
                    value={values.name}
                    onChange={onChange}
                    error={errors.name}
                  />
                  <Field
                    id="email"
                    label="Your email address"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
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
                  placeholder="How can I help?"
                  value={values.message}
                  onChange={onChange}
                  error={errors.message}
                  className="resize-y"
                />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                {status === 'error' && (
                  <p
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-peach-400/40 bg-peach-400/10 px-4 py-3 text-sm text-peach-200"
                  >
                    <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {failure}
                  </p>
                )}

                <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-white/50 sm:max-w-[16rem]">
                    Your details are only used to reply to your message.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500 disabled:translate-y-0 disabled:cursor-wait disabled:opacity-70"
                  >
                    {status === 'sending' ? (
                      <>
                        Sending
                        <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
                      </>
                    ) : (
                      <>
                        Send message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
