import React from 'react'
import NextImage from 'next/image'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export const Image: React.FC<ImageProps> = ({ src, alt, width, height, className = '', priority = false, fill = false }) => {
  if (!src) return null

  if (fill) {
    return <NextImage src={src} alt={alt} fill className={`object-cover ${className}`} priority={priority} />
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`rounded-[var(--border-radius,0.5rem)] ${className}`}
      priority={priority}
    />
  )
}
