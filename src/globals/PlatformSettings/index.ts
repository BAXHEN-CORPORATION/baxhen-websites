import type { GlobalConfig } from 'payload'
import { isSuperAdmin } from '@/access/isSuperAdmin'

export const PlatformSettings: GlobalConfig = {
  slug: 'platform-settings',
  admin: {
    group: 'Platform',
  },
  access: {
    read: () => true,
    update: isSuperAdmin,
  },
  fields: [
    {
      name: 'platformName',
      type: 'text',
      defaultValue: 'Baxhen',
      required: true,
    },
    {
      name: 'supportEmail',
      type: 'email',
      defaultValue: 'hello@baxhen.pt',
    },
    {
      name: 'maintenanceMode',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'When enabled, all client sites show a maintenance page',
      },
    },
    {
      name: 'defaultTheme',
      type: 'json',
      admin: {
        description: 'Default theme applied to new sites (Void Conversationalist)',
      },
    },
  ],
}
