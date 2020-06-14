import styled, { keyframes } from 'styled-components';
import { Box } from 'grommet';

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const StyledCard = styled(Box)`
  opacity: 0;
  animation: ${slideIn} 0.8s ease-out;
  animation-fill-mode: forwards;
  animation-delay: 0.25s;
  min-width: 336px;
  max-width: 576px;
`;

export { StyledCard };
