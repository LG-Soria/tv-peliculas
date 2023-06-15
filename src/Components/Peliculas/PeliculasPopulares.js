// 'ce882053119ee2e5b4d23877bbbb5787'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PeliculasPopulares = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [peliculasPopular, setPeliculasPopular] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);


  

  useEffect(() => {
    const fetchPeliculasPopular = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: "ce882053119ee2e5b4d23877bbbb5787",
              page: page,
            },
          }
        );

        setPeliculasPopular((prevPeliculasPopular) => [
          ...prevPeliculasPopular,
          ...response.data.results,
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Movies:", error);
      }
    };

    fetchPeliculasPopular();
  }, [page]);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target;

    if (scrollTop + clientHeight === scrollHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div onScroll={handleScroll}>
      <h2 className="text-center text-4xl font-extrabold m-4">
        Peliculas Populares
      </h2>

      <div className="overflow-y-scroll h-[600px]">
        <div className="m-3 p-3 grid grid-cols-4 gap-3 gap-y-7 ">
          {peliculasPopular.map((peliculasPopular) => (
            <Card
              sx={{ maxWidth: 345 }}
              key={peliculasPopular.id}
              onClick={() => {
                if (selectedId === peliculasPopular.id) {
                  setSelectedId(null);
                } else {
                  setSelectedId(peliculasPopular.id);
                }
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w200${peliculasPopular.poster_path}`}
                  alt={peliculasPopular.title}
                  className="h-48 px-2 bg-cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {peliculasPopular.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <p>Release Date: {peliculasPopular.release_date}</p>
                    <p>Vote Average: {peliculasPopular.vote_average}</p>
                  </Typography>

                  {selectedId === peliculasPopular.id && <p className="text-xs">{peliculasPopular.overview}</p>}
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

export default PeliculasPopulares;
