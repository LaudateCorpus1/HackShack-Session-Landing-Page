import styled from 'styled-components';
import { Box } from 'grommet';

const ResponsiveLayout = styled(Box)`
  min-width: ${props => props.viewport.minWidth};
  min-height: ${props => props.viewport.minHeight};
`;

export { ResponsiveLayout };
