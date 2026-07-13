import type { TenantStatus } from '@/domain/shared/types'

export interface TenantData {
  name: string
  slug: string
  status: TenantStatus
  client?: string | { id: string }
  enabled: boolean
}
