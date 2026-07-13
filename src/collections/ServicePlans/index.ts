import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const ServicePlans: CollectionConfig = {
  slug: 'service-plans',
  admin: {
    useAsTitle: 'name',
    group: 'Commercial',
    defaultColumns: ['name', 'code', 'price', 'billingInterval', 'active'],
  },
  access: {
    create: isSuperAdmin,
    read: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Internal code (e.g., INFRA_ANNUAL_BASIC)',
      },
    },
    {
      name: 'billingInterval',
      type: 'select',
      required: true,
      defaultValue: 'annual',
      options: [
        { label: 'Monthly', value: 'monthly' },
        { label: 'Annual', value: 'annual' },
        { label: 'One-time', value: 'one-time' },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      admin: {
        description: 'Price in the configured currency',
      },
    },
    {
      name: 'currency',
      type: 'select',
      required: true,
      defaultValue: 'EUR',
      options: [
        { label: 'EUR (€)', value: 'EUR' },
        { label: 'USD ($)', value: 'USD' },
        { label: 'GBP (£)', value: 'GBP' },
      ],
    },
    {
      name: 'includedFeatures',
      type: 'json',
      admin: {
        description: 'List of features included in this plan',
      },
    },
    {
      name: 'limits',
      type: 'json',
      admin: {
        description: 'Plan limits: sites, pages, storage, etc.',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
