import React from 'react'
import { Link } from '@/views/primitives/Link'

interface LogoProps {
  name: string
  src?: string
  href?: string
}

export const Logo: React.FC<LogoProps> = ({ name, src, href = '/' }) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      {src ? (
        <img src={src} alt={name} className="h-10 w-auto" />
      ) : (
        <span
          className="text-xl font-semibold tracking-tight"
          style={{ fontFamily: 'var(--font-heading, Literata, serif)', color: 'var(--color-heading, var(--color-text, #dfe2eb))' }}
        >
          {name}
        </span>
      )}
    </Link>
  )
}
