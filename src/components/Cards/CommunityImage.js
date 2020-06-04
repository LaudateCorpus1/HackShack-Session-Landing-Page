import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const CommunityImage = ({ background, children, ...rest }) => {
  return (
    <Box
      pad={{ left: 'medium' }}
      margin={{top: 'large'}}
      height="small"
      width="small"
      alignSelf="start"
      {...rest}
    >
      {children}
    </Box>
  );
};

CommunityImage.defaultProps = {
  background: 'background-back',
};

CommunityImage.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};
