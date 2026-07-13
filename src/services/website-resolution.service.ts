import { findActiveDomain } from '@/repositories/domain.repository'
import { SiteNotFoundError, SiteSuspendedError } from '@/domain/errors'
import type { Domain, Site } from '@/payload-types'

export interface ResolvedWebsite {
  domain: Domain
  site: Site
  siteSlug: string
}

/**
 * Resolve an incoming hostname to a website context.
 *
 * Flow:
 * 1. Look up active domain → site
 * 2. Validate site status
 * 3. Return resolved website context
 */
export const resolveWebsiteRequest = async (
  hostname: string,
): Promise<ResolvedWebsite> => {
  // Normalize hostname
  const normalizedHostname = hostname.toLowerCase().trim()

  // Look up domain
  const domain = await findActiveDomain(normalizedHostname)
  if (!domain) {
    throw new SiteNotFoundError(normalizedHostname)
  }

  // domain.site is populated with depth: 1 from the repository
  const siteData = domain.site as unknown as Site

  if (!siteData || !siteData.slug) {
    throw new SiteNotFoundError(normalizedHostname)
  }

  // Validate site status
  if (siteData.status === 'suspended') {
    throw new SiteSuspendedError(siteData.slug)
  }

  if (siteData.status === 'archived' || siteData.status === 'draft') {
    throw new SiteNotFoundError(normalizedHostname)
  }

  return {
    domain,
    site: siteData,
    siteSlug: siteData.slug,
  }
}
