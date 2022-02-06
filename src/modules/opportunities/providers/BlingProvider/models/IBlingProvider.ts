import { IBlingRequest } from '../dtos/IBlingRequest'

export interface IBlingProvider {
  createOpportunity(blingRequest: IBlingRequest): Promise<void>
}
