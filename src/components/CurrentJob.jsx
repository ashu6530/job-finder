import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchJobs from '../jobFetch';
import { TailSpin } from 'react-loader-spinner';
const CurrentJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const fetchJobById = async () => {
      try {
        const data = await fetchJobs();
        const foundJob = data.find(job => job.job_id.toString() === id);
        if (foundJob) {
          setJob(foundJob);
        } else {
          console.error('Job not found');
        }
      } catch (error) {
        console.error('Error fetching job:', error);
      }finally{
        setLoading(false)
      }
    };

    fetchJobById();
  }, [id]);
  if (loading) {
    return <div className="flex justify-center items-center"><TailSpin/></div>; // Display a loader while data is being fetched
  }


  return (
    <div className="w-full md:flex  mt-8">
      {job && (
        <div className="mx-4 md:w-6/12 w-full">
          <div className="flex items-center mb-4">
            <img
              src={job.employer_logo}
              alt="Employer Logo"
              className="w-12 h-12 mr-4 rounded-full"
            />
            <div>
              <h1 className="text-4xl font-semibold mb-2">
                {job.employer_name}
              </h1>
              <h3 className="text-lg text-gray-600">{job.job_publisher}</h3>
            </div>
          </div>
          <h2 className="text-4xl font-semibold mb-2">
            {job.job_title}
          </h2>
          <h3 className="text-lg text-gray-600 mb-4">{job.job_city}</h3>
          <h3 className="text-lg text-gray-700 mb-4">{job.job_description}</h3>
          <h3 className="text-lg text-gray-700 mb-4">
            Country: {job.job_country}
          </h3>
          <h3 className="text-lg text-gray-700 mb-4">
            Employment Type: {job.job_employment_type}
          </h3>
          
          <h3 className="text-lg mb-4">
            Offer Expiration Date: {job.job_offer_expiration_datetime_utc}
          </h3>
          <h3 className="text-lg mb-4">
            Posted At: {job.job_posted_at_datetime_utc}
          </h3>
          <a
            href={job.job_apply_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg bg-nijin text-white font-semibold py-2 px-4 mx-2 rounded-md hover:bg-nitro transition duration-300"
          >
            Apply Now
          </a>
          <a 
            href={job.job_google_link} 
            className="text-lg bg-nijin text-white font-semibold py-2 px-4 rounded-md hover:bg-nitro transition duration-300"
          >
            Google Link 
          </a>
        </div>
      )}
      {job && ( // Conditional rendering of iframe
        <div className='w-6/12'>
          <iframe
            className='m-8'
            src={`https://maps.google.com/maps?q=${job.job_latitude},${job.job_longitude}&z=${16}&output=embed`}
            width="90%" 
            height="450" // Fixed height
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="google map"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default CurrentJob;
