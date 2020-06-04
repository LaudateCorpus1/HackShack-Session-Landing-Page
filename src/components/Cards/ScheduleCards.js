import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Avatar } from 'grommet';

export const ScheduleCards = ({
  avatar,
  role,
  sessionType,
  presenter,
  title,
  desc,
  id,
}) => {
  return (
    <Box
      pad="large"
      background={sessionType === 'Workshop' ? '#00567acc' : 'background'}
      width="576px"
      round="small"
      overflow="hidden"
    >
      <Box
        align="center"
        fill="horizontal"
        flex={false}
        justify="between"
        direction="row"
      >
        <Box
          pad={{ vertical: 'xsmall', horizontal: 'medium' }}
          background="background-contrast"
          round="large"
          alignSelf="center"
        >
          {' '}
          {sessionType}
        </Box>
        <Box direction="row" round="large">
          {' '}
          Session ID: {id}
        </Box>
      </Box>
      <Box fill justify="evenly">
        <Box pad={{ top: 'large' }} gap="small" direction="row">
          {avatar && avatar ? (
            <Avatar src={avatar} />
          ) : (
            <Avatar src="/img/defaultAvatar.svg" />
          )}
          <Box justify="center">
            <Text>{presenter}</Text>
            <Text>{role}</Text>
          </Box>
        </Box>
        <Box>
          <Heading margin={{ vertical: 'small' }} level={2}>
            {title}
          </Heading>
          <Text size="xlarge">{desc}</Text>
        </Box>
      </Box>
      <Button
        margin={{ top: 'medium', bottom: 'small' }}
        alignSelf="start"
        href="https://content.attend.hpe.com/go/agendabuilder.sessions/?l=1043&locale=en_US"
        target="_blank"
        label={
          <Box pad="xsmall">
            <Text color="text-strong">Learn more</Text>
          </Box>
        }
        secondary
      ></Button>
    </Box>
  );
};

ScheduleCards.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  label: PropTypes.string,
  desc: PropTypes.string,
};
