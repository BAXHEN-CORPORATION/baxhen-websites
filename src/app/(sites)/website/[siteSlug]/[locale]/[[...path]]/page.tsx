import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import { resolveWebsiteRequest } from '@/services/website-resolution.service'
import { getSiteContent } from '@/repositories/site-content.repository'
import { toSiteViewModel } from '@/view-models/site.view-model'
import { getSitePage } from '@/sites'
import { SiteNotFoundError, SiteSuspendedError, UnsupportedLocaleError } from '@/domain/errors'
import { BusinessPresenceTemplate } from '@/views/templates/BusinessPresenceTemplate'
import { LeadGenerationTemplate } from '@/views/templates/LeadGenerationTemplate'
import { MinimalTemplate } from '@/views/templates/MinimalTemplate'
import type { Locale } from '@/domain/shared/types'

interface SitePageProps { params: Promise<{ siteSlug: string; locale: string; path?: string[] }> }

export default async function SitePage({ params }: SitePageProps) {
  const { siteSlug, locale, path } = await params
  const resolvedLocale = locale as Locale
  const pagePath = path?.[0] || 'home'

  try {
    const heads = await headers()
    const hostname = heads.get('x-baxhen-hostname') || `${siteSlug}.localhost`
    const { site } = await resolveWebsiteRequest(hostname)
    if (!site?.id) throw new SiteNotFoundError(hostname)

    const siteVM = toSiteViewModel(site)
    const content = await getSiteContent(site.slug || siteSlug, resolvedLocale)
    const PageComponent = getSitePage(site.slug || siteSlug, pagePath)
    if (!PageComponent) notFound()

    const Template = site.slug === 'falcao-mudancas' ? MinimalTemplate
      : siteVM.siteType === 'lead-generation' ? LeadGenerationTemplate
      : BusinessPresenceTemplate

    return (
      <Template siteName={siteVM.name} logo={siteVM.theme.logo} navigation={[]} currentLocale={resolvedLocale} enabledLocales={siteVM.enabledLocales}>
        <PageComponent content={content} />
      </Template>
    )
  } catch (error) {
    if (error instanceof SiteNotFoundError || error instanceof SiteSuspendedError || error instanceof UnsupportedLocaleError) notFound()
    throw error
  }
}
