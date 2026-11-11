import type { PrivateStore } from './service'

export async function getCaptionStore(): Promise<PrivateStore> {
  const [{ getPayload }, { default: config }] = await Promise.all([
    import('payload'),
    import('@payload-config'),
  ])
  const payload = await getPayload({ config })
  // Payload's configured default DatabaseKVAdapter persists in PostgreSQL and
  // denies public collection access. Only this server uses the scoped keys.
  return payload.kv
}
