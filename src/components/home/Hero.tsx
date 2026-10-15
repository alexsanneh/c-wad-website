import { ArrowRightIcon, LinkedInIcon, MailSolidIcon } from '../icons'
import { lead, leadSeatedPortrait } from '../../data/team'
import { site } from '../../data/site'
import { cdnImage } from '../../lib/image'

/** Opening screen: headline, calls to action and the layered founder collage. */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-secondary/10 bg-brand-bg pt-24 lg:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(245,237,224,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,237,224,0.035)_1px,transparent_1px)] [background-size:32px_32px]"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[28%] -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-cta/[0.08] blur-[110px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-14 md:px-8 lg:grid-cols-[.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-20">
        <div className="max-w-2xl lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
            C-WAD Consultancy
          </p>
          <h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.065em] text-brand-secondary sm:text-6xl lg:text-7xl">
            Risk intelligence, made <span className="text-brand-primary">practical.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-brand-secondary/72 sm:text-xl">
            Specialist insurance and business advice for organisations building resilient futures
            across Sierra Leone, The Gambia and the United Kingdom.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-cta px-6 py-3.5 text-sm font-semibold text-brand-extra transition hover:-translate-y-0.5 hover:bg-brand-primary hover:shadow-[0_12px_28px_rgba(196,147,61,0.22)]"
            >
              Book a consultation{' '}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 border-b border-brand-secondary/40 pb-1 text-sm font-semibold text-brand-secondary transition hover:border-brand-primary hover:text-brand-primary"
            >
              Explore our services{' '}
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-5 gap-y-3 border-t border-brand-secondary/15 pt-5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-secondary/55">
            <span>Insurance &amp; risk</span>
            <span className="text-brand-primary">/</span>
            <span>Business consulting</span>
            <span className="text-brand-primary">/</span>
            <span>Communications</span>
          </div>
        </div>

        <div className="relative h-[390px] sm:h-[480px] lg:h-[570px]">
          <p
            aria-hidden="true"
            className="absolute -left-4 top-7 z-0 text-[4.5rem] font-semibold leading-none tracking-[-0.12em] text-brand-secondary/[0.055] sm:text-[7rem] lg:-left-20 lg:text-[9rem]"
          >
            WAD
          </p>

          <div className="absolute bottom-0 left-0 top-10 w-[74%] overflow-hidden rounded-t-[8rem] border border-brand-secondary/20 bg-brand-section shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
            <img
              src={cdnImage(leadSeatedPortrait, { w: 900 })}
              alt={`${lead.name}, Founder and Chief Executive Officer of C-WAD Consultancy`}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_28%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-extra/90 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-3 p-5 sm:p-6">
              <div>
                <p className="text-sm font-semibold text-brand-secondary">{lead.name}</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.19em] text-brand-secondary/65">
                  Founder &amp; Chief Executive Officer
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1.5 inline-flex items-center gap-1.5 text-xs text-brand-primary transition hover:underline"
                >
                  <MailSolidIcon className="h-3.5 w-3.5" />
                  <span>{site.email}</span>
                </a>
              </div>
              <a
                href={lead.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${lead.name} on LinkedIn`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-primary/40 bg-brand-primary/20 text-brand-primary shadow-md transition hover:bg-brand-primary hover:text-brand-extra"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="absolute right-0 top-0 h-[43%] w-[42%] overflow-hidden rounded-bl-[4rem] border border-brand-secondary/20 bg-brand-sage-bg shadow-[0_22px_50px_rgba(0,0,0,0.28)]">
            <img
              src={cdnImage(lead.image, { w: 500 })}
              alt={lead.name}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>

          <div className="absolute bottom-7 right-0 w-[39%] border-l-2 border-brand-primary bg-brand-extra/90 p-4 backdrop-blur-sm sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.19em] text-brand-primary">
              Regional perspective
            </p>
            <p className="mt-2 text-sm leading-snug text-brand-secondary/75">
              Local expertise, connected across markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
