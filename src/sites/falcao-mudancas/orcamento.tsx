'use client'

import React, { useEffect } from 'react'
import { FalcaoLayout } from './layout'
import { useQuoteStore } from './stores/quote-flow'
import { c, PHONE } from './config'
import { Button } from './components/Button'
import { Home, Building2, Armchair } from 'lucide-react'

const totalSteps = 5

const extrasOptions = [
  { value: 'Embalagem', title: 'Embalagem e Proteção', desc: 'Materiais profissionais para proteger os seus bens.' },
  { value: 'Desmontagem/Montagem', title: 'Desmontagem e Montagem', desc: 'Montamos e desmontamos todo o mobiliário.' },
  { value: 'Içamento', title: 'Içamento Externo', desc: 'Para prédios com acesso difícil ou sem elevador.' },
  { value: 'Armazenamento', title: 'Guarda-Móveis', desc: 'Armazenamento temporário durante a transição.' },
]

export const defaultContent = {}

export const FalcaoOrcamento = () => {
  const { step, tipo, origem, destino, data, pisoOrigem, pisoDestino, elevador, estacionamento, notas, extras, nome, telefone, setField, nextStep, prevStep, initStep } = useQuoteStore()

  useEffect(() => { initStep() }, [initStep])

  const toggleExtra = (val: string) => {
    const next = extras.includes(val) ? extras.filter((e: string) => e !== val) : [...extras, val]
    setField('extras', next)
  }

  const sendWhatsApp = () => {
    const msg = [
      `Olá Falcão Mudanças! Gostaria de um orçamento:`,
      `Tipo: ${tipo}`,
      `Origem: ${origem} (Piso: ${pisoOrigem})`,
      `Destino: ${destino} (Piso: ${pisoDestino})`,
      `Elevador: ${elevador || 'Não informado'}`,
      `Estacionamento: ${estacionamento || 'Não informado'}`,
      `Data: ${data}`,
      `Extras: ${extras.join(', ') || 'Nenhum'}`,
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      `Notas: ${notas || 'Nenhuma'}`,
    ].join('\n')
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const Progress = () => (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="flex justify-between items-end mb-4">
        <span className="text-sm font-semibold uppercase" style={{ color: c.primary }}>Passo {step} de {totalSteps}</span>
        <span className="text-sm" style={{ color: c.secondary }}>{Math.round((step / totalSteps) * 100)}%</span>
      </div>
      <div className="h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: c.surfaceHigh }}>
        <div className="h-full transition-all duration-500" style={{ width: `${(step / totalSteps) * 100}%`, backgroundColor: c.primary }} />
      </div>
    </div>
  )

  return (
    <FalcaoLayout>
      <section className="max-w-3xl mx-auto px-4 py-16 min-h-screen">
        <Progress />

        {step === 1 && (
          <div className="text-center">
            <h2 className="text-3xl font-extrabold mb-4" style={{ color: c.primary }}>O que vai transportar?</h2>
            <p className="text-lg mb-12" style={{ color: c.onSurfaceVariant }}>Selecione a categoria que melhor descreve o volume da sua mudança.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Armchair, value: 'Apenas Móveis', title: 'Apenas Móveis', desc: 'Ideal para quem já embalou tudo em caixas e precisa apenas do transporte de mobiliário pesado.' },
                { icon: Home, value: 'Conteúdo Completo', title: 'Conteúdo Completo', desc: 'Inclui móveis, eletrodomésticos e todas as suas caixas de pertences pessoais.' },
                { icon: Building2, value: 'Escritório/Empresa', title: 'Escritório / Empresa', desc: 'Mudança comercial com equipamentos, mobiliário de escritório e documentação.' },
              ].map((opt) => {
                const Icon = opt.icon
                const selected = tipo === opt.value
                return (
                  <button key={opt.value} type="button" onClick={() => setField('tipo', opt.value)}
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
            <div className="max-w-md mx-auto flex justify-center">
              <Button onClick={nextStep} disabled={!tipo}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Detalhes da mudança</h2>
            <p className="text-center mb-12" style={{ color: c.onSurfaceVariant }}>Conte-nos para onde vai e quando.</p>
            <div className="space-y-5 max-w-xl mx-auto">
              {[
                { key: 'origem', label: 'Local de recolha', placeholder: 'Ex: Lisboa' },
                { key: 'destino', label: 'Local de entrega', placeholder: 'Ex: Porto' },
                { key: 'data', label: 'Data pretendida', type: 'date' },
                { key: 'pisoOrigem', label: 'Piso na origem', placeholder: 'Ex: 3º' },
                { key: 'pisoDestino', label: 'Piso no destino', placeholder: 'Ex: 5º' },
              ].map((f) => (
                <InputField key={f.key} id={f.key} label={f.label} type={f.type || 'text'} placeholder={f.placeholder || ''} value={(useQuoteStore.getState() as unknown as Record<string, string>)[f.key] || ''} onChange={(v: string) => setField(f.key, v)} />
              ))}
              {[
                { key: 'elevador', label: 'Tem elevador?', options: ['Sim', 'Não', 'Só num dos lados'] },
                { key: 'estacionamento', label: 'Estacionamento disponível?', options: ['Sim', 'Não', 'Difícil'] },
              ].map((f) => (
                <SelectField key={f.key} id={f.key} label={f.label} value={(useQuoteStore.getState() as unknown as Record<string, string>)[f.key] || ''} onChange={(v: string) => setField(f.key, v)} options={f.options} />
              ))}
              <InputField id="notas" label="Observações" placeholder="Móveis especiais, restrições de acesso..." value={notas} onChange={(v: string) => setField('notas', v)} />
            </div>
            <div className="flex gap-4 max-w-xl mx-auto mt-8">
              <Button onClick={prevStep} variant="outline">Voltar</Button>
              <Button onClick={nextStep}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Serviços Extra</h2>
            <p className="text-center mb-12" style={{ color: c.onSurfaceVariant }}>Selecione os serviços adicionais que precisa.</p>
            <div className="space-y-4 max-w-xl mx-auto mb-8">
              {extrasOptions.map((cb) => (
                <label key={cb.value} className={`flex items-center p-4 border rounded-lg cursor-pointer hover:opacity-80 transition-colors cursor-pointer ${extras.includes(cb.value) ? 'bg-[#e7eeff]' : ''}`}
                  style={{ borderColor: extras.includes(cb.value) ? c.primary : c.outlineVariant, backgroundColor: extras.includes(cb.value) ? c.surfaceHigh : c.cardBg }}>
                  <input type="checkbox" checked={extras.includes(cb.value)} onChange={() => toggleExtra(cb.value)} className="w-6 h-6 mr-4" />
                  <div><span className="font-bold block">{cb.title}</span><span className="text-xs" style={{ color: c.onSurfaceVariant }}>{cb.desc}</span></div>
                </label>
              ))}
            </div>
            <div className="flex gap-4 max-w-xl mx-auto">
              <Button onClick={prevStep} variant="outline">Voltar</Button>
              <Button onClick={nextStep}>Continuar</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h2 className="text-3xl font-extrabold text-center mb-4" style={{ color: c.primary }}>Os seus dados</h2>
            <p className="text-center mb-12" style={{ color: c.onSurfaceVariant }}>Para onde enviamos o orçamento?</p>
            <div className="space-y-5 max-w-xl mx-auto">
              <InputField id="nome" label="Nome" placeholder="O seu nome" value={nome} onChange={(v: string) => setField('nome', v)} />
              <InputField id="telefone" label="Telefone / WhatsApp" type="tel" placeholder="938 711 729" value={telefone} onChange={(v: string) => setField('telefone', v)} />
            </div>
            <div className="flex gap-4 max-w-xl mx-auto mt-8">
              <Button onClick={prevStep} variant="outline">Voltar</Button>
              <Button onClick={nextStep}>Ver Resumo</Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6" style={{ color: c.primary }}>Resumo do pedido</h2>
            <div className="p-6 rounded-lg border mb-8 text-left text-sm" style={{ backgroundColor: c.surface, borderColor: c.outlineVariant }}>
              <ul className="space-y-2" style={{ color: c.onSurfaceVariant }}>
                {[
                  ['Tipo', tipo], ['Origem', `${origem} (Piso ${pisoOrigem})`], ['Destino', `${destino} (Piso ${pisoDestino})`],
                  ['Elevador', elevador || '—'], ['Estacionamento', estacionamento || '—'], ['Data', data || '—'],
                  ['Extras', extras.join(', ') || 'Nenhum'], ['Nome', nome], ['Telefone', telefone], ['Notas', notas || '—'],
                ].map(([label, value]) => (
                  <li key={label} className="flex justify-between"><span>{label}:</span><strong style={{ color: c.onSurface }}>{value}</strong></li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              <Button onClick={prevStep} variant="outline">Voltar</Button>
              <Button onClick={sendWhatsApp} variant="whatsapp">Enviar via WhatsApp</Button>
            </div>
          </div>
        )}
      </section>
    </FalcaoLayout>
  )
}

const InputField = ({ id, label, type = 'text', placeholder, value, onChange }: { id: string; label: string; type?: string; placeholder: string; value: string; onChange: (v: string) => void }) => (
  <div>
    <label className="block text-sm font-semibold mb-1" style={{ color: c.onSurfaceVariant }}>{label}</label>
    <input id={`fm-${id}`} type={type} value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full border-b-2 bg-transparent py-3 text-sm outline-none transition-colors" style={{ borderColor: c.outlineVariant }} placeholder={placeholder} />
  </div>
)

const SelectField = ({ id, label, value, onChange, options }: { id: string; label: string; value: string; onChange: (v: string) => void; options: string[] }) => (
  <div>
    <label className="block text-sm font-semibold mb-1" style={{ color: c.onSurfaceVariant }}>{label}</label>
    <select id={`fm-${id}`} value={value} onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg bg-transparent py-3 px-4 text-sm outline-none" style={{ borderColor: c.outlineVariant }}>
      <option value="">Selecionar</option>
      {options.map((o) => <option key={o} value={o}>{o}</option>)}
    </select>
  </div>
)
