import { useEffect, useState } from "react"
import { supabase } from '../supabaseClient'

// Use UseEffect
// Get a new state status
// If status is false => Delete in database (Will need episode title)
// If status is true => Add to database (Will need episode)
// Return SOMETHING

const useFavouritesUpdate = (status, episode, show, season) => {
  const { title, file } = episode;
  const [updateError, setUpdateError] = useState(null);

  useEffect(() => {
    const deleteFave = async () => {
      try {
        const { error } = await supabase
          .from('favourites')
          .delete()
          .eq('title', title);

        if (error) {
          setUpdateError(error);
        }
      } catch (error) {
        console.error('Error while deleting favourite:', error);
        setUpdateError(error.message);
      }
    };

    const addToFaves = async () => {
      try {
        const { data, error } = await supabase
          .from('favourites')
          .insert([{
            'show': show,
            'season': season,
            'episode': episode.episode,
            'file': file,
            'title': title
          }])
          .select()

        if (error) {
          setUpdateError(error);
        }
      } catch (error) {
        console.error('Error while adding to favourites:', error);
        setUpdateError(error.message);
      }
    };

    if (!status) {
      deleteFave();
    } else {
      addToFaves();
    }
  }, [status, episode, show, title, season, file]);

  return updateError ? updateError : 'Success!';
};

export default useFavouritesUpdate;
