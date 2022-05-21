import axios from "axios";
import { baseUrl } from "../config/config";
import { useEffect, useState } from "react";

export const useMovieRequest = (searchValue) => {
  const [moviesData, setMoviesData] = useState({
    movies: [],
    totalResults: 0,
    type: '',
  });

  const getMovieRequest = async (searchValue) => {
    if (searchValue) {
      try {
        const { data } = await axios.get(
          `${baseUrl}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${searchValue}`
        );

        setMoviesData({
          movies: data.results,
          totalResults: data.total_results,
          type: data.results.media_type,
        });
      } catch (err) {
        console.log(err);
      }
    }

    if (!searchValue) {
      try {
        const { data } = await axios.get(
          `${baseUrl}/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
        );

        setMoviesData({
          movies: data.results,
          totalResults: data.total_results,
          type: data.results.media_type,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return moviesData;
};
