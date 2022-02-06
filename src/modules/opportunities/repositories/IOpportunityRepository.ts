import { ICreateOpportunityDTO } from '../dtos/ICreateOpportunityDTO'
import { Opportunity } from '../infra/typeorm/entities/Opportunity'

export interface IOpportunityRepository {
  getOpportunities(): Promise<Opportunity[]>
  save(opportunity: ICreateOpportunityDTO): Promise<Opportunity>
}
