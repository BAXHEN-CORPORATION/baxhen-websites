/**
 * Email notification abstraction.
 * Default: no-op (logs to console).
 * Interface ready for provider integration (Resend, SendGrid, etc.).
 */

export interface EmailNotificationInput {
  to: string
  subject: string
  body: string
  replyTo?: string
}

export type EmailProvider = (input: EmailNotificationInput) => Promise<void>

/**
 * Default no-op email provider.
 * Logs to console in development. Replace with real provider in production.
 */
const noopProvider: EmailProvider = async (input) => {
  console.log('[Email Notification]', {
    to: input.to,
    subject: input.subject,
    bodyPreview: input.body.slice(0, 200),
  })
}

let currentProvider: EmailProvider = noopProvider

/**
 * Set the active email provider (e.g., at app startup).
 */
export const setEmailProvider = (provider: EmailProvider): void => {
  currentProvider = provider
}

/**
 * Send an email notification via the configured provider.
 */
export const sendEmailNotification = async (input: EmailNotificationInput): Promise<void> => {
  try {
    await currentProvider(input)
  } catch (error) {
    console.error('[Email Notification] Failed to send:', error)
    // Never throw — email failure should not block the user flow
  }
}
