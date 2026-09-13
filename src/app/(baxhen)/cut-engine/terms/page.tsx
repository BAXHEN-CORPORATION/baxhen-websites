import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Ban,
  CircleCheck,
  Clapperboard,
  Copyright,
  FileCheck2,
  Gauge,
  KeyRound,
  Scale,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Terms of Service — Cut Engine',
  description:
    'Terms governing access to and use of Cut Engine, including its YouTube publishing and analytics features.',
  alternates: { canonical: '/cut-engine/terms' },
  openGraph: {
    title: 'Terms of Service — Cut Engine',
    description: 'Terms for using Cut Engine with your YouTube channel.',
    type: 'website',
    url: '/cut-engine/terms',
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
  warm: '#f1dfbd',
} as const

const sections = [
  { id: 'acceptance', label: '1. Acceptance' },
  { id: 'service', label: '2. The service' },
  { id: 'account', label: '3. Accounts & authorization' },
  { id: 'youtube-actions', label: '4. YouTube actions' },
  { id: 'content', label: '5. Your content' },
  { id: 'acceptable-use', label: '6. Acceptable use' },
  { id: 'third-parties', label: '7. Third-party services' },
  { id: 'availability', label: '8. Availability' },
  { id: 'termination', label: '9. Suspension & termination' },
  { id: 'liability', label: '10. Disclaimers & liability' },
  { id: 'legal', label: '11. General legal terms' },
] as const

function SectionHeading({
  id,
  icon: Icon,
  children,
}: {
  id: string
  icon: typeof Scale
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

function TermsCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl border p-6 md:p-8"
      style={{ backgroundColor: colors.surface, borderColor: colors.border }}
    >
      {children}
    </div>
  )
}

export default function CutEngineTermsPage() {
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
            href="mailto:legal@baxhen.com?subject=Cut%20Engine%20terms"
            className="rounded-lg px-4 py-2 text-xs font-bold transition-opacity hover:opacity-85"
            style={{ backgroundColor: colors.cyanStrong, color: colors.cyanInk }}
          >
            Legal contact
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
                Cut Engine · Legal
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                Terms of Service
              </h1>
              <p
                className="mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg"
                style={{ color: colors.muted }}
              >
                These terms govern your use of Cut Engine to publish and manage YouTube videos and
                view analytics for channels you are authorized to operate.
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
                  You control every YouTube action
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
              In these terms
            </p>
            <nav aria-label="Terms of service sections" className="flex flex-col gap-1">
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
              <SectionHeading id="acceptance" icon={FileCheck2}>
                1. Acceptance of these terms
              </SectionHeading>
              <TermsCard>
                <p className="leading-7" style={{ color: colors.muted }}>
                  These Terms of Service form an agreement between you and Baxhen Consulting Group
                  Lda. (“Baxhen”, “we”, “us”, or “our”), the developer and operator of Cut Engine.
                  By accessing or using Cut Engine, you agree to these terms and our{' '}
                  <Link
                    href="/cut-engine/privacy"
                    className="underline underline-offset-4"
                    style={{ color: colors.cyan }}
                  >
                    Privacy Policy
                  </Link>
                  . If you do not agree, do not use the service.
                </p>
                <p
                  className="mt-5 border-t pt-5 text-sm leading-6"
                  style={{ borderColor: colors.border, color: colors.cyan }}
                >
                  Cut Engine uses YouTube API Services. By using its YouTube-connected features, you
                  also agree to be bound by the{' '}
                  <a
                    href="https://www.youtube.com/t/terms"
                    rel="noreferrer"
                    target="_blank"
                    className="underline underline-offset-4"
                  >
                    YouTube Terms of Service
                  </a>
                  .
                </p>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="service" icon={Clapperboard}>
                2. What Cut Engine provides
              </SectionHeading>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Publish',
                    text: 'Upload videos and thumbnails and submit titles, descriptions, tags, schedules, and visibility settings to your YouTube channel.',
                  },
                  {
                    title: 'Manage',
                    text: 'View supported channel and video information and update metadata or publication settings when you expressly instruct Cut Engine.',
                  },
                  {
                    title: 'Analyze',
                    text: 'View dashboards and reports based on read-only YouTube Analytics data for channels you have authorized.',
                  },
                ].map((item) => (
                  <TermsCard key={item.title}>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      {item.text}
                    </p>
                  </TermsCard>
                ))}
              </div>
              <p className="text-sm leading-6" style={{ color: colors.muted }}>
                Cut Engine is an independent product developed by Baxhen. It is not sponsored,
                endorsed, or operated by Google or YouTube.
              </p>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="account" icon={KeyRound}>
                3. Eligibility, accounts, and authorization
              </SectionHeading>
              <TermsCard>
                <ul
                  className="flex list-disc flex-col gap-3 pl-5 text-sm leading-6"
                  style={{ color: colors.muted }}
                >
                  <li>
                    You must be legally able to enter this agreement and be at least 18 years old,
                    or the minimum legal age required in your jurisdiction.
                  </li>
                  <li>
                    You must own, administer, or have documented permission to operate every YouTube
                    channel you connect.
                  </li>
                  <li>
                    You are responsible for activity performed through your Cut Engine account and
                    for keeping your account access secure.
                  </li>
                  <li>
                    You authorize Cut Engine through Google OAuth. We never ask for or store your
                    Google or YouTube password.
                  </li>
                  <li>
                    You may revoke authorization at any time through Cut Engine or your{' '}
                    <a
                      href="https://security.google.com/settings/security/permissions"
                      rel="noreferrer"
                      target="_blank"
                      className="underline underline-offset-4"
                      style={{ color: colors.cyan }}
                    >
                      Google Account permissions
                    </a>
                    .
                  </li>
                </ul>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="youtube-actions" icon={CircleCheck}>
                4. YouTube actions and your final control
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  Any action that publishes, inserts, updates, shares, or deletes YouTube content
                  must be clearly initiated or confirmed by you. Before publication, Cut Engine will
                  identify the destination channel and show the relevant content and visibility
                  choice, such as public, private, or unlisted.
                </p>
                <div
                  className="mt-6 rounded-lg border-l-4 p-5 text-sm leading-6"
                  style={{
                    backgroundColor: 'rgba(115, 221, 245, 0.06)',
                    borderColor: colors.cyan,
                    color: colors.muted,
                  }}
                >
                  Cut Engine may suggest values such as a title or description, but you have final
                  control. We will not materially alter user-provided values or existing visibility
                  settings without your express instruction.
                </div>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="content" icon={Copyright}>
                5. Your content and intellectual property
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  You retain ownership of the videos, thumbnails, text, and other material you
                  submit to Cut Engine. You grant Baxhen a limited, non-exclusive license to host,
                  process, format, and transmit that material only as needed to provide Cut Engine
                  and carry out your instructions.
                </p>
                <p className="mt-5 text-sm leading-6" style={{ color: colors.muted }}>
                  You represent that you have all rights, licenses, consents, and releases required
                  to use and publish the content. You are responsible for compliance with applicable
                  law, copyright, privacy and publicity rights, the{' '}
                  <a
                    href="https://www.youtube.com/howyoutubeworks/policies/community-guidelines/"
                    rel="noreferrer"
                    target="_blank"
                    className="underline underline-offset-4"
                    style={{ color: colors.cyan }}
                  >
                    YouTube Community Guidelines
                  </a>
                  , and YouTube policies.
                </p>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="acceptable-use" icon={Ban}>
                6. Acceptable use
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  You may not use Cut Engine to:
                </p>
                <ul
                  className="mt-5 flex list-disc flex-col gap-3 pl-5 text-sm leading-6"
                  style={{ color: colors.muted }}
                >
                  <li>publish unlawful, infringing, deceptive, abusive, or harmful content;</li>
                  <li>
                    impersonate another person or connect a channel you are not authorized to use;
                  </li>
                  <li>
                    manipulate metrics, engagement, recommendations, advertising, or API quotas;
                  </li>
                  <li>
                    scrape YouTube, use undocumented APIs, or bypass access or security controls;
                  </li>
                  <li>
                    download or store YouTube audiovisual content without the required permission;
                  </li>
                  <li>
                    introduce malware or interfere with Cut Engine, Google, YouTube, or other users;
                    or
                  </li>
                  <li>
                    resell, sublicense, reverse engineer, or exploit Cut Engine except where law
                    expressly permits it.
                  </li>
                </ul>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="third-parties" icon={ShieldCheck}>
                7. YouTube and other third-party services
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  Your use of Google and YouTube remains governed by their own terms and policies,
                  including the{' '}
                  <a
                    href="https://www.youtube.com/t/terms"
                    rel="noreferrer"
                    target="_blank"
                    className="underline underline-offset-4"
                    style={{ color: colors.cyan }}
                  >
                    YouTube Terms of Service
                  </a>{' '}
                  and the{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    rel="noreferrer"
                    target="_blank"
                    className="underline underline-offset-4"
                    style={{ color: colors.cyan }}
                  >
                    Google Privacy Policy
                  </a>
                  . Those providers may change, restrict, suspend, or discontinue APIs or account
                  access independently of Baxhen.
                </p>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="availability" icon={Gauge}>
                8. Availability, analytics, and changes
              </SectionHeading>
              <TermsCard>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="font-semibold">Service availability</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      We work to keep Cut Engine available, but do not guarantee uninterrupted or
                      error-free operation. Features may be limited by maintenance, API quotas,
                      platform changes, or events outside our reasonable control.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Analytics information</h3>
                    <p className="mt-2 text-sm leading-6" style={{ color: colors.muted }}>
                      Reports may be delayed, revised, or incomplete because they depend on YouTube
                      API data. They are provided for informational purposes and do not guarantee
                      audience growth, revenue, reach, or other results.
                    </p>
                  </div>
                </div>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="termination" icon={UserRoundCheck}>
                9. Suspension and termination
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  You may stop using Cut Engine and revoke Google authorization at any time. We may
                  restrict or suspend access when reasonably necessary to protect users or the
                  service, respond to a legal request, address a security risk, enforce these terms,
                  or comply with Google and YouTube requirements.
                </p>
                <p className="mt-5 text-sm leading-6" style={{ color: colors.muted }}>
                  Account termination ends your right to use Cut Engine. Data deletion and OAuth
                  revocation are handled as described in the{' '}
                  <Link
                    href="/cut-engine/privacy#retention"
                    className="underline underline-offset-4"
                    style={{ color: colors.cyan }}
                  >
                    Privacy Policy
                  </Link>
                  . Content already published on YouTube remains on YouTube until removed there.
                </p>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="liability" icon={Scale}>
                10. Disclaimers and limitation of liability
              </SectionHeading>
              <TermsCard>
                <p className="text-sm leading-6" style={{ color: colors.muted }}>
                  To the extent permitted by law, Cut Engine is provided “as is” and “as available”.
                  Baxhen disclaims implied warranties of merchantability, fitness for a particular
                  purpose, and non-infringement. We do not warrant that every upload, scheduled
                  action, metadata update, or analytics request will complete successfully.
                </p>
                <p className="mt-5 text-sm leading-6" style={{ color: colors.muted }}>
                  To the extent permitted by law, Baxhen will not be liable for indirect,
                  incidental, special, consequential, or punitive damages, lost profits, lost data,
                  loss of channel access, or changes made by Google or YouTube. Nothing in these
                  terms excludes liability that cannot legally be excluded or limits mandatory
                  consumer rights.
                </p>
              </TermsCard>
            </section>

            <section className="flex flex-col gap-5">
              <SectionHeading id="legal" icon={Scale}>
                11. General legal terms
              </SectionHeading>
              <TermsCard>
                <div
                  className="flex flex-col gap-5 text-sm leading-6"
                  style={{ color: colors.muted }}
                >
                  <p>
                    These terms are governed by Portuguese law, without prejudice to mandatory
                    consumer protections that apply where you live. Where legally permitted, courts
                    in Lisbon, Portugal will have jurisdiction over disputes.
                  </p>
                  <p>
                    If one provision is unenforceable, the remaining provisions stay effective.
                    Failure to enforce a provision is not a waiver. You may not transfer this
                    agreement without our consent; Baxhen may transfer it as part of a merger,
                    reorganization, financing, or sale of the relevant business.
                  </p>
                  <p>
                    We may update these terms to reflect product, legal, security, or API changes.
                    Material changes will be presented in Cut Engine or on this page. Continuing to
                    use Cut Engine after the effective date of updated terms constitutes acceptance
                    where permitted by law.
                  </p>
                </div>
                <div className="mt-7 border-t pt-6" style={{ borderColor: colors.border }}>
                  <p className="font-semibold" style={{ color: colors.warm }}>
                    Questions about these terms?
                  </p>
                  <a
                    href="mailto:legal@baxhen.com?subject=Cut%20Engine%20terms"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: colors.cyan }}
                  >
                    legal@baxhen.com
                  </a>
                </div>
              </TermsCard>
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
            <Link href="/cut-engine/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <a
              href="https://www.youtube.com/t/terms"
              rel="noreferrer"
              target="_blank"
              className="hover:text-white"
            >
              YouTube Terms
            </a>
            <a href="mailto:legal@baxhen.com" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
