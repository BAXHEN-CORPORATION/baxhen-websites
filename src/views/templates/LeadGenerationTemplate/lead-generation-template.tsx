import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Logo } from '@/views/components/Logo'
import { LanguageSwitcher } from '@/views/components/LanguageSwitcher'
import { SiteFooter } from '@/views/layouts/SiteFooter'
import type { Locale } from '@/domain/shared/types'

interface LeadGenerationTemplateProps {
  siteName: string
  logo?: string
  currentLocale: Locale
  enabledLocales: Locale[]
  children?: React.ReactNode
}

export const LeadGenerationTemplate: React.FC<LeadGenerationTemplateProps> = ({
  siteName, logo, currentLocale, enabledLocales, children,
}) => (
  <>
    <header className="sticky top-0 z-50 border-b bg-opacity-90 backdrop-blur" style={{ backgroundColor: 'var(--color-background, #10141a)', borderColor: 'var(--color-outline, #859398)' }}>
      <Container><div className="flex items-center justify-between py-4"><Logo name={siteName} src={logo} href="/" /><LanguageSwitcher currentLocale={currentLocale} enabledLocales={enabledLocales} /></div></Container>
    </header>
    <main>{children}</main>
    <SiteFooter siteName={siteName} />
  </>
)
