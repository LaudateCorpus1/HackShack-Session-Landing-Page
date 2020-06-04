import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { Footer, Header, SideNav } from '../index';

const Layout = ({ children, background }) => {
  return (
    <Box
      background={{
        image: `url(${background})`,
        size: 'cover',
        position: 'fixed',
      }}
      height={{ min: '100%' }}
      width={{ min: '500px' }}
      justify="between"
    >
      <Box>
        <Header />
        <Box
          margin={{ horizontal: 'large', top: 'large', bottom: 'xlarge' }}
          gap="xlarge"
          direction="row"
          pad={{ vertical: 'medium' }}
        >
          <SideNav />
          <Box>{children}</Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string.isRequired,
};

export default Layout;
