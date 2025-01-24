import React, { useEffect } from 'react'
import "./Banner.css";
import categories, { getMovies } from '../api';

function Banner() {
    const [movie, setMovie] = React.useState({});
    const fetchRandomMovie = async () => {
        try {
            const netflixOriginalsCategory = categories.find(
                (category) => category.name === "netflixOriginals"
            )
            const data = await getMovies(netflixOriginalsCategory.path)
            const movies = data?.results;
            const randomIndex = Math.floor(Math.random() * data.results.length)
            setMovie(data?.results[randomIndex])
        } catch (error) {
            console.log("Banner fetchRandomMovie error: ", error)
        }
    };

    useEffect(() => {
        fetchRandomMovie()
    }, [])
    
  return <header className='banner-container' style={{
     backgroundSize: "cover",
     backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
     groundPosition: "center-center",
  }}> </header>

}

export default Banner