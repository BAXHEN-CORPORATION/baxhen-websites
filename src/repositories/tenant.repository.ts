import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Tenant, Site } from '@/payload-types'

/**
 * Find a tenant by its slug.
 */
export const findTenant = async (slug: string): Promise<Tenant | null> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'tenants',
    where: {
      and: [
        { slug: { equals: slug } },
        { enabled: { equals: true } },
      ],
    },
    limit: 1,
  })

  return result.docs[0] || null
}

/**
 * Find all sites belonging to a tenant.
 */
export const findTenantSites = async (
  tenantId: string,
): Promise<Site[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'sites',
    where: {
      tenant: { equals: tenantId },
    },
    limit: 50,
  })

  return result.docs
}
