import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Domain } from '@/payload-types'

/**
 * Find an active, verified domain by its normalized hostname.
 * Returns the domain with its associated site.
 */
export const findActiveDomain = async (
  hostname: string,
): Promise<(Domain & { site: NonNullable<Domain['site']> }) | null> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'domains',
    where: {
      and: [
        { hostname: { equals: hostname } },
        { status: { in: ['verified', 'active'] } },
      ],
    },
    depth: 1,
    limit: 1,
  })

  if (!result.docs.length) return null
  if (!result.docs[0].site) return null

  return result.docs[0] as Domain & { site: NonNullable<Domain['site']> }
}
