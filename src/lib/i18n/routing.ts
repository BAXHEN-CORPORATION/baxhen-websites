import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/domain/shared/types'

/**
 * Locale routing configuration for next-intl.
 * Portuguese is the default locale.
 */
export const routing = defineRouting({
  locales: SUPPORTED_LOCALES as unknown as string[],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
})

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
