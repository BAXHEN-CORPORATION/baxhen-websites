export interface FAQItem {
  question: string
  answer: string
}

export interface FAQSectionViewModel {
  blockType: 'faq'
  heading: string
  items: FAQItem[]
}

export const toFAQViewModel = (
  block: Record<string, unknown>,
): FAQSectionViewModel => {
  const items = (block.items || block.questions || []) as Array<Record<string, unknown>>

  return {
    blockType: 'faq',
    heading: (block.heading as string) || 'FAQ',
    items: items.map((item) => ({
      question: (item.question as string) || '',
      answer: (item.answer as string) || '',
    })),
  }
}
