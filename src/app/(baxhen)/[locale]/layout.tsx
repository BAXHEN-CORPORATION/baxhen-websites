import React from 'react'
import { notFound } from 'next/navigation'
import { SUPPORTED_LOCALES } from '@/domain/shared/types'
import type { Locale } from '@/domain/shared/types'

interface BaxhenLocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function BaxhenLocaleLayout({ children, params }: BaxhenLocaleLayoutProps) {
  const { locale } = await params

  if (!SUPPORTED_LOCALES.includes(locale as Locale)) {
    notFound()
  }

  return <>{children}</>
}
