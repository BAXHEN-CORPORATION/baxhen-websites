import React from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

type TextVariant = 'lead' | 'body' | 'small' | 'label'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  variant?: TextVariant
}

export const Text: React.FC<TextProps> = ({ children, variant = 'body', className = '', ...props }) => {
  const variants: Record<TextVariant, string> = {
    lead: 'text-lg md:text-xl opacity-90',
    body: 'text-base opacity-80',
    small: 'text-sm opacity-70',
    label: 'text-xs font-semibold tracking-widest uppercase opacity-60',
  }

  return (
    <p className={`${variants[variant]} ${className}`} style={{ fontFamily: 'var(--font-body, Hanken Grotesk, sans-serif)' }} {...props}>
      {children}
    </p>
  )
}
