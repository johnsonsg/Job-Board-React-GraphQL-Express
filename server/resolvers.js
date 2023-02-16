import { Job } from './db.js'

export const resolvers = {
  Query: {
    jobs: () => Job.findAll()
    // Don't need async because Job.findAll() already returns a Promise.
  }
}
