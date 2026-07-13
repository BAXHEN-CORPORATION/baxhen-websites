import React from 'react'
import { SiteHeader } from '@/views/layouts/SiteHeader'
import { SiteFooter } from '@/views/layouts/SiteFooter'
import { BlockRenderer } from '@/views/block-renderer/block-renderer'
import type { SectionViewModel } from '@/views/block-renderer/block-renderer.types'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'
import type { Locale } from '@/domain/shared/types'

interface BusinessPresenceTemplateProps {
  siteName: string
  logo?: string
  navigation: NavigationItemViewModel[]
  sections: SectionViewModel[]
  currentLocale: Locale
  enabledLocales: Locale[]
  onLocaleChange: (locale: Locale) => void
  footerNavigation?: NavigationItemViewModel[]
  socialLinks?: Array<{ platform: string; url: string }>
}

export const BusinessPresenceTemplate: React.FC<BusinessPresenceTemplateProps> = ({
  siteName,
  logo,
  navigation,
  sections,
  currentLocale,
  enabledLocales,
  onLocaleChange,
  footerNavigation,
  socialLinks,
}) => {
  return (
    <>
      <SiteHeader
        siteName={siteName}
        logo={logo}
        navigation={navigation}
        currentLocale={currentLocale}
        enabledLocales={enabledLocales}
        onLocaleChange={onLocaleChange}
      />
      <main>
        <BlockRenderer sections={sections} />
      </main>
      <SiteFooter
        siteName={siteName}
        navigation={footerNavigation || navigation}
        socialLinks={socialLinks}
      />
    </>
  )
}
