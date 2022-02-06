import { FakeOpportunityRepository } from '../repositories/fakes/FakeOpportunityRepository'
import { SaveOpportunityService } from './SaveOpportunityService'

let saveOpportunity: SaveOpportunityService
let fakeOpportunityRepository: FakeOpportunityRepository

describe('SaveOpportunity', () => {
  beforeEach(() => {
    fakeOpportunityRepository = new FakeOpportunityRepository()
    saveOpportunity = new SaveOpportunityService(fakeOpportunityRepository)
  })

  it('should be able to save a opportunity', async () => {
    const savedOpportunity = await saveOpportunity.execute({
      title: 'any_title',
      currency: 'BRL',
      person_name: 'any_person_name',
      value: 150,
    })

    expect(savedOpportunity.title).toBe('any_title')
  })
})
