import styled from 'styled-components';

export const classes = {
  title: 'title',
};

export const StyledMostPopularContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .${classes.title} {
    color: white;
  }
`;