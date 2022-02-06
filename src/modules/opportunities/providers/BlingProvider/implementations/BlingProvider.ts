import axios from 'axios'
import { IBlingProvider } from '../models/IBlingProvider'

import { AppError } from '@shared/errors/AppError'
import { convertToXmlBling } from '../utils/convertToXmlBling'
import { IBlingRequest } from '../dtos/IBlingRequest'
import { IBlingReturn } from '../dtos/IBlingResponse'

export class BlingProvider implements IBlingProvider {
  private readonly apiKey = process.env.BLING_API_KEY

  public async createOpportunity(blingRequest: IBlingRequest): Promise<void> {
    const xml = convertToXmlBling(blingRequest)

    const { data, status: httpStatusCode } = await axios
      .post<IBlingReturn>(
        `https://bling.com.br/Api/v2/pedido/json?apikey=${this.apiKey}&xml=${xml}`,
      )
      .catch(error => {
        console.log(error)
        process.exit(1)
      })

    if (data.retorno.erros && data.retorno.erros.length) {
      const errorMessage = data.retorno.erros[0].erro.msg
      throw new AppError(errorMessage, 400)
    }

    if (httpStatusCode < 200 || httpStatusCode > 299)
      throw new AppError(
        'There was a problem trying to register a request in the bling api',
        500,
      )
  }
}
