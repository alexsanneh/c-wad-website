import { useEffect } from 'react'
import { XMarkIcon } from './icons'
import type { TeamMember } from '../data/team'
import { cardPortraitTransitionName } from '../lib/view-transition'
import { cdnImage } from '../lib/image'

/** Full profile overlay opened from a team card. */
export function TeamModal({ member, onClose }: { member: TeamMember; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${member.fullName} profile`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
    >
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-md"
      />

      <div className="team-modal relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-brand-cta/40 bg-brand-bg p-6 shadow-2xl shadow-brand-cta/20 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cta/30 bg-brand-section/80 text-amber-100/80 transition hover:bg-brand-cta hover:text-white"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="grid items-start gap-8 md:grid-cols-[220px_1fr]">
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-2 border-brand-cta/30 bg-brand-section shadow-xl"
            style={{ viewTransitionName: cardPortraitTransitionName(member.email) }}
          >
            <img
              src={cdnImage(member.image, { w: 440 })}
              alt={member.fullName}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <span className="inline-block rounded-full border border-brand-cta/30 bg-brand-cta/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-cta">
                {member.department}
              </span>
              <h3 className="mt-3 text-3xl font-semibold text-white">{member.fullName}</h3>
              <p className="mt-1 text-lg font-medium text-amber-200">{member.jobTitle}</p>
            </div>

            {member.credentials.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {member.credentials.map((credential) => (
                  <span
                    key={credential}
                    className="rounded-full border border-brand-cta/30 bg-brand-section/80 px-3 py-1 text-xs font-semibold text-amber-100"
                  >
                    {credential}
                  </span>
                ))}
              </div>
            )}

            {member.bio && (
              <div className="space-y-2 border-t border-brand-cta/15 pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-100/50">
                  About
                </h4>
                <p className="text-sm leading-relaxed text-amber-100/80">{member.bio}</p>
              </div>
            )}

            {member.specializations.length > 0 && (
              <div className="space-y-2 border-t border-brand-cta/15 pt-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-100/50">
                  Areas of Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.specializations.map((specialization) => (
                    <span
                      key={specialization}
                      className="rounded-lg border border-brand-cta/20 bg-brand-section/50 px-3 py-1.5 text-xs text-amber-100/90"
                    >
                      {specialization}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
