import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient";

const useFavouriteCheck = (title) => {
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from('favourites')
          .select('title')
          .eq('title', title);

        if (error) {
          console.error("Cannot access user favourites:", error);
        }

        // Check if data exists and has at least one entry
        if (data && data.length > 0) { 
          setIsFavourite(true);
        }
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    fetchData();
  }, [title]);

  return isFavourite;
};

export default useFavouriteCheck;