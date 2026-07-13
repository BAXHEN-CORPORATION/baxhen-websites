import type { CollectionBeforeChangeHook } from 'payload'

/**
 * Prevents reassigning a document to a tenant the current user cannot access.
 * Factory takes the field name that holds the tenant reference.
 */
export const protectTenantRelationship =
  (tenantField: string = 'tenant'): CollectionBeforeChangeHook =>
  ({ req, data, originalDoc }) => {
    const user = req.user as Record<string, unknown> | null
    if (!user) return data

    const roles = (user.roles as string[]) || []
    // Super admins and baxhen admins can reassign
    if (roles.includes('super-admin') || roles.includes('baxhen-admin')) return data

    // For updates, check that the tenant isn't being changed
    if (originalDoc) {
      const originalTenantId =
        typeof originalDoc[tenantField] === 'string'
          ? originalDoc[tenantField]
          : (originalDoc[tenantField] as { id: string })?.id

      const newTenantId =
        typeof data?.[tenantField] === 'string'
          ? data[tenantField]
          : (data?.[tenantField] as { id: string })?.id

      if (originalTenantId && newTenantId && originalTenantId !== newTenantId) {
        throw new Error('You do not have permission to change the tenant assignment.')
      }
    }

    return data
  }
