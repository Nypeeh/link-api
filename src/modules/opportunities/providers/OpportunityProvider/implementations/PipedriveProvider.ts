import axios from 'axios'

import { AppError } from '@shared/errors/AppError'
import { IWonOpportunity } from '../dtos/IWonOpportunity'
import { IOpportunityProvider } from '../models/IOpportunityProvider'

export class PipedriveProvider implements IOpportunityProvider {
  private readonly apiKey = process.env.PIPEDRIVE_KEY

  public async getWonOpportunities(): Promise<IWonOpportunity[]> {
    const { data, status: httpStatusCode } = await axios
      .get(`${process.env.PIPEDRIVE_LINK_API}/deals`, {
        params: { api_token: this.apiKey, status: 'won' },
      })
      .catch(error => {
        console.log(error)
        process.exit(1)
      })

    if (httpStatusCode < 200 || httpStatusCode > 299) {
      throw new AppError(
        'There was a problem fetching the data from the pipedrive',
        500,
      )
    }

    const wonOpportunities: IWonOpportunity[] = data?.data?.map(
      (opportunity: IWonOpportunity) => ({
        id: opportunity.id,
        title: opportunity.title,
        person_name: opportunity.person_name,
        value: opportunity.value,
        currency: opportunity.currency,
        update_time: opportunity.update_time,
        status: opportunity.status,
      }),
    )

    return wonOpportunities
  }
}
