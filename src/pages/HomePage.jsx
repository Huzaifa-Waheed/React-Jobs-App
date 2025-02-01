import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import HomeCards from '../components/HomeCards'
import ViewAllJobs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <JobListings />
        <ViewAllJobs />
    </>
  )
}

export default HomePage