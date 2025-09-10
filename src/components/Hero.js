import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = ({ setSearch }) => {
  return (
    <div className="text-center py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
        No. 1 Job Hunt Website
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        Search, Apply & <br />
        Get Your{" "}
        <span className="text-purple-600">Dream Jobs</span>
      </h1>

      <p className="text-gray-600 mb-8 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid aspernatur temporibus nihil tempora dolor!
      </p>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="flex w-full max-w-xl rounded-full shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-5 py-3 outline-none text-gray-700"
          />
          <button className="bg-purple-600 text-white px-6 flex items-center justify-center hover:bg-purple-700 transition">
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
