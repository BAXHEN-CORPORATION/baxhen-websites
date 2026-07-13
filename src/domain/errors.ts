/**
 * Application error classes for expected failure conditions.
 * Each has a statusCode and a publicMessage safe to show to end users.
 */

export class SiteNotFoundError extends Error {
  public readonly statusCode = 404
  public readonly publicMessage = 'Site not found'

  constructor(hostname?: string) {
    super(hostname ? `No active site found for hostname: ${hostname}` : 'Site not found')
    this.name = 'SiteNotFoundError'
  }
}

export class SiteSuspendedError extends Error {
  public readonly statusCode = 503
  public readonly publicMessage = 'Site temporarily unavailable'

  constructor(siteSlug?: string) {
    super(siteSlug ? `Site "${siteSlug}" is suspended` : 'Site is suspended')
    this.name = 'SiteSuspendedError'
  }
}

export class PageNotFoundError extends Error {
  public readonly statusCode = 404
  public readonly publicMessage = 'Page not found'

  constructor(path?: string) {
    super(path ? `No published page found for path: ${path}` : 'Page not found')
    this.name = 'PageNotFoundError'
  }
}

export class UnsupportedLocaleError extends Error {
  public readonly statusCode = 404
  public readonly publicMessage = 'Language not available'

  constructor(locale?: string) {
    super(locale ? `Locale "${locale}" is not enabled for this site` : 'Locale not supported')
    this.name = 'UnsupportedLocaleError'
  }
}

export class InvalidFormSubmissionError extends Error {
  public readonly statusCode = 422
  public readonly publicMessage = 'Invalid form submission'

  constructor(details?: string) {
    super(details ? `Invalid form submission: ${details}` : 'Invalid form submission')
    this.name = 'InvalidFormSubmissionError'
  }
}

export class UnauthorizedTenantAccessError extends Error {
  public readonly statusCode = 403
  public readonly publicMessage = 'Access denied'

  constructor(tenantId?: string) {
    super(tenantId ? `Unauthorized access to tenant: ${tenantId}` : 'Unauthorized tenant access')
    this.name = 'UnauthorizedTenantAccessError'
  }
}
