import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { addJob } from "../Api";

const JobFormModal = ({ onJobAdded }) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addJob(data);
    reset();
    setIsOpen(false); // close modal after submit
    onJobAdded();
  };

  return (
    <div>
      {/* Button to open modal */}
      
      <button
  onClick={() => setIsOpen(true)}
  className="px-4 py-2 bg-blue-600 text-green-600 rounded-lg border border-green-600 hover:bg-blue-700"
>
  Add Job
</button>


      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Add New Job</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium">Job Title</label>
                <input
                  {...register("title", {
                    required: "Job Title is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="e.g. Frontend Developer"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium">Company</label>
                <input
                  {...register("company", {
                    required: "Company is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="e.g. TechCorp"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm">{errors.company.message}</p>
                )}
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  {...register("location", {
                    required: "Location is required",
                    minLength: { value: 2, message: "Minimum 2 characters" },
                  })}
                  className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="e.g. Remote"
                />
                {errors.location && (
                  <p className="text-red-500 text-sm">{errors.location.message}</p>
                )}
              </div>

              {/* Submit + Cancel */}
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-gray-400 text-red rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-blue rounded-lg hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobFormModal;
