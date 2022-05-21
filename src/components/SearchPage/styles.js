import styled from 'styled-components';

export const classes = {
  searchWrapper: 'search-wrapper',
  resultCount: 'result-cout',
  moviesListContainer: 'movies-list-container',
};

export const StyledSearchPage = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .${classes.searchWrapper} {
    height: 100px;
    max-width: 30%;
    padding-left: 30px;
  }

  .${classes.resultCount} {
    color: white;
    padding-left: 10px;
  }

  .${classes.moviesListContainer} {
    padding-left: 30px;
  }

  @media (max-width: 1023px) {
    .${classes.searchWrapper} {
      max-width: 85%;
    }
  }
`;