import { ICreateOpportunityDTO } from '@modules/opportunities/dtos/ICreateOpportunityDTO'
import { Opportunity } from '@modules/opportunities/infra/typeorm/entities/Opportunity'
import { IOpportunityRepository } from '@modules/opportunities/repositories/IOpportunityRepository'

export class FakeOpportunityRepository implements IOpportunityRepository {
  private opportunities: Opportunity[] = []

  async getOpportunities(): Promise<Opportunity[]> {
    return this.opportunities
  }

  save({
    currency,
    person_name,
    title,
    value,
  }: ICreateOpportunityDTO): Promise<Opportunity> {
    const opportunity = new Opportunity()

    Object.assign(opportunity, { currency, person_name, title, value })

    this.opportunities.push(opportunity)

    return new Promise(resolve => resolve(opportunity))
  }
}
