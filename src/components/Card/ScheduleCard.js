import React from 'react';
import { Box, Button, Heading, Text, Avatar } from 'grommet';
import PropTypes from 'prop-types';
import { CardWrapper } from './styles';

const ScheduleCard = ({
  avatar,
  desc,
  id,
  presenter,
  role,
  sessionLink,
  sessionType,
  size,
  title,
}) => {
  let backgroundColor;
  switch (sessionType) {
    case 'Workshop':
      backgroundColor = '#00567acc';
      break;
    case 'Challenge':
      backgroundColor = 'rgba(155, 99, 16, 0.8)';
      break;
    default:
      backgroundColor = 'background';
  }
  return (
    <CardWrapper
      pad="large"
      justify="between"
      background={backgroundColor}
      round="medium"
      overflow="hidden"
    >
      <Box direction="column">
        <Box align="center" justify="between" direction="row">
          <Box
            pad={{ vertical: 'xsmall', horizontal: 'medium' }}
            background="background-contrast"
            round="large"
            alignSelf="center"
          >
            {sessionType}
          </Box>
          <Box direction="row" round="large">
            Session ID: {id}
          </Box>
        </Box>
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
          <Heading margin={{ vertical: 'small' }} level={3}>
            {title}
          </Heading>
        </Box>
        <Box>
          <Text
            margin={{ bottom: 'large' }}
            size={size === 'small' ? 'large' : 'xlarge'}
          >
            {desc}
          </Text>
        </Box>
      </Box>
      <Button
        alignSelf="start"
        href={sessionLink}
        target="_blank"
        rel="noreferrer noopener"
        label={
          <Box pad="xsmall">
            <Text color="text-strong">Learn more</Text>
          </Box>
        }
        secondary
      />
    </CardWrapper>
  );
};

ScheduleCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  avatar: PropTypes.string,
  id: PropTypes.string,
  presenter: PropTypes.string,
  role: PropTypes.string,
  sessionLink: PropTypes.string,
  sessionType: PropTypes.string,
  size: PropTypes.string,
};

export default ScheduleCard;
