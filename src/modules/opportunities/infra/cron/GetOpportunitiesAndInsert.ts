import cron from 'node-cron'

import { PipedriveProvider } from '@modules/opportunities/providers/OpportunityProvider/implementations/PipedriveProvider'
import { BlingProvider } from '@modules/opportunities/providers/BlingProvider/implementations/BlingProvider'
import { SaveOpportunityService } from '@modules/opportunities/services/SaveOpportunityService'
import { container } from 'tsyringe'

async function GetOpportunitiesAndInsert() {
  console.log(' == CRON STARTED == GetOpportunitiesAndInsert')

  const pipedriveProvider = new PipedriveProvider()

  const wonOpportunities = await pipedriveProvider.getWonOpportunities()

  if (!wonOpportunities[0]) {
    return
  }
  const blingProvider = new BlingProvider()

  // Register opportunities on Bling
  for (const opportunity of wonOpportunities) {
    await blingProvider.createOrder({
      code: Math.random(),
      clientName: opportunity.person_name,
      value: opportunity.value,
      description: opportunity.title,
    })

    // Save in DATABASE
    const saveOpportunity = container.resolve(SaveOpportunityService)

    await saveOpportunity.execute({
      value: opportunity.value,
      currency: opportunity.currency,
      person_name: opportunity.person_name,
      title: opportunity.title,
    })
  }

  console.log(' == CRON ENDED == GetOpportunitiesAndInsert')
}

export default cron.schedule('0 */24 * * *', GetOpportunitiesAndInsert, {
  scheduled: false,
})
