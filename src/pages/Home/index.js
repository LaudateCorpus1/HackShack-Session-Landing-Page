import React, { useContext } from 'react';
import { Box, Text, Image, ResponsiveContext, Anchor } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';
import {
  ButtonWrapper,
  // CardWrapper,
  LogoWrapper,
  MainWrapper,
  TextWrapper,
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
      <Text size={fontSize} color="#FFFFFF">
        Check out this week in the{' '}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://vimeo.com/429478014"
          label="Hack Shack Video"
          color="teal!"
        />
      </Text>
    </TextWrapper>
  );
};

const Home = () => {
  // const size = useContext(ResponsiveContext);

  return (
    <Layout background="/img/BackgroundImages/hack-shack-home-background.png">
      <Box height="100%" width="100%">
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

        {/*         <CardWrapper gap="large">
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
        </CardWrapper> */}
      </Box>
    </Layout>
  );
};

export default Home;

/* Grommet graphic       
<Box margin={{ bottom: 'xlarge', right: 'xlarge' }} alignSelf="end">
  <Stack alignSelf="center" anchor="top-left">
    <Image src="/img/quotegremlin.png" />
    <Box margin={{ top: '60px', left: '80px' }} gap="medium">
      <Box>
        <Text size="large" color="#000000">
          New to HPE Dev Hack Shack?
        </Text>
        <Text size="large" color="#000000">
          Watch our{' '}
          <Anchor color="#000000" onClick={onOpen}>
            Virtual Tour
          </Anchor>{' '}
          to
        </Text>
        <Text size="large" color="#000000">
          help you get acquainted!
        </Text>
      </Box>
      <Box gap="small" alignSelf="end" direction="row" onClick={onOpen}>
        <Anchor
          color="#000000"
          size="large"
          label="Watch Now"
          margin={{ top: '12px' }}
        />
        <Box>
          <Image src="/img/play-button.png" />
        </Box>
      </Box>
    </Box>
  </Stack>
</Box> 
*/

/* Video Layer
const VideoLayer = ({ onClose }) => (
<Layer animation="fadeIn" onClickOutside={onClose} onEsc={onClose}>
  <Box align="center" justify="center">
    <Heading margin={{ top: 'none' }} level="3">
      Virtual Tour
    </Heading>
    <Button icon={<Close size="medium" />} onClick={onClose} />
    <Box border={{ color: '#ffffff', style: 'dashed', size: '2px' }}>
      <Video autoPlay fit="cover">
        <source
          key="video"
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
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
  </Box>
</Layer>
); */
