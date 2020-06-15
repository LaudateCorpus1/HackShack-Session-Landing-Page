import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Image, Stack, ResponsiveContext } from 'grommet';
import { Monitor, User } from 'grommet-icons';
import { Row1, Row2, Row6 } from './stickers';
import { StyledSmallAnchor, StyledLargeAnchor } from './styles';
import { Layout, SubPageHeader } from '../../components/index';

// Image wrapper
const ImageWrapper = ({ children, height, ...props }) => (
  <Box
    pad={{ horizontal: 'small', bottom: 'small', top: 'medium' }}
    margin={{ right: 'medium', bottom: 'medium' }}
    border
    height={height}
    style={{ borderRadius: '12px' }}
    {...props}
  >
    {children}
  </Box>
);

ImageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
};


// Create box for each sticker small images
const BoxImage = ({ icon, stickers, backgroundColor, height, ...props }) => {
  return (
    <StyledSmallAnchor href={stickers} download>
      <Box
        background={backgroundColor || '#263040'}
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

BoxImage.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  stickers: PropTypes.object,
  height: PropTypes.string,
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
        background={backgroundColor || '#263040'}
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

BoxImageLarge.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.object,
  backgroundColor: PropTypes.string,
  stickers: PropTypes.object,
  height: PropTypes.string,
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
            width={{ min: '680px' }}
          >
            <Box direction="row">
              {Row1.map(stickers => (
                <BoxImage
                  height="150px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                />
              ))}
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="150px"
                stickers="/img/StickerPage/06-HackShack.png"
                background="#4F5F76"
                icon={<Monitor size="small" />}
              />
              {Row2.map(stickers => (
                <BoxImage
                  height="150px"
                  stickers={stickers.img}
                  icon={stickers.icon}
                />
              ))}
              <StyledSmallAnchor href="/img/StickerPage/devlogo.png" download>
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/StickerPage/grommet-icon.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImage
                background="#82FFF2"
                icon={<User size="small" />}
                stickers="/img/StickerPage/gremlinhat.png"
                height="150px"
              />
              <StyledLargeAnchor
                // href="/img/StickerPage/ezmeralbackground.png"
                download
              >
                <ImageWrapper
                  height="150px"
                  // replace background after ezmeral annouc
                  background="background-contrast"
                  // background={{
                  //   image: 'url(/img/StickerPage/ezmeralbackground.png)',
                  // }}
                >
                  {/* <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box> */}
                </ImageWrapper>
              </StyledLargeAnchor>
              <BoxImageLarge
                height="150px"
                stickers="/img/StickerPage/letshackshack.png"
                icon={<Monitor size="small" />}
              />
            </Box>
            <Box direction="row">
              <BoxImage
                height="150px"
                icon={<User size="small" />}
                stickers="/img/StickerPage/devlogo.png"
              />
              <StyledLargeAnchor href="/img/StickerPage/2gremlins.png" download>
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/StickerPage/2gremlins.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledLargeAnchor>
              <StyledLargeAnchor
                href="/img/StickerPage/hack-shack-house.png"
                download
              >
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/StickerPage/hack-shack-house.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledLargeAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="150px"
                stickers="/img/StickerPage/attack-marquee.svg"
                icon={<Monitor size="small" />}
                background="black"
              />
              <BoxImage
                height="150px"
                stickers="/img/StickerPage/dev-thumb.png"
                icon={<User size="small" />}
              />
              <StyledSmallAnchor download href="/img/StickerPage/design.png">
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/StickerPage/design.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
              <StyledSmallAnchor download href="/img/StickerPage/heart.png">
                <ImageWrapper
                  height="150px"
                  background={{
                    image: 'url(/img/StickerPage/heart.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <User size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImage
                height="150px"
                icon={<Monitor size="small" />}
                stickers='/img/StickerPage/itmonsterattack.png'
              />
              {Row6.map(stickers => (
                <BoxImageLarge
                  height="150px"
                  icon={stickers.icon}
                  background={stickers.backgroundColor}
                  stickers={stickers.img}
                />
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
                />
              ))}
            </Box>
            <Box direction="row">
              <StyledLargeAnchor
                href="/img/StickerPage/ezmeralbackground.png"
                download
              >
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/StickerPage/ezmeralbackground.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
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
                />
              ))}
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers="/img/StickerPage/06-HackShack.png"
                background="#4F5F76"
                icon={<Monitor size="small" />}
              />
            </Box>
            <Box direction="row">
              {Row2.map(stickers => (
                <BoxImage
                  height="80px"
                  background={stickers.backgroundColor}
                  icon={stickers.icon}
                  stickers={stickers.img}
                />
              ))}
            </Box>
            <StyledLargeAnchor
              href="/img/StickerPage/hack-shack-house.png"
              download
            >
              <ImageWrapper
                height="80px"
                background={{
                  image: 'url(/img/StickerPage/hack-shack-house.png)',
                }}
              >
                <Box justify="end" fill="vertical" alignSelf="end">
                  <Monitor size="small" />
                </Box>
              </ImageWrapper>
            </StyledLargeAnchor>
            <Box direction="row">
              <StyledSmallAnchor
                href="/img/StickerPage/grommet-icon.png"
                download
              >
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/StickerPage/grommet-icon.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers="/img/StickerPage/ezmeral.png"
              />
            </Box>
            <Box direction="row">
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers="/img/StickerPage/devlogo.png"
              />
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers="/img/StickerPage/gremlinhat.png"
              />
            </Box>
            <Box direction="row">
              <StyledLargeAnchor href="/img/StickerPage/2gremlins.png" download>
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/StickerPage/2gremlins.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledLargeAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers="/img/StickerPage/letshackshack.png"
                icon={<Monitor size="small" />}
              />
            </Box>
            <Box direction="row">
              <StyledSmallAnchor download href="/img/StickerPage/design.png">
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/StickerPage/design.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <Monitor size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
              <StyledSmallAnchor download href="/img/StickerPage/heart.png">
                <ImageWrapper
                  height="80px"
                  background={{
                    image: 'url(/img/StickerPage/heart.png)',
                  }}
                >
                  <Box justify="end" fill="vertical" alignSelf="end">
                    <User size="small" />
                  </Box>
                </ImageWrapper>
              </StyledSmallAnchor>
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers="/img/StickerPage/attack-marquee.svg"
                icon={<Monitor size="small" />}
                background="black"
              />
            </Box>
            <Box direction="row">
              <BoxImage
                height="80px"
                icon={<Monitor size="small" />}
                stickers="/img/StickerPage/itmonsterattack.png"
              />
              <BoxImage
                height="80px"
                icon={<User size="small" />}
                stickers="/img/StickerPage/dev-thumb.png"
              />
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers="/img/StickerPage/ResearchDesignDev.png"
                background="white"
                icon={<Monitor size="small" />}
              />
            </Box>
            <Box direction="row">
              <BoxImageLarge
                height="80px"
                stickers="/img/StickerPage/designedwlove.png"
                icon={<Monitor size="small" />}
              />
            </Box>
          </Box>
        )}
      </SubPageHeader>
    </Layout>
  );
};

export default StickerWall;
