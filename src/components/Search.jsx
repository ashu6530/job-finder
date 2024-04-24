import React from 'react';
import { FiSearch } from 'react-icons/fi';

const Search = ({ searchTerm, onSearchChange, onSearchSubmit }) => {
  return (
    <div className="relative mb-4 mt-4 m-4 flex items-center">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={onSearchChange}
        className="pl-10 pr-4 py-4 w-full border rounded-md focus:outline-none focus:ring-nijin focus:border-nijin transition-colors duration-300"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="text-gray-400" />
      </div>
      <button
        type="button"
        onClick={onSearchSubmit}
        className="ml-2 px-4 py-4 bg-nijin text-white rounded-md hover:bg-nitro focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
