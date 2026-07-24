import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './components/Button'
import { c, LOGO, FONT } from './config'

export const FalcaoLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: FONT, minHeight: '100vh' }}>
    <header
      className="fixed top-0 w-full z-50 border-b"
      style={{ backgroundColor: c.bg, borderColor: c.border }}
    >
      <div className="flex justify-between items-center px-4 md:px-6 py-3 max-w-[1200px] mx-auto">
        <Link href="/">
          <Image
            src={LOGO}
            alt="Falcão Mudanças"
            width={56}
            height={56}
            unoptimized
            className="h-14 w-auto"
          />
        </Link>
        <Button variant="solid" size="sm" href="/orcamento">
          Pedir Orçamento
        </Button>
      </div>
    </header>
    <main className="pt-20">{children}</main>
    <footer
      className="py-8 mt-16 border-t"
      style={{ backgroundColor: c.surface, borderColor: c.border }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-[1200px] mx-auto gap-4">
        <Image
          src={LOGO}
          alt="Falcão Mudanças"
          width={48}
          height={48}
          unoptimized
          className="h-12 w-auto"
        />
        <div className="flex gap-6">
          <Link
            href="/terms"
            className="text-xs font-semibold hover:opacity-80 transition-colors"
            style={{ color: c.onSurfaceVariant }}
          >
            Termos
          </Link>
          <Link
            href="/privacy"
            className="text-xs font-semibold hover:opacity-80 transition-colors"
            style={{ color: c.onSurfaceVariant }}
          >
            Privacidade
          </Link>
        </div>
        <p className="text-xs" style={{ color: c.onSurfaceVariant }}>
          © {new Date().getFullYear()} Falcão Mudanças
        </p>
      </div>
    </footer>
  </div>
)
