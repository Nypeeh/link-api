import { Router } from 'express'
import { OpportunitiesController } from '../controllers/OpportunitiesController'

export const opportunitiesRouter = Router()

const opportunitiesController = new OpportunitiesController()

opportunitiesRouter.get('/', opportunitiesController.index)
