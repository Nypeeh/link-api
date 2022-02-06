import { getMongoRepository, MongoRepository } from 'typeorm'

import { IOpportunityRepository } from '@modules/opportunities/repositories/IOpportunityRepository'
import { Opportunity } from '../entities/Opportunity'

export class OpportunityRepository implements IOpportunityRepository {
  private ormRepository: MongoRepository<Opportunity>

  constructor() {
    this.ormRepository = getMongoRepository(Opportunity)
  }

  async getOpportunities(): Promise<Opportunity[]> {
    return await this.ormRepository.find()
  }

  async save(opportunity: Opportunity): Promise<Opportunity> {
    const opportunityObject = this.ormRepository.create(opportunity)

    const opportunitySaved = await this.ormRepository.save(opportunityObject)

    return opportunitySaved
  }
}
