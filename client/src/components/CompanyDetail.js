import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getCompany } from '../graphql/queries'
import JobList from './JobList'
// import { companies } from '../mock-data'

function CompanyDetail() {
  const [company, setCompany] = useState('')
  const { companyId } = useParams()

  useEffect(() => {
    getCompany(companyId).then(setCompany)
  }, [companyId])

  // Show loading placeholder
  if (!company) {
    return <p>Loading...</p>
  }

  // const company = companies.find(company => company.id === companyId)
  return (
    <div>
      <h1 className='title'>{company.name}</h1>
      <div className='box'>{company.description}</div>
      <h5 className='title is-5'>Jobs at {company.name}</h5>
      <JobList jobs={company.jobs} />
    </div>
  )
}

export default CompanyDetail
