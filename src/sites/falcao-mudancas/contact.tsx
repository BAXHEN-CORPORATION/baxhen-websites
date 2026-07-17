import React from 'react'
import { FalcaoLayout } from './layout'
import { c, PHONE, PHONE_DISPLAY, EMAIL } from './config'
import { Phone, Mail, MapPin } from 'lucide-react'

export const defaultContent = {}

const items = [
  { icon: Phone, title: 'Telefone', value: PHONE_DISPLAY, href: `tel:${PHONE}` },
  { icon: Mail, title: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, title: 'Morada', value: 'Setúbal, Portugal', href: '#' },
]

export const FalcaoContact = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Contacto</h1>
      <p className="text-center mb-16" style={{ color: c.onSurfaceVariant }}>Estamos prontos para ajudar com a sua mudança.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => { const Icon = item.icon; return (
          <a key={i} href={item.href} className="p-8 rounded-xl hover:-translate-y-1 transition-transform block" style={{ backgroundColor: c.cardBg }}>
            <Icon size={32} className="mx-auto mb-3" color={c.primary} />
            <div className="text-sm font-semibold mb-1" style={{ color: c.onSurfaceVariant }}>{item.title}</div>
            <div className="font-bold" style={{ color: c.primary }}>{item.value}</div>
          </a>
        )})}
      </div>
    </section>
  </FalcaoLayout>
)
