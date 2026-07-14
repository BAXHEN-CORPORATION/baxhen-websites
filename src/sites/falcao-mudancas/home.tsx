'use client'

import React, { useState, useRef, useEffect } from 'react'
import { FalcaoLayout } from './layout'
import { Home, Building2, Armchair, Phone, ChevronRight, Play, Pause, VolumeX } from 'lucide-react'

const c = {
  bg: '#f9f9ff',
  surface: '#f0f3ff',
  surfaceHigh: '#dee8ff',
  primary: '#00317e',
  primaryContainer: '#0046ad',
  tertiary: '#705d00',
  actionYellow: '#ffe16d',
  surfaceLow: '#cfdaf2',
  onSurface: '#111c2d',
  onSurfaceVariant: '#434653',
  onPrimary: '#ffffff',
  outline: '#737784',
  outlineVariant: '#c3c6d5',
  secondary: '#5c5f61',
} as const

const WHATSAPP = '351938711729'

interface FalcaoHomeContent {
  hero?: { heading?: string; subtext?: string }
}

export const defaultContent: FalcaoHomeContent = {
  hero: {
    heading: 'Mais do que objetos, transportamos o seu futuro.',
    subtext: 'MUDANÇAS DE CONFIANÇA',
  },
}

const step1Options = [
  { icon: Home, value: 'Casa', label: 'Casa / Apartamento' },
  { icon: Building2, value: 'Escritório', label: 'Escritório / Loja' },
  { icon: Armchair, value: 'Apenas Móveis', label: 'Apenas Móveis' },
]

const step3Options = [
  {
    value: 'Embalagem',
    title: 'Embalagem e Proteção',
    desc: 'Materiais profissionais para proteger os seus bens.',
  },
  {
    value: 'Desmontagem/Montagem',
    title: 'Desmontagem e Montagem',
    desc: 'Montamos e desmontamos todo o mobiliário.',
  },
  {
    value: 'Içamento',
    title: 'Içamento Externo',
    desc: 'Para prédios com acesso difícil ou sem elevador.',
  },
  {
    value: 'Armazenamento',
    title: 'Guarda-Móveis',
    desc: 'Armazenamento temporário durante a transição.',
  },
]

export const FalcaoHome = ({ content }: { content: FalcaoHomeContent }) => {
  const [step, setStep] = useState(1)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [data, setData] = useState({
    type: '',
    origin: '',
    destination: '',
    extras: [] as string[],
    name: '',
    phone: '',
    date: '',
    floorOrigin: '',
    floorDest: '',
    hasElevator: '',
    parking: '',
    notes: '',
  })
  const videoRef = useRef<HTMLVideoElement>(null)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)
    vid.addEventListener('play', onPlay)
    vid.addEventListener('pause', onPause)
    return () => {
      vid.removeEventListener('play', onPlay)
      vid.removeEventListener('pause', onPause)
    }
  }, [])

  const handleVideoClick = () => {
    const vid = videoRef.current
    if (!vid) return
    if (muted) {
      // First click: unmute + restart from beginning
      vid.currentTime = 0
      vid.muted = false
      setMuted(false)
      vid.play()
    } else {
      // Normal play/pause
      if (vid.paused) vid.play()
      else vid.pause()
    }
  }

  const handleMouseEnter = () => {
    clearTimeout(hideTimer.current)
    setShowControls(true)
  }
  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setShowControls(false), 800)
  }

  const updateField = (field: string, value: string) => setData((d) => ({ ...d, [field]: value }))

  const nextStep = (s: number, value?: string) => {
    if (value) setData((d) => ({ ...d, type: value }))
    if (s === 3) {
      const fields = [
        'origin',
        'destination',
        'name',
        'phone',
        'date',
        'floorOrigin',
        'floorDest',
        'hasElevator',
        'parking',
        'notes',
      ]
      const updates: Record<string, string> = {}
      fields.forEach((f) => {
        const el = document.getElementById(`fm-${f}`) as HTMLInputElement | HTMLSelectElement | null
        if (el) updates[f] = el.value
      })
      setData((d) => ({ ...d, ...updates }))
    }
    if (s === 4) {
      const cbs = document.querySelectorAll<HTMLInputElement>(
        '#step-3 input[type="checkbox"]:checked',
      )
      setData((d) => ({ ...d, extras: Array.from(cbs).map((c) => c.value) }))
    }
    setStep(s)
  }

  const sendWhatsApp = () => {
    const lines = [
      `Olá Falcão Mudanças! Gostaria de um orçamento:`,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      `Tipo: ${data.type}`,
      `Origem: ${data.origin} (Piso: ${data.floorOrigin})`,
      `Destino: ${data.destination} (Piso: ${data.floorDest})`,
      `Elevador: ${data.hasElevator || 'Não informado'}`,
      `Estacionamento: ${data.parking || 'Não informado'}`,
      `Data: ${data.date}`,
      `Serviços extra: ${data.extras.join(', ') || 'Nenhum'}`,
      `Notas: ${data.notes || 'Nenhuma'}`,
    ].join('\n')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines)}`, '_blank')
  }

  return (
    <FalcaoLayout>
      {/* Hero with video */}
      <section className="max-w-[1200px] mx-auto px-4 text-center pt-8 md:pt-12 pb-12">
        <span
          className="text-sm font-semibold tracking-widest uppercase block mb-4"
          style={{ color: c.secondary }}
        >
          {content.hero?.subtext || 'MUDANÇAS DE CONFIANÇA'}
        </span>
        <h1
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 max-w-3xl mx-auto"
          style={{ color: c.primary, letterSpacing: '-0.02em' }}
        >
          Mais do que <span style={{ color: c.tertiary }}>objetos</span>, transportamos o seu{' '}
          <span style={{ color: c.tertiary }}>futuro</span>.
        </h1>
        {/* Video Player — VSL style */}
        <div
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-2xl"
          style={{ backgroundColor: '#000' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleVideoClick}
        >
          <video
            ref={videoRef}
            className="w-full h-full cursor-pointer"
            autoPlay
            loop
            muted
            playsInline
            src="/assets/falcao/video.webm"
          />
          {/* Center icon overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${showControls || muted || !playing ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: !playing || muted ? 'rgba(0,0,0,0.2)' : 'transparent' }}
          >
            {muted && (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              >
                <VolumeX size={32} color={c.primary} />
              </div>
            )}
            {!muted && !playing && (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              >
                <Play size={32} color={c.primary} className="ml-1" />
              </div>
            )}
            {!muted && playing && showControls && (
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              >
                <Pause size={32} color={c.primary} />
              </div>
            )}
          </div>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 text-sm"
          style={{ color: c.onSurfaceVariant }}
        >
          {[
            'WhatsApp direto',
            'Desmontagem e montagem',
            'Residências e empresas',
            'Lisboa, Setúbal, Margem Sul',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1">
              <span style={{ color: c.actionYellow }}>●</span> {t}
            </span>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-16" style={{ backgroundColor: c.surface }}>
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: c.primary }}>
            Como funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
            {[
              'Envie os detalhes pelo WhatsApp',
              'Partilhe fotos ou marque avaliação',
              'Receba uma proposta',
              'Confirme a data',
              'A equipa realiza a mudança',
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ backgroundColor: c.primary, color: c.onPrimary }}
                >
                  {i + 1}
                </div>
                <p className="text-sm" style={{ color: c.onSurfaceVariant }}>
                  {step}
                </p>
                {i < 4 && (
                  <ChevronRight
                    size={20}
                    className="hidden md:block absolute right-0 top-6"
                    style={{ color: c.outlineVariant }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20" id="orcamento">
        <div className="max-w-[800px] mx-auto px-4">
          <div
            className="w-full h-1 mb-8 rounded-full overflow-hidden"
            style={{ backgroundColor: c.surfaceLow }}
          >
            <div
              className="h-full transition-all duration-500"
              style={{ width: `${step * 25}%`, backgroundColor: c.actionYellow }}
            />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold" style={{ color: c.primary }}>
              Peça o seu orçamento
            </h2>
            <p className="mt-2" style={{ color: c.onSurfaceVariant }}>
              Sem compromisso. Resposta rápida pelo WhatsApp.
            </p>
          </div>
          <div
            className="rounded-xl shadow-sm border p-8 min-h-[400px] flex flex-col justify-center"
            style={{ backgroundColor: '#fff', borderColor: c.outlineVariant }}
          >
            {step === 1 && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8" style={{ color: c.primary }}>
                  O que precisa de mudar?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {step1Options.map((opt) => {
                    const Icon = opt.icon
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => nextStep(2, opt.value)}
                        className="flex flex-col items-center justify-center p-6 border rounded-lg hover:opacity-80 transition-all"
                        style={{ borderColor: c.outlineVariant, color: c.onSurface }}
                      >
                        <Icon size={32} className="mb-3" color={c.primary} />
                        <span className="text-sm font-semibold">{opt.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
            {step === 2 && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-8" style={{ color: c.primary }}>
                  Detalhes da mudança
                </h3>
                <div className="space-y-4">
                  {[
                    { id: 'name', label: 'Nome', type: 'text', placeholder: 'O seu nome' },
                    {
                      id: 'phone',
                      label: 'Telefone / WhatsApp',
                      type: 'tel',
                      placeholder: '938 711 729',
                    },
                    {
                      id: 'origin',
                      label: 'Local de recolha',
                      type: 'text',
                      placeholder: 'Ex: Lisboa',
                    },
                    {
                      id: 'destination',
                      label: 'Local de entrega',
                      type: 'text',
                      placeholder: 'Ex: Porto',
                    },
                    { id: 'date', label: 'Data pretendida', type: 'date', placeholder: '' },
                    {
                      id: 'floorOrigin',
                      label: 'Piso na origem',
                      type: 'text',
                      placeholder: 'Ex: 3º',
                    },
                    {
                      id: 'floorDest',
                      label: 'Piso no destino',
                      type: 'text',
                      placeholder: 'Ex: 5º',
                    },
                    {
                      id: 'hasElevator',
                      label: 'Tem elevador?',
                      type: 'select',
                      placeholder: '',
                      options: ['Sim', 'Não', 'Só num dos lados'],
                    },
                    {
                      id: 'parking',
                      label: 'Estacionamento disponível?',
                      type: 'select',
                      placeholder: '',
                      options: ['Sim', 'Não', 'Difícil'],
                    },
                    {
                      id: 'notes',
                      label: 'Observações (móveis principais, objetos especiais)',
                      type: 'text',
                      placeholder: 'Ex: sofá de 3 lugares, frigorífico, roupeiro',
                    },
                  ].map((f) => (
                    <div key={f.id}>
                      <label
                        className="block text-sm font-semibold mb-1"
                        style={{ color: c.onSurfaceVariant }}
                      >
                        {f.label}
                      </label>
                      {f.type === 'select' ? (
                        <select
                          id={`fm-${f.id}`}
                          className="w-full border rounded-lg bg-transparent py-3 px-4 text-sm outline-none"
                          style={{ borderColor: c.outlineVariant }}
                        >
                          <option value="">Selecionar</option>
                          {(f.options || []).map((o) => (
                            <option key={o} value={o}>
                              {o}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={`fm-${f.id}`}
                          type={f.type}
                          className="w-full border-b-2 bg-transparent py-3 text-sm outline-none transition-colors"
                          style={{ borderColor: c.outlineVariant }}
                          placeholder={f.placeholder}
                        />
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => nextStep(3)}
                    className="w-full h-14 rounded-lg text-sm font-semibold uppercase mt-4 hover:opacity-90 transition-all"
                    style={{ backgroundColor: c.primary, color: c.onPrimary }}
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div id="step-3">
                <h3 className="text-2xl font-bold text-center mb-8" style={{ color: c.primary }}>
                  Serviços Extra
                </h3>
                <div className="space-y-4">
                  {step3Options.map((cb) => (
                    <label
                      key={cb.value}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:opacity-80 transition-colors"
                      style={{ borderColor: c.outlineVariant }}
                    >
                      <input type="checkbox" value={cb.value} className="w-6 h-6 mr-4" />
                      <div>
                        <span className="font-bold block text-sm">{cb.title}</span>
                        <span className="text-xs" style={{ color: c.onSurfaceVariant }}>
                          {cb.desc}
                        </span>
                      </div>
                    </label>
                  ))}
                  <button
                    type="button"
                    onClick={() => nextStep(4)}
                    className="w-full h-14 rounded-lg text-sm font-semibold uppercase mt-4 hover:opacity-90 transition-all"
                    style={{ backgroundColor: c.primary, color: c.onPrimary }}
                  >
                    Ver Resumo
                  </button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div>
                <h3 className="text-2xl font-bold text-center mb-6" style={{ color: c.primary }}>
                  Resumo do pedido
                </h3>
                <div
                  className="p-6 rounded-lg mb-8 border text-sm"
                  style={{ backgroundColor: c.surface, borderColor: c.outlineVariant }}
                >
                  <ul className="space-y-2" style={{ color: c.onSurfaceVariant }}>
                    {[
                      ['Nome', data.name],
                      ['Telefone', data.phone],
                      ['Tipo', data.type],
                      ['Origem', `${data.origin} (Piso ${data.floorOrigin || '?'})`],
                      ['Destino', `${data.destination} (Piso ${data.floorDest || '?'})`],
                      ['Elevador', data.hasElevator || 'Não informado'],
                      ['Estacionamento', data.parking || 'Não informado'],
                      ['Data', data.date],
                      ['Extras', data.extras.join(', ') || 'Nenhum'],
                    ].map(([label, value]) => (
                      <li key={label} className="flex justify-between">
                        <span>{label}:</span>
                        <strong style={{ color: c.onSurface }}>{value || '—'}</strong>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="w-full h-14 rounded-full text-sm font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md"
                  style={{ backgroundColor: '#25D366', color: '#fff' }}
                >
                  <Phone size={20} /> Enviar Pedido via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-16" style={{ backgroundColor: c.surface }}>
        <div className="max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: c.primary }}>
            Área de atuação
          </h2>
          <p className="text-sm" style={{ color: c.onSurfaceVariant }}>
            Trabalhamos principalmente em{' '}
            <strong style={{ color: c.onSurface }}>Lisboa, Setúbal e Margem Sul</strong>. Para
            outros destinos em Portugal, peça uma avaliação personalizada.
          </p>
        </div>
      </section>
    </FalcaoLayout>
  )
}
