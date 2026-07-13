import React from 'react'
import type { HeadingProps } from './heading.types'

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 'h2',
  size = 'lg',
  className = '',
  ...props
}) => {
  const Tag = level
  const sizes = {
    display: 'text-5xl md:text-6xl font-light tracking-tight',
    lg: 'text-3xl md:text-4xl font-light',
    md: 'text-xl md:text-2xl font-normal',
    sm: 'text-lg font-medium',
  }

  return (
    <Tag
      className={`${sizes[size]} ${className}`}
      style={{ fontFamily: 'var(--font-heading, Literata, serif)' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
