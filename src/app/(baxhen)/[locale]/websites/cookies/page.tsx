import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { Info, Shield, BarChart3, Megaphone, RefreshCw, Puzzle, Settings, Ban } from 'lucide-react'

const content = {
  pt: {
    title: 'Política de Cookies',
    badge: 'POLÍTICA',
    updated: 'Atualizado: Outubro 2024',
    intro: 'Esta política detalha como a BAXHEN utiliza cookies e tecnologias similares para melhorar a sua experiência, manter a segurança e otimizar o nosso ambiente de consultoria profissional.',
    nav: { howItWorks: 'Como Funciona', solutions: 'Soluções', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Começar',
    whatAre: {
      title: 'O Que São Cookies?',
      text: ['Cookies são pequenos ficheiros de texto armazenados no seu dispositivo que nos permitem "lembrar" as suas preferências e visitas. Na BAXHEN, usamos estas ferramentas como instrumentos de precisão para garantir que a nossa plataforma opera com a excelência técnica exigida para consultoria global.', 'Ao usar os nossos serviços, reconhece que podemos armazenar estes identificadores para o distinguir de outros utilizadores, proporcionando uma sessão segura, contínua e personalizada.'],
    },
    essential: { title: 'Essenciais', items: ['Autenticação de Sessão', 'Segurança e Proteção CSRF', 'Roteamento de Infraestrutura'] },
    tracking: {
      title: 'Tecnologias de Tracking e Análise',
      items: [
        { title: 'Google Analytics', text: 'Monitorizamos padrões de tráfego agregados para otimizar o desempenho para solicitações empresariais de alta carga.' },
        { title: 'Pixels de Publicidade', text: 'Usados para medir a eficácia das nossas campanhas de divulgação em redes profissionais.' },
        { title: 'Remarketing', text: 'Fornecer informações personalizadas a visitantes que interagiram anteriormente com os nossos conteúdos.' },
        { title: 'Integrações de Marketing', text: 'Integrações de terceiros que permitem chat ao vivo e ferramentas interativas de consultoria.' },
      ],
    },
    managing: {
      title: 'Gerir as Suas Preferências',
      text: 'A maioria dos navegadores permite recusar ou aceitar cookies através do menu de configurações. Note que desativar cookies essenciais pode afetar o desempenho técnico da nossa plataforma.',
      manageBtn: 'Gerir Preferências',
      disableBtn: 'Desativar Não Essenciais',
      quote: '"O nosso compromisso é com a transparência. A soberania dos seus dados permanece a nossa prioridade arquitetural principal."',
    },
    context: { title: 'Contexto Baxhen', text: 'Na nossa capacidade de consultoria, utilizamos tokens de sessão especializados para manter a integridade das traduções bilingues em tempo real e trocas seguras de documentos durante sessões ao vivo.' },
    footer: '© {year} Baxhen Consulting. Todos os direitos reservados.',
    footerLinks: { privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies' },
  },
  en: {
    title: 'Cookie Policy',
    badge: 'POLICY',
    updated: 'Last updated: October 2024',
    intro: 'This policy details how BAXHEN utilizes cookies and similar tracking technologies to enhance your experience, maintain security, and optimize our professional consulting environment.',
    nav: { howItWorks: 'How it Works', solutions: 'Solutions', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Get Started',
    whatAre: {
      title: 'What Are Cookies?',
      text: ['Cookies are small text files stored on your device that allow us to "remember" your preferences and visits. At BAXHEN, we use these tools as precision instruments to ensure our platform operates with the technical excellence required for global consulting.', 'By using our services, you acknowledge that we may store these identifiers to distinguish you from other users, providing a seamless, secure, and tailored session.'],
    },
    essential: { title: 'Essential', items: ['Session Authentication', 'Security & CSRF Protection', 'Infrastructure Routing'] },
    tracking: {
      title: 'Tracking & Insight Technologies',
      items: [
        { title: 'Google Analytics', text: 'We monitor aggregated traffic patterns to optimize performance for high-load enterprise requests.' },
        { title: 'Advertising Pixels', text: 'Used to measure the efficacy of our outreach campaigns within professional networks.' },
        { title: 'Remarketing', text: 'Providing tailored insights to returning visitors who have previously engaged with our content.' },
        { title: 'Marketing Embeds', text: 'Third-party integrations that enable live chat support and interactive consulting tools.' },
      ],
    },
    managing: {
      title: 'Managing Your Preferences',
      text: 'Most browsers allow you to refuse or accept cookies via the settings menu. Please note that disabling essential cookies may impact the technical performance of our platform.',
      manageBtn: 'Manage Preferences',
      disableBtn: 'Disable Non-Essential',
      quote: '"Our commitment is to transparency. Your data sovereignty remains our primary architectural priority."',
    },
    context: { title: 'Baxhen Context', text: 'In our consulting capacity, we utilize specialized session tokens to maintain the integrity of bilingual real-time translations and secure document handshakes during live sessions.' },
    footer: '© {year} Baxhen Consulting. All rights reserved.',
    footerLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies' },
  },
}

const c = { bg: '#0e1417', surface: '#0e1417', surfaceLow: '#161d1f', surfaceLowest: '#080f12', container: '#1a2123', primary: '#a8e8ff', primaryContainer: '#00d4ff', secondary: '#75d4e9', tertiary: '#ecddbc', onTertiary: '#383019', onSurface: '#dde3e7', onSurfaceVariant: '#bbc9cf', onPrimaryContainer: '#00586b', outlineVariant: '#3c494e' } as const

const trackingIcons = [BarChart3, Megaphone, RefreshCw, Puzzle]

interface PageProps { params: Promise<{ locale: string }> }

export default async function CookiesPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale as Locale] || content.en

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(14,20,23,0.9)', backdropFilter: 'blur(12px)', borderColor: 'rgba(60,73,78,0.15)' }}>
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href={`/${locale}/websites`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</Link>
          </div>
          <Link href={`/${locale}/websites/contact`}>
            <span className="px-6 py-2 text-xs font-bold rounded-lg hover:brightness-110 transition-all" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>{t.cta}</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 max-w-[1280px] mx-auto px-4 md:px-10 min-h-screen">
        <section className="mb-16">
          <span className="inline-block py-1 px-3 text-xs font-semibold rounded-full mb-4" style={{ backgroundColor: c.tertiary, color: c.onTertiary }}>{t.badge}</span>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-6" style={{ color: c.primary, letterSpacing: '-0.02em' }}>{t.title}</h1>
          <p className="text-[18px] leading-[28px] max-w-3xl" style={{ color: c.onSurfaceVariant }}>{t.updated}. {t.intro}</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 p-8 rounded-xl" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
            <h2 className="text-[24px] leading-[32px] font-medium mb-4 flex items-center gap-2" style={{ color: c.onSurface }}>
              <Info size={24} color={c.primary} /> {t.whatAre.title}
            </h2>
            <div className="space-y-4 text-sm" style={{ color: c.onSurfaceVariant }}>
              {t.whatAre.text.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="md:col-span-4 p-8 rounded-xl border" style={{ backgroundColor: c.container, borderColor: 'rgba(168,232,255,0.2)' }}>
            <h2 className="text-[24px] leading-[32px] font-medium mb-4 flex items-center gap-2" style={{ color: c.onSurface }}>
              <Shield size={24} color={c.secondary} /> {t.essential.title}
            </h2>
            <ul className="space-y-3">
              {t.essential.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 py-2 border-b text-xs" style={{ borderColor: 'rgba(60,73,78,0.1)' }}>
                  <span className="font-bold" style={{ color: c.primary }}>●</span>
                  <span style={{ color: c.onSurfaceVariant }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-12 p-10 rounded-xl relative overflow-hidden" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-20 -mt-20 pointer-events-none" style={{ backgroundColor: 'rgba(168,232,255,0.05)', filter: 'blur(64px)' }} />
            <h2 className="text-[32px] font-semibold mb-8 relative" style={{ letterSpacing: '-0.02em' }}>{t.tracking.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {t.tracking.items.map((item, i) => {
                const Icon = trackingIcons[i]
                return (
                  <div key={i} className="p-6 rounded-lg border transition-colors hover:border-[#00d4ff]/40" style={{ backgroundColor: c.surfaceLow, borderColor: 'rgba(60,73,78,0.2)' }}>
                    <Icon size={32} className="mb-4" color={i === 0 ? c.primary : i === 1 ? c.secondary : i === 2 ? c.tertiary : c.primaryContainer} />
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-xs" style={{ color: c.onSurfaceVariant }}>{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-7 p-8 rounded-xl" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
            <h2 className="text-[24px] leading-[32px] font-medium mb-6" style={{ color: c.onSurface }}>{t.managing.title}</h2>
            <div className="space-y-6 text-sm" style={{ color: c.onSurfaceVariant }}>
              <p>{t.managing.text}</p>
              <div className="flex flex-wrap gap-4">
                <button type="button" className="border px-6 py-2 rounded text-xs font-semibold hover:opacity-80 transition-colors" style={{ color: c.primary, borderColor: c.primary }}>
                  <Settings size={14} className="inline mr-1" /> {t.managing.manageBtn}
                </button>
                <button type="button" className="border px-6 py-2 rounded text-xs font-semibold hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant, borderColor: c.outlineVariant }}>
                  <Ban size={14} className="inline mr-1" /> {t.managing.disableBtn}
                </button>
              </div>
              <div className="p-4 rounded border-l-2" style={{ backgroundColor: 'rgba(47,54,57,0.3)', borderColor: c.tertiary }}>
                <p className="text-xs italic">{t.managing.quote}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-8">
            <div className="p-8 rounded-xl flex-grow" style={{ background: `linear-gradient(to bottom right, #131723, ${c.bg})`, border: `1px solid rgba(60,73,78,0.1)` }}>
              <h3 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: c.primary }}>{t.context.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>{t.context.text}</p>
            </div>
            <div className="h-48 rounded-xl relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: c.container }}>
              <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, ${c.primaryContainer}, transparent 70%)` }} />
              <p className="text-xl font-bold relative" style={{ color: c.primary, fontFamily: 'var(--font-geist-sans)' }}>Privacy First.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-12 px-6 md:px-10" style={{ backgroundColor: c.surfaceLowest, borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.footer.replace('{year}', String(new Date().getFullYear()))}</span>
          </div>
          <div className="flex gap-6">
            <Link href={`/${locale}/websites/privacy`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs font-bold" style={{ color: c.primary }}>{t.footerLinks.cookies}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const t = content[(await params).locale as Locale] || content.en
  return { title: `${t.title} — Baxhen` }
}
