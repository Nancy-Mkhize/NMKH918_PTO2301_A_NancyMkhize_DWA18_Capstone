import SingleEpisode from "./SingleEpisode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function EpisodesContainer(props) {
  const { season: { show, image, extractedSeason, season } } = props;

  if (!extractedSeason[0]) {
    return (
      <FontAwesomeIcon
        icon={faSpinner}
        className="animate-spin text-gray-300 text-6xl py-12"
      />
    );
  }

  const seasonEpisodes = extractedSeason[0].episodes;
  const episodeCards = seasonEpisodes.map((episode) => {
    return (
      <SingleEpisode
        key={episode.episode}
        episode={episode}
        show={show}
        image={extractedSeason[0].image}
        season={season}
      />
    );
  });

  return (
    <>
      <div className="flex flex-col gap-2 p-4 bg-black text-gray-300">
        {episodeCards}
      </div>
    </>
  );
}
