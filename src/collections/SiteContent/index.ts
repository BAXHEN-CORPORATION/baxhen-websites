import type { CollectionConfig } from 'payload'
import { canAccessTenant } from '@/access/canAccessTenant'

export const SiteContent: CollectionConfig = {
  slug: 'site-content',
  admin: { useAsTitle: 'id', group: 'Content', defaultColumns: ['site', 'locale'] },
  access: { create: canAccessTenant(), read: () => true, update: canAccessTenant(), delete: canAccessTenant() },
  fields: [
    { name: 'tenant', type: 'relationship', relationTo: 'tenants', required: true },
    { name: 'site', type: 'relationship', relationTo: 'sites', required: true },
    { name: 'locale', type: 'select', options: ['pt', 'en'], required: true },
    {
      name: 'content', type: 'json',
      admin: { description: 'Flat key-value store for all site text, labels, and image URLs. Structure defined by the site code.' },
    },
  ],
}
