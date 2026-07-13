import type { Site } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'
import { resolveTheme } from '@/services/theme.service'
import type { ThemeViewModel } from '@/services/theme.service'

export interface SiteViewModel {
  name: string
  slug: string
  siteType: string
  defaultLocale: Locale
  enabledLocales: Locale[]
  theme: ThemeViewModel
  primaryDomain?: string
}

/**
 * Transform a Payload Site into a presentation-ready SiteViewModel.
 */
export const toSiteViewModel = (site: Site): SiteViewModel => {
  return {
    name: site.name,
    slug: site.slug || '',
    siteType: (site.siteType as string) || 'business-presence',
    defaultLocale: (site.defaultLocale as Locale) || 'pt',
    enabledLocales: (site.enabledLocales as Locale[]) || ['pt'],
    theme: resolveTheme(site),
    primaryDomain: site.primaryDomain as string | undefined,
  }
}
