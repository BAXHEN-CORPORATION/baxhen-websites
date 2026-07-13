import { findForm, createFormSubmission } from '@/repositories/form.repository'
import { InvalidFormSubmissionError } from '@/domain/errors'
import type { Locale, SubmissionStatus } from '@/domain/shared/types'
import type { ConsentRecord } from '@/domain/forms/types'

export interface FormSubmissionInput {
  formId: string
  tenantId: string
  siteId: string
  data: Record<string, unknown>
  sourceURL?: string
  locale: Locale
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  consent?: ConsentRecord
}

export interface FormSubmissionResult {
  success: boolean
  message: string
  submissionId?: string
}

/**
 * Process a form submission:
 * 1. Validate the form exists
 * 2. Validate required fields (basic)
 * 3. Apply anti-spam check (placeholder)
 * 4. Record consent
 * 5. Store submission
 * 6. Return safe success result
 */
export const submitLeadForm = async (
  input: FormSubmissionInput,
): Promise<FormSubmissionResult> => {
  // 1. Validate form exists
  const form = await findForm(input.formId)
  if (!form) {
    throw new InvalidFormSubmissionError('Form not found')
  }

  // 2. Basic validation — at minimum, data should not be empty
  if (!input.data || Object.keys(input.data).length === 0) {
    throw new InvalidFormSubmissionError('No form data provided')
  }

  // 3. Anti-spam check placeholder — Phase 7 will integrate real check
  // const isSpam = await checkSpam(input)

  // 4. Consent must be recorded
  const status: SubmissionStatus = 'new'

  // 5. Store submission
  const submission = await createFormSubmission({
    tenant: input.tenantId,
    site: input.siteId,
    form: input.formId,
    submittedData: input.data,
    submittedAt: new Date().toISOString(),
    sourceURL: input.sourceURL,
    locale: input.locale,
    utmSource: input.utmSource,
    utmMedium: input.utmMedium,
    utmCampaign: input.utmCampaign,
    consent: input.consent,
    status,
  })

  // 6. Return safe result — never return internal errors to browser
  return {
    success: true,
    message: 'Form submitted successfully',
    submissionId: String(submission.id),
  }
}
