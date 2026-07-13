import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Link } from '@/views/primitives/Link'
import type { ContactSectionViewModel } from '@/view-models/blocks/types'
import { Mail, Phone, MapPin } from 'lucide-react'

interface ContactSectionProps { data: ContactSectionViewModel }

export const ContactSection: React.FC<ContactSectionProps> = ({ data }) => (
  <section className="py-16">
    <Container>
      <div className="max-w-2xl mx-auto">
        <Heading level="h2" size="lg" className="text-center mb-12">{data.heading}</Heading>
        <div className="space-y-6">
          {data.email && (
            <div className="flex items-center gap-4 p-4 rounded-[var(--border-radius,0.5rem)]" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
              <Mail size={20} style={{ color: 'var(--color-primary, #3cd7ff)' }} />
              <Link href={`mailto:${data.email}`} className="text-sm">{data.email}</Link>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-4 p-4 rounded-[var(--border-radius,0.5rem)]" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
              <Phone size={20} style={{ color: 'var(--color-primary, #3cd7ff)' }} />
              <Link href={`tel:${data.phone}`} className="text-sm">{data.phone}</Link>
            </div>
          )}
          {data.address && (
            <div className="flex items-center gap-4 p-4 rounded-[var(--border-radius,0.5rem)]" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
              <MapPin size={20} style={{ color: 'var(--color-primary, #3cd7ff)' }} />
              <Text variant="body">{data.address}</Text>
            </div>
          )}
        </div>
      </div>
    </Container>
  </section>
)
