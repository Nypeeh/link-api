import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'
import { IOpportunityRepository } from '../repositories/IOpportunityRepository'
import { Opportunity } from '../infra/typeorm/entities/Opportunity'

@injectable()
export class GetOpportunitiesService {
  constructor(
    @inject('OpportunityRepository')
    private opportunityRepository: IOpportunityRepository,
  ) {}

  async execute(): Promise<Opportunity[]> {
    const wonOpportunities = await this.opportunityRepository.getOpportunities()

    if (!wonOpportunities[0]) {
      throw new AppError('Opportunities not found.')
    }

    return wonOpportunities
  }
}
