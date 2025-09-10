import React, { useState, useEffect } from "react";
import { getJobs } from "../Api";
import JobCard from "./JobCard";

const JobList = ({ search, refresh }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 6; // Number of jobs per "Load More"

  useEffect(() => {
    fetchJobs(1, search);
    setPage(1);
  }, [search, refresh]);

  const fetchJobs = async (pageNum, searchText) => {
    const { data } = await getJobs(searchText, pageNum, limit);
    if (pageNum === 1) {
      setJobs(data.jobs);
    } else {
      setJobs((prev) => [...prev, ...data.jobs]);
    }
    setTotal(data.total);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchJobs(nextPage, search);
  };

  return (
    <div className="mt-6">
      {jobs.length === 0 && (
        <p className="text-gray-500 text-center">No jobs found</p>
      )}

      {/* Grid layout for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      {/* Load More */}
      {jobs.length < total && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="text-blue-600 hover:underline font-medium"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default JobList;
