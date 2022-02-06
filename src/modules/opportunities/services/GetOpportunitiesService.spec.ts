import { AppError } from '@shared/errors/AppError'
import { FakeOpportunityRepository } from '../repositories/fakes/FakeOpportunityRepository'
import { GetOpportunitiesService } from './GetOpportunitiesService'

let getOpportunities: GetOpportunitiesService
let fakeOpportunityRepository: FakeOpportunityRepository

describe('GetOpportunities', () => {
  beforeEach(() => {
    fakeOpportunityRepository = new FakeOpportunityRepository()
    getOpportunities = new GetOpportunitiesService(fakeOpportunityRepository)
  })

  it('should be able to get all opportunities', async () => {
    await fakeOpportunityRepository.save({
      title: 'any_title',
      currency: 'BRL',
      person_name: 'any_person_name',
      value: 150,
    })

    const opportunities = await getOpportunities.execute()

    expect(opportunities[0]).toHaveProperty('title')
  })

  it('should throw an error if no opportunities was found', async () => {
    await expect(getOpportunities.execute()).rejects.toBeInstanceOf(AppError)
  })
})
