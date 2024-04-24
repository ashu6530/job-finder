import React, { useEffect, useState } from 'react'
import fetchJobs from '../jobFetch';
import { TailSpin } from 'react-loader-spinner';
const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchJobsDetail = async () => {
          const data = await fetchJobs();
          if (data) {
            setCompanies(data)
          }
        };
        setLoading(false)
    
        fetchJobsDetail();
      }, []);
      if (loading) {
        return <div className="flex justify-center items-center"><TailSpin/></div>; // Display a loader while data is being fetched
      }
     
  return (
    <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map(company => (
          <div key={company.job_id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img src={company.employer_logo} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{company.employer_name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Companies