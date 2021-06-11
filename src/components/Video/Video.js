import React, { useState, useContext } from 'react';
import ReactPlayer from 'react-player/vimeo';
import { Box, Heading, Text, Avatar, ResponsiveContext, Button } from 'grommet';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { SignupLayer, SuccessLayer } from '../Card/ScheduleCard';
import Share from '../Share';

const Video = ({
  videolink,
  avatar,
  desc,
  presenter,
  role,
  title,
  id,
  setCurrent,
  current,
  replaysLength,
  autoplay,
  notebook,
  sessionType,
  location,
  capacity,
  workshopTitle,
  replayId
}) => {
  const [signupLayer, setSignupLayer] = useState(false);
  const [successLayer, setSuccessLayer] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: workshopTitle,
    notebook,
    sessionType: sessionType,
    location: location,
    termsAndConditions: false,
    proxy: 'hackshack',
  });
  const resetFormData = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      title: workshopTitle,
      notebook,
      sessionType: sessionType,
      location: location,
      termsAndConditions: false,
      proxy: 'hackshack',
    });
  };
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
      <Heading
        color="text-strong"
        margin={{ bottom: "medium" }}
        level={3}
      >
        {title}
      </Heading>
      <ReactPlayer
        controls
        url={videolink}
        playing={autoplay}
        style={size === 'small' ? optionsSmall : optionsLarge}
        onEnded={() => {
          if (current >= replaysLength - 1) {
            setCurrent(0);
          } else {
            setCurrent(id + 1);
          }
        }}
      />
      <Box fill="horizontal" border={{ side: 'bottom' }}>
        <Box direction="column">
          <Box direction="column">
            <Box
              direction={size === 'small' ? 'column' : 'row'}
              justify="between"
              margin={{ vertical: "small" }}
              width={size === "small" ? '100%' : "640px"}
            >
              {
                notebook &&
                sessionType &&
                location &&
                <Box width={capacity === 0 ? '350px' : '110px'}>
                  <Button
                    size="small"
                    onClick={() => setSignupLayer(true)}
                    margin={{ vertical: size === 'large' ? '0px' : 'small' }}
                    disabled={capacity === 0}
                    label={
                      <Text color="text-strong" size="large">
                        {capacity === 0
                          ? 'Currently full, please try again later'
                          : 'Register'}
                      </Text>
                    }
                    primary
                  >
                  </Button>
                </Box>
              }
              <Box
                direction="row"
                alignSelf="start"
                justify="evenly"
              >
                <Share replayId={replayId} />
              </Box>
            </Box>
            <Box
              direction="row"
              justify="between"
              margin={{bottom: 'small'}}
            >
              <Box pad={{ vertical: 'small' }} gap="small" direction="row">
                {avatar ? (
                  <Avatar src={avatar} />
                ) : (
                  <Avatar src="/img/SpeakerImages/defaultAvatar.svg" />
                )}
                <Box justify="center">
                  <Text
                    weight="bold"
                    size="large"
                  >
                    {presenter}
                  </Text>
                  <Text>{role}</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          {signupLayer && (
            <SignupLayer
              formData={formData}
              reset={resetFormData}
              setFormData={setFormData}
              setLayer={setSignupLayer}
              setSuccess={setSuccessLayer}
              title={title}
              size={size}
              sessionType={sessionType}
            />
          )}
          {successLayer && (
            <SuccessLayer
              setLayer={setSuccessLayer}
              name={formData.name}
              size={size}
              title={title}
              reset={resetFormData}
              sessionType={sessionType}
            />
          )}
          <Box gap="small">
            <Text color="text-strong" size="22px">
              {desc}
            </Text>
            <Text color="text-strong" margin={{ bottom: 'large' }} size="22px">
              Try it out for yourself. Get some real, hands-on experience by{' '}
              <span style={{ color: '#FFF', textDecoration: 'underline', cursor: 'pointer' }} color="white" onClick={() => setSignupLayer(true)} to=''>
                registering for this Workshop-on-Demand.
              </span>
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
  id: PropTypes.number,
  setCurrent: PropTypes.func,
};

export default Video;
