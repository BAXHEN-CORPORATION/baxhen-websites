import React from 'react'
import { c } from '../config'

export const CoverageSection = () => (
  <section className="py-16" style={{ backgroundColor: c.surface }}>
    <div className="max-w-[800px] mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4" style={{ color: c.primary }}>Área de atuação</h2>
      <p className="text-sm" style={{ color: c.onSurfaceVariant }}>
        Trabalhamos principalmente em <strong style={{ color: c.onSurface }}>Lisboa, Setúbal e Margem Sul</strong>. Para outros destinos em Portugal, peça uma avaliação personalizada.
      </p>
    </div>
  </section>
)
