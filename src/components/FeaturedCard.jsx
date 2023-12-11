import React, { useState, useEffect } from "react"
import { useParams, useLoaderData, Link } from "react-router-dom"
import Carousel from "./Carousel"

// GET all shows
// Pass ID to GET show
// Search Genre for 'Featured'
//

export default function FeaturedCard(props) {
  const { id } = props
  const [featuredShow, setFeaturedShow] = useState()
  const [error, setError] = useState(null) // Add an error state

  let isFeatured = null

  useEffect(() => {
    fetch(`https://podcast-api.netlify.app/id/${id}`)
      .then((response) => response.json())
      .then((featuredShowData) => setFeaturedShow(featuredShowData))
      .catch((error) => {
        setError(error.message)
      })
  }, [])

  if (error) {
    console.log("Data fetch fail.")
  }

  if (featuredShow) {
    const genres = featuredShow.genres
    // Some shows do not have a genres array. Therefore a check has been added
    isFeatured = genres ? genres.includes("Featured") : false
  }

  return (
    <>
      {isFeatured && (
        <Link to={`/home/show/${id}`}
        className="h-full aspect-square">
          <img className="h-full" src={featuredShow.image} />
        </Link>
      )}
    </>
  )
}
