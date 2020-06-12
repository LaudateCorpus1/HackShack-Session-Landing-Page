import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Text,
  Header as HeaderGrommet,
  Image,
  ResponsiveContext,
  Anchor,
} from 'grommet';
import { Menu } from 'grommet-icons';

export const Header = ({ setLayer }) => {
  const size = useContext(ResponsiveContext);
  const iconSize = size === 'small' ? '192px' : '228px';

  useEffect(() => {
    if (size !== 'small') setLayer(false);
  }, [size, setLayer]);

  return (
    <HeaderGrommet pad="medium" justify="between" align="center">
      <Anchor href="https://www.hpe.com/us/en/discover.html" target="_blank">
        <Box width={iconSize}>
          <Image fit="contain" src="/img/hpe-dve-lockup.svg" />
        </Box>
      </Anchor>
      {size === 'small' && (
        <Box direction="row" align="center">
          <Text color="#FFFFFF">MENU</Text>
          <Button icon={<Menu />} onClick={() => setLayer(true)} />
        </Box>
      )}
    </HeaderGrommet>
  );
};
export default Header;

Header.propTypes = {
  setLayer: PropTypes.func,
};
