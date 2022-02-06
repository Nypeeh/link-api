import { inject, injectable } from 'tsyringe'

import { IOpportunityRepository } from '../repositories/IOpportunityRepository'
import { Opportunity } from '../infra/typeorm/entities/Opportunity'
import { ICreateOpportunityDTO } from '../dtos/ICreateOpportunityDTO'

@injectable()
export class SaveOpportunityService {
  constructor(
    @inject('OpportunityRepository')
    private opportunityRepository: IOpportunityRepository,
  ) {}

  async execute(opportunity: ICreateOpportunityDTO): Promise<Opportunity> {
    const opportunitySaved = await this.opportunityRepository.save(opportunity)

    return opportunitySaved
  }
}
