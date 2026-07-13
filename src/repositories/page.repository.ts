import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Page } from '@/payload-types'
import type { Locale } from '@/domain/shared/types'

/**
 * Find a published page by path within a site and locale.
 * Returns the page document with its localized layout.
 */
export const findPageByPath = async (
  siteId: string,
  locale: Locale,
  path: string,
): Promise<Page | null> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    locale,
    where: {
      and: [
        { site: { equals: siteId } },
        { slug: { equals: path } },
        { status: { equals: 'published' } },
      ],
    },
    depth: 1,
    limit: 1,
  })

  return result.docs[0] || null
}

/**
 * Find all published pages for a site in the given locale.
 * Used for navigation generation.
 */
export const findPagesForNavigation = async (
  siteId: string,
  locale: Locale,
): Promise<Page[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    locale,
    where: {
      and: [
        { site: { equals: siteId } },
        { status: { equals: 'published' } },
      ],
    },
    depth: 0,
    sort: 'slug',
    limit: 100,
  })

  return result.docs
}

/**
 * Find all published pages for a site across all locales.
 */
export const findPublishedPages = async (
  siteId: string,
  locale: Locale,
): Promise<Page[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    locale,
    where: {
      and: [
        { site: { equals: siteId } },
        { status: { equals: 'published' } },
      ],
    },
    depth: 1,
    sort: 'slug',
    limit: 100,
  })

  return result.docs
}
