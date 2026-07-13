import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Image } from '@/views/primitives/Image'
import type { GallerySectionViewModel } from '@/view-models/blocks/types'

interface GallerySectionProps { data: GallerySectionViewModel }

export const GallerySection: React.FC<GallerySectionProps> = ({ data }) => {
  if (!data.images.length) return null

  return (
    <section className="py-16">
      <Container>
        {data.heading && <Heading level="h2" size="lg" className="text-center mb-12">{data.heading}</Heading>}
        <div className={`grid gap-4 ${data.layout === 'carousel' ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
          {data.images.map((img, i) => (
            <div key={i} className="relative group overflow-hidden rounded-[var(--border-radius,0.5rem)]">
              <Image src={img.url} alt={img.alt} width={600} height={400} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
              {img.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-sm text-white">{img.caption}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
