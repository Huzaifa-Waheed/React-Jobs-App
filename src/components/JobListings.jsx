import React from "react";

import JobListing from "./JobListing";
import { TbWashDryP } from "react-icons/tb";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchJobs = async () => {
      try{
        const response = await fetch("http://localhost:5000/jobs");
        const data = await response.json();
        console.log(data);
        setJobs(data);
        setLoading(false);
        
      }catch(error){
        console.log(error);
      }
    };
    fetchJobs();
  }, []);

  const recentJobs = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentJobs.map((job, index) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListings;
