import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Text,
  Image,
  ResponsiveContext,
  Anchor,
  Button,
  Stack,
  Video,
} from 'grommet';
import { Close } from 'grommet-icons';
import { Layout, ButtonSplit, Card } from '../../components/index';
import {
  ButtonWrapper,
  CardWrapper,
  LogoWrapper,
  MainWrapper,
  TextWrapper,
  StyledLayer,
  StyledStack,
  StyledBubble,
  StyledGremlin,
  StyledTextBox,
  StyledBoxText,
  StyledPlayButton,
} from './styles';

const Content = () => {
  const size = useContext(ResponsiveContext);
  const fontSize = size === 'small' ? '4vw' : '2.2vw';
  return (
    // <TextWrapper>
    //   <Text size={fontSize} color="#FFFFFF">
    //     Welcome to the Hack Shack. We offer many
    //   </Text>
    //   <Text size={fontSize} color="#FFFFFF">
    //     ways to collaborate and expand your skills.
    //   </Text>
    //   <Text size={fontSize} color="#FFFFFF">
    //     Try our technology Workshops-on-Demand,
    //   </Text>
    //   <Text size={fontSize} color="#FFFFFF">
    //     for a unique, hands-on learning experience.
    //   </Text>
    // </TextWrapper>
    <TextWrapper>
      <Text size={fontSize} color="#FFFFFF">
        Welcome to the Hack Shack, a place to collaborate
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        and expand technology skills. Try our unique on-demand
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        workshops or go on a virtual treasure hunt to discover
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        a wealth of other resources and perhaps win a prize.
      </Text>
    </TextWrapper>
  );
};
const GrommetMascot = ({ setOpen }) => (
  <StyledStack>
    <Stack anchor="bottom" alignSelf="start">
      <StyledGremlin>
        <Image src="/img/gremlinInBubble.png" />
      </StyledGremlin>
      <StyledBubble>
        <Image src="/img/quotebubble.png" />
      </StyledBubble>
      <StyledTextBox gap="small">
        <StyledBoxText width="medium">
          <Text size="large" color="#000000">
            Take a tour of
          </Text>
          <Text size="large" color="#000000">
            the Hack Shack!
          </Text>
        </StyledBoxText>
      </StyledTextBox>
      <StyledPlayButton
        gap="small"
        alignSelf="end"
        direction="row"
        onClick={() => setOpen(true)}
      >
        <Anchor
          alignSelf="center"
          color="#000000"
          size="large"
          label={
            <Box gap="xsmall" direction="row">
              <Text style={{ whiteSpace: 'nowrap' }} size="large">
                Watch video
              </Text>
            </Box>
          }
        />
        <Image
          style={{ width: '38px', height: '38px' }}
          src="/img/play-button.png"
          margin={{ bottom: '4px' }}
        />
      </StyledPlayButton>
    </Stack>
  </StyledStack>
);

GrommetMascot.propTypes = {
  setOpen: PropTypes.func,
};

const Cards = ({ size }) => (
  <CardWrapper gap="large">
    {size === 'small' && (
      <Card
        logo="/img/StickerPage/gremlin.png"
        title="New to the HPE DEV Hack Shack?"
        desc="Watch this video!"
        background="rgba(0, 86, 122, 0.8);"
        label="Watch Now"
        link="https://vimeo.com/539879968"
        margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
      />
    )}
    <Card
      image="/img/workshops-on-demand.png"
      title="INTRODUCING HPE DEV WORKSHOPS-ON-DEMAND"
      desc="Learn more about our technologies through hands-on experience."
      path="/workshops"
      background="background"
      label="Register Now!"
      margin={
        size === 'small'
          ? { top: '0px', right: '0px' }
          : { top: 'xlarge', right: 'large' }
      }
    />
    {/* <Card
      image="/img/munch-and-learn-3.jpg"
      title="Introducing HPE DEV Munch & Learn series"
      desc="Session 5: Data Science Unplugged Part 2."
      link="https://hpe.zoom.us/meeting/register/tJMkcumuqD0tE9SIrVe4mIOd00IHMPcjG0TB"
      background="rgba(0, 86, 122, 0.8);"
      label="Register Now!"
      margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
    /> */}
    <Card
      image="/img/Arcade/TreasureMap.png"
      title="WIN IN THE HPE DEV TREASURE HUNT"
      desc="Discover ways to collaborate and where to find resources."
      link="https://forms.office.com/r/SDRAJVxEAd"
      background="rgba(0, 86, 122, 0.8);"
      label="Hunt for Treasure!"
      margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
    />
    {/* <Card
      logo="/img/Community/dev-thumb.png"
      title="GET THE HPE DEVELOPER NEWSLETTER"
      desc="Want to read more about industry trends for developers? Sign up here."
      link="https://developer.hpe.com/newsletter-signup"
      background="background"
      label="Get the Newsletter"
      margin={
        size === 'small'
          ? { top: '0px', right: '0px' }
          : { top: 'xlarge', right: 'large' }
      }
    /> */}
    {/* <Card
      image="/img/Arcade/score.png"
      title="PLAY HACK SHACK ATTACK, OUR RETRO VIDEO GAME"
      desc="Compete with your friends for bragging rights."
      path="/hackshackattack"
      background="rgba(0, 86, 122, 0.8);"
      label="Play the Game"
      margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
    /> */}
  </CardWrapper>
);

Cards.propTypes = {
  size: PropTypes.string,
};

const Home = () => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState();
  const onClose = () => setOpen(undefined);

  return (
    <Layout background="/img/BackgroundImages/hack-shack-home-background.png">
      <Box height="100%" width="100%">
        {open && (
          <StyledLayer
            full
            animation="fadeIn"
            onClickOutside={onClose}
            onEsc={onClose}
          >
            <Box alignSelf="end" pad={{ top: 'large', bottom: 'xsmall' }}>
              <Button
                alignSelf="end"
                label={
                  <Text weight="normal" color="white" size="xlarge">
                    Close
                  </Text>
                }
                reverse
                icon={<Close size="medium" />}
                onClick={onClose}
              />
            </Box>
            <Box alignSelf="center">
              <Video controls="over" autoPlay fit="cover">
                <source
                  key="video"
                  src="https://player.vimeo.com/external/539879968.hd.mp4?s=1ff575d7f35468a09a8ad9ac86361989b4cb33e5&profile_id=174"
                  type="video/mp4"
                />
                <track
                  key="cc"
                  label="English"
                  kind="subtitles"
                  srcLang="en"
                  src="/assets/small-en.vtt"
                  default
                />
              </Video>
            </Box>
          </StyledLayer>
        )}
        <MainWrapper align="center">
          <LogoWrapper>
            <Image
              width="100%"
              fit="cover"
              src="/img/hack-shack-dve-logo.png"
              alt="Hack Shack"
            />
          </LogoWrapper>
          <Content />
          <ButtonWrapper>
            <ButtonSplit to="https://developer.hpe.com">
              Visit HPE DEV Community Portal
            </ButtonSplit>
          </ButtonWrapper>
        </MainWrapper>
        {size !== 'small' && <GrommetMascot setOpen={setOpen} />}
        <Cards size={size} />
      </Box>
    </Layout>
  );
};

export default Home;
