import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 border hover:shadow-lg transition">
      <div>
        {/* Job Title */}
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        {/* Company */}
        <h4 className="text-lg font-semibold">{job.company}</h4>
        {/* Location */}
        <p className="text-sm text-gray-500">{job.location || "India"}</p>
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
