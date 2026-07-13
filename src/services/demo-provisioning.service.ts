import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Locale } from '@/domain/shared/types'

export interface DemoConfig {
  tenantName: string
  tenantSlug: string
  tenantStatus: string
  siteName: string
  siteSlug: string
  siteType: 'business-presence' | 'lead-generation'
  defaultLocale: Locale
  enabledLocales: Locale[]
  hostname: string
}

/**
 * Provision a demo tenant with a site and domain.
 * Idempotent — checks for existing tenant before creating.
 */
export const provisionDemoTenant = async (config: DemoConfig): Promise<string> => {
  const payload = await getPayload({ config: configPromise })

  // Check if tenant already exists
  const existingTenants = await payload.find({
    collection: 'tenants',
    where: { slug: { equals: config.tenantSlug } },
    limit: 1,
  })

  let tenantId: string

  if (existingTenants.docs.length > 0) {
    tenantId = String(existingTenants.docs[0].id)
    console.log(`Tenant "${config.tenantName}" already exists, skipping creation.`)
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tenant = await (payload.create as any)({
      collection: 'tenants',
      data: {
        name: config.tenantName,
        slug: config.tenantSlug,
        status: config.tenantStatus,
        enabled: true,
      },
    })
    tenantId = String(tenant.id)
  }

  // Check if site already exists
  const existingSites = await payload.find({
    collection: 'sites',
    where: {
      and: [
        { tenant: { equals: tenantId } },
        { slug: { equals: config.siteSlug } },
      ],
    },
    limit: 1,
  })

  let siteId: string

  if (existingSites.docs.length > 0) {
    siteId = String(existingSites.docs[0].id)
    console.log(`Site "${config.siteName}" already exists, skipping creation.`)
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const site = await (payload.create as any)({
      collection: 'sites',
      data: {
        tenant: tenantId,
        name: config.siteName,
        slug: config.siteSlug,
        siteType: config.siteType,
        status: 'published',
        template: config.siteType,
        defaultLocale: config.defaultLocale,
        enabledLocales: config.enabledLocales,
      },
    })
    siteId = String(site.id)
  }

  // Create domain
  const existingDomains = await payload.find({
    collection: 'domains',
    where: { hostname: { equals: config.hostname } },
    limit: 1,
  })

  if (existingDomains.docs.length === 0 && siteId) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (payload.create as any)({
      collection: 'domains',
      data: {
        tenant: tenantId,
        site: siteId,
        hostname: config.hostname,
        type: 'baxhen-preview',
        status: 'active',
        isPrimary: true,
      },
    })
  }

  console.log(`Demo tenant "${config.tenantName}" provisioned successfully.`)
  return tenantId
}
