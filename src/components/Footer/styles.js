import styled from 'styled-components';
import { Anchor, Box } from 'grommet';

export const StyledAnchor = styled(Anchor)`
  text-decoration: none;
`;

export const FooterContainer = styled(Box)`
  white-space: nowrap;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default { StyledAnchor, FooterContainer };
