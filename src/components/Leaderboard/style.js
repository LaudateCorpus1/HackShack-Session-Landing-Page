/* (C) Copyright 2020 Hewlett Packard Enterprise Development LP. */
import styled from 'styled-components';
import { Box } from 'grommet';

export const LeaderboardLayout = styled(Box)`
  @font-face {
    font-family: 'ArcadeClassic';
    src: url('/fonts/arcadeclassic.woff') format('woff');
  }
  .outer {
    display: table;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .middle {
    display: table-cell;
    vertical-align: middle;
  }
  .inner {
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
  }
  .highscore-title {
    font-family: 'ArcadeClassic';
    font-size: 100px;
    text-shadow: 4px 4px #e08328;
  }
  .title-container {
    margin-bottom: 105px;
  }
  .highscore-text {
    font-family: 'ArcadeClassic';
    font-size: 50px;
  }
`;

export default LeaderboardLayout;
