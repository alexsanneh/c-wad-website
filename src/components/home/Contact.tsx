import { useState } from 'react'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'
import {
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  LocationIcon,
  PhoneIcon,
  XIcon,
} from '../icons'
import { offices, site, socials } from '../../data/site'
import { serviceOptions } from '../../data/services'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const emptyFields = {
  name: '',
  email: '',
  company: '',
  service: '',
  message: '',
  'bot-field': '',
}

/** Netlify Forms needs url-encoded bodies rather than JSON. */
function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23D4AF37' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E\")"

const fieldClass =
  'w-full border border-brand-secondary/15 bg-brand-bg/80 px-4 py-3.5 text-base text-brand-secondary placeholder:text-brand-secondary/30 outline-none transition-all focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10'

const labelClass = 'text-sm font-bold text-brand-secondary ml-1'

/** Contact panel: office directory on the left, consultation request on the right. */
export function Contact() {
  const [fields, setFields] = useState(emptyFields)
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...fields }),
      })

      if (response.ok) {
        setStatus('success')
        setFields(emptyFields)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden border-t border-brand-secondary/10 bg-brand-bg-alt py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute -left-48 top-12 h-[32rem] w-[32rem] rounded-full bg-brand-cta/[0.09] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-44 right-0 h-[34rem] w-[34rem] rounded-full bg-brand-sage/[0.07] blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-secondary/15 bg-brand-extra shadow-[0_32px_100px_rgba(0,0,0,0.22)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 top-4 text-[18rem] font-semibold leading-none tracking-[-0.14em] text-brand-secondary/[0.025]"
          >
            C
          </div>

          <div className="relative grid lg:grid-cols-[.85fr_1.15fr]">
            <div className="flex flex-col gap-8 border-b border-brand-secondary/15 bg-[linear-gradient(145deg,rgba(43,36,24,0.92),rgba(14,13,11,0.96)_68%)] p-7 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
                  Start a conversation
                </p>
                <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-brand-secondary sm:text-5xl">
                  Tell us what needs attention.
                </h2>
                <p className="text-base leading-relaxed text-brand-secondary/70">
                  Share a little context and our lead consultant will respond within one business
                  day. Prefer a direct line? We&rsquo;re ready there too.
                </p>
              </div>

              <div className="flex items-center gap-4 border-y border-brand-secondary/15 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-secondary/55">
                <span>Freetown</span>
                <span className="h-1 w-1 rounded-full bg-brand-primary" />
                <span>Banjul</span>
                <span className="h-1 w-1 rounded-full bg-brand-primary" />
                <span>London</span>
              </div>

              <div className="space-y-6">
                <ContactRow
                  icon={<MailIcon className="h-5 w-5" />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                />

                <div className="space-y-4 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary/50">
                    Our offices
                  </p>
                  <ContactRow
                    icon={<LocationIcon className="h-5 w-5" />}
                    label={offices[0].country}
                    value={offices[0].address}
                  />
                  <ContactRow
                    icon={<PhoneIcon className="h-5 w-5" />}
                    label="Mobile"
                    value={offices[0].phone}
                    href={`tel:${offices[0].tel}`}
                  />
                </div>

                {offices.slice(1).map((office) => (
                  <div
                    key={office.country}
                    className="space-y-4 border-t border-brand-secondary/15 pt-5"
                  >
                    <ContactRow
                      icon={<LocationIcon className="h-5 w-5" />}
                      label={office.country}
                      value={office.address}
                    />
                    <ContactRow
                      icon={<PhoneIcon className="h-5 w-5" />}
                      label="Mobile"
                      value={office.phone}
                      href={`tel:${office.tel}`}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/50">
                  Connect with us
                </p>
                <div className="flex items-center gap-4">
                  <SocialLink href={socials.linkedin} ariaLabel="LinkedIn">
                    <LinkedInIcon className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href={socials.twitter} ariaLabel="X (Twitter)">
                    <XIcon className="h-5 w-5" />
                  </SocialLink>
                  <SocialLink href={socials.instagram} ariaLabel="Instagram">
                    <InstagramIcon className="h-5 w-5" />
                  </SocialLink>
                </div>
              </div>
            </div>

            <div className="relative bg-[linear-gradient(160deg,rgba(37,32,23,0.82),rgba(23,20,15,0.96))] p-7 sm:p-10 lg:p-12">
              <div className="mb-8 flex items-end justify-between border-b border-brand-secondary/15 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-sage">
                    Private consultation
                  </p>
                  <p className="mt-2 text-sm text-brand-secondary/65">
                    A considered first conversation, not a sales script.
                  </p>
                </div>
                <span className="hidden text-4xl font-semibold tracking-[-0.08em] text-brand-primary/55 sm:block">
                  01
                </span>
              </div>

              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center">
                  <div className="flex h-20 w-20 animate-bounce items-center justify-center rounded-full border-2 border-brand-cta bg-brand-cta/20">
                    <svg
                      className="h-10 w-10 text-brand-cta"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-brand-secondary">Message Sent!</h3>
                    <p className="text-brand-secondary/70">
                      Thank you for reaching out. We&rsquo;ll get back to you within one business
                      day.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="font-semibold text-brand-primary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  className="grid gap-8"
                  onSubmit={handleSubmit}
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Do not fill this out if you are human:{' '}
                      <input
                        name="bot-field"
                        value={fields['bot-field']}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </label>
                  </p>

                  <div className="grid gap-2">
                    <label htmlFor="name" className={labelClass}>
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your full name"
                      value={fields.name}
                      onChange={handleChange}
                      className={fieldClass}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="grid gap-2">
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="you@company.com"
                        value={fields.email}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company name"
                        value={fields.company}
                        onChange={handleChange}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="service" className={labelClass}>
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={fields.service}
                      onChange={handleChange}
                      className="w-full cursor-pointer appearance-none border border-brand-secondary/15 bg-brand-bg/80 px-4 py-3.5 text-base text-brand-secondary outline-none transition-all focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10"
                      style={{
                        backgroundImage: selectChevron,
                        backgroundPosition: 'right 1rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                      }}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="message" className={labelClass}>
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="Tell us about your project or inquiry..."
                      value={fields.message}
                      onChange={handleChange}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs leading-relaxed text-brand-secondary/50 sm:max-w-[60%]">
                      By submitting this form, you agree to our privacy policy and consent to being
                      contacted by our team.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-brand-cta px-7 py-3.5 text-sm font-semibold text-brand-extra transition hover:bg-brand-primary hover:text-brand-dark active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Schedule a call'}
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="mt-2 text-sm text-red-400">
                      Oops! Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  href?: string
}) {
  const row = (
    <div className="flex items-start gap-3 border-b border-brand-secondary/15 py-4">
      <span className="mt-0.5 flex h-9 w-9 items-center justify-center border border-brand-primary/45 text-brand-primary">
        {icon}
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary/50">
          {label}
        </p>
        <p className="mt-1 text-sm text-brand-secondary/85">{value}</p>
      </div>
    </div>
  )

  if (!href) return row

  return (
    <a href={href} className="block transition hover:-translate-y-0.5">
      {row}
    </a>
  )
}

function SocialLink({
  href,
  ariaLabel,
  children,
}: {
  href: string
  ariaLabel: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/20 text-brand-primary transition hover:border-brand-primary hover:text-brand-secondary"
    >
      {children}
    </a>
  )
}
