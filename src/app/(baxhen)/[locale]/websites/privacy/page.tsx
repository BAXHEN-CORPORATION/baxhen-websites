import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { Building2, Database, Mail, Gavel, Clock, Cloud, UserCheck, ArrowRight } from 'lucide-react'

const content = {
  pt: {
    title: 'Política de Privacidade', badge: 'Conformidade e Legal',
    updated: 'Atualizado: Outubro 2024',
    hero: 'Na Baxhen Consulting, protegemos a sua propriedade intelectual e dados pessoais com o mesmo rigor que aplicamos às nossas iniciativas de estratégia global.',
    toc: 'Nesta política',
    sections: {
      controller: { title: '1. Responsável pelo Tratamento', entity: 'Baxhen Consulting Group Lda.', hq: 'Lisboa, Portugal', officer: 'privacy@baxhen.com', text: 'A Baxhen Business (referida como "Baxhen", "nós" ou "nosso") atua como responsável pelo tratamento dos seus dados pessoais recolhidos através deste website e dos nossos serviços de consultoria.' },
      information: { title: '2. Informações Recolhidas', personal: { title: 'Dados Pessoais', text: 'Informações que nos fornece diretamente:', items: ['Dados de Identidade (Nome, cargo, empresa)', 'Dados de Contacto (Email, telefone)', 'Perfis Profissionais (LinkedIn, detalhes de função)', 'Dados Financeiros (Endereços de faturação, métodos de pagamento)'] }, usage: { title: 'Dados de Utilização', text: 'Informações recolhidas automaticamente:', items: ['Endereço IP e geolocalização (aproximada)', 'Tipo de navegador e versão', 'Mapas de interação nas páginas', 'Fonte de referência e duração da sessão'] } },
      contactForm: { title: '3. Processamento de Formulários de Contacto', text: 'Quando submete uma consulta através dos nossos formulários, a sua informação é encriptada em trânsito e armazenada no nosso ambiente CRM seguro. Usamos estes dados exclusivamente para responder ao seu pedido e avaliar potenciais sinergias de negócio.', quote: '"Não vendemos, alugamos ou trocamos submissões de formulários com listas de marketing de terceiros. Os seus dados são tratados como confidência profissional."' },
      legalBasis: { title: '4. Finalidade e Base Legal', rows: [['Consultas', 'Execução de contrato / Etapas pré-contratuais'], ['Otimização do Website', 'Interesse Legítimo (Melhorar desempenho)'], ['Subscrição de Newsletter', 'Consentimento Explícito (Opt-in)'], ['Gestão de Risco', 'Obrigação Legal (Conformidade)']] },
      retention: { title: '5. Retenção', text: 'Retemos dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais os recolhemos, incluindo para satisfazer requisitos legais, contabilísticos ou de reporte.', items: ['Registos Financeiros: 7 Anos', 'Comunicações com Clientes: 5 Anos', 'Dados de Marketing: Até cancelamento'] },
      providers: { title: '6. Prestadores de Serviços e Transferências', text: 'Utilizamos ferramentas de terceiros líderes da indústria para manter a nossa infraestrutura. Estes parceiros cumprem o RGPD, CCPA e quadros globais de privacidade.', tags: ['Google Analytics', 'Salesforce CRM', 'Amazon Web Services', 'Mailchimp'], transferTitle: 'Transferências Internacionais', transferText: 'Quando transferimos os seus dados pessoais para fora do EEE, garantimos um grau semelhante de proteção através de Cláusulas Contratuais-Tipo (CCT) ou decisões de adequação da Comissão Europeia.' },
      rights: { title: '7. Os Seus Direitos', items: [{ title: 'Direito de Acesso', text: 'Tem o direito de solicitar uma cópia das informações pessoais que temos sobre si.' }, { title: 'Direito ao Apagamento', text: 'Pode pedir-nos para eliminar dados pessoais quando não houver motivo válido para continuarmos a processá-los.' }, { title: 'Direito de Retificação', text: 'Tem o direito de corrigir dados incompletos ou imprecisos que tenhamos sobre si.' }, { title: 'Direito de Oposição', text: 'Pode opor-se ao processamento quando nos baseamos num interesse legítimo.' }] },
    },
    questions: { title: 'Tem Perguntas?', text: 'Contacte a nossa equipa de conformidade global para quaisquer questões relacionadas com privacidade.', email: 'privacy@baxhen.com' },
    footer: '© {year} Baxhen Consulting. Todos os direitos reservados.',
    footerLinks: { privacy: 'Privacidade', terms: 'Termos', cookies: 'Cookies' },
  },
  en: {
    title: 'Privacy Policy', badge: 'Compliance & Legal',
    updated: 'Last updated: October 2024',
    hero: 'At Baxhen Consulting, we protect your intellectual property and personal data with the same rigor we apply to our global strategy initiatives.',
    toc: 'In this policy',
    sections: {
      controller: { title: '1. Data Controller Information', entity: 'Baxhen Consulting Group Ltd.', hq: 'Lisbon, Portugal', officer: 'privacy@baxhen.com', text: 'Baxhen Business (referred to herein as "Baxhen", "we", "us", or "our") acts as the data controller for the processing of your personal data collected through this website and our consulting services.' },
      information: { title: '2. Information Collected', personal: { title: 'Personal Data', text: 'Information you provide directly to us through engagement:', items: ['Identity Data (Name, title, company)', 'Contact Data (Email address, phone number)', 'Professional Profiles (LinkedIn links, role details)', 'Financial Data (Billing addresses, payment methods)'] }, usage: { title: 'Usage Data', text: 'Information collected automatically via site interaction:', items: ['IP address and geolocation (approximate)', 'Browser type and versioning', 'Page interaction heatmaps', 'Referral source and session duration'] } },
      contactForm: { title: '3. Contact-Form Processing', text: 'When you submit an inquiry through our contact forms, your information is encrypted in transit and stored in our secure CRM environment. We use this data solely to respond to your request and assess potential business synergies.', quote: '"We do not sell, rent, or trade contact form submissions to third-party marketing lists. Your data is treated as a professional confidence."' },
      legalBasis: { title: '4. Purpose and Legal Basis', rows: [['Consultation Requests', 'Performance of a contract / Pre-contractual steps'], ['Website Optimization', 'Legitimate Interest (Improving site performance)'], ['Newsletter Subscription', 'Explicit Consent (Opt-in)'], ['Risk Management', 'Legal Obligation (Compliance with laws)']] },
      retention: { title: '5. Retention', text: 'We retain personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.', items: ['Financial Records: 7 Years', 'Client Communications: 5 Years', 'Marketing Data: Until unsubscribe'] },
      providers: { title: '6. Service Providers & Transfers', text: 'We leverage industry-leading third-party tools to maintain our infrastructure. These partners are compliant with GDPR, CCPA, and global privacy frameworks.', tags: ['Google Analytics', 'Salesforce CRM', 'Amazon Web Services', 'Mailchimp'], transferTitle: 'International Transfers', transferText: 'Where we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented: Standard Contractual Clauses (SCCs) or adequacy decisions by the European Commission.' },
      rights: { title: '7. Your Rights', items: [{ title: 'Right to Access', text: 'You have the right to request a copy of the personal information we hold about you.' }, { title: 'Right to Erasure', text: 'You can ask us to delete or remove personal data where there is no good reason for us continuing to process it.' }, { title: 'Right to Rectification', text: 'You have the right to have any incomplete or inaccurate data we hold about you corrected.' }, { title: 'Right to Object', text: 'You can object to processing where we are relying on a legitimate interest.' }] },
    },
    questions: { title: 'Have Questions?', text: 'Reach out to our global compliance team for any privacy-related inquiries.', email: 'privacy@baxhen.com' },
    footer: '© {year} Baxhen Consulting. All rights reserved.',
    footerLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies' },
  },
}

const c = { bg: '#0e1417', surface: '#0e1417', surfaceLow: '#161d1f', surfaceLowest: '#080f12', container: '#1a2123', primary: '#a8e8ff', primaryContainer: '#00d4ff', secondary: '#75d4e9', tertiary: '#ecddbc', onSurface: '#dde3e7', onSurfaceVariant: '#bbc9cf', onPrimaryContainer: '#00586b', outlineVariant: '#3c494e' } as const

const iconMap: Record<string, React.FC<{ size?: number; color?: string; className?: string }>> = { Building2, Database, Mail, Gavel, Clock, Cloud, UserCheck }

interface PageProps { params: Promise<{ locale: string }> }

export default async function PrivacyPage({ params }: PageProps) {
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
            <Link href={`/${locale}/websites`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>How it Works</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Solutions</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Contact</Link>
          </div>
          <span className="px-6 py-2 text-xs font-bold rounded-lg" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>Get Started</span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 md:px-10 max-w-[1280px] mx-auto">
        <div className="relative mb-16 overflow-hidden rounded-xl py-20 px-8 md:px-16 flex flex-col items-center text-center" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
          <span className="text-xs font-semibold uppercase tracking-widest block mb-4" style={{ color: c.primary }}>{t.badge}</span>
          <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold tracking-tighter mb-6" style={{ color: c.onSurface, letterSpacing: '-0.02em' }}>{t.title}</h1>
          <p className="max-w-2xl mx-auto text-[18px] leading-[28px]" style={{ color: c.onSurfaceVariant }}>{t.hero}</p>
          <div className="mt-8">
            <span className="px-4 py-2 rounded-full text-xs border backdrop-blur-sm" style={{ backgroundColor: 'rgba(47,54,57,0.5)', borderColor: 'rgba(60,73,78,0.3)', color: c.onSurfaceVariant }}>{t.updated}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <aside className="lg:col-span-3 hidden lg:sticky lg:top-32 lg:block">
            <nav className="space-y-2">
              <h3 className="text-xs uppercase tracking-widest mb-6" style={{ color: c.onSurfaceVariant }}>{t.toc}</h3>
              {['controller','information','contactForm','legalBasis','retention','providers','rights'].map((id, i) => (
                <a key={id} href={`#${id}`} className="block py-2 text-sm hover:opacity-80 transition-colors border-l-2 pl-4" style={{ color: c.onSurfaceVariant, borderColor: 'transparent' }}>
                  {i + 1}. {t.sections[id as keyof typeof t.sections].title.split('. ')[1] || t.sections[id as keyof typeof t.sections].title}
                </a>
              ))}
            </nav>
          </aside>

          <article className="lg:col-span-9 space-y-16">
            {(['controller','information','contactForm','legalBasis','retention','providers','rights'] as const).map((id) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const section = t.sections[id] as any
              const icons: Record<string, 'Building2' | 'Database' | 'Mail' | 'Gavel' | 'Clock' | 'Cloud' | 'UserCheck'> = { controller: 'Building2', information: 'Database', contactForm: 'Mail', legalBasis: 'Gavel', retention: 'Clock', providers: 'Cloud', rights: 'UserCheck' }
              const IconComponent = iconMap[icons[id]]

              if (id === 'information') return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div>
                    <h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {(['personal','usage'] as const).map((key) => {
                      const data = section[key as 'personal' | 'usage']
                      return (
                        <div key={key} className={`p-6 rounded-xl border-l-4`} style={{ backgroundColor: c.container, borderColor: key === 'personal' ? c.tertiary : c.secondary, border: `1px solid rgba(60,73,78,0.1)`, borderLeft: `4px solid ${key === 'personal' ? c.tertiary : c.secondary}` }}>
                          <h3 className="text-[20px] font-medium mb-4" style={{ color: c.onSurface }}>{data.title}</h3>
                          <p className="mb-4 text-sm" style={{ color: c.onSurfaceVariant }}>{data.text}</p>
                          <ul className="list-disc list-inside space-y-2 text-sm" style={{ color: c.onSurfaceVariant }}>
                            {data.items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </section>
              )

              if (id === 'legalBasis') return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div>
                    <h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2>
                  </div>
                  <div className="overflow-hidden rounded-xl border" style={{ borderColor: 'rgba(60,73,78,0.3)' }}>
                    <table className="w-full text-left border-collapse">
                      <thead><tr style={{ backgroundColor: 'rgba(47,54,57,0.4)' }}><th className="p-4 text-xs font-semibold uppercase" style={{ color: c.primary }}>Activity</th><th className="p-4 text-xs font-semibold uppercase" style={{ color: c.primary }}>Legal Basis</th></tr></thead>
                      <tbody className="divide-y" style={{ borderColor: 'rgba(60,73,78,0.2)' }}>
                        {section.rows.map((row: string[], i: number) => (
                          <tr key={i}><td className="p-4 font-bold text-sm">{row[0]}</td><td className="p-4 text-sm" style={{ color: c.onSurfaceVariant }}>{row[1]}</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )

              if (id === 'retention') return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div>
                    <h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2>
                  </div>
                  <div className="p-8 rounded-xl flex flex-col md:flex-row gap-8 items-center" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
                    <div className="md:w-1/3"><div className="w-32 h-32 rounded-full border-4 border-dashed flex items-center justify-center mx-auto" style={{ borderColor: 'rgba(168,232,255,0.3)' }}><span className="text-[40px] font-bold" style={{ color: c.primary }}>7y</span></div></div>
                    <div className="md:w-2/3"><p className="text-[18px] mb-4">{section.text}</p><ul className="space-y-2 text-sm" style={{ color: c.onSurfaceVariant }}>{section.items.map((item: string, i: number) => <li key={i} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c.primary }} />{item}</li>)}</ul></div>
                  </div>
                </section>
              )

              if (id === 'providers') return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div><h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2></div>
                  <div className="space-y-6"><p className="text-sm" style={{ color: c.onSurfaceVariant }}>{section.text}</p>
                    <div className="flex flex-wrap gap-4">{(section.tags as string[]).map((tag: string, i: number) => <span key={i} className="px-4 py-2 rounded-lg border text-xs font-semibold" style={{ backgroundColor: 'rgba(47,54,57,0.3)', borderColor: 'rgba(60,73,78,0.3)', color: c.onSurface }}>{tag}</span>)}</div>
                    <div className="p-6 rounded-xl border" style={{ backgroundColor: 'rgba(236,221,188,0.05)', borderColor: 'rgba(236,221,188,0.15)' }}><h4 className="font-bold mb-2 text-sm" style={{ color: c.tertiary }}>{section.transferTitle}</h4><p className="text-sm" style={{ color: c.onSurfaceVariant }}>{section.transferText}</p></div>
                  </div>
                </section>
              )

              if (id === 'rights') return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div><h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.items.map((item: { title: string; text: string }, i: number) => (
                      <div key={i} className="p-6 rounded-xl transition-colors" style={{ backgroundColor: c.surfaceLow, border: `1px solid rgba(60,73,78,0.1)` }}>
                        <span className="font-bold block mb-1 text-sm">{item.title}</span><p className="text-sm" style={{ color: c.onSurfaceVariant }}>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )

              // Default: controller, contactForm
              const isContactForm = id === 'contactForm'
              return (
                <section key={id} id={id} className="scroll-mt-32">
                  <div className="flex items-center gap-4 mb-6"><div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,212,255,0.1)' }}><IconComponent size={20} color={c.primary} /></div><h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.primary }}>{section.title}</h2></div>
                  <div className="p-8 rounded-xl" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
                    {id === 'controller' ? (
                      <>
                        <p className="mb-4 text-sm" style={{ color: c.onSurfaceVariant }}>{(section as typeof t.sections.controller).text}</p>
                        <div className="space-y-2 mt-6 text-sm"><div className="flex gap-4"><span className="font-bold min-w-[120px]">Entity:</span><span style={{ color: c.onSurfaceVariant }}>{(section as typeof t.sections.controller).entity}</span></div><div className="flex gap-4"><span className="font-bold min-w-[120px]">HQ:</span><span style={{ color: c.onSurfaceVariant }}>{(section as typeof t.sections.controller).hq}</span></div><div className="flex gap-4"><span className="font-bold min-w-[120px]">Officer:</span><span style={{ color: c.onSurfaceVariant }}>{(section as typeof t.sections.controller).officer}</span></div></div>
                      </>
                    ) : (
                      <>
                        <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{(section as typeof t.sections.contactForm).text}</p>
                        <div className="p-4 rounded-lg border mt-4 italic text-sm" style={{ backgroundColor: c.surfaceLow, borderColor: 'rgba(60,73,78,0.2)', color: c.onSurfaceVariant }}>{(section as typeof t.sections.contactForm).quote}</div>
                      </>
                    )}
                  </div>
                </section>
              )
            })}
          </article>
        </div>
      </main>

      <section className="border-t py-16 text-center" style={{ backgroundColor: c.surfaceLowest, borderColor: 'rgba(60,73,78,0.1)' }}>
        <h2 className="text-[32px] font-bold mb-4">{t.questions.title}</h2>
        <p className="mb-8 text-sm" style={{ color: c.onSurfaceVariant }}>{t.questions.text}</p>
        <a href={`mailto:${t.questions.email}`} className="inline-flex items-center gap-3 font-bold hover:gap-5 transition-all text-sm" style={{ color: c.primary }}>{t.questions.email} <ArrowRight size={16} /></a>
      </section>

      <footer className="py-12 px-6 md:px-10 border-t" style={{ borderColor: 'rgba(60,73,78,0.05)' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div><span className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.footer.replace('{year}', String(new Date().getFullYear()))}</span></div>
          <div className="flex gap-8">
            <Link href={`/${locale}/websites/privacy`} className="text-xs font-bold" style={{ color: c.primary }}>{t.footerLinks.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.cookies}</Link>
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
