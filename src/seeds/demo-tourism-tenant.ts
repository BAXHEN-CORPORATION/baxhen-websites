import { provisionDemoTenant } from '@/services/demo-provisioning.service'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Locale } from '@/domain/shared/types'

/**
 * Seed "Solaris Douro" — a fictional Portuguese tourism business.
 * Business-presence site with PT + EN content.
 * Idempotent: checks for existing data before creating.
 */
export const seedDemoTourismTenant = async (): Promise<string> => {
  const tenantId = await provisionDemoTenant({
    tenantName: 'Solaris Douro',
    tenantSlug: 'solaris-douro',
    tenantStatus: 'active',
    siteName: 'Solaris Douro',
    siteSlug: 'solaris-douro',
    siteType: 'business-presence',
    defaultLocale: 'pt' as Locale,
    enabledLocales: ['pt', 'en'] as Locale[],
    hostname: 'solaris-douro.localhost',
  })

  // Create demo pages
  await createDemoPages(tenantId)

  return tenantId
}

const createDemoPages = async (tenantId: string) => {
  const payload = await getPayload({ config: configPromise })

  // Find the site
  const sites = await payload.find({
    collection: 'sites',
    where: { tenant: { equals: tenantId } },
    limit: 1,
  })

  const siteId = String(sites.docs[0]?.id)
  if (!siteId) return

  const pages = [
    { title: 'Início', slug: 'index', pageType: 'standard' as const, pt: true, en: true },
    { title: 'Sobre Nós', slug: 'about', pageType: 'standard' as const, pt: true, en: true },
    { title: 'Experiências', slug: 'experiences', pageType: 'standard' as const, pt: true, en: true },
    { title: 'Galeria', slug: 'gallery', pageType: 'standard' as const, pt: true, en: true },
    { title: 'FAQ', slug: 'faq', pageType: 'standard' as const, pt: true, en: true },
    { title: 'Contacto', slug: 'contact', pageType: 'standard' as const, pt: true, en: true },
  ]

  for (const page of pages) {
    // Check if page exists
    const existing = await payload.find({
      collection: 'pages',
      where: {
        and: [
          { site: { equals: siteId } },
          { slug: { equals: page.slug } },
        ],
      },
      limit: 1,
    })

    if (existing.docs.length > 0) {
      console.log(`Page "${page.title}" already exists, skipping.`)
      continue
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload.create as any)({
      collection: 'pages',
      data: {
        tenant: tenantId,
        site: siteId,
        title: page.title,
        slug: page.slug,
        pageType: page.pageType,
        status: 'published',
        layout: [],
        publishedAt: new Date().toISOString(),
      },
      locale: 'pt',
    })

    console.log(`Created page: ${page.title} (pt)`)
  }
}
