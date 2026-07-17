import React from 'react'
import Link from 'next/link'
import { c } from '../config'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'solid' | 'whatsapp'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  href?: string
  disabled?: boolean
  className?: string
  onClick?: () => void
}

const variants = {
  primary: { bg: c.actionYellow, text: c.actionText, border: 'none', shadow: true, trailingArrow: true },
  outline: { bg: 'transparent', text: c.primary, border: c.primary, shadow: false, trailingArrow: false },
  solid: { bg: c.primary, text: c.onPrimary, border: 'none', shadow: false, trailingArrow: false },
  whatsapp: { bg: c.whatsappGreen, text: '#fff', border: 'none', shadow: true, trailingArrow: false },
} as const

const sizes = { sm: 'px-4 py-2 text-xs', md: 'px-6 py-3 text-sm', lg: 'px-10 py-4 text-sm' } as const

const Content = ({ children, icon, trailingArrow }: { children: React.ReactNode; icon?: React.ReactNode; trailingArrow?: boolean }) => (
  <>
    {icon}
    {children}
    {trailingArrow && <span className="text-lg">→</span>}
  </>
)

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'lg', icon, href, disabled, className = '', onClick }) => {
  const v = variants[variant]
  const s = sizes[size]
  const rounded = variant === 'whatsapp' ? 'rounded-full' : 'rounded-lg'

  const cls = `inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-wide hover:opacity-90 transition-all cursor-pointer ${s} ${rounded} disabled:opacity-50 disabled:cursor-not-allowed ${v.shadow ? 'shadow-lg' : ''} ${v.border !== 'none' ? 'border' : ''} ${className}`.trim()
  const style = { backgroundColor: v.bg, color: v.text, borderColor: v.border !== 'none' ? v.border : undefined }

  const content = <Content icon={icon} trailingArrow={v.trailingArrow}>{children}</Content>

  if (href) {
    return <Link href={href} className={cls} style={style}>{content}</Link>
  }

  return <button type="button" onClick={onClick} disabled={disabled} className={cls} style={style}>{content}</button>
}
