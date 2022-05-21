import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';
import { classes, StyledBox, StyledFade} from "./styles";
import { CarouselModal } from '../CarouselModal/CarouselModal';
import { baseUrl, imgPathModal, unvailablePoster } from '../../config/config';

export const ModalCard = ({ 
  id,
  type,
  open,
  setOpen,
  imgPosterPath,
  title,
  overview,
  releaseDate,
  backdropModalImage
}) => {
  const [movieTrailer, setMovieTrailer] = useState('');
  const image = (imgPosterPath) ? (imgPathModal+imgPosterPath) : unvailablePoster;
  const backdropImage = backdropModalImage ? imgPathModal+backdropModalImage : unvailablePoster;

  useEffect(() => {
    const fetchingVideoTrailer = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/${type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );

        setMovieTrailer(data.results[0]?.key);
      } catch(error) {
        console.log(error);
      }
    };
  
    fetchingVideoTrailer();
  }, [id, type]);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
    >
      <StyledFade in={open}>
        <StyledBox>
          <img
            height="470"
            className={classes.imgPoster}
            src={image}
            alt={title}
          />
          <img
            className={classes.backdropImage}
            src={backdropImage}
            alt={title}
          />
          <div className={classes.modalDescriptionContainer}>
            <span className={classes.title}>{title} ({releaseDate})</span>
            <span className={classes.description}>{overview}</span>

            <div>
              <CarouselModal 
                type={type}
                id={id}
              />
            </div>
            
            <Button
              variant="contained"
              startIcon={<YouTubeIcon />}
              color="secondary"
              target="__blank"
              href={`https://www.youtube.com/watch?v=${movieTrailer}`}
            >
              Watch the Trailer
            </Button>
          </div>
        </StyledBox>
      </StyledFade>
    </Modal>
  )
};