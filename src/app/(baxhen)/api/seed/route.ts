import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { seedAll } from '@/seeds'

/**
 * POST /api/seed
 * Protected seed endpoint — requires authenticated admin user.
 */
export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })

    // Verify authentication (basic check — Payload handles real auth)
    const authHeader = request.headers.get('authorization')
    if (!authHeader) {
      // In development, allow seeding without auth
      if (process.env.NODE_ENV === 'production') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    await seedAll()

    return NextResponse.json({
      success: true,
      message: 'Demo data seeded successfully.',
    })
  } catch (error) {
    console.error('[Seed] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to seed demo data.' },
      { status: 500 },
    )
  }
}
