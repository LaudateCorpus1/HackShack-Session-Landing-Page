import React from 'react';
import { Box, Button, Heading, Text, Avatar } from 'grommet';
import PropTypes from 'prop-types';
import { StyledCard } from './styles';

const ScheduleCard = ({
  avatar,
  desc,
  id,
  presenter,
  role,
  sessionType,
  size,
  title,
}) => {
  return (
    <StyledCard
      pad="large"
      justify="between"
      background={sessionType === 'Workshop' ? '#00567acc' : 'background'}
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
              <Avatar src="/img/defaultAvatar.svg" />
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
        href="https://content.attend.hpe.com/go/agendabuilder.sessions/?l=1043&locale=en_US"
        target="_blank"
        label={
          <Box pad="xsmall">
            <Text color="text-strong">Learn more</Text>
          </Box>
        }
        secondary
      />
    </StyledCard>
  );
};

ScheduleCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ScheduleCard;
