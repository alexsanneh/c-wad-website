import { useEffect, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { CloseIcon, MenuIcon } from './icons'
import { navLinks, site } from '../data/site'
import { cdnImage } from '../lib/image'

/** Fixed header: transparent over the hero, solid once the page is scrolled. */
export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-brand-secondary/10 bg-brand-extra/95 shadow-lg shadow-brand-extra/30 backdrop-blur-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-brand-tertiary p-1 ring-1 ring-brand-secondary/20 transition-all group-hover:scale-105 group-hover:ring-brand-primary/70">
                <img
                  src={cdnImage(site.logo, { w: 80 })}
                  alt="C-WAD Consultancy"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </div>
              <span className="text-brand-secondary font-semibold text-lg hidden sm:block">
                {site.name}
              </span>
            </Link>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to="/"
                  hash={link.href.replace('/#', '')}
                  className="group relative text-sm font-medium text-brand-secondary/65 transition-colors hover:text-brand-secondary"
                >
                  {link.label}
                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-brand-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            <Link
              to="/"
              hash="contact"
              className="hidden rounded-full border border-brand-primary/70 px-4 py-2 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-brand-dark lg:inline-flex"
            >
              Book a consultation
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-lg p-2 text-brand-secondary transition-colors hover:bg-brand-section lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
          <div className="fixed bottom-0 right-0 top-20 z-40 w-full max-w-sm border-l border-brand-secondary/10 bg-brand-extra/98 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to="/"
                  hash={link.href.replace('/#', '')}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-brand-secondary/70 transition-all hover:bg-brand-section hover:text-brand-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}
