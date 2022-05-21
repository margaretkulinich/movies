import { CardMovie } from "../CardMovie/CardMovie";
import { StyledContentContainer } from "./styles";
import { createContext } from "react";

export const MovieContext = createContext(null);

export const MovieList = ({ movies, type } ) =>  {
  return (
    <StyledContentContainer>
      {movies.map((mov) => {
        return (
          <CardMovie
            key={mov.id}
            id={mov.id}
            overview={mov.overview}
            average={mov.vote_average}
            title={mov.title || mov.name}
            imgPosterPath={mov.poster_path}
            type={mov.media_type || type}
            releaseDate={mov.release_date || mov.first_air_date}
            backdropModalImage={mov.backdrop_path}
          />
        )
      })}
    </StyledContentContainer>
  )
};
