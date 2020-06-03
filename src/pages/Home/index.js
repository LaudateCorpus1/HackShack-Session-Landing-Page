import React from 'react';
import { Box, Text, Image } from 'grommet';
import { Layout, ButtonSplit } from '../../components/index';

const Home = () => {
  return (
    <Layout background="/img/hack-shack-home-background.png">
      <Box
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
        <Box
          style={{
            position: 'absolute',
            top: '-132px',
            right: '27%',
          }}
        >
          <Image
            fit="contain"
            src="/img/hack-shack-dve-logo.svg"
            alt="Hack Shack"
          />
        </Box>
        <Box
          style={{
            transform: 'rotate(-10deg)',
            position: 'absolute',
            top: '219px',
            left: '11%',
            whiteSpace: 'nowrap',
          }}
        >
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
        </Box>
        <Box
          align="center"
          style={{
            transform: 'rotate(-10deg) ',
            position: 'absolute',
            top: '449px',
            left: '5%',
          }}
        >
          <ButtonSplit to="https://developer.hpe.com">
            Visit HPE Developer
          </ButtonSplit>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;

{
  /* <Box
style={{
  position: 'absolute',
  left: '50%',
  top: '190px',
  transform: 'translate(-50%, -50%)',
}}
> */
}
