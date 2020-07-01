import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Button, Heading, Text } from 'grommet';
import PropTypes from 'prop-types';

const VideoList = ({
  desc,
  index,
  presenter,
  role,
  videoLink,
  title,
  setCurrent,
}) => {
  return (
    <Box gap="large" direction="row-responsive" justify="center" align="center">
      <ReactPlayer
        url={videoLink}
        style={{
          maxWidth: '280px',
          minWidth: '280px',
          width: '280px',
          maxHeight: '180px',
          height: '180px',
        }}
      />
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
  index: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  role: PropTypes.string,
  videoLink: PropTypes.string,
  presenter: PropTypes.string,
  setCurrent: PropTypes.func,
};

export default VideoList;
