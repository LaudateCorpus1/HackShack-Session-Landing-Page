import React, { Children, cloneElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Grid, ThemeContext } from 'grommet';

const CardGrid = ({ children, size, ...rest }) => {
  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { size });
    }

    return child;
  });
  return (
    <Grid
      columns={size !== 'small' ? { count: 2, size: 'auto' } : 'auto'}
      rows={['auto']}
      gap="large"
      {...rest}
    >
      <ThemeContext.Consumer>
        {props => console.log(props)}
      </ThemeContext.Consumer>
      {childrenWithProps}
    </Grid>
  );
};

CardGrid.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
};

export default CardGrid;
