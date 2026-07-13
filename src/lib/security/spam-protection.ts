/**
 * Anti-spam abstraction.
 * Default implementation uses honeypot field + simple heuristics.
 * Interface designed for CAPTCHA provider swap-in later.
 */

export interface SpamCheckInput {
  honeypot?: string
  submissionSpeed?: number // milliseconds to fill the form
  urlCount?: number // number of URLs in the submission text
}

export interface SpamCheckResult {
  isSpam: boolean
  reason?: string
}

/**
 * Check if a submission is likely spam.
 *
 * Heuristics:
 * - Honeypot field filled (hidden field that bots fill)
 * - Submission too fast (< 3 seconds)
 * - Excessive URLs in message
 */
export const checkSpam = (input: SpamCheckInput): SpamCheckResult => {
  // Honeypot — bots fill hidden fields
  if (input.honeypot && input.honeypot.length > 0) {
    return { isSpam: true, reason: 'honeypot' }
  }

  // Too fast — human takes at least 3 seconds
  if (input.submissionSpeed && input.submissionSpeed < 3000) {
    return { isSpam: true, reason: 'too_fast' }
  }

  // URL count — more than 3 URLs is suspicious
  if (input.urlCount && input.urlCount > 3) {
    return { isSpam: true, reason: 'excessive_urls' }
  }

  return { isSpam: false }
}

/**
 * Generate a unique honeypot field name.
 * The field is hidden from humans via CSS but visible to bots.
 */
export const generateHoneypotField = (): { name: string; value: string } => {
  return {
    name: `hp_${Date.now().toString(36)}`,
    value: '',
  }
}
