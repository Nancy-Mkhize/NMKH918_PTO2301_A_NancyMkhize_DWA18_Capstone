import { Link, useLoaderData } from "react-router-dom"
import FeaturedCard from "./FeaturedCard";
import Carousel from "./Carousel";

const FeaturedCarousel = () => {
  const shows = useLoaderData();
  if(!shows) {
    return <h1>Loading...</h1>
  }

  const FeaturedShows = shows.map((show, index) => {
    return (
      <FeaturedCard key={index} id={show.id}/>
    )
  })

  return (
    <>
      <Carousel name='Picked for You' cards={FeaturedShows} />
    </>
  )
}

export default FeaturedCarousel