import styled from 'styled-components';
import { Box } from 'grommet';

export const MainWrapper = styled(Box)`
  position: relative;
  min-width: 800px;
  max-width: 800px;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;

export const LogoWrapper = styled(Box)`
  position: absolute;
  top: -132px;
  right: 37%;
`;

export const TextWrapper = styled(Box)`
  transform: rotate(-10deg);
  position: absolute;
  top: 219px;
  left: 0;
  white-space: nowrap;
`;

export const ButtonWrapper = styled(Box)`
  transform: rotate(-10deg);
  position: absolute;
  top: 449px;
  left: -5%;
`;

export default { MainWrapper, LogoWrapper, TextWrapper, ButtonWrapper };
