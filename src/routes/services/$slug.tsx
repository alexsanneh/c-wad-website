import { Link, createFileRoute, notFound } from '@tanstack/react-router'

import { ArrowRightIcon, CheckCircleIcon } from '../../components/icons'
import { Reveal } from '../../components/Reveal'
import { getServicePage, servicePageCtaBody } from '../../data/service-pages'

export const Route = createFileRoute('/services/$slug')({
  loader: ({ params }) => {
    const page = getServicePage(params.slug)
    if (!page) throw notFound()
    return page
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: loaderData.metaTitle },
            { name: 'description', content: loaderData.metaDescription },
          ],
        }
      : {},
  component: ServiceDetailPage,
})

function ServiceDetailPage() {
  const page = Route.useLoaderData()

  return (
    <main className="flex min-h-screen flex-col">
      <div className="min-h-screen bg-brand-bg text-brand-secondary">
        <section className="relative mx-auto w-full max-w-6xl px-4 pt-32 pb-20 lg:px-6">
          <Reveal className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-cta/40 bg-brand-section/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cta/80">
              {page.badge}
            </span>
            <h1 className="mt-6 text-4xl font-bold text-brand-secondary sm:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-amber-100/70">
              {page.intro}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* The original points this at an in-page #contact anchor that only
                  exists on the home page. Kept as-is for parity. */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cta to-brand-base px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
              >
                Get Started
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 rounded-full border border-brand-cta/40 bg-brand-section/60 px-8 py-3 text-sm font-semibold text-brand-secondary transition hover:border-brand-cta hover:bg-brand-section/80"
              >
                Learn More
              </a>
            </div>
          </Reveal>
        </section>

        <section id="offerings" className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-secondary sm:text-4xl">What We Offer</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-amber-100/70">
              Comprehensive solutions tailored to your specific needs
            </p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-2">
            {page.offerings.map((offering, index) => (
              <Reveal
                key={offering.title}
                as="article"
                delay={index * 90}
                className="rounded-[28px] border border-brand-cta/40 bg-brand-section/65 p-6 shadow-xl shadow-brand-extra/40 sm:p-8"
              >
                <h3 className="mb-4 text-2xl font-semibold text-brand-secondary">
                  {offering.title}
                </h3>
                <p className="mb-6 text-sm text-amber-100/70">{offering.description}</p>
                <ul className="space-y-3">
                  {offering.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-cta" />
                      <span className="text-sm text-amber-100/75">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-brand-secondary sm:text-4xl">Our Approach</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-amber-100/70">
              A proven methodology that delivers results
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {page.approach.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 90}
                className="rounded-[28px] border border-brand-cta/35 bg-brand-section/60 p-6 text-center shadow-xl shadow-brand-extra/30"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-brand-cta/40 bg-brand-section/60 text-lg font-semibold text-brand-cta">
                  {index + 1}
                </div>
                <h3 className="mb-3 text-xl font-semibold text-brand-secondary">{step.title}</h3>
                <p className="text-sm text-amber-100/70">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
          <Reveal className="rounded-[28px] border border-brand-cta/40 bg-brand-section/65 p-8 shadow-xl shadow-brand-extra/40 sm:p-12">
            <h2 className="mb-8 text-center text-3xl font-bold text-brand-secondary sm:text-4xl">
              Why Choose C-WAD Consultancy
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.whyChooseUs.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-2xl border border-brand-cta/20 bg-brand-bg/55 p-4"
                >
                  <CheckCircleIcon className="h-6 w-6 shrink-0 text-brand-cta" />
                  <span className="text-sm text-amber-100/75">{reason}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="relative mx-auto w-full max-w-6xl px-4 py-20 lg:px-6">
          <Reveal className="rounded-[28px] border border-brand-cta/40 bg-gradient-to-br from-brand-section/80 to-brand-bg/60 p-12 text-center shadow-xl shadow-brand-extra/40">
            <h2 className="mb-4 text-3xl font-bold text-brand-secondary">{page.ctaHeading}</h2>
            <p className="mx-auto mb-8 max-w-2xl text-base text-amber-100/70">
              {servicePageCtaBody}
            </p>
            <Link
              to="/"
              hash="contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-cta to-brand-base px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Contact Us Today
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </Reveal>
        </section>
      </div>
    </main>
  )
}
