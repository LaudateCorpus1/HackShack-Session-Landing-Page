/* (C) Copyright 2019 Hewlett Packard Enterprise Development LP. */
import React from 'react';
import { Box, Text, Header as HeaderGrommet, Image } from 'grommet';

export const Header = () => {
  return (
    <HeaderGrommet
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      height="xsmall"
      fill="horizontal"
      pad="medium"
      id="header1"
      className="header1"
    >
      <Box
        alignSelf="start"
        align="center"
        justify="center"
        direction="row"
        gap="small"
      >
        <Box height="xxsmall" width="xxsmall">
          <Image
            fit="contain"
            size="small"
            src="https://us-central1-grommet-designer.cloudfunctions.net/images/lozzi-hpe-com/developer-logo.png"
          />
        </Box>
        <Box align="center" justify="center" direction="row" gap="xsmall">
          <Text weight="bold">HPE</Text>
          <Text>Developer</Text>
        </Box>
      </Box>
    </HeaderGrommet>
  );
};
export default Header;
