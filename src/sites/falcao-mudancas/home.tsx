'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FalcaoLayout } from './layout'
import { VideoPlayer } from './components/VideoPlayer'
import { TrustBar } from './components/TrustBar'
import { CoverageSection } from './components/CoverageSection'
import { useQuoteStore } from './stores/quote-flow'
import { c } from './config'
import { Home, Building2, Armchair } from 'lucide-react'

interface FalcaoHomeContent {
  hero?: { heading?: string; subtext?: string }
}

export const defaultContent: FalcaoHomeContent = {
  hero: {
    heading: 'Mais do que objetos, transportamos o seu futuro.',
    subtext: 'MUDANÇAS DE CONFIANÇA',
  },
}

const tipoOptions = [
  { icon: Armchair, value: 'Apenas Móveis', title: 'Apenas Móveis', desc: 'Ideal para quem já embalou tudo em caixas e precisa apenas do transporte de mobiliário pesado.' },
  { icon: Home, value: 'Conteúdo Completo', title: 'Conteúdo Completo', desc: 'Inclui móveis, eletrodomésticos e todas as suas caixas de pertences pessoais.' },
  { icon: Building2, value: 'Escritório/Empresa', title: 'Escritório / Empresa', desc: 'Mudança comercial com equipamentos, mobiliário de escritório e documentação.' },
]

export const FalcaoHome = ({ content }: { content: FalcaoHomeContent }) => {
  const router = useRouter()
  const { tipo, setField } = useQuoteStore()

  useEffect(() => { setField('tipo', '') }, [setField])

  const selectTipo = (value: string) => {
    setField('tipo', value)
    router.push('/orcamento?from=home')
  }

  return (
    <FalcaoLayout>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-4 text-center pt-20 md:pt-24 pb-12">
        <span className="text-sm font-semibold tracking-widest uppercase block mb-4" style={{ color: c.secondary }}>
          {content.hero?.subtext || 'MUDANÇAS DE CONFIANÇA'}
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 max-w-3xl mx-auto" style={{ color: c.primary, letterSpacing: '-0.02em' }}>
          Mais do que <span style={{ color: c.tertiary }}>objetos</span>, transportamos o seu <span style={{ color: c.tertiary }}>futuro</span>.
        </h1>
        <VideoPlayer />
        <TrustBar />
      </section>

      <CoverageSection />

      {/* Step 1: Tipo Selection */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: c.primary }}>O que vai transportar?</h2>
          <p className="text-lg mb-12" style={{ color: c.onSurfaceVariant }}>Selecione a categoria que melhor descreve o volume da sua mudança.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tipoOptions.map((opt) => {
              const Icon = opt.icon
              const selected = tipo === opt.value
              return (
                <button key={opt.value} type="button" onClick={() => selectTipo(opt.value)}
                  className={`flex flex-col items-center text-center p-8 rounded-xl border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer ${selected ? 'border-[#00317e] bg-[#e7eeff]' : ''}`}
                  style={{ borderColor: selected ? c.primary : c.outlineVariant, backgroundColor: selected ? c.surfaceHigh : c.cardBg }}>
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors ${selected ? 'text-white' : ''}`} style={{ backgroundColor: selected ? c.primary : c.surface }}>
                    <Icon size={36} color={selected ? '#fff' : c.primary} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opt.title}</h3>
                  <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{opt.desc}</p>
                </button>
              )
            })}
          </div>
        </div>
      </section>

    </FalcaoLayout>
  )
}
