import type { CollectionConfig } from 'payload'
import { canAccessTenant } from '@/access/canAccessTenant'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'id',
    group: 'Content',
    defaultColumns: ['form', 'status', 'locale', 'submittedAt'],
  },
  access: {
    create: () => true, // Public can submit forms
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
      admin: {
        description: 'Tenant that owns the form',
      },
    },
    {
      name: 'site',
      type: 'relationship',
      relationTo: 'sites',
      required: true,
      admin: {
        description: 'Site the form belongs to',
      },
    },
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'submittedData',
      type: 'json',
      required: true,
      admin: {
        description: 'The form field values submitted by the user',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
    {
      name: 'sourceURL',
      type: 'text',
      admin: {
        description: 'URL of the page where the form was submitted',
      },
    },
    {
      name: 'locale',
      type: 'select',
      required: true,
      defaultValue: 'pt',
      options: [
        { label: 'Português', value: 'pt' },
        { label: 'English', value: 'en' },
      ],
    },
    {
      name: 'utmSource',
      type: 'text',
      admin: {
        description: 'UTM source parameter',
      },
    },
    {
      name: 'utmMedium',
      type: 'text',
      admin: {
        description: 'UTM medium parameter',
      },
    },
    {
      name: 'utmCampaign',
      type: 'text',
      admin: {
        description: 'UTM campaign parameter',
      },
    },
    {
      name: 'consent',
      type: 'json',
      admin: {
        description: 'Consent records: marketing, privacyPolicy, termsOfService',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Contacted', value: 'contacted' },
        { label: 'Qualified', value: 'qualified' },
        { label: 'Converted', value: 'converted' },
        { label: 'Spam', value: 'spam' },
        { label: 'Archived', value: 'archived' },
      ],
    },
  ],
}
