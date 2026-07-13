import type { SubmissionStatus, Locale } from '@/domain/shared/types'

export interface ConsentRecord {
  marketing?: boolean
  privacyPolicy?: boolean
  termsOfService?: boolean
}

export interface UTMData {
  source?: string
  medium?: string
  campaign?: string
}

export interface FormSubmissionData {
  tenant: string | { id: string }
  site: string | { id: string }
  form: string | { id: string }
  submittedData: Record<string, unknown>
  submittedAt: string
  sourceURL?: string
  locale: Locale
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  consent?: ConsentRecord
  status: SubmissionStatus
}
