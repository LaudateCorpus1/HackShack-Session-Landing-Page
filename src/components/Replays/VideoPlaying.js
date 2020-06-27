import React from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Heading, Text, Avatar } from 'grommet';
import PropTypes from 'prop-types';

const CurrentVideo = ({ videolink, avatar, desc, presenter, role, title }) => {
  return (
    <>
      <ReactPlayer controls url={videolink} />
      <Box fill="horizontal" border={{ side: 'bottom' }}>
        <Box direction="column">
          <Box direction="column">
            <Box pad={{ top: 'large' }} gap="small" direction="row">
              {avatar ? (
                <Avatar src={avatar} />
              ) : (
                <Avatar src="/img/SpeakerImages/defaultAvatar.svg" />
              )}
              <Box justify="center">
                <Text>{presenter}</Text>
                <Text>{role}</Text>
              </Box>
            </Box>
            <Heading
              color="text-strong"
              margin={{ vertical: 'small' }}
              level={3}
            >
              {title}
            </Heading>
          </Box>
          <Box>
            <Text color="text-strong" margin={{ bottom: 'large' }}>
              {desc}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

CurrentVideo.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  presenter: PropTypes.string,
  role: PropTypes.string,
  desc: PropTypes.string,
  videolink: PropTypes.string,
};

export default CurrentVideo;
