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
      style={{
        height: '900px',
        minHeight: '100%',
        minWidth: '1425px',
      }}
      justify="between"
    >
      <Box>
        <Header />
        <Box direction="row">
          <SideNav />
          {children}
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
