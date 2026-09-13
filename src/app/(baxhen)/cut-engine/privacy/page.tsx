import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowUpRight,
  BarChart3,
  Database,
  FileVideo2,
  KeyRound,
  LockKeyhole,
  Mail,
  RefreshCw,
  ShieldCheck,
  Trash2,
  UserRoundCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Cut Engine',
  description:
    'How Cut Engine accesses, uses, stores, shares, and deletes Google and YouTube user data.',
  alternates: { canonical: '/cut-engine/privacy' },
  openGraph: {
    title: 'Privacy Policy — Cut Engine',
    description: 'How Cut Engine handles Google Account and YouTube channel data.',
    type: 'website',
    url: '/cut-engine/privacy',
  },
}

const colors = {
  background: '#0b1114',
  surface: '#11191d',
  surfaceRaised: '#172126',
  border: '#26353c',
  text: '#edf4f6',
  muted: '#a9bbc2',
  cyan: '#73ddf5',
  cyanStrong: '#08c9f1',
  cyanInk: '#003d4b',
} as const

const sections = [
  { id: 'scope', label: '1. Scope & controller', icon: UserRoundCheck },
  { id: 'data', label: '2. Data we access', icon: Database },
  { id: 'use', label: '3. How we use data', icon: FileVideo2 },
  { id: 'storage', label: '4. Storage & security', icon: LockKeyhole },
  { id: 'sharing', label: '5. Data sharing', icon: ShieldCheck },
  { id: 'retention', label: '6. Retention & deletion', icon: Trash2 },
  { id: 'control', label: '7. Your controls', icon: KeyRound },
  { id: 'legal', label: '8. Legal information', icon: RefreshCw },
] as const

const dataGroups = [
  {
    title: 'Google Account data',
    text: 'Your unique Google Account identifier, name, email address, and profile picture, when available. Cut Engine never receives or stores your Google password.',
  },
  {
    title: 'YouTube channel data',
    text: 'Channel identifier, channel name, video identifiers, titles, descriptions, thumbnails, tags, categories, publication status, privacy setting, and other metadata needed to publish and manage videos.',
  },
  {
    title: 'YouTube Analytics data',
    text: 'Read-only performance information for your own channel and videos, such as views, watch time, average view duration, audience retention, likes, comments, and subscriber activity. Cut Engine does not access monetary reports unless a future feature clearly requests your separate consent.',
  },
  {
    title: 'Content and authorization data',
    text: 'Video files, thumbnails, titles, descriptions, scheduling choices, and visibility settings you submit, plus OAuth access and refresh tokens required to keep the connection you authorized.',
  },
] as const

function SectionHeading({
  id,
  icon: Icon,
  children,
}: {
  id: string
  icon: typeof Database
  children: React.ReactNode
}) {
  return (
    <div id={id} className="scroll-mt-28 flex items-center gap-3">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: 'rgba(8, 201, 241, 0.12)', color: colors.cyan }}
      >
        <Icon aria-hidden="true" size={18} />
      </span>
      <h2 className="text-2xl font-semibold tracking-tight" style={{ color: colors.cyan }}>
        {children}
      </h2>
    </div>
  )
}

function PolicyCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`rounded-xl border p-6 md:p-8 ${className}`}
      style={{ backgroundColor: colors.surface, borderColor: colors.border }}
    >
      {children}
    </div>
  )
}

export default function CutEnginePrivacyPage() {
  return (
    <div
      className="min-h-screen antialiased"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <header
        className="sticky top-0 z-40 border-b backdrop-blur-xl"
        style={{ backgroundColor: 'rgba(11, 17, 20, 0.9)', borderColor: colors.border }}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 md:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="Baxhen home">
            <span className="text-xl font-bold tracking-[-0.06em]">
              baxh<span style={{ color: colors.cyanStrong }}>e</span>n
            </span>
            <span
              className="rounded-full border px-3 py-1 text-xs font-semibold tracking-wide"
              style={{ borderColor: colors.border, color: colors.muted }}
            >
              Cut Engine
            </span>
          </Link>
          <a
            href="mailto:privacy@baxhen.com?subject=Cut%20Engine%20privacy"
            className="rounded-lg px-4 py-2 text-xs font-bold transition-opacity hover:opacity-85"
            style={{ backgroundColor: colors.cyanStrong, color: colors.cyanInk }}
          >
            Privacy contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-14 md:px-10 md:pb-20 md:pt-20">
          <div
            className="relative overflow-hidden rounded-2xl border px-6 py-14 text-center md:px-16 md:py-20"
            style={{ backgroundColor: colors.surface, borderColor: colors.border }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(8, 201, 241, 0.11)' }}
            />
            <div className="relative mx-auto max-w-3xl">
              <span
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: colors.cyan }}
              >
                Cut Engine · Privacy & data
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Privacy Policy
              </h1>
              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg"
                style={{ color: colors.muted }}
              >
                Cut Engine helps YouTube channel owners publish videos and understand channel
                performance. This policy explains exactly how the product handles Google and YouTube
                user data.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span
                  className="rounded-full border px-4 py-2 text-xs font-medium"
                  style={{
                    backgroundColor: colors.surfaceRaised,
                    borderColor: colors.border,
                    color: colors.muted,
                  }}
                >
                  Effective September 13, 2026
                </span>
                <span
                  className="rounded-full border px-4 py-2 text-xs font-medium"
                  style={{
                    backgroundColor: 'rgba(8, 201, 241, 0.08)',
                    borderColor: 'rgba(115, 221, 245, 0.25)',
                    color: colors.cyan,
                  }}
                >
                  YouTube API Services client
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 px-5 pb-24 md:px-10 lg:grid-cols-12">
          <aside className="hidden lg:sticky lg:top-28 lg:col-span-3 lg:block">
            <p
              className="mb-5 text-xs font-bold uppercase tracking-[0.18em]"
              style={{ color: colors.muted }}
            >
              In this policy
            </p>
            <nav aria-label="Privacy policy sections" className="flex flex-col gap-1">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="border-l-2 py-2 pl-4 text-sm transition-colors hover:text-white"
                  style={{ borderColor: colors.border, color: colors.muted }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </aside>

          <article className="flex flex-col gap-14 lg:col-span-9">
            <section className="flex flex-col gap-5">
              <SectionHeading id="scope" icon={UserRoundCheck}>
                1. Scope and data controller
              </SectionHeading>
              <PolicyCard>
                <p className="leading-7" style={{ color: colors.muted }}>
                  This policy applies to <strong style={{ color: colors.text }}>Cut Engine</strong>,
                  a product developed and operated by Baxhen Consulting Group Lda. (“Baxhen”, “we”,
                  “us”, or “our”). It applies when you use Cut Engine, connect a Google Account or
                  YouTube channel, publish content, or view analytics.
                </p>
                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold">Product</dt>
                    <dd className="mt-1" style={{ color: colors.muted }}>
                      Cut Engine
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Developer and controller</dt>
                    <dd className="mt-1" style={{ color: colors.muted }}>
                      Baxhen Consulting Group Lda.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Location</dt>
                    <dd className="mt-1" style={{ color: colors.muted }}>
                      Lisbon, Portugal
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Privacy contact</dt>
                    <dd className="mt-1">
                      <a href="mailto:privacy@baxhen.com" style={{ color: colors.cyan }}>
                        privacy@baxhen.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </PolicyCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="data" icon={Database}>
                2. Data Cut Engine accesses and collects
              </SectionHeading>
              <p className="leading-7" style={{ color: colors.muted }}>
                Cut Engine uses Google OAuth 2.0 and requests only the permissions needed for the
                features you choose. The Google consent screen shows those permissions before any
                access is granted.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {dataGroups.map((group) => (
                  <PolicyCard key={group.title} className="h-full">
                    <h3 className="text-lg font-semibold">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6" style={{ color: colors.muted }}>
                      {group.text}
                    </p>
                  </PolicyCard>
                ))}
              </div>
              <div
                className="rounded-xl border-l-4 p-5 text-sm leading-6"
                style={{
                  backgroundColor: 'rgba(115, 221, 245, 0.06)',
                  borderColor: colors.cyan,
                  color: colors.muted,
                }}
              >
                Cut Engine uses the YouTube Data API and YouTube Analytics API. It does not request
                your Google or YouTube password, access Gmail, Google Drive, Google Calendar,
                contacts, or monetary YouTube reports.
              </div>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="use" icon={FileVideo2}>
                3. How Cut Engine uses the data
              </SectionHeading>
              <PolicyCard>
                <ul
                  className="flex flex-col gap-4 text-sm leading-6"
                  style={{ color: colors.muted }}
                >
                  <li>
                    <strong style={{ color: colors.text }}>Sign-in:</strong> authenticate you and
                    connect the correct Google Account and YouTube channel.
                  </li>
                  <li>
                    <strong style={{ color: colors.text }}>Publishing:</strong> upload the video,
                    thumbnail, title, description, tags, schedule, and visibility setting you select
                    to your channel.
                  </li>
                  <li>
                    <strong style={{ color: colors.text }}>Channel management:</strong> display and,
                    only when you instruct us, update supported video metadata or publication
                    settings.
                  </li>
                  <li>
                    <strong style={{ color: colors.text }}>Analytics:</strong> retrieve and present
                    read-only reports and dashboards about the performance of your channel and
                    videos.
                  </li>
                  <li>
                    <strong style={{ color: colors.text }}>Operations:</strong> maintain the
                    connection, troubleshoot requests, prevent abuse, and protect Cut Engine and its
                    users.
                  </li>
                </ul>
                <p
                  className="mt-6 border-t pt-6 text-sm leading-6"
                  style={{ borderColor: colors.border, color: colors.cyan }}
                >
                  Cut Engine identifies the affected channel, content, and privacy setting and asks
                  for your express instruction before publishing or changing content. It does not
                  use Google user data for advertising, credit decisions, data brokerage, or
                  training generalized AI or machine-learning models.
                </p>
              </PolicyCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="storage" icon={LockKeyhole}>
                4. Storage and security
              </SectionHeading>
              <PolicyCard>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">What may be stored</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      Account and channel identifiers, OAuth tokens, video metadata, publication job
                      information, analytics results, and operational logs needed to provide the
                      service.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">How it is protected</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      We use encrypted transport, access controls, restricted production access, and
                      reasonable technical and organizational safeguards. OAuth tokens are treated
                      as confidential credentials.
                    </p>
                  </div>
                </div>
                <p
                  className="mt-6 border-t pt-6 text-sm leading-6"
                  style={{ borderColor: colors.border, color: colors.muted }}
                >
                  Cut Engine may use strictly necessary session cookies or browser storage for
                  authentication, security, and user preferences. We do not use Google or YouTube
                  user data for advertising cookies.
                </p>
              </PolicyCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="sharing" icon={ShieldCheck}>
                5. When data is shared
              </SectionHeading>
              <PolicyCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  We do not sell Google or YouTube user data. Authorized YouTube data is visible
                  only to the user who authorized access. We may disclose the minimum necessary data
                  to:
                </p>
                <ul
                  className="mt-5 flex flex-col gap-3 text-sm leading-6 list-disc pl-5"
                  style={{ color: colors.muted }}
                >
                  <li>
                    Google and YouTube to perform the publishing or analytics action you requested;
                  </li>
                  <li>
                    contracted hosting, database, monitoring, and security providers acting solely
                    on our instructions;
                  </li>
                  <li>
                    authorities when legally required, or when necessary to protect rights, safety,
                    and service integrity; or
                  </li>
                  <li>another party when you give specific consent.</li>
                </ul>
                <p
                  className="mt-6 border-t pt-6 text-sm font-medium leading-6"
                  style={{ borderColor: colors.border, color: colors.cyan }}
                >
                  Cut Engine’s use and transfer of information received from Google APIs adheres to
                  the{' '}
                  <a
                    className="underline underline-offset-4"
                    href="https://developers.google.com/terms/api-services-user-data-policy"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Google API Services User Data Policy
                  </a>
                  , including the Limited Use requirements.
                </p>
              </PolicyCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="retention" icon={Trash2}>
                6. Retention, refresh, and deletion
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-3">
                <PolicyCard>
                  <BarChart3 aria-hidden="true" size={22} style={{ color: colors.cyan }} />
                  <h3 className="mt-4 font-semibold">Analytics data</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                    May be retained to show historical trends while your authorization remains
                    active. We verify at least every 30 days that access and the related YouTube
                    content remain valid.
                  </p>
                </PolicyCard>
                <PolicyCard>
                  <RefreshCw aria-hidden="true" size={22} style={{ color: colors.cyan }} />
                  <h3 className="mt-4 font-semibold">Other API data</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                    Is refreshed or deleted within 30 calendar days unless a shorter period applies.
                    Tokens are kept only while necessary for the active connection you authorized.
                  </p>
                </PolicyCard>
                <PolicyCard>
                  <Trash2 aria-hidden="true" size={22} style={{ color: colors.cyan }} />
                  <h3 className="mt-4 font-semibold">Deletion requests</h3>
                  <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                    Stored user data is deleted as soon as possible and no later than 7 calendar
                    days after a valid request or Cut Engine account deletion, except data legally
                    required to be retained.
                  </p>
                </PolicyCard>
              </div>
              <p className="text-sm leading-6" style={{ color: colors.muted }}>
                Deleting data from Cut Engine does not delete content stored by YouTube. To delete a
                video or other YouTube data, use YouTube directly or an authorized client that
                supports that action.
              </p>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="control" icon={KeyRound}>
                7. Your choices and controls
              </SectionHeading>
              <PolicyCard>
                <div className="grid gap-7 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Revoke Google access</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      You can revoke Cut Engine’s authorization at any time from your Google Account
                      permissions page. Revocation prevents new access but does not by itself delete
                      data already stored by Cut Engine.
                    </p>
                    <a
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                      href="https://security.google.com/settings/security/permissions"
                      rel="noreferrer"
                      target="_blank"
                      style={{ color: colors.cyan }}
                    >
                      Open Google permissions <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold">Access or delete your data</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      Email us to request access, correction, export, objection, restriction, or
                      deletion. Include the Google email used with Cut Engine so we can verify and
                      process your request.
                    </p>
                    <a
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
                      href="mailto:privacy@baxhen.com?subject=Cut%20Engine%20data%20request"
                      style={{ color: colors.cyan }}
                    >
                      privacy@baxhen.com <Mail aria-hidden="true" size={15} />
                    </a>
                  </div>
                </div>
              </PolicyCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="legal" icon={RefreshCw}>
                8. Legal information and updates
              </SectionHeading>
              <PolicyCard>
                <div
                  className="flex flex-col gap-5 text-sm leading-6"
                  style={{ color: colors.muted }}
                >
                  <p>
                    Depending on where you live, we process personal data to perform our contract
                    with you, based on your consent, to meet legal obligations, and for legitimate
                    interests such as security and service improvement where those interests do not
                    override your rights.
                  </p>
                  <p>
                    Cut Engine uses YouTube API Services. By using its YouTube-connected features,
                    you also agree to the{' '}
                    <a
                      className="underline underline-offset-4"
                      href="https://www.youtube.com/t/terms"
                      rel="noreferrer"
                      target="_blank"
                      style={{ color: colors.cyan }}
                    >
                      YouTube Terms of Service
                    </a>
                    . Google’s own handling of your information is described in the{' '}
                    <a
                      className="underline underline-offset-4"
                      href="https://policies.google.com/privacy"
                      rel="noreferrer"
                      target="_blank"
                      style={{ color: colors.cyan }}
                    >
                      Google Privacy Policy
                    </a>
                    .
                  </p>
                  <p>
                    We may update this policy when Cut Engine, applicable law, or API requirements
                    change. Material changes will be presented in the product or on this page, and
                    the effective date above will be updated.
                  </p>
                </div>
              </PolicyCard>
            </section>
          </article>
        </div>
      </main>

      <footer
        className="border-t px-5 py-10 md:px-10"
        style={{ backgroundColor: '#080d0f', borderColor: colors.border }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Cut Engine by Baxhen</p>
            <p className="mt-1 text-xs" style={{ color: colors.muted }}>
              © 2026 Baxhen Consulting Group Lda.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-xs" style={{ color: colors.muted }}>
            <Link href="/cut-engine/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <a
              href="https://www.youtube.com/t/terms"
              rel="noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              YouTube Terms
            </a>
            <a
              href="https://policies.google.com/privacy"
              rel="noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              Google Privacy
            </a>
            <a href="mailto:privacy@baxhen.com" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
