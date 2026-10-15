/**
 * Portraits morph between their thumbnail and expanded positions via the View
 * Transition API where the browser supports it; elsewhere the state just
 * changes instantly.
 */
export function portraitTransitionName(email: string) {
  return `team-portrait-${email.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`
}

export function cardPortraitTransitionName(email: string) {
  return `team-card-portrait-${email.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`
}

export function withViewTransition(update: () => void) {
  const allowed =
    typeof window === 'undefined' ||
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const doc = typeof document === 'undefined' ? null : document

  if (allowed && doc?.startViewTransition) {
    try {
      doc.startViewTransition(update)
      return
    } catch {
      // Fall through to an untransitioned update.
    }
  }

  update()
}
