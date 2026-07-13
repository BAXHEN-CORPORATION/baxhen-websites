import React from 'react'

/**
 * Layout for the client website route group.
 * Minimal — site-specific layout (theme, header, footer) is applied
 * in the _sites/[siteSlug]/[locale] layout.
 */
export default function SitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
