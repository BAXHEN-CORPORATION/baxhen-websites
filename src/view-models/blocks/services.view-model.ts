export interface ServiceItem {
  title: string
  description: string
  icon?: string
}

export interface ServicesSectionViewModel {
  blockType: 'services'
  heading: string
  subtext?: string
  services: ServiceItem[]
}

export const toServicesViewModel = (
  block: Record<string, unknown>,
): ServicesSectionViewModel => {
  const items = (block.services || block.items || []) as Array<Record<string, unknown>>

  return {
    blockType: 'services',
    heading: (block.heading as string) || 'Our Services',
    subtext: (block.subtext as string) || undefined,
    services: items.map((item) => ({
      title: (item.title as string) || '',
      description: (item.description as string) || '',
      icon: (item.icon as string) || undefined,
    })),
  }
}
