import React from 'react'
import { c } from '../config'

const items = ['WhatsApp direto', 'Desmontagem e montagem', 'Residências e empresas', 'Lisboa, Setúbal, Margem Sul']

export const TrustBar = () => (
  <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 text-sm" style={{ color: c.onSurfaceVariant }}>
    {items.map((t) => (
      <span key={t} className="flex items-center gap-1"><span style={{ color: c.actionYellow }}>●</span> {t}</span>
    ))}
  </div>
)
