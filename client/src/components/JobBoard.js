import { useState, useEffect } from 'react'
import JobList from './JobList'
import { getJobs } from '../graphql/queries'

function JobBoard() {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    getJobs().then(setJobs) // .then(jobs => setJobs(jobs))
  }, [])

  console.log('[JobBoard] jobs:', jobs)

  return (
    <div>
      <h1 className='title'>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default JobBoard
