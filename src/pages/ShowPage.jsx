import React, { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom"

// components
import Carousel from '../components/Carousel';
import EpisodesContainer from '../components/EpisodesContainer'

export default function ShowPage(){
const { id } = useParams();
const show = useLoaderData();
const [ currentSeason, setCurrentSeason ] = useState(1);


const seasonVisibilityHandler = (seasonNum) => {
  setCurrentSeason(seasonNum)
}

const seasonCards = show.seasons.map((season) => {
  return (
    <div key={season.season} onClick={() => {
      seasonVisibilityHandler(season.season)
    }} className="bg-gray h-full aspect-square text-center text-whites">
      <h2>{season.title}</h2>
      <h3>{season.episodes.length} Episodes</h3>
    </div>
  )
})

  return (
    <>
      <figure className="flex items-center h-[36vh] bg-gray text-white font-extrabold px-4 justify-around">
        <img src={show.image} alt={`${show.title} cover image`} className="h-28 shadow-[4px_4px_4px_0px_#F6F6F6]"/>
        <h1>{show.title}</h1>
      </figure>
      <p className="px-4 py-8 text-center text-sm text-gray">{show.description}</p>
      <Carousel name="Seasons" cards={seasonCards} />
      <EpisodesContainer
      season={
        {
          extractedSeason: show.seasons.filter((season) => {
        return season.season === currentSeason
      }),
      show: show.title,
      season: currentSeason}}/>
    </>
  )
}

// loaader function

export const showDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`)

  return response.json();
}