import React from 'react';
import { Box, Text, Button } from 'grommet';
import { Link } from 'react-router-dom';
import { Validate, FormClose } from 'grommet-icons';

const Success = props => {
  console.log('props in success component', props);
  return (
    <Box
      align="stretch"
      justify="center"
      direction="column"
      round="medium"
      background={{ color: 'background-front' }}
      pad="xsmall"
      fill
    >
      {props && Object.keys(props).length !== 0 ? (
        <Box
          align="center"
          justify="center"
          direction="column"
          margin={{ top: 'large' }}
          gap="small"
          fill={true}
        >
          <Box direction="row" gap="small">
            <Validate color="brand"></Validate>
            <Text>
              Your challenge registration was successful. Please check your
              email for more details.
            </Text>
          </Box>

          <Box
            align="start"
            justify="center"
            direction="row"
            gap="xlarge"
            fill={true}
          >
            <Box align="center" justify="center" basis="1/2" direction="row">
              <Text>
                <strong>Name</strong>
              </Text>
            </Box>
            <Box align="start" justify="start" basis="1/2" direction="row">
              <Text>{props.location.state.name}</Text>
            </Box>
          </Box>

          <Box
            align="start"
            justify="center"
            direction="row"
            gap="xlarge"
            fill={true}
          >
            <Box align="center" justify="center" basis="1/2" direction="row">
              <Text>
                <strong>Company</strong>
              </Text>
            </Box>
            <Box align="start" justify="start" basis="1/2" direction="row">
              <Text>{props.location.state.company}</Text>
            </Box>
          </Box>

          <Box
            align="start"
            justify="center"
            direction="row"
            gap="xlarge"
            fill={true}
          >
            <Box align="center" justify="center" basis="1/2" direction="row">
              <Text>
                <strong>Email</strong>
              </Text>
            </Box>
            <Box align="start" justify="start" basis="1/2" direction="row">
              <Text>{props.location.state.email}</Text>
            </Box>
          </Box>

          <Box
            align="start"
            justify="center"
            direction="row"
            gap="xlarge"
            fill={true}
          >
            <Box align="center" justify="center" basis="1/2" direction="row">
              <Text>
                <strong>Workshop</strong>
              </Text>
            </Box>
            <Box align="start" justify="start" basis="1/2" direction="row">
              <Text>{props.location.state.challenge}</Text>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box direction="row" align="center" justify="center" gap="small">
          <FormClose color="status-critical"></FormClose>
          <Text>
            Your challenge registration was unsuccessful. Please register again.
          </Text>
        </Box>
      )}
      <Box align="center" justify="start" gap="small" pad="medium">
        <Link to="/challenge">
          <Button label="Register More Challenges" primary={true} />
        </Link>
      </Box>
    </Box>
  );
};

export default Success;
