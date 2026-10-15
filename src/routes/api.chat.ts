import Anthropic from '@anthropic-ai/sdk'
import { createFileRoute } from '@tanstack/react-router'

import { offices, site } from '../data/site'
import { services } from '../data/services'

type IncomingMessage = {
  role: 'user' | 'assistant'
  content: string
}

/** Keeps a runaway conversation from blowing past the model's context window. */
const MAX_TURNS = 20

const systemPrompt = [
  `You are the AI assistant for ${site.name}, a consultancy specialising in insurance risk management, business consulting, digital marketing, and professional writing.`,
  '',
  'Practice areas and what each covers:',
  ...services.map(
    (service) =>
      `- ${service.title}: ${service.description} Includes ${service.subServices
        .map((sub) => sub.name)
        .join(', ')}.`,
  ),
  '',
  'Offices:',
  ...offices.map((office) => `- ${office.country}: ${office.address} (${office.phone})`),
  '',
  `General enquiries: ${site.email}`,
  '',
  'Guidelines:',
  '- Be concise and professional. Two short paragraphs at most.',
  '- Answer only from the information above; never invent prices, timelines, or regulatory advice.',
  '- For anything requiring a specialist, or when asked to quote, invite the visitor to book a consultation through the contact form or by email.',
  '- Never present yourself as a licensed broker or give binding coverage advice.',
].join('\n')

export const Route = createFileRoute('/api/chat')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let messages: Array<IncomingMessage>

        try {
          const body = (await request.json()) as { messages?: Array<IncomingMessage> }
          messages = Array.isArray(body.messages) ? body.messages : []
        } catch {
          messages = []
        }

        const history = messages
          .filter(
            (message) =>
              (message.role === 'user' || message.role === 'assistant') &&
              typeof message.content === 'string' &&
              message.content.trim().length > 0,
          )
          .slice(-MAX_TURNS)
          .map((message) => ({ role: message.role, content: message.content.trim() }))

        if (history.length === 0 || history[history.length - 1].role !== 'user') {
          return Response.json(
            { available: false, message: 'Please enter a question to get started.' },
            { status: 400 },
          )
        }

        try {
          // Credentials come from the Netlify AI Gateway at runtime, so the
          // default constructor is intentionally left unconfigured.
          const anthropic = new Anthropic()

          const completion = await anthropic.messages.create({
            model: 'claude-haiku-4-5',
            max_tokens: 700,
            system: systemPrompt,
            messages: history,
          })

          const reply = completion.content
            .filter((block) => block.type === 'text')
            .map((block) => block.text)
            .join('\n')
            .trim()

          if (!reply) {
            return Response.json({ available: false })
          }

          return Response.json({ available: true, reply })
        } catch (error) {
          // The widget degrades to its offline notice, so log and stay quiet
          // about the underlying provider error.
          console.error('Chat completion failed:', error)
          return Response.json({ available: false }, { status: 503 })
        }
      },
    },
  },
})
