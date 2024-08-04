import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onSearch, onSort }) => {
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      onSearch(e.target.value);
    } else if (e.target.value.length < 3) {
      onSearch(''); // Reset search if fewer than 3 characters
    }
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between py-4 mx-5 md:mx-0">
        <div className="sm:pl-5 md:pl-32 flex">
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
            className="border border-gray-400 rounded-sm w-auto"
          />
          <button className="bg-custom-blue px-3">
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
          <select onChange={handleSortChange} className="w-full sm:w-64 text-sm  border border-gray-400 rounded-sm">
            <option className="text-sm" value="sort by">
              Sort by
            </option>
            <option className="text-sm" value="yearAsc">
              Sort by year in ascending order
            </option>
            <option className="text-sm" value="yearDesc">
              Sort by year in descending order
            </option>
            <option className="text-sm" value="titleAsc">
              Sort by title in ascending order
            </option>
            <option className="text-sm" value="titleDesc">
              Sort by title in descending order
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
