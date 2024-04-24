import Cards from "./Cards";
import React, { useEffect, useState } from "react";
import fetchJobs from "../jobFetch";
import Search from "./Search";
import { TailSpin } from "react-loader-spinner";
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobsDetail = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setLoading(false); // Set loading to false when data fetching is complete
      }
    };

    fetchJobsDetail();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const filtered = jobs.filter(job =>
      job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  if (loading) {
    return <div className="flex justify-center items-center"><TailSpin/></div>; // Display a loader while data is being fetched
  }

  return (
    <div className="">
      <Search 
        searchTerm={searchTerm} 
        onSearchChange={handleSearchChange} 
        onSearchSubmit={handleSearchSubmit}
      />
      {filteredJobs.map((job) => (
        <div className="mb-4" key={job.job_id}>
          <Cards job={job} />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
