import React from 'react'
import { FalcaoLayout } from './layout'
import { Home, Building2, Package, Wrench, Archive, Truck } from 'lucide-react'

const c = { bg: '#f9f9ff', surface: '#f0f3ff', primary: '#00317e', onSurface: '#111c2d', onSurfaceVariant: '#434653', actionYellow: '#ffe16d' } as const

export const defaultContent = {}

const services = [
  { icon: Home, title: 'Mudanças Residenciais', text: 'Casas, apartamentos e imóveis residenciais. Recolha, carga, transporte e entrega completa.' },
  { icon: Building2, title: 'Mudanças Empresariais', text: 'Escritórios, lojas, espaços comerciais. Mínimo de interrupção nas suas operações.' },
  { icon: Package, title: 'Transporte de Móveis', text: 'Sofás, camas, roupeiros, mesas. Transporte de mobiliário de grande dimensão.' },
  { icon: Truck, title: 'Transporte de Eletrodomésticos', text: 'Frigoríficos, máquinas de lavar, televisores. Transporte seguro e cuidado.' },
  { icon: Wrench, title: 'Desmontagem e Montagem', text: 'Desmontamos na origem e montamos no destino. Inclui mobiliário IKEA e outros.' },
  { icon: Package, title: 'Embalamento e Proteção', text: 'Mantas, plástico, caixas. Proteção profissional para todos os seus pertences.' },
  { icon: Archive, title: 'Guarda-Móveis', text: 'Armazenamento temporário ou prolongado. Solução para períodos de transição.' },
]

export const FalcaoServices = () => (
  <FalcaoLayout>
    <section className="max-w-[1200px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Os Nossos Serviços</h1>
      <p className="text-center mb-16 max-w-xl mx-auto" style={{ color: c.onSurfaceVariant }}>Soluções completas para tornar a sua mudança simples e sem preocupações.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => { const Icon = s.icon; return (
          <div key={i} className="p-8 rounded-xl border text-center hover:-translate-y-1 transition-transform" style={{ backgroundColor: '#fff', borderColor: '#c3c6d5' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: c.surface }}>
              <Icon size={28} color={c.primary} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: c.primary }}>{s.title}</h3>
            <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{s.text}</p>
          </div>
        )})}
      </div>
    </section>
  </FalcaoLayout>
)
