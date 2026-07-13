'use client'

import React from 'react'

/**
 * Global error boundary.
 * Catches unexpected errors and shows a generic message.
 * Never exposes stack traces to end users.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#10141a', color: '#dfe2eb' }}
    >
      <div className="text-center max-w-md px-4">
        <h1 className="text-2xl font-light mb-4">Something went wrong</h1>
        <p className="text-sm opacity-70 mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-6 py-2 rounded-md text-sm font-medium"
          style={{
            backgroundColor: '#3cd7ff',
            color: '#001f27',
          }}
        >
          Try again
        </button>
      </div>
    </div>
  )
}
