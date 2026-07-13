import type { CollectionConfig } from 'payload'
import { canAccessTenant } from '@/access/canAccessTenant'
import { normalizeDomain } from '@/hooks/normalizeDomain'
import { protectTenantRelationship } from '@/hooks/protectTenantRelationship'

export const Domains: CollectionConfig = {
  slug: 'domains',
  admin: {
    useAsTitle: 'hostname',
    group: 'Platform',
    defaultColumns: ['hostname', 'type', 'status', 'site', 'isPrimary'],
  },
  access: {
    create: canAccessTenant(),
    read: canAccessTenant(),
    update: canAccessTenant(),
    delete: canAccessTenant(),
  },
  hooks: {
    beforeValidate: [normalizeDomain],
    beforeChange: [protectTenantRelationship('tenant')],
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: {
        description: 'The tenant that owns this domain',
      },
    },
    {
      name: 'site',
      type: 'relationship',
      relationTo: 'sites',
      required: true,
      admin: {
        description: 'The site this domain points to',
      },
    },
    {
      name: 'hostname',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Domain name (e.g., mybusiness.pt). Protocol and path are stripped automatically.',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'baxhen-preview',
      options: [
        { label: 'Baxhen Preview', value: 'baxhen-preview' },
        { label: 'Baxhen Subdomain', value: 'baxhen-subdomain' },
        { label: 'Custom Domain', value: 'custom-domain' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Verified', value: 'verified' },
        { label: 'Active', value: 'active' },
        { label: 'Failed', value: 'failed' },
        { label: 'Disabled', value: 'disabled' },
      ],
    },
    {
      name: 'isPrimary',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Is this the primary domain? Other domains redirect to the primary.',
      },
    },
    {
      name: 'redirectToPrimary',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Redirect this domain to the primary domain?',
      },
    },
    {
      name: 'verifiedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'When the domain was verified',
      },
    },
  ],
}
