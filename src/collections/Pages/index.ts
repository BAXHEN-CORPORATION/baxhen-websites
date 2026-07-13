import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

// Minimal stub — pages are now code-defined. This collection exists
// only to keep the DB schema consistent for payload_locked_documents.
// Do not create pages through the admin panel.
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: { hidden: true },
  access: { create: authenticated, read: authenticatedOrPublished, update: authenticated, delete: authenticated },
  fields: [
    { name: 'tenant', type: 'relationship', relationTo: 'tenants' },
    { name: 'site', type: 'relationship', relationTo: 'sites' },
    { name: 'title', type: 'text' },
    { name: 'slug', type: 'text' },
    { name: 'status', type: 'select', options: ['draft', 'published'], defaultValue: 'draft' },
  ],
}
