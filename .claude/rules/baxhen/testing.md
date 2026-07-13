# Baxhen Testing Standards

## Test Framework

- **Playwright** (`@playwright/test`) for all E2E tests
- **Vitest** for unit and integration tests
- Next.js 16 testmode via `next/experimental/testmode/playwright`
- Tests live in `tests/e2e/`, `tests/int/`, `tests/unit/`

## Test Organization

```
tests/
  unit/                           # Pure function/class tests — no DB, no network
    env-validation.spec.ts
    domain-errors.spec.ts
    hostname-normalization.spec.ts
    view-models/
    views/
  int/                            # Integration tests — real DB, real Payload Local API
    tenant-isolation.spec.ts
    access-control.spec.ts
    site.repository.spec.ts
    form-submission-ownership.spec.ts
  e2e/                            # End-to-end browser tests — real app
    admin.e2e.spec.ts
    hostname-resolution.e2e.spec.ts
    demo-tourism-site.e2e.spec.ts
    tenant-isolation.e2e.spec.ts
  helpers/                        # Shared test utilities
    login.ts
    seedUser.ts
```

## Unit Test Rules

1. Test hostname normalization, locale resolution, URL creation
2. Test ViewModel transformations — input Payload shape → output ViewModel shape
3. Test theme token creation, form normalization, SEO metadata creation
4. Views must be testable without creating Payload request objects
5. Use mocked dependencies, never real database

## Integration Test Rules

1. Use real Payload Local API with a test database
2. Test site resolution by hostname, published page retrieval
3. Test draft content exclusion, tenant isolation
4. Test unauthorized contract access
5. Test localized page retrieval, form submission ownership
6. Test suspended-site behavior
7. Each test must be hermetic — seed what you need, clean up after

## Multi-Tenant Test Patterns

### Tenant Isolation (Integration)

```typescript
test('tenant A cannot access tenant B pages', async () => {
  // Seed tenant A with pages, tenant B with different pages
  // Query as tenant A — must only see tenant A pages
  // Query as tenant B — must only see tenant B pages
})
```

### Hostname Resolution (E2E)

```typescript
test('demo.localhost resolves to demo tenant', async ({ page }) => {
  await page.goto('http://demo.localhost:3000')
  await expect(page.locator('h1')).toContainText('Demo Tenant')
})
```

### Draft Protection (Integration)

```typescript
test('draft pages are not returned by public queries', async () => {
  // Create draft page, query with public access
  // Must return null or empty
})
```

## E2E Test Rules

1. Every new section MUST have at least one rendering E2E spec
2. Critical journeys: admin login, content creation, site rendering, language switching, form submission
3. Use Page Object Models for admin flows — no raw `page.locator()` in specs
4. Always mock external services (email, CAPTCHA) in E2E
5. `test.describe` groups related tests, `test.beforeEach` sets up page state
6. Each `test()` is self-contained — no state leakage between tests
7. Use `test.fixme()` for known-flaky tests

## CI Configuration

- `reuseExistingServer: !process.env.CI`
- Retries: 1 local, 2 CI
- Trace on first retry, screenshot on failure, video on failure

## Required Test Coverage

### Unit Tests
- Hostname normalization
- Locale resolution
- Site-type selection
- URL creation
- ViewModel transformations
- Theme token creation
- Form normalization
- SEO metadata creation

### Integration Tests
- Site resolution by hostname
- Published page retrieval
- Draft content exclusion
- Tenant isolation (cross-tenant access prevention)
- Unauthorized contract access
- Localized page retrieval
- Form submission ownership
- Suspended-site behavior

### E2E — Critical Journeys
1. Admin login
2. Demo content verification
3. PT business website renders
4. EN version renders
5. Language switch works
6. Lead-generation landing page renders
7. Contact form submits successfully
8. Unknown hostname → site-not-found
9. Preview content not visible on public URL
10. Client A cannot access Client B content via hostname
