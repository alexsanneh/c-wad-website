import { useState } from 'react'
import { flushSync } from 'react-dom'
import { Link } from '@tanstack/react-router'
import { ArrowRightIcon, LinkedInIcon, MailSolidIcon } from '../icons'
import { Reveal, useReveal } from '../Reveal'
import { lead, otherMembers } from '../../data/team'
import { portraitTransitionName, withViewTransition } from '../../lib/view-transition'
import { cdnImage } from '../../lib/image'

/**
 * "Our people": the founder's profile followed by the wider team. Selecting a
 * colleague expands their card in place across the full width of the grid.
 */
export function Team() {
  const [selected, setSelected] = useState<string | null>(null)

  const select = (email: string | null) => {
    withViewTransition(() => {
      flushSync(() => {
        setSelected(email)
      })
    })
  }

  return (
    <section id="team" className="border-t border-brand-secondary/10 bg-brand-bg py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
            Our people
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-brand-secondary sm:text-5xl">
            Advice is only as good as the people behind it.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-secondary/70">
            Our team combines technical insurance knowledge with practical business, operations and
            communications expertise.
          </p>
        </Reveal>

        <Reveal
          as="article"
          className="mt-14 grid gap-10 border-y border-brand-secondary/15 py-8 lg:grid-cols-[.76fr_1.24fr] lg:items-center lg:py-10"
          delay={80}
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[9rem] bg-brand-section">
            <img
              src={cdnImage(lead.image, { w: 640 })}
              alt={lead.fullName}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top grayscale-[12%]"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-primary">
              Leadership
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] text-brand-secondary sm:text-4xl">
              {lead.fullName}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p className="text-sm font-medium text-brand-sage">{lead.jobTitle}</p>
              {lead.linkedin && (
                <a
                  href={lead.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${lead.fullName} on LinkedIn`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-3 py-1 text-xs font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-brand-extra"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </a>
              )}
              <a
                href={`mailto:${lead.email}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-secondary/20 bg-brand-section/60 px-3 py-1 text-xs font-semibold text-brand-secondary/80 transition hover:border-brand-primary hover:text-brand-primary"
              >
                <MailSolidIcon className="h-3.5 w-3.5 text-brand-primary" />
                <span>{lead.email}</span>
              </a>
            </div>
            <p className="mt-6 border-y border-brand-secondary/15 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-brand-secondary/60">
              {lead.credentials.join(' · ')}
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-secondary/72">
              {lead.bio}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-brand-secondary/58">
              <span className="font-semibold text-brand-secondary/80">Focus areas: </span>
              {lead.specializations.join(' · ')}
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-10 gap-y-0 sm:grid-cols-2">
          {otherMembers.map((member, index) =>
            selected === member.email ? (
              <article
                key={member.email}
                className="service-panel grid gap-6 border-y border-brand-primary/35 bg-brand-section/45 py-6 sm:col-span-2 sm:grid-cols-[minmax(11rem,.58fr)_1fr] sm:items-start sm:p-7"
              >
                <div
                  className="relative h-52 w-full max-w-[17rem] overflow-hidden rounded-lg bg-brand-extra sm:aspect-[4/5] sm:h-auto sm:max-w-none"
                  style={{ viewTransitionName: portraitTransitionName(member.email) }}
                >
                  <img
                    src={cdnImage(member.image, { w: 560 })}
                    alt={member.fullName}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-[-0.03em] text-brand-secondary">
                        {member.fullName}
                      </h3>
                      <p className="mt-1 text-sm text-brand-sage">{member.jobTitle}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => select(null)}
                      className="shrink-0 border-b border-brand-secondary/35 pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary/65 transition hover:border-brand-primary hover:text-brand-primary"
                    >
                      Close
                    </button>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-brand-secondary/72">
                    {member.bio}
                  </p>
                  <p className="mt-5 border-t border-brand-secondary/12 pt-4 text-xs leading-relaxed text-brand-secondary/58">
                    <span className="font-semibold text-brand-secondary/80">Focus areas: </span>
                    {member.specializations.join(' · ')}
                  </p>
                </div>
              </article>
            ) : (
              <TeamMemberButton
                key={member.email}
                member={member}
                delay={index * 50}
                onSelect={() => select(member.email)}
              />
            ),
          )}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            to="/team"
            className="group inline-flex items-center gap-2 border-b border-brand-primary pb-1 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary"
          >
            Meet the full team{' '}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/** Compact roster entry. Revealed on scroll, expands into the article above. */
function TeamMemberButton({
  member,
  delay,
  onSelect,
}: {
  member: (typeof otherMembers)[number]
  delay: number
  onSelect: () => void
}) {
  const { ref, visible } = useReveal<HTMLButtonElement>()

  return (
    <button
      ref={ref}
      type="button"
      onClick={onSelect}
      aria-label={`View ${member.fullName}'s profile`}
      data-visible={visible ? 'true' : 'false'}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group grid w-full grid-cols-[4.75rem_1fr] gap-4 border-t border-brand-secondary/12 py-5 text-left outline-none hover:border-brand-primary/50 focus-visible:border-brand-primary sm:grid-cols-[4.5rem_1fr]"
    >
      <div
        className="relative h-24 w-[4.75rem] overflow-hidden rounded-md bg-brand-section sm:h-28 sm:w-[4.5rem]"
        style={{ viewTransitionName: portraitTransitionName(member.email) }}
      >
        <img
          src={cdnImage(member.image, { w: 224 })}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top grayscale-[10%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="text-base font-semibold text-brand-secondary transition group-hover:text-brand-primary">
          {member.fullName}
        </h3>
        <p className="mt-1 text-sm text-brand-sage">{member.jobTitle}</p>
        <p className="mt-2 text-xs leading-relaxed text-brand-secondary/58">
          {member.specializations.slice(0, 2).join(' · ')}
        </p>
      </div>
    </button>
  )
}
