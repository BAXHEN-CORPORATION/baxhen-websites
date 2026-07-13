import type { Site } from '@/payload-types'
import { resolveTheme } from '@/services/theme.service'

export type { ThemeViewModel } from '@/services/theme.service'

/**
 * Transform site theme config into CSS custom properties.
 */
export const toThemeViewModel = (site: Site) => {
  return resolveTheme(site)
}
