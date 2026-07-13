import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Site } from '@/payload-types'

/**
 * Find a site by its slug, scoped to a specific tenant.
 */
export const findSiteBySlug = async (
  siteSlug: string,
): Promise<Site | null> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'sites',
    where: {
      and: [
        { slug: { equals: siteSlug } },
      ],
    },
    depth: 0,
    limit: 1,
    overrideAccess: true,
  })

  return result.docs[0] || null
}

/**
 * Find site settings (theme, contact, social, SEO defaults) for a site.
 */
export const findSiteSettings = async (
  siteId: string,
): Promise<Site | null> => {
  const payload = await getPayload({ config: configPromise })

  const doc = await payload.findByID({
    collection: 'sites',
    id: siteId,
    depth: 0,
  })

  return doc || null
}
