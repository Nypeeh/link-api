import { Router } from 'express'
import { opportunitiesRouter } from '@modules/opportunities/infra/http/routes/opportunities.routes'

export const routes = Router()

routes.use('/opportunities', opportunitiesRouter)
