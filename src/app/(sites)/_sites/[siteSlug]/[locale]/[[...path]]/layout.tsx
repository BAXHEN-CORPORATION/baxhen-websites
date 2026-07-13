import React from 'react'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface SiteLayoutProps {
  children: React.ReactNode
  params: Promise<{
    siteSlug: string
    locale: string
    path?: string[]
  }>
}

/**
 * Site-specific layout.
 *
 * Applies theme CSS variables from the resolved site.
 * Renders SiteHeader and SiteFooter (populated in Phase 6).
 * Falls back gracefully until the full View layer is implemented.
 */
export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { siteSlug, locale } = await params

  if (!siteSlug || !locale) {
    notFound()
  }

  // Phase 4: basic structure in place. Header/Footer components
  // will be wired in Phase 6 once views are created.
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--color-background, #10141a)',
        color: 'var(--color-text, #dfe2eb)',
      }}
    >
      {/* SiteHeader will render here — Phase 6 */}
      <main className="flex-1">{children}</main>
      {/* SiteFooter will render here — Phase 6 */}
    </div>
  )
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
