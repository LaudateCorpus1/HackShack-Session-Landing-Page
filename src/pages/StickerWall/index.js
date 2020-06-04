import React from 'react';
import { Box, Image } from 'grommet';
import { Layout, SubPageHeader } from '../../components/index';
import { StyledBox } from './styles';

// stickers list
const stickers = [
  '/img/01-metal.svg',
  '/img/02-gremlin.png',
  '/img/03-developer.png',
  '/img/04-it-monster.png',
  '/img/05-ezmeral.png',
  '/img/06-HackShack.png',
  '/img/07-hpedevio.svg',
  '/img/08-gremlin2.png',
  '/img/09-donut.png',
  '/img/10-developer.png',
  '/img/11-letshackshack.svg',
  '/img/12-hpedesign.png',
];

// Create box for each sticker
const listStickerBoxes1 = stickers.map(stickerName => (
  <Box
    height="small"
    width="small"
    id={stickerName}
    key={stickerName}
    border
    round="small"
    margin={{ bottom: 'small' }}
    align="center"
    style={{ position: 'relative' }}
  >
    <Image
      //avoid image overflow
      style={{ maxWidth: '100%' }}
      alignSelf="center"
      fit="contain"
      src={stickerName}
    />
  </Box>
));

const StickerWall = () => {
  return (
    <Layout background="/img/stickers-background.svg">
      <SubPageHeader title="STICKERS AND ART">
        <Box width="1200" background={{ color: '#263040' }} pad="large" round="small">
          <Box align="start"></Box>
          <StyledBox flex={false}>
            {listStickerBoxes1}
          </StyledBox>
        </Box>
      </SubPageHeader>
    </Layout>
  );
};

export default StickerWall;
