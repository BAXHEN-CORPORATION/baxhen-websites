import { getPayload as getPayloadBase } from 'payload'
import configPromise from '@payload-config'

/**
 * Thin wrapper around Payload's getPayload with our config pre-loaded.
 * Use this in repositories instead of importing config directly.
 */
export const getPayload = () => getPayloadBase({ config: configPromise })
