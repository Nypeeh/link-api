import '@shared/container'

import { IOpportunity } from '@modules/opportunities/dtos/IOpportunity'
import { BlingProvider } from '@modules/opportunities/providers/BlingProvider/implementations/BlingProvider'
import { SaveOpportunityService } from '@modules/opportunities/services/SaveOpportunityService'
import { container } from 'tsyringe'

const blingProvider = new BlingProvider()

export interface Job {
  key: string
  options?: any
  handle: (data: any) => Promise<void>
}

export const InsertOpportunitiesJob: Job = {
  key: 'InsertOpportunitiesJob',
  async handle({ data }: { data: IOpportunity[] }) {
    const saveOpportunity = container.resolve(SaveOpportunityService)

    console.log({ data: data })

    await Promise.all(
      data.map(async (opportunity: IOpportunity) => {
        await blingProvider
          .createOpportunity({
            clientName: opportunity.person_name,
            code: opportunity.id,
            description: opportunity.title,
            value: opportunity.value,
          })
          .then(async () => {
            // Cadastro realizado com sucesso
            await saveOpportunity.execute({
              value: opportunity.value,
              currency: opportunity.currency,
              person_name: opportunity.person_name,
              title: opportunity.title,
            })
          })
          .catch(error => {
            console.log(error)
          })
      }),
    )
  },
}
