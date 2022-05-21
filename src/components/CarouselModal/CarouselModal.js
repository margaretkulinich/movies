import axios from "axios";
import { Actor, classes } from "./styles";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { baseUrl, imgPath, unvailablePoster } from "../../config/config";

export const CarouselModal = ({ type, id }) => {
  const [credits, setCredits] = useState([]);
  const actors = credits.map((actor) => {
    return (
      <Actor>
        <img
          src={actor.profile_path ? `${imgPath}/${actor.profile_path}` : unvailablePoster}
          className={classes.actorImg}
          alt={actor?.name}
        >
        </img>
        <b>{actor?.name}</b>
      </Actor>
    )
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/${type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        
        setCredits(data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCredits();
  }, [id, type]);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={actors}
      autoPlay
    />
  );
};