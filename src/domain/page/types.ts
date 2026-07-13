import type { PageType, PageStatus, Locale } from '@/domain/shared/types'

export interface PageData {
  tenant: string | { id: string }
  site: string | { id: string }
  title: string
  slug: string
  path: string
  status: PageStatus
  pageType: PageType
  navigationLabel?: string
  layout?: unknown[] // Payload blocks — typed by the block renderer
  seo?: SEOPageData
  publishedAt?: string
}

export interface SEOPageData {
  title?: string
  description?: string
  image?: string | { id: string }
  noindex?: boolean
}
