'use client'

import React, { useState } from 'react'
import { Container } from '@/views/primitives/Container'
import { Heading } from '@/views/primitives/Heading'
import { Text } from '@/views/primitives/Text'
import { Button } from '@/views/primitives/Button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import type { LeadFormSectionViewModel } from '@/view-models/blocks/types'
import { Send, CheckCircle } from 'lucide-react'

interface LeadFormSectionProps { data: LeadFormSectionViewModel; siteId?: string; tenantId?: string; locale?: string }

export const LeadFormSection: React.FC<LeadFormSectionProps> = ({ data, siteId, tenantId, locale }) => {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [consent, setConsent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (data.consentRequired && !consent) { setError('Consent required.'); return }
    setLoading(true)
    setError('')

    const fd = new FormData(e.currentTarget)
    const body: Record<string, unknown> = {}
    fd.forEach((v, k) => { body[k] = v })

    try {
      const res = await fetch('/api/form-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: data.formId, tenantId, siteId, data: body, locale, consent: data.consentRequired ? { marketing: consent } : undefined }),
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
            <Heading level="h2" size="md">Thank You!</Heading>
            <Text variant="body" className="mt-2">We&apos;ll contact you shortly.</Text>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--color-surface, #181c22)' }}>
      <Container>
        <div className="max-w-lg mx-auto">
          <Heading level="h2" size="lg" className="text-center mb-2">{data.heading}</Heading>
          {data.subtext && <Text variant="body" className="text-center mb-8 opacity-70">{data.subtext}</Text>}
          <form onSubmit={handleSubmit} className="space-y-5">
            {data.fields.map((field) => {
              if (field.type === 'textarea') return (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label>{field.label}{field.required && ' *'}</Label>
                  <Textarea name={field.name} required={field.required} rows={3} />
                </div>
              )
              if (field.type === 'select' && field.options) return (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label>{field.label}{field.required && ' *'}</Label>
                  <select name={field.name} required={field.required} className="py-3 px-4 rounded-lg border outline-none bg-transparent text-sm" style={{ borderColor: 'var(--color-outline, #859398)', color: 'var(--color-text, #dfe2eb)' }}>
                    {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              )
              return (
                <div key={field.name} className="flex flex-col gap-2">
                  <Label>{field.label}{field.required && ' *'}</Label>
                  <Input name={field.name} type={field.type} required={field.required} />
                </div>
              )
            })}

            {data.consentRequired && (
              <div className="flex items-start gap-3">
                <Checkbox id="consent" checked={consent} onCheckedChange={(c) => setConsent(!!c)} className="mt-1" />
                <Label htmlFor="consent" className="text-xs cursor-pointer">{data.consentText || 'I accept the privacy policy'}</Label>
              </div>
            )}

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
