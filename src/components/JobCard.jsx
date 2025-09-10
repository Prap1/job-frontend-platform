import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobCard = ({ job }) => {
  const handleApply = () => {
    toast.success("Successfully submitted!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 border hover:shadow-lg transition">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        <h4 className="text-lg font-semibold">{job.company}</h4>
        <p className="text-sm text-gray-500">{job.location || "India"}</p>
      </div>

      <div className="flex gap-3 mt-5">
        <button
          onClick={handleApply}
          className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
        >
          Apply Now
        </button>
      </div>

      {/* Toast container lives here, local to JobCard */}
      <ToastContainer />
    </div>
  );
};

export default JobCard;
