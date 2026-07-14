import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

export default async function BaxhenRoot() {
  const acceptLanguage = (await headers()).get('accept-language') || ''
  const preferred = acceptLanguage.split(',')[0]?.split('-')[0]?.toLowerCase()
  const locale = preferred === 'pt' ? 'pt' : 'en'
  redirect(`/${locale}/websites`)
}
