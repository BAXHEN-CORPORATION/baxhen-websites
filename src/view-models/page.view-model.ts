import type { Page, Site } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'

export interface PageViewModel {
  title: string
  slug: string
  pageType: string
  layout: Array<{
    blockType: string
    [key: string]: unknown
  }>
  seo: {
    title: string
    description: string
    image?: string
    noindex: boolean
  }
}

/**
 * Transform a Payload Page into a presentation-ready PageViewModel.
 * Resolves localized values and applies safe defaults.
 */
export const toPageViewModel = (
  page: Page,
  site: Site,
  locale: Locale,
): PageViewModel => {
  const meta = page.meta as Record<string, unknown> | undefined

  return {
    title: (page.title as string) || site.name,
    slug: page.slug || '',
    pageType: (page.pageType as string) || 'standard',
    layout: (page.layout as Array<{ blockType: string; [key: string]: unknown }>) || [],
    seo: {
      title: (meta?.title as string) || (page.title as string) || site.name,
      description: (meta?.description as string) || '',
      image: typeof meta?.image === 'string' ? (meta.image as string) : undefined,
      noindex: (meta?.noindex as boolean) || false,
    },
  }
}
