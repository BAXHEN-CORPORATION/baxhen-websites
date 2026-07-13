import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Logo } from '@/views/components/Logo'
import { LanguageSwitcher } from '@/views/components/LanguageSwitcher'
import { SiteFooter } from '@/views/layouts/SiteFooter'
import { BlockRenderer } from '@/views/block-renderer/block-renderer'
import type { SectionViewModel } from '@/views/block-renderer/block-renderer.types'
import type { Locale } from '@/domain/shared/types'

interface LeadGenerationTemplateProps {
  siteName: string
  logo?: string
  sections: SectionViewModel[]
  currentLocale: Locale
  enabledLocales: Locale[]
  onLocaleChange: (locale: Locale) => void
}

export const LeadGenerationTemplate: React.FC<LeadGenerationTemplateProps> = ({
  siteName,
  logo,
  sections,
  currentLocale,
  enabledLocales,
  onLocaleChange,
}) => {
  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-opacity-90 backdrop-blur" style={{ backgroundColor: 'var(--color-background, #10141a)', borderColor: 'var(--color-outline, #859398)' }}>
        <Container>
          <div className="flex items-center justify-between py-4">
            <Logo name={siteName} src={logo} href="/" />
            <LanguageSwitcher currentLocale={currentLocale} enabledLocales={enabledLocales} onLocaleChange={onLocaleChange} />
          </div>
        </Container>
      </header>
      <main>
        <BlockRenderer sections={sections} />
      </main>
      <SiteFooter siteName={siteName} />
    </>
  )
}
