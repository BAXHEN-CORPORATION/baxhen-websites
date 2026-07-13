import React from 'react'
import { Container } from '@/views/primitives/Container'
import type { ContentSectionViewModel } from '@/view-models/blocks/types'

interface ContentSectionProps { data: ContentSectionViewModel }

export const ContentSection: React.FC<ContentSectionProps> = () => (
  <section className="py-16">
    <Container>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm opacity-50">Content section placeholder.</p>
      </div>
    </Container>
  </section>
)
