import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Button, Heading, Text } from 'grommet';
import PropTypes from 'prop-types';

const VideoList = ({
  desc,
  id,
  presenter,
  role,
  videoLink,
  title,
  setCurrent,
}) => {
  return (
    <Button onClick={() => setCurrent(id)} style={{ textAlign: 'start' }}>
      <Box gap="large" direction="row-responsive">
        <ReactPlayer
          url={videoLink}
          style={{
            maxWidth: '280px',
            minWidth: '280px',
            width: '280px',
            maxHeight: '180px',
            height: '180px',
            zIndex: -10,
          }}
        />

        <Box direction="column">
          <Box>
            <Text>{presenter}</Text>
            <Text>{role}</Text>
          </Box>
          <Heading
            color="text-strong"
            margin={{ top: '0px', bottom: 'small' }}
            level={3}
          >
            {title}
          </Heading>
          <Box>
            <Text color="text-strong" margin={{ bottom: 'large' }} weight={100}>
              {desc}
            </Text>
          </Box>
        </Box>
      </Box>
    </Button>
  );
};

VideoList.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
  role: PropTypes.string,
  videoLink: PropTypes.string,
  presenter: PropTypes.string,
  setCurrent: PropTypes.func,
};

export default VideoList;
