import React, { useContext } from 'react';
import {
  Box,
  Header as HeaderGrommet,
  Image,
  ResponsiveContext,
} from 'grommet';

export const Header = () => {
  const size = useContext(ResponsiveContext);
  const iconSize = size === 'small' ? '192px' : '228px';
  return (
    <HeaderGrommet justify="between">
      <Box width={iconSize}>
        <Image fit="contain" src="/img/hpe-dve-lockup.svg" />
      </Box>
      <Box>links go here</Box>
    </HeaderGrommet>
  );
};
export default Header;
