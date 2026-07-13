import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { Check, Target, ThumbsUp, Megaphone, Globe, Calendar, BarChart3, Store, Code, RefreshCw, Verified, Zap } from 'lucide-react'

// ── Bilingual content ──────────────────────────────────────────────

const content = {
  pt: {
    title: 'Soluções — Baxhen',
    description: 'Website empresarial e páginas de geração de leads. Estruturas adaptadas ao objetivo do seu negócio.',
    nav: { howItWorks: 'Como Funciona', solutions: 'Soluções', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Solicitar Preview',
    hero: {
      heading: 'O website certo depende do que o seu negócio ',
      headingHighlight: 'precisa que os visitantes façam.',
      subtext: 'A Baxhen seleciona uma estrutura com base no seu objetivo de negócio específico, em vez de aplicar o mesmo modelo comercial a todos os clientes.',
    },
    business: {
      badge: 'SOLUÇÃO 01',
      title: 'Website de Presença Empresarial',
      description: 'Projetado para empresas estabelecidas que necessitam de uma pegada digital completa e credível. Esta solução prioriza a credibilidade e serve como o centro de informação principal do seu negócio.',
      problemLabel: 'Problema Resolvido',
      problem: 'Fragmentação de informação e falta de autoridade profissional. Estabelece uma "fonte única de verdade" para clientes, parceiros e colaboradores.',
      features: ['Pronto para Multilingue', 'Fundações de SEO'],
      architectureLabel: 'Componentes de Arquitetura',
      architecture: [
        { name: 'Centro de Experiência', detail: 'Início / Sobre' },
        { name: 'Catálogos Interativos', detail: 'Menu / Galeria' },
        { name: 'Acesso ao Ponto Físico', detail: 'Mapa e Horários' },
        { name: 'Motor de Consultas', detail: 'Formulários' },
        { name: 'Arquitetura PT/EN', detail: 'Alcance Global' },
      ],
    },
    lead: {
      badge: 'SOLUÇÃO 02',
      title: 'Website de Geração de Leads',
      description: 'Quando uma campanha precisa de foco total. Esta solução remove distrações para canalizar cada visitante para um objetivo de negócio específico.',
      metricsLabel: 'Métricas de Conversão',
      primaryObjective: 'Objetivo Principal',
      primaryValue: 'Submissões de Formulário Qualificadas',
      campaignTitle: 'Tracking de Campanhas',
      campaignText: 'Integração com pixels de publicidade para monitorização de ROI em tempo real.',
      qualificationTitle: 'Formulários de Qualificação',
      qualificationText: 'Filtre leads de baixa qualidade antes que cheguem à sua caixa de entrada.',
      focusPoints: [
        { title: 'Headline Focada', text: 'Alinhada perfeitamente com grupos de anúncios ou intenção de pesquisa.' },
        { title: 'Sinais de Confiança', text: 'Posicionamento estratégico de testemunhos e blocos de credibilidade.' },
        { title: 'CTA Claro', text: 'Uma ação principal que nunca sai da linha de visão do utilizador.' },
      ],
    },
    hybrid: {
      title: 'A Estratégia Híbrida',
      text: 'Alguns negócios beneficiam de um site principal de alta autoridade enquanto executam simultaneamente páginas de campanha focadas para ofertas trimestrais específicas.',
      highlight: 'A Baxhen recomenda isto apenas quando o volume e a natureza dos requisitos do negócio justificam o investimento.',
      tags: ['Alocação Equilibrada de Recursos', 'Navegação de Dupla Intenção'],
    },
    capabilities: {
      heading: 'Capacidades Opcionais',
      items: [
        { title: 'Gestão de Conteúdo Bilingue', text: 'Estruturas integradas em português e inglês para empresas com alcance global.' },
        { title: 'Reservas', text: 'Sincronização direta de calendário para consultas de alto valor.' },
        { title: 'Analytics', text: 'Tracking de dados que realmente importa.' },
        { title: 'Google Business', text: 'Fundações de SEO local e integração com mapas.' },
        { title: 'Desenvolvimento Personalizado', text: 'Quando soluções standard não são suficientes, construímos ferramentas à medida dos seus workflows e interações com clientes.' },
        { title: 'Alterações Geridas', text: 'Tratamos das atualizações técnicas.' },
      ],
    },
    closingCta: {
      quote: '"A Baxhen recomendará apenas as capacidades que são relevantes para o seu objetivo atual."',
      button: 'Obter uma Recomendação Personalizada',
    },
    footer: {
      tagline: 'Minimalismo Profissional em Consultoria Web. Ajudamos negócios a escalar com arquitetura digital intencional.',
      quickLinks: 'Links Rápidos',
      legal: 'Legal',
      privacy: 'Privacidade',
      terms: 'Termos de Serviço',
      cookies: 'Cookies',
      copyright: '© {year} Baxhen.',
    },
  },
  en: {
    title: 'Solutions — Baxhen',
    description: 'Business presence websites and lead-generation pages. Structures adapted to your business objective.',
    nav: { howItWorks: 'How it Works', solutions: 'Solutions', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Request a Preview',
    hero: {
      heading: 'The right website depends on what your business ',
      headingHighlight: 'needs visitors to do.',
      subtext: 'Baxhen selects a structure based on your specific business objective rather than applying the same commercial template to every client.',
    },
    business: {
      badge: 'SOLUTION 01',
      title: 'Business Presence Website',
      description: 'Designed for established companies requiring a complete, authoritative digital footprint. This solution prioritizes credibility and serves as the primary information hub for your business.',
      problemLabel: 'Problem Solved',
      problem: 'Fragmentation of information and lack of professional authority. This establishes a "single source of truth" for clients, partners, and employees.',
      features: ['Multilingual Ready', 'SEO Foundations'],
      architectureLabel: 'Architecture Components',
      architecture: [
        { name: 'Comprehensive Experience Hub', detail: 'Home / About' },
        { name: 'Interactive Catalogues', detail: 'Menu / Gallery' },
        { name: 'Physical Point Access', detail: 'Map & Opening Hours' },
        { name: 'Strategic Inquiry Engine', detail: 'Custom Forms' },
        { name: 'Portuguese / English Architecture', detail: 'Global Reach' },
      ],
    },
    lead: {
      badge: 'SOLUTION 02',
      title: 'Lead-Generation Website',
      description: 'When a campaign needs laser-focus. This solution strips away distractions to channel every visitor toward a singular business objective or specific offer.',
      metricsLabel: 'Conversion Metrics',
      primaryObjective: 'Primary Objective',
      primaryValue: 'Qualified Form Submissions',
      campaignTitle: 'Campaign Tracking',
      campaignText: 'Deep integration with advertising pixels for real-time ROI monitoring.',
      qualificationTitle: 'Qualification Forms',
      qualificationText: 'Filter out low-quality leads before they reach your inbox.',
      focusPoints: [
        { title: 'Focused Headline', text: 'Aligned perfectly with specific ad groups or search intent.' },
        { title: 'Trust Signals', text: 'Strategic testimonial placement and credibility blocks.' },
        { title: 'Clear CTA', text: 'A primary action that never leaves the user\'s line of sight.' },
      ],
    },
    hybrid: {
      title: 'The Hybrid Strategy',
      text: 'Some businesses benefit from a high-authority main site while simultaneously running focused campaign pages for specific quarterly offers.',
      highlight: 'Baxhen recommends this only when the volume and nature of the business requirements justify the investment.',
      tags: ['Balanced Resource Allocation', 'Dual-Intent Navigation'],
    },
    capabilities: {
      heading: 'Optional Capabilities',
      items: [
        { title: 'Bilingual Content Management', text: 'Seamlessly integrated Portuguese and English structures for global-facing consultancy firms.' },
        { title: 'Booking', text: 'Direct calendar sync for high-value consultations.' },
        { title: 'Analytics', text: 'Data tracking that matters.' },
        { title: 'Google Business', text: 'Local SEO foundations and maps.' },
        { title: 'Dedicated Custom Development', text: 'When standard solutions aren\'t enough, we build custom tools tailored to your unique internal workflows and client interactions.' },
        { title: 'Managed Changes', text: 'We handle the tech updates.' },
      ],
    },
    closingCta: {
      quote: '"Baxhen will recommend only the capabilities that are relevant to your current objective."',
      button: 'Get a Personalized Recommendation',
    },
    footer: {
      tagline: 'Professional Minimalism in Web Consulting. Helping businesses scale with intentional digital architecture.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      cookies: 'Cookies',
      copyright: '© {year} Baxhen.',
    },
  },
}

// ── Styles ─────────────────────────────────────────────────────────

const c = {
  bg: '#0e1417',
  surface: '#0e1417',
  surfaceLow: '#161d1f',
  primary: '#a8e8ff',
  primaryContainer: '#00d4ff',
  onPrimary: '#003642',
  onPrimaryContainer: '#00586b',
  secondary: '#75d4e9',
  tertiary: '#ecddbc',
  onTertiary: '#383019',
  onSurface: '#dde3e7',
  onSurfaceVariant: '#bbc9cf',
  outline: '#859398',
  outlineVariant: '#3c494e',
}

// ── Page ───────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function SolutionsPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale as Locale] || content.en

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      {/* ── Navbar ── */}
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(14,20,23,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(60,73,78,0.15)' }}>
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href={`/${locale}/websites`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm font-bold border-b-2 pb-1" style={{ color: c.primary, borderColor: c.primary }}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/websites#sectors`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</Link>
          </div>
          <Link href={`/${locale}/websites/contact`} className="px-6 py-2.5 text-xs font-bold hover:scale-95 active:scale-90 transition-transform rounded-sm" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>{t.cta}</Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 overflow-hidden">
        {/* ── Hero ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 mb-32 relative">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none" style={{ backgroundColor: 'rgba(168,232,255,0.1)', filter: 'blur(120px)' }} />
          <div className="max-w-4xl relative z-10">
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-8" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.02em' }}>
              {t.hero.heading}<span className="italic" style={{ color: c.primary }}>{t.hero.headingHighlight}</span>
            </h1>
            <p className="text-[18px] leading-[28px] max-w-2xl" style={{ color: c.onSurfaceVariant }}>{t.hero.subtext}</p>
          </div>
        </section>

        {/* ── Solutions Grid ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 space-y-32">
          {/* Solution 1: Business Presence */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border" style={{ backgroundColor: 'rgba(236,221,188,0.1)', borderColor: 'rgba(236,221,188,0.2)', color: c.tertiary }}>
                <Verified size={18} />
                <span className="text-xs font-semibold">{t.business.badge}</span>
              </div>
              <h2 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-geist-sans)', color: c.primary }}>{t.business.title}</h2>
              <p className="text-[18px] leading-[28px]" style={{ color: c.onSurfaceVariant }}>{t.business.description}</p>
              <div className="p-6 border-l-4 rounded-r-lg" style={{ backgroundColor: c.surfaceLow, borderColor: c.tertiary }}>
                <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: c.tertiary }}>{t.business.problemLabel}</p>
                <p className="text-sm">{t.business.problem}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {t.business.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3" style={{ color: c.onSurfaceVariant }}>
                    <Check size={18} color={c.primary} />
                    <span className="text-xs font-semibold uppercase">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-xl relative overflow-hidden border" style={{ borderColor: 'rgba(168,232,255,0.15)' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom right, rgba(168,232,255,0.05), transparent)` }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 relative" style={{ color: c.primary }}>{t.business.architectureLabel}</p>
              <ul className="space-y-4 relative">
                {t.business.architecture.map((item, i) => (
                  <li key={i} className={`flex justify-between items-center py-3 ${i < t.business.architecture.length - 1 ? 'border-b' : ''}`} style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
                    <span className="text-sm hover:opacity-80 transition-colors">{item.name}</span>
                    <span className="text-xs" style={{ color: c.onSurfaceVariant }}>{item.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution 2: Lead Generation */}
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="order-2 md:order-1 p-8 rounded-xl relative border" style={{ borderColor: 'rgba(117,212,233,0.15)' }}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-6 relative" style={{ color: c.secondary }}>{t.lead.metricsLabel}</p>
              <div className="space-y-6">
                <div className="p-4 border-l-2" style={{ backgroundColor: c.surfaceLow, borderColor: c.secondary }}>
                  <span className="text-xs block mb-1" style={{ color: c.onSurfaceVariant }}>{t.lead.primaryObjective}</span>
                  <span className="text-2xl font-medium" style={{ fontFamily: 'var(--font-geist-sans)', color: c.onSurface }}>{t.lead.primaryValue}</span>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded border" style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
                    <Target size={20} className="mb-2" color={c.secondary} />
                    <p className="text-sm font-bold mb-1">{t.lead.campaignTitle}</p>
                    <p className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.lead.campaignText}</p>
                  </div>
                  <div className="p-4 rounded border" style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
                    <ThumbsUp size={20} className="mb-2" color={c.secondary} />
                    <p className="text-sm font-bold mb-1">{t.lead.qualificationTitle}</p>
                    <p className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.lead.qualificationText}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border" style={{ backgroundColor: 'rgba(117,212,233,0.1)', borderColor: 'rgba(117,212,233,0.2)', color: c.secondary }}>
                <Zap size={18} />
                <span className="text-xs font-semibold">{t.lead.badge}</span>
              </div>
              <h2 className="text-3xl font-medium" style={{ fontFamily: 'var(--font-geist-sans)', color: c.secondary }}>{t.lead.title}</h2>
              <p className="text-[18px] leading-[28px]" style={{ color: c.onSurfaceVariant }}>{t.lead.description}</p>
              <ul className="space-y-3">
                {t.lead.focusPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <Target size={18} className="mt-1 flex-shrink-0" color={c.secondary} />
                    <p className="text-sm">
                      <strong style={{ color: c.onSurface }}>{point.title}:</strong>{' '}
                      <span style={{ color: c.onSurfaceVariant }}>{point.text}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Hybrid Strategy ── */}
          <div className="rounded-2xl p-12 text-center relative overflow-hidden border" style={{ backgroundColor: c.surfaceLow, borderColor: 'rgba(168,232,255,0.1)' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24" style={{ background: `linear-gradient(to bottom, ${c.primary}, transparent)` }} />
            <h3 className="text-3xl font-medium mb-6 mt-8" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.hybrid.title}</h3>
            <p className="text-[18px] leading-[28px] max-w-3xl mx-auto mb-8" style={{ color: c.onSurfaceVariant }}>
              {t.hybrid.text}{' '}
              <span style={{ color: c.primary }}>{t.hybrid.highlight}</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {t.hybrid.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 text-xs font-semibold rounded border" style={{ backgroundColor: c.surface, borderColor: 'rgba(60,73,78,0.2)', color: c.onSurfaceVariant }}>{tag}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Optional Capabilities ── */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-10 mt-32">
          <h2 className="text-3xl font-medium mb-12 border-l-4 pl-6" style={{ fontFamily: 'var(--font-geist-sans)', borderColor: c.primary }}>{t.capabilities.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {t.capabilities.items.map((item, i) => {
              const isWide = i === 4
              const icons = [Globe, Calendar, BarChart3, Store, Code, RefreshCw]
              const Icon = icons[i]
              return (
                <div key={i} className={`p-6 rounded-xl border ${isWide ? 'md:col-span-2' : ''}`} style={{ borderColor: 'rgba(168,232,255,0.1)', background: isWide ? `linear-gradient(to bottom right, ${c.surfaceLow}, ${c.surface})` : 'transparent' }}>
                  <Icon size={24} className="mb-4" color={c.primary} />
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-xs leading-relaxed" style={{ color: c.onSurfaceVariant }}>{item.text}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="mt-40 text-center px-6 md:px-10">
          <div className="max-w-2xl mx-auto">
            <p className="text-[18px] italic mb-4" style={{ color: c.onSurfaceVariant }}>{t.closingCta.quote}</p>
            <div className="h-12 w-px mx-auto mb-8" style={{ backgroundColor: c.primary }} />
            <Link
              href={`/${locale}/websites/contact`}
              className="inline-block px-10 py-5 text-sm font-bold hover:scale-105 active:scale-95 transition-all rounded"
              style={{ backgroundColor: c.primary, color: c.onPrimary }}
            >
              {t.closingCta.button}
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full py-12 border-t" style={{ backgroundColor: '#080f12', borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 max-w-[1280px] mx-auto">
          <div>
            <div className="text-[24px] font-bold tracking-tighter mb-4" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-1.2px', color: c.onSurface }}>
              baxh<span style={{ color: c.primaryContainer }}>e</span>n
            </div>
            <p className="text-xs max-w-xs" style={{ color: c.onSurfaceVariant }}>{t.footer.tagline}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2">{t.footer.quickLinks}</p>
            <Link href={`/${locale}/websites`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites#sectors`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest mb-2">{t.footer.legal}</p>
            <Link href={`/${locale}/websites/privacy`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footer.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footer.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footer.cookies}</Link>
            <p className="text-xs mt-4 opacity-50" style={{ color: c.onSurfaceVariant }}>{t.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale] || content.en
  return {
    title: t.title,
    description: t.description,
  }
}
