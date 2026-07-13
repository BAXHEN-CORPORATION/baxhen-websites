import React from 'react'
import { SolarisHome } from './solaris-douro/home'
import { SolarisAbout } from './solaris-douro/about'
import { NexusLanding } from './nexus/landing'
import { FalcaoHome } from './falcao-mudancas/home'
import { FalcaoServices } from './falcao-mudancas/services'
import { FalcaoAbout } from './falcao-mudancas/about'
import { FalcaoContact } from './falcao-mudancas/contact'
import { FalcaoTerms } from './falcao-mudancas/terms'
import { FalcaoPrivacy } from './falcao-mudancas/privacy'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PageComponent = React.FC<any>

const sitePages: Record<string, Record<string, PageComponent>> = {
  'solaris-douro': { home: SolarisHome, about: SolarisAbout },
  'consultoria-nexus': { home: NexusLanding },
  'falcao-mudancas': {
    home: FalcaoHome,
    services: FalcaoServices,
    about: FalcaoAbout,
    contact: FalcaoContact,
    terms: FalcaoTerms,
    privacy: FalcaoPrivacy,
  },
}

export const getSitePage = (siteSlug: string, path: string): PageComponent | null => {
  const site = sitePages[siteSlug]
  if (!site) return null
  const page = site[path] || site['home']
  return page || null
}
