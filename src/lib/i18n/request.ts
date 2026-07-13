import { getRequestConfig } from 'next-intl/server'
import type { Locale } from '@/domain/shared/types'

/**
 * next-intl request configuration.
 * Detects locale from the URL segment and provides messages.
 */
export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as Locale

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  }
})
