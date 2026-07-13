import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { Locale } from '@/domain/shared/types'
import { Globe, Copyright, Send, Gavel, ExternalLink, ShieldCheck, Mail, MapPin } from 'lucide-react'

const content = {
  pt: {
    badge: 'DOCUMENTO ESSENCIAL',
    title: 'Termos de Serviço',
    effective: 'Data de Vigência: 24 de Maio de 2024. Leia estes termos atentamente antes de interagir com o nosso ecossistema digital.',
    sections: [
      { num: '1', icon: Globe, title: 'Regras de Utilização do Website Público', text: ['Ao aceder à BAXHEN, concorda em utilizar a nossa plataforma apenas para fins profissionais e lícitos. Tentativas não autorizadas de contornar protocolos de segurança, extrair dados proprietários ou interromper a integridade do site são estritamente proibidas.', 'O envolvimento deve refletir o decoro profissional esperado em ambientes de consultoria executiva global.'] },
      { num: '2', icon: Copyright, title: 'Direitos de Propriedade Intelectual', text: ['O nome BAXHEN, logótipo, identidade visual e todo o conteúdo original, incluindo whitepapers, metodologias e diagramas de arquitetura, são propriedade exclusiva da Baxhen Business Consulting.'], quote: 'Os utilizadores recebem uma licença limitada e não exclusiva para visualizar o conteúdo para fins informativos. A redistribuição ou extração comercial é proibida sem consentimento expresso por escrito.' },
    ],
    gridCards: [
      { title: 'Links Externos', text: 'A nossa plataforma pode conter portais para recursos de terceiros. A BAXHEN não endossa nem assume responsabilidade pela precisão ou segurança de ecossistemas externos.' },
      { title: 'Precisão da Informação', text: 'Embora nos esforcemos pela precisão nas nossas informações, o conteúdo é fornecido "como está". Decisões estratégicas devem ser verificadas diretamente com os nossos consultores profissionais.' },
    ],
    contactSubmissions: { num: '3', title: 'Protocolo de Submissão de Contactos', text: 'As informações submetidas através dos nossos canais de contacto devem ser precisas e verdadeiras. Ao submeter, concede à BAXHEN o direito de usar estas informações para responder à sua consulta e facilitar comunicação profissional futura, sujeito à nossa Política de Privacidade.' },
    noAutoAgreement: { num: '4', title: 'Sem Acordo Automático de Cliente', text: 'A interação com este website, a submissão de consultas ou o download de recursos ', emphasis: 'não', after: ' constitui uma relação fiduciária ou um contrato formal de cliente-consultor. Um compromisso formal só começa após a execução mútua de um Master Service Agreement (MSA).' },
    legal: {
      liabilityTitle: 'Limitação de Responsabilidade', liabilityText: 'A BAXHEN e as suas afiliadas não serão responsáveis por quaisquer danos indiretos, incidentais ou consequenciais resultantes do uso deste site ou da confiança no seu conteúdo.',
      jurisdictionTitle: 'Lei Aplicável', jurisdictionText: 'Estes termos são regidos pelas leis da jurisdição onde a Baxhen Consulting está registada. Quaisquer litígios serão resolvidos através de arbitragem na mesma localidade.',
    },
    clarification: { title: 'Precisa de Esclarecimento?', text: 'O nosso departamento jurídico está disponível para discutir quaisquer questões relativas a estes termos ou aos nossos protocolos de serviços profissionais.', email: 'legal@baxhen.com', address: 'Lisboa, Portugal' },
    nav: { howItWorks: 'Como Funciona', solutions: 'Soluções', whoItsFor: 'Para Quem', contact: 'Contacto' },
    cta: 'Começar',
    footer: '© {year} Baxhen Consulting. Todos os direitos reservados.',
    footerLinks: { privacy: 'Privacidade', terms: 'Termos de Serviço', cookies: 'Cookies' },
  },
  en: {
    badge: 'CRUCIAL DOCUMENT',
    title: 'Terms of Service',
    effective: 'Effective Date: May 24, 2024. Please read these terms carefully before engaging with our digital ecosystem.',
    sections: [
      { num: '1', icon: Globe, title: 'Public Website Usage Rules', text: ['By accessing BAXHEN, you agree to utilize our platform for lawful, professional purposes only. Unauthorized attempts to bypass security protocols, scrape proprietary data, or disrupt site integrity are strictly prohibited.', 'Engagement must reflect the professional decorum expected within global executive consultancy environments.'] },
      { num: '2', icon: Copyright, title: 'Intellectual Property Rights', text: ['The BAXHEN name, logo, visual identity, and all original content including whitepapers, methodologies, and architectural diagrams are the exclusive property of Baxhen Business Consulting.'], quote: '"Users are granted a limited, non-exclusive license to view content for informational purposes. Redistribution or commercial extraction is prohibited without express written consent."' },
    ],
    gridCards: [
      { title: 'External Links', text: 'Our platform may contain portals to third-party resources. BAXHEN does not endorse or assume liability for the accuracy or security of external ecosystems.' },
      { title: 'Information Accuracy', text: 'While we strive for precision in our insights, content is provided "as is." Strategic decisions should be verified with our professional consultants directly.' },
    ],
    contactSubmissions: { num: '3', title: 'Contact Submissions Protocol', text: 'Information submitted through our contact channels must be accurate and truthful. By submitting, you grant BAXHEN the right to use this information to respond to your inquiry and facilitate future professional communication, subject to our Privacy Policy.' },
    noAutoAgreement: { num: '4', title: 'No Automatic Client Agreement', text: 'Interaction with this website, submission of inquiries, or downloading of resources does ', emphasis: 'not', after: ' constitute a fiduciary relationship or a formal client-consultant contract. A formal engagement only commences upon the mutual execution of a Master Service Agreement (MSA).' },
    legal: {
      liabilityTitle: 'Limitation of Liability', liabilityText: 'BAXHEN and its affiliates shall not be liable for any indirect, incidental, or consequential damages arising from your use of this site or reliance on its content.',
      jurisdictionTitle: 'Applicable Law', jurisdictionText: 'These terms are governed by the laws of the jurisdiction in which Baxhen Consulting is registered. Any disputes shall be resolved through arbitration in the same locale.',
    },
    clarification: { title: 'Need Clarification?', text: 'Our legal department is available to discuss any questions regarding these terms or our professional services engagement protocols.', email: 'legal@baxhen.com', address: 'Lisbon, Portugal' },
    nav: { howItWorks: 'How it Works', solutions: 'Solutions', whoItsFor: 'Who it\'s for', contact: 'Contact' },
    cta: 'Get Started',
    footer: '© {year} Baxhen Consulting. All rights reserved.',
    footerLinks: { privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookies' },
  },
}

const c = { bg: '#0e1417', surface: '#0e1417', surfaceLow: '#161d1f', surfaceLowest: '#080f12', container: '#1a2123', primary: '#a8e8ff', primaryContainer: '#00d4ff', secondary: '#75d4e9', tertiary: '#ecddbc', onTertiary: '#383019', onSurface: '#dde3e7', onSurfaceVariant: '#bbc9cf', onPrimaryContainer: '#00586b', outlineVariant: '#3c494e', error: '#ffb4ab' } as const

interface PageProps { params: Promise<{ locale: string }> }

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params
  const t = content[locale as Locale] || content.en

  return (
    <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: 'rgba(14,20,23,0.9)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderColor: 'rgba(60,73,78,0.15)' }}>
        <div className="flex justify-between items-center h-20 px-6 md:px-10 max-w-[1280px] mx-auto">
          <Link href={`/${locale}/websites`} className="flex items-center">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href={`/${locale}/websites`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.howItWorks}</Link>
            <Link href={`/${locale}/websites/solutions`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.solutions}</Link>
            <Link href={`/${locale}/websites#sectors`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.whoItsFor}</Link>
            <Link href={`/${locale}/websites/contact`} className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.nav.contact}</Link>
          </div>
          <Link href={`/${locale}/websites/contact`}>
            <span className="px-6 py-2 text-xs font-bold rounded-lg hover:brightness-110 transition-all" style={{ backgroundColor: c.primaryContainer, color: c.onPrimaryContainer }}>{t.cta}</span>
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-20 min-h-screen">
        <div className="max-w-[900px] mx-auto px-4 md:px-10">
          <div className="mb-16">
            <span className="inline-block py-1 px-3 text-xs font-semibold rounded-full mb-4" style={{ backgroundColor: c.tertiary, color: c.onTertiary }}>{t.badge}</span>
            <h1 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold mb-4" style={{ color: c.primary, letterSpacing: '-0.02em' }}>{t.title}</h1>
            <p className="text-[18px] leading-[28px] max-w-2xl" style={{ color: c.onSurfaceVariant }}>{t.effective}</p>
          </div>

          <div className="space-y-12">
            {t.sections.map((s, i) => {
              const Icon = s.icon
              return (
                <section key={i} className="p-8 rounded-xl relative overflow-hidden" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
                  <div className="flex items-start gap-6">
                    <Icon size={28} color={c.primary} className="mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-[24px] leading-[32px] font-medium mb-4" style={{ color: c.onSurface }}>{s.num}. {s.title}</h2>
                      <div className="space-y-4" style={{ color: c.onSurfaceVariant }}>
                        {s.text.map((p, j) => <p key={j}>{p}</p>)}
                      </div>
                      {'quote' in s && s.quote && (
                        <div className="p-4 rounded-lg border mt-4 italic text-sm" style={{ backgroundColor: 'rgba(47,54,57,0.2)', borderColor: 'rgba(60,73,78,0.3)' }}>
                          {s.quote}
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              )
            })}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.gridCards.map((card, i) => (
                <section key={i} className="p-8 rounded-xl flex flex-col justify-between" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
                  <div>
                    <h2 className="text-[24px] leading-[32px] font-medium mb-4" style={{ color: c.onSurface }}>{card.title}</h2>
                    <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{card.text}</p>
                  </div>
                  <div className="mt-6 flex justify-end opacity-40">
                    {i === 0 ? <ExternalLink size={20} color={c.secondary} /> : <ShieldCheck size={20} color={c.secondary} />}
                  </div>
                </section>
              ))}
            </div>

            <section className="p-8 rounded-xl" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
              <div className="flex items-start gap-6">
                <Send size={28} color={c.primary} className="mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-[24px] leading-[32px] font-medium mb-4" style={{ color: c.onSurface }}>{t.contactSubmissions.num}. {t.contactSubmissions.title}</h2>
                  <p style={{ color: c.onSurfaceVariant }}>{t.contactSubmissions.text}</p>
                </div>
              </div>
            </section>

            <section className="relative p-px rounded-xl" style={{ background: `linear-gradient(to bottom right, rgba(168,232,255,0.2), transparent)` }}>
              <div className="p-8 rounded-lg" style={{ backgroundColor: c.surface }}>
                <div className="flex items-center gap-4 mb-4">
                  <Gavel size={28} color={c.error} />
                  <h2 className="text-[24px] leading-[32px] font-medium" style={{ color: c.onSurface }}>{t.noAutoAgreement.num}. {t.noAutoAgreement.title}</h2>
                </div>
                <p className="border-l-2 pl-6" style={{ color: c.onSurfaceVariant, borderColor: 'rgba(168,232,255,0.3)' }}>
                  {t.noAutoAgreement.text}
                  <strong style={{ color: c.primary }}> {t.noAutoAgreement.emphasis}</strong>
                  {t.noAutoAgreement.after}
                </p>
              </div>
            </section>

            <section className="p-8 rounded-xl" style={{ backgroundColor: c.container, border: `1px solid rgba(60,73,78,0.1)` }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.primary }}>Liability</h3>
                  <h2 className="text-[24px] leading-[32px] font-medium mb-4" style={{ color: c.onSurface }}>{t.legal.liabilityTitle}</h2>
                  <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{t.legal.liabilityText}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: c.primary }}>Jurisdiction</h3>
                  <h2 className="text-[24px] leading-[32px] font-medium mb-4" style={{ color: c.onSurface }}>{t.legal.jurisdictionTitle}</h2>
                  <p className="text-sm" style={{ color: c.onSurfaceVariant }}>{t.legal.jurisdictionText}</p>
                </div>
              </div>
            </section>

            <section className="p-10 rounded-2xl text-center border" style={{ backgroundColor: c.container, borderColor: 'rgba(168,232,255,0.1)' }}>
              <h2 className="text-[24px] leading-[32px] font-medium mb-6" style={{ color: c.onSurface }}>{t.clarification.title}</h2>
              <p className="mb-8 max-w-lg mx-auto text-sm" style={{ color: c.onSurfaceVariant }}>{t.clarification.text}</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a href={`mailto:${t.clarification.email}`} className="flex items-center gap-2 hover:underline text-sm" style={{ color: c.primary }}>
                  <Mail size={16} /> {t.clarification.email}
                </a>
                <div className="w-px h-6 hidden md:block" style={{ backgroundColor: 'rgba(60,73,78,0.3)' }} />
                <address className="not-italic flex items-center gap-2 text-sm" style={{ color: c.onSurfaceVariant }}>
                  <MapPin size={16} /> {t.clarification.address}
                </address>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t py-12 px-6 md:px-10" style={{ backgroundColor: c.surfaceLowest, borderColor: 'rgba(60,73,78,0.1)' }}>
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-[24px] font-bold tracking-tighter" style={{ letterSpacing: '-1.2px', color: c.onSurface }}>baxh<span style={{ color: c.primaryContainer }}>e</span>n</span>
            <span className="text-xs" style={{ color: c.onSurfaceVariant }}>{t.footer.replace('{year}', String(new Date().getFullYear()))}</span>
          </div>
          <div className="flex gap-8">
            <Link href={`/${locale}/websites/privacy`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.privacy}</Link>
            <Link href={`/${locale}/websites/terms`} className="text-xs font-bold" style={{ color: c.primary }}>{t.footerLinks.terms}</Link>
            <Link href={`/${locale}/websites/cookies`} className="text-xs hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>{t.footerLinks.cookies}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale] || content.en
  return { title: `${t.title} — Baxhen`, description: t.effective }
}
