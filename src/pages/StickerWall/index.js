import React from 'react';
import { Box, Heading, Button, Image } from 'grommet';
import { Previous } from 'grommet-icons';
import { Layout } from '../../components/index';
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
    <Layout background="/img/hack-shack-home-background.png">
      <Box
        direction="column"
        align="start"
        gap="medium"
        pad={{ left: 'xlarge', right: 'xlarge', bottom: 'medium' }}
      >
        <Box align="start">
          <Button
            icon={<Previous />}
            label="Back to Arcade"
            href="/arcade"
          ></Button>
        </Box>
        <Box align="start">
          <Heading level="3" size="medium" margin="none" textAlign="start">
            STICKERS AND ART
          </Heading>
        </Box>
        <Box background={{ color: '#263040' }} pad="large" round="small">
          <StyledBox flex={false} width="xlarge">
            {listStickerBoxes1}
          </StyledBox>
        </Box>
      </Box>
    </Layout>
  );
};

export default StickerWall;
