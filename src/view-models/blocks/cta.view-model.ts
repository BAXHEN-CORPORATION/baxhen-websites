export interface CTAButton {
  label: string
  href: string
  variant?: 'primary' | 'outline'
}

export interface CTASectionViewModel {
  blockType: 'cta'
  heading: string
  subtext?: string
  buttons: CTAButton[]
}

export const toCTAViewModel = (
  block: Record<string, unknown>,
): CTASectionViewModel => {
  const buttons = (block.buttons || []) as Array<Record<string, unknown>>
  const cta = block.cta as Record<string, string> | undefined

  return {
    blockType: 'cta',
    heading: (block.heading as string) || '',
    subtext: (block.subtext as string) || undefined,
    buttons: buttons.length > 0
      ? buttons.map((b) => ({
          label: (b.label as string) || '',
          href: (b.href as string) || '#',
          variant: (b.variant as CTAButton['variant']) || 'primary',
        }))
      : cta
        ? [{ label: cta.label || 'Get Started', href: cta.href || '#', variant: 'primary' }]
        : [],
  }
}
