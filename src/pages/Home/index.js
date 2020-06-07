import React, { useContext } from 'react';
import { Box, Text, Image, ResponsiveContext } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';
import { MainWrapper, LogoWrapper, TextWrapper, ButtonWrapper } from './styles';

const DesktopLayout = () => (
  <MainWrapper align="center" width="100%" height="100%">
    <LogoWrapper>
      <Image
        fit="contain"
        src="/img/hack-shack-dve-logo.svg"
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
          Welcome to the underbelly of HPE Discover,
        </Text>
        <Text size="medium" color="#FFFFFF">
          welcome to the Dev HackShack. Events, talks, and
        </Text>
        <Text size="medium" color="#FFFFFF">
          games for the folks that make the awesome
        </Text>
        <Text size="medium" color="#FFFFFF">
          possible. Come on in and see who’s home!
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
