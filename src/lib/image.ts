/**
 * Build a Netlify Image CDN URL so full-resolution source photos are never
 * shipped to the browser. See https://docs.netlify.com/build/image-cdn/overview/
 */
export function cdnImage(
  url: string,
  options: {
    w?: number
    h?: number
    fit?: 'contain' | 'cover' | 'fill'
    position?: 'center' | 'top' | 'bottom' | 'left' | 'right'
    fm?: 'avif' | 'webp' | 'jpg' | 'png'
    q?: number
  } = {},
) {
  const params = new URLSearchParams({ url })
  if (options.w) params.set('w', String(options.w))
  if (options.h) params.set('h', String(options.h))
  if (options.fit) params.set('fit', options.fit)
  if (options.position) params.set('position', options.position)
  params.set('fm', options.fm ?? 'webp')
  if (options.q) params.set('q', String(options.q))
  return `/.netlify/images?${params.toString()}`
}
