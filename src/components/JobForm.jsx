import React from "react";
import { useForm } from "react-hook-form";
import { addJob } from "../Api";

const JobForm = ({ onJobAdded }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addJob(data);
    reset();
    onJobAdded();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white rounded-lg shadow-md space-y-4"
    >
      {/* Job Title */}
      <div>
        <label className="block text-sm font-medium">Job Title</label>
        <input
          {...register("title", {
            required: "Job Title is required",
            minLength: {
              value: 2,
              message: "Job Title must be at least 2 characters",
            },
          })}
          className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="e.g. Frontend Developer"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label className="block text-sm font-medium">Company</label>
        <input
          {...register("company", {
            required: "Company is required",
            minLength: {
              value: 2,
              message: "Company must be at least 2 characters",
            },
          })}
          className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="e.g. TechCorp"
        />
        {errors.company && (
          <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          {...register("location", {
            required: "Location is required",
            minLength: {
              value: 2,
              message: "Location must be at least 2 characters",
            },
          })}
          className="mt-1 block w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
          placeholder="e.g. Remote"
        />
        {errors.location && (
          <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-black rounded-lg hover:bg-green-700"
      >
        Add Job
      </button>
    </form>
  );
};

export default JobForm;
