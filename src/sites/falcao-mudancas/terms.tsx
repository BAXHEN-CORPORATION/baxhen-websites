import React from 'react'
import { FalcaoLayout } from './layout'
const c = { bg: '#f9f9ff', primary: '#00317e', onSurface: '#111c2d', onSurfaceVariant: '#434653' } as const
export const defaultContent = {}

export const FalcaoTerms = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: c.primary }}>Termos de Serviço</h1>
      <div className="space-y-6 text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>1. Serviços</h2>
        <p>A Falcão Mudanças compromete-se a prestar serviços de transporte e logística com profissionalismo e pontualidade. Todos os serviços são acordados previamente por escrito.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>2. Orçamentos</h2>
        <p>Os orçamentos são válidos por 30 dias. O preço final pode variar consoante serviços adicionais solicitados após a aceitação do orçamento.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>3. Responsabilidade</h2>
        <p>A Falcão Mudanças possui seguro de responsabilidade civil para todos os serviços prestados. Danos devem ser reportados no prazo de 48 horas após a entrega.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>4. Cancelamentos</h2>
        <p>Cancelamentos com menos de 48 horas de antecedência estão sujeitos a uma taxa de 30% do valor orçamentado.</p>
      </div>
    </section>
  </FalcaoLayout>
)
