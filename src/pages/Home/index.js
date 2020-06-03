import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';

const Home = () => {
  return (
    <Layout
      background="/img/hack-shack-home-background.png"
      style={{ position: 'relative' }}
    >
      <Box style={{ position: 'absolute', top: '0px', left: '30%' }}>
        <Box direction="column" align="center" style={{ position: 'relative' }}>
          <Image
            fit="cover"
            src="/img/hack-shack-dve-logo.svg"
            alt="Hack Shack"
          />
          <Box
            style={{
              width: '730px',
              transform: 'rotate(-10deg)',
              position: 'absolute',
              top: '382px',
              left: '37%',
            }}
            align="start"
            gap="large"
          >
            <Text size="xxlarge">
              Welcome to the underbelly of HPE Discover, welcome to the Dev
              HackShack. Events, talks, and games for the folks that make the
              awesome possible. Come on in and see who’s home!
            </Text>
          </Box>
          <Box
            align="center"
            style={{
              transform: 'rotate(-10deg)',
              position: 'absolute',
              top: '624px',
              left: '33%',
            }}
          >
            <ButtonSplit to="https://developer.hpe.com">
              Visit HPE Developer
            </ButtonSplit>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
