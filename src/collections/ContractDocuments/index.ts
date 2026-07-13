import type { CollectionConfig } from 'payload'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const ContractDocuments: CollectionConfig = {
  slug: 'contract-documents',
  admin: {
    useAsTitle: 'id',
    group: 'Commercial',
    defaultColumns: ['client', 'contract', 'documentType', 'uploadedAt'],
  },
  access: {
    create: isSuperAdmin,
    read: isSuperAdmin,
    update: isSuperAdmin,
    delete: isSuperAdmin,
  },
  upload: {
    staticDir: 'private/contract-documents',
    mimeTypes: ['application/pdf', 'image/*', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
  fields: [
    {
      name: 'client',
      type: 'relationship',
      relationTo: 'clients',
      required: true,
    },
    {
      name: 'contract',
      type: 'relationship',
      relationTo: 'contracts',
      required: true,
    },
    {
      name: 'documentType',
      type: 'select',
      required: true,
      options: [
        { label: 'Contract', value: 'contract' },
        { label: 'Addendum', value: 'addendum' },
        { label: 'NDA', value: 'nda' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'uploadedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        date: { pickerAppearance: 'dayAndTime' },
      },
    },
  ],
}
