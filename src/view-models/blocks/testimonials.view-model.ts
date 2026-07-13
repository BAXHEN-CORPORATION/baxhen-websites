export interface TestimonialItem {
  quote: string
  author: string
  role?: string
  avatar?: string
}

export interface TestimonialsSectionViewModel {
  blockType: 'testimonials'
  heading: string
  testimonials: TestimonialItem[]
}

export const toTestimonialsViewModel = (
  block: Record<string, unknown>,
): TestimonialsSectionViewModel => {
  const items = (block.testimonials || []) as Array<Record<string, unknown>>

  return {
    blockType: 'testimonials',
    heading: (block.heading as string) || '',
    testimonials: items.map((t) => ({
      quote: (t.quote as string) || '',
      author: (t.author as string) || '',
      role: (t.role as string) || undefined,
      avatar: (t.avatar as string) || undefined,
    })),
  }
}
