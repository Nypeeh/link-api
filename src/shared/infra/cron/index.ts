import 'reflect-metadata'
import 'dotenv/config'
import managerCron from '../cron/manager'

managerCron.run()
console.log('CRON STARTED')
