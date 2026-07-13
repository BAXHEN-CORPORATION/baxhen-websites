import React from 'react'
import { HeroSection } from '@/views/sections/HeroSection'
import { ServicesSection } from '@/views/sections/ServicesSection'
import { TestimonialsSection } from '@/views/sections/TestimonialsSection'
import { FAQSection } from '@/views/sections/FAQSection'
import { CTASection } from '@/views/sections/CTASection'
import { LeadFormSection } from '@/views/sections/LeadFormSection'
import type { HeroSectionViewModel, ServicesSectionViewModel, TestimonialsSectionViewModel, FAQSectionViewModel, CTASectionViewModel, LeadFormSectionViewModel } from '@/view-models/blocks/types'

interface NexusLandingContent {
  hero?: Partial<HeroSectionViewModel>
  services?: Partial<ServicesSectionViewModel>
  testimonials?: Partial<TestimonialsSectionViewModel>
  faq?: Partial<FAQSectionViewModel>
  cta?: Partial<CTASectionViewModel>
  leadForm?: Partial<LeadFormSectionViewModel>
}

export const defaultContent: NexusLandingContent = {
  hero: { heading: 'Consultoria Estratégica para PMEs', subtext: 'Resultados mensuráveis em 90 dias.', variant: 'centered', cta: { label: 'Diagnóstico Gratuito', href: '#form' } },
  services: { heading: 'Como Podemos Ajudar', services: [{ title: 'Estratégia de Crescimento', description: 'Análise de mercado e plano de ação.' }, { title: 'Automação de Processos', description: 'Simplificamos operações.' }, { title: 'Transformação Digital', description: 'Tecnologia ao serviço do crescimento.' }] },
  testimonials: { heading: 'O Que Dizem os Nossos Clientes', testimonials: [{ quote: 'Duplicámos a faturação em 6 meses.', author: 'Ana Martins', role: 'CEO' }, { quote: 'Finalmente um parceiro que entende PMEs.', author: 'Carlos Silva', role: 'Diretor' }] },
  faq: { heading: 'Dúvidas Frequentes', items: [{ question: 'Quanto custa o diagnóstico?', answer: 'É gratuito e sem compromisso.' }, { question: 'Quanto tempo até ver resultados?', answer: 'Melhorias mensuráveis em 90 dias.' }] },
  cta: { heading: 'Pronto para transformar o seu negócio?', subtext: 'Agende o seu diagnóstico gratuito.', buttons: [{ label: 'Solicitar Diagnóstico', href: '#form' }] },
  leadForm: { heading: 'Solicite o Seu Diagnóstico', formId: 'lead', submitLabel: 'Enviar', consentRequired: true, fields: [{ name: 'name', label: 'Nome', type: 'text', required: true }, { name: 'email', label: 'Email', type: 'email', required: true }] },
}

export const NexusLanding = ({ content }: { content: NexusLandingContent }) => (
  <>
    {content.hero && <HeroSection data={{ blockType: 'hero', heading: '', ...content.hero } as HeroSectionViewModel} />}
    {content.services && <ServicesSection data={{ blockType: 'services', heading: '', services: [], ...content.services } as ServicesSectionViewModel} />}
    {content.testimonials && <TestimonialsSection data={{ blockType: 'testimonials', heading: '', testimonials: [], ...content.testimonials } as TestimonialsSectionViewModel} />}
    {content.faq && <FAQSection data={{ blockType: 'faq', heading: '', items: [], ...content.faq } as FAQSectionViewModel} />}
    {content.cta && <CTASection data={{ blockType: 'cta', heading: '', buttons: [], ...content.cta } as CTASectionViewModel} />}
    {content.leadForm && <LeadFormSection data={{ blockType: 'leadForm', heading: '', formId: '', fields: [], ...content.leadForm } as LeadFormSectionViewModel} />}
  </>
)
