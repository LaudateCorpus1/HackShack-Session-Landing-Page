import React, { useContext, useState } from 'react';
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
import GremlinWave from '../../components/GremlinWave';
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
  StyledCard,
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

const Home = () => {
  const size = useContext(ResponsiveContext);
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
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
            <Box
              alignSelf="end"
              pad={{ top: 'large', bottom: 'xsmall' }}
            >
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
                  src="https://player.vimeo.com/external/430776646.hd.mp4?s=715fb97ce94445307bb7e5621581f8ac63cef10e&profile_id=175&download=1"
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
              Visit HPE Developer
            </ButtonSplit>
          </ButtonWrapper>
        </MainWrapper>
        <StyledStack>
          <Stack anchor="bottom" alignSelf="start">
            <StyledGremlin>
              <GremlinWave />
            </StyledGremlin>
            <StyledBubble>
              <Image src="/img/quotebubble.png" />
            </StyledBubble>
            <StyledTextBox gap="small">
              <StyledBoxText width="medium">
                <Text size="large" color="#000000">
                  New to the HPE DEV Hack Shack?
                </Text>
                <Text size="large" color="#000000">
                  Watch This Week in the Hack Shack!
                </Text>
              </StyledBoxText>
            </StyledTextBox>
            <StyledPlayButton
              gap="small"
              alignSelf="end"
              direction="row"
              onClick={onOpen}
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
        <CardWrapper gap="large">
          <StyledCard>
            <Card
              title="New to the HPE DEV Hack Shack?"
              desc="Watch This Week in the Hack Shack!"
              background="rgba(0, 86, 122, 0.8);"
              label="Watch Now"
              link="https://vimeo.com/429478014"
              margin={
                size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }
              }
            />
          </StyledCard>
          <Card
            title="PLAY HACK SHACK ATTACK CONTEST AND WIN PRIZES"
            desc="Learn more about the rules and requirments to the contest."
            link="https://developer.hpe.com/"
            background="background"
            label="Join the Contest"
            margin={
              size === 'small'
                ? { top: '0px', right: '0px' }
                : { top: 'xlarge', right: 'large' }
            }
          />
          <Card
            title="LEARN MORE ABOUT HPE EZMERAL PLATFORM"
            desc="Learn more about the rules and requirments to the contest"
            link="https://developer.hpe.com/"
            background="rgba(0, 86, 122, 0.8);"
            label="See the HPE Ezmeral Sessions"
            margin={
              size === 'small' ? { bottom: 'none' } : { bottom: 'xlarge' }
            }
          />
        </CardWrapper>
      </Box>
    </Layout>
  );
};

export default Home;
