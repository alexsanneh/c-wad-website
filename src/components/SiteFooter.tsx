import { Link } from '@tanstack/react-router'
import { LinkedInIcon, LocationIcon, MailIcon, PhoneIcon, XIcon } from './icons'
import { Reveal } from './Reveal'
import { footerLinks, footerOffices, site, socials } from '../data/site'
import { cdnImage } from '../lib/image'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative w-full bg-brand-bg border-t border-brand-cta/20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 lg:px-6 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-8">
          <Reveal className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-xl ring-1 ring-brand-cta/30">
                  <img
                    src={cdnImage(site.logo, { w: 96 })}
                    alt="C-WAD Consultancy"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain p-1.5"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-secondary">{site.shortName}</h3>
                  <p className="text-xs text-brand-cta">{site.tagline}</p>
                </div>
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-amber-100/70">
              {site.footerBlurb}
            </p>
            <div className="flex gap-3">
              <a
                href={socials.linkedin}
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cta/30 bg-brand-section/60 text-brand-cta transition hover:border-brand-cta hover:bg-brand-cta hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={socials.twitter}
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-cta/30 bg-brand-section/60 text-brand-cta transition hover:border-brand-cta hover:bg-brand-cta hover:text-white"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </Reveal>

          <Reveal className="space-y-4" delay={80}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <FooterHashLink href={link.href}>{link.label}</FooterHashLink>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="space-y-4" delay={160}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <FooterHashLink href={link.href}>{link.label}</FooterHashLink>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="space-y-4" delay={240}>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-secondary">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-2 text-sm text-amber-100/70 transition hover:text-brand-cta"
                >
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{site.email}</span>
                </a>
              </li>
              {footerOffices.map((office) => [
                <li key={`${office.label}-address`}>
                  <div className="flex items-start gap-2 text-sm text-amber-100/70">
                    <LocationIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {office.label}: {office.address}
                    </span>
                  </div>
                </li>,
                <li key={`${office.label}-phone`}>
                  <a
                    href={`tel:${office.tel}`}
                    className="flex items-start gap-2 text-sm text-amber-100/70 transition hover:text-brand-cta"
                  >
                    <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {office.label}: {office.phone}
                    </span>
                  </a>
                </li>,
              ])}
            </ul>
          </Reveal>
        </div>

        <Reveal className="mt-12 border-t border-brand-cta/10 pt-8">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-amber-100/50">
              © {year} {site.shortName}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-amber-100/50 transition hover:text-brand-cta"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

/** Footer nav entries all point at a section of the home page. */
function FooterHashLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      to="/"
      hash={href.replace('/#', '')}
      className="text-sm text-amber-100/70 transition hover:text-brand-cta"
    >
      {children}
    </Link>
  )
}
