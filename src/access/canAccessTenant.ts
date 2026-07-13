import type { Access, AccessArgs } from 'payload'

/**
 * Factory: creates an access function that verifies the user
 * has access to the tenant referenced by the given field.
 *
 * Super admins always pass. Client users must have the tenant
 * in their `tenants` relationship field.
 */
export const canAccessTenant =
  (tenantIdField: string = 'tenant'): Access =>
  ({ req, data, id }) => {
    const user = req.user as Record<string, unknown> | null
    if (!user) return false

    const roles = (user.roles as string[]) || []
    if (roles.includes('super-admin') || roles.includes('baxhen-admin')) return true

    // Client users: check tenant membership
    const userTenants = (user.tenants as Array<string | { id: string }>) || []
    const userTenantIds = userTenants.map((t) => (typeof t === 'string' ? t : t.id))

    // For create/update operations, check the data being written
    const tenantId = data?.[tenantIdField] as string | undefined
    if (tenantId) {
      return userTenantIds.includes(tenantId)
    }

    // For read operations, the multi-tenant plugin handles filtering
    return true
  }
