import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { SiteContent as SiteContentType } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'

export const getSiteContent = async (siteSlug: string, locale: Locale): Promise<Record<string, unknown>> => {
  const payload = await getPayload({ config: configPromise })

  const sites = await payload.find({ collection: 'sites', where: { slug: { equals: siteSlug } }, limit: 1, overrideAccess: true })
  const siteId = String(sites.docs[0]?.id)
  if (!siteId) return {}

  const result = await payload.find({
    collection: 'site-content',
    where: { and: [{ site: { equals: siteId } }, { locale: { equals: locale } }] },
    limit: 1,
    overrideAccess: true,
  })

  const doc = result.docs[0] as SiteContentType | undefined
  return (doc?.content as Record<string, unknown>) || {}
}
