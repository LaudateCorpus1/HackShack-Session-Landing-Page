/* (C) Copyright 2020 Hewlett Packard Enterprise Development LP. */

import styled from 'styled-components';
import { Image } from 'grommet';

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  @media (orientation: landscape) {
    max-width: 500px;
  }
`;

export const StyledCard = styled(Image)`
  width: 100%;
  height: auto;
  @media (orientation: landscape) {
    max-height: 1080px;
    max-width: 650px;
  }
`;
