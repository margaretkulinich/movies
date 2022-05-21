import axios from "axios";
import { useEffect, useState } from "react";
import { MovieList } from "../MovieList/MovieList";
import { classes, StyledMostPopularContainer } from "./styled";
import { CustomPagination } from "../CustomPagination/CustomPagination";

export const MostPopular = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    const fetchMostPopularMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );
  
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    };

    fetchMostPopularMovies();
  }, [page]);

  if (error) return `Error: ${error.message}`;

  return (
    <StyledMostPopularContainer>
      <h2 className={classes.title}>What's Popular </h2>

      <MovieList movies={movies} />
      <CustomPagination setPage={setPage} />
    </StyledMostPopularContainer>
  )
};