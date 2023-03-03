import { useState, useEffect } from 'react'
import JobList from './JobList'
import { getJobs } from '../graphql/queries'

function JobBoard() {
  const [jobs, setJobs] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    getJobs()
      .then(setJobs) // .then(jobs => setJobs(jobs))
      .catch(err =>
        // .catch(err => setError(true))
        setError(true, console.error(`${err.message} ** Something Broke **`))
      )
  }, [])

  console.log('[JobBoard] jobs:', jobs)

  if (error) {
    return <p>Sorry, something went wrong.</p>
  }

  return (
    <div>
      <h1 className='title'>Job Board</h1>
      <JobList jobs={jobs} />
    </div>
  )
}

export default JobBoard
