import React, { Fragment } from 'react'
import type { SectionViewModel, BlockRendererProps } from './block-renderer.types'

/**
 * Typed block renderer.
 * Maps SectionViewModel discriminators to section components.
 * Only mapping logic — no transformation.
 *
 * Section components will be wired in Phase 6.
 */
export const BlockRenderer: React.FC<BlockRendererProps> = ({ sections }) => {
  if (!sections || sections.length === 0) {
    return null
  }

  return (
    <Fragment>
      {sections.map((section, index) => {
        // Phase 6: map blockType to actual section component
        // For now, render placeholder based on blockType
        return (
          <div key={index} className="section-wrapper py-16">
            <PlaceholderSection section={section} />
          </div>
        )
      })}
    </Fragment>
  )
}

const PlaceholderSection: React.FC<{ section: SectionViewModel }> = ({ section }) => {
  return (
    <div
      className="container mx-auto px-4 py-8 opacity-50 border border-dashed rounded-lg"
      style={{
        maxWidth: 'var(--content-width, 1200px)',
        borderColor: 'var(--color-outline, #859398)',
      }}
    >
      <code className="text-xs" style={{ fontFamily: 'monospace' }}>
        {section.blockType}
      </code>
      {'heading' in section && section.heading && (
        <p className="text-sm mt-2">{(section as { heading: string }).heading}</p>
      )}
    </div>
  )
}
