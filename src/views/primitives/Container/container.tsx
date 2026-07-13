import React from 'react'
import type { ContainerProps } from './container.types'

export const Container: React.FC<ContainerProps> = ({ children, className = '', maxWidth }) => {
  return (
    <div
      className={`mx-auto px-4 md:px-6 ${className}`}
      style={{ maxWidth: maxWidth || 'var(--content-width, 1200px)' }}
    >
      {children}
    </div>
  )
}
