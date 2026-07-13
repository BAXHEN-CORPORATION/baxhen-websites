export interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

export interface GallerySectionViewModel {
  blockType: 'gallery'
  heading: string
  images: GalleryImage[]
  layout?: 'grid' | 'carousel'
}

export const toGalleryViewModel = (
  block: Record<string, unknown>,
): GallerySectionViewModel => {
  const images = (block.images || []) as Array<Record<string, unknown>>

  return {
    blockType: 'gallery',
    heading: (block.heading as string) || '',
    images: images.map((img) => ({
      url: (img.url as string) || (img.image as string) || '',
      alt: (img.alt as string) || '',
      caption: (img.caption as string) || undefined,
    })),
    layout: (block.layout as GallerySectionViewModel['layout']) || 'grid',
  }
}
