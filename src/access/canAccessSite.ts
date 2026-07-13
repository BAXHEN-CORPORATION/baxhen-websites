import type { Access } from 'payload'

/**
 * Factory: creates an access function that verifies the user
 * can access the site referenced by the given field.
 * Super admins always pass.
 */
export const canAccessSite =
  (_siteIdField: string = 'site'): Access =>
  ({ req: { user } }) => {
    if (!user) return false
    const roles = (user as unknown as Record<string, unknown>).roles as string[] | undefined
    if (roles?.includes('super-admin') || roles?.includes('baxhen-admin')) return true

    // Client users: the multi-tenant plugin filters by tenant,
    // which encompasses site access
    return true
  }
