import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  SparklesIcon,
} from '../icons'
import { services } from '../../data/services'

/**
 * Practice-area switcher. On large screens the tabs stack in a sidebar; below
 * that they become a snap-scrolling row that recentres on the active tab and
 * de-emphasises its neighbours.
 */
export function Services() {
  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(true)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const service = services[active]
  const Icon = service.icon

  const previous = () => setActive((index) => (index - 1 + services.length) % services.length)
  const next = () => setActive((index) => (index + 1) % services.length)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1024)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (isDesktop) return
    tabRefs.current[active]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [active, isDesktop])

  return (
    <section
      id="services"
      className="relative mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-20 md:px-8 lg:px-10 lg:py-28"
    >
      <div className="flex max-w-3xl flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
          What we do
        </p>
        <h2 className="text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-brand-secondary sm:text-5xl">
          Specialist advice, without the generic pitch.
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-brand-secondary/70">
          Select an area to see how our specialists can help your organisation make a clearer, more
          informed next decision.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
        <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
          {services.map((item, index) => {
            const TabIcon = item.icon
            const selected = index === active
            const distance = Math.abs(index - active)

            return (
              <button
                key={item.id}
                type="button"
                ref={(node) => {
                  tabRefs.current[index] = node
                }}
                onClick={() => setActive(index)}
                aria-pressed={selected}
                style={
                  isDesktop
                    ? undefined
                    : {
                        transform: `scale(${selected ? 1.02 : distance === 1 ? 0.94 : 0.9}) translateY(${selected ? 0 : 8}px)`,
                        opacity: selected ? 1 : distance === 1 ? 0.75 : 0.5,
                      }
                }
                className={`group relative flex min-w-[220px] snap-center items-center gap-4 border-b border-brand-secondary/15 px-1 py-5 text-left transition-all lg:min-w-0 ${
                  selected
                    ? 'border-brand-primary bg-brand-section/45 pl-4'
                    : 'hover:border-brand-secondary/45 hover:text-brand-secondary'
                }`}
              >
                <span className="flex h-9 w-9 items-center justify-center text-brand-primary">
                  <TabIcon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-secondary">{item.title}</p>
                  <p className="mt-1 hidden text-xs leading-relaxed text-brand-secondary/55 lg:block">
                    {item.description}
                  </p>
                </div>
                {selected && (
                  <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-0.5 bg-brand-primary" />
                )}
              </button>
            )
          })}
        </div>

        <div className="relative">
          <div
            key={service.id}
            className="service-panel relative overflow-hidden border-y border-brand-secondary/15 bg-brand-section/45 p-6 sm:p-9"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center border border-brand-primary/45 text-brand-primary">
                  <Icon className="h-8 w-8" />
                </span>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-secondary">{service.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-secondary/65">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="hidden gap-3 lg:flex">
                <ServiceNavButton label="Previous service" onClick={previous}>
                  <ChevronLeftIcon className="h-5 w-5" />
                </ServiceNavButton>
                <ServiceNavButton label="Next service" onClick={next}>
                  <ChevronRightIcon className="h-5 w-5" />
                </ServiceNavButton>
              </div>
            </div>

            <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
              {service.subServices.slice(0, 6).map((subService) => (
                <div
                  key={subService.name}
                  className="flex items-start gap-3 border-t border-brand-secondary/15 py-4"
                >
                  <CheckCircleIcon className="mt-1 h-4 w-4 text-brand-sage" />
                  <div>
                    <p className="text-sm font-semibold text-brand-secondary">{subService.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-secondary/55">
                      {subService.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-l-2 border-brand-sage bg-brand-sage-bg/55 p-5">
              <div className="flex items-start gap-3">
                <SparklesIcon className="mt-1 h-5 w-5 text-brand-sage" />
                <div>
                  <h4 className="text-sm font-semibold text-brand-secondary">
                    {service.featured.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-brand-secondary/60">
                    {service.featured.description}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-cta px-6 py-3 text-sm font-semibold text-brand-extra transition hover:bg-brand-primary hover:text-brand-dark"
              >
                Learn More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <div className="flex gap-3 lg:hidden">
                <ServiceNavButton label="Previous service" onClick={previous}>
                  <ChevronLeftIcon className="h-5 w-5" />
                </ServiceNavButton>
                <ServiceNavButton label="Next service" onClick={next}>
                  <ChevronRightIcon className="h-5 w-5" />
                </ServiceNavButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServiceNavButton({
  label,
  onClick,
  children,
}: {
  label: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-secondary/25 text-brand-primary transition hover:border-brand-primary hover:text-brand-secondary"
    >
      {children}
    </button>
  )
}
