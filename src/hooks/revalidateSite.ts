import type { CollectionAfterChangeHook } from 'payload'

/**
 * Revalidate site content when a site's settings change.
 * Tags by site slug so only that site's content is revalidated.
 *
 * Full revalidation will be wired in Phase 4 when the site routing is implemented.
 */
export const revalidateSite: CollectionAfterChangeHook = ({ doc }) => {
  if (doc?.slug) {
    // revalidateTag and revalidatePath will be called from the
    // site route handler once the site routing system is in place.
    // For now, this hook is a placeholder.
    void doc.slug
  }
  return doc
}
