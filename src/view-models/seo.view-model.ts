import type { Metadata } from 'next'
import type { Site, Page } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'
import { createWebsiteSEO as buildSEO } from '@/services/seo.service'

export interface SEOViewModel {
  title: string
  description: string
  canonical: string
  ogImage?: string
  robots: Metadata['robots']
  alternates: Metadata['alternates']
}

/**
 * Transform site + page into a complete SEO ViewModel for generateMetadata().
 */
export const toSEOViewModel = (
  site: Site,
  page: Page,
  locale: Locale,
): SEOViewModel => {
  const seo = buildSEO({
    site,
    page,
    locale,
    primaryDomain: site.primaryDomain as string | undefined,
  })

  return {
    title: (seo.title as string) || site.name,
    description: seo.description || '',
    canonical: seo.alternates?.canonical?.toString() || '',
    ogImage: (() => {
      const images = seo.openGraph?.images
      if (!images) return undefined
      const first = Array.isArray(images) ? images[0] : images
      return typeof first === 'string' ? first : undefined
    })(),
    robots: seo.robots,
    alternates: seo.alternates,
  }
}
