import type { Locale } from '@/domain/shared/types'
import { findPagesForNavigation } from './page.repository'

export interface NavigationItem {
  label: string
  href: string
  slug: string
}

/**
 * Build navigation from published pages for a site.
 * Returns an array of navigation items sorted by page slug.
 */
export const findNavigation = async (
  siteId: string,
  locale: Locale,
): Promise<NavigationItem[]> => {
  const pages = await findPagesForNavigation(siteId, locale)

  return pages
    .filter((page) => page.slug && page.slug !== 'home')
    .map((page) => ({
      label: (page.navigationLabel as string) || (page.title as string) || page.slug || '',
      href: `/${page.slug === 'index' ? '' : page.slug}`,
      slug: page.slug || '',
    }))
}
