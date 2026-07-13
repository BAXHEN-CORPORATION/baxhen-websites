import type { CollectionConfig } from 'payload'
import { canAccessTenant } from '@/access/canAccessTenant'
import { revalidateSite } from '@/hooks/revalidateSite'

export const Sites: CollectionConfig = {
  slug: 'sites',
  admin: {
    useAsTitle: 'name',
    group: 'Platform',
    defaultColumns: ['name', 'slug', 'siteType', 'status', 'tenant'],
  },
  access: {
    create: canAccessTenant(),
    read: canAccessTenant(),
    update: canAccessTenant(),
    delete: canAccessTenant(),
  },
  hooks: {
    afterChange: [revalidateSite],
  },
  fields: [
    {
      name: 'tenant',
      type: 'relationship',
      relationTo: 'tenants',
      required: true,
      admin: {
        description: 'The tenant that owns this site',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Site display name',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'URL-friendly identifier (unique within tenant)',
      },
    },
    {
      name: 'siteType',
      type: 'select',
      required: true,
      defaultValue: 'business-presence',
      options: [
        { label: 'Business Presence', value: 'business-presence' },
        { label: 'Lead Generation', value: 'lead-generation' },
        { label: 'Combined', value: 'combined' },
        { label: 'Custom', value: 'custom' },
      ],
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Preview', value: 'preview' },
        { label: 'Approved', value: 'approved' },
        { label: 'Published', value: 'published' },
        { label: 'Suspended', value: 'suspended' },
        { label: 'Archived', value: 'archived' },
      ],
    },
    {
      name: 'template',
      type: 'select',
      required: true,
      defaultValue: 'business-presence',
      options: [
        { label: 'Business Presence', value: 'business-presence' },
        { label: 'Lead Generation', value: 'lead-generation' },
        { label: 'Legal Page', value: 'legal-page' },
        { label: 'Contact Page', value: 'contact-page' },
      ],
    },
    {
      name: 'defaultLocale',
      type: 'select',
      required: true,
      defaultValue: 'pt',
      options: [
        { label: 'Português', value: 'pt' },
        { label: 'English', value: 'en' },
      ],
    },
    {
      name: 'enabledLocales',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['pt'],
      options: [
        { label: 'Português', value: 'pt' },
        { label: 'English', value: 'en' },
      ],
    },
    {
      name: 'primaryDomain',
      type: 'text',
      admin: {
        description: 'Primary production domain (e.g., mybusiness.pt)',
      },
    },
    {
      name: 'previewDomain',
      type: 'text',
      admin: {
        description: 'Preview subdomain for draft content',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Theme',
          fields: [
            {
              name: 'theme',
              type: 'json',
              admin: {
                description: 'Theme overrides (colors, fonts, border radius, etc.)',
              },
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contactConfiguration',
              type: 'json',
              admin: {
                description: 'Contact info: email, phone, whatsapp, address',
              },
            },
          ],
        },
        {
          label: 'Social',
          fields: [
            {
              name: 'socialLinks',
              type: 'json',
              admin: {
                description: 'Array of {platform, url} objects',
              },
            },
          ],
        },
        {
          label: 'Analytics',
          fields: [
            {
              name: 'analyticsConfiguration',
              type: 'json',
              admin: {
                description: 'Analytics: provider, measurement ID',
              },
            },
          ],
        },
        {
          label: 'SEO',
          fields: [
            {
              name: 'seoDefaults',
              type: 'json',
              admin: {
                description: 'Default SEO: title template, description, social image',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'launchDate',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
        description: 'When the site was/will be launched',
      },
    },
  ],
}
