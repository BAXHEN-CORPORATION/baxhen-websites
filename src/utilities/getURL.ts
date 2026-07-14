import canUseDOM from './canUseDOM'

export const getServerSideURL = () => {
  let url = ''
  const raw = process.env.NEXT_PUBLIC_SERVER_URL || process.env.URL || ''
  if (raw) url = raw
  else if (process.env.VERCEL_PROJECT_PRODUCTION_URL) url = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  else url = 'http://localhost:3000'
  if (!url.startsWith('http')) url = `https://${url}`
  return url
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}
