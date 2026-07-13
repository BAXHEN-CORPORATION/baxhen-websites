import React from 'react'
import type { ReactNode, HTMLAttributes } from 'react'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode
  variant?: 'default' | 'primary' | 'outline'
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-[var(--color-surface,#181c22)] text-[var(--color-text,#dfe2eb)]',
    primary: 'bg-[var(--color-primary,#3cd7ff)] text-[var(--color-on-primary,#001f27)]',
    outline: 'border border-[var(--color-outline,#859398)] text-[var(--color-text,#dfe2eb)]',
  }

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
