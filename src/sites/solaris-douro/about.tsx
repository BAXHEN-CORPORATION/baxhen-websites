import React from 'react'
import { HeroSection } from '@/views/sections/HeroSection'
import { ContentSection } from '@/views/sections/ContentSection'
import type { HeroSectionViewModel } from '@/view-models/blocks/types'

interface SolarisAboutContent {
  hero?: Partial<HeroSectionViewModel>
  content?: { content?: unknown }
}

export const defaultContent: SolarisAboutContent = {
  hero: {
    heading: 'A Nossa História',
    subtext: 'Há mais de 20 anos a partilhar a beleza do Douro.',
    variant: 'minimal',
  },
}

export const SolarisAbout = ({ content }: { content: SolarisAboutContent }) => (
  <>
    {'dsdsadsa'}
    {content.hero && (
      <HeroSection
        data={{ blockType: 'hero', heading: '', ...content.hero } as HeroSectionViewModel}
      />
    )}
    {content.content && <ContentSection data={{ blockType: 'content', ...content.content }} />}
  </>
)
