import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const TvRanking = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [tvShows, setTvShows] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTvShows = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/tv/popular',
          {
            params: {
              api_key: 'ce882053119ee2e5b4d23877bbbb5787',
              page: page,
            },
          }
        );

        setTvShows((prevTvShows) => [...prevTvShows, ...response.data.results]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching TV shows:', error);
      }
    };

    fetchTvShows();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    

    <div onScroll={handleScroll}>

    <h2 className='text-center text-4xl font-extrabold'>Series Populares</h2>
    <div className='overflow-y-scroll h-96'>
    <div
    className='m-3 p-3 grid grid-cols-4 gap-3 gap-y-7 '>

    {tvShows.map((tvShows) => (
    <Card sx={{ maxWidth: 345 }}  key={tvShows.id}
    onClick={() => {
      if (selectedId === tvShows.id) {
        setSelectedId(null);
      } else {
        setSelectedId(tvShows.id);
      }
    }}
     >
    <CardActionArea>
      <CardMedia
        component="img"
        
        image={`https://image.tmdb.org/t/p/w200${tvShows.poster_path}`}
        alt={tvShows.title}
        className='h-48 w-4'
       
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {tvShows.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>Release Date: {tvShows.release_date}</p>
        <p>Vote Average: {tvShows.vote_average}</p>
        </Typography>
        {selectedId === tvShows.id && <p className="text-xs">{tvShows.overview}</p>}
      </CardContent>
    </CardActionArea>
  </Card>
    ))}
    {isLoading && <p>Loading...</p>}

    </div>
    </div>
    
  </div>
  );
};

export default TvRanking;
