import { partners } from '../../data/site'
import { cdnImage } from '../../lib/image'

/** The logo strip scrolls forever; the list is duplicated so the loop is seamless. */
export function PartnerMarquee() {
  return (
    <section className="border-y border-brand-secondary/10 bg-brand-extra py-9 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/55">
            Regional partners and affiliations
          </p>
        </div>
      </div>

      <div className="group/carousel relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="partner-carousel-track flex w-max items-center group-focus-within/carousel:[animation-play-state:paused] group-hover/carousel:[animation-play-state:paused] motion-reduce:animate-none">
          {[false, true].map((duplicate) =>
            partners.map((partner) => (
              <a
                key={`${duplicate ? 'dup' : 'set'}-${partner.name}`}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} website`}
                aria-hidden={duplicate}
                tabIndex={duplicate ? -1 : undefined}
                className="group/logo mx-2 flex h-20 w-40 shrink-0 items-center justify-center border-x border-brand-secondary/10 px-6 transition-colors hover:border-brand-primary/45 focus-visible:border-brand-primary focus-visible:outline-none sm:mx-3 sm:w-48"
              >
                <div className="relative h-11 w-full opacity-[0.58] transition duration-500 ease-out [filter:invert(64%)_sepia(36%)_saturate(736%)_hue-rotate(4deg)_brightness(94%)_contrast(89%)] group-focus-visible/logo:scale-105 group-focus-visible/logo:opacity-100 group-focus-visible/logo:[filter:none] group-hover/logo:scale-105 group-hover/logo:opacity-100 group-hover/logo:[filter:none]">
                  <img
                    src={cdnImage(partner.logo, { w: 240 })}
                    alt={`${partner.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
              </a>
            )),
          )}
        </div>
      </div>
    </section>
  )
}
