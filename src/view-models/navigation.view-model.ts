import type { NavigationItem } from '@/repositories/navigation.repository'

export interface NavigationItemViewModel {
  label: string
  href: string
  isActive: boolean
}

/**
 * Transform navigation items into a ViewModel.
 * Adds active-state awareness for the current path.
 */
export const toNavigationViewModel = (
  items: NavigationItem[],
  currentPath: string = '',
): NavigationItemViewModel[] => {
  return items.map((item) => ({
    label: item.label,
    href: item.href,
    isActive: currentPath === item.slug || currentPath.startsWith(item.slug + '/'),
  }))
}
