import React from 'react'
import { Container } from '@/views/primitives/Container'
import { RichText } from '@/components/RichText'
import type { ContentSectionViewModel } from '@/view-models/blocks/content.view-model'

interface ContentSectionProps { data: ContentSectionViewModel }

export const ContentSection: React.FC<ContentSectionProps> = ({ data }) => (
  <section className="py-16">
    <Container>
      <div className="max-w-3xl mx-auto">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {!!data.content && <RichText data={data.content as any} />}
      </div>
    </Container>
  </section>
)
