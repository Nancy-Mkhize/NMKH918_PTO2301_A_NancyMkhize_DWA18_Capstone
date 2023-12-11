import { useState } from "react";

export const SortOptions = (props) => {
  const { setSort } = props;

  const handleSortAlphaDes = () => {
    setSort("Z-A");
  };
  const handleSortAlphaAsc = () => {
    setSort("A-Z");
  };
  const handleSortDateDes = () => {
    setSort("newest");
  };
  const handleSortDateAsc = () => {
    setSort("oldest");
  };

  return (
    <div
      className="text-gray-300 border-solid border-[1px] bg-gray-800 divide-x divide-[1px] divide-gray-500
      flex items-center text-[0.8em] w-max">
      <button onClick={handleSortAlphaAsc} className="p-1">
        A — Z
      </button>
      <button onClick={handleSortAlphaDes} className="p-1">
        Z — A
      </button>
      <button onClick={handleSortDateDes} className="p-1">
        Newest
      </button>
      <button onClick={handleSortDateAsc} className="p-1">
        Oldest
      </button>
    </div>
  );
};
