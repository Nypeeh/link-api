import { container } from 'tsyringe'
import { opportunityConfig } from '@config/opportunity'

import { IOpportunityProvider } from './OpportunityProvider/models/IOpportunityProvider'
import { PipedriveProvider } from './OpportunityProvider/implementations/PipedriveProvider'

import { IBlingProvider } from './BlingProvider/models/IBlingProvider'
import { BlingProvider } from './BlingProvider/implementations/BlingProvider'

const providers = {
  pipedrive: PipedriveProvider,
}

container.registerSingleton<IOpportunityProvider>(
  'OpportunityProvider',
  providers[opportunityConfig.platform],
)

container.registerSingleton<IBlingProvider>('BlingProvider', BlingProvider)
