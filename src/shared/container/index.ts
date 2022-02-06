import '@modules/opportunities/providers'

import { container } from 'tsyringe'

import { OpportunityRepository } from '@modules/opportunities/infra/typeorm/repositories/OpportunityRepository'
import { IOpportunityRepository } from '@modules/opportunities/repositories/IOpportunityRepository'

container.registerSingleton<IOpportunityRepository>(
  'OpportunityRepository',
  OpportunityRepository,
)
