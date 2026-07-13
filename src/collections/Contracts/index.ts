import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const Contracts: CollectionConfig = {
  slug: 'contracts',
  admin: {
    useAsTitle: 'id',
    group: 'Commercial',
    defaultColumns: ['client', 'servicePlan', 'status', 'startDate'],
  },
  access: {
    create: isSuperAdmin,
    read: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  fields: [
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
    },
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
      admin: {
        description: 'Optional: specific site this contract covers',
      },
    },
    {
      name: 'servicePlan',
      type: 'relationship',
      relationTo: 'service-plans',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Sent', value: 'sent' },
        { label: 'Signed', value: 'signed' },
        { label: 'Active', value: 'active' },
        { label: 'Expired', value: 'expired' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
    },
    {
      name: 'startDate',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'renewalDate',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'implementationPrice',
      type: 'number',
      admin: {
        description: 'One-time implementation fee',
      },
    },
    {
      name: 'annualInfrastructurePrice',
      type: 'number',
      admin: {
        description: 'Annual infrastructure fee',
      },
    },
    {
      name: 'currency',
      type: 'select',
      defaultValue: 'EUR',
      options: [
        { label: 'EUR (€)', value: 'EUR' },
        { label: 'USD ($)', value: 'USD' },
      ],
    },
    {
      name: 'signedAt',
      type: 'date',
      admin: {
        date: { pickerAppearance: 'dayOnly' },
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
    },
  ],
}
