import type { Locale } from '@/domain/shared/types'

export interface HeroSectionViewModel {
  blockType: 'hero'
  heading: string
  subtext?: string
  cta?: {
    label: string
    href: string
  }
  backgroundImage?: {
    url: string
    alt: string
  }
  variant: 'centered' | 'split' | 'minimal'
}

export const toHeroViewModel = (
  block: Record<string, unknown>,
  locale: Locale,
): HeroSectionViewModel => {
  return {
    blockType: 'hero',
    heading: (block.heading as string) || '',
    subtext: (block.subtext as string) || undefined,
    cta: block.cta
      ? {
          label: (block.cta as Record<string, string>).label || 'Learn More',
          href: (block.cta as Record<string, string>).href || '#',
        }
      : undefined,
    backgroundImage: block.backgroundImage
      ? {
          url: ((block.backgroundImage as Record<string, unknown>).url as string) || '',
          alt: ((block.backgroundImage as Record<string, unknown>).alt as string) || '',
        }
      : undefined,
    variant: (block.variant as HeroSectionViewModel['variant']) || 'centered',
  }
}
