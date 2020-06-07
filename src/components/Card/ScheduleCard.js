import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Heading, Text, Avatar, ResponsiveContext } from 'grommet';

const ScheduleCard = ({
  avatar,
  role,
  sessionType,
  presenter,
  title,
  desc,
  id,
}) => {
  const size = useContext(ResponsiveContext);
  return (
    <Box
      pad="large"
      justify="between"
      background={sessionType === 'Workshop' ? '#00567acc' : 'background'}
      style={{
        minHeight: '510px',
        minWidth: '366px',
        maxHeight: '694px',
        maxWidth: '576px',
      }}
      round="small"
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
        <Box>
          <Heading
            margin={{ vertical: 'small' }}
            level={size === 'small' ? 3 : 2}
          >
            {title}
          </Heading>
          <Text size={size === 'small' ? 'large' : 'xlarge'}>{desc}</Text>
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
      />
    </Box>
  );
};

ScheduleCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ScheduleCard;
