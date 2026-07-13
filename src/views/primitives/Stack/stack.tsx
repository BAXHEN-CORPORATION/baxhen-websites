import React from 'react'
import type { ReactNode, HTMLAttributes } from 'react'

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  gap?: string
}

export const Stack: React.FC<StackProps> = ({ children, gap = '1rem', className = '', ...props }) => {
  return (
    <div className={`flex flex-col ${className}`} style={{ gap }} {...props}>
      {children}
    </div>
  )
}
