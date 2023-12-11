import { useState } from "react";
import Fuse from 'fuse.js';

import { Preview } from "../components/Preview";
import { useSort } from "../hooks/useSort";
import { SortOptions } from "../components/SortOptions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function PreviewsLayout(props) {
  // Handle fuse.js search
  const { shows } = props;
  const fuse = new Fuse(shows, {
    keys: [
      'title',
    ]
  });
  const [searchQuery, setSearchQuery] = useState('');
  const searchResults = fuse.search(searchQuery);

  // Fuse.js returns results as an object nested
  // inside another property under an 'item' key
  // Therefore, must move result objects up a level
  // Set to all shows if no search has been passed
  const reducedSearch = searchQuery ? searchResults.map((obj) => obj.item) : shows;

  // Sort the resulting search results. Or just sort all shows if no search.
  const [sort, setSort] = useState("none");
  const sortedShows = useSort(reducedSearch, sort);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setSort('none'); // Fuse.js sorts results by relevance.
  };

  if (!sortedShows) {
    return <FontAwesomeIcon icon={faSpinner} className="animate-spin text-gray-300 text-6xl py-12" />;
  }

  const allPreviews = sortedShows.map((show) => {
    return <Preview key={show.id} showId={show.id} genres={show.genres} />;
  });

  return (
    <section className="bg-gray-800 p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <SortOptions setSort={setSort} />
        <div className="w-[35%] bg-gray-700 relative text-gray-300 text-[0.8em]">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchQuery}
            className="indent-1 h-[98%] w-[75%] bg-gray-700 absolute right-1 top-0 border border-solid border-gray-600 rounded"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-1 top-2" />
        </div>
      </div>
      {allPreviews}
    </section>
  );
}
