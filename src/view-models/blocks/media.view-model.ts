export interface MediaSectionViewModel {
  blockType: 'mediaBlock'
  media: {
    url: string
    alt: string
    width?: number
    height?: number
  }
  caption?: string
}

export const toMediaViewModel = (
  block: Record<string, unknown>,
): MediaSectionViewModel => {
  const media = block.media as Record<string, unknown> | undefined

  return {
    blockType: 'mediaBlock',
    media: {
      url: (media?.url as string) || '',
      alt: (media?.alt as string) || '',
      width: media?.width as number | undefined,
      height: media?.height as number | undefined,
    },
    caption: (block.caption as string) || undefined,
  }
}
