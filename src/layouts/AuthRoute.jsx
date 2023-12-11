import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import NavBar from "../components/NavBar";
import AudioPlayer from "../components/AudioPlayer";

import Hero from '../components/Hero'
import GenreCards from '../components/GenreCards'
import PreviewsLayout from '../layouts/PreviewsLayout'
import FeaturedCarousel from '../components/FeaturedCarousel'

function AuthRoute() {
  const [auth] = useContext(AuthContext);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentShow, setCurrentShow] = useState(null);
  const [podCastData, setPodCastData] = useState([])


  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("../", { replace: true });
    }
  }, [auth]);

  // Loader function to fetch data
  const fetchShowsData = async () => {
    try {
      const response = await fetch("https://podcast-api.netlify.app/shows");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      // Assuming the API response is an array of shows and you want to set the first show as currentShow
      if (data.length > 0) {
        setPodCastData(data)
        setCurrentShow(data[0]);
      }
    } catch (error) {
      console.error("Error fetching shows data:", error);
    }
  };

  useEffect(() => {
    fetchShowsData();
  }, []);

  return (
    <>
      <NavBar />

      <Hero />
      <FeaturedCarousel/>
      <GenreCards />
      <PreviewsLayout shows={podCastData}/>

      <Outlet context={[isPlaying, setIsPlaying, currentShow, setCurrentShow]} />
      {isPlaying && currentShow && (
        <AudioPlayer
          image={currentShow.image}
          title={currentShow.title} // Assuming 'title' is the property you want
          episodeTitle={currentShow.episodeTitle}
          audioSource={currentShow.file}
        />
      )}
    </>
  );
}

export default AuthRoute;

// loader function to fetch data

export const showsLoader = async () => {
  const response = await fetch("https://podcast-api.netlify.app/shows")
  return response.json()
}