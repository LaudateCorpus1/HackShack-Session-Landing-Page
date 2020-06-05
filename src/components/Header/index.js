import React, { useContext, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Text,
  Header as HeaderGrommet,
  Image,
  ResponsiveContext,
  Layer,
  Anchor,
} from 'grommet';
import { Menu, Close } from 'grommet-icons';
import { ButtonSplit, SideNav } from '../index';

export const Header = () => {
  const [layer, setLayer] = useState(false);
  const size = useContext(ResponsiveContext);
  const iconSize = size === 'small' ? '192px' : '228px';

  useEffect(() => {
    if (size !== 'small') setLayer(false);
  }, [size]);

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
          <Button icon={<Menu />} onClick={e => setLayer(true)} />
          {layer && (
            <Layer>
              <Box pad={{ top: 'xlarge', right: 'large' }}>
                <Box direction="row" align="center" justify="end">
                  <Text color="#FFFFFF">CLOSE</Text>
                  <Button icon={<Close />} onClick={() => setLayer(false)} />
                </Box>
                <Box align="start" gap="large" pad="xlarge">
                  <SideNav />
                  <ButtonSplit to="https://developer.hpe.com">
                    Register for HPE Discover
                  </ButtonSplit>
                </Box>
              </Box>
            </Layer>
          )}
        </Box>
      )}
    </HeaderGrommet>
  );
};
export default Header;
