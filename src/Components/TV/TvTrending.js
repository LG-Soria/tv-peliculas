// 'ce882053119ee2e5b4d23877bbbb5787'
import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TvTrending = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/tv/week",
          {
            params: {
              api_key: "ce882053119ee2e5b4d23877bbbb5787",
              page: page,
            },
          }
        );

        setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollLeft, clientWidth, scrollWidth } = event.target;

    if (scrollLeft + clientWidth === scrollWidth) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="bg-[#001d33] pb-3"  >
      <h2 className='text-center text-[#cdf9ef] text-4xl font-extrabold m-8 mt-0 pt-6 underline'>
        Top Trending Series
      </h2>

      <ul>
      <Carousel >
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className="text-[#ebf6ff]  flex p-5 justify-center mb-6  ">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="m-1"
            />   
            
            <div className="flex flex-col justify-start  w-7/12 p-2 pb-6">
            <h3 className=' text-[#cdf9ef] text-2xl font-extrabold m-1 underline'>{movie.title}</h3>
            <p className="text-base m-auto">Description:<br></br> {movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Community Score: {movie.vote_average}</p>
            {movie.video && (
              <iframe
                width="560"
                height="315"
                src={`https://api.themoviedb.org/3/movie/${movie.id}/videos`}
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
            </div>
          </li>
        ))}
        {isLoading && <li>Loading...</li>}
        </Carousel>
      </ul>
    </div>
  );
};

export default TvTrending;
