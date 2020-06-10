import React from 'react';
import { Box, Image } from 'grommet';
import { Layout, SubPageHeader } from '../../components/index';

// stickers list
const Row1Stickers = [
  '/img/01-metal.svg',
  '/img/02-gremlin.png',
  '/img/03-developer.png',
  '/img/04-it-monster.png',
  '/img/05-ezmeral.png',
];
const Row2Stickers = [
  '/img/07-hpedevio.svg',
  '/img/08-gremlin2.png',
  '/img/08-gremlin2.png',
];
const Row3Stickers = ['/img/11-letshackshack.svg', '/img/12-hpedesign.png'];

// Create box for each sticker
const BoxImage = ({ stickers, ...props }) => {
  return (
    <Box
      pad="small"
      margin={{ right: 'medium', bottom: 'medium' }}
      border
      height="150px"
      id={stickers}
      key={stickers}
      {...props}
    >
      <Image fit="contain" src={stickers} />
    </Box>
  );
};

const StickerWall = () => {
  return (
    <Layout background="/img/stickers-background.svg">
      <SubPageHeader title="STICKERS AND ART">
        <Box
          justify="between"
          background={{ color: '#263040' }}
          pad="large"
          round="small"
        >
          <Box direction="row">
            {Row1Stickers.map(stickers => (
              <BoxImage basis="20%" stickers={stickers}></BoxImage>
            ))}
          </Box>
          <Box direction="row">
            <BoxImage basis="43%" stickers={'/img/06-HackShack.png'}></BoxImage>
            {Row2Stickers.map(stickers => (
              <BoxImage basis="auto" stickers={stickers}></BoxImage>
            ))}
          </Box>
          <Box direction="row">
            <BoxImage basis="20%" stickers={'/img/10-developer.png'}></BoxImage>
            {Row3Stickers.map(stickers => (
              <BoxImage basis="43%" stickers={stickers}></BoxImage>
            ))}
          </Box>
        </Box>
      </SubPageHeader>
    </Layout>
  );
};

export default StickerWall;
