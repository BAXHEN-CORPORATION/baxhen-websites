import type { Access } from 'payload'

/**
 * User must have "client-admin" role or higher.
 */
export const isClientAdmin: Access = ({ req: { user } }) => {
  if (!user) return false
  const roles = (user as unknown as Record<string, unknown>).roles as string[] | undefined
  if (!roles) return false
  return roles.some((r) =>
    ['super-admin', 'baxhen-admin', 'baxhen-editor', 'client-admin'].includes(r),
  )
}
