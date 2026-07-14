/**
 * Minimal root layout — only used when no route group layout provides html/body.
 * Route groups ((baxhen), (sites), (payload)) each have their own full layout.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
