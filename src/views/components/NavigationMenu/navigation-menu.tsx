import React from 'react'
import { Link } from '@/views/primitives/Link'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'

interface NavigationMenuProps {
  items: NavigationItemViewModel[]
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items }) => {
  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 text-sm font-medium rounded-[var(--border-radius,0.5rem)] transition-colors ${
            item.isActive
              ? 'text-[var(--color-primary,#3cd7ff)]'
              : 'text-[var(--color-text,#dfe2eb)] hover:bg-[var(--color-surface,#181c22)]'
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
