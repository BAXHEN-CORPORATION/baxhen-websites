import type { Site } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'
import { UnsupportedLocaleError } from '@/domain/errors'
import { serverEnv } from '@/lib/environment'

/**
 * Determine which locales are enabled for a given site.
 */
export const determineEnabledLocales = (site: Site): Locale[] => {
  const enabled = site.enabledLocales as Locale[] | undefined
  if (enabled && enabled.length > 0) return enabled
  return [site.defaultLocale as Locale || serverEnv.BAXHEN_DEFAULT_LOCALE]
}

/**
 * Resolve the best locale from a request, given a site's configuration.
 *
 * Fallback chain:
 * 1. Requested locale (if enabled for the site)
 * 2. Site's default locale
 * 3. Platform default locale
 */
export const resolveLocale = (
  requestedLocale: string | undefined,
  site: Site,
): Locale => {
  const enabledLocales = determineEnabledLocales(site)
  const normalized = (requestedLocale?.toLowerCase() || site.defaultLocale) as Locale

  if (enabledLocales.includes(normalized)) {
    return normalized as Locale
  }

  // Fall back to site default
  const defaultLocale = site.defaultLocale as Locale
  if (enabledLocales.includes(defaultLocale)) {
    return defaultLocale
  }

  throw new UnsupportedLocaleError(requestedLocale)
}

/**
 * Generate alternate-language URLs for a page.
 */
export const getAlternateLanguageURLs = (
  siteSlug: string,
  path: string,
  enabledLocales: Locale[],
): Record<string, string> => {
  const urls: Record<string, string> = {}
  for (const locale of enabledLocales) {
    urls[locale] = `/${locale}${path === 'index' ? '' : '/' + path}`
  }
  return urls
}

/**
 * Create a canonical URL for a page within a site.
 */
export const createCanonicalURL = (
  primaryDomain: string | undefined,
  locale: Locale,
  path: string,
): string => {
  const domain = primaryDomain || 'localhost:3000'
  const protocol = domain.includes('localhost') ? 'http' : 'https'
  return `${protocol}://${domain}/${locale}${path === 'index' ? '' : '/' + path}`
}
