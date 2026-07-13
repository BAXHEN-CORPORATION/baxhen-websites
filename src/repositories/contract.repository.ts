import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Contract, ContractDocument } from '@/payload-types'

/**
 * Find all contracts for a given client. Access-controlled by Payload.
 */
export const findClientContracts = async (
  clientId: string,
): Promise<Contract[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'contracts',
    where: {
      client: { equals: clientId },
    },
    depth: 1,
    sort: '-startDate',
  })

  return result.docs
}

/**
 * Find contract documents for a given contract. Private access only.
 */
export const findContractDocuments = async (
  contractId: string,
): Promise<ContractDocument[]> => {
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'contract-documents',
    where: {
      contract: { equals: contractId },
    },
    sort: '-uploadedAt',
  })

  return result.docs
}
