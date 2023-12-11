import { useRef, useState, useEffect } from "react";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

// components
import FavouriteButton from "./FavouriteButton";
import useFavouriteCheck from "../hooks/useFavouriteCheck";
import { useOutletContext } from "react-router-dom";

function SingleEpisode(props) {
  const { episode, show, season, image } = props;
  const [isPlaying, setIsPlaying, currentShow, setCurrentShow] = useOutletContext();

  // Get duration
  const [duration, setDuration] = useState("00:00");
  const ref = useRef(0);
  useEffect(() => {
    setDuration(ref.current.duration);
  }, [ref?.current?.loadedmetadata, ref?.current?.readyState]);

  const getTimeStamp = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes > 9 ? minutes : "0" + minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
  };

  // Description dropdown
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDescriptionOpen((prev) => !prev);
  };

  // handle favourites
  const isFavourite = useFavouriteCheck(`${episode.title}`);
  const data = {
    show: show,
    episode: episode,
    season: season,
  };

  // Handle Audio player
  const playAudio = () => {
    setIsPlaying(true);
    setCurrentShow({
      show: show,
      image: image,
      episodeTitle: episode.title,
      file: episode.file,
    });
  };

  return (
    <div className="flex flex-col bg-gray-800 text-gray-300 shadow-md">
      <div className="h-20 flex items-center text-sm">
        <FontAwesomeIcon
          icon={faCirclePlay}
          onClick={playAudio}
          className="w-[15%] text-2xl"
        />
        <div className="w-[70%]">
          <h1 className="font-medium">{episode.title}</h1>
          <p className="font-light">
            Episode {episode.episode} • <FavouriteButton state={isFavourite} data={data} /> •{" "}
            {duration ? getTimeStamp(duration) : "00:00"}
          </p>
        </div>
        {isDescriptionOpen ? (
          <FontAwesomeIcon icon={faAngleUp} onClick={toggleDropdown} className="w-[15%] text-xl" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} onClick={toggleDropdown} className="w-[15%] text-xl" />
        )}
      </div>
      {isDescriptionOpen && <p className="text-xs px-8 pb-4 text-justify">{episode.description}</p>}
    </div>
  );
}

export default SingleEpisode;
