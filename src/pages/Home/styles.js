import styled, { keyframes } from 'styled-components';
import { Box } from 'grommet';

const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-10px) scale(1.1);
  }

  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const MainWrapper = styled(Box)`
  position: relative;
  margin-top: -160px;
  transform: rotate(-10deg);
`;

export const LogoWrapper = styled(Box)`
  max-width: 981px;
  width: 100%;
  opacity: 0;
  animation: ${slideUp} 0.5s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
`;

export const TextWrapper = styled(Box)`
  margin-top: -50px;
  padding-left: 304px;
  opacity: 0;

  animation: ${slideIn} 0.6s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;

  /* To be refined. */
  @media (max-width: 900px) {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const ButtonWrapper = styled(Box)`
  padding-top: 31px;
  margin-left: -170px;
  opacity: 0;

  animation: ${slideIn} 0.3s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;
`;

export default { MainWrapper, LogoWrapper, TextWrapper, ButtonWrapper };
