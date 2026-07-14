import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { SUPPORTED_LOCALES } from '@/domain/shared/types'

export default async function RootPage() {
  const heads = await headers()
  const acceptLanguage = heads.get('accept-language') || ''
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase()
  const locale = preferred && SUPPORTED_LOCALES.includes(preferred as 'pt' | 'en') ? preferred : 'en'
  redirect(`/${locale}/websites`)
}
