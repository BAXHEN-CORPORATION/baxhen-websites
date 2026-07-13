import { describe, it, expect } from 'vitest'
import {
  SiteNotFoundError,
  SiteSuspendedError,
  PageNotFoundError,
  UnsupportedLocaleError,
  InvalidFormSubmissionError,
  UnauthorizedTenantAccessError,
} from '@/domain/errors'

describe('Domain Errors', () => {
  it('SiteNotFoundError should have statusCode 404', () => {
    const err = new SiteNotFoundError('example.com')
    expect(err.statusCode).toBe(404)
    expect(err.publicMessage).toBe('Site not found')
    expect(err.message).toContain('example.com')
    expect(err.name).toBe('SiteNotFoundError')
  })

  it('SiteSuspendedError should have statusCode 503', () => {
    const err = new SiteSuspendedError('my-site')
    expect(err.statusCode).toBe(503)
    expect(err.publicMessage).toBe('Site temporarily unavailable')
    expect(err.message).toContain('my-site')
  })

  it('PageNotFoundError should have statusCode 404', () => {
    const err = new PageNotFoundError('/about')
    expect(err.statusCode).toBe(404)
    expect(err.publicMessage).toBe('Page not found')
    expect(err.message).toContain('/about')
  })

  it('UnsupportedLocaleError should have statusCode 404', () => {
    const err = new UnsupportedLocaleError('fr')
    expect(err.statusCode).toBe(404)
    expect(err.publicMessage).toBe('Language not available')
    expect(err.message).toContain('fr')
  })

  it('InvalidFormSubmissionError should have statusCode 422', () => {
    const err = new InvalidFormSubmissionError('Missing required field: email')
    expect(err.statusCode).toBe(422)
    expect(err.publicMessage).toBe('Invalid form submission')
    expect(err.message).toContain('email')
  })

  it('UnauthorizedTenantAccessError should have statusCode 403', () => {
    const err = new UnauthorizedTenantAccessError('tenant-123')
    expect(err.statusCode).toBe(403)
    expect(err.publicMessage).toBe('Access denied')
    expect(err.message).toContain('tenant-123')
  })

  it('all errors should work without constructor args', () => {
    expect(new SiteNotFoundError().message).toBe('Site not found')
    expect(new SiteSuspendedError().message).toBe('Site is suspended')
    expect(new PageNotFoundError().message).toBe('Page not found')
    expect(new UnsupportedLocaleError().message).toBe('Locale not supported')
    expect(new InvalidFormSubmissionError().message).toBe('Invalid form submission')
    expect(new UnauthorizedTenantAccessError().message).toBe('Unauthorized tenant access')
  })
})
