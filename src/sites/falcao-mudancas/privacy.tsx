import React from 'react'
import { FalcaoLayout } from './layout'
import { c, EMAIL } from './config'

export const defaultContent = {}

const sections = [
  { title: 'Recolha de Dados', text: 'Recolhemos apenas os dados necessários para a prestação dos nossos serviços: nome, telefone, email e moradas de origem/destino.' },
  { title: 'Utilização', text: 'Os seus dados são utilizados exclusivamente para elaboração de orçamentos e execução dos serviços contratados. Não partilhamos dados com terceiros.' },
  { title: 'Cookies', text: 'Utilizamos cookies essenciais para o funcionamento do site. Não utilizamos cookies de rastreamento ou publicidade.' },
  { title: 'Direitos', text: `Pode solicitar a qualquer momento o acesso, correção ou eliminação dos seus dados através do email ${EMAIL}.` },
]

export const FalcaoPrivacy = () => (
  <FalcaoLayout>
    <section className="max-w-[800px] mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold mb-8" style={{ color: c.primary }}>Política de Privacidade</h1>
      <p className="mb-6 text-sm" style={{ color: c.onSurfaceVariant }}>A Falcão Mudanças respeita a sua privacidade e está comprometida com a proteção dos seus dados pessoais.</p>
      <div className="space-y-6 text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>
        {sections.map((s, i) => <div key={i}><h2 className="text-xl font-bold mb-2" style={{ color: c.primary }}>{s.title}</h2><p>{s.text}</p></div>)}
      </div>
    </section>
  </FalcaoLayout>
)
