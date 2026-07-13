import React from 'react'
import { FalcaoLayout } from './layout'
import { Phone, Mail, MapPin } from 'lucide-react'
const c = { bg: '#f9f9ff', primary: '#00317e', onSurface: '#111c2d', onSurfaceVariant: '#434653' } as const
export const defaultContent = {}

export const FalcaoContact = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Contacto</h1>
      <p className="text-center mb-16" style={{ color: c.onSurfaceVariant }}>Estamos prontos para ajudar com a sua mudança.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          { icon: Phone, title: 'Telefone', value: '+351 210 000 000', href: 'tel:+351210000000' },
          { icon: Mail, title: 'Email', value: 'info@falcaomudancas.pt', href: 'mailto:info@falcaomudancas.pt' },
          { icon: MapPin, title: 'Morada', value: 'Lisboa, Portugal', href: '#' },
        ].map((item, i) => { const Icon = item.icon; return (
          <a key={i} href={item.href} className="p-8 rounded-xl hover:-translate-y-1 transition-transform block" style={{ backgroundColor: '#fff' }}>
            <Icon size={32} className="mx-auto mb-3" color={c.primary} />
            <div className="text-sm font-semibold mb-1" style={{ color: c.onSurfaceVariant }}>{item.title}</div>
            <div className="font-bold" style={{ color: c.primary }}>{item.value}</div>
          </a>
        )})}
      </div>
    </section>
  </FalcaoLayout>
)
