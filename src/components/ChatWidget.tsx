import { useEffect, useRef, useState } from 'react'
import {
  AlertCircleIcon,
  BotIcon,
  MessageSquareIcon,
  MinimizeIcon,
  SendIcon,
  UserIcon,
  XMarkIcon,
} from './icons'

type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  isError?: boolean
}

const UNAVAILABLE = 'This service is unavailable at this moment. Please try again later.'

const suggestions = [
  {
    id: 'services',
    label: 'What services do you offer?',
    query: 'Can you summarize the main services C-WAD Consultancy offers?',
  },
  {
    id: 'risk',
    label: 'Risk & Insurance Solutions',
    query: 'What insurance and risk management services do you provide?',
  },
  {
    id: 'consulting',
    label: 'Business Consulting',
    query: 'How can C-WAD help with strategy and business consulting?',
  },
  {
    id: 'contact',
    label: 'How to contact C-WAD?',
    query: 'How can I contact C-WAD Consultancy for a consultation?',
  },
]

function stamp(date: Date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

/** Floating AI assistant. Answers are generated server-side by /api/chat. */
export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      content:
        "Welcome to C-WAD Consultancy! I'm your AI assistant. How can I help you today with our Insurance, Risk Management, Digital Marketing, or Business Consulting services?",
      timestamp: stamp(new Date()),
    },
  ])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [status, setStatus] = useState<'ready' | 'unavailable'>('ready')
  const [banner, setBanner] = useState<string | null>(null)
  const endRef = useRef<HTMLDivElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!open) return
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
    inputRef.current?.focus()
  }, [open, messages, pending])

  const send = async (override?: string) => {
    const text = (override ?? input).trim()
    if (!text || pending) return

    const outgoing: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: text,
      timestamp: stamp(new Date()),
    }
    const history = [...messages, outgoing]
    setMessages(history)
    if (!override) setInput('')
    setPending(true)
    setBanner(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      })
      const data = await response.json()

      if (data.available && data.reply) {
        setStatus('ready')
        setMessages((current) => [
          ...current,
          {
            id: `asst-${Date.now()}`,
            role: 'assistant',
            content: data.reply,
            timestamp: stamp(new Date()),
          },
        ])
      } else {
        const message = data.message || UNAVAILABLE
        setStatus('unavailable')
        setBanner(message)
        setMessages((current) => [
          ...current,
          {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: message,
            timestamp: stamp(new Date()),
            isError: true,
          },
        ])
      }
    } catch (error) {
      console.error('Failed to send message:', error)
      setStatus('unavailable')
      setBanner(UNAVAILABLE)
      setMessages((current) => [
        ...current,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: UNAVAILABLE,
          timestamp: stamp(new Date()),
          isError: true,
        },
      ])
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans text-brand-secondary">
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open C-WAD AI Assistant"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-brand-primary via-[#d1a54f] to-brand-cta text-brand-dark shadow-xl shadow-brand-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-brand-bg"
        >
          <span className="pointer-events-none absolute inset-0 animate-ping rounded-full bg-brand-primary/30" />
          <MessageSquareIcon className="h-6 w-6 text-brand-dark transition-transform duration-300 group-hover:scale-110" />
          <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-brand-section bg-brand-bg-alt px-3 py-1.5 text-xs font-medium text-brand-secondary opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 md:block">
            Chat with C-WAD AI
          </span>
        </button>
      )}

      {open && (
        <div className="flex h-[520px] max-h-[85vh] w-[350px] flex-col overflow-hidden rounded-2xl border border-brand-primary/30 bg-brand-bg/95 shadow-2xl shadow-black/80 backdrop-blur-md sm:w-[390px]">
          <div className="flex items-center justify-between border-b border-brand-section/80 bg-gradient-to-r from-brand-bg-alt via-[#221c15] to-brand-bg px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-brand-primary/40 bg-gradient-to-br from-brand-primary/20 to-brand-cta/40 text-brand-primary shadow-inner">
                <BotIcon className="h-5 w-5" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-brand-bg bg-emerald-500" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-semibold text-brand-tertiary">C-WAD Assistant</h3>
                  <span className="rounded border border-brand-primary/30 bg-brand-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-brand-primary">
                    AI
                  </span>
                </div>
                <p className="text-[11px] text-brand-secondary/70">
                  Insurance &amp; Business Intelligence
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Minimize Chat"
                className="rounded-lg p-1.5 text-brand-secondary/60 transition-colors hover:bg-brand-section/50 hover:text-brand-tertiary"
              >
                <MinimizeIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close Chat"
                className="rounded-lg p-1.5 text-brand-secondary/60 transition-colors hover:bg-brand-section/50 hover:text-brand-tertiary"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {banner && (
            <div className="flex items-start gap-2.5 border-b border-amber-500/20 bg-amber-500/10 px-3.5 py-2 text-xs text-amber-200/90">
              <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <div className="flex-1 text-[11.5px] leading-tight">{banner}</div>
              <button
                type="button"
                onClick={() => setBanner(null)}
                aria-label="Dismiss"
                className="p-0.5 text-amber-300/60 hover:text-amber-200"
              >
                <XMarkIcon className="h-3.5 w-3.5" />
              </button>
            </div>
          )}

          <div className="custom-scrollbar flex-1 space-y-3.5 overflow-y-auto p-4">
            {messages.map((message) => {
              const isUser = message.role === 'user'
              return (
                <div
                  key={message.id}
                  className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <div
                    className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                      isUser
                        ? 'bg-brand-primary text-brand-dark'
                        : message.isError
                          ? 'border border-amber-500/30 bg-amber-500/20 text-amber-400'
                          : 'border border-brand-primary/30 bg-brand-section text-brand-primary'
                    }`}
                  >
                    {isUser ? <UserIcon className="h-4 w-4" /> : <BotIcon className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      isUser
                        ? 'rounded-tr-xs bg-gradient-to-r from-brand-primary via-[#c4933d] to-brand-cta font-medium text-brand-dark shadow-md'
                        : message.isError
                          ? 'rounded-tl-xs border border-amber-500/30 bg-amber-500/10 text-amber-100/90'
                          : 'rounded-tl-xs border border-brand-section/90 bg-brand-bg-alt text-brand-secondary shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    <span
                      className={`mt-1 block text-right text-[9px] ${
                        isUser ? 'text-brand-dark/70' : 'text-brand-secondary/40'
                      }`}
                    >
                      {message.timestamp}
                    </span>
                  </div>
                </div>
              )
            })}

            {pending && (
              <div className="flex items-center gap-2 pl-9 text-xs text-brand-secondary/60">
                <div className="flex items-center gap-1 rounded-2xl border border-brand-section bg-brand-bg-alt px-3 py-2">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-primary [animation-delay:-0.3s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-primary [animation-delay:-0.15s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-brand-primary" />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {messages.length < 5 && !pending && (
            <div className="border-t border-brand-section/40 bg-brand-bg-alt/50 px-3.5 py-2">
              <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-brand-secondary/50">
                Suggested Questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion.id}
                    type="button"
                    onClick={() => send(suggestion.query)}
                    className="rounded-full border border-brand-section bg-brand-section/60 px-2.5 py-1 text-left text-[11px] text-brand-secondary/80 transition-all hover:border-brand-primary/40 hover:bg-brand-primary/20 hover:text-brand-tertiary"
                  >
                    {suggestion.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-brand-section/80 bg-brand-bg-alt p-3">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault()
                    void send()
                  }
                }}
                placeholder="Ask a question..."
                disabled={pending}
                className="flex-1 rounded-xl border border-brand-section bg-brand-bg/80 px-3.5 py-2 text-xs text-brand-tertiary transition-colors placeholder:text-brand-secondary/40 focus:border-brand-primary/70 focus:outline-none disabled:opacity-50"
              />
              <button
                type="button"
                onClick={() => void send()}
                disabled={!input.trim() || pending}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-brand-dark shadow transition-colors hover:bg-brand-cta disabled:opacity-40 disabled:hover:bg-brand-primary"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-1.5 flex items-center justify-between px-1 text-[10px] text-brand-secondary/40">
              <span>Powered by C-WAD AI</span>
              <span>{status === 'unavailable' ? 'Offline Mode' : 'Ready'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
