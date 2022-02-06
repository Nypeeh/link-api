import axios from 'axios'
import { IBlingProvider } from '../models/IBlingProvider'

import { IBlingRequest } from '../dtos/IBlingRequest'

export class FakeBlingProvider implements IBlingProvider {
  public async createOrder(blingRequest: IBlingRequest): Promise<void> {}
}
