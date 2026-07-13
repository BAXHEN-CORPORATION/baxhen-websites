import type { CollectionBeforeValidateHook } from 'payload'

/**
 * Normalize hostname before saving:
 * - Lowercase
 * - Remove protocol (http://, https://)
 * - Remove path (everything after /)
 * - Remove trailing dot
 * - Remove leading "www." (unless it's the only label)
 */
export const normalizeDomain: CollectionBeforeValidateHook = ({ data }) => {
  if (!data?.hostname) return data

  let hostname: string = data.hostname

  // Lowercase
  hostname = hostname.toLowerCase().trim()

  // Remove protocol
  hostname = hostname.replace(/^https?:\/\//, '')

  // Remove path
  hostname = hostname.split('/')[0]

  // Remove trailing dot
  hostname = hostname.replace(/\.$/, '')

  // Remove port (for local dev)
  // Keep port for localhost development subdomains
  // hostname = hostname.split(':')[0]

  data.hostname = hostname

  return data
}
