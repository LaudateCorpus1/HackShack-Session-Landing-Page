import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';
import { MainWrapper, LogoWrapper, TextWrapper, ButtonWrapper } from './styles';

const Home = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <MainWrapper
        align="center"
        style={{
          position: 'relative',
          minWidth: '800px',
          maxWidth: '800px',
          left: '50%',
          right: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        width="100%"
        height="100%"
      >
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
              Welcome to the underbelly of HPE Discover,
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              welcome to the Dev HackShack. Events, talks,
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              and games for the folks that make the awesome
            </Text>
            <Text size="xxlarge" color="#FFFFFF">
              possible. Come on in and see who’s home!
            </Text>
          </Box>
        </TextWrapper>
        <ButtonWrapper>
          <ButtonSplit to="https://developer.hpe.com">
            Visit HPE Developer
          </ButtonSplit>
        </ButtonWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default Home;
