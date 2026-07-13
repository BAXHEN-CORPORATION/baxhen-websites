import React from 'react'

/**
 * Global 404 page.
 */
export default function NotFound() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#10141a', color: '#dfe2eb' }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">404</h1>
        <p className="text-lg opacity-70">Page not found</p>
      </div>
    </div>
  )
}
