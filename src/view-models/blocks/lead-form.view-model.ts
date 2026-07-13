export interface LeadFormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select'
  required: boolean
  options?: string[]
}

export interface LeadFormSectionViewModel {
  blockType: 'leadForm'
  heading: string
  subtext?: string
  formId: string
  fields: LeadFormField[]
  submitLabel: string
  consentRequired: boolean
  consentText?: string
}

export const toLeadFormViewModel = (
  block: Record<string, unknown>,
): LeadFormSectionViewModel => {
  const fields = (block.fields || []) as Array<Record<string, unknown>>

  return {
    blockType: 'leadForm',
    heading: (block.heading as string) || 'Get in Touch',
    subtext: (block.subtext as string) || undefined,
    formId: (block.formId as string) || (block.form as string) || '',
    fields: fields.map((f) => ({
      name: (f.name as string) || '',
      label: (f.label as string) || '',
      type: (f.type as LeadFormField['type']) || 'text',
      required: (f.required as boolean) || false,
      options: f.options as string[] | undefined,
    })),
    submitLabel: (block.submitLabel as string) || 'Submit',
    consentRequired: (block.consentRequired as boolean) || false,
    consentText: (block.consentText as string) || undefined,
  }
}
