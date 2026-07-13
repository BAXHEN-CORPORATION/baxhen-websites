import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { BarChart3, MessageCircle, ClipboardCheck, FileText, ShieldCheck, Wrench, Eye, Rocket, Headphones } from 'lucide-react'

// ── Bilingual content ──────────────────────────────────────────────

const content = {
  pt: {
    title: 'Processo — Baxhen',
    description: 'O nosso processo estruturado em 9 etapas. Precisão não é um luxo; é a base da escala.',
    nav: { howItWorks: 'Como Funciona', solutions: 'Soluções', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Começar',
    hero: {
      badge: 'Metodologia',
      heading: 'O Nosso Processo Estruturado',
      subtext: 'Precisão não é um luxo; é a base da escala. A nossa jornada disciplinada de 9 etapas garante que cada decisão é baseada em dados e alinhada com a sua visão de longo prazo.',
    },
    stages: [
      { num: '01', icon: BarChart3, title: 'Análise de Negócio', text: 'Uma auditoria completa do seu ecossistema digital. Revemos o seu site existente, presença nas redes sociais, visibilidade no Google, serviços e cenário competitivo para estabelecer uma linha de base.' },
      { num: '02', icon: MessageCircle, title: 'Conversa de Descoberta', text: 'Diálogo profundo sobre os objetivos principais. Alinhamos serviços primários, ações desejadas dos clientes, requisitos linguísticos, integrações necessárias e prazos de implementação.' },
      { num: '03', icon: ClipboardCheck, title: 'Recomendação', text: 'Determinação técnica da estrutura do projeto: Presença Empresarial, Geração de Leads ou modelo Híbrido. Excluímos rigorosamente qualquer serviço que não ofereça valor direto aos seus objetivos.' },
      { num: '04', icon: FileText, title: 'Proposta Privada', text: 'Um plano detalhado da solução. Este documento define claramente o escopo, escolhas de infraestrutura, páginas específicas, marcos de entrega e estrutura de preços fixa.' },
      { num: '05', icon: ShieldCheck, title: 'Confirmação de Conteúdo', text: 'Validação dos blocos de construção. O cliente confirma a precisão dos dados do negócio, diretrizes de marca, imagens e traduções profissionais antes do início da produção.' },
      { num: '06', icon: Wrench, title: 'Produção', text: 'Os engenheiros da Baxhen executam a construção usando o nosso sistema de design proprietário. Focamo-nos na tradução visual de alta fidelidade e otimização técnica para desempenho e SEO.' },
      { num: '07', icon: Eye, title: 'Revisão e Aprovação', text: 'Uma fase estruturada de QA onde o cliente revê a versão de staging ao vivo. Quaisquer correções finais são geridas contra as especificações da proposta inicial para garantir a perfeição.' },
      { num: '08', icon: Rocket, title: 'Lançamento', text: 'A transição para produção. Isto inclui mapeamento de DNS do domínio, implementação de SSL, testes abrangentes entre dispositivos, validação de formulários e configuração final do servidor.' },
      { num: '09', icon: Headphones, title: 'Suporte Contínuo', text: 'Parceria de longo prazo. Gerimos atualizações, monitorizamos o desempenho analítico, facilitamos campanhas publicitárias e fornecemos desenvolvimento personalizado à medida que o seu negócio evolui.' },
    ],
    finalCta: {
      heading: 'Pronto para iniciar a sua jornada?',
      subtext: 'A nossa avaliação é o primeiro passo para uma presença digital transformadora adaptada precisamente às suas necessidades operacionais.',
      primary: 'Iniciar a Avaliação',
      secondary: 'Falar com um Consultor',
    },
    footer: '© {year} Baxhen Consulting. Todos os direitos reservados.',
    footerLinks: { privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies' },
  },
  en: {
    title: 'Process — Baxhen',
    description: 'Our structured 9-stage process. Precision is not a luxury; it is the foundation of scale.',
    nav: { howItWorks: 'How it Works', solutions: 'Solutions', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Get Started',
    hero: {
      badge: 'Methodology',
      heading: 'Our Structured Process',
      subtext: 'Precision is not a luxury; it is the foundation of scale. Our disciplined 9-stage journey ensures every decision is backed by data and aligned with your long-term vision.',
    },
    stages: [
      { num: '01', icon: BarChart3, title: 'Business Review', text: 'A comprehensive audit of your digital ecosystem. We review your existing site, social media presence, Google visibility, services, and competitive landscape to establish a baseline.' },
      { num: '02', icon: MessageCircle, title: 'Discovery Conversation', text: 'Deep-dive dialogue regarding core objectives. We align on primary services, desired customer actions, linguistic requirements, necessary integrations, and deployment timelines.' },
      { num: '03', icon: ClipboardCheck, title: 'Recommendation', text: 'Technical determination of project structure: Business Presence, Lead-Generation focus, or a Hybrid model. We ruthlessly exclude any services that do not offer direct value to your goals.' },
      { num: '04', icon: FileText, title: 'Private Proposal', text: 'A detailed blueprint of the solution. This document clearly defines the scope, infrastructure choices, specific pages, delivery milestones, and fixed pricing structure.' },
      { num: '05', icon: ShieldCheck, title: 'Content Confirmation', text: 'Validation of the building blocks. The client confirms accuracy of business data, brand guidelines, imagery, and professional translations before production begins.' },
      { num: '06', icon: Wrench, title: 'Production', text: 'Baxhen engineers execute the build using our proprietary design system. We focus on high-fidelity visual translation and technical optimization for performance and SEO.' },
      { num: '07', icon: Eye, title: 'Review & Approval', text: 'A structured QA phase where the client reviews the live staging version. Any final corrections are managed against the initial proposal specifications to ensure perfection.' },
      { num: '08', icon: Rocket, title: 'Launch', text: 'The transition to production. This includes domain DNS mapping, SSL deployment, comprehensive cross-device testing, form logic validation, and final server config.' },
      { num: '09', icon: Headphones, title: 'Continued Support', text: 'Long-term partnership. We manage updates, track analytics performance, facilitate advertising campaigns, and provide custom development as your business evolves.' },
    ],
    finalCta: {
      heading: 'Ready to initiate your journey?',
      subtext: 'Our assessment is the first step toward a transformative digital presence tailored precisely to your operational needs.',
      primary: 'Start the Assessment',
      secondary: 'Speak with a Consultant',
    },
    footer: '© {year} Baxhen Consulting. All rights reserved.',
    footerLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies' },
  },
}

// ── Styles ─────────────────────────────────────────────────────────

const c = {
  bg: '#0e1417',
  surface: '#0e1417',
  surfaceLow: '#161d1f',
  surfaceLowest: '#080f12',
  surfaceContainer: '#1a2123',
  primary: '#a8e8ff',
  primaryContainer: '#00d4ff',
  onPrimary: '#003642',
  onPrimaryContainer: '#00586b',
  secondary: '#75d4e9',
  tertiary: '#ecddbc',
  onSurface: '#dde3e7',
  onSurfaceVariant: '#bbc9cf',
  outlineVariant: '#3c494e',
}

// ── Page ───────────────────────────────────────────────────────────

interface PageProps { params: Promise<{ locale: string }> }

export default async function ProcessPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale as Locale] || content.en

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(14,20,23,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(60,73,78,0.15)' }}>
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href={`/${locale}/websites`} className="text-sm font-bold border-b-2 pb-1" style={{ color: c.primary, borderColor: c.primary }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/websites#sectors`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</Link>
          </div>
          <Link href={`/${locale}/websites/contact`} className="px-6 py-2.5 text-xs font-bold rounded-full hover:brightness-110 transition-all" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>{t.cta}</Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* ── Hero ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 mb-24 text-center">
          <div className="inline-block px-4 py-1 mb-6 rounded-full border" style={{ borderColor: 'rgba(168,232,255,0.2)', backgroundColor: 'rgba(168,232,255,0.05)' }}>
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: c.primary }}>{t.hero.badge}</span>
          </div>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-6 max-w-3xl mx-auto" style={{ letterSpacing: '-0.02em' }}>{t.hero.heading}</h1>
          <p className="text-[18px] leading-[28px] max-w-2xl mx-auto opacity-80" style={{ color: c.onSurfaceVariant }}>{t.hero.subtext}</p>
        </section>

        {/* ── Process Timeline ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 relative">
          {/* Center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-0 opacity-20" style={{ backgroundColor: c.primary }} />

          <div className="space-y-12 md:space-y-0 relative z-10">
            {t.stages.map((stage, i) => {
              const isReversed = i % 2 === 1
              const Icon = stage.icon

              return (
                <div key={i} className={`flex flex-col md:flex-row items-center md:items-start group ${isReversed ? 'md:flex-row-reverse' : ''}`}>
                  {/* Text side */}
                  <div className={`md:w-1/2 pb-8 md:pb-24 ${isReversed ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                    {/* Mobile icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 md:hidden" style={{ backgroundColor: c.surfaceContainer, border: `1px solid rgba(60,73,78,0.3)` }}>
                      <Icon size={22} color={c.primary} />
                    </div>
                    <h3 className="text-[24px] leading-[32px] font-medium mb-3" style={{ color: c.primary }}>{stage.num}. {stage.title}</h3>
                    <p className="leading-relaxed" style={{ color: c.onSurfaceVariant }}>{stage.text}</p>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="hidden md:flex flex-col items-center px-6">
                    <div className="w-12 h-12 rounded-full border-2 flex items-center justify-center z-20 transition-transform duration-500" style={{ backgroundColor: c.bg, borderColor: c.primary, boxShadow: `0 0 15px rgba(168,232,255,0.3)` }}>
                      <Icon size={20} color={c.primary} />
                    </div>
                  </div>

                  {/* Visual side (desktop placeholder) */}
                  <div className={`md:w-1/2 pt-4 hidden md:block ${isReversed ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="w-full h-40 rounded-2xl border overflow-hidden relative" style={{ backgroundColor: c.surfaceContainer, borderColor: 'rgba(60,73,78,0.1)' }}>
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom right, ${c.primary}10, transparent)` }} />
                      <div className="p-6 h-full flex items-center justify-center">
                        <div className="text-center">
                          <Icon size={32} color={c.primary} className="mx-auto mb-2 opacity-50" />
                          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-40" style={{ color: c.primary }}>{stage.num}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 mt-24">
          <div className="rounded-[2rem] border p-12 lg:p-24 text-center overflow-hidden relative" style={{ backgroundColor: c.surfaceContainer, borderColor: 'rgba(60,73,78,0.1)' }}>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(168,232,255,0.05)', filter: 'blur(100px)' }} />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(117,212,233,0.05)', filter: 'blur(100px)' }} />
            <h2 className="text-[32px] md:text-[40px] font-semibold mb-8 relative z-10">{t.finalCta.heading}</h2>
            <p className="text-[18px] mb-12 max-w-xl mx-auto relative z-10" style={{ color: c.onSurfaceVariant }}>{t.finalCta.subtext}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
              <Link href={`/${locale}/websites/contact`} className="font-bold text-lg px-10 py-5 rounded-full hover:scale-105 active:scale-95 transition-all" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>{t.finalCta.primary}</Link>
              <Link href={`/${locale}/websites/contact`} className="font-bold pb-1 transition-all border-b-2 border-transparent hover:opacity-80" style={{ color: c.primary }}>{t.finalCta.secondary}</Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ backgroundColor: c.surfaceLowest, borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="max-w-[1280px] mx-auto py-12 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>
              baxh<span style={{ color: c.primaryContainer }}>e</span>n
            </span>
            <span className="text-xs uppercase tracking-widest opacity-80" style={{ color: c.onSurfaceVariant }}>{t.footer.replace('{year}', String(new Date().getFullYear()))}</span>
          </div>
          <div className="flex gap-8">
            <Link href={`/${locale}/websites/privacy`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs uppercase tracking-widest hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.cookies}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale] || content.en
  return { title: t.title, description: t.description }
}
