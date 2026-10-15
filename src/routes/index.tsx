import { createFileRoute } from '@tanstack/react-router'

import { Approach } from '../components/home/Approach'
import { Contact } from '../components/home/Contact'
import { Hero } from '../components/home/Hero'
import { PartnerMarquee } from '../components/home/PartnerMarquee'
import { Services } from '../components/home/Services'
import { Team } from '../components/home/Team'
import { WaicaSection } from '../components/home/WaicaSection'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-bg text-brand-secondary">
      <Hero />
      <PartnerMarquee />
      <WaicaSection />
      <Approach />
      <Services />
      <Team />
      <Contact />
    </main>
  )
}
