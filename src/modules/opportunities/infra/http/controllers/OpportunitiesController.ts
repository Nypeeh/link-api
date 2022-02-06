import { GetOpportunitiesService } from '@modules/opportunities/services/GetOpportunitiesService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export class OpportunitiesController {
  async index(request: Request, response: Response): Promise<Response> {
    const getOpportunities = container.resolve(GetOpportunitiesService)

    const wonOpportunities = await getOpportunities.execute()

    return response.json(wonOpportunities)
  }
}
