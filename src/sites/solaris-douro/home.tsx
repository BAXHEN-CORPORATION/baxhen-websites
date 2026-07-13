import React from 'react'
import { HeroSection } from '@/views/sections/HeroSection'
import { ServicesSection } from '@/views/sections/ServicesSection'
import { GallerySection } from '@/views/sections/GallerySection'
import { CTASection } from '@/views/sections/CTASection'
import type { HeroSectionViewModel } from '@/view-models/blocks/types'
import type { ServicesSectionViewModel } from '@/view-models/blocks/types'
import type { GallerySectionViewModel } from '@/view-models/blocks/types'
import type { CTASectionViewModel } from '@/view-models/blocks/types'

// Content interface — defines what this site needs from the CMS
interface SolarisHomeContent {
  hero?: Partial<HeroSectionViewModel>
  services?: Partial<ServicesSectionViewModel>
  gallery?: Partial<GallerySectionViewModel>
  cta?: Partial<CTASectionViewModel>
}

export const defaultContent: SolarisHomeContent = {
  hero: { heading: 'Descubra o Solaris Douro', subtext: 'Experiências autênticas no coração do vale do Douro.', variant: 'centered', cta: { label: 'Explorar', href: '/about' } },
  services: { heading: 'As Nossas Experiências', services: [{ title: 'Passeios de Barco', description: 'Navegue pelo rio Douro em barcos tradicionais.' }, { title: 'Prova de Vinhos', description: 'Deguste vinhos premiados em quintas históricas.' }, { title: 'Gastronomia Local', description: 'Saboreie a cozinha tradicional duriense.' }] },
  gallery: { heading: 'Momentos no Douro' },
  cta: { heading: 'Reserve a Sua Experiência', subtext: 'Contacte-nos para planear a sua visita.', buttons: [{ label: 'Contactar', href: '/contact' }] },
}

export const SolarisHome = ({ content }: { content: SolarisHomeContent }) => (
  <>
    {content.hero && <HeroSection data={{ blockType: 'hero', heading: '', ...content.hero } as HeroSectionViewModel} />}
    {content.services && <ServicesSection data={{ blockType: 'services', heading: '', services: [], ...content.services } as ServicesSectionViewModel} />}
    {content.gallery && <GallerySection data={{ blockType: 'gallery', heading: '', images: [], ...content.gallery } as GallerySectionViewModel} />}
    {content.cta && <CTASection data={{ blockType: 'cta', heading: '', buttons: [], ...content.cta } as CTASectionViewModel} />}
  </>
)
