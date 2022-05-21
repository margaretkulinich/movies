import styled from 'styled-components';
import { Box, Fade } from "@mui/material";
import { DARK_GREY_COLOR } from "../../utils/constants";

export const classes = {
  imgPoster: 'img-poster',
  backdropImage: 'backdrop-modal-img',
  title: 'title-modal',
  description: 'description',
  modalDescriptionContainer: 'modal-description-container',
};

export const StyledFade = styled(Fade)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledBox = styled(Box)`
  width: 75%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${DARK_GREY_COLOR};
  border: 2px solid #0000;
  border-radius: 10px;
  flex-direction: row;
  padding: 15px 5px;
  display: flex;
  box-shadow: 1px 1px 1px black;

  .${classes.imgPoster} {
    border-radius: 10px;
    object-fit: contain;
  }

  .${classes.backdropImage} {
    display: none;
    object-fit: contain;
    border-radius: 10px;
  }

  .${classes.description} {
    display: flex;
    padding: 15px;
    border-radius: 20px;
    box-shadow: inset 0 0 5px #000000;
    text-align: justify;
    color: white;
  }

  .${classes.title} {
    height: 12%;
    font-size: 3.2vw;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
  }

  .${classes.modalDescriptionContainer} {
    height: 100%;
    width: 60%;
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
    flex-direction: column;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: space-around;
    padding: 10px 10px;
    overflow-y: scroll;
    width: 90%;

    .${classes.imgPoster} {
      display: none;
    }

    .${classes.backdropImage} {
      display: flex;
      width: 100%;
    }

    .${classes.modalDescriptionContainer} {
      width: 100%;
      padding: 0;
    }

    .${classes.title} {
      font-size: 6vw;
      padding: 5px 0;
      text-align: center;
    }

    .${classes.description} {
      font-size: 18px;
      padding: 10px;
    }
  }
`;