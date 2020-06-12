import React, { useContext, useState } from 'react';
import {
  Box,
  Text,
  Image,
  ResponsiveContext,
  Stack,
  Layer,
  Header,
  Heading,
  Button,
  Video,
  Anchor,
} from 'grommet';
import { Close } from 'grommet-icons';
import { Card } from '../../components/Card';
import { Layout, ButtonSplit } from '../../components/index';
import {
  MainWrapper,
  LogoWrapper,
  TextWrapper,
  ButtonWrapper,
  CardWrapper,
} from './styles';

const DesktopLayout = () => {
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);
  return (
    <Box height="100%" width="100%">
      {open && (
        <Layer
          full
          animation="fadeIn"
          // animate={true}
          modal={true}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box
            align="center"
            justify="center"
            pad="medium"
            fill
            background="light-4"
            // background={{ color: 'background', dark: false }}
          >
            <Header
              align="center"
              direction="row"
              flex={false}
              justify="between"
              gap="medium"
            >
              <Heading margin="none" level="3">
                Virtual Tour
              </Heading>
              <Button
                icon={<Close />}
                hoverIndicator={true}
                onClick={onClose}
              />
            </Header>
            <Video autoPlay controls="over" fit="cover">
              <source
                key="video"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                // src="https://vimeo.com/417278561"
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
        </Layer>
      )}
      <MainWrapper align="center">
        <LogoWrapper>
          <Image
            fit="contain"
            src="/img/hack-shack-dve-logo.png"
            alt="Hack Shack"
          />
        </LogoWrapper>
        <TextWrapper>
          <Box>
            <Text size="xxlarge" color="#FFFFFF">
              Welcome to the Hack Shack. Come in to
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              collaborate and learn from others in Technology
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              Workshops and Sessions or compete for elite
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              gaming status playing Hack Shack Attack!
            </Text>
          </Box>
        </TextWrapper>
        <ButtonWrapper>
          <ButtonSplit to="https://developer.hpe.com">
            Visit HPE Developer
          </ButtonSplit>
        </ButtonWrapper>
      </MainWrapper>
      <CardWrapper alignSelf="end" gap="large" margin="xlarge" direction="row">
        {' '}
        <Card
          title="PLAY HACK SHACK ATTACK CONTEST AND WIN PRIZES"
          desc="Learn more about the rules and requirments to the contest."
          link="https://developer.hpe.com/"
          background="background"
          label="Join the Contest"
          margin={{ top: '120px' }}
        ></Card>
        <Card
          title="LEARN MORE ABOUT HPE EZMERAL PLATFORM"
          desc="Learn more about the rules and requirments to the contest"
          link="https://developer.hpe.com/"
          background="rgba(0, 86, 122, 0.8);"
          label="See the HPE Ezmeral Sessions"
          margin={{ bottom: '120px' }}
        ></Card>
      </CardWrapper>
      <Box
        margin={{ bottom: 'xlarge', right: 'xlarge' }}
        alignSelf="end"
        height="493px"
        width="618px"
      >
        <Stack alignSelf="center" anchor="top-left">
          <Image src="/img/quotegremlin.png"></Image>
          <Box margin={{ top: '80px', left: '80px' }}>
            <Text size="large" color="black">
              New to HPE Dev Hack Shack ?
            </Text>
            <Text size="large" color="black">
              Watch our{' '}
              <Anchor color="black" onClick={onOpen}>
                Virtual Tour
              </Anchor>{' '}
              to
            </Text>
            <Text size="large" color="black">
              help you get acquainted!
            </Text>
            <Box gap="small" alignSelf="end" direction="row" onClick={onOpen}>
              <Anchor
                margin={{ top: 'small' }}
                color="black"
                size="large"
                onClick={onOpen}
                label="Watch Now"
              />
              <Box width="48px" height="48px">
                <Image src={'/img/play-button.png'}></Image>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

const MobileLayout = () => (
  <Box align="center">
    <Box height="200px">
      <Image
        fit="contain"
        src="/img/hack-shack-dve-logo.svg"
        alt="Hack Shack"
      />
    </Box>
    <Box
      margin={{ bottom: 'small' }}
      style={{ transform: 'rotate(-10deg)' }}
      gap="large"
    >
      <Box>
        <Text size="medium" color="#FFFFFF">
          Welcome to the Hack Shack. Come in to
        </Text>
        <Text size="medium" color="#FFFFFF">
          collaborate and learn from others in Technology
        </Text>
        <Text size="medium" color="#FFFFFF">
          Workshops and Sessions or compete for elite
        </Text>
        <Text size="medium" color="#FFFFFF">
          gaming status playing Hack Shack Attack!
        </Text>
      </Box>
      <Box alignSelf="end">
        <ButtonSplit to="https://developer.hpe.com">
          Visit HPE Developer
        </ButtonSplit>
      </Box>
    </Box>
    <Box
      alignSelf="end"
      gap="large"
      margin={{ horizontal: 'xlarge', vertical: 'medium' }}
      direction="column"
    >
      {' '}
      <Card
        title="PLAY HACK SHACK ATTACK CONTEST AND WIN PRIZES"
        desc="Learn more about the rules and requirments to the contest."
        link="https://developer.hpe.com/"
        background="background"
        label="Join the Contest"
      ></Card>
      <Card
        title="LEARN MORE ABOUT HPE EZMERAL PLATFORM"
        desc="Learn more about the rules and requirments to the contest"
        link="https://developer.hpe.com/"
        background="rgba(0, 86, 122, 0.8);"
        label="See the HPE Ezmeral Sessions"
      ></Card>
    </Box>
    <Box
      margin={{ vertical: 'xlarge', horizontal: 'small' }}
      alignSelf="end"
      height="493px"
      width="380px"
    >
      <Stack alignSelf="center" anchor="top-left">
        <Box width="medium" height="small">
          <Image src="/img/quotegremlin.png"></Image>
        </Box>
        <Box margin={{ top: '60px', left: '40px' }}>
          <Text size="small" color="black">
            New to HPE Dev
          </Text>
          <Text size="small" color="black">
            Hack Shack ?
          </Text>
          <Text size="small" color="black">
            Watch our Virtual Tour to
          </Text>
          <Text size="small" color="black">
            help you get acquainted!
          </Text>
          <Box gap="small" alignSelf="end" direction="row">
            <Anchor
              margin={{ top: 'small' }}
              color="black"
              size="small"
              href="#"
              label="Watch Now"
            />
            <Box width="32px" height="32px">
              <Image src={'/img/play-button.png'}></Image>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  </Box>
);

const Home = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Layout background="/img/hack-shack-home-background.png" page="Home">
      {size !== 'small' ? <DesktopLayout /> : <MobileLayout />}
    </Layout>
  );
};

export default Home;
