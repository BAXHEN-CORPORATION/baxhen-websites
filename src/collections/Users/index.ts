import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: authenticated,
    create: isSuperAdmin,
    delete: isSuperAdmin,
    read: authenticated,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'email', 'roles'],
    useAsTitle: 'name',
    group: 'Platform',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['client-viewer'],
      options: [
        { label: 'Super Admin', value: 'super-admin' },
        { label: 'Baxhen Admin', value: 'baxhen-admin' },
        { label: 'Baxhen Editor', value: 'baxhen-editor' },
        { label: 'Client Admin', value: 'client-admin' },
        { label: 'Client Editor', value: 'client-editor' },
        { label: 'Client Viewer', value: 'client-viewer' },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
  timestamps: true,
}
