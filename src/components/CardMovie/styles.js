import { Button, Card } from '@mui/material';
import styled from 'styled-components';
import GradeIcon from '@mui/icons-material/Grade';
import { DARK_GREY_COLOR, MAIN_BACKGROUND_COLOR, YELLOW_COLOR } from '../../utils/constants';

export const classes = {
  imgPoster: 'img-poster',
  content: 'content',
  gradeIcon: 'grade-icon',
}

export const StyledCard = styled(Card)`
  &.MuiCard-root {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    background-color: ${DARK_GREY_COLOR};
    color: white;
    margin-bottom: 10px;
    border-radius: 18px;
    position: relative;
    box-shadow: 0px 0px 4px 1px black;
  }

  .${classes.imgPoster} {
    padding: 20px 20px;
    object-fit: cover;
  }

  .${classes.content} {
    max-width: 70%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media (max-width: 375px) {
    .${classes.content} {
      font-size: 10px;
    }
  }

  @media (max-width: 767px) {
    &.MuiCard-root {
      margin: 0 10px 5px 10px;
      width: 90%;
    }
  }
`;

export const StyledGradeIcon = styled(GradeIcon)`
  font-size: 1rem !important;
  color: ${YELLOW_COLOR};
  padding-right: 3px;
`;

export const ColorButton = styled(Button)`
  &.MuiButton-root {
    color: ${MAIN_BACKGROUND_COLOR};
    background-color: ${YELLOW_COLOR};
    border-radius: 10px;
    position: absolute;
    bottom: 0;
    margin-bottom: 25px;
    box-shadow: 0px 0px 5px 2px ${MAIN_BACKGROUND_COLOR};
    
    &:hover {
      background-color: #f4c169;
    }
  }
`;

export const StyledDivider = styled.span`
  color: ${YELLOW_COLOR};
`;
