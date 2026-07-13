import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site Not Found — Baxhen',
  robots: { index: false, follow: false },
}

/**
 * Shown when a hostname doesn't resolve to any active site.
 */
export default function SiteNotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#10141a', color: '#dfe2eb' }}>
      <div className="text-center max-w-md px-4">
        <h1 className="text-4xl font-light mb-4" style={{ fontFamily: 'Literata, serif' }}>
          Site Not Found
        </h1>
        <p className="text-lg opacity-70 mb-8">
          The website you&apos;re looking for doesn&apos;t exist or is not yet configured.
        </p>
        <p className="text-sm opacity-50">
          Powered by{' '}
          <a href="https://baxhen.pt" className="underline hover:opacity-80">
            Baxhen
          </a>
        </p>
      </div>
    </div>
  )
}
