import React, { useState } from "react";

function Pagination() {
  let [page, setPage] = useState(1);
  const next = () => {
    setPage(page + 1);
  };
  const prev = () => {
    page > 1 ? setPage(page - 1) : (page = 1);
  };

  return (
    <>
      <div className="w-full flex justify-center mb-8">
        <button
          className="p-2 border-2 border-blue-500 text-blue-500 border-r-0 rounded-l-xl"
          onClick={prev}
        >
          Previous
        </button>
        <button className="p-2 border-2 border-blue-500 text-blue-500  bg-gray-300">
          {page}
        </button>
        <button
          className="p-2 border-2 border-blue-500 text-blue-500 border-l-0 rounded-r-xl"
          onClick={next}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
