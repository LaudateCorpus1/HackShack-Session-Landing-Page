import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Stack, ResponsiveContext } from 'grommet';
import { Row1, Row2, Row3, Row4, Row5, Row6, Row7, Row8 } from './stickers';
import { StyledSmallAnchor, StyledLargeAnchor } from './styles';
import { Layout, SubPageHeader } from '../../components/index';

// Image wrapper
const ImageWrapper = ({ children, ...props }) => (
  <Box
    pad={{ horizontal: 'small', bottom: 'small', top: 'medium' }}
    margin={{ right: 'medium', bottom: 'medium' }}
    border
    style={{ borderRadius: '12px' }}
    {...props}
  >
    {children}
  </Box>
);

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

// Create box for each sticker small images
const BoxImage = ({
  icon,
  stickers,
  backgroundColor,
  backgroundImage,
  img,
  size,
  height,
  ...props
}) => {
  return (
    <>
      {size && (
        <StyledLargeAnchor href={stickers} download>
          <ImageWrapper
            background={backgroundColor || backgroundImage}
            height={height}
            id={stickers}
            key={stickers}
            {...props}
          >
            {img && (
              <Box fill>
                <Image fit="contain" src={img} />
                <Stack alignSelf="end">{icon}</Stack>
              </Box>
            )}
            {!img && (
              <Box justify="end" fill="vertical" alignSelf="end">
                {icon}
              </Box>
            )}
          </ImageWrapper>
        </StyledLargeAnchor>
      )}
      {!size && (
        <StyledSmallAnchor href={stickers} download>
          <ImageWrapper
            background={backgroundColor || backgroundImage}
            height={height}
            id={stickers}
            key={stickers}
            {...props}
          >
            {img && (
              <Box fill>
                <Image fit="contain" src={img} />
                <Stack alignSelf="end">{icon}</Stack>
              </Box>
            )}
            {!img && (
              <Box justify="end" fill="vertical" alignSelf="end">
                {icon}
              </Box>
            )}
          </ImageWrapper>
        </StyledSmallAnchor>
      )}
    </>
  );
};

BoxImage.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  stickers: PropTypes.object,
  img: PropTypes.string,
  backgroundImage: PropTypes.string,
  height: PropTypes.string,
};

const StickerRow = row => {
  const size = useContext(ResponsiveContext);
  return row.map(stickers => {
    return (
      <BoxImage
        height={size !== 'small' ? '150px' : '80px'}
        img={stickers.img}
        background={stickers.backgroundColor || stickers.backgroundImage}
        icon={stickers.icon}
        size={stickers.size}
        stickers={stickers.img || stickers.backgroundImage}
      />
    );
  });
};

const MobileStickerRow = row => {
  const size = useContext(ResponsiveContext);
  return row.map(stickers => {
    return (
      <BoxImage
        height={size !== 'small' ? '150px' : '80px'}
        img={stickers.img}
        background={stickers.backgroundColor || stickers.backgroundImage}
        icon={stickers.icon}
        size={stickers.size}
        stickers={stickers.img || stickers.backgroundImage}
      />
    );
  });
};

const StickerWall = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Layout background="/img/BackgroundImages/stickers-background.jpg">
      <SubPageHeader title="STICKERS AND ART">
        {size !== 'small' && (
          <Box
            justify="between"
            background={{ color: '#263040' }}
            pad="large"
            round="small"
            width={size !== 'small' ? { min: '680px' } : undefined}
          >
            <Box direction="row">{StickerRow(Row1)}</Box>
            <Box direction="row">{StickerRow(Row2)}</Box>
            <Box direction="row">{StickerRow(Row3)}</Box>
            <Box direction="row">{StickerRow(Row4)}</Box>
            <Box direction="row">{StickerRow(Row5)}</Box>
            <Box direction="row">{StickerRow(Row6)}</Box>
          </Box>
        )}
        {size === 'small' && (
          <Box
            justify="between"
            background={{ color: '#263040' }}
            pad="large"
            alignSelf="center"
            round="small"
            width={{ min: '380px' }}
          >
            <Box direction="row">{MobileStickerRow(Row1.slice(0, 4))}</Box>
            <Box direction="row">{MobileStickerRow(Row2.slice(0, 3))}</Box>
            <Box direction="row">{MobileStickerRow(Row3.slice(0, 2))}</Box>
            <Box direction="row">{MobileStickerRow(Row4.slice(0, 2))}</Box>
            <Box direction="row">{MobileStickerRow(Row5.slice(0, 3))}</Box>
            <Box direction="row">{MobileStickerRow(Row6.slice(0, 2))}</Box>
            <Box direction="row">{MobileStickerRow(Row7.slice(0, 3))}</Box>
            <Box direction="row">{MobileStickerRow(Row8.slice(0, 3))}</Box>
          </Box>
        )}
      </SubPageHeader>
    </Layout>
  );
};

export default StickerWall;
