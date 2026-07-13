import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Button } from '@/views/primitives/Button'
import type { CTASectionViewModel } from '@/view-models/blocks/cta.view-model'

interface CTASectionProps { data: CTASectionViewModel }

export const CTASection: React.FC<CTASectionProps> = ({ data }) => (
  <section
    className="py-20"
    style={{ backgroundColor: 'var(--color-surface, #181c22)' }}
  >
    <Container>
      <div className="text-center max-w-2xl mx-auto">
        <Heading level="h2" size="lg" className="mb-4">{data.heading}</Heading>
        {data.subtext && <Text variant="lead" className="mb-8">{data.subtext}</Text>}
        <div className="flex flex-wrap justify-center gap-4">
          {data.buttons.map((btn, i) => (
            <Button key={i} variant={btn.variant === 'outline' ? 'outline' : 'primary'} size="lg" href={btn.href}>
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  </section>
)
