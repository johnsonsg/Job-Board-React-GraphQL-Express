import { Company, Job } from './db.js'

export const resolvers = {
  Query: {
    jobs: () => Job.findAll()
    // Don't need async because Job.findAll() already returns a Promise.
  },

  Job: {
    // console.log('resolving company for jobs:', job)
    company: job => Company.findById(job.companyId)
  }
}
