export interface HeroSectionViewModel { blockType: 'hero'; heading: string; subtext?: string; cta?: { label: string; href: string }; variant: 'centered' | 'split' | 'minimal' }
export interface ServicesSectionViewModel { blockType: 'services'; heading: string; subtext?: string; services: Array<{ title: string; description: string }> }
export interface GallerySectionViewModel { blockType: 'gallery'; heading: string; images: Array<{ url: string; alt: string; caption?: string }>; layout?: 'grid' | 'carousel' }
export interface FAQSectionViewModel { blockType: 'faq'; heading: string; items: Array<{ question: string; answer: string }> }
export interface CTASectionViewModel { blockType: 'cta'; heading: string; subtext?: string; buttons: Array<{ label: string; href: string; variant?: 'primary' | 'outline' }> }
export interface ContactSectionViewModel { blockType: 'contact'; heading: string; email?: string; phone?: string; address?: string; showForm?: boolean }
export interface LeadFormSectionViewModel { blockType: 'leadForm'; heading: string; subtext?: string; formId: string; fields: Array<{ name: string; label: string; type: string; required: boolean; options?: string[] }>; submitLabel: string; consentRequired: boolean; consentText?: string }
export interface TestimonialsSectionViewModel { blockType: 'testimonials'; heading: string; testimonials: Array<{ quote: string; author: string; role?: string; avatar?: string }> }
export interface FormSectionViewModel { blockType: 'formBlock'; formId: string; title: string; submitLabel: string }
export interface MediaSectionViewModel { blockType: 'mediaBlock'; media: { url: string; alt: string }; caption?: string }
export interface ContentSectionViewModel { blockType: 'content'; content?: unknown }
