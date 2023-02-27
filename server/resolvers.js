import { Company, Job } from './db.js'

export const resolvers = {
  Query: {
    company: (_root, { id }) => Company.findById(id),
    job: (_root, { id }) => Job.findById(id),
    jobs: () => Job.findAll()
    // Don't need async because Job.findAll() already returns a Promise.
  },

  Company: {
    jobs: company => Job.findAll(job => job.companyId === company.id)
  },

  Job: {
    // console.log('resolving company for jobs:', job)
    company: job => Company.findById(job.companyId)
  }
}
