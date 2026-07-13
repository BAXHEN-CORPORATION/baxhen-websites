import React from 'react'
import { SolarisHome } from './solaris-douro/home'
import { SolarisAbout } from './solaris-douro/about'
import { NexusLanding } from './nexus/landing'

type PageComponent = React.FC<{ content: Record<string, unknown> }>

const sitePages: Record<string, Record<string, PageComponent>> = {
  'solaris-douro': { home: SolarisHome, about: SolarisAbout },
  'consultoria-nexus': { home: NexusLanding },
}

export const getSitePage = (siteSlug: string, path: string): PageComponent | null => {
  const site = sitePages[siteSlug]
  if (!site) return null
  const page = site[path] || site['home']
  return page || null
}
