import type { SiteType, SiteStatus, Locale } from '@/domain/shared/types'

export interface ThemeConfig {
  logo?: string
  favicon?: string
  primaryFont?: string
  headingFont?: string
  borderRadius?: string
  contentWidth?: string
  headerStyle?: 'default' | 'transparent' | 'centered'
  footerStyle?: 'default' | 'minimal'
  buttonStyle?: 'rounded' | 'pill' | 'sharp'
  sectionVariants?: Record<string, 'light' | 'dark'>
  colors?: {
    background?: string
    surface?: string
    text?: string
    heading?: string
    primary?: string
    onPrimary?: string
    outline?: string
    error?: string
  }
}

export interface ContactConfig {
  email?: string
  phone?: string
  whatsapp?: string
  address?: string
}

export interface SocialLink {
  platform: string
  url: string
}

export interface AnalyticsConfig {
  measurementId?: string
  provider?: 'google-analytics' | 'none'
}

export interface SEODefaults {
  titleTemplate?: string
  description?: string
  socialImage?: string
  robots?: string
}

export interface SiteData {
  tenant: string | { id: string }
  name: string
  slug: string
  siteType: SiteType
  status: SiteStatus
  template: string
  defaultLocale: Locale
  enabledLocales: Locale[]
  primaryDomain?: string
  previewDomain?: string
  theme?: ThemeConfig
  contactConfiguration?: ContactConfig
  socialLinks?: SocialLink[]
  analyticsConfiguration?: AnalyticsConfig
  seoDefaults?: SEODefaults
  launchDate?: string
}
