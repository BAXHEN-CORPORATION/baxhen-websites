'use client'

import React, { useState } from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { ChevronDown } from 'lucide-react'
import type { FAQSectionViewModel } from '@/view-models/blocks/faq.view-model'

interface FAQSectionProps { data: FAQSectionViewModel }

export const FAQSection: React.FC<FAQSectionProps> = ({ data }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <Container>
        <Heading level="h2" size="lg" className="text-center mb-12">{data.heading}</Heading>
        <div className="max-w-2xl mx-auto space-y-4">
          {data.items.map((item, i) => (
            <div key={i} className="rounded-[var(--border-radius,0.5rem)] overflow-hidden" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left min-h-[44px]"
                aria-expanded={openIndex === i}
              >
                <Heading level="h3" size="sm">{item.question}</Heading>
                <ChevronDown size={20} className={`transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <Text variant="body">{item.answer}</Text>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
