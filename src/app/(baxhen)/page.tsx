import { redirect } from 'next/navigation'
import { headers } from 'next/headers'
import { SUPPORTED_LOCALES } from '@/domain/shared/types'

export const dynamic = 'force-dynamic'

export default async function BaxhenRoot() {
  const acceptLanguage = (await headers()).get('accept-language') || ''
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase()
  const locale = preferred && SUPPORTED_LOCALES.includes(preferred as 'pt' | 'en') ? preferred : 'en'
  redirect(`/${locale}/websites`)
}
