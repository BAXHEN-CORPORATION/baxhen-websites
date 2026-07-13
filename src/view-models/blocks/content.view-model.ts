export interface ContentSectionViewModel {
  blockType: 'content'
  content: unknown // Rich text content — rendered by RichText component
  columns?: number
}

export const toContentViewModel = (
  block: Record<string, unknown>,
): ContentSectionViewModel => {
  return {
    blockType: 'content',
    content: block.content || block.richText || null,
    columns: (block.columns as number) || 1,
  }
}
