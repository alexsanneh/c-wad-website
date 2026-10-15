import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { ChatWidget } from '../components/ChatWidget'
import { SiteFooter } from '../components/SiteFooter'
import { SiteNav } from '../components/SiteNav'
import { site } from '../data/site'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: site.title },
      { name: 'description', content: site.description },
    ],
    links: [{ rel: 'icon', href: site.logo }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-secondary antialiased">
        <SiteNav />
        {children}
        <SiteFooter />
        <ChatWidget />
        <Scripts />
      </body>
    </html>
  )
}
