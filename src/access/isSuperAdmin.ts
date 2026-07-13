import type { Access, User } from 'payload'

/**
 * Only users with the "super-admin" role can pass.
 */
export const isSuperAdmin: Access = ({ req: { user } }) => {
  if (!user) return false
  const roles = (user as User & { roles?: string[] }).roles
  return Array.isArray(roles) && roles.includes('super-admin')
}
