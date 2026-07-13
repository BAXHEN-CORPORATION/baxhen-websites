'use client'

import React, { useState, use } from 'react'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { Checkbox } from '@/components/ui/checkbox'
import { Shield, ArrowRight, Copy, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const BAXHEN_PHONE = '351932529986'

// ── Bilingual content ──────────────────────────────────────────────

const content = {
  pt: {
    nav: { howItWorks: 'Como Funciona', solutions: 'Soluções', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Começar',
    heading: 'Vamos construir a sua presença.',
    subtext: 'Conte à Baxhen um pouco sobre o seu negócio e o que precisa. Após preencher o formulário, uma mensagem de WhatsApp será preparada para continuarmos a conversa diretamente.',
    privacyTitle: 'Confidencial e Direto',
    privacyText: 'Os seus dados são usados apenas para preparar o seu briefing inicial. Sem cookies, sem spam.',
    sections: {
      contact: { num: '01', title: 'Dados de Contacto' },
      business: { num: '02', title: 'Contexto do Negócio' },
      objective: { num: '03', title: 'Objetivo Principal' },
      config: { num: '04', title: 'Configuração' },
      situation: { num: '05', title: 'Situação Atual' },
    },
    labels: {
      fullName: 'Nome Completo *',
      businessName: 'Nome do Negócio *',
      phone: 'Telefone (Opcional)',
      category: 'Categoria do Negócio *',
      location: 'Localização *',
      website: 'Website Existente (Opcional)',
      social: 'Instagram / Social (Opcional)',
      selectCategory: 'Selecionar categoria',
      categories: ['Consultoria / B2B', 'E-commerce / Retalho', 'Turismo / Hotelaria', 'Serviço Profissional', 'Outro'],
      selectAll: 'SELECIONAR TUDO QUE SE APLICA',
      objectives: ['Criar presença', 'Explicar serviços', 'Receber chamadas/mensagens', 'Receber reservas', 'Promover serviço', 'Apoiar campanha', 'Comunicar com turistas', 'Substituir/melhorar site', 'Não tenho a certeza'],
      websiteType: 'Tipo de Website',
      webTypes: ['Website empresarial completo', 'Página de geração de leads', 'Ajudem-me a escolher'],
      languageRequirements: 'Requisitos de Idioma',
      languageOptions: ['Português', 'English', 'Português e Inglês (Bilingue)', 'Outro'],
      hasAssets: 'Já tem textos e imagens?',
      hasSite: 'Tem atualmente um website?',
      yes: 'Sim', no: 'Não', partial: 'Parcial',
      launch: 'Quando gostaria de lançar?',
      launchOptions: ['O mais rápido possível', '1 mês', '3 meses', 'A explorar'],
      additional: 'Há algo importante que a Baxhen deva saber?',
      additionalPlaceholder: 'Conte-nos mais sobre as suas necessidades específicas...',
    },
    submit: 'Continuar no WhatsApp',
    disclaimer: 'Ao continuar, irá abrir o WhatsApp com uma mensagem. A mensagem não é enviada até que a confirme no WhatsApp.',
    privacyLink: 'Política de Privacidade',
    fallbackTitle: 'Não foi possível abrir o WhatsApp',
    fallbackText: 'Pode copiar a mensagem e o nosso número para enviar manualmente.',
    fallbackPhone: 'Baxhen WhatsApp',
    fallbackMsgLabel: 'Mensagem',
    fallbackCopy: 'Copiar Mensagem',
    close: 'Fechar',
    footer: '© {year} Baxhen Consulting.',
    footerLinks: { privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies' },
  },
  en: {
    nav: { howItWorks: 'How it Works', solutions: 'Solutions', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Get Started',
    heading: "Let's build your presence.",
    subtext: 'Tell Baxhen a little about your business and what you need. After completing the form, a WhatsApp message will be prepared so we can continue the conversation directly.',
    privacyTitle: 'Confidential & Direct',
    privacyText: 'Your data is only used to prepare your initial brief. No cookies, no spam.',
    sections: {
      contact: { num: '01', title: 'Contact Details' },
      business: { num: '02', title: 'Business Context' },
      objective: { num: '03', title: 'Main Objective' },
      config: { num: '04', title: 'Configuration' },
      situation: { num: '05', title: 'Current Situation' },
    },
    labels: {
      fullName: 'Full Name *',
      businessName: 'Business Name *',
      phone: 'Telephone (Optional)',
      category: 'Business Category *',
      location: 'Location *',
      website: 'Existing Website (Optional)',
      social: 'Instagram / Social (Optional)',
      selectCategory: 'Select a category',
      categories: ['Consulting / B2B', 'E-commerce / Retail', 'Tourism / Hospitality', 'Professional Service', 'Other'],
      selectAll: 'SELECT ALL THAT APPLY',
      objectives: ['Create presence', 'Explain services', 'Receive calls/messages', 'Receive bookings', 'Promote service', 'Support campaign', 'Communicate with tourists', 'Replace/improve site', 'Not sure'],
      websiteType: 'Website Type',
      webTypes: ['Complete business website', 'Focused lead-generation page', 'Help me choose'],
      languageRequirements: 'Language Requirements',
      languageOptions: ['Portuguese', 'English', 'Portuguese and English (Bilingual)', 'Other'],
      hasAssets: 'Do you have text and images ready?',
      hasSite: 'Do you currently have a website?',
      yes: 'Yes', no: 'No', partial: 'Partial',
      launch: 'When would you like to launch?',
      launchOptions: ['ASAP', '1 month', '3 months', 'Exploring'],
      additional: 'Is there anything important Baxhen should know?',
      additionalPlaceholder: 'Tell us more about your specific needs...',
    },
    submit: 'Continue on WhatsApp',
    disclaimer: 'By continuing, you will open WhatsApp with a message. The message is not sent until you confirm it inside WhatsApp.',
    privacyLink: 'Privacy Policy',
    fallbackTitle: "Couldn't open WhatsApp",
    fallbackText: 'You can copy the message and our number to send manually.',
    fallbackPhone: 'Baxhen WhatsApp',
    fallbackMsgLabel: 'Message',
    fallbackCopy: 'Copy Message',
    close: 'Close',
    footer: '© {year} Baxhen Consulting.',
    footerLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies' },
  },
}

// ── Styles ─────────────────────────────────────────────────────────

const c: Record<string, string> = {
  bg: '#0e1417',
  container: '#1a2123',
  primary: '#a8e8ff',
  primaryContainer: '#00d4ff',
  secondary: '#75d4e9',
  tertiary: '#ecddbc',
  onSurface: '#dde3e7',
  onSurfaceVariant: '#bbc9cf',
  onPrimaryContainer: '#00586b',
  border: 'rgba(60,73,78,0.4)',
}

// ── Page ───────────────────────────────────────────────────────────

interface PageProps { params: Promise<{ locale: string }> }

export default function ContactPage({ params }: PageProps) {
  const { locale } = use(params)
  const [showFallback, setShowFallback] = useState(false)
  const [fallbackMsg, setFallbackMsg] = useState('')
  const [copied, setCopied] = useState<'phone' | 'msg' | null>(null)
  const [selectedObjectives, setSelectedObjectives] = useState<string[]>([])
  const [webType, setWebType] = useState('')
  const [launch, setLaunch] = useState('')
  const [hasAssets, setHasAssets] = useState('')
  const [hasSite, setHasSite] = useState('')

  const t = content[locale as Locale] || content.en

  const toggleObjective = (obj: string) => {
    setSelectedObjectives((prev) =>
      prev.includes(obj) ? prev.filter((o) => o !== obj) : [...prev, obj],
    )
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)

    const getVal = (name: string) => (fd.get(name) as string) || ''

    const name = getVal('name')
    if (!name) return

    let message = `Hello Baxhen, I would like to discuss a website for my business.\n\n`
    message += `*Contact Information*\n- Name: ${name}\n- Business: ${getVal('businessName')}\n- Phone: ${getVal('phone') || 'N/A'}\n\n`
    message += `*Business Details*\n- Category: ${getVal('category')}\n- Location: ${getVal('location')}\n- Website: ${getVal('website') || 'None'}\n- Social: ${getVal('social') || 'None'}\n\n`
    message += `*Project Vision*\n- Objectives: ${selectedObjectives.join(', ') || 'None'}\n- Type: ${webType}\n- Languages: ${getVal('languages')}\n\n`
    message += `*Current Status*\n- Assets Ready: ${hasAssets}\n- Current Site: ${hasSite}\n- Launch Target: ${launch}\n\n`
    if (getVal('additional')) message += `*Additional Info*\n${getVal('additional')}\n`

    const url = `https://wa.me/${BAXHEN_PHONE}?text=${encodeURIComponent(message)}`
    const win = window.open(url, '_blank')
    if (!win || win.closed) {
      setFallbackMsg(message)
      setShowFallback(true)
    }
  }

  const copyToClipboard = (text: string, type: 'phone' | 'msg') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(14,20,23,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(60,73,78,0.15)' }}>
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href={`/${locale}/websites`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/websites#sectors`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm font-bold border-b-2 pb-1" style={{ color: c.primary, borderColor: c.primary }}>{t.nav.contact}</Link>
          </div>
          <Link href={`/${locale}/websites/contact`}>
            <Button size="sm" className="rounded-full font-bold" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>
              {t.cta}
            </Button>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10">
          {/* ── Sidebar ── */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-6" style={{ color: c.primary, letterSpacing: '-0.02em' }}>{t.heading}</h1>
            <p className="text-[18px] leading-[28px] mb-8" style={{ color: c.onSurfaceVariant }}>{t.subtext}</p>
            <div className="p-6 rounded-xl border" style={{ backgroundColor: c.container, borderColor: 'rgba(60,73,78,0.2)' }}>
              <div className="flex items-start gap-4">
                <Shield size={24} color={c.secondary} className="mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-bold">{t.privacyTitle}</p>
                  <p className="text-xs mt-1 text-muted-foreground">{t.privacyText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="lg:col-span-8">
            <form className="space-y-12" onSubmit={handleSubmit}>
              {/* 01: Contact Details */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold" style={{ color: c.tertiary }}>01</span>
                  <h2 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.sections.contact.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.fullName}</Label>
                    <Input name="name" placeholder="Elena Rodriguez" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.businessName}</Label>
                    <Input name="businessName" placeholder="Lumina Creative Agency" required />
                  </div>
                  <div className="md:col-span-2 flex flex-col gap-2">
                    <Label>{t.labels.phone}</Label>
                    <Input name="phone" type="tel" placeholder="+351 000 000 000" />
                  </div>
                </div>
              </section>

              {/* 02: Business Context */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold" style={{ color: c.tertiary }}>02</span>
                  <h2 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.sections.business.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.category}</Label>
                    <Select name="category" required>
                      <SelectTrigger><SelectValue placeholder={t.labels.selectCategory} /></SelectTrigger>
                      <SelectContent>
                        {t.labels.categories.map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.location}</Label>
                    <Input name="location" placeholder="City, Country" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.website}</Label>
                    <Input name="website" type="url" placeholder="https://..." />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>{t.labels.social}</Label>
                    <Input name="social" placeholder="@username" />
                  </div>
                </div>
              </section>

              {/* 03: Objectives */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold" style={{ color: c.tertiary }}>03</span>
                  <h2 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.sections.objective.title}</h2>
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-4">{t.labels.selectAll}</p>
                <div className="flex flex-wrap gap-3">
                  {t.labels.objectives.map((obj) => {
                    const isSelected = selectedObjectives.includes(obj)
                    return (
                      <label
                        key={obj}
                        className="flex items-center gap-2 border px-4 py-2 rounded-full cursor-pointer hover:opacity-80 transition-all text-sm"
                        style={{
                          borderColor: isSelected ? '#00d4ff' : c.border,
                          backgroundColor: isSelected ? 'rgba(0,212,255,0.2)' : 'transparent',
                          color: isSelected ? '#00d4ff' : c.onSurface,
                          fontWeight: isSelected ? 600 : 400,
                        }}
                      >
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleObjective(obj)}
                          className="size-4 rounded-sm border-[#3c494e] data-[state=checked]:border-[#00d4ff] data-[state=checked]:bg-[#00d4ff] data-[state=checked]:text-[#0e1417]"
                        />
                        {obj}
                      </label>
                    )
                  })}
                </div>
              </section>

              {/* 04: Configuration */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold" style={{ color: c.tertiary }}>04</span>
                  <h2 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.sections.config.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div>
                    <Label className="text-xs font-semibold uppercase tracking-widest mb-4 block">{t.labels.websiteType}</Label>
                    <RadioGroup value={webType} onValueChange={setWebType} className="space-y-3">
                      {t.labels.webTypes.map((opt) => (
                        <label key={opt} className="flex items-center gap-3 cursor-pointer">
                          <RadioGroupItem value={opt} />
                          <span className="font-bold text-sm">{opt}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label className="text-xs font-semibold uppercase tracking-widest">{t.labels.languageRequirements}</Label>
                    <Select name="languages">
                      <SelectTrigger><SelectValue placeholder={t.labels.languageOptions[0]} /></SelectTrigger>
                      <SelectContent>
                        {t.labels.languageOptions.map((opt) => (
                          <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </section>

              {/* 05: Current Situation */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-semibold" style={{ color: c.tertiary }}>05</span>
                  <h2 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.sections.situation.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <Label className="text-xs font-semibold mb-3 block">{t.labels.hasAssets}</Label>
                      <RadioGroup value={hasAssets} onValueChange={setHasAssets} className="flex gap-4">
                        {[t.labels.yes, t.labels.partial, t.labels.no].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                            <RadioGroupItem value={opt} /> {opt}
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                    <div>
                      <Label className="text-xs font-semibold mb-3 block">{t.labels.hasSite}</Label>
                      <RadioGroup value={hasSite} onValueChange={setHasSite} className="flex gap-4">
                        {[t.labels.yes, t.labels.no].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                            <RadioGroupItem value={opt} /> {opt}
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                  <div>
                    <Label className="text-xs font-semibold mb-3 block">{t.labels.launch}</Label>
                    <RadioGroup value={launch} onValueChange={setLaunch} className="grid grid-cols-2 gap-3">
                      {t.labels.launchOptions.map((opt) => (
                        <label
                          key={opt}
                          className="border px-4 py-2 rounded-lg cursor-pointer hover:opacity-80 transition-all text-center text-sm"
                          style={{
                            borderColor: launch === opt ? c.primaryContainer : c.border,
                            backgroundColor: launch === opt ? 'rgba(0,212,255,0.1)' : 'transparent',
                          }}
                        >
                          <RadioGroupItem value={opt} className="hidden" />
                          {opt}
                        </label>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </section>

              {/* Additional Info */}
              <section>
                <Label className="text-[24px] font-medium mb-2 block">{t.labels.additional}</Label>
                <Textarea name="additional" rows={4} placeholder={t.labels.additionalPlaceholder} className="mt-3" />
              </section>

              {/* Submit */}
              <div className="pt-8 border-t" style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
                <Button type="submit" size="lg" className="rounded-full font-bold text-lg gap-3 group hover:brightness-110 transition-all cursor-pointer" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>
                  {t.submit}
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="mt-6 text-xs max-w-lg leading-relaxed text-muted-foreground">
                  {t.disclaimer}{' '}
                  <Link href={`/${locale}/websites/privacy`} className="underline" style={{ color: c.primary }}>{t.privacyLink}</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* ── Fallback Modal ── */}
      {showFallback && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6" style={{ backgroundColor: 'rgba(14,20,23,0.8)', backdropFilter: 'blur(4px)' }}>
          <div className="p-8 rounded-2xl max-w-md w-full border shadow-2xl" style={{ backgroundColor: c.container, borderColor: 'rgba(60,73,78,0.3)' }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[24px] font-medium" style={{ color: c.primary }}>{t.fallbackTitle}</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowFallback(false)}><X size={18} /></Button>
            </div>
            <p className="mb-6 text-sm text-muted-foreground">{t.fallbackText}</p>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border flex justify-between items-center" style={{ borderColor: 'rgba(60,73,78,0.3)' }}>
                <div>
                  <p className="text-xs text-muted-foreground">{t.fallbackPhone}</p>
                  <p className="font-bold text-sm">+{BAXHEN_PHONE}</p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => copyToClipboard(`+${BAXHEN_PHONE}`, 'phone')}>
                  {copied === 'phone' ? <span className="text-xs text-green-400">✓</span> : <Copy size={18} />}
                </Button>
              </div>
              <div className="p-4 rounded-lg border" style={{ borderColor: 'rgba(60,73,78,0.3)' }}>
                <p className="text-xs text-muted-foreground mb-2">{t.fallbackMsgLabel}</p>
                <p className="text-sm italic mb-2 line-clamp-3">{fallbackMsg.slice(0, 200)}...</p>
                <Button variant="link" size="sm" className="gap-1 p-0 h-auto" style={{ color: c.primary }} onClick={() => copyToClipboard(fallbackMsg, 'msg')}>
                  {copied === 'msg' ? <span className="text-xs text-green-400">✓</span> : <Copy size={14} />} {t.fallbackCopy}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="border-t py-12 px-6 md:px-10" style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.footer.replace('{year}', String(new Date().getFullYear()))}</span>
          </div>
          <div className="flex gap-8">
            <Link href={`/${locale}/websites/privacy`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors text-muted-foreground">{t.footerLinks.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors text-muted-foreground">{t.footerLinks.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors text-muted-foreground">{t.footerLinks.cookies}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
