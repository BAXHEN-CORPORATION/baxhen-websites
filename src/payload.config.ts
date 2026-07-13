import { postgresAdapter } from '@payloadcms/db-postgres'
import { multiTenantPlugin } from '@payloadcms/plugin-multi-tenant'
import { s3Storage } from '@payloadcms/storage-s3'
import sharp from 'sharp'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

// Collections
import { Clients } from './collections/Clients'
import { Contracts } from './collections/Contracts'
import { ContractDocuments } from './collections/ContractDocuments'
import { Deployments } from './collections/Deployments'
import { Domains } from './collections/Domains'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { ServicePlans } from './collections/ServicePlans'
import { SiteContent } from './collections/SiteContent'
import { Sites } from './collections/Sites'
import { Tenants } from './collections/Tenants'
import { Users } from './collections/Users'

// Globals
import { Footer } from './globals/Footer/config'
import { Header } from './globals/Header/config'
import { PlatformSettings } from './globals/PlatformSettings'

// Plugins
import { plugins } from './plugins'

// Utilities
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// ── Supabase S3 Storage ────────────────────────────────────────────

const s3Enabled =
  process.env.S3_ENDPOINT &&
  process.env.S3_ACCESS_KEY_ID &&
  process.env.S3_SECRET_ACCESS_KEY &&
  process.env.S3_BUCKET

const s3Plugins = s3Enabled
  ? [
      s3Storage({
        bucket: process.env.S3_BUCKET!,
        config: {
          endpoint: process.env.S3_ENDPOINT,
          region: process.env.S3_REGION || 'auto',
          credentials: {
            accessKeyId: process.env.S3_ACCESS_KEY_ID!,
            secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
          },
          forcePathStyle: true, // Required for Supabase S3
        },
        collections: {
          media: {
            disableLocalStorage: false, // Keep local fallback in dev
            prefix: 'media',
          },
          'contract-documents': {
            disableLocalStorage: false,
            prefix: 'private/contract-documents',
          },
        },
        disableLocalStorage: false, // Keep local storage as fallback
        enabled: true,
      }),
    ]
  : []

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  collections: [
    Users,
    Tenants,
    Clients,
    Sites,
    Pages,
    Media,
    SiteContent,
    Domains,
    ServicePlans,
    Contracts,
    ContractDocuments,
    Deployments,
  ],
  cors: [getServerSideURL()].filter(Boolean),
  globals: [Header, Footer, PlatformSettings],
  localization: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    fallback: true,
  },
  plugins: [
    ...s3Plugins,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    multiTenantPlugin({
      collections: {
        sites: { customTenantField: true },
        pages: { customTenantField: true },
        'site-content': { customTenantField: true },
        media: { customTenantField: true },
        domains: { customTenantField: true, useTenantAccess: false },
        contracts: { customTenantField: true },
        'contract-documents': { customTenantField: true },
        deployments: { customTenantField: true },
      },
      tenantsSlug: 'tenants',
      userHasAccessToAllTenants: (user) => {
        if (!user) return false
        const roles = (user as unknown as Record<string, unknown>).roles as string[] | undefined
        return roles?.includes('super-admin') || roles?.includes('baxhen-admin') || false
      },
    }),
    ...plugins,
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true

        const secret = process.env.CRON_SECRET
        if (!secret) return false

        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${secret}`
      },
    },
    tasks: [],
  },
})
