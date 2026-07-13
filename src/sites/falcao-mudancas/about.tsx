import React from 'react'
import { FalcaoLayout } from './layout'
import { Clock, Shield, MapPin, Phone } from 'lucide-react'

const c = { bg: '#f9f9ff', surface: '#f0f3ff', primary: '#00317e', onSurface: '#111c2d', onSurfaceVariant: '#434653', actionYellow: '#ffe16d' } as const

export const defaultContent = {}

const values = [
  { icon: Clock, title: 'Pontualidade', text: 'Chegamos à hora marcada. Cada minuto conta na sua mudança.' },
  { icon: Shield, title: 'Cuidado', text: 'Proteção total dos seus bens com materiais adequados e equipa experiente.' },
  { icon: MapPin, title: 'Cobertura', text: 'Lisboa, Setúbal, Margem Sul e outras regiões de Portugal.' },
]

export const FalcaoAbout = () => (
  <FalcaoLayout>
    <section className="max-w-[1200px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Sobre a Falcão Mudanças</h1>
      <p className="text-center mb-16 max-w-2xl mx-auto leading-relaxed" style={{ color: c.onSurfaceVariant }}>
        Desde 2023 a ajudar particulares e empresas em Lisboa, Setúbal e Margem Sul. Acreditamos que uma mudança não precisa de ser complicada — precisa de ser bem feita.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {values.map((v, i) => { const Icon = v.icon; return (
          <div key={i} className="text-center p-8 rounded-xl" style={{ backgroundColor: '#fff' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: c.surface }}>
              <Icon size={28} color={c.primary} />
            </div>
            <h3 className="text-lg font-bold mb-2" style={{ color: c.primary }}>{v.title}</h3>
            <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{v.text}</p>
          </div>
        )})}
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm leading-relaxed mb-4" style={{ color: c.onSurfaceVariant }}>
          A Falcão Mudanças oferece um serviço completo: recolha, transporte, desmontagem, montagem e embalamento. Trabalhamos com residências, escritórios e lojas, sempre com foco na organização e no respeito pelos seus bens.
        </p>
        <a href="tel:351938711729" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold mt-6 hover:opacity-90 transition-all" style={{ backgroundColor: c.primary, color: '#fff' }}>
          <Phone size={18} /> Ligar 938 711 729
        </a>
      </div>
    </section>
  </FalcaoLayout>
)
