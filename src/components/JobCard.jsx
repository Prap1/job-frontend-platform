import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 border hover:shadow-lg transition">
     
      <div className="flex items-center space-x-3">
        
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
          {job.company[0]} 
        </div>
        <div>
          <h4 className="text-lg font-semibold">{job.company}</h4>
          <p className="text-sm text-gray-500">{job.location || "India"}</p>
        </div>
      </div>

      
      <div className="flex gap-3 mt-5">
        <button
          onClick={() => alert("Successfully submitted!")}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobCard;
