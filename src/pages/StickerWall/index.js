import React, { useContext } from 'react';
import { Box, Image, Stack, ResponsiveContext } from 'grommet';
import { Monitor, User } from 'grommet-icons';
import { StyledSmallAnchor, StyledLargeAnchor } from './styles';
import { Layout, SubPageHeader } from '../../components/index';

// stickers list
const Row1 = [
  {
    img: '/img/metalhand.png',
    icon: <Monitor size="small" />,
    backgroundColor: 'background-contrast',
  },
  {
    img: '/img/gremlinrockin.png',
    icon: <Monitor size="small" />,
    backgroundColor: '#FFBC44',
  },
  {
    img: '/img/grommet-sticker.png',
    icon: <Monitor size="small" />,
    backgroundColor: '#FFFFFF',
  },
  { img: '/img/it-monster.png', icon: <User size="small" /> },
  { img: '/img/ezmeral.png', icon: <User size="small" /> },
];

const Row2 = [
  { img: '/img/hpedevlogo.png', icon: <Monitor size="small" /> },
  { img: '/img/gremlin.png', icon: <User size="small" /> },
];

const Row6 = [
  {
    img: '/img/ResearchDesignDev.png',
    backgroundColor: 'white',
    icon: <Monitor size="small" />,
  },
  { img: '/img/designedwlove.png', icon: <Monitor size="small" /> },
];

//Image wrapper

const ImageWrapper = ({ children, height, ...props }) => (
  <Box
    pad={{ horizontal: 'small', bottom: 'small', top: 'medium' }}
    margin={{ right: 'medium', bottom: 'medium' }}
    border
    height={height}
    style={{ borderRadius: '12px' }}
    {...props}
  >
    {' '}
    {children}
  </Box>
);

// Create box for each sticker small images
const BoxImage = ({ icon, stickers, backgroundColor, height, ...props }) => {
  return (
    <StyledSmallAnchor href={stickers} download>
      <Box
        background={backgroundColor ? backgroundColor : '#263040'}
        id={stickers}
        key={stickers}
        pad={{ horizontal: 'small', bottom: 'small', top: 'medium' }}
        margin={{ right: 'medium', bottom: 'medium' }}
        border
        height={height}
        style={{ borderRadius: '12px' }}
        {...props}
      >
        <Image fit="contain" src={stickers} />
        <Stack alignSelf="end">{icon}</Stack>
      </Box>
    </StyledSmallAnchor>
  );
};

// Create box for each sticker small images
const BoxImageLarge = ({
  stickers,
  icon,
  backgroundColor,
  height,
  ...props
}) => {
  return (
    <StyledLargeAnchor href={stickers} download>
      <Box
        pad={{ horizontal: 'small', bottom: 'small', top: 'medium' }}
        margin={{ right: 'medium', bottom: 'medium' }}
        border
        height={height}
        style={{ borderRadius: '12px' }}
        background={backgroundColor ? backgroundColor : '#263040'}
        {...props}
        id={stickers}
        key={stickers}
      >
        <Image fit="contain" src={stickers} />
        <Stack alignSelf="end">{icon}</Stack>
      </Box>
    </StyledLargeAnchor>
  );
};

const StickerWall = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Layout background="/img/stickers-background.jpg">
      <SubPageHeader title="STICKERS AND ART">
        {size !== 'small' && (
          <Box
            justify="between"
            background={{ color: '#263040' }}
            pad="large"
            round="small"
            width={{ min: '680px' }}
          >
            <Box direction="row">
              {Row1.map(stickers => (
                <BoxImage
                  height="150px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                ></BoxImage>
              ))}
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="150px"
                stickers={'/img/06-HackShack.png'}
                background="#4F5F76"
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
              {Row2.map(stickers => (
                <BoxImage
                  height="150px"
                  stickers={stickers.img}
                  icon={stickers.icon}
                ></BoxImage>
              ))}
              <StyledSmallAnchor href="/img/devlogo.png" download>
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/grommet-icon.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImage
                background="#82FFF2"
                icon={<Monitor size="small" />}
                stickers={'/img/gremlinhat.png'}
                height="150px"
              ></BoxImage>
              <StyledLargeAnchor href="/img/ezmeralbackground.png" download>
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/ezmeralbackground.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledLargeAnchor>
              <BoxImageLarge
                height="150px"
                stickers={'/img/letshackshack.png'}
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
            </Box>
            <Box direction="row">
              <BoxImage height="150px" stickers={'/img/devlogo.png'}></BoxImage>
              <StyledLargeAnchor href="/img/2gremlins.png" download>
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/2gremlins.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledLargeAnchor>
              <StyledLargeAnchor href="/img/hack-shack-house.png" download>
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/hack-shack-house.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledLargeAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="150px"
                stickers={'/img/attack-marquee.svg'}
                icon={<Monitor size="small" />}
                background="black"
              ></BoxImageLarge>
              <BoxImage
                height="150px"
                stickers={'/img/dev-thumb.png'}
              ></BoxImage>
              <StyledSmallAnchor download href="/img/design.png">
                {' '}
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/design.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
              <StyledSmallAnchor download href="/img/heart.png">
                {' '}
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/heart.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImage
                height="150px"
                icon={<Monitor size="small" />}
                stickers={'/img/itmonsterattack.png'}
              ></BoxImage>
              {Row6.map(stickers => (
                <BoxImageLarge
                  height="150px"
                  icon={stickers.icon}
                  background={stickers.backgroundColor}
                  stickers={stickers.img}
                ></BoxImageLarge>
              ))}
            </Box>
          </Box>
        )}
        {size === 'small' && (
          <Box
            justify="between"
            background={{ color: '#263040' }}
            pad="large"
            round="small"
            alignSelf="center"
          >
            <Box direction="row">
              {Row1.slice(0, 2).map(stickers => (
                <BoxImage
                  height="80px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                ></BoxImage>
              ))}
            </Box>
            <Box direction="row">
              <StyledLargeAnchor href="/img/ezmeralbackground.png" download>
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/ezmeralbackground.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledLargeAnchor>
            </Box>
            <Box direction="row">
              {Row1.slice(2, 4).map(stickers => (
                <BoxImage
                  height="80px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                ></BoxImage>
              ))}
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers={'/img/06-HackShack.png'}
                background="#4F5F76"
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
            </Box>
            <Box direction="row">
              {Row2.map(stickers => (
                <BoxImage
                  height="80px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                ></BoxImage>
              ))}
            </Box>
            <StyledLargeAnchor href="/img/hack-shack-house.png" download>
              <ImageWrapper
                height="80px"
                background={{
                  image: 'url(/img/hack-shack-house.png)',
                }}
              >
                {' '}
              </ImageWrapper>
            </StyledLargeAnchor>
            <Box direction="row">
              <StyledSmallAnchor href="/img/grommet-icon.png" download>
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/grommet-icon.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers={'/img/ezmeral.png'}
              ></BoxImage>
            </Box>
            <Box direction="row">
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers={'/img/devlogo.png'}
              ></BoxImage>
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers={'/img/gremlinhat.png'}
              ></BoxImage>
            </Box>
            <Box direction="row">
              <StyledLargeAnchor href="/img/2gremlins.png" download>
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/2gremlins.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledLargeAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers={'/img/letshackshack.png'}
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
            </Box>
            <Box direction="row">
              <StyledSmallAnchor download href="/img/design.png">
                {' '}
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/design.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
              <StyledSmallAnchor download href="/img/heart.png">
                {' '}
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/heart.png)',
                  }}
                >
                  {' '}
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers={'/img/attack-marquee.svg'}
                icon={<Monitor size="small" />}
                background="black"
              ></BoxImageLarge>
            </Box>
            <Box direction="row">
              <BoxImage
                height="80px"
                icon={<Monitor size="small" />}
                stickers={'/img/itmonsterattack.png'}
              ></BoxImage>
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers={'/img/dev-thumb.png'}
              ></BoxImage>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers={'/img/ResearchDesignDev.png'}
                background="white"
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers={'/img/designedwlove.png'}
                icon={<Monitor size="small" />}
              ></BoxImageLarge>
            </Box>
          </Box>
        )}
      </SubPageHeader>
    </Layout>
  );
};

export default StickerWall;
