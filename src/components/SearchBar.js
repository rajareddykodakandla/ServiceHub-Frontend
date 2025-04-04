import React from 'react';

const SearchBar = () => {
  return (
    <div className="mt-6 flex justify-center">
      <input
        type="text"
        placeholder="What service do you need?"
        className="border border-gray-300 rounded-l px-4 py-2 w-1/3 mr-2"
      />
      <input
        type="text"
        placeholder="Your location"
        className="border border-gray-300 px-4 py-2 w-1/5"
      />
      <button className="bg-blue-600 text-white px-6 py-2 rounded-r">Search</button>
    </div>
  );
};

export default SearchBar;
