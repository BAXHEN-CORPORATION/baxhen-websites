import type { HeroSectionViewModel } from '@/view-models/blocks/hero.view-model'
import type { ContentSectionViewModel } from '@/view-models/blocks/content.view-model'
import type { ServicesSectionViewModel } from '@/view-models/blocks/services.view-model'
import type { GallerySectionViewModel } from '@/view-models/blocks/gallery.view-model'
import type { TestimonialsSectionViewModel } from '@/view-models/blocks/testimonials.view-model'
import type { FAQSectionViewModel } from '@/view-models/blocks/faq.view-model'
import type { CTASectionViewModel } from '@/view-models/blocks/cta.view-model'
import type { ContactSectionViewModel } from '@/view-models/blocks/contact.view-model'
import type { LeadFormSectionViewModel } from '@/view-models/blocks/lead-form.view-model'
import type { FormSectionViewModel } from '@/view-models/blocks/form.view-model'
import type { MediaSectionViewModel } from '@/view-models/blocks/media.view-model'

/**
 * Discriminated union of all possible section view models.
 * The block renderer maps each blockType to the correct section component.
 */
export type SectionViewModel =
  | HeroSectionViewModel
  | ContentSectionViewModel
  | ServicesSectionViewModel
  | GallerySectionViewModel
  | TestimonialsSectionViewModel
  | FAQSectionViewModel
  | CTASectionViewModel
  | ContactSectionViewModel
  | LeadFormSectionViewModel
  | FormSectionViewModel
  | MediaSectionViewModel

export interface BlockRendererProps {
  sections: SectionViewModel[]
}
