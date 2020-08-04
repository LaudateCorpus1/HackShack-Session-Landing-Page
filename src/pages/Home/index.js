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
    <TextWrapper>
      <Text size={fontSize} color="#FFFFFF">
        Welcome to the Hack Shack. Come in to
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        collaborate and learn from others in Technology
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        Workshops and Sessions or compete for elite
      </Text>
      <Text size={fontSize} color="#FFFFFF">
        gaming status playing Hack Shack Attack!
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
            Watch This Week in
          </Text>
          <Text size="large" color="#000000">
            the Hack Shack Video!
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
                Watch Now
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
        desc="Watch This Week in the Hack Shack!"
        background="rgba(0, 86, 122, 0.8);"
        label="Watch Now"
        link="https://vimeo.com/441835569"
        margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
      />
    )}
    <Card
      logo="/img/Community/dev-thumb.png"
      title="GET THE HPE DEVELOPER NEWSLETTER"
      desc="Want to read more about industry trends for developers?"
      link="https://developer.hpe.com/event/kubecon-europe-2020?listid=10605211"
      background="background"
      label="Get the Newsletter"
      margin={
        size === 'small'
          ? { top: '0px', right: '0px' }
          : { top: 'xlarge', right: 'large' }
      }
    />
    <Card
      logo="/img/StickerPage/ezmeral.png"
      title="INTRODUCING HPE EZMERAL"
      // eslint-disable-next-line max-len
      desc="Run, manage, control and secure the apps,
      data and IT that run your business - from edge to cloud"
      background="rgba(0, 86, 122, 0.8);"
      label="Learn more"
      path="/ezmeral"
      margin={size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }}
    />
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
                  src="https://player.vimeo.com/external/441835569.hd.mp4?s=154e58a9a952c6e70a9ac59e7887fa8a539f3962&profile_id=174"
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
