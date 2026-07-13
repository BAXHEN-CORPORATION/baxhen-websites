export interface FormSectionViewModel {
  blockType: 'formBlock'
  formId: string
  title: string
  submitLabel: string
}

export const toFormViewModel = (
  block: Record<string, unknown>,
): FormSectionViewModel => {
  return {
    blockType: 'formBlock',
    formId: (block.form as string) || '',
    title: (block.title as string) || 'Contact Form',
    submitLabel: (block.submitLabel as string) || 'Send',
  }
}
