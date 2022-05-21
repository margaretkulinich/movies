import styled from 'styled-components';

export const classes = {
  sectionContent: 'section-content',
  navGenres: 'nav-genres',
  title: 'title',
}

export const StyledTVShowsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  .${classes.title} {
    color: white;
    padding-left: 30px;
  }

  .${classes.sectionContent} {
    width: 100%;
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
  }

  .${classes.navGenres} {
    margin-right: 30px;
  }

  @media (max-width: 1023px) {
    .${classes.sectionContent} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .${classes.title} {
      text-align: center;
    }
  };
`;
