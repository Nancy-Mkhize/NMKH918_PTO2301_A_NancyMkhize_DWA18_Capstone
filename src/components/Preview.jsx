import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Preview = (props) => {
  const { showId, genres } = props;
  const [currentShow, setCurrentShow] = useState();

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${showId}`)
      .then((res) => res.json())
      .then((showData) => setCurrentShow(showData));
  }, [showId]);

  if (!currentShow) {
    return (
      <div
        aria-hidden="true"
        className="shadow-md bg-gray-800 h-20 w-80 m-auto"
      >
        <svg className="relative animate-pulse px-4">
          <rect x="4" y="8" className="fill-gray-300 w-16 h-16" />
          <rect x="94" y="10" className="fill-gray-300 w-48 h-3" />
          <rect x="94" y="32" className="fill-gray-300 w-48 h-3" />
          <rect x="94" y="56" className="fill-gray-300 w-48 h-3" />
        </svg>
      </div>
    );
  } else {
    const { title, seasons, image, updated } = currentShow;

    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const updateDate = new Date(updated);
    const readableDate = `
      ${updateDate.getDate()} ${months[updateDate.getMonth()]} ${updateDate.getFullYear()}
    `;

    const genreTags = genres.map((genre, index) => {
      const genresList = [
        'Featured',
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

      if (index === genres.length - 1) {
        return <span key={index}>{genresList[genre]}</span>;
      }

      return <span key={index}>{genresList[genre]}, </span>;
    });

    return (
      <Link
        to={`/home/show/${showId}`}
        className="text-gray-300 text-sm bg-black shadow-md h-24 w-[100%] flex items-center m-auto overflow-hidden"
      >
        <img src={image} alt="Podcast preview image" className="h-[70%] px-2" />
        <div className="text-left">
          <h2 className="font-bold">{title}</h2>
          <h3 className="font-light">Seasons: {seasons.length}</h3>
          <p className="font-light">Last Updated: {readableDate}</p>
          {genreTags && <p className="font-light italic line-clamp-1">{genreTags}</p>}
        </div>
      </Link>
    );
  }
};
