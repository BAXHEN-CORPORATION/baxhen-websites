import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Logo } from '@/views/components/Logo'
import { NavigationMenu } from '@/views/components/NavigationMenu'
import { MobileNavigation } from '@/views/components/MobileNavigation'
import { LanguageSwitcher } from '@/views/components/LanguageSwitcher'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'
import type { Locale } from '@/domain/shared/types'

interface SiteHeaderProps {
  siteName: string
  logo?: string
  navigation: NavigationItemViewModel[]
  currentLocale: Locale
  enabledLocales: Locale[]
}

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  siteName,
  logo,
  navigation,
  currentLocale,
  enabledLocales,
}) => {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        backgroundColor: 'var(--color-background, #10141a)',
        borderColor: 'var(--color-outline, #859398)',
      }}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Logo name={siteName} src={logo} href="/" />
          <NavigationMenu items={navigation} />
          <div className="flex items-center gap-4">
            <LanguageSwitcher
              currentLocale={currentLocale}
              enabledLocales={enabledLocales}
            />
            <MobileNavigation items={navigation} />
          </div>
        </div>
      </Container>
    </header>
  )
}
