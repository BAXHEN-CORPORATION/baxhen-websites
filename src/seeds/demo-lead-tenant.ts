import { provisionDemoTenant } from '@/services/demo-provisioning.service'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Locale } from '@/domain/shared/types'

/**
 * Seed "Consultoria Nexus" — a fictional service/consulting business.
 * Lead-generation site with PT + EN content.
 * Idempotent: checks for existing data before creating.
 */
export const seedDemoLeadTenant = async (): Promise<string> => {
  const tenantId = await provisionDemoTenant({
    tenantName: 'Consultoria Nexus',
    tenantSlug: 'consultoria-nexus',
    tenantStatus: 'active',
    siteName: 'Consultoria Nexus',
    siteSlug: 'consultoria-nexus',
    siteType: 'lead-generation',
    defaultLocale: 'pt' as Locale,
    enabledLocales: ['pt', 'en'] as Locale[],
    hostname: 'nexus.localhost',
  })

  await createDemoLandingPage(tenantId)

  return tenantId
}

const createDemoLandingPage = async (tenantId: string) => {
  const payload = await getPayload({ config: configPromise })

  const sites = await payload.find({
    collection: 'sites',
    where: { tenant: { equals: tenantId } },
    limit: 1,
  })

  const siteId = String(sites.docs[0]?.id)
  if (!siteId) return

  const existing = await payload.find({
    collection: 'pages',
    where: {
      and: [
        { site: { equals: siteId } },
        { slug: { equals: 'index' } },
      ],
    },
    limit: 1,
  })

  if (existing.docs.length > 0) {
    console.log('Nexus landing page already exists, skipping.')
    return
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (payload.create as any)({
    collection: 'pages',
    data: {
      tenant: tenantId,
      site: siteId,
      title: 'Transforme o seu negócio',
      slug: 'index',
      pageType: 'landing',
      status: 'published',
      layout: [],
      publishedAt: new Date().toISOString(),
    },
    locale: 'pt',
  })

  console.log('Created Nexus landing page (pt)')
}
