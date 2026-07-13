export interface ContactSectionViewModel {
  blockType: 'contact'
  heading: string
  email?: string
  phone?: string
  address?: string
  showForm: boolean
}

export const toContactViewModel = (
  block: Record<string, unknown>,
): ContactSectionViewModel => {
  return {
    blockType: 'contact',
    heading: (block.heading as string) || 'Contact Us',
    email: (block.email as string) || undefined,
    phone: (block.phone as string) || undefined,
    address: (block.address as string) || undefined,
    showForm: (block.showForm as boolean) || false,
  }
}
