import styled from 'styled-components';

export const classes = {
  actorImg: 'actor-img',
};

export const Actor = styled.div`
  display: flex;
  flex-direction: column;
  object-fit: contain;
  padding: 10px;

  .${classes.actorImg} {
    height: 100px;
    width: 80px;
    border-radius: 10px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 5px black;
  }
`;
