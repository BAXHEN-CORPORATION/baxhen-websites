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

export default async function SiteLayout({ children, params }: SiteLayoutProps) {
  const { siteSlug, locale } = await params

  if (!siteSlug || !locale) {
    notFound()
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--color-background, #10141a)',
        color: 'var(--color-text, #dfe2eb)',
      }}
    >
      <main className="flex-1">{children}</main>
    </div>
  )
}

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}
