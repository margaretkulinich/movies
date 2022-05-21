import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import { MovieList } from "../MovieList/MovieList";
import { classes, StyledTVShowsContainer } from "./styles";
import { GenresSelect } from "../GenresSelect/GenresSelect";
import { CustomPagination } from "../CustomPagination/CustomPagination";

export const TVShows = () => {
  const [tvShows, setTvShows] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numOfPage, setNumOfPage] = useState();
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [genresForQueryStr, setGenresForQueryStr] = useState('');

  useEffect(() => {
    const fetchingTVShows = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}&with_genres=${genresForQueryStr}&with_watch_monetization_types=free`
        );
        
        setTvShows(data.results);
        setNumOfPage(data.total_pages);
      } catch(error) {
        setError(error);
      }
    }
    
    window.scrollTo(0, 0);
    fetchingTVShows();
  }, [page, genresForQueryStr]);

  if (error) return `Error: ${error.message}`;

  return (
    <StyledTVShowsContainer>
      <div className={classes.title}>
        <h2>Popular TV Shows</h2>
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
          <MovieList movies={tvShows} type='tv'/>
          <CustomPagination
            setPage={setPage}
            numOfPage={numOfPage}
          />
        </div>
      </section>
    </StyledTVShowsContainer>
  )
};
