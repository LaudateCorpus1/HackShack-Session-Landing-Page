import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Button, Heading, Text } from 'grommet';
import PropTypes from 'prop-types';

const VideoList = ({ desc, presenter, role, videoLink, title }) => {
  return (
    <Box pad="medium" justify="between" gap="large" direction="row">
      <Button>
        <ReactPlayer width="294px" height="250px" url={videoLink} />
      </Button>
      <Box pad={{ top: 'medium' }} direction="column">
        <Box justify="center">
          <Text>{presenter}</Text>
          <Text>{role}</Text>
        </Box>
        <Heading color="text-strong" margin={{ vertical: 'small' }} level={3}>
          {title}
        </Heading>
        <Box>
          <Text color="text-strong" margin={{ bottom: 'large' }}>
            {desc}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

VideoList.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  role: PropTypes.string,
  videoLink: PropTypes.string,
  presenter: PropTypes.string,
};

export default VideoList;
