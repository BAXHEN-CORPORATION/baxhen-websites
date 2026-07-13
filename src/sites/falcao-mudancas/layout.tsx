import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const c = {
  bg: '#f9f9ff', primary: '#00317e', primaryContainer: '#0046ad',
  onSurface: '#111c2d', onSurfaceVariant: '#434653', onPrimary: '#ffffff',
  outlineVariant: '#c3c6d5', surfaceLow: '#f0f3ff',
} as const

export const FalcaoLayout = ({ children }: { children: React.ReactNode }) => (
  <div style={{ backgroundColor: c.bg, color: c.onSurface, fontFamily: 'Inter, var(--font-geist-sans), sans-serif', minHeight: '100vh' }}>
    <header className="fixed top-0 w-full z-50 border-b" style={{ backgroundColor: c.bg, borderColor: 'rgba(195,198,213,0.3)' }}>
      <div className="flex justify-between items-center px-4 md:px-6 py-3 max-w-[1200px] mx-auto">
        <Link href="/">
          <Image src="/assets/falcao/logo.png" alt="Falcão Mudanças" width={56} height={56} unoptimized className="h-14 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/services" className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Serviços</Link>
          <Link href="/about" className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Sobre Nós</Link>
          <Link href="/contact" className="text-sm hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Contacto</Link>
        </nav>
        <Link href="/#orcamento" className="px-5 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all" style={{ backgroundColor: c.primary, color: c.onPrimary }}>
          Pedir Orçamento
        </Link>
      </div>
    </header>
    <main className="pt-20">{children}</main>
    <footer className="py-8 mt-16 border-t" style={{ backgroundColor: c.surfaceLow, borderColor: 'rgba(195,198,213,0.3)' }}>
      <div className="flex flex-col md:flex-row justify-between items-center px-4 max-w-[1200px] mx-auto gap-4">
        <Image src="/assets/falcao/logo.png" alt="Falcão Mudanças" width={48} height={48} unoptimized className="h-12 w-auto" />
        <div className="flex gap-6">
          <Link href="/terms" className="text-xs font-semibold hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Termos</Link>
          <Link href="/privacy" className="text-xs font-semibold hover:opacity-80 transition-colors" style={{ color: c.onSurfaceVariant }}>Privacidade</Link>
        </div>
        <p className="text-xs" style={{ color: c.onSurfaceVariant }}>© {new Date().getFullYear()} Falcão Mudanças</p>
      </div>
    </footer>
  </div>
)
