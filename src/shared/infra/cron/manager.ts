import GetOpportunitiesAndInsert from '@modules/opportunities/infra/cron/GetOpportunitiesAndInsert'

class ManagerCron {
  private jobs

  constructor() {
    this.jobs = [GetOpportunitiesAndInsert]
  }

  run() {
    this.jobs.forEach(job => job.start())
  }
}

export default new ManagerCron()
