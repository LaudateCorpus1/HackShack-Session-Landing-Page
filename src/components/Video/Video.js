import React, { useContext } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Heading, Text, Avatar, ResponsiveContext } from 'grommet';
import PropTypes from 'prop-types';

const Video = ({
  videolink,
  avatar,
  desc,
  presenter,
  role,
  title,
  setCurrent,
  current,
  replaysLength,
}) => {
  const size = useContext(ResponsiveContext);
  const optionsLarge = { width: '640px', height: '380px' };
  const optionsSmall = {
    maxWidth: '280px',
    minWidth: '280px',
    width: '280px',
    maxHeight: '180px',
    height: '180px',
  };
  return (
    <Box>
      <ReactPlayer
        controls
        url={videolink}
        style={size === 'small' ? optionsSmall : optionsLarge}
        onEnded={() => {
          if (current >= replaysLength - 1) {
            setCurrent(0);
          } else {
            setCurrent(current + 1);
          }
        }}
      />
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
    </Box>
  );
};

Video.propTypes = {
  title: PropTypes.string,
  avatar: PropTypes.string,
  presenter: PropTypes.string,
  role: PropTypes.string,
  desc: PropTypes.string,
  videolink: PropTypes.string,
  current: PropTypes.number,
  replaysLength: PropTypes.number,
  setCurrent: PropTypes.func,
};

export default Video;
