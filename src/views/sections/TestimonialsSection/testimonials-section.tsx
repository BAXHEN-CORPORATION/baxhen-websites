import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import type { TestimonialsSectionViewModel } from '@/view-models/blocks/types'
import { Quote } from 'lucide-react'

interface TestimonialsSectionProps { data: TestimonialsSectionViewModel }

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => {
  if (!data.testimonials.length) return null

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
      <Container>
        {data.heading && <Heading level="h2" size="lg" className="text-center mb-12">{data.heading}</Heading>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-[var(--border-radius,0.5rem)] relative" style={{ backgroundColor: 'var(--color-background, #10141a)' }}>
              <Quote size={32} className="mb-4 opacity-20" style={{ color: 'var(--color-primary, #3cd7ff)' }} />
              <Text variant="body" className="mb-6 italic">{t.quote}</Text>
              <div className="flex items-center gap-3">
                {t.avatar && <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />}
                <div>
                  <p className="text-sm font-semibold" style={{ color: 'var(--color-heading, var(--color-text))' }}>{t.author}</p>
                  {t.role && <Text variant="label">{t.role}</Text>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
