import React from 'react'
import { Container } from '@/views/primitives/Container'
import { Link } from '@/views/primitives/Link'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'

interface SiteFooterProps {
  siteName: string
  navigation?: NavigationItemViewModel[]
  socialLinks?: Array<{ platform: string; url: string }>
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ siteName, navigation, socialLinks }) => {
  return (
    <footer
      className="border-t py-12 mt-auto"
      style={{
        backgroundColor: 'var(--color-surface, #181c22)',
        borderColor: 'var(--color-outline, #859398)',
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p
              className="text-lg font-semibold mb-2"
              style={{ fontFamily: 'var(--font-heading, Literata, serif)', color: 'var(--color-heading, var(--color-text, #dfe2eb))' }}
            >
              {siteName}
            </p>
            <p className="text-sm opacity-60">
              &copy; {new Date().getFullYear()} {siteName}. All rights reserved.
            </p>
          </div>

          {navigation && navigation.length > 0 && (
            <nav className="flex flex-wrap gap-4" aria-label="Footer navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}

          {socialLinks && socialLinks.length > 0 && (
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.platform} href={link.url} className="text-sm opacity-70 hover:opacity-100">
                  {link.platform}
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </footer>
  )
}
