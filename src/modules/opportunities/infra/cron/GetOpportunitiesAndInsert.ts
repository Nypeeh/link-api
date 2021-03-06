import cron from 'node-cron'

import Queues from '@shared/infra/bull/Queues'
import { PipedriveProvider } from '@modules/opportunities/providers/OpportunityProvider/implementations/PipedriveProvider'

async function GetOpportunitiesAndInsert() {
  console.log(' == CRON STARTED == GetOpportunitiesAndInsert')

  const pipedriveProvider = new PipedriveProvider()

  const wonOpportunities = await pipedriveProvider.getWonOpportunities()

  if (!wonOpportunities[0]) {
    return
  }

  // Register opportunities on Bling
  await Queues.add('InsertOpportunitiesJob', wonOpportunities)

  console.log(' == CRON ENDED == GetOpportunitiesAndInsert')
}

// Run every 24 hours
export default cron.schedule('0 */24 * * *', GetOpportunitiesAndInsert, {
  scheduled: false,
})
