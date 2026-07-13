import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { submitLeadForm } from '@/services/form-submission.service'
import { InvalidFormSubmissionError } from '@/domain/errors'
import { checkRateLimit } from '@/lib/security/rate-limit'
import { checkSpam } from '@/lib/security/spam-protection'
import type { Locale } from '@/domain/shared/types'

/**
 * POST handler for form submissions.
 * Validates, checks spam, rate-limits, and stores the submission.
 * Returns safe success/error responses — never internal details.
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting per IP
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    const rateLimit = checkRateLimit(`form-submit:${ip}`, 5, 60000)
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: 'Too many submissions. Please try again later.' },
        { status: 429 },
      )
    }

    const body = await request.json()

    // Extract form data
    const {
      formId,
      tenantId,
      siteId,
      data,
      sourceURL,
      locale,
      utmSource,
      utmMedium,
      utmCampaign,
      consent,
      honeypot,
      submissionSpeed,
    } = body

    // Validate required fields
    if (!formId || !tenantId || !siteId) {
      return NextResponse.json(
        { success: false, message: 'Invalid form configuration.' },
        { status: 422 },
      )
    }

    // Anti-spam check
    const spamResult = checkSpam({
      honeypot,
      submissionSpeed,
      urlCount: countUrls(data),
    })

    if (spamResult.isSpam) {
      // Silently succeed to not reveal spam detection
      return NextResponse.json({ success: true, message: 'Form submitted successfully.' })
    }

    // Process submission
    const result = await submitLeadForm({
      formId,
      tenantId,
      siteId,
      data: data || {},
      sourceURL,
      locale: (locale as Locale) || 'pt',
      utmSource,
      utmMedium,
      utmCampaign,
      consent,
    })

    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 422 },
      )
    }

    return NextResponse.json({ success: true, message: result.message })
  } catch (error) {
    if (error instanceof InvalidFormSubmissionError) {
      return NextResponse.json(
        { success: false, message: error.publicMessage },
        { status: error.statusCode },
      )
    }

    console.error('[Form Submit] Unexpected error:', error instanceof Error ? error.message : 'Unknown')
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again.' },
      { status: 500 },
    )
  }
}

function countUrls(data: Record<string, unknown> | undefined): number {
  if (!data) return 0
  const text = JSON.stringify(data)
  const urlMatches = text.match(/https?:\/\//g)
  return urlMatches ? urlMatches.length : 0
}
