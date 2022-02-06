import { IBlingRequest } from '../dtos/IBlingRequest'

export interface IBlingProvider {
  createOrder(blingRequest: IBlingRequest): Promise<void>
}
