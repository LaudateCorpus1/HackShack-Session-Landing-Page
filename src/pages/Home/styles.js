import styled from 'styled-components';
import { Box } from 'grommet';

export const MainWrapper = styled(Box)`
  position: relative;
  margin-top: -160px;
  transform: rotate(-10deg);
`;

export const LogoWrapper = styled(Box)`
  max-width: 981px;
  width: 100%;
`;

export const TextWrapper = styled(Box)`
  margin-top: -50px;
  padding-left: 304px;

  /* To be refined. */
  @media (max-width: 900px) {
    padding-left: 0;
    padding-right: 10px;
  }
`;

export const ButtonWrapper = styled(Box)`
  padding-top: 31px;
  margin-left: -170px;
`;

export default { MainWrapper, LogoWrapper, TextWrapper, ButtonWrapper };
