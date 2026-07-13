import type { ReactNode, HTMLAttributes } from 'react'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'
export type HeadingSize = 'display' | 'lg' | 'md' | 'sm'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  level?: HeadingLevel
  size?: HeadingSize
}
