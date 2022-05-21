import styled from 'styled-components';
import { DARK_GREY_COLOR, YELLOW_COLOR } from '../../utils/constants';

export const classes = {
  logo: 'logo',
  logoIcon: 'logo-icon',
  navLink: 'navigation-link',
};

export const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  background-color: ${DARK_GREY_COLOR};
  padding: 7px 25px;
  position: fixed;
  z-index: 100;
  box-shadow: 0px -3px 15px black;

  .${classes.logo} {
    color: ${YELLOW_COLOR};
    font-size: 3.4vw;
    font-family: 'Bebas Neue';
    text-decoration: none;
    text-shadow: 1px 1px 3px black;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .${classes.logoIcon} {
    color: ${YELLOW_COLOR};
    font-size: 3vw;
    display: block;
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: 1023px) {
    padding: 5px 5px;

    .${classes.logo} {
      font-size: 3vw;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-right: 30px;
  
  .${classes.navLink} {
    text-decoration: none;
    color: white;
    font-size: 1.7vw;
    font-family: Helvetica;
    font-weight: 500;
    text-shadow: 1px 1px 1px black;
    margin-right: 20px;

    &:hover {
      opacity: 0.8;
    }
  }

  @media (max-width: 375px) {
    margin-right: 0;

    .${classes.navLink} {
      font-size: 3.5vw;
      margin-right: 5px;
    }
  }

  @media (min-width: 376px) and (max-width: 1023px) {
    .${classes.navLink} {
      font-size: 2vw;
      margin-right: 10px;
    }
  }
`;

