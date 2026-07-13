import React from 'react'
import type { LucideIcon } from 'lucide-react'

interface IconProps {
  icon: LucideIcon
  size?: number
  className?: string
}

export const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, className = '' }) => {
  return <IconComponent size={size} className={className} />
}
