/* eslint-disable react/prop-types */
import { useState } from 'react';

const ExpensFilter = ({ filter }) => {
  const [filterCategory, setFilterCategory] = useState("");

  const handleFilter = () => {
    if (filterCategory.trim() !== "") {
      filter(filterCategory);
    }
  
  };

  return (
    <div className="flex items-center justify-center mt-3  max-sm:mt-8 ml-1">
      <input
        type="text"
        placeholder="Enter category to filter"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="border border-gray-300 rounded-md py-2 px-4 mr-2"
      />
      <button
        onClick={handleFilter}
        className=" bg-slate-950 text-white px-4 py-2 rounded-md"
      >
        Filter
      </button>
    </div>
  );
};

export default ExpensFilter;
