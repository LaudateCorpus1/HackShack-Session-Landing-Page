import React, { useContext } from 'react';
import { Box, Text, Image, ResponsiveContext, Stack, Anchor } from 'grommet';
import { Card } from '../../components/Card';
import { Layout, ButtonSplit } from '../../components/index';
import {
  MainWrapper,
  LogoWrapper,
  TextWrapper,
  ButtonWrapper,
  CardWrapper,
} from './styles';

const DesktopLayout = () => (
  <Box height="100%" width="100%">
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
            Watch our Virtual Tour to
          </Text>
          <Text size="large" color="black">
            help you get acquainted!
          </Text>
          <Box gap="small" alignSelf="end" direction="row">
            <Anchor
              margin={{ top: 'small' }}
              color="black"
              size="large"
              href="#"
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
