'use client'

import React, { useEffect, useRef, useCallback, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './components/Button'
import { useQuoteStore } from './stores/quote-flow'
import { c, LOGO, FONT, PHONE } from './config'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Home, Building2, Armchair, MapPin, Calendar as CalendarIcon, Wrench, ChevronUp, ChevronDown } from 'lucide-react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { DayPicker } from 'react-day-picker'
import { format, parse } from 'date-fns'
import { pt } from 'date-fns/locale'
import 'react-day-picker/style.css'

export const defaultContent = {}

const totalSteps = 9

const tipoOptions = [
  { icon: Armchair, value: 'Apenas Móveis', title: 'Apenas Móveis', desc: 'Ideal para quem já embalou tudo em caixas e precisa apenas do transporte de mobiliário pesado.' },
  { icon: Home, value: 'Conteúdo Completo', title: 'Conteúdo Completo', desc: 'Inclui móveis, eletrodomésticos e todas as suas caixas de pertences pessoais.' },
  { icon: Building2, value: 'Escritório/Empresa', title: 'Escritório / Empresa', desc: 'Mudança comercial com equipamentos, mobiliário de escritório e documentação.' },
]

const extrasOptions = [
  { value: 'Embalagem', title: 'Embalagem e Proteção', desc: 'Materiais profissionais para proteger os seus bens.' },
  { value: 'Montagem', title: 'Desmontagem e Montagem', desc: 'Montamos e desmontamos todo o mobiliário.' },
  { value: 'Içamento', title: 'Içamento Externo', desc: 'Para prédios com acesso difícil ou sem elevador.' },
  { value: 'Armazenamento', title: 'Guarda-Móveis', desc: 'Armazenamento temporário durante a transição.' },
]

const slideUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -12 }, transition: { duration: 0.35, ease: 'easeOut' } } as const

export const FalcaoOrcamento = () => {
  const { step, tipo, recolha, entrega, data, pisoRecolha, pisoEntrega, elevador, desmontagem, extras, nome, observacoes, setField, nextStep, prevStep, initStep } = useQuoteStore()
  const inputRef = useRef<HTMLInputElement>(null)
  const [dateOpen, setDateOpen] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const searchParams = useSearchParams()
  const fromHome = searchParams.get('from') === 'home'

  useEffect(() => { initStep(fromHome) }, [initStep, fromHome])

  // Auto-focus input on text steps (nome, recolha, entrega)
  useEffect(() => {
    const nomeStep = fromHome ? 2 : 1
    if ([nomeStep, 3, 4].includes(step)) {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [step, fromHome])

  const handleAdvance = useCallback(() => {
    const nomeStep = fromHome ? 2 : 1
    const tipoStep = fromHome ? 1 : 2

    const required: Record<number, { field: string; value: string }> = {
      [nomeStep]: { field: 'nome', value: nome },
      [tipoStep]: { field: 'tipo', value: tipo },
      3: { field: 'recolha', value: recolha },
      4: { field: 'entrega', value: entrega },
    }

    const req = required[step]
    if (req && !req.value) {
      setErrors(prev => ({ ...prev, [req.field]: true }))
      return
    }
    if (req) {
      setErrors(prev => ({ ...prev, [req.field]: false }))
    }
    nextStep()
  }, [step, nome, tipo, recolha, entrega, fromHome, nextStep])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdvance()
    }
  }, [handleAdvance])

  const selectTipo = (value: string) => { setField('tipo', value); setErrors(prev => ({ ...prev, tipo: false })); nextStep() }
  const selectDesmontagem = (value: string) => { setField('desmontagem', value); nextStep() }

  const toggleExtra = (val: string) => {
    const next = extras.includes(val) ? extras.filter((e: string) => e !== val) : [...extras, val]
    setField('extras', next)
  }

  const sendWhatsApp = () => {
    const msg = [
      `Olá Falcão Mudanças! Gostaria de um orçamento:`, '',
      `👤 Nome: ${nome}`,
      `📦 Tipo: ${tipo}`,
      `📍 Recolha: ${recolha}${pisoRecolha ? ` (Piso ${pisoRecolha}${elevador ? ', com elevador' : ''})` : ''}`,
      `📍 Entrega: ${entrega}${pisoEntrega ? ` (Piso ${pisoEntrega}${elevador ? ', com elevador' : ''})` : ''}`,
      `📅 Data: ${data || 'A definir'}`,
      `🔧 Desmontagem/Montagem: ${desmontagem || 'Não informado'}`,
      ...(extras.length ? [`📦 Extras: ${extras.join(', ')}`] : []),
      ...(observacoes ? [`📝 Notas: ${observacoes}`] : []),
    ].join('\n')
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: FONT, minHeight: '100vh' }}>
      {/* Header — logo + progress bar */}
      <header className="flex items-center gap-4 px-6 pt-6 pb-2">
        <Image src={LOGO} alt="Falcão Mudanças" width={40} height={40} unoptimized className="h-10 w-auto" />
        <div className="flex-1 h-1 rounded-full" style={{ backgroundColor: c.outlineVariant }}>
          <div className="h-full rounded-full transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%`, backgroundColor: c.primary }} />
        </div>
      </header>

      <main className="flex items-center justify-center px-6 pb-24" style={{ minHeight: 'calc(100vh - 180px)' }}>
        <AnimatePresence mode="wait">
          <motion.div key={step} {...slideUp} className="w-full max-w-lg">

            {/* Step 1: Nome (direct) OR Tipo (from home) */}
            {step === 1 && (
              fromHome ? (
                <div>
                  <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                  <h2 className="text-3xl font-extrabold mb-3" style={{ color: c.primary }}>O que vai transportar?</h2>
                  <p className="mb-10" style={{ color: c.onSurfaceVariant }}>Selecione a categoria que melhor descreve o volume da sua mudança.</p>
                  <div className="space-y-3">
                    {tipoOptions.map((opt) => { const Icon = opt.icon; const selected = tipo === opt.value; return (
                      <button key={opt.value} type="button" onClick={() => selectTipo(opt.value)}
                        className="flex items-center gap-4 p-5 rounded-xl border text-left transition-all cursor-pointer hover:-translate-y-0.5 w-full"
                        style={{ borderColor: selected ? c.primary : c.outlineVariant, backgroundColor: selected ? c.surfaceHigh : 'transparent' }}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: selected ? c.primary : c.surface }}>
                          <Icon size={24} color={selected ? '#fff' : c.primary} />
                        </div>
                        <div><h3 className="font-bold">{opt.title}</h3><p className="text-sm" style={{ color: c.onSurfaceVariant }}>{opt.desc}</p></div>
                      </button>
                    )})}
                  </div>
                  {errors.tipo && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                </div>
              ) : (
                <div>
                  <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                  <div className="mb-12">
                    <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Qual é o seu nome?</h2>
                    <p style={{ color: c.onSurfaceVariant }}>Como se chama?</p>
                  </div>
                  <Input ref={inputRef} type="text" value={nome} onChange={(e) => { setField('nome', e.target.value); setErrors(prev => ({ ...prev, nome: false })) }}
                    onKeyDown={handleKeyDown}
                    placeholder="O seu nome"
                    className="w-full border-0 border-b-2 rounded-none bg-transparent py-4 text-xl text-left shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                    style={{ borderColor: errors.nome ? '#cc0000' : c.outlineVariant }} />
                  {errors.nome && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                  <div className="mt-10">
                    <motion.div
                      initial={false}
                      animate={{ opacity: nome ? 1 : 0, y: nome ? 0 : 8 }}
                      transition={{ duration: 0.25 }}
                      style={{ pointerEvents: nome ? 'auto' : 'none' }}>
                      <Button onClick={handleAdvance} size="lg">OK</Button>
                    </motion.div>
                  </div>
                </div>
              )
            )}

            {/* Step 2: Tipo (direct) OR Nome (from home) */}
            {step === 2 && (
              fromHome ? (
                <div>
                  <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                  <div className="mb-12">
                    <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Qual é o seu nome?</h2>
                    <p style={{ color: c.onSurfaceVariant }}>Como se chama?</p>
                  </div>
                  <Input ref={inputRef} type="text" value={nome} onChange={(e) => { setField('nome', e.target.value); setErrors(prev => ({ ...prev, nome: false })) }}
                    onKeyDown={handleKeyDown}
                    placeholder="O seu nome"
                    className="w-full border-0 border-b-2 rounded-none bg-transparent py-4 text-xl text-left shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                    style={{ borderColor: errors.nome ? '#cc0000' : c.outlineVariant }} />
                  {errors.nome && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                  <div className="mt-10">
                    <motion.div
                      initial={false}
                      animate={{ opacity: nome ? 1 : 0, y: nome ? 0 : 8 }}
                      transition={{ duration: 0.25 }}
                      style={{ pointerEvents: nome ? 'auto' : 'none' }}>
                      <Button onClick={handleAdvance} size="lg">OK</Button>
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                  <h2 className="text-3xl font-extrabold mb-3" style={{ color: c.primary }}>O que vai transportar?</h2>
                  <p className="mb-10" style={{ color: c.onSurfaceVariant }}>Selecione a categoria que melhor descreve o volume da sua mudança.</p>
                  <div className="space-y-3">
                    {tipoOptions.map((opt) => { const Icon = opt.icon; const selected = tipo === opt.value; return (
                      <button key={opt.value} type="button" onClick={() => selectTipo(opt.value)}
                        className="flex items-center gap-4 p-5 rounded-xl border text-left transition-all cursor-pointer hover:-translate-y-0.5 w-full"
                        style={{ borderColor: selected ? c.primary : c.outlineVariant, backgroundColor: selected ? c.surfaceHigh : 'transparent' }}>
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: selected ? c.primary : c.surface }}>
                          <Icon size={24} color={selected ? '#fff' : c.primary} />
                        </div>
                        <div><h3 className="font-bold">{opt.title}</h3><p className="text-sm" style={{ color: c.onSurfaceVariant }}>{opt.desc}</p></div>
                      </button>
                    )})}
                  </div>
                  {errors.tipo && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                </div>
              )
            )}

            {/* Step 3: Recolha */}
            {step === 3 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <div className="mb-12">
                  <MapPin size={28} className="mb-3" color={c.primary} />
                  <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Local de recolha</h2>
                  <p style={{ color: c.onSurfaceVariant }}>Onde vamos buscar os seus bens?</p>
                </div>
                <Input ref={inputRef} type="text" value={recolha} onChange={(e) => { setField('recolha', e.target.value); setErrors(prev => ({ ...prev, recolha: false })) }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex: Lisboa, Rua Augusta 123"
                  className="w-full border-0 border-b-2 rounded-none bg-transparent py-4 text-xl text-left shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                  style={{ borderColor: errors.recolha ? '#cc0000' : c.outlineVariant }} />
                {errors.recolha && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                <div className="mt-10">
                  <motion.div
                    initial={false}
                    animate={{ opacity: recolha ? 1 : 0, y: recolha ? 0 : 8 }}
                    transition={{ duration: 0.25 }}
                    style={{ pointerEvents: recolha ? 'auto' : 'none' }}>
                    <Button onClick={handleAdvance} size="lg">OK</Button>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Step 4: Entrega */}
            {step === 4 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <div className="mb-12">
                  <MapPin size={28} className="mb-3" color={c.primary} />
                  <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Local de entrega</h2>
                  <p style={{ color: c.onSurfaceVariant }}>Para onde vão os seus bens?</p>
                </div>
                <Input ref={inputRef} type="text" value={entrega} onChange={(e) => { setField('entrega', e.target.value); setErrors(prev => ({ ...prev, entrega: false })) }}
                  onKeyDown={handleKeyDown}
                  placeholder="Ex: Porto, Rua das Flores 456"
                  className="w-full border-0 border-b-2 rounded-none bg-transparent py-4 text-xl text-left shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                  style={{ borderColor: errors.entrega ? '#cc0000' : c.outlineVariant }} />
                {errors.entrega && <p className="text-sm mt-2" style={{ color: '#cc0000' }}>Campo obrigatório</p>}
                <div className="mt-10">
                  <motion.div
                    initial={false}
                    animate={{ opacity: entrega ? 1 : 0, y: entrega ? 0 : 8 }}
                    transition={{ duration: 0.25 }}
                    style={{ pointerEvents: entrega ? 'auto' : 'none' }}>
                    <Button onClick={handleAdvance} size="lg">OK</Button>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Step 5: Data */}
            {step === 5 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <div className="mb-12">
                  <CalendarIcon size={28} className="mb-3" color={c.primary} />
                  <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Data da mudança</h2>
                  <p style={{ color: c.onSurfaceVariant }}>Quando pretende realizar a mudança?</p>
                </div>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger
                    className="w-full flex items-center border-0 border-b-2 rounded-none bg-transparent py-4 text-xl text-left font-normal shadow-none ring-0 focus-visible:ring-0 hover:bg-transparent cursor-pointer transition-colors"
                    style={{
                      borderColor: c.outlineVariant,
                      color: data ? c.onSurface : c.onSurfaceVariant,
                    }}>
                    <CalendarIcon size={20} style={{ marginRight: 8 }} />
                    {data
                      ? format(parse(data, 'yyyy-MM-dd', new Date()), "dd 'de' MMMM 'de' yyyy", { locale: pt })
                      : 'Selecionar data...'}
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto p-0"
                    align="start"
                    style={{
                      backgroundColor: '#ffffff',
                      borderColor: c.outlineVariant,
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
                    }}>
                    <DayPicker
                      mode="single"
                      selected={data ? parse(data, 'yyyy-MM-dd', new Date()) : undefined}
                      onSelect={(date) => {
                        if (date) {
                          setField('data', format(date, 'yyyy-MM-dd'))
                          setDateOpen(false)
                        }
                      }}
                      disabled={{ before: new Date() }}
                      style={{
                        ['--rdp-accent-color' as string]: c.primary,
                        ['--rdp-background-color' as string]: c.surface,
                        padding: '8px',
                      } as React.CSSProperties}
                    />
                  </PopoverContent>
                </Popover>
                <div className="mt-10">
                  <motion.div
                    initial={false}
                    animate={{ opacity: data ? 1 : 0, y: data ? 0 : 8 }}
                    transition={{ duration: 0.25 }}
                    style={{ pointerEvents: data ? 'auto' : 'none' }}>
                    <Button onClick={handleAdvance} size="lg">OK</Button>
                  </motion.div>
                </div>
              </div>
            )}

            {/* Step 6: Detalhes (opcional — button always visible, can skip) */}
            {step === 6 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Detalhes dos locais</h2>
                <p className="mb-6 text-sm" style={{ color: c.onSurfaceVariant }}>Opcional — ajuda-nos a preparar a equipa.</p>
                <div className="space-y-3 mb-8">
                  <Input type="text" value={pisoRecolha} onChange={(e) => setField('pisoRecolha', e.target.value)}
                    placeholder="Piso na recolha (ex: 3º)"
                    className="w-full border-0 border-b-2 rounded-none bg-transparent py-3 text-sm shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                    style={{ borderColor: c.outlineVariant }} />
                  <Input type="text" value={pisoEntrega} onChange={(e) => setField('pisoEntrega', e.target.value)}
                    placeholder="Piso na entrega (ex: 5º)"
                    className="w-full border-0 border-b-2 rounded-none bg-transparent py-3 text-sm shadow-none ring-0 focus-visible:ring-0 focus-visible:border-[#00317e] transition-colors"
                    style={{ borderColor: c.outlineVariant }} />
                  <Select value={elevador} onValueChange={(value) => setField('elevador', value)}>
                    <SelectTrigger
                      className="w-full border-0 border-b-2 rounded-none bg-transparent py-3 text-sm shadow-none ring-0 focus-visible:ring-0 h-auto"
                      style={{ borderColor: c.outlineVariant }}>
                      <SelectValue placeholder="Tem elevador?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Sim, ambos">Sim, em ambos</SelectItem>
                      <SelectItem value="Só na recolha">Só na recolha</SelectItem>
                      <SelectItem value="Só na entrega">Só na entrega</SelectItem>
                      <SelectItem value="Não">Não</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleAdvance}>Continuar</Button>
                </div>
              </div>
            )}

            {/* Step 7: Desmontagem (auto-advance on click) */}
            {step === 7 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <Wrench size={28} className="mb-3" color={c.primary} />
                <h2 className="text-3xl font-extrabold mb-8" style={{ color: c.primary }}>Precisa de desmontagem e/ou montagem de móveis?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {['Sim', 'Não'].map((opt) => (
                    <button key={opt} type="button" onClick={() => selectDesmontagem(opt)}
                      className="p-6 rounded-xl border text-center transition-all cursor-pointer hover:-translate-y-0.5"
                      style={{ borderColor: c.outlineVariant, backgroundColor: 'transparent' }}>
                      <span className="text-2xl font-bold">{opt}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 8: Extras */}
            {step === 8 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <h2 className="text-3xl font-extrabold mb-2" style={{ color: c.primary }}>Serviços extra</h2>
                <p className="mb-8 text-sm" style={{ color: c.onSurfaceVariant }}>Opcional — selecione o que precisar.</p>
                <div className="space-y-3 mb-8">
                  {extrasOptions.map((cb) => (
                    <label key={cb.value}
                      className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${extras.includes(cb.value) ? 'border-[#00317e] bg-[#e7eeff]' : ''}`}
                      style={{ borderColor: extras.includes(cb.value) ? c.primary : c.outlineVariant, backgroundColor: extras.includes(cb.value) ? c.surfaceHigh : 'transparent' }}>
                      <input type="checkbox" checked={extras.includes(cb.value)} onChange={() => toggleExtra(cb.value)} className="w-5 h-5" />
                      <div className="text-left"><span className="font-bold block text-sm">{cb.title}</span><span className="text-xs" style={{ color: c.onSurfaceVariant }}>{cb.desc}</span></div>
                    </label>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button onClick={handleAdvance}>Continuar</Button>
                </div>
              </div>
            )}

            {/* Step 9: Resumo */}
            {step === 9 && (
              <div>
                <span className="text-xs font-medium mb-2 block" style={{ color: c.onSurfaceVariant }}>{step} de {totalSteps}</span>
                <h2 className="text-3xl font-extrabold mb-6" style={{ color: c.primary }}>Resumo do pedido</h2>
                <div className="p-6 rounded-lg border mb-8 text-left text-sm" style={{ backgroundColor: c.surface, borderColor: c.outlineVariant }}>
                  <ul className="space-y-2" style={{ color: c.onSurfaceVariant }}>
                    {[
                      ['👤 Nome', nome], ['📦 Tipo', tipo], ['📍 Recolha', recolha + (pisoRecolha ? ` (Piso ${pisoRecolha})` : '')],
                      ['📍 Entrega', entrega + (pisoEntrega ? ` (Piso ${pisoEntrega})` : '')],
                      ['📅 Data', data || '—'], ['🔧 Desmontagem', desmontagem || '—'],
                      ['📦 Extras', extras.join(', ') || 'Nenhum'],
                      ...(observacoes ? [['📝 Notas', observacoes] as const] : []),
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between"><span>{label}:</span><strong style={{ color: c.onSurface }}>{value}</strong></li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end">
                  <Button onClick={sendWhatsApp} variant="whatsapp">Enviar via WhatsApp</Button>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Fixed footer — up/down navigation */}
      <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4" style={{ backgroundColor: c.bg }}>
        <span className="text-xs" style={{ color: c.onSurfaceVariant }}>© {new Date().getFullYear()} Falcão Mudanças</span>
        <div className="flex gap-1">
          <button onClick={prevStep} disabled={step <= 1}
            className="p-2 rounded-full transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Navigate to previous question"
            style={{ backgroundColor: c.surface, color: c.primary }}>
            <ChevronUp size={20} />
          </button>
          <button onClick={handleAdvance} disabled={step >= totalSteps}
            className="p-2 rounded-full transition-opacity cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Navigate to next question"
            style={{ backgroundColor: c.surface, color: c.primary }}>
            <ChevronDown size={20} />
          </button>
        </div>
      </footer>
    </div>
  )
}
