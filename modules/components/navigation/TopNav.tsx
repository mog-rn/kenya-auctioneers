import React from "react";
import { SearchIcon, FilterIcon, StarIcon } from "@heroicons/react/outline";

const TopNav = () => {
  return (
    <div className="h-auto shadow-md p-5">
      <div className="mx-20 flex items-center justify-between">
        {/* Logo */}
        <div>Kenyan Auctioneers</div>
        <div>
          <input
            type="text"
            placeholder="Search for an auction"
            className="border-gray-400 border-2 h-10 w-96"
          />
        </div>
        <div className="flex space-x-6 items-center">
          <div className="flex space-x-3">
            <FilterIcon className="h-6 w-6" />
            <h1>Filter</h1>
          </div>
          <div>
            <button className="px-4 py-2 border-2 border-black rounded-lg">
              Sign in
            </button>
          </div>
          <div>
            <StarIcon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;