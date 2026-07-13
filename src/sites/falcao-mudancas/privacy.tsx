import React from 'react'
import { FalcaoLayout } from './layout'
const c = { bg: '#f9f9ff', primary: '#00317e', onSurface: '#111c2d', onSurfaceVariant: '#434653' } as const
export const defaultContent = {}

export const FalcaoPrivacy = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: c.primary }}>Política de Privacidade</h1>
      <div className="space-y-6 text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>
        <p>A Falcão Mudanças respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>Recolha de Dados</h2>
        <p>Recolhemos apenas os dados necessários para a prestação dos nossos serviços: nome, telefone, email e moradas de origem/destino.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>Utilização</h2>
        <p>Os seus dados são utilizados exclusivamente para elaboração de orçamentos e execução dos serviços contratados. Não partilhamos dados com terceiros.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>Cookies</h2>
        <p>Utilizamos cookies essenciais para o funcionamento do site. Não utilizamos cookies de rastreamento ou publicidade.</p>
        <h2 className="text-xl font-bold" style={{ color: c.primary }}>Direitos</h2>
        <p>Pode solicitar a qualquer momento o acesso, correção ou eliminação dos seus dados através do email info@falcaomudancas.pt.</p>
      </div>
    </section>
  </FalcaoLayout>
)
