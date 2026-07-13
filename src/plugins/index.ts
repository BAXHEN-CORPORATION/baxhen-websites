import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Plugin } from 'payload'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle = ({ doc }: { doc?: { title?: string } }) => {
  return doc?.title ? `${doc.title} | Baxhen` : 'Baxhen'
}

const generateURL = ({ doc }: { doc?: { slug?: string } }) => {
  const url = getServerSideURL()
  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  seoPlugin({ generateTitle, generateURL }),
  formBuilderPlugin({
    fields: { payment: false },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  FixedToolbarFeature(),
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                ],
              }),
            }
          }
          return field
        })
      },
    },
  }),
]
