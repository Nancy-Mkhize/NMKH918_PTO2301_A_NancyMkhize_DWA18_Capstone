import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FavouritesCards from "../components/FavouritesCards";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const groupedContainers = [];

  useEffect(() => {
    const fetchFaves = async () => {
      try {
        let { data, error } = await supabase.from("favourites").select("*");
        if (error) {
          throw new Error("Failed to fetch favourites");
        }
        setFavourites(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchFaves();
  }, []);

  const grouped = favourites.reduce(function (r, a) {
    r[a.show] = r[a.show] || [];
    r[a.show].push(a);
    return r;
  }, Object.create(null));

  if (grouped) {
    for (const [key, value] of Object.entries(grouped)) {
      groupedContainers.push(
        <div key={key} className="border border-gray-700 m-4">
          {value.map((episode) => {
            return <FavouritesCards key={episode.id} data={episode} />;
          })}
        </div>
      );
    }
  }

  return (
    <>
      <Hero />
      <NavBar />
      <main className="flex justify-center items-center flex-col bg-gray-800 text-gray-300">
        {isLoading && <FontAwesomeIcon icon={faSpinner} className="animate-spin text-gray-300 text-6xl py-12" />}
        {!isLoading && favourites.length === 0 && <h1 className="text-gray-300">No favourites found.</h1>}
        {!isLoading && groupedContainers}
      </main>
    </>
  );
};

export default Favourites;
