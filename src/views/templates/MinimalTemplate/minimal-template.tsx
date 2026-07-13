import React from 'react'

interface MinimalTemplateProps { children?: React.ReactNode }

export const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ children }) => <>{children}</>
