import { useState } from 'react';
import { StyledArrowCircleUp } from './styles';

export const ScrollTopArrow = () => {
  const [showScrollTopArrow, setShowScrollTopArrow] = useState(false);
  let throttleTimer = false;

  const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout (() => {
      callback();
      
      throttleTimer = false;
    }, time);
  };

  const checkScrollTop = () => {
    if (!showScrollTopArrow && window.pageYOffset > 400) {
      setShowScrollTopArrow(true);
    } else if (showScrollTopArrow && window.pageYOffset <= 400){
      setShowScrollTopArrow(false);
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', () => {
    throttle(checkScrollTop, 200);
  });

  return (
    <StyledArrowCircleUp
      onClick={scrollTop}
      $showScrollTopArrow={showScrollTopArrow}
    />
  )
}