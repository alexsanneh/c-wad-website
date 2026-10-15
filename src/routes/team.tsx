import { useState } from 'react'
import { flushSync } from 'react-dom'
import { createFileRoute } from '@tanstack/react-router'

import { AcademicCapIcon, LinkedInIcon, MailSolidIcon } from '../components/icons'
import { Reveal } from '../components/Reveal'
import { TeamModal } from '../components/TeamModal'
import { lead, otherMembers } from '../data/team'
import type { TeamMember } from '../data/team'
import { cardPortraitTransitionName, withViewTransition } from '../lib/view-transition'
import { cdnImage } from '../lib/image'

export const Route = createFileRoute('/team')({
  component: TeamPage,
})

function TeamPage() {
  const [selected, setSelected] = useState<TeamMember | null>(null)

  const select = (member: TeamMember | null) => {
    withViewTransition(() => {
      flushSync(() => {
        setSelected(member)
      })
    })
  }

  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-brand-secondary">
      <section className="relative w-full bg-brand-section/30 px-4 py-20 lg:px-6">
        <div className="mx-auto max-w-7xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-cta/40 bg-brand-section/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cta/80">
            Our Team
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-brand-secondary sm:text-5xl">
            Meet the minds behind{' '}
            <span className="bg-gradient-to-r from-brand-base via-brand-cta to-amber-500 bg-clip-text text-transparent">
              C-WAD
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-amber-100/70">
            We are a diverse group of experts committed to delivering excellence in insurance, risk
            management, and business consulting. Click any team member to view their complete
            profile.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 lg:px-6">
        <div className="space-y-16">
          <div className="mx-auto max-w-4xl rounded-[28px] border border-brand-cta/40 bg-brand-section/65 p-6 shadow-xl shadow-brand-extra/40 sm:p-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="relative shrink-0">
                <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-brand-cta/35 shadow-2xl shadow-brand-extra/40 sm:h-64 sm:w-64">
                  <div className="relative h-full w-full">
                    <img
                      src={cdnImage(lead.image, { w: 512 })}
                      alt={lead.fullName}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-cta to-brand-base px-6 py-2 text-sm font-semibold text-white shadow-lg">
                    <AcademicCapIcon className="h-5 w-5" /> {lead.jobTitle}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-3 pt-4">
                <h3 className="text-4xl font-semibold text-brand-secondary">{lead.fullName}</h3>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {lead.linkedin && (
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${lead.fullName} on LinkedIn`}
                      className="inline-flex items-center gap-2 rounded-full border border-brand-cta/40 bg-brand-cta/15 px-4 py-1.5 text-xs font-semibold text-brand-cta shadow-sm transition hover:bg-brand-cta hover:text-white"
                    >
                      <LinkedInIcon className="h-4 w-4" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}
                  <a
                    href={`mailto:${lead.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-brand-cta/30 bg-brand-bg/60 px-4 py-1.5 text-xs font-semibold text-amber-100/90 shadow-sm transition hover:border-brand-cta hover:text-brand-cta"
                  >
                    <MailSolidIcon className="h-4 w-4 text-brand-cta" />
                    <span>{lead.email}</span>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2">
                {lead.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-brand-cta/30 bg-brand-bg/60 px-4 py-1.5 text-sm font-semibold text-brand-secondary"
                  >
                    {credential}
                  </span>
                ))}
              </div>

              <p className="max-w-3xl text-base leading-relaxed text-amber-100/80">{lead.bio}</p>

              <div className="w-full pt-2">
                <div className="flex flex-wrap justify-center gap-3">
                  {lead.specializations.map((specialization) => (
                    <span
                      key={specialization}
                      className="rounded-xl border border-brand-cta/20 bg-brand-section/60 px-4 py-2 text-sm text-amber-100/80"
                    >
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {otherMembers.map((member, index) => (
              <Reveal key={member.email} delay={index * 60}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => select(member)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      select(member)
                    }
                  }}
                  aria-label={`View ${member.fullName}'s profile`}
                  className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-brand-cta/20 bg-brand-section/40 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cta/50 hover:bg-brand-section/70 hover:shadow-2xl hover:shadow-brand-cta/15"
                >
                  <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-brand-bg/50"
                    style={{ viewTransitionName: cardPortraitTransitionName(member.email) }}
                  >
                    <img
                      src={cdnImage(member.image, { w: 520 })}
                      alt={member.fullName}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/25 to-transparent opacity-85 transition-opacity group-hover:opacity-75" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block rounded-full border border-brand-cta/30 bg-brand-cta/20 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-brand-cta backdrop-blur-sm">
                        {member.department}
                      </span>
                      <h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-amber-200">
                        {member.fullName}
                      </h3>
                      <p className="mt-1 text-sm text-amber-100/80">{member.jobTitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-brand-cta/10 p-5 pt-3 text-xs text-amber-100/70 transition-colors group-hover:text-brand-cta">
                    <span>View full profile</span>
                    <span className="font-semibold transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {selected && <TeamModal member={selected} onClose={() => select(null)} />}
    </main>
  )
}
