import React from "react";

// Pagination component function with props | parameters
function Pagination({propPrev,propPage, propNext}) {

  // Component Handler
  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <button
          className="p-2 border-2 border-blue-500 text-blue-500 border-r-0 rounded-l-xl"
          onClick={propPrev}
        >
          Previous
        </button>
        <button className="p-2 border-2 border-blue-500 text-blue-500  bg-gray-300">
          {propPage}
        </button>
        <button
          className="p-2 border-2 border-blue-500 text-blue-500 border-l-0 rounded-r-xl"
          onClick={propNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
