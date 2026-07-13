import React from 'react'
import type { ReactNode, HTMLAttributes } from 'react'

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  cols?: number
  gap?: string
}

export const Grid: React.FC<GridProps> = ({ children, cols = 2, gap = '1.5rem', className = '', ...props }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${cols} ${className}`}
      style={{ gap }}
      {...props}
    >
      {children}
    </div>
  )
}
