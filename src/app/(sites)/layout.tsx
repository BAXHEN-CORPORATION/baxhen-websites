import React from 'react'
import { AdminBar } from '@/components/AdminBar'
import { Providers } from '@/providers'
import { draftMode } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function SitesLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `(function(){var d=document.documentElement;var t='light';var p=localStorage.getItem('payload-theme');if(p==='light'||p==='dark')t=p;else{var m=window.matchMedia('(prefers-color-scheme:dark)');if(m.matches)t='dark'}d.setAttribute('data-theme',t)})()` }} />
      <Providers>
        <AdminBar adminBarProps={{ preview: isEnabled }} />
        {children}
      </Providers>
    </>
  )
}
