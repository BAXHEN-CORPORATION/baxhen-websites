import React from 'react'
import { SiteHeader } from '@/views/layouts/SiteHeader'
import { SiteFooter } from '@/views/layouts/SiteFooter'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'
import type { Locale } from '@/domain/shared/types'

interface BusinessPresenceTemplateProps {
  siteName: string
  logo?: string
  navigation: NavigationItemViewModel[]
  currentLocale: Locale
  enabledLocales: Locale[]
  children?: React.ReactNode
  footerNavigation?: NavigationItemViewModel[]
  socialLinks?: Array<{ platform: string; url: string }>
}

export const BusinessPresenceTemplate: React.FC<BusinessPresenceTemplateProps> = ({
  siteName, logo, navigation, currentLocale, enabledLocales, children, footerNavigation, socialLinks,
}) => (
  <>
    <SiteHeader siteName={siteName} logo={logo} navigation={navigation} currentLocale={currentLocale} enabledLocales={enabledLocales} />
    <main>{children}</main>
    <SiteFooter siteName={siteName} navigation={footerNavigation || navigation} socialLinks={socialLinks} />
  </>
)
