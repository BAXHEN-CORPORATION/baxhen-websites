import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const Clients: CollectionConfig = {
  slug: 'clients',
  admin: {
    useAsTitle: 'displayName',
    group: 'Platform',
    defaultColumns: ['displayName', 'legalName', 'email', 'status'],
  },
  access: {
    create: isSuperAdmin,
    read: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  fields: [
    {
      name: 'legalName',
      type: 'text',
      required: true,
      admin: {
        description: 'Official registered company name',
      },
    },
    {
      name: 'displayName',
      type: 'text',
      required: true,
      admin: {
        description: 'How the client name appears in the admin panel',
      },
    },
    {
      name: 'primaryContact',
      type: 'text',
      admin: {
        description: 'Name of the primary contact person',
      },
    },
    {
      name: 'email',
      type: 'email',
      admin: {
        description: 'Primary contact email',
      },
    },
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Primary contact phone number',
      },
    },
    {
      name: 'billingAddress',
      type: 'textarea',
      admin: {
        description: 'Billing address (not publicly accessible)',
      },
    },
    {
      name: 'taxIdentifier',
      type: 'text',
      admin: {
        description: 'VAT / NIF / tax ID (not publicly accessible)',
      },
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: {
        description: 'Internal notes visible only to Baxhen staff',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'lead',
      options: [
        { label: 'Lead', value: 'lead' },
        { label: 'Onboarding', value: 'onboarding' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
      ],
    },
  ],
}
