import { findPageByPath } from '@/repositories/page.repository'
import { findNavigation } from '@/repositories/navigation.repository'
import { PageNotFoundError } from '@/domain/errors'
import type { Site, Page } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'

export interface WebsitePageContext {
  site: Site
  page: Page
  navigation: ReturnType<typeof findNavigation> extends Promise<infer T> ? T : never
}

/**
 * Build the complete data context needed to render a website page:
 * - The resolved page (by path + locale)
 * - The site navigation
 * - The site settings
 */
export const buildWebsitePage = async (
  site: Site,
  locale: Locale,
  path: string,
): Promise<WebsitePageContext> => {
  const siteId = typeof site.id === 'string' ? site.id : String(site.id)

  // Resolve the page
  const page = await findPageByPath(siteId, locale, path || 'index')
  if (!page) {
    throw new PageNotFoundError(path)
  }

  // Resolve navigation
  const navigation = await findNavigation(siteId, locale)

  return {
    site,
    page,
    navigation,
  }
}
