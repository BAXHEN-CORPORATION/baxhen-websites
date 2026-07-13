import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import type { ServicesSectionViewModel } from '@/view-models/blocks/services.view-model'
import { Wrench } from 'lucide-react'

interface ServicesSectionProps { data: ServicesSectionViewModel }

export const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => (
  <section className="py-16">
    <Container>
      <div className="text-center mb-12">
        <Heading level="h2" size="lg">{data.heading}</Heading>
        {data.subtext && <Text variant="lead" className="mt-4">{data.subtext}</Text>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.services.map((service, i) => (
          <div key={i} className="p-6 rounded-[var(--border-radius,0.5rem)]" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
            <Wrench size={32} className="mb-4" style={{ color: 'var(--color-primary, #3cd7ff)' }} />
            <Heading level="h3" size="sm" className="mb-2">{service.title}</Heading>
            <Text variant="small">{service.description}</Text>
          </div>
        ))}
      </div>
    </Container>
  </section>
)
