import type { CollectionConfig } from 'payload'
import { canAccessTenant } from '@/access/canAccessTenant'

export const Deployments: CollectionConfig = {
  slug: 'deployments',
  admin: {
    useAsTitle: 'id',
    group: 'Platform',
    defaultColumns: ['tenant', 'site', 'status', 'deployedAt'],
  },
  access: {
    create: canAccessTenant(),
    read: canAccessTenant(),
    update: canAccessTenant(),
    delete: canAccessTenant(),
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
    },
    {
      name: 'site',
      type: 'relationship',
      relationTo: 'sites',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'deploying',
      options: [
        { label: 'Deploying', value: 'deploying' },
        { label: 'Deployed', value: 'deployed' },
        { label: 'Failed', value: 'failed' },
      ],
    },
    {
      name: 'deployedAt',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'commitHash',
      type: 'text',
    },
    {
      name: 'environment',
      type: 'select',
      defaultValue: 'production',
      options: [
        { label: 'Production', value: 'production' },
        { label: 'Preview', value: 'preview' },
      ],
    },
  ],
}
