import React, { useContext } from 'react';
import {
  Box,
  Button,
  Header as HeaderGrommet,
  Image,
  ResponsiveContext,
} from 'grommet';

export const Header = () => {
  const size = useContext(ResponsiveContext);
  const iconSize = size === 'small' ? '192px' : '228px';
  return (
    <HeaderGrommet justify="between" align="center">
      <Box width={iconSize}>
        <Image fit="contain" src="/img/hpe-dve-lockup.svg" />
      </Box>
      {size === 'small' && (
        <Box
          background="white"
          round="1px"
          width="36px"
          height="36px"
          margin="medium"
        >
          <Button />
        </Box>
      )}
    </HeaderGrommet>
  );
};
export default Header;
