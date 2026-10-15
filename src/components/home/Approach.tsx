import { ArrowRightIcon, CheckCircleIcon } from '../icons'
import { Reveal } from '../Reveal'

const principles = [
  'Insurance, reinsurance and risk advice informed by market practice.',
  'Business counsel that is clear enough to act on and rigorous enough to trust.',
  'A regional perspective with direct access to the people doing the work.',
]

const credentials = ['MBA', 'FCII', 'FABE', 'SIRM', 'CMgr MCMI']

/** "Our approach" — positioning statement beside the firm's track record. */
export function Approach() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-bg-alt py-20 lg:py-28">
      <div className="absolute left-0 top-0 h-px w-full bg-brand-secondary/10" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[.84fr_1.16fr] lg:gap-20 lg:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-primary">
            Our approach
          </p>
          <h2 className="mt-5 max-w-md text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-brand-secondary sm:text-5xl">
            Experience matters when the stakes are real.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-secondary/70">
            C-WAD brings insurance, business and communications expertise into one considered
            advisory relationship&mdash;so decisions can move from uncertainty to action.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 border-b border-brand-primary pb-1 text-sm font-semibold text-brand-primary transition hover:text-brand-secondary"
          >
            Start a conversation{' '}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>

        <Reveal className="border-t border-brand-secondary/15" delay={120}>
          <div className="grid gap-0 sm:grid-cols-3">
            <div className="border-b border-brand-secondary/15 py-6 sm:col-span-1 sm:border-r sm:pr-7">
              <p className="text-5xl font-semibold tracking-[-0.06em] text-brand-primary">21+</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-secondary/65">
                Years of executive insurance leadership.
              </p>
            </div>
            <div className="border-b border-brand-secondary/15 py-6 sm:col-span-2 sm:pl-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary/50">
                Guided by
              </p>
              <p className="mt-3 text-xl font-medium leading-snug text-brand-secondary">
                Practicality · Realism · Reliability · Discipline · Sincerity · Experience
              </p>
            </div>
          </div>

          <ul className="mt-2 divide-y divide-brand-secondary/15">
            {principles.map((principle, index) => (
              <li key={principle} className="flex gap-4 py-5">
                <span className="pt-0.5 text-xs font-semibold text-brand-primary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p className="max-w-xl text-base leading-relaxed text-brand-secondary/75">
                  {principle}
                </p>
                <CheckCircleIcon className="ml-auto mt-1 h-5 w-5 shrink-0 text-brand-sage" />
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-secondary/55">
            {credentials.map((credential) => (
              <span key={credential}>{credential}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
