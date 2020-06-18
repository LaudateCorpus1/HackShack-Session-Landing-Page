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

const MainWrapper = styled(Box)`
  margin-top: 0px;
  transform: rotate(-10deg);
  @media (min-width: 900px) {
    margin-top: -200px;
  }
`;

const LogoWrapper = styled(Box)`
  width: 100%;
  max-width: 981px;
  opacity: 0;
  animation: ${slideUp} 0.5s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
  @media (min-width: 900px) {
    min-width: 600px;
  }
`;

const TextWrapper = styled(Box)`
  padding-left: 0%;
  opacity: 0;
  white-space: nowrap;
  animation: ${slideIn} 0.6s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  @media (min-width: 900px) {
    padding-left: 30%;
  }
`;

const ButtonWrapper = styled(Box)`
  padding-top: 31px;
  margin-left: 0px;
  opacity: 0;
  animation: ${slideIn} 0.3s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.7s;
  @media (min-width: 900px) {
    margin-left: -170px;
  }
`;

const CardWrapper = styled(Box)`
  flex-direction: column;
  align-self: center;
  margin: 96px 0px 0px 0px;
  @media (min-width: 900px) {
    transform: rotate(-10deg);
    margin: 0px;
    flex-direction: column;
  }
  @media (min-width: 1200px) {
    align-self: flex-end;
    flex-direction: row;
    margin: 96px 0px 96px 0px;
  }
`;

export { ButtonWrapper, CardWrapper, LogoWrapper, MainWrapper, TextWrapper };
