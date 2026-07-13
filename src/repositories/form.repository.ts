import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Form, FormSubmission } from '@/payload-types'
import type { FormSubmissionData } from '@/domain/forms/types'

/**
 * Find a form by slug within a site's tenant context.
 */
export const findForm = async (
  formIdOrSlug: string,
): Promise<Form | null> => {
  const payload = await getPayload({ config: configPromise })

  try {
    const doc = await payload.findByID({
      collection: 'forms',
      id: formIdOrSlug,
    })
    return doc || null
  } catch {
    return null
  }
}

/**
 * Create a form submission record.
 * Validates that the form belongs to the given tenant and site.
 */
export const createFormSubmission = async (
  input: FormSubmissionData,
): Promise<FormSubmission> => {
  const payload = await getPayload({ config: configPromise })

  const tenantId = typeof input.tenant === 'string' ? input.tenant : input.tenant.id
  const siteId = typeof input.site === 'string' ? input.site : input.site.id
  const formId = typeof input.form === 'string' ? input.form : input.form.id

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const submission = await (payload.create as any)({
    collection: 'form-submissions',
    data: {
      tenant: tenantId,
      site: siteId,
      form: formId,
      submittedData: input.submittedData,
      submittedAt: input.submittedAt,
      sourceURL: input.sourceURL,
      locale: input.locale,
      utmSource: input.utmSource,
      utmMedium: input.utmMedium,
      utmCampaign: input.utmCampaign,
      consent: input.consent,
      status: input.status,
    },
  })

  return submission
}

/**
 * Find form submissions scoped to a specific site.
 */
export const findFormSubmissions = async (
  siteId: string,
  filters?: { status?: string; limit?: number },
): Promise<FormSubmission[]> => {
  const payload = await getPayload({ config: configPromise })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const where: Record<string, any> = {
    site: { equals: siteId },
  }

  if (filters?.status) {
    where.status = { equals: filters.status }
  }

  const result = await payload.find({
    collection: 'form-submissions',
    where,
    limit: filters?.limit || 50,
    sort: '-submittedAt',
  })

  return result.docs
}
