import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import GenreCards from '../components/GenreCards'
import PreviewsLayout from '../layouts/PreviewsLayout'

import { useLoaderData } from 'react-router-dom'
import FeaturedCarousel from '../components/FeaturedCarousel'

export default function Home() {
const shows = useLoaderData();
  return (
    <>
      <Hero />
      <FeaturedCarousel/>
      <GenreCards />
      <PreviewsLayout shows={shows}/>
    </>
  )
  }

