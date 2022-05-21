import { ArrowCircleUp } from '@mui/icons-material';
import styled from 'styled-components';

export const StyledArrowCircleUp = styled(ArrowCircleUp)`
  font-size: 40px !important;
  display: ${({ $showScrollTopArrow }) => $showScrollTopArrow ? 'flex' : 'none'} !important;
  color: grey;
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1000;
  transition: opacity 0.2s ease-out;
  opacity: 0.5;
  cursor: pointer;
`;