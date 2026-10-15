import { waicaUrl } from '../../data/site'
import { cdnImage } from '../../lib/image'

/** Membership panel for the West African Insurance Companies Association. */
export function WaicaSection() {
  return (
    <section className="border-b border-brand-secondary/10 bg-brand-sage-bg py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.5fr_1.5fr]">
          <div className="overflow-hidden rounded-lg border border-brand-secondary/15 bg-brand-tertiary p-6">
            <div className="relative h-28 w-full sm:h-32">
              <img
                src={cdnImage('/Partners/waica.net.png', { w: 480 })}
                alt="West African Insurance Companies Association logo"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-brand-sage">
              Community &amp; Industry
            </p>
            <h2 className="text-3xl font-bold leading-tight text-brand-secondary md:text-4xl">
              Connected to West Africa&rsquo;s insurance community.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-secondary/75 md:text-lg">
              C-WAD is a member of the West African Insurance Companies Association, strengthening
              our connection to regional education, collaboration and market development.
            </p>

            <div className="mt-7 grid gap-5 border-y border-brand-secondary/15 py-5 text-sm text-brand-secondary/70 sm:grid-cols-2">
              <div>
                <span className="block font-semibold text-brand-secondary">
                  Regional collaboration
                </span>
                Exchange of insurance knowledge, data, experience, and business insight across the
                sub-region.
              </div>
              <div>
                <span className="block font-semibold text-brand-secondary">
                  Professional development
                </span>
                Support for stronger insurance awareness, education, and sound market practice.
              </div>
            </div>

            <a
              href={waicaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-full border border-brand-secondary/30 px-5 py-3 text-sm font-semibold text-brand-secondary transition hover:border-brand-primary hover:text-brand-primary"
            >
              View WAICA Sierra Leone members
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
