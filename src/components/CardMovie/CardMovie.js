import { useState } from "react";
import { ModalCard } from "../ModalCard/ModalCard";
import { getYearFromDate } from "../../helpers/helpers";
import { imgPath, unvailablePoster } from "../../config/config";
import { classes, ColorButton, StyledCard, StyledDivider, StyledGradeIcon } from "./styles";

export const CardMovie = ({
  title,
  id,
  type,
  average,
  overview,
  releaseDate,
  imgPosterPath,
  backdropModalImage
}) => {
  const image = (imgPosterPath) ? (imgPath+imgPosterPath) : unvailablePoster;
  const mediaType = (type ==='tv') ? 'TV Show' : 'Movie';
  const releaseYear = getYearFromDate(releaseDate);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  return (
    <StyledCard sx={{ width: 600}}>
      <img
        height="200"
        className={classes.imgPoster}
        src={image}
        alt={title}
      />

      <div className={classes.content}>
        <h2>{title}</h2>

        <div>
          <span>{mediaType}</span>
          <StyledDivider> | </StyledDivider>
          <span>{releaseYear}</span>
          <StyledDivider> | </StyledDivider>
          <StyledGradeIcon />
          <span>{average}</span>
        </div>

        <div>
          <ColorButton onClick={handleOpen} size="small">View Details</ColorButton>
        </div>
      </div>
      <ModalCard
        id={id}
        type={type}
        open={open}
        title={title}
        setOpen={setOpen}
        average={average}
        overview={overview}
        releaseDate={releaseYear}
        imgPosterPath={imgPosterPath}
        backdropModalImage={backdropModalImage}
      />
    </StyledCard>
  );
};
