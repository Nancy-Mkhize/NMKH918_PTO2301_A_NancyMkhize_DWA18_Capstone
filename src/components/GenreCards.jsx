import Carousel from "./Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDroplet,
  faHandcuffs,
  faLandmark,
  faMasksTheater,
  faPhotoFilm,
  faArrowTrendUp,
  faRobot,
  faNewspaper,
  faChildren
} from "@fortawesome/free-solid-svg-icons";

export default function GenreCards() {
  const genresList = [
    'Personal Growth',
    'True Crime & Investigative Journalism',
    'History',
    'Comedy',
    'Entertainment',
    'Business',
    'Fiction',
    'News',
    'Kids & Family'
  ];

  const genreCards = genresList.map((genre, index) => {
    const genreIcons = [
      faHandHoldingDroplet,
      faHandcuffs,
      faLandmark,
      faMasksTheater,
      faPhotoFilm,
      faArrowTrendUp,
      faRobot,
      faNewspaper,
      faChildren
    ];

    return (
      <div
        key={index}
        className="bg-black text-center text-gray-300 font-light aspect-square h-full flex-col flex justify-center items-center"
      >
        <FontAwesomeIcon icon={genreIcons[index]} className="h-[30%]" />
        <h3 className="text-xs">{genre}</h3>
      </div>
    );
  });

  return (
    <>
      <Carousel name="Genres" cards={genreCards} />
    </>
  );
}
