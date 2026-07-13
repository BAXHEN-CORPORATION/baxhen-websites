import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import type { Locale } from '@/domain/shared/types'
import { Check, ChevronRight, Verified, Share2, Globe, Bed, UtensilsCrossed, Sparkles, UserRound, Wrench, Briefcase, Camera } from 'lucide-react'

// ── Bilingual content ──────────────────────────────────────────────

const content = {
  pt: {
    title: 'Websites Profissionais — Baxhen',
    description: 'Websites empresariais e páginas de geração de leads. Suporte em português e inglês. Plano anual de infraestrutura.',
    nav: { howItWorks: 'Como Funciona', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Solicitar Preview',
    hero: {
      heading: 'Websites profissionais para o seu negócio — sem complexidade desnecessária.',
      subtext: 'A Baxhen cria websites empresariais multilingues e páginas de geração de leads para negócios locais, turismo, profissionais liberais e marcas em crescimento.',
      primaryCta: 'Solicitar Preview do Website',
      secondaryCta: 'Ver Opções de Website',
      badge: 'Implementação do website incluída para clientes de lançamento selecionados com o plano anual de infraestrutura.',
    },
    challenge: {
      label: 'O Desafio',
      heading: 'O negócio moderno acontece online, mas a presença web tradicional muitas vezes falha em estabelecer a ponte.',
      cards: [
        { icon: 'share', title: 'Dependência do Instagram', text: 'Estar à mercê dos algoritmos sem uma casa permanente para o seu negócio.' },
        { icon: 'outdated', title: 'Fundações Desatualizadas', text: 'Sites antigos que afastam clientes em vez de os convidar a entrar.' },
        { icon: 'hidden', title: 'Informação Escondida', text: 'Clientes potenciais com dificuldade em encontrar informações básicas como localização ou menus.' },
        { icon: 'gap', title: 'Lacuna Profissional', text: 'Concorrentes que parecem mais estabelecidos apenas pelo design e experiência.' },
        { icon: 'ads', title: 'Tráfego Pago Desfocado', text: 'Gastar dinheiro em anúncios que aterram em páginas genéricas e confusas.' },
        { icon: 'language', title: 'Barreiras Linguísticas', text: 'Perder visitantes internacionais que não conseguem entender a sua oferta.' },
      ],
    },
    solutions: {
      solutionOne: 'Solução Um',
      solutionTwo: 'Solução Dois',
      business: {
        title: 'Website Empresarial',
        description: 'Uma presença digital completa projetada para longevidade e clareza. Perfeito para estabelecer autoridade e fornecer toda a informação essencial.',
        features: ['Informação da empresa e serviços', 'Menus ou Portfólios', 'Localização e Contacto dinâmicos', 'Suporte nativo EN/PT'],
        cta: 'Explorar Websites Empresariais',
      },
      lead: {
        title: 'Website de Geração de Leads',
        description: 'Páginas de precisão para campanhas específicas. Projetadas para transformar visitantes em contactos ou reservas ativas instantaneamente.',
        features: ['Landing pages otimizadas para anúncios', 'Ofertas sazonais e Reservas', 'Formulários de Qualificação', 'Fluxo de conversão de alta velocidade'],
        cta: 'Explorar Geração de Leads',
      },
    },
    sectors: {
      heading: 'Setores que Potenciamos',
      subtext: 'Experiência focada em modelos de negócio locais e turísticos.',
      items: ['Turismo e Experiências', 'Alojamento', 'Restaurantes e Cafés', 'Beleza e Bem-Estar', 'Profissionais Liberais', 'Serviços Técnicos', 'Consultores', 'Negócios no Instagram'],
    },
    principles: {
      heading: 'Os Nossos Princípios',
      items: [
        { title: 'Aconselhamento baseado em recomendações', text: 'Construímos apenas o que a fase do seu negócio realmente requer. Sem funcionalidades desnecessárias ou excesso técnico.' },
        { title: 'Bilingue por Design', text: 'Suporte nativo EN/PT. Não traduzimos apenas palavras; adaptamos a experiência para públicos internacionais e locais.' },
        { title: 'Infraestrutura sem Atritos', text: 'Tratamos do alojamento, SSL e monitorização técnica. Você trata do seu negócio.' },
        { title: 'Escalabilidade à Prova de Futuro', text: 'O seu site cresce consigo. Comece simples, expanda quando estiver pronto sem começar do zero.' },
      ],
    },
    process: {
      heading: 'O Caminho em Cinco Passos para o Lançamento',
      steps: [
        { num: '01', title: 'Análise', text: 'Auditoria das suas necessidades e objetivos atuais.' },
        { num: '02', title: 'Direção', text: 'Conceito visual e preview do site.' },
        { num: '03', title: 'Discussão', text: 'Refinamento e ciclo de feedback.' },
        { num: '04', title: 'Recomendação', text: 'Seleção final do plano.' },
        { num: '05', title: 'Lançamento', text: 'Implementação completa e otimização.' },
      ],
      seeMore: 'Ver o Processo Completo',
    },
    infrastructure: {
      heading: 'O que o nosso plano de infraestrutura cobre',
      subtext: 'Além do website, fornecemos a base de nível industrial necessária para operações web modernas.',
      items: ['Alojamento e SSL', 'Implementação Segura', 'Backups Padrão', 'Disponibilidade Técnica', 'Ligação de Domínio', 'Suporte Operacional', 'Otimização Mobile', 'Atualizações Core'],
      note: 'O plano de infraestrutura foca-se no motor. Alterações de conteúdo individuais, sistemas complexos personalizados ou funcionalidades pesadas são cotadas separadamente como serviços profissionais.',
      noteLabel: 'Nota sobre Personalização',
    },
    faq: {
      heading: 'Perguntas Frequentes',
      items: [
        { q: 'O website está incluído?', a: 'Sim, para os clientes iniciais do portfólio de lançamento, a implementação está incluída no custo anual de infraestrutura do primeiro ano.' },
        { q: 'Quanto custa?', a: 'Oferecemos vários pacotes adaptados aos seus objetivos específicos. Desde sites empresariais essenciais a funis de geração de leads de alto desempenho, o nosso preço é ajustável às necessidades de cada cliente e à fase atual do negócio.' },
        { q: 'Posso solicitar alterações?', a: 'Solicitações de funcionalidades maiores ou revisões completas de conteúdo são cotadas como projetos adicionais, mas pequenas atualizações fazem parte do nosso suporte operacional.' },
        { q: 'O domínio é meu?', a: 'Absolutamente. Ajudamo-lo a ligar o seu domínio existente ou a garantir um novo em seu próprio nome.' },
        { q: 'O que acontece após o primeiro ano?', a: 'O plano de infraestrutura continua como uma renovação anual padrão para manter o seu site ativo, seguro e monitorizado.' },
      ],
    },
    finalCta: {
      heading: 'Vamos identificar o website mais simples que pode ajudar o seu negócio.',
      button: 'Solicitar Preview do Website',
      subtext: 'A recomendação será baseada nas prioridades e fase atual do seu negócio.',
    },
    footer: '© {year} Baxhen. Minimalismo Profissional em Consultoria Web.',
    footerLinks: { privacyPolicy: 'Privacidade', termsOfService: 'Termos', security: 'Segurança' },
  },
  en: {
    title: 'Professional Websites — Baxhen',
    description: 'Business websites and lead-generation pages. Portuguese and English support. Annual infrastructure plan.',
    nav: { howItWorks: 'How it Works', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Request a Preview',
    hero: {
      heading: 'Professional websites built for your business — without unnecessary complexity.',
      subtext: 'Baxhen creates multilingual business websites and focused lead-generation pages for local companies, tourism businesses, professionals, and growing brands.',
      primaryCta: 'Request a Website Preview',
      secondaryCta: 'See Website Options',
      badge: 'Website implementation included for selected launch clients with the annual infrastructure plan.',
    },
    challenge: {
      label: 'The Challenge',
      heading: 'Modern business happens online, yet traditional web presence often fails to bridge the gap.',
      cards: [
        { icon: 'share', title: 'Instagram Dependence', text: 'Being at the mercy of algorithms with no permanent home for your business.' },
        { icon: 'outdated', title: 'Outdated Foundations', text: 'Old sites that drive customers away instead of inviting them in.' },
        { icon: 'hidden', title: 'Hidden Information', text: 'Potential clients struggling to find basic info like location or menus.' },
        { icon: 'gap', title: 'Professional Gap', text: 'Competitors looking more established simply because of their UI/UX.' },
        { icon: 'ads', title: 'Unfocused Ad Traffic', text: 'Spending money on ads that land on generic, confusing pages.' },
        { icon: 'language', title: 'Language Barriers', text: 'Losing international visitors who can\'t understand your offering.' },
      ],
    },
    solutions: {
      solutionOne: 'Solution One',
      solutionTwo: 'Solution Two',
      business: {
        title: 'Business Website',
        description: 'A complete digital presence designed for longevity and clarity. Perfect for establishing authority and providing all essential info.',
        features: ['Company info & services', 'Menus or Portfolios', 'Dynamic Location & Contact', 'EN/PT Native Support'],
        cta: 'Explore Business Websites',
      },
      lead: {
        title: 'Lead-Generation Website',
        description: 'Precision-engineered pages for specific campaigns. Designed to turn visitors into active inquiries or bookings instantly.',
        features: ['Ad-optimized landing pages', 'Seasonal offers & Booking', 'Qualification Forms', 'High-speed conversion flow'],
        cta: 'Explore Lead-Generation Websites',
      },
    },
    sectors: {
      heading: 'Sectors We Empower',
      subtext: 'Focused expertise for local and tourism-driven business models.',
      items: ['Tourism & Experiences', 'Accommodation', 'Restaurants & Cafés', 'Beauty & Wellness', 'Local Professionals', 'Trade Services', 'Consultants', 'Instagram Businesses'],
    },
    principles: {
      heading: 'Our Core Principles',
      items: [
        { title: 'Recommendation-based advice', text: 'We only build what your business stage actually requires. No bloated features or unnecessary tech overhead.' },
        { title: 'Bilingual by Design', text: 'Native-level EN/PT support. We don\'t just translate words; we adapt the experience for international and local audiences.' },
        { title: 'Zero-friction Infrastructure', text: 'We handle the hosting, SSL, and technical monitoring. You handle your business.' },
        { title: 'Future-Proof Scalability', text: 'Your site grows as you do. Start simple, expand when ready without starting from scratch.' },
      ],
    },
    process: {
      heading: 'The Five-Step Path to Launch',
      steps: [
        { num: '01', title: 'Review', text: 'Audit your current needs and goals.' },
        { num: '02', title: 'Direction', text: 'Visual concept and site preview.' },
        { num: '03', title: 'Discussion', text: 'Refinement and feedback loop.' },
        { num: '04', title: 'Simple Recommendation', text: 'Final plan selection.' },
        { num: '05', title: 'Launch', text: 'Full deployment and optimization.' },
      ],
      seeMore: 'See the Full Process',
    },
    infrastructure: {
      heading: 'What our infrastructure plan covers',
      subtext: 'Beyond the website, we provide the industrial-strength foundation required for modern web operations.',
      items: ['Hosting & SSL', 'Secure Deployment', 'Standard Backups', 'Technical Uptime', 'Domain Connection', 'Operational Support', 'Mobile Optimization', 'Core Updates'],
      note: 'The infrastructure plan focuses on the engine. Individual content changes, complex custom systems, or heavy feature requests are quoted separately as professional services.',
      noteLabel: 'Note on Customization',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      items: [
        { q: 'Is the website included?', a: 'Yes, for the initial launch portfolio clients, the implementation is included in the first year\'s annual infrastructure cost.' },
        { q: 'How much does it cost?', a: 'We offer various packages tailored to your specific goals. From essential business sites to high-performance lead-generation funnels, our pricing is adjustable to each client\'s needs and current business stage.' },
        { q: 'Can I request changes?', a: 'Major feature requests or full content overhauls are quoted as additional projects, but small updates are part of our operational support.' },
        { q: 'Do I own my domain?', a: 'Absolutely. We help you connect your existing domain or assist you in securing a new one in your own name.' },
        { q: 'What happens after year one?', a: 'The infrastructure plan continues as a standard annual renewal to keep your site live, secure, and monitored.' },
      ],
    },
    finalCta: {
      heading: 'Let\'s identify the simplest website that can help your business.',
      button: 'Request Your Website Preview',
      subtext: 'The recommendation will be based on your business priorities and current stage.',
    },
    footer: '© {year} Baxhen. Professional Minimalism in Web Consulting.',
    footerLinks: { privacyPolicy: 'Privacy', termsOfService: 'Terms', security: 'Security' },
  },
}

// ── Icons ──────────────────────────────────────────────────────────

const challengeIcons: Record<string, React.ReactNode> = {
  share: <Share2 size={28} color="#a8e8ff" />,
  outdated: <Globe size={28} color="#a8e8ff" />,
  hidden: <Globe size={28} color="#a8e8ff" />,
  gap: <Globe size={28} color="#a8e8ff" />,
  ads: <Globe size={28} color="#a8e8ff" />,
  language: <Globe size={28} color="#a8e8ff" />,
}

const sectorIcons: React.ReactNode[] = [
  <Globe key={0} size={32} color="#a8e8ff" />,
  <Bed key={1} size={32} color="#a8e8ff" />,
  <UtensilsCrossed key={2} size={32} color="#bbc9cf" />,
  <Sparkles key={3} size={32} color="#bbc9cf" />,
  <UserRound key={4} size={32} color="#bbc9cf" />,
  <Wrench key={5} size={32} color="#bbc9cf" />,
  <Briefcase key={6} size={32} color="#bbc9cf" />,
  <Camera key={7} size={32} color="#bbc9cf" />,
]

// ── Styles ─────────────────────────────────────────────────────────

const c = {
  bg: '#0e1417',
  surface: '#0e1417',
  surfaceLow: '#161d1f',
  surfaceLowest: '#080f12',
  surfaceHigh: '#242b2e',
  surfaceHighest: '#2f3639',
  onSurface: '#dde3e7',
  onSurfaceVariant: '#bbc9cf',
  primary: '#a8e8ff',
  primaryContainer: '#00d4ff',
  onPrimary: '#003642',
  onPrimaryContainer: '#00586b',
  secondary: '#75d4e9',
  onSecondary: '#00363f',
  tertiary: '#ecddbc',
  onTertiary: '#383019',
  outline: '#859398',
  outlineVariant: '#3c494e',
  electric: '#00e5ff',
}

// ── Page ───────────────────────────────────────────────────────────

interface PageProps {
  params: Promise<{ locale: string }>
}

export default async function BaxhenWebsitesPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale as Locale] || content.pt

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      {/* ── Header ── */}
      <header
        className="fixed top-0 w-full z-50 border-b"
        style={{
          backgroundColor: 'rgba(14,20,23,0.9)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderColor: 'rgba(60,73,78,0.15)',
        }}
      >
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-1.2px', color: c.onSurface }}>
              baxh<span style={{ color: c.primaryContainer }}>e</span>n
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a href={`/${locale}/websites#process`} className="text-sm font-bold" style={{ color: c.primary, borderBottom: `2px solid ${c.primary}`, paddingBottom: 4 }}>{t.nav.howItWorks}</a>
            <a href={`/${locale}/websites#sectors`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</a>
            <a href={`/${locale}/websites#contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</a>
          </nav>
          <Link
            href={`/${locale}/websites#contact`}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all rounded-sm"
            style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}
          >
            {t.cta}
          </Link>
        </div>
      </header>

      <main className="pt-20">
        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 py-24">
            <div className="max-w-3xl">
              <h1
                className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-6"
                style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.02em', color: c.onSurface }}
              >
                {t.hero.heading}
              </h1>
              <p className="text-[18px] leading-[28px] mb-10" style={{ color: c.onSurfaceVariant }}>
                {t.hero.subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={`/${locale}/websites#contact`}
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all rounded-sm text-center"
                  style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}
                >
                  {t.hero.primaryCta}
                </Link>
                <Link
                  href={`/${locale}/websites#solutions`}
                  className="px-8 py-4 text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-all rounded-sm text-center border"
                  style={{ color: c.onSurface, borderColor: c.outlineVariant }}
                >
                  {t.hero.secondaryCta}
                </Link>
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: c.outline }}>
                <Verified size={18} />
                <p>{t.hero.badge}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Challenge ── */}
        <section className="py-24" style={{ backgroundColor: c.surfaceLowest }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="mb-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] block mb-4" style={{ color: c.secondary }}>{t.challenge.label}</span>
              <h2 className="text-[24px] leading-[32px] font-medium max-w-2xl" style={{ fontFamily: 'var(--font-geist-sans)', color: c.onSurface }}>{t.challenge.heading}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.challenge.cards.map((card, i) => (
                <div key={i} className="p-8 flex flex-col gap-4 rounded-lg" style={{ backgroundColor: c.surface, border: `1px solid rgba(60,73,78,0.1)` }}>
                  {challengeIcons[card.icon]}
                  <h3 className="text-[18px] font-medium" style={{ fontFamily: 'var(--font-geist-sans)', color: c.onSurface }}>{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: c.onSurfaceVariant }}>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Two Solutions ── */}
        <section id="solutions" className="py-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Business Website */}
              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: c.surface, border: `1px solid rgba(60,73,78,0.1)` }}>
                <div className="h-64 relative" style={{ backgroundColor: c.surfaceHigh }}>
                  <Image src="/assets/web01.webp" alt="Business Website" fill unoptimized className="object-cover opacity-60" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${c.surface}, transparent)` }} />
                  <div className="absolute bottom-6 left-8">
                    <span className="px-3 py-1 text-xs rounded-sm" style={{ backgroundColor: c.tertiary, color: c.onTertiary }}>{t.solutions.solutionOne}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-[24px] leading-[32px] font-medium mb-4" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.solutions.business.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: c.onSurfaceVariant }}>{t.solutions.business.description}</p>
                  <ul className="space-y-3 mb-10 text-sm">
                    {t.solutions.business.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={16} color={c.primary} />
                        <span style={{ color: c.onSurface }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/websites#contact`}
                    className="block w-full py-4 text-xs font-semibold uppercase tracking-wider text-center hover:opacity-80 transition-all rounded-sm border"
                    style={{ color: c.primary, borderColor: c.primary }}
                  >
                    {t.solutions.business.cta}
                  </Link>
                </div>
              </div>

              {/* Lead-Generation Website */}
              <div className="rounded-lg overflow-hidden" style={{ backgroundColor: c.surface, border: `1px solid rgba(60,73,78,0.1)` }}>
                <div className="h-64 relative" style={{ backgroundColor: c.surfaceHigh }}>
                  <Image src="/assets/web02.webp" alt="Lead-Generation Website" fill unoptimized className="object-cover opacity-60" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${c.surface}, transparent)` }} />
                  <div className="absolute bottom-6 left-8">
                    <span className="px-3 py-1 text-xs rounded-sm" style={{ backgroundColor: c.secondary, color: c.onSecondary }}>{t.solutions.solutionTwo}</span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-[24px] leading-[32px] font-medium mb-4" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.solutions.lead.title}</h3>
                  <p className="mb-6 leading-relaxed" style={{ color: c.onSurfaceVariant }}>{t.solutions.lead.description}</p>
                  <ul className="space-y-3 mb-10 text-sm">
                    {t.solutions.lead.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check size={16} color={c.secondary} />
                        <span style={{ color: c.onSurface }}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/websites#contact`}
                    className="block w-full py-4 text-xs font-semibold uppercase tracking-wider text-center hover:opacity-80 transition-all rounded-sm border"
                    style={{ color: c.secondary, borderColor: c.secondary }}
                  >
                    {t.solutions.lead.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Sectors ── */}
        <section id="sectors" className="py-24" style={{ backgroundColor: c.surfaceLow }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-[24px] leading-[32px] font-medium" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.sectors.heading}</h2>
              <p className="mt-2 text-sm" style={{ color: c.onSurfaceVariant }}>{t.sectors.subtext}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {t.sectors.items.map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-lg flex flex-col items-center text-center gap-4 transition-transform hover:-translate-y-1 ${
                    i < 2 ? 'border' : ''
                  }`}
                  style={i < 2 ? { backgroundColor: c.surfaceHighest, borderColor: 'rgba(168,232,255,0.2)' } : { backgroundColor: c.surface }}
                >
                  {sectorIcons[i]}
                  <span className="text-xs font-semibold uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section className="py-24" style={{ borderTop: `1px solid rgba(60,73,78,0.1)` }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                <h2 className="text-[32px] md:text-[24px] leading-[40px] md:leading-[32px] font-medium sticky top-32" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.principles.heading}</h2>
              </div>
              <div className="md:w-2/3 space-y-12">
                {t.principles.items.map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-1 rounded-full" style={{ backgroundColor: c.primaryContainer }} />
                    <div>
                      <h4 className="text-[18px] font-medium mb-2" style={{ fontFamily: 'var(--font-geist-sans)' }}>{item.title}</h4>
                      <p className="text-[16px] leading-relaxed" style={{ color: c.onSurfaceVariant }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section id="process" className="py-24 relative overflow-hidden" style={{ backgroundColor: c.surfaceLowest }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10">
            <h2 className="text-[24px] leading-[32px] font-medium text-center mb-16" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.process.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {t.process.steps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -top-8 -left-2 text-6xl font-bold select-none" style={{ color: 'rgba(168,232,255,0.1)' }}>{step.num}</div>
                  <div className="relative pt-4">
                    <h4 className="font-bold mb-2" style={{ color: c.onSurface }}>{step.title}</h4>
                    <p className="text-xs leading-relaxed" style={{ color: c.onSurfaceVariant }}>{step.text}</p>
                  </div>
                  {i < t.process.steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 -right-4 text-lg opacity-30" style={{ color: c.outlineVariant }}>→</div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <Link href={`/${locale}/websites#contact`} className="text-xs font-semibold uppercase tracking-wider hover:opacity-70 transition-all border-b pb-1" style={{ color: c.primary, borderColor: c.primary }}>
                {t.process.seeMore}
              </Link>
            </div>
          </div>
        </section>

        {/* ── Infrastructure ── */}
        <section className="py-24" style={{ borderTop: `1px solid rgba(60,73,78,0.1)`, borderBottom: `1px solid rgba(60,73,78,0.1)` }}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-[24px] leading-[32px] font-medium mb-8" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.infrastructure.heading}</h2>
                <p className="mb-8 leading-relaxed" style={{ color: c.onSurfaceVariant }}>{t.infrastructure.subtext}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {t.infrastructure.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check size={16} color={c.primary} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-lg border" style={{ backgroundColor: c.surfaceLow, borderColor: 'rgba(60,73,78,0.15)' }}>
                <h5 className="text-xs font-semibold uppercase mb-4" style={{ color: c.tertiary }}>{t.infrastructure.noteLabel}</h5>
                <p className="text-sm leading-relaxed italic" style={{ color: c.onSurfaceVariant }}>
                  &ldquo;{t.infrastructure.note}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24" style={{ backgroundColor: c.surfaceLowest }}>
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <h2 className="text-[24px] leading-[32px] font-medium text-center mb-16" style={{ fontFamily: 'var(--font-geist-sans)' }}>{t.faq.heading}</h2>
            <div className="space-y-4">
              {t.faq.items.map((item, i) => (
                <details key={i} className="group rounded-lg overflow-hidden" style={{ backgroundColor: c.surface, border: `1px solid rgba(60,73,78,0.1)` }} open={i === 1 || i === 3}>
                  <summary className="flex justify-between items-center p-6 cursor-pointer hover:opacity-80 transition-colors">
                    <span className="font-bold text-sm">{item.q}</span>
                    <span className="text-lg group-open:rotate-180 transition-transform" style={{ color: c.outline }}>▾</span>
                  </summary>
                  <div className="p-6 pt-0 text-sm leading-relaxed" style={{ color: c.onSurfaceVariant, borderTop: `1px solid rgba(60,73,78,0.05)` }}>
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 relative z-10 text-center">
            <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-8 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-0.02em' }}>
              {t.finalCta.heading}
            </h2>
            <Link
              href={`/${locale}/websites#contact`}
              className="inline-block px-12 py-6 text-xs font-extrabold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all mb-6 rounded-sm"
              style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}
            >
              {t.finalCta.button}
            </Link>
            <p className="text-sm opacity-80" style={{ color: c.onSurfaceVariant }}>{t.finalCta.subtext}</p>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="w-full py-12 border-t" style={{ backgroundColor: c.surfaceLowest, borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 max-w-[1280px] mx-auto">
          <div>
            <div className="text-[24px] font-bold tracking-tighter mb-4" style={{ fontFamily: 'var(--font-geist-sans)', letterSpacing: '-1.2px', color: c.onSurface }}>
              baxh<span style={{ color: c.primaryContainer }}>e</span>n
            </div>
            <p className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.footer.replace('{year}', String(new Date().getFullYear()))}</p>
          </div>
          <div className="flex flex-col gap-3">
            {(['privacyPolicy', 'termsOfService', 'security'] as const).map((key) => (
              <Link
                key={key}
                href={`/${locale}/websites/${key}`}
                className="text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-colors"
                style={{ color: c.onSurfaceVariant }}
              >
                {t.footerLinks[key]}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <a href={`/${locale}/websites#process`} className="text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</a>
            <a href={`/${locale}/websites#sectors`} className="text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</a>
            <a href={`/${locale}/websites#contact`} className="text-xs font-semibold uppercase tracking-wider hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale] || content.pt

  return {
    title: t.title,
    description: t.description,
    alternates: {
      languages: { pt: '/pt/websites', en: '/en/websites' },
    },
  }
}
