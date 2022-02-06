import { IWonOpportunity } from '../dtos/IWonOpportunity'

export interface IOpportunityProvider {
  getWonOpportunities(): Promise<IWonOpportunity[]>
}
