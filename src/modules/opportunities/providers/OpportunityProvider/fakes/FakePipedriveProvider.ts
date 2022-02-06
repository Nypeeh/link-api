import { IWonOpportunity } from '../dtos/IWonOpportunity'
import { IOpportunityProvider } from '../models/IOpportunityProvider'

export class FakePipedriveProvider implements IOpportunityProvider {
  async getWonOpportunities(): Promise<IWonOpportunity[]> {
    const fakeOpportunities = [{} as IWonOpportunity]

    return fakeOpportunities
  }
}
