import axios from "axios";
import { useEffect, useState } from "react"
import { baseUrl } from "../../config/config";
import { MovieList } from "../MovieList/MovieList"
import { classes, StyledMoviesContainer } from "./styles";
import { GenresSelect } from "../GenresSelect/GenresSelect";
import { CustomPagination } from "../CustomPagination/CustomPagination";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numOfPage, setNumOfPage] = useState();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [genresForQueryStr, setGenresForQueryStr] = useState('');

  useEffect(() => {
    const fetchingMovies = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genresForQueryStr}&with_watch_monetization_types=free`
        );

        setMovies(data.results);
        setNumOfPage(data.total_pages);
      } catch(error) {
        setError(error);
      }
    };
    
    window.scrollTo(0, 0)
    fetchingMovies();
  }, [page, genresForQueryStr]);

  if (error) return `Error: ${error.message}`;

  return (
    <StyledMoviesContainer>
      <div className={classes.title}>
        <h2>Popular Movies</h2>
      </div>

      <section className={classes.sectionContent}>
        <div className={classes.navGenres}>
          <GenresSelect
            setPage={setPage}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
            setGenresForQueryStr={setGenresForQueryStr}
          />
        </div>
        <div>
          <MovieList movies={movies} type='movie'/>
          <CustomPagination
            setPage={setPage}
            numOfPage={numOfPage}
          />
        </div>
      </section>
    </StyledMoviesContainer>
  )
}