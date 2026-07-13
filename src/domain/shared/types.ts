/**
 * Shared domain types, enums, and constants.
 * Used across repositories, services, and view-models.
 */

// ── Locales ───────────────────────────────────────────────────────

export type Locale = 'pt' | 'en'

export const DEFAULT_LOCALE: Locale = 'pt'

export const SUPPORTED_LOCALES: Locale[] = ['pt', 'en']

// ── Site ──────────────────────────────────────────────────────────

export type SiteType = 'business-presence' | 'lead-generation' | 'combined' | 'custom'

export type SiteStatus = 'draft' | 'preview' | 'approved' | 'published' | 'suspended' | 'archived'

// ── Tenant ────────────────────────────────────────────────────────

export type TenantStatus = 'lead' | 'onboarding' | 'active' | 'suspended' | 'archived'

// ── User roles ────────────────────────────────────────────────────

export type UserRole =
  | 'super-admin'
  | 'baxhen-admin'
  | 'baxhen-editor'
  | 'client-admin'
  | 'client-editor'
  | 'client-viewer'

// ── Domain ────────────────────────────────────────────────────────

export type DomainType = 'baxhen-preview' | 'baxhen-subdomain' | 'custom-domain'

export type DomainStatus = 'pending' | 'verified' | 'active' | 'failed' | 'disabled'

// ── Page ──────────────────────────────────────────────────────────

export type PageType = 'standard' | 'legal' | 'landing' | 'custom'

export type PageStatus = 'draft' | 'published' | 'archived'

// ── Forms ─────────────────────────────────────────────────────────

export type SubmissionStatus = 'new' | 'contacted' | 'qualified' | 'converted' | 'spam' | 'archived'

// ── Contract ──────────────────────────────────────────────────────

export type ContractStatus = 'draft' | 'sent' | 'signed' | 'active' | 'expired' | 'cancelled'

// ── Media ─────────────────────────────────────────────────────────

export type MediaUsage = 'public-website' | 'private-document' | 'platform-asset'
