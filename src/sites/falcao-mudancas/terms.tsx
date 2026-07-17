import React from 'react'
import { FalcaoLayout } from './layout'
import { c } from './config'

export const defaultContent = {}

const sections = [
  { title: '1. Serviços', text: 'A Falcão Mudanças compromete-se a prestar serviços de transporte e logística com profissionalismo e pontualidade. Todos os serviços são acordados previamente por escrito.' },
  { title: '2. Orçamentos', text: 'Os orçamentos são válidos por 30 dias. O preço final pode variar consoante serviços adicionais solicitados após a aceitação do orçamento.' },
  { title: '3. Responsabilidade', text: 'A Falcão Mudanças possui seguro de responsabilidade civil para todos os serviços prestados. Danos devem ser reportados no prazo de 48 horas após a entrega.' },
  { title: '4. Cancelamentos', text: 'Cancelamentos com menos de 48 horas de antecedência estão sujeitos a uma taxa de 30% do valor orçamentado.' },
]

export const FalcaoTerms = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: c.primary }}>Termos de Serviço</h1>
      <div className="space-y-6 text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>
        {sections.map((s, i) => <div key={i}><h2 className="text-xl font-bold mb-2" style={{ color: c.primary }}>{s.title}</h2><p>{s.text}</p></div>)}
      </div>
    </section>
  </FalcaoLayout>
)
