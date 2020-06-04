import React, { useContext } from 'react';
import { Grid, ResponsiveContext } from 'grommet';

export const CardGrid = ({ children, ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      columns={size !== 'small' ? { count: 2, size: 'medium' } : '100%'}
      rows={['auto', 'flex']}
      gap="large"
      justify="center"
      {...rest}
      fill
    >
      {children}
    </Grid>
  );
};
