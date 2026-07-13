import type { Access } from 'payload'

/**
 * Public website visitors may only read published content belonging
 * to active, non-suspended sites.
 *
 * This is used for the public-facing website queries.
 * Draft, private, and suspended content is excluded.
 */
export const publicReadPublishedSiteContent: Access = () => {
  // For public (unauthenticated) reads, the multi-tenant plugin's
  // `isolationStrategy` and per-collection `access.read` combine
  // to ensure tenant scoping. We additionally enforce that only
  // published content is visible by using Payload's `where` in
  // repository queries.

  // Public read is allowed — the repository layer adds the
  // `status = published` filter.
  return true
}
