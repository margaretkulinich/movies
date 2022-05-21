import { useParams } from "react-router-dom";
import { MovieList } from "../MovieList/MovieList";
import { classes, StyledSearchPage } from "./styles";
import { SearchInput } from "../SearchInput/SearchInput";
import { useMovieRequest } from "../../hooks/useMovieRequest";

export const SearchPage = () => {
    let { searchValue } = useParams();
    const fetchMoviesData = useMovieRequest(searchValue);

    return (
        <StyledSearchPage>
            <section className={classes.searchWrapper}>
                <SearchInput 
                    isLiveSearching={true}
                    initialValue={searchValue ? searchValue : ''}
                />
                <h3 className={classes.resultCount}>{fetchMoviesData.totalResults} films match your search</h3>
            </section>
            <section className={classes.moviesListContainer}>
                <MovieList movies={fetchMoviesData.movies} />
            </section>
        </StyledSearchPage>
    )
};
//PAGINATION
