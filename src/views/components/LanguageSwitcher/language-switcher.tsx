'use client'

import React from 'react'
import type { Locale } from '@/domain/shared/types'

interface LanguageSwitcherProps {
  currentLocale: Locale
  enabledLocales: Locale[]
  onLocaleChange: (locale: Locale) => void
}

const localeLabels: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  enabledLocales,
  onLocaleChange,
}) => {
  if (enabledLocales.length <= 1) return null

  return (
    <div className="flex items-center gap-1" role="group" aria-label="Language Switcher">
      {enabledLocales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => onLocaleChange(locale)}
          className={`px-3 py-1.5 text-sm font-medium rounded-[var(--border-radius,0.5rem)] transition-colors min-h-[44px] min-w-[44px] ${
            currentLocale === locale
              ? 'bg-[var(--color-primary,#3cd7ff)] text-[var(--color-on-primary,#001f27)]'
              : 'text-[var(--color-text,#dfe2eb)] hover:bg-[var(--color-surface,#181c22)]'
          }`}
          aria-current={currentLocale === locale ? 'true' : undefined}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  )
}
