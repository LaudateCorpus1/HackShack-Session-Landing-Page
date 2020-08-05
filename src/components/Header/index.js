import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Text, Header as HeaderGrommet, Anchor } from 'grommet';
import { Menu, Hpe } from 'grommet-icons';

export const Header = ({ setLayer, size }) => {
  const iconSize = size === 'small' ? '192px' : '228px';

  useEffect(() => {
    if (size !== 'small') setLayer(false);
  }, [size, setLayer]);

  return (
    <HeaderGrommet pad="medium" justify="between" align="center">
      <Anchor href="https://www.hpe.com/us/en/home.html" target="_blank">
        <Box width={iconSize}>
          <Hpe size="large" color="brand" />
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
  size: PropTypes.string,
};
