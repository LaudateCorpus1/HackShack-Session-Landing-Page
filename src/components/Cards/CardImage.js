import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const CardImage = ({ background, children, ...rest }) => {
  return (
    <Box
      background={background}
      height="small"
      round="xsmall"
      overflow="hidden"
      basis="50%"
      style={{ position: 'relative' }}
      {...rest}
    >
      {children}
    </Box>
  );
};

CardImage.defaultProps = {
  background: 'background-back',
};

CardImage.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};
