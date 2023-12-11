import { useState, useEffect } from "react";
import useFavouritesUpdate from "../hooks/useFavouritesUpdate";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as FaHeart } from "@fortawesome/free-regular-svg-icons";

function FavouriteButton(props) {
  const { state, data } = props;
  const [isFavourite, setIsFavourite] = useState(state);
  const updateFavourites = useFavouritesUpdate(isFavourite, data.episode, data.show, data.season);

  useEffect(() => {
    setIsFavourite(state);
  }, [state]);

  const toggleFavourite = async () => {
    setIsFavourite((prev) => {
      return !prev;
    });
  };

  return (
    <>
      {isFavourite ? (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={toggleFavourite}
          className="text-gray-300 active:animate-ping"
        />
      ) : (
        <FontAwesomeIcon
          icon={FaHeart}
          onClick={toggleFavourite}
          className="text-gray-300 active:animate-ping"
        />
      )}
    </>
  );
}

export default FavouriteButton;
