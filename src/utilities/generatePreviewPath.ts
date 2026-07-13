import { PayloadRequest } from 'payload'

type Props = {
  slug: string
  collection: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ slug, collection }: Props) => {
  if (slug === undefined || slug === null) {
    return null
  }

  const encodedSlug = encodeURIComponent(slug)
  const collectionPrefix = collection === 'pages' ? '' : `/${collection}`

  const params = new URLSearchParams({
    slug: encodedSlug,
    collection,
  })

  return `/next/preview?${params.toString()}`
}
