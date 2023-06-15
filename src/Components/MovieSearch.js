// 'ce882053119ee2e5b4d23877bbbb5787'
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AllSearch = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchSearch = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=ce882053119ee2e5b4d23877bbbb5787`
      );
      const data = await response.data;
      setSearch(data.results);
    };

    fetchSearch();
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const renderSearch = () => {
    return search.map((search) => (
  <div className="h-24 z-50 my-3 bg-white flex ">

    <div className="w-14 h-11 pb-5 pt-1">
      <img alt={search.title} src={`https://image.tmdb.org/t/p/w200${search.poster_path}`}></img>
    </div>
    <div className="pl-3 m-auto">
      <h3 className="text-sm font-medium" 
      >{search.title}</h3>
    </div>

  </div>
    ));
  };

  return (
    <div className="  ">
      <TextField
        id="filled-search"
        label="Buscar.."
        type="search"
        variant="standard"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
      />

      <ul className="w-4/5  h-screen overflow-auto  open:overflow-y-scroll ">
        {renderSearch()}
      </ul>
    </div>
  );
};

export default AllSearch;
