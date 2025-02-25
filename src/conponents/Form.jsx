import React from "react";

const Form = () => {
  return (
    <form className="w-full px-3">
      <div className="flex flex-col md:flex-row md:items-center gap-2">
        <div className="p-1 border-2 border-gray-500 flex items-center px-2 text-gray-500 w-full">
          <i className="ri-search-2-line text-2xl"></i>
          <input
            className="px-2 w-full outline-none"
            type="text"
            placeholder="Explore news"
          />
        </div>
        <button className="hidden md:block bg-black text-white px-4 py-2.5 md:ml-1">
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
