import React from 'react'
import type { ButtonProps } from './button.types'

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'text-[var(--color-on-primary,#001f27)] bg-[var(--color-primary,#3cd7ff)] hover:opacity-90',
    secondary: 'text-[var(--color-text,#dfe2eb)] bg-[var(--color-surface,#181c22)] border border-[var(--color-outline,#859398)] hover:bg-opacity-80',
    outline: 'text-[var(--color-primary,#3cd7ff)] border border-[var(--color-primary,#3cd7ff)] bg-transparent hover:bg-[var(--color-primary,#3cd7ff)] hover:text-[var(--color-on-primary,#001f27)]',
    ghost: 'text-[var(--color-text,#dfe2eb)] bg-transparent hover:bg-[var(--color-surface,#181c22)]',
  }
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-[var(--border-radius,0.5rem)]',
    md: 'px-6 py-2.5 text-base rounded-[var(--border-radius,0.5rem)]',
    lg: 'px-8 py-3.5 text-lg rounded-[var(--border-radius,0.5rem)]',
  }

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ minHeight: '44px', minWidth: '44px' }}
      {...props}
    >
      {children}
    </button>
  )
}
