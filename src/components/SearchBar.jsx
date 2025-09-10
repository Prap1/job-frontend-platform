import React from "react";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search jobs by title or company..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded-lg focus:ring focus:ring-blue-200"
      />
    </div>
  );
};

export default SearchBar;
