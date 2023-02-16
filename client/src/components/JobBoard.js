import JobList from './JobList'
import { jobs } from '../mock-data'
import { getJobs } from '../graphql/queries'

getJobs()

function JobBoard() {
  return (
    <div>
      <h1 className='title'>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default JobBoard
