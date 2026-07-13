'use client'

import React, { useState } from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Button } from '@/views/primitives/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import type { FormSectionViewModel } from '@/view-models/blocks/types'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormSectionProps { data: FormSectionViewModel; siteId?: string; tenantId?: string; locale?: string }

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ data, siteId, tenantId, locale }) => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    const body: Record<string, unknown> = {}
    fd.forEach((v, k) => { body[k] = v })

    try {
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: data.formId, tenantId, siteId, data: body, locale }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Error sending. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section className="py-16">
        <Container>
          <div className="max-w-md mx-auto text-center">
            <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--color-primary, #3cd7ff)' }} />
            <Heading level="h2" size="md">Message Sent!</Heading>
            <Text variant="body" className="mt-2">We&apos;ll get back to you shortly.</Text>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16">
      <Container>
        <div className="max-w-lg mx-auto">
          <Heading level="h2" size="lg" className="text-center mb-4">{data.title}</Heading>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-2">
              <Label>Name *</Label>
              <Input name="name" required placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email *</Label>
              <Input name="email" type="email" required placeholder="your@email.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message *</Label>
              <Textarea name="message" required rows={4} placeholder="How can we help?" />
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" variant="primary" size="lg" className="w-full gap-2" disabled={loading}>
              {loading ? 'Sending...' : <><Send size={16} /> {data.submitLabel}</>}
            </Button>
          </form>
        </div>
      </Container>
    </section>
  )
}
