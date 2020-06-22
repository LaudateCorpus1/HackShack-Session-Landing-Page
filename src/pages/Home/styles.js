import styled, { keyframes } from 'styled-components';
import { Box, Layer } from 'grommet';

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

const StyledLayer = styled(Layer)`
  background-color: rgba(38, 48, 64, 0.8);
  backdrop-filter: blur(15px);
`;

const StyledStack = styled(Box)`
  margin-left: 0px;
  margin-top: -80px;
  @media (min-width: 800px) {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: 1200px) {
    margin-left: -330px;
    margin-top: -200px;
  }
`;

const StyledGremlin = styled(Box)`
  width: 200px;
  margin-top: 100px;
  visibility: hidden;
  @media (min-width: 900px) {
    visibility: visible;
    height: 100%;
    width: 100%;
  }
`;

const StyledBubble = styled(Box)`
  margin-left: 290px;
  margin-bottom: 140px;
  visibility: hidden;
  @media (min-width: 900px) {
    visibility: visible;
    margin-left: 540px;
    margin-bottom: 120px;
    width: 420px;
  }
`;

const StyledTextBox = styled(Box)`
  margin-left: 470px;
  margin-bottom: 260px;
  @media (min-width: 600px) {
    margin-left: 630px;
    margin-bottom: 270px;
  }
`;

const StyledCard = styled(Box)`
  visibility: visible;
  @media (min-width: 900px) {
    visibility: hidden;
  }
`;

const StyledPlayButton = styled(Box)`
  margin-left: 290px;
  margin-bottom: 280px;
  visibility: hidden;
  @media (min-width: 900px) {
    visibility: visible;
    margin-bottom: 220px;
    margin-left: 660px;
  }
`;

const StyledBoxText = styled(Box)`
  visibility: hidden;
  @media (min-width: 800px) {
    visibility: visible;
  }
`;

const CardWrapper = styled(Box)`
  flex-direction: row;
  align-self: center;
  margin-bottom: 48px;
  margin-top: -420px;
  @media (min-width: 600px) {
    margin-top: -400px;
    flex-direction: column;
  }
  @media (min-width: 900px) {
    margin-top: -40px;
    margin-right: 140px;
    align-self: flex-end;
    flex-direction: row;
  }
  @media (min-width: 1200px) {
    margin-top: -130px;
    transform: rotate(-10deg);
    align-self: flex-end;
    flex-direction: row;
  }
  @media (min-width: 1500px) {
    margin-top: -220px;
    transform: rotate(-10deg);
    align-self: flex-end;
    flex-direction: row;
  }
`;

export {
  ButtonWrapper,
  CardWrapper,
  LogoWrapper,
  MainWrapper,
  TextWrapper,
  StyledLayer,
  StyledStack,
  StyledGremlin,
  StyledBubble,
  StyledTextBox,
  StyledBoxText,
  StyledPlayButton,
  StyledCard,
};
