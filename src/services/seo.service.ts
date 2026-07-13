import type { Metadata } from 'next'
import type { Site, Page } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'
import { createCanonicalURL } from './localization.service'

export interface SEOContext {
  site: Site
  page: Page
  locale: Locale
  primaryDomain?: string
}

/**
 * Generate Next.js Metadata for a website page.
 */
export const createWebsiteSEO = (ctx: SEOContext): Metadata => {
  const { site, page, locale, primaryDomain } = ctx

  const pagePath = page.slug === 'index' ? '' : page.slug || ''
  const canonical = createCanonicalURL(primaryDomain, locale, pagePath)

  const metaTitle = (page.meta?.title as string) || (page.title as string) || site.name
  const metaDescription = (page.meta?.description as string) || site.name

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical,
    },
    robots: createRobotsDirective(site, page),
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonical,
      siteName: site.name,
      locale,
      type: 'website',
    },
  }
}

/**
 * Determine robots directives based on site and page status.
 */
export const createRobotsDirective = (
  site: Site,
  page: Page,
): Metadata['robots'] => {
  // Noindex for draft, preview, or suspended sites
  if (
    site.status === 'draft' ||
    site.status === 'preview' ||
    site.status === 'suspended'
  ) {
    return { index: false, follow: false }
  }

  // Respect page-level SEO settings
  const pageMeta = page.meta as Record<string, unknown> | undefined
  if (pageMeta?.noindex) {
    return { index: false, follow: true }
  }

  return { index: true, follow: true }
}
