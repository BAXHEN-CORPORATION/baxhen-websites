import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Button } from '@/views/primitives/Button'
import type { HeroSectionViewModel } from '@/view-models/blocks/types'

interface HeroSectionProps {
  data: HeroSectionViewModel
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { heading, subtext, cta, variant } = data

  return (
    <section className={`py-20 md:py-32 relative ${variant === 'centered' ? 'text-center' : ''}`}>
      {variant === 'minimal' && (
        <div className="absolute inset-0 opacity-20" style={{ background: 'radial-gradient(circle at 50% 0%, var(--color-primary, #3cd7ff) 0%, transparent 70%)' }} />
      )}
      <Container>
        <div className={variant === 'split' ? 'grid md:grid-cols-2 gap-12 items-center' : 'max-w-3xl mx-auto'}>
          <div>
            <Heading level="h1" size="display" className="mb-6">
              {heading}
            </Heading>
            {subtext && (
              <Text variant="lead" className="mb-8">
                {subtext}
              </Text>
            )}
            {cta && (
              <Button variant="primary" size="lg" href={cta.href}>
                {cta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
