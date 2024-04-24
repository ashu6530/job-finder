import { Link } from "react-router-dom"


const Cards = ({job}) => {

 
    
  return (
    <>
    <Link to={`/jobs/${job.job_id}`}>
     <div className="bg-white rounded-lg overflow-hidden shadow-md w-full">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <img src={job.employer_logo} alt="Employer Logo" className="w-12 h-12 mr-4 rounded-full" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.employer_name}</h3>
          <p className="text-sm text-gray-600">{job.job_publisher}</p>
        </div>
      </div>
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{job.job_title}</h4>
      <p className="text-sm text-gray-600 mb-4">{job.job_city}</p>
      <p className="text-sm text-gray-700 mb-4">{job.job_description.slice(0, 350)}...</p>
    </div>
    <div className="p-6 flex justify-end border-b border-gray-200">
      <a href={job.job_apply_link} target="_blank" className="text-sm bg-nijin text-white font-semibold py-2 px-4 rounded-md hover:bg-nitro transition duration-300">Apply Now</a>
    </div>
  </div>
  </Link>
  </>


  )
}

export default Cards