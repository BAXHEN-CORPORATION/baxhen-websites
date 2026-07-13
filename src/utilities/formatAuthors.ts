/**
 * Formats an array of author names into a prettified string.
 * Generic utility — no longer tied to Post type.
 *
 * @param authors - Array of objects with a `name` property
 * @returns A prettified string of author names
 */
export const formatAuthors = (authors: Array<{ name?: string | null }>) => {
  const authorNames = authors.map((author) => author.name).filter(Boolean) as string[]

  if (authorNames.length === 0) return ''
  if (authorNames.length === 1) return authorNames[0]
  if (authorNames.length === 2) return `${authorNames[0]} and ${authorNames[1]}`

  return `${authorNames.slice(0, -1).join(', ')} and ${authorNames[authorNames.length - 1]}`
}
