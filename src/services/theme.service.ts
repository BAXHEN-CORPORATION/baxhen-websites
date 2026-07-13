import type { Site } from '@/payload-types'
import type { ThemeConfig } from '@/domain/site/types'

export interface ThemeViewModel {
  cssVariables: Record<string, string>
  logo?: string
  favicon?: string
  headerStyle: string
  footerStyle: string
  buttonStyle: string
  contentWidth: string
  borderRadius: string
}

const defaultTheme: ThemeConfig = {
  borderRadius: '0.5rem',
  contentWidth: '1200px',
  headerStyle: 'default',
  footerStyle: 'default',
  buttonStyle: 'rounded',
  colors: {
    background: '#10141a',
    surface: '#181c22',
    text: '#dfe2eb',
    primary: '#3cd7ff',
    onPrimary: '#001f27',
    outline: '#859398',
    error: '#ffb4ab',
  },
}

/**
 * Resolve a site's theme into a typed ThemeViewModel.
 * Merges site-specific config with the Void Conversationalist defaults.
 */
export const resolveTheme = (site: Site): ThemeViewModel => {
  const theme = (site.theme as ThemeConfig) || {}
  const merged: ThemeConfig = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
  }

  const colors = merged.colors || defaultTheme.colors!

  return {
    cssVariables: {
      '--color-background': colors.background || defaultTheme.colors!.background!,
      '--color-surface': colors.surface || defaultTheme.colors!.surface!,
      '--color-text': colors.text || defaultTheme.colors!.text!,
      '--color-heading': colors.heading || colors.text || defaultTheme.colors!.text!,
      '--color-primary': colors.primary || defaultTheme.colors!.primary!,
      '--color-on-primary': colors.onPrimary || defaultTheme.colors!.onPrimary!,
      '--color-outline': colors.outline || defaultTheme.colors!.outline!,
      '--color-error': colors.error || defaultTheme.colors!.error!,
      '--font-heading': merged.headingFont || 'Literata, serif',
      '--font-body': merged.primaryFont || 'Hanken Grotesk, sans-serif',
      '--border-radius': merged.borderRadius || '0.5rem',
      '--content-width': merged.contentWidth || '1200px',
    },
    logo: merged.logo,
    favicon: merged.favicon,
    headerStyle: merged.headerStyle || 'default',
    footerStyle: merged.footerStyle || 'default',
    buttonStyle: merged.buttonStyle || 'rounded',
    contentWidth: merged.contentWidth || '1200px',
    borderRadius: merged.borderRadius || '0.5rem',
  }
}
