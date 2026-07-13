import React from 'react'
import NextLink from 'next/link'
import type { ReactNode } from 'react'

interface LinkProps {
  children: ReactNode
  href: string
  className?: string
  locale?: string
}

export const Link: React.FC<LinkProps> = ({ children, href, className = '', locale }) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

  if (isExternal) {
    return (
      <a href={href} className={`hover:opacity-80 transition-opacity ${className}`} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href} locale={locale} className={`hover:opacity-80 transition-opacity ${className}`}>
      {children}
    </NextLink>
  )
}
