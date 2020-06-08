import React, { useContext } from 'react';
import { Grid, ResponsiveContext } from 'grommet';

const CardGrid = ({ children, ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      columns={size !== 'small' ? { count: 2, size: 'auto' } : 'auto'}
      rows={['auto']}
      gap="large"
      {...rest}
    >
      {children}
    </Grid>
  );
};

export default CardGrid;
