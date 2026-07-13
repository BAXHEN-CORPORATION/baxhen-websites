'use client'

import React, { useState } from 'react'
import { Link } from '@/views/primitives/Link'
import { Menu, X } from 'lucide-react'
import type { NavigationItemViewModel } from '@/view-models/navigation.view-model'

interface MobileNavigationProps {
  items: NavigationItemViewModel[]
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--color-background,#10141a)] border-b border-[var(--color-outline,#859398)] p-4">
          <nav className="flex flex-col gap-2">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 text-base rounded-[var(--border-radius,0.5rem)] ${
                  item.isActive
                    ? 'text-[var(--color-primary,#3cd7ff)] bg-[var(--color-surface,#181c22)]'
                    : 'text-[var(--color-text,#dfe2eb)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
