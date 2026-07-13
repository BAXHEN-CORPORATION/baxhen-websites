import { notFound } from 'next/navigation'
import { resolveWebsiteRequest } from '@/services/website-resolution.service'
import { buildWebsitePage } from '@/services/page-rendering.service'
import { resolveLocale } from '@/services/localization.service'
import { resolveTheme } from '@/services/theme.service'
import { SiteNotFoundError, SiteSuspendedError, PageNotFoundError, UnsupportedLocaleError } from '@/domain/errors'
import type { Metadata } from 'next'
import { createWebsiteSEO } from '@/services/seo.service'
import type { Locale } from '@/domain/shared/types'

interface SitePageProps {
  params: Promise<{
    siteSlug: string
    locale: string
    path?: string[]
  }>
}

/**
 * Main website page route.
 * Resolves hostname → site → locale → page → renders template.
 */
export default async function SitePage({ params }: SitePageProps) {
  const { siteSlug, locale, path } = await params

  try {
    const resolvedLocale = locale as Locale
    const pagePath = path?.join('/') || 'index'

    // Phase 4: Basic site resolution works.
    // Full ViewModel + Template rendering will be wired in Phase 5-6.
    // For now, render a simple placeholder.
    return (
      <div className="container mx-auto px-4 py-16" style={{ maxWidth: 'var(--content-width, 1200px)' }}>
        <h1 className="text-4xl font-light mb-4">Site: {siteSlug}</h1>
        <p className="text-lg opacity-70">
          Locale: {resolvedLocale} &middot; Page: {pagePath}
        </p>
        <p className="mt-8 text-sm opacity-50">
          Full rendering will be wired in Phase 5-6 with ViewModels, templates, and sections.
        </p>
      </div>
    )
  } catch (error) {
    if (error instanceof SiteNotFoundError || error instanceof PageNotFoundError || error instanceof UnsupportedLocaleError) {
      notFound()
    }
    if (error instanceof SiteSuspendedError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-light mb-4">Site Temporarily Unavailable</h1>
            <p className="opacity-70">This site is currently suspended. Please check back later.</p>
          </div>
        </div>
      )
    }
    throw error
  }
}

/**
 * Generate metadata for the website page.
 * Full SEO implementation in Phase 5.
 */
export async function generateMetadata({ params }: SitePageProps): Promise<Metadata> {
  const { siteSlug, locale } = await params

  return {
    title: `${siteSlug} — Baxhen`,
    description: `Website for ${siteSlug}`,
  }
}
