import { seedDemoTourismTenant } from './demo-tourism-tenant'
import { seedDemoLeadTenant } from './demo-lead-tenant'

/**
 * Orchestrator: seeds all demo data.
 * Each seed function is idempotent.
 */
export const seedAll = async (): Promise<void> => {
  console.log('--- Seeding Demo Tenants ---')

  try {
    await seedDemoTourismTenant()
    console.log('✓ Solaris Douro (tourism) seeded')
  } catch (error) {
    console.error('✗ Failed to seed Solaris Douro:', error)
  }

  try {
    await seedDemoLeadTenant()
    console.log('✓ Consultoria Nexus (lead-gen) seeded')
  } catch (error) {
    console.error('✗ Failed to seed Consultoria Nexus:', error)
  }

  console.log('--- Seeding Complete ---')
}
