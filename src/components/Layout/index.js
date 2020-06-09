import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext, Text, Button } from 'grommet';
import { Close } from 'grommet-icons';
import { ResponsiveLayout, StyledLayer } from './styles';
import { Footer, Header, SideNav } from '../index';

const handleViewport = size => {
  if (size === 'small') {
    return { minWidth: '400px', minHeight: '750px' };
  }
  return { minWidth: '100%', minHeight: '100%' };
};

const Layout = ({ children, background, page }) => {
  const [layer, setLayer] = useState(false);
  const size = useContext(ResponsiveContext);
  const viewport = handleViewport(size);

  return (
    <ResponsiveLayout
      viewport={viewport}
      background={{
        image: `url(${background})`,
        size: '100%',
        position: 'top center',
      }}
      /* Do we need this? */
      /* height={page === 'Home' ? '100%' : 'auto'} */
      justify="between"
      layer={layer}
    >
      <Box>
        <Header setLayer={setLayer} />
        <Box direction="row">
          {size !== 'small' && (
            <Box margin={{ top: 'xlarge', left: 'large' }}>
              <SideNav />{' '}
            </Box>
          )}
          {children}
        </Box>
      </Box>
      <Footer />
      {layer && (
        <StyledLayer>
          <Box pad={{ top: 'xlarge', right: 'large' }}>
            <Box
              direction="row"
              align="center"
              justify="end"
              margin={{ bottom: 'xlarge' }}
            >
              <Text color="#FFFFFF">CLOSE</Text>
              <Button icon={<Close />} onClick={() => setLayer(false)} />
            </Box>
            <Box align="start" gap="large" pad="xlarge">
              <SideNav />
            </Box>
          </Box>
        </StyledLayer>
      )}
    </ResponsiveLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
  page: PropTypes.string,
};

export default Layout;
